// ===================================================================
// STORAGE & PROGRESS MANAGEMENT (localStorage, Spaced Repetition)
// ===================================================================

const STORAGE_KEY = 'deutsch_app_state_v1';

const defaultState = {
  currentLevel: 'A1',
  activeLessonId: 'a1-01',
  completedLessons: [], // ['a1-01', ...]
  inProgressLessons: [], // ['a1-02', ...]
  lessonScores: {}, // { 'a1-01': { correct: 11, total: 12, firstAttemptCorrect: 10 } }
  repeatMistakes: [], // [{ id, lessonId, question, exercise, timestamp }]
  dictionary: [], // [{ id, de, article, plural, ru, level, interval: 1, repetitions: 0, nextReview: Date.now() }]
  activityLog: [], // [{ timestamp, type: 'lesson'|'vocab'|'builder', title }]
  stats: {
    totalExercisesAnswered: 0,
    totalCorrect: 0,
    streakDays: 1,
    lastActiveDate: new Date().toISOString().split('T')[0]
  }
};

window.StorageManager = {
  load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return JSON.parse(JSON.stringify(defaultState));
      const parsed = JSON.parse(data);
      // Ensure all fields exist
      return Object.assign({}, defaultState, parsed);
    } catch (e) {
      console.error('Ошибка загрузки данных:', e);
      return JSON.parse(JSON.stringify(defaultState));
    }
  },

  save(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Ошибка сохранения данных:', e);
    }
  },

  getState() {
    return this.load();
  },

  update(updaterFn) {
    const state = this.load();
    const updated = updaterFn(state) || state;
    this.save(updated);
    return updated;
  },

  // ---------------------------------------------
  // Lesson Progress
  // ---------------------------------------------
  completeLesson(lessonId, correct, total) {
    return this.update(state => {
      if (!state.completedLessons.includes(lessonId)) {
        state.completedLessons.push(lessonId);
      }
      // Remove from in-progress if completed
      state.inProgressLessons = state.inProgressLessons.filter(id => id !== lessonId);

      const prevScore = state.lessonScores[lessonId];
      state.lessonScores[lessonId] = {
        correct,
        total,
        firstAttemptCorrect: prevScore ? prevScore.firstAttemptCorrect : correct,
        completedAt: new Date().toISOString()
      };

      state.stats.totalExercisesAnswered += total;
      state.stats.totalCorrect += correct;

      state.activityLog.unshift({
        timestamp: new Date().toISOString(),
        type: 'lesson',
        title: `Завершён урок ${lessonId.toUpperCase()}: ${correct}/${total}`
      });

      return state;
    });
  },

  startLesson(lessonId) {
    return this.update(state => {
      state.activeLessonId = lessonId;
      if (!state.completedLessons.includes(lessonId) && !state.inProgressLessons.includes(lessonId)) {
        state.inProgressLessons.push(lessonId);
      }
      return state;
    });
  },

  isLessonCompleted(lessonId) {
    const state = this.load();
    return state.completedLessons.includes(lessonId);
  },

  isLessonInProgress(lessonId) {
    const state = this.load();
    return state.inProgressLessons.includes(lessonId);
  },

  getLessonScore(lessonId) {
    const state = this.load();
    return state.lessonScores[lessonId] || null;
  },

  // ---------------------------------------------
  // Mistakes & Repetition
  // ---------------------------------------------
  addMistake(exercise, lessonId) {
    return this.update(state => {
      // Don't add duplicates
      const exists = state.repeatMistakes.some(m => m.exercise.question === exercise.question);
      if (!exists) {
        state.repeatMistakes.push({
          id: 'mistake_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
          lessonId,
          exercise,
          timestamp: new Date().toISOString()
        });
      }
      return state;
    });
  },

  removeMistake(mistakeId) {
    return this.update(state => {
      state.repeatMistakes = state.repeatMistakes.filter(m => m.id !== mistakeId);
      return state;
    });
  },

  getMistakes() {
    return this.load().repeatMistakes;
  },

  // ---------------------------------------------
  // Dictionary & Spaced Repetition
  // ---------------------------------------------
  addWordToDictionary(wordObj) {
    return this.update(state => {
      const exists = state.dictionary.some(w => w.de.toLowerCase() === wordObj.de.toLowerCase());
      if (!exists) {
        state.dictionary.push({
          id: 'word_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
          de: wordObj.de,
          article: wordObj.article || null,
          plural: wordObj.plural || null,
          ru: wordObj.ru,
          level: wordObj.level || 'A1',
          exampleDe: wordObj.exampleDe || '',
          exampleRu: wordObj.exampleRu || '',
          interval: 1, // days
          repetitions: 0,
          nextReview: Date.now(), // due immediately
          lastReviewed: null,
          status: 'learning' // 'learning' | 'mastered'
        });
      }
      return state;
    });
  },

  addMultipleWords(wordsArray) {
    return this.update(state => {
      wordsArray.forEach(wordObj => {
        const exists = state.dictionary.some(w => w.de.toLowerCase() === wordObj.de.toLowerCase());
        if (!exists) {
          state.dictionary.push({
            id: 'word_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
            de: wordObj.de,
            article: wordObj.article || null,
            plural: wordObj.plural || null,
            ru: wordObj.ru,
            level: wordObj.level || 'A1',
            exampleDe: wordObj.exampleDe || '',
            exampleRu: wordObj.exampleRu || '',
            interval: 1,
            repetitions: 0,
            nextReview: Date.now(),
            lastReviewed: null,
            status: 'learning'
          });
        }
      });
      return state;
    });
  },

  reviewWord(wordId, quality) {
    // quality: 'again' (не помню), 'hard' (трудно), 'good' (помню)
    return this.update(state => {
      const word = state.dictionary.find(w => w.id === wordId);
      if (!word) return state;

      const now = Date.now();
      const ONE_DAY = 24 * 60 * 60 * 1000;

      if (quality === 'again') {
        word.interval = 1;
        word.repetitions = 0;
        word.nextReview = now + (10 * 60 * 1000); // 10 minutes later
      } else if (quality === 'hard') {
        word.interval = Math.max(1, Math.round(word.interval * 1.3));
        word.repetitions += 1;
        word.nextReview = now + (word.interval * ONE_DAY);
      } else if (quality === 'good') {
        if (word.repetitions === 0) {
          word.interval = 1;
        } else if (word.repetitions === 1) {
          word.interval = 3;
        } else {
          word.interval = Math.round(word.interval * 2.5);
        }
        word.repetitions += 1;
        word.nextReview = now + (word.interval * ONE_DAY);
      }

      word.lastReviewed = now;
      if (word.repetitions >= 4 && word.interval >= 14) {
        word.status = 'mastered';
      }

      return state;
    });
  },

  getDueWords() {
    const state = this.load();
    const now = Date.now();
    return state.dictionary.filter(w => w.nextReview <= now);
  },

  getAllDictionaryWords() {
    return this.load().dictionary;
  },

  // ---------------------------------------------
  // Data Export & Import
  // ---------------------------------------------
  exportJSON() {
    const state = this.load();
    const jsonStr = JSON.stringify(state, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `deutsch_lernen_progress_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  },

  importJSON(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed || typeof parsed !== 'object') {
        throw new Error('Неверный формат данных');
      }
      if (!Array.isArray(parsed.completedLessons)) {
        throw new Error('Отсутствует поле completedLessons');
      }
      const merged = Object.assign({}, defaultState, parsed);
      this.save(merged);
      return { success: true };
    } catch (e) {
      return { success: false, error: e.message };
    }
  },

  resetProgress() {
    localStorage.removeItem(STORAGE_KEY);
    return JSON.parse(JSON.stringify(defaultState));
  }
};
