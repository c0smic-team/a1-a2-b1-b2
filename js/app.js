// ===================================================================
// DEUTSCH LERNEN APP — CORE APPLICATION
// ===================================================================

(function() {
  'use strict';

  // Combine all loaded lessons into one lookup
  function getAllLessons() {
    const list = [];
    if (window.LESSONS_1_4) list.push(...window.LESSONS_1_4);
    if (window.LESSONS_5_8) list.push(...window.LESSONS_5_8);
    if (window.LESSONS_9_12) list.push(...window.LESSONS_9_12);
    return list;
  }

  // App State
  const App = {
    currentRoute: 'home',
    activeLevel: 'A1',
    activeLessonId: null,
    searchQuery: '',
    exerciseState: {
      lessonId: null,
      exercises: [],
      currentIndex: 0,
      userAnswers: [],
      score: 0,
      isReviewMode: false
    },
    vocabState: {
      activeSetId: 'vocab-01',
      exerciseIndex: 0,
      showTranslations: true
    },
    flashcardState: {
      filter: 'due', // 'due' | 'all' | 'learning' | 'mastered'
      currentIndex: 0,
      isFlipped: false,
      direction: 'de-ru' // 'de-ru' | 'ru-de'
    },
    builderState: {
      activeChainId: 'chain-01',
      currentStep: 1,
      showHint: false
    },

    init() {
      // Initialize dictionary with words from vocabulary sets if empty
      const state = StorageManager.getState();
      if (state.dictionary.length === 0 && window.VOCABULARY_SETS) {
        window.VOCABULARY_SETS.forEach(set => {
          set.words.forEach(w => {
            StorageManager.addWordToDictionary({
              de: w.de,
              article: w.article,
              plural: w.plural,
              ru: w.ru,
              level: set.level,
              exampleDe: w.exampleDe,
              exampleRu: w.exampleRu
            });
          });
        });
      }

      this.bindEvents();
      this.handleRoute();
    },

    bindEvents() {
      // Navigation clicks
      document.querySelectorAll('[data-route]').forEach(el => {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          const route = el.getAttribute('data-route');
          const param = el.getAttribute('data-param');
          this.navigate(route, param);
          this.closeMobileMenu();
        });
      });

      // Mobile menu toggle
      const hamburger = document.getElementById('hamburgerBtn');
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('overlay');
      if (hamburger && sidebar && overlay) {
        hamburger.addEventListener('click', () => {
          sidebar.classList.toggle('open');
          overlay.classList.toggle('active');
        });
        overlay.addEventListener('click', () => {
          this.closeMobileMenu();
        });
      }

      // Hash change router
      window.addEventListener('hashchange', () => {
        this.handleRoute();
      });
    },

    closeMobileMenu() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('overlay');
      if (sidebar) sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('active');
    },

    navigate(route, param = null) {
      if (param) {
        window.location.hash = `#${route}/${param}`;
      } else {
        window.location.hash = `#${route}`;
      }
    },

    handleRoute() {
      const hash = window.location.hash.slice(1) || 'home';
      const parts = hash.split('/');
      const route = parts[0];
      const param = parts[1];

      this.currentRoute = route;

      // Update sidebar active link
      document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.toggle('active', el.getAttribute('data-route') === route);
      });

      // Update due words badge
      this.updateBadges();

      const main = document.getElementById('mainApp');
      if (!main) return;

      switch(route) {
        case 'home':
          this.renderHome(main);
          break;
        case 'curriculum':
          this.renderCurriculum(main, param || 'A1');
          break;
        case 'lesson':
          this.renderLesson(main, param);
          break;
        case 'exercises':
          this.renderExercises(main, param);
          break;
        case 'texts':
          this.renderTexts(main, param || 'vocab-01');
          break;
        case 'dictionary':
          this.renderDictionary(main);
          break;
        case 'builder':
          this.renderSentenceBuilder(main, param || 'chain-01');
          break;
        case 'progress':
          this.renderProgress(main);
          break;
        default:
          this.renderHome(main);
      }

      window.scrollTo(0, 0);
    },

    updateBadges() {
      const dueCount = StorageManager.getDueWords().length;
      const dictBadge = document.getElementById('dictDueBadge');
      if (dictBadge) {
        dictBadge.textContent = dueCount;
        dictBadge.style.display = dueCount > 0 ? 'inline-block' : 'none';
      }

      const mistakesCount = StorageManager.getMistakes().length;
      const progressBadge = document.getElementById('progressMistakesBadge');
      if (progressBadge) {
        progressBadge.textContent = mistakesCount;
        progressBadge.style.display = mistakesCount > 0 ? 'inline-block' : 'none';
      }
    },

    showToast(message, type = 'success') {
      const container = document.getElementById('toastContainer');
      if (!container) return;
      const toast = document.createElement('div');
      toast.className = `toast ${type}`;
      toast.innerHTML = `<span>${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span> <span>${message}</span>`;
      container.appendChild(toast);
      setTimeout(() => {
        toast.remove();
      }, 3500);
    },

    speak(text) {
      if (!('speechSynthesis' in window)) {
        this.showToast('Синтез речи не поддерживается в этом браузере', 'info');
        return;
      }
      window.speechSynthesis.cancel();
      // Clean up markdown stars
      const cleanText = text.replace(/\*\*/g, '').replace(/_/g, '');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'de-DE';
      utterance.rate = 0.9; // Slightly slower for language learners

      // Pick German voice if available
      const voices = window.speechSynthesis.getVoices();
      const deVoice = voices.find(v => v.lang.startsWith('de'));
      if (deVoice) utterance.voice = deVoice;

      window.speechSynthesis.speak(utterance);
    },

    // ===================================================================
    // 1. HOME VIEW (DASHBOARD)
    // ===================================================================
    renderHome(container) {
      const state = StorageManager.getState();
      const allLessons = getAllLessons();
      const completedCount = state.completedLessons.length;
      const totalAvailable = allLessons.length;
      const accuracy = state.stats.totalExercisesAnswered > 0
        ? Math.round((state.stats.totalCorrect / state.stats.totalExercisesAnswered) * 100)
        : 0;
      const dueWordsCount = StorageManager.getDueWords().length;
      const mistakesCount = state.repeatMistakes.length;

      // Recommended next step
      let nextLesson = allLessons.find(l => !state.completedLessons.includes(l.id)) || allLessons[0];

      container.innerHTML = `
        <div class="page-content">
          <!-- Welcome Banner -->
          <div class="card mb-2" style="background: linear-gradient(135deg, var(--green-50), #ffffff); border-left: 4px solid var(--green-600);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
              <div>
                <span class="badge badge-green mb-1">🇩🇪 Цель: Goethe-Zertifikat B1</span>
                <h1 style="font-size: 1.6rem; font-weight: 800; color: var(--green-800); margin-bottom: 0.5rem;">
                  Willkommen zurück!
                </h1>
                <p style="color: var(--text-secondary); max-width: 600px; font-size: 0.95rem;">
                  Интерактивный учебник и тренажёр от уровня A1 до B1. Изучайте грамматику простыми словами, читайте тексты и учитесь уверенно строить предложения.
                </p>
              </div>
              <div>
                <a href="#lesson/${nextLesson ? nextLesson.id : 'a1-01'}" class="btn btn-primary btn-lg">
                  ▶ ${completedCount === 0 ? 'Начать первый урок' : 'Продолжить обучение'}
                </a>
              </div>
            </div>
          </div>

          <!-- Quick Stats Grid -->
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-icon" style="background: var(--green-100); color: var(--green-700);">📚</div>
              <div class="stat-value">${completedCount} <span style="font-size: 1rem; color: var(--text-muted); font-weight: 500;">/ ${totalAvailable}</span></div>
              <div class="stat-label">Завершено уроков A1</div>
            </div>

            <div class="stat-card">
              <div class="stat-icon" style="background: var(--blue-100); color: var(--blue-600);">🎯</div>
              <div class="stat-value">${accuracy}%</div>
              <div class="stat-label">Точность ответов</div>
            </div>

            <div class="stat-card">
              <div class="stat-icon" style="background: var(--amber-100); color: var(--amber-600);">⏰</div>
              <div class="stat-value">${dueWordsCount}</div>
              <div class="stat-label">Слов к повторению</div>
            </div>

            <div class="stat-card">
              <div class="stat-icon" style="background: var(--red-100); color: var(--red-600);">🔄</div>
              <div class="stat-value">${mistakesCount}</div>
              <div class="stat-label">Ошибок для отработки</div>
            </div>
          </div>

          <!-- Recommended Next Step Card -->
          <div class="card mb-2">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
              <h2 style="font-size: 1.15rem; font-weight: 700;">📌 Рекомендуемый следующий шаг</h2>
              <span class="badge ${StorageManager.isLessonCompleted(nextLesson.id) ? 'badge-green' : 'badge-blue'}">
                ${StorageManager.isLessonCompleted(nextLesson.id) ? 'Повторение' : 'Новая тема'}
              </span>
            </div>
            <div style="background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.25rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
              <div>
                <div style="font-weight: 700; font-size: 1.1rem; color: var(--green-800);">
                  ${nextLesson.order}. ${nextLesson.title}
                </div>
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.2rem;">
                  ${nextLesson.titleDe}
                </div>
                <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.5rem; max-width: 550px;">
                  ${nextLesson.description}
                </p>
              </div>
              <a href="#lesson/${nextLesson.id}" class="btn btn-primary">
                Перейти к уроку →
              </a>
            </div>
          </div>

          <!-- Fast Access Tiles -->
          <h2 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 1rem;">⚡ Быстрый доступ к тренировкам</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem;">
            <a href="#curriculum/A1" class="card card-clickable" style="text-decoration: none; color: inherit;">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">📖</div>
              <div style="font-weight: 700; font-size: 1rem;">Программа курса A1–B1</div>
              <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.3rem;">Все уровни и темы в методическом порядке</div>
            </a>

            <a href="#texts" class="card card-clickable" style="text-decoration: none; color: inherit;">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">📝</div>
              <div style="font-weight: 700; font-size: 1rem;">Слова через тексты</div>
              <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.3rem;">5 связных историй по 13 ключевых слов</div>
            </a>

            <a href="#builder" class="card card-clickable" style="text-decoration: none; color: inherit;">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">🏗</div>
              <div style="font-weight: 700; font-size: 1rem;">Тренажёр предложений</div>
              <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.3rem;">Пошаговое расширение предложений и порядок слов</div>
            </a>

            <a href="#dictionary" class="card card-clickable" style="text-decoration: none; color: inherit;">
              <div style="font-size: 2rem; margin-bottom: 0.5rem;">🃏</div>
              <div style="font-weight: 700; font-size: 1rem;">Мой словарь (интервалы)</div>
              <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.3rem;">Повторение слов по системе интервалов</div>
            </a>
          </div>
        </div>
      `;
    },

    // ===================================================================
    // 2. CURRICULUM VIEW (A1, A2, B1)
    // ===================================================================
    renderCurriculum(container, selectedLevel = 'A1') {
      const curriculum = window.CURRICULUM;
      const allLessons = getAllLessons();
      const state = StorageManager.getState();

      const levelData = curriculum.levels.find(l => l.id === selectedLevel) || curriculum.levels[0];

      container.innerHTML = `
        <div class="page-content">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
            <div>
              <h1 style="font-size: 1.5rem; font-weight: 800;">Программа обучения A1–B1</h1>
              <p style="color: var(--text-secondary); font-size: 0.95rem;">
                Логичный путь от базовых артиклей до связной речи и подготовки к B1
              </p>
            </div>
            <div class="search-box" style="margin-bottom: 0; max-width: 300px; width: 100%;">
              <span>🔍</span>
              <input type="text" id="curriculumSearchInput" placeholder="Поиск тем и правил..." value="${this.searchQuery}">
            </div>
          </div>

          <!-- Level Tabs -->
          <div class="tabs">
            ${curriculum.levels.map(lvl => `
              <button class="tab ${lvl.id === selectedLevel ? 'active' : ''}" data-level-tab="${lvl.id}">
                ${lvl.icon} ${lvl.id} — ${lvl.titleDe}
              </button>
            `).join('')}
          </div>

          <!-- Level Description Card -->
          <div class="card mb-2" style="background: var(--bg-sidebar); border-left: 3px solid ${levelData.color};">
            <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.3rem;">${levelData.title}</h3>
            <p style="font-size: 0.9rem; color: var(--text-secondary);">${levelData.description}</p>
          </div>

          <!-- Topics List -->
          <div id="curriculumGroupsContainer">
            ${this.renderCurriculumGroups(levelData, allLessons, state)}
          </div>
        </div>
      `;

      // Event listeners for tabs
      container.querySelectorAll('[data-level-tab]').forEach(tab => {
        tab.addEventListener('click', () => {
          const lvl = tab.getAttribute('data-level-tab');
          this.navigate('curriculum', lvl);
        });
      });

      // Search input handler
      const searchInput = container.querySelector('#curriculumSearchInput');
      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          this.searchQuery = e.target.value.toLowerCase().trim();
          const groupsContainer = container.querySelector('#curriculumGroupsContainer');
          if (groupsContainer) {
            groupsContainer.innerHTML = this.renderCurriculumGroups(levelData, allLessons, state, this.searchQuery);
          }
        });
      }
    },

    renderCurriculumGroups(levelData, allLessons, state, search = '') {
      let html = '';

      levelData.groups.forEach(group => {
        const filteredTopics = group.topics.filter(t => {
          if (!search) return true;
          return t.title.toLowerCase().includes(search) || t.titleDe.toLowerCase().includes(search);
        });

        if (filteredTopics.length === 0) return;

        html += `
          <div class="topic-group">
            <div class="topic-group-header">
              <span class="topic-group-icon">${group.icon}</span>
              <span class="topic-group-title">${group.title}</span>
            </div>
            <div class="lesson-grid">
              ${filteredTopics.map(topic => {
                const lesson = allLessons.find(l => l.id === topic.id);
                const isAvailable = !!lesson;
                const isCompleted = state.completedLessons.includes(topic.id);
                const isInProgress = state.inProgressLessons.includes(topic.id);
                const score = state.lessonScores[topic.id];

                let statusBadge = '<span class="badge badge-gray">Скоро</span>';
                let cardClass = 'lesson-card coming';

                if (isAvailable) {
                  if (isCompleted) {
                    statusBadge = `<span class="badge badge-green">✓ Завершён ${score ? `(${score.correct}/${score.total})` : ''}</span>`;
                    cardClass = 'lesson-card completed';
                  } else if (isInProgress) {
                    statusBadge = '<span class="badge badge-blue">В процессе</span>';
                    cardClass = 'lesson-card in-progress';
                  } else {
                    statusBadge = '<span class="badge badge-gray">Не начат</span>';
                    cardClass = 'lesson-card';
                  }
                }

                return `
                  <div class="${cardClass}" ${isAvailable ? `onclick="window.location.hash='#lesson/${topic.id}'"` : ''}>
                    <div class="lesson-status-icon">
                      ${isCompleted ? '✓' : isAvailable ? '▶' : '⏳'}
                    </div>
                    <div class="lesson-info">
                      <div class="lesson-title">${topic.title}</div>
                      <div class="lesson-subtitle">${topic.titleDe}</div>
                    </div>
                    <div>
                      ${statusBadge}
                    </div>
                    ${isAvailable ? '<div class="lesson-arrow">→</div>' : ''}
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      });

      if (!html) {
        html = `
          <div class="empty-state">
            <div class="empty-icon">🔍</div>
            <h3>Ничего не найдено</h3>
            <p>Попробуйте изменить поисковый запрос</p>
          </div>
        `;
      }

      return html;
    },

    // ===================================================================
    // 3. LESSON DETAIL VIEW
    // ===================================================================
    renderLesson(container, lessonId) {
      const allLessons = getAllLessons();
      const lesson = allLessons.find(l => l.id === lessonId);

      if (!lesson) {
        container.innerHTML = `
          <div class="page-content">
            <div class="empty-state">
              <div class="empty-icon">⚠️</div>
              <h3>Урок не найден</h3>
              <p>Возможно, этот урок ещё находится в разработке.</p>
              <a href="#curriculum/A1" class="btn btn-primary mt-1">Вернуться к программе</a>
            </div>
          </div>
        `;
        return;
      }

      StorageManager.startLesson(lessonId);
      const isCompleted = StorageManager.isLessonCompleted(lessonId);
      const score = StorageManager.getLessonScore(lessonId);

      container.innerHTML = `
        <div class="page-content lesson-page">
          <!-- Back button and breadcrumb -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
            <a href="#curriculum/${lesson.level}" class="btn btn-secondary btn-sm">
              ← Назад к программе (${lesson.level})
            </a>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <span class="badge ${isCompleted ? 'badge-green' : 'badge-blue'}">
                ${isCompleted ? `✓ Пройден (${score ? `${score.correct}/${score.total}` : ''})` : 'В процессе'}
              </span>
              <a href="#exercises/${lesson.id}" class="btn btn-primary btn-sm">
                Практика (${lesson.exercises ? lesson.exercises.length : 10} заданий) ▶
              </a>
            </div>
          </div>

          <!-- Lesson Header -->
          <div style="margin-bottom: 2rem;">
            <div style="font-size: 0.85rem; font-weight: 700; color: var(--green-600); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.3rem;">
              Урок ${lesson.order} &bull; ${lesson.level}
            </div>
            <h1 style="font-size: 1.8rem; font-weight: 800; line-height: 1.25; margin-bottom: 0.3rem;">
              ${lesson.title}
            </h1>
            <div style="font-size: 1rem; color: var(--text-muted); font-style: italic;">
              ${lesson.titleDe}
            </div>
          </div>

          <!-- 1. Goal Box -->
          <div class="lesson-section">
            <div class="lesson-section-title">🎯 Цель урока</div>
            <div class="goal-box">
              ${lesson.goal}
            </div>
          </div>

          <!-- 2. Grammar Explanation -->
          <div class="lesson-section">
            <div class="lesson-section-title">📖 Понятное объяснение</div>
            <div class="explanation-box">
              ${this.formatMarkdown(lesson.explanation)}
            </div>
          </div>

          <!-- 3. Formula / Pattern -->
          ${lesson.formula ? `
            <div class="lesson-section">
              <div class="lesson-section-title">📐 Формула конструкции</div>
              <div class="formula-box">
                ${lesson.formula}
              </div>
            </div>
          ` : ''}

          <!-- 4. Forms Table -->
          ${lesson.formsTable ? `
            <div class="lesson-section">
              <div class="lesson-section-title">📊 Таблица форм</div>
              <div style="overflow-x: auto;">
                <table class="grammar-table">
                  <thead>
                    <tr>
                      ${lesson.formsTable.headers.map(h => `<th>${h}</th>`).join('')}
                    </tr>
                  </thead>
                  <tbody>
                    ${lesson.formsTable.rows.map(row => `
                      <tr>
                        ${row.map((cell, idx) => `
                          <td class="${idx === 1 ? 'highlight' : ''}">${cell}</td>
                        `).join('')}
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          ` : ''}

          <!-- 5. Natural Examples -->
          <div class="lesson-section">
            <div class="lesson-section-title">💡 Естественные примеры</div>
            <div class="example-list">
              ${lesson.examples.map(ex => `
                <div class="example-item">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <div class="example-de">${this.formatMarkdown(ex.de)}</div>
                    <button class="btn btn-secondary btn-sm" onclick="App.speak('${ex.de.replace(/'/g, "\\'")}')">
                      🔊
                    </button>
                  </div>
                  <div class="example-ru">${ex.ru}</div>
                  ${ex.note ? `<div class="example-note">${ex.note}</div>` : ''}
                </div>
              `).join('')}
            </div>
          </div>

          <!-- 6. Typical Mistakes -->
          <div class="lesson-section">
            <div class="lesson-section-title">⚠️ Типичные ошибки и как их избегать</div>
            <div class="mistake-list">
              ${lesson.commonMistakes.map(m => `
                <div class="mistake-item">
                  <div class="mistake-wrong">
                    <span>❌</span>
                    <span>${this.formatMarkdown(m.wrong)}</span>
                  </div>
                  <div class="mistake-correct">
                    <span>✅</span>
                    <span>${this.formatMarkdown(m.correct)}</span>
                  </div>
                  <div class="mistake-explanation">
                    <strong>Объяснение:</strong> ${m.explanation}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- 7. Connected Text with Toggleable Translation -->
          ${lesson.connectedText ? `
            <div class="lesson-section">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <div class="lesson-section-title" style="margin-bottom: 0;">
                  📝 Связный текст: ${lesson.connectedText.title}
                </div>
                <button class="toggle-translation" id="toggleTransBtn">
                  <div class="toggle-switch on" id="toggleTransSwitch"></div>
                  <span>Показать перевод</span>
                </button>
              </div>

              <div class="text-container">
                ${lesson.connectedText.sentences.map(s => `
                  <div class="text-sentence">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                      <div class="text-de">${this.formatMarkdown(s.de)}</div>
                      <button class="btn btn-secondary btn-sm" style="padding: 0.2rem 0.5rem;" onclick="App.speak('${s.de.replace(/'/g, "\\'")}')">
                        🔊
                      </button>
                    </div>
                    <div class="text-ru">${s.ru}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- 8. Summary / Cheat sheet -->
          <div class="lesson-section">
            <div class="lesson-section-title">📌 Итоговая памятка</div>
            <div class="summary-box">
              ${this.formatMarkdown(lesson.summary)}
            </div>
          </div>

          <!-- Bottom CTA to Practice -->
          <div class="card text-center" style="background: var(--green-50); border: 1px solid var(--green-200); padding: 2rem;">
            <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--green-800); margin-bottom: 0.5rem;">
              Готовы закрепить материал?
            </h3>
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem; max-width: 500px; margin-left: auto; margin-right: auto;">
              Пройдите ${lesson.exercises ? lesson.exercises.length : 12} интерактивных упражнений: выбор вариантов, расстановка слов и перевод предложений.
            </p>
            <a href="#exercises/${lesson.id}" class="btn btn-primary btn-lg">
              Начать упражнения ▶
            </a>
          </div>
        </div>
      `;

      // Wire up the translation toggle
      const toggleBtn = container.querySelector('#toggleTransBtn');
      const toggleSwitch = container.querySelector('#toggleTransSwitch');
      if (toggleBtn && toggleSwitch) {
        toggleBtn.addEventListener('click', () => {
          const isOn = toggleSwitch.classList.toggle('on');
          container.querySelectorAll('.text-ru').forEach(el => {
            el.classList.toggle('hidden', !isOn);
          });
        });
      }
    },

    formatMarkdown(text) {
      if (!text) return '';
      // Simple markdown: **bold**
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');
    },

    // ===================================================================
    // 4. INTERACTIVE EXERCISES RUNNER
    // ===================================================================
    renderExercises(container, lessonId) {
      const allLessons = getAllLessons();
      const isReviewMode = lessonId === 'review_mistakes';

      let exercises = [];
      let title = '';

      if (isReviewMode) {
        const mistakes = StorageManager.getMistakes();
        if (mistakes.length === 0) {
          container.innerHTML = `
            <div class="page-content">
              <div class="empty-state">
                <div class="empty-icon">🎉</div>
                <h3>Нет ошибок для повторения!</h3>
                <p>Вы решили все задания без сохранённых ошибок. Отличная работа!</p>
                <a href="#home" class="btn btn-primary mt-1">На главную</a>
              </div>
            </div>
          `;
          return;
        }
        exercises = mistakes.map(m => m.exercise);
        title = 'Отработка сохранённых ошибок';
      } else {
        const lesson = allLessons.find(l => l.id === lessonId);
        if (!lesson || !lesson.exercises || lesson.exercises.length === 0) {
          container.innerHTML = `
            <div class="page-content">
              <div class="empty-state">
                <div class="empty-icon">⚠️</div>
                <h3>Упражнения не найдены</h3>
                <a href="#curriculum/A1" class="btn btn-primary mt-1">Вернуться к программе</a>
              </div>
            </div>
          `;
          return;
        }
        exercises = lesson.exercises;
        title = `Упражнения: ${lesson.title}`;
      }

      this.exerciseState = {
        lessonId,
        exercises,
        currentIndex: 0,
        userAnswers: [],
        score: 0,
        isReviewMode
      };

      this.renderCurrentExercise(container, title);
    },

    renderCurrentExercise(container, title) {
      const { exercises, currentIndex, score } = this.exerciseState;
      const ex = exercises[currentIndex];
      const total = exercises.length;
      const progressPct = ((currentIndex) / total) * 100;

      container.innerHTML = `
        <div class="page-content" style="max-width: 750px; margin: 0 auto;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <a href="${this.exerciseState.isReviewMode ? '#progress' : `#lesson/${this.exerciseState.lessonId}`}" class="btn btn-secondary btn-sm">
              ✕ Выйти
            </a>
            <div style="font-weight: 700; font-size: 0.95rem;">
              ${title}
            </div>
            <div class="exercise-score">
              Правильно: ${score} / ${currentIndex}
            </div>
          </div>

          <!-- Progress bar -->
          <div class="exercise-progress">
            <div class="exercise-progress-bar">
              <div class="exercise-progress-fill" style="width: ${progressPct}%;"></div>
            </div>
            <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 600;">
              ${currentIndex + 1} из ${total}
            </span>
          </div>

          <!-- Exercise Box -->
          <div class="exercise-container" id="activeExerciseBox">
            <div class="exercise-header">
              <span class="exercise-number">Задание ${currentIndex + 1}</span>
              <span class="exercise-type-badge">${this.getExerciseTypeLabel(ex.type)}</span>
            </div>

            <div class="exercise-question">
              ${this.formatMarkdown(ex.question || ex.sentence || '')}
            </div>

            <!-- Dynamic content based on type -->
            <div id="exerciseInputArea">
              ${this.renderExerciseInput(ex)}
            </div>

            <!-- Feedback area -->
            <div class="exercise-feedback" id="exerciseFeedback"></div>

            <!-- Action buttons -->
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem;">
              <button class="btn btn-secondary" onclick="App.speak('${(ex.question || ex.sentence || '').replace(/'/g, "\\'")}')">
                🔊 Озвучить
              </button>
              <div style="display: flex; gap: 0.5rem;">
                <button class="btn btn-primary" id="checkExerciseBtn">
                  Проверить
                </button>
                <button class="btn btn-primary hidden" id="nextExerciseBtn">
                  Следующее →
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

      this.bindExerciseHandlers(ex);
    },

    getExerciseTypeLabel(type) {
      switch(type) {
        case 'multipleChoice': return 'Выбор ответа';
        case 'fillBlank': return 'Вставить слово';
        case 'wordOrder': return 'Собрать предложение';
        case 'translation': return 'Перевод';
        case 'errorCorrection': return 'Исправить ошибку';
        default: return 'Задание';
      }
    },

    renderExerciseInput(ex) {
      switch(ex.type) {
        case 'multipleChoice':
          return `
            <div class="exercise-options">
              ${ex.options.map((opt, idx) => `
                <button class="exercise-option" data-option-idx="${idx}">
                  <span class="option-letter">${String.fromCharCode(65 + idx)}</span>
                  <span>${opt}</span>
                </button>
              `).join('')}
            </div>
          `;

        case 'fillBlank':
        case 'translation':
        case 'errorCorrection':
          return `
            <div style="margin-bottom: 1rem;">
              <input type="text" class="exercise-input" id="textAnswerInput" placeholder="Введите ваш ответ..." autocomplete="off">
            </div>
          `;

        case 'wordOrder':
          // Click-to-assemble chips
          return `
            <div style="margin-bottom: 0.5rem; font-size: 0.85rem; color: var(--text-muted);">
              Перевод: <em>${ex.translation || ''}</em>
            </div>
            <div class="sentence-area" id="sentenceDropArea">
              <span style="color: var(--text-muted); font-size: 0.9rem; align-self: center;" id="emptyPlaceholder">
                Нажимайте на слова внизу, чтобы собрать предложение
              </span>
            </div>
            <div class="word-bank" id="wordsBank">
              ${this.shuffleArray([...ex.words]).map(w => `
                <button class="word-chip" data-word="${w}">${w}</button>
              `).join('')}
            </div>
          `;

        default:
          return '';
      }
    },

    shuffleArray(arr) {
      return arr.sort(() => Math.random() - 0.5);
    },

    bindExerciseHandlers(ex) {
      const checkBtn = document.getElementById('checkExerciseBtn');
      const nextBtn = document.getElementById('nextExerciseBtn');
      const feedback = document.getElementById('exerciseFeedback');

      let selectedOptionIdx = -1;
      let assembledWords = [];

      // Multiple choice selection
      document.querySelectorAll('.exercise-option').forEach(optBtn => {
        optBtn.addEventListener('click', () => {
          document.querySelectorAll('.exercise-option').forEach(b => b.classList.remove('selected'));
          optBtn.classList.add('selected');
          selectedOptionIdx = parseInt(optBtn.getAttribute('data-option-idx'), 10);
        });
      });

      // Word order chips handling
      if (ex.type === 'wordOrder') {
        const dropArea = document.getElementById('sentenceDropArea');
        const placeholder = document.getElementById('emptyPlaceholder');

        document.querySelectorAll('.word-chip').forEach(chip => {
          chip.addEventListener('click', () => {
            if (chip.classList.contains('placed')) return;
            const word = chip.getAttribute('data-word');
            chip.classList.add('placed');
            assembledWords.push(word);

            if (placeholder) placeholder.style.display = 'none';

            // Add to drop area
            const placedChip = document.createElement('button');
            placedChip.className = 'placed-word';
            placedChip.textContent = word;
            placedChip.addEventListener('click', () => {
              // Return to bank
              placedChip.remove();
              chip.classList.remove('placed');
              assembledWords = assembledWords.filter(w => w !== word);
              if (assembledWords.length === 0 && placeholder) {
                placeholder.style.display = 'block';
              }
            });
            dropArea.appendChild(placedChip);
          });
        });
      }

      // Check button click
      checkBtn.addEventListener('click', () => {
        let isCorrect = false;
        let correctAnswerText = '';

        if (ex.type === 'multipleChoice') {
          if (selectedOptionIdx === -1) {
            alert('Пожалуйста, выберите вариант ответа!');
            return;
          }
          isCorrect = selectedOptionIdx === ex.correctIndex;
          correctAnswerText = ex.options[ex.correctIndex];

          // Highlight choices
          document.querySelectorAll('.exercise-option').forEach((opt, idx) => {
            if (idx === ex.correctIndex) opt.classList.add('correct');
            if (idx === selectedOptionIdx && !isCorrect) opt.classList.add('wrong');
            opt.disabled = true;
          });
        }
        else if (ex.type === 'wordOrder') {
          const userOrder = assembledWords.join(' ').trim().toLowerCase().replace(/[.,!?]/g, '');
          const expected = ex.correctOrder.join(' ').trim().toLowerCase().replace(/[.,!?]/g, '');
          isCorrect = userOrder === expected;
          correctAnswerText = ex.correctOrder.join(' ');
        }
        else {
          // Text input
          const input = document.getElementById('textAnswerInput');
          const userText = input ? input.value.trim().toLowerCase().replace(/[.,!?]/g, '') : '';

          if (!userText) {
            alert('Пожалуйста, введите ответ!');
            return;
          }

          if (ex.acceptedAnswers) {
            isCorrect = ex.acceptedAnswers.some(ans =>
              ans.trim().toLowerCase().replace(/[.,!?]/g, '') === userText
            );
            correctAnswerText = ex.acceptedAnswers[0];
          } else if (ex.correctedSentence) {
            isCorrect = ex.correctedSentence.trim().toLowerCase().replace(/[.,!?]/g, '') === userText;
            correctAnswerText = ex.correctedSentence;
          }

          if (input) {
            input.disabled = true;
            input.classList.add(isCorrect ? 'correct' : 'wrong');
          }
        }

        // Show feedback
        feedback.className = `exercise-feedback visible ${isCorrect ? 'correct' : 'wrong'}`;
        feedback.innerHTML = `
          <div class="feedback-title">
            <span>${isCorrect ? '✅ Правильно!' : '❌ Не совсем точно.'}</span>
          </div>
          ${!isCorrect ? `<div class="feedback-answer">Правильный ответ: <strong>${correctAnswerText}</strong></div>` : ''}
          ${ex.explanation ? `<div style="margin-top: 0.35rem;">💡 ${ex.explanation}</div>` : ''}
        `;

        if (isCorrect) {
          this.exerciseState.score += 1;
        } else {
          // Record mistake for repeat
          StorageManager.addMistake(ex, this.exerciseState.lessonId);
        }

        checkBtn.classList.add('hidden');
        nextBtn.classList.remove('hidden');
      });

      // Next button click
      nextBtn.addEventListener('click', () => {
        this.exerciseState.currentIndex += 1;
        if (this.exerciseState.currentIndex < this.exerciseState.exercises.length) {
          const title = this.exerciseState.isReviewMode
            ? 'Отработка сохранённых ошибок'
            : `Упражнения: ${this.exerciseState.lessonId.toUpperCase()}`;
          this.renderCurrentExercise(document.getElementById('mainApp'), title);
        } else {
          this.renderExerciseResults(document.getElementById('mainApp'));
        }
      });
    },

    renderExerciseResults(container) {
      const { lessonId, score, exercises, isReviewMode } = this.exerciseState;
      const total = exercises.length;
      const pct = Math.round((score / total) * 100);

      if (!isReviewMode && lessonId) {
        StorageManager.completeLesson(lessonId, score, total);
      }

      container.innerHTML = `
        <div class="page-content text-center" style="max-width: 600px; margin: 0 auto; padding-top: 3rem;">
          <div style="font-size: 4rem; margin-bottom: 1rem;">
            ${pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '💪'}
          </div>
          <h1 style="font-size: 2rem; font-weight: 800; margin-bottom: 0.5rem;">
            ${pct >= 80 ? 'Отличный результат!' : pct >= 50 ? 'Хорошая работа!' : 'Нужно ещё повторить'}
          </h1>
          <p style="color: var(--text-secondary); margin-bottom: 2rem;">
            Вы набрали <strong>${score}</strong> из <strong>${total}</strong> (${pct}% правильных ответов)
          </p>

          <div class="card mb-2" style="background: var(--bg-sidebar);">
            <div style="display: flex; justify-content: space-around; text-align: center;">
              <div>
                <div style="font-size: 1.5rem; font-weight: 800; color: var(--green-600);">${score}</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Правильно</div>
              </div>
              <div style="border-left: 1px solid var(--border);"></div>
              <div>
                <div style="font-size: 1.5rem; font-weight: 800; color: var(--red-600);">${total - score}</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Ошибок</div>
              </div>
              <div style="border-left: 1px solid var(--border);"></div>
              <div>
                <div style="font-size: 1.5rem; font-weight: 800; color: var(--blue-600);">${pct}%</div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Точность</div>
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 0.75rem; justify-content: center; flex-wrap: wrap;">
            ${!isReviewMode ? `
              <a href="#lesson/${lessonId}" class="btn btn-secondary">
                📖 К уроку
              </a>
              <a href="#exercises/${lessonId}" class="btn btn-outline">
                🔄 Попробовать снова
              </a>
              <a href="#curriculum/A1" class="btn btn-primary">
                К программе курсов →
              </a>
            ` : `
              <a href="#progress" class="btn btn-primary">
                Вернуться к прогрессу →
              </a>
            `}
          </div>
        </div>
      `;
    },

    // ===================================================================
    // 5. VOCABULARY VIA TEXTS (5 SETS)
    // ===================================================================
    renderTexts(container, selectedSetId = 'vocab-01') {
      const sets = window.VOCABULARY_SETS || [];
      const set = sets.find(s => s.id === selectedSetId) || sets[0];

      if (!set) {
        container.innerHTML = `<div class="page-content">Наборы слов не найдены.</div>`;
        return;
      }

      container.innerHTML = `
        <div class="page-content">
          <div style="margin-bottom: 1.5rem;">
            <h1 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.3rem;">Слова через связные тексты</h1>
            <p style="color: var(--text-secondary); font-size: 0.95rem;">
              Запоминайте слова естественным образом: тематический набор из 13 слов + связный рассказ + практика
            </p>
          </div>

          <!-- Tabs for sets -->
          <div class="tabs">
            ${sets.map(s => `
              <button class="tab ${s.id === selectedSetId ? 'active' : ''}" onclick="window.location.hash='#texts/${s.id}'">
                ${s.title}
              </button>
            `).join('')}
          </div>

          <!-- Set Header -->
          <div class="card mb-2" style="background: var(--bg-sidebar); border-left: 3px solid var(--green-600);">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
              <div>
                <h2 style="font-size: 1.25rem; font-weight: 700;">${set.title}</h2>
                <div style="font-size: 0.9rem; color: var(--text-muted); font-style: italic;">${set.titleDe} &bull; ${set.description}</div>
              </div>
              <button class="btn btn-outline btn-sm" id="addAllToDictBtn">
                + Добавить все 13 слов в словарь
              </button>
            </div>
          </div>

          <!-- 13 Words Table Grid -->
          <div class="card mb-2">
            <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 1rem;">📋 13 слов темы</h3>
            <div style="overflow-x: auto;">
              <table class="grammar-table">
                <thead>
                  <tr>
                    <th>Артикль</th>
                    <th>Немецкое слово</th>
                    <th>Множ. число</th>
                    <th>Перевод</th>
                    <th>Пример</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  ${set.words.map(w => `
                    <tr>
                      <td style="color: var(--green-600); font-weight: 600;">${w.article || '—'}</td>
                      <td style="font-weight: 700;">${w.de}</td>
                      <td style="color: var(--text-muted); font-size: 0.85rem;">${w.plural || '—'}</td>
                      <td>${w.ru}</td>
                      <td style="font-size: 0.85rem; color: var(--text-secondary);">
                        ${this.formatMarkdown(w.exampleDe)}
                      </td>
                      <td>
                        <button class="btn btn-secondary btn-sm" onclick="App.speak('${w.de.replace(/'/g, "\\'")}')">🔊</button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Connected Text -->
          <div class="card mb-2">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
              <h3 style="font-size: 1.1rem; font-weight: 700;">
                📖 Связный рассказ: ${set.connectedText.title}
              </h3>
              <button class="toggle-translation" id="textTransToggle">
                <div class="toggle-switch on" id="textTransSwitch"></div>
                <span>Показать перевод</span>
              </button>
            </div>
            <div class="text-container">
              ${set.connectedText.sentences.map(s => `
                <div class="text-sentence">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <div class="text-de">${this.formatMarkdown(s.de)}</div>
                    <button class="btn btn-secondary btn-sm" style="padding: 0.2rem 0.5rem;" onclick="App.speak('${s.de.replace(/'/g, "\\'")}')">🔊</button>
                  </div>
                  <div class="text-ru">${s.ru}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Practice Exercises for this set -->
          <div class="card">
            <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 1rem;">
              ✍️ Закрепление слов (${set.exercises.length} заданий)
            </h3>
            <div style="display: grid; gap: 1rem;">
              ${set.exercises.map((ex, idx) => `
                <div style="padding: 1rem; background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius-sm);">
                  <div style="font-weight: 600; font-size: 0.95rem; margin-bottom: 0.5rem;">
                    ${idx + 1}. ${ex.question}
                  </div>
                  <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">
                    💡 ${ex.explanation}
                  </div>
                  <button class="btn btn-outline btn-sm" onclick="App.speak('${(ex.acceptedAnswers ? ex.acceptedAnswers[0] : ex.options ? ex.options[ex.correctIndex] : '').replace(/'/g, "\\'")}')">
                    🔊 Озвучить образец
                  </button>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;

      // Add all words handler
      const addAllBtn = container.querySelector('#addAllToDictBtn');
      if (addAllBtn) {
        addAllBtn.addEventListener('click', () => {
          StorageManager.addMultipleWords(set.words);
          this.showToast(`13 слов из темы «${set.title}» добавлены в словарь!`, 'success');
          this.updateBadges();
        });
      }

      // Translation toggle
      const transToggle = container.querySelector('#textTransToggle');
      const transSwitch = container.querySelector('#textTransSwitch');
      if (transToggle && transSwitch) {
        transToggle.addEventListener('click', () => {
          const isOn = transSwitch.classList.toggle('on');
          container.querySelectorAll('.text-ru').forEach(el => {
            el.classList.toggle('hidden', !isOn);
          });
        });
      }
    },

    // ===================================================================
    // 6. MY DICTIONARY & SPACED REPETITION
    // ===================================================================
    renderDictionary(container) {
      const state = StorageManager.getState();
      const allWords = state.dictionary;
      const dueWords = StorageManager.getDueWords();
      const { filter, currentIndex, isFlipped, direction } = this.flashcardState;

      let filteredWords = [];
      if (filter === 'due') filteredWords = dueWords;
      else if (filter === 'learning') filteredWords = allWords.filter(w => w.status === 'learning');
      else if (filter === 'mastered') filteredWords = allWords.filter(w => w.status === 'mastered');
      else filteredWords = allWords;

      container.innerHTML = `
        <div class="page-content">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
            <div>
              <h1 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 0.3rem;">Мой словарь и интервальное повторение</h1>
              <p style="color: var(--text-secondary); font-size: 0.95rem;">
                Научно обоснованная система интервалов: слова повторяются прямо перед тем, как вы их забудете
              </p>
            </div>
            <div style="display: flex; gap: 0.5rem;">
              <button class="btn btn-secondary btn-sm" id="toggleDirectionBtn">
                Режим: ${direction === 'de-ru' ? '🇩🇪 Немецкий → 🇷🇺 Русский' : '🇷🇺 Русский → 🇩🇪 Немецкий'}
              </button>
            </div>
          </div>

          <!-- Spaced Repetition Stats -->
          <div class="stats-grid mb-2">
            <div class="stat-card">
              <div class="stat-icon" style="background: var(--amber-100); color: var(--amber-600);">⏰</div>
              <div class="stat-value">${dueWords.length}</div>
              <div class="stat-label">Готово к повторению сейчас</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon" style="background: var(--blue-100); color: var(--blue-600);">📖</div>
              <div class="stat-value">${allWords.filter(w => w.status === 'learning').length}</div>
              <div class="stat-label">В процессе изучения</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon" style="background: var(--green-100); color: var(--green-600);">🏆</div>
              <div class="stat-value">${allWords.filter(w => w.status === 'mastered').length}</div>
              <div class="stat-label">Надёжно усвоено</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon" style="background: var(--purple-50); color: var(--purple-500);">📚</div>
              <div class="stat-value">${allWords.length}</div>
              <div class="stat-label">Всего слов в словаре</div>
            </div>
          </div>

          <!-- Flashcard Filters -->
          <div class="tabs">
            <button class="tab ${filter === 'due' ? 'active' : ''}" data-dict-filter="due">
              К повторению (${dueWords.length})
            </button>
            <button class="tab ${filter === 'all' ? 'active' : ''}" data-dict-filter="all">
              Все слова (${allWords.length})
            </button>
            <button class="tab ${filter === 'learning' ? 'active' : ''}" data-dict-filter="learning">
              Изучаются (${allWords.filter(w => w.status === 'learning').length})
            </button>
            <button class="tab ${filter === 'mastered' ? 'active' : ''}" data-dict-filter="mastered">
              Усвоено (${allWords.filter(w => w.status === 'mastered').length})
            </button>
          </div>

          <!-- Flashcard Trainer Area -->
          ${filteredWords.length > 0 ? `
            <div class="flashcard-container mb-2">
              <div class="flashcard ${isFlipped ? 'flipped' : ''}" id="activeFlashcard">
                <div class="flashcard-inner">
                  <!-- Front Face -->
                  <div class="flashcard-face flashcard-front">
                    ${direction === 'de-ru' ? `
                      <div class="flashcard-article">${filteredWords[currentIndex].article || ''}</div>
                      <div class="flashcard-word">${filteredWords[currentIndex].de}</div>
                      <div class="flashcard-plural">${filteredWords[currentIndex].plural ? `мн.ч.: ${filteredWords[currentIndex].plural}` : ''}</div>
                    ` : `
                      <div class="flashcard-word" style="font-size: 1.8rem;">${filteredWords[currentIndex].ru}</div>
                    `}
                    <div class="flashcard-hint">Нажмите, чтобы перевернуть карточку ↺</div>
                  </div>

                  <!-- Back Face -->
                  <div class="flashcard-face flashcard-back">
                    ${direction === 'de-ru' ? `
                      <div class="flashcard-translation">${filteredWords[currentIndex].ru}</div>
                      ${filteredWords[currentIndex].exampleDe ? `
                        <div class="flashcard-example">
                          ${this.formatMarkdown(filteredWords[currentIndex].exampleDe)}
                        </div>
                      ` : ''}
                    ` : `
                      <div class="flashcard-article">${filteredWords[currentIndex].article || ''}</div>
                      <div class="flashcard-word">${filteredWords[currentIndex].de}</div>
                      <div class="flashcard-plural">${filteredWords[currentIndex].plural ? `мн.ч.: ${filteredWords[currentIndex].plural}` : ''}</div>
                    `}
                    <button class="btn btn-secondary btn-sm mt-1" onclick="event.stopPropagation(); App.speak('${filteredWords[currentIndex].de.replace(/'/g, "\\'")}')">
                      🔊 Озвучить
                    </button>
                  </div>
                </div>
              </div>

              <!-- Controls: Prev / Counter / Next -->
              <div class="flashcard-controls">
                <button class="flashcard-btn" id="prevCardBtn">←</button>
                <span class="flashcard-counter">${currentIndex + 1} / ${filteredWords.length}</span>
                <button class="flashcard-btn" id="nextCardBtn">→</button>
              </div>

              <!-- Spaced repetition rating buttons -->
              <div class="flashcard-difficulty">
                <button class="difficulty-btn hard" data-quality="again">
                  🔴 Не помню (через 10 мин)
                </button>
                <button class="difficulty-btn medium" data-quality="hard">
                  🟡 Трудно (+1-2 дня)
                </button>
                <button class="difficulty-btn easy" data-quality="good">
                  🟢 Помню (+3-7 дней)
                </button>
              </div>
            </div>
          ` : `
            <div class="empty-state">
              <div class="empty-icon">🎉</div>
              <h3>Все слова по этому фильтру уже повторены!</h3>
              <p>Отличная работа! Возвращайтесь позже, когда подойдёт срок следующего интервала.</p>
            </div>
          `}

          <!-- Word List Table -->
          <div class="card mt-2">
            <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 1rem;">Словарь списком</h3>
            <div style="overflow-x: auto; max-height: 400px; overflow-y: auto;">
              <table class="grammar-table">
                <thead>
                  <tr>
                    <th>Слово</th>
                    <th>Перевод</th>
                    <th>Статус</th>
                    <th>Повторений</th>
                    <th>Следующий повтор</th>
                  </tr>
                </thead>
                <tbody>
                  ${allWords.map(w => {
                    const isDue = w.nextReview <= Date.now();
                    return `
                      <tr>
                        <td>
                          <strong>${w.article ? `${w.article} ` : ''}${w.de}</strong>
                          ${w.plural ? `<span style="color: var(--text-muted); font-size: 0.8rem;"> (${w.plural})</span>` : ''}
                        </td>
                        <td>${w.ru}</td>
                        <td>
                          <span class="badge ${w.status === 'mastered' ? 'badge-green' : 'badge-blue'}">
                            ${w.status === 'mastered' ? 'Усвоено' : 'Учится'}
                          </span>
                        </td>
                        <td>${w.repetitions || 0}</td>
                        <td style="color: ${isDue ? 'var(--red-600); font-weight: 700;' : 'var(--text-muted)'}">
                          ${isDue ? '⚠️ Пора повторить' : new Date(w.nextReview).toLocaleDateString()}
                        </td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;

      // Handlers
      container.querySelectorAll('[data-dict-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
          this.flashcardState.filter = btn.getAttribute('data-dict-filter');
          this.flashcardState.currentIndex = 0;
          this.flashcardState.isFlipped = false;
          this.renderDictionary(container);
        });
      });

      const toggleDir = container.querySelector('#toggleDirectionBtn');
      if (toggleDir) {
        toggleDir.addEventListener('click', () => {
          this.flashcardState.direction = this.flashcardState.direction === 'de-ru' ? 'ru-de' : 'de-ru';
          this.flashcardState.isFlipped = false;
          this.renderDictionary(container);
        });
      }

      const card = container.querySelector('#activeFlashcard');
      if (card) {
        card.addEventListener('click', () => {
          this.flashcardState.isFlipped = !this.flashcardState.isFlipped;
          card.classList.toggle('flipped', this.flashcardState.isFlipped);
        });
      }

      const prevBtn = container.querySelector('#prevCardBtn');
      const nextBtn = container.querySelector('#nextCardBtn');
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          if (filteredWords.length === 0) return;
          this.flashcardState.currentIndex = (this.flashcardState.currentIndex - 1 + filteredWords.length) % filteredWords.length;
          this.flashcardState.isFlipped = false;
          this.renderDictionary(container);
        });
      }
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          if (filteredWords.length === 0) return;
          this.flashcardState.currentIndex = (this.flashcardState.currentIndex + 1) % filteredWords.length;
          this.flashcardState.isFlipped = false;
          this.renderDictionary(container);
        });
      }

      container.querySelectorAll('[data-quality]').forEach(btn => {
        btn.addEventListener('click', () => {
          const quality = btn.getAttribute('data-quality');
          const currentWord = filteredWords[currentIndex];
          if (currentWord) {
            StorageManager.reviewWord(currentWord.id, quality);
            this.showToast(quality === 'good' ? 'Отлично! Интервал увеличен.' : quality === 'hard' ? 'Слово сохранено для скорого повторения.' : 'Слово вернётся в тренировку сегодня.');
            this.updateBadges();

            if (this.flashcardState.currentIndex >= filteredWords.length - 1) {
              this.flashcardState.currentIndex = 0;
            }
            this.flashcardState.isFlipped = false;
            this.renderDictionary(container);
          }
        });
      });
    },

    // ===================================================================
    // 7. SENTENCE BUILDER TRAINER
    // ===================================================================
    renderSentenceBuilder(container, activeChainId = 'chain-01') {
      const chains = window.SENTENCE_BUILDER_DATA || [];
      const chain = chains.find(c => c.id === activeChainId) || chains[0];

      if (!chain) {
        container.innerHTML = `<div class="page-content">Тренажёр не найден.</div>`;
        return;
      }

      container.innerHTML = `
        <div class="page-content" style="max-width: 800px; margin: 0 auto;">
          <div style="margin-bottom: 1.5rem;">
            <div style="font-size: 0.85rem; font-weight: 700; color: var(--green-600); text-transform: uppercase; margin-bottom: 0.3rem;">
              Тренажёр синтаксиса
            </div>
            <h1 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 0.3rem;">
              Практика построения предложений
            </h1>
            <p style="color: var(--text-secondary); font-size: 0.95rem;">
              Пошаговое выращивание длинной естественной фразы из простого подлежащего и сказуемого
            </p>
          </div>

          <!-- Chain Selector Tabs -->
          <div class="tabs">
            ${chains.map(c => `
              <button class="tab ${c.id === activeChainId ? 'active' : ''}" onclick="window.location.hash='#builder/${c.id}'">
                ${c.title}
              </button>
            `).join('')}
          </div>

          <!-- Chain Header -->
          <div class="card mb-2" style="background: var(--green-50); border-left: 3px solid var(--green-600);">
            <h2 style="font-size: 1.2rem; font-weight: 700; color: var(--green-800);">${chain.title}</h2>
            <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.2rem;">Тема: ${chain.theme}</div>
          </div>

          <!-- Steps Progression -->
          <div style="display: grid; gap: 1rem;">
            ${chain.steps.map((st, idx) => `
              <div class="builder-step ${idx === chain.steps.length - 1 ? 'active' : 'completed'}">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
                  <span class="badge ${idx === chain.steps.length - 1 ? 'badge-blue' : 'badge-green'}">
                    Этап ${st.step} из ${chain.steps.length}
                  </span>
                  <button class="btn btn-secondary btn-sm" onclick="App.speak('${st.de.replace(/'/g, "\\'")}')">
                    🔊 Озвучить
                  </button>
                </div>

                <div class="builder-de">
                  ${this.formatMarkdown(st.de)}
                </div>

                <div class="builder-ru">
                  ${st.ru}
                </div>

                <div style="background: var(--bg); border-radius: var(--radius-sm); padding: 0.75rem; margin-top: 0.75rem; border: 1px solid var(--border-light);">
                  <div style="font-size: 0.85rem; color: var(--text); line-height: 1.6;">
                    <strong>Грамматический разбор:</strong> ${st.explanation}
                  </div>
                  <div style="font-size: 0.8rem; color: var(--green-700); font-weight: 600; margin-top: 0.35rem;">
                    💡 Правило: ${st.rule}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    },

    // ===================================================================
    // 8. PROGRESS & DATA MANAGEMENT
    // ===================================================================
    renderProgress(container) {
      const state = StorageManager.getState();
      const allLessons = getAllLessons();
      const completedCount = state.completedLessons.length;
      const totalAvailable = allLessons.length;
      const mistakes = state.repeatMistakes;

      const accuracy = state.stats.totalExercisesAnswered > 0
        ? Math.round((state.stats.totalCorrect / state.stats.totalExercisesAnswered) * 100)
        : 0;

      container.innerHTML = `
        <div class="page-content" style="max-width: 850px; margin: 0 auto;">
          <h1 style="font-size: 1.6rem; font-weight: 800; margin-bottom: 0.5rem;">Мой учебный прогресс</h1>
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">
            Статистика занятий, точность ответов, сохранённые ошибки и управление резервными копиями
          </p>

          <!-- Overall Stats -->
          <div class="stats-grid mb-2">
            <div class="stat-card">
              <div class="stat-icon" style="background: var(--green-100); color: var(--green-700);">📚</div>
              <div class="stat-value">${completedCount} / ${totalAvailable}</div>
              <div class="stat-label">Уроков пройдено (A1)</div>
            </div>

            <div class="stat-card">
              <div class="stat-icon" style="background: var(--blue-100); color: var(--blue-600);">🎯</div>
              <div class="stat-value">${accuracy}%</div>
              <div class="stat-label">Общая точность ответов</div>
            </div>

            <div class="stat-card">
              <div class="stat-icon" style="background: var(--purple-50); color: var(--purple-500);">📝</div>
              <div class="stat-value">${state.stats.totalExercisesAnswered}</div>
              <div class="stat-label">Всего решено заданий</div>
            </div>

            <div class="stat-card">
              <div class="stat-icon" style="background: var(--red-100); color: var(--red-600);">⚠️</div>
              <div class="stat-value">${mistakes.length}</div>
              <div class="stat-label">Ошибок в очереди</div>
            </div>
          </div>

          <!-- Mistakes review banner if any -->
          ${mistakes.length > 0 ? `
            <div class="card mb-2" style="background: var(--red-50); border: 1px solid var(--red-100);">
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                <div>
                  <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--red-600);">
                    У вас ${mistakes.length} ${mistakes.length === 1 ? 'ошибка' : 'ошибок'} для отработки
                  </h3>
                  <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.2rem;">
                    Повторите сложные места, чтобы закрепить грамматику и не допускать этих ошибок в будущем.
                  </p>
                </div>
                <a href="#exercises/review_mistakes" class="btn btn-primary" style="background: var(--red-500);">
                  Отработать ошибки (${mistakes.length}) ▶
                </a>
              </div>
            </div>
          ` : ''}

          <!-- Completed Lessons List -->
          <div class="card mb-2">
            <h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 1rem;">
              Статистика по урокам
            </h3>
            <div style="display: grid; gap: 0.5rem;">
              ${allLessons.map(l => {
                const isCompleted = state.completedLessons.includes(l.id);
                const score = state.lessonScores[l.id];
                return `
                  <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1rem; background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius-sm);">
                    <div>
                      <strong>${l.order}. ${l.title}</strong>
                      <span style="color: var(--text-muted); font-size: 0.85rem; margin-left: 0.5rem;">${l.titleDe}</span>
                    </div>
                    <div>
                      ${isCompleted ? `
                        <span class="badge badge-green">
                          ✓ ${score ? `${score.correct}/${score.total}` : 'Завершён'}
                        </span>
                      ` : `
                        <span class="badge badge-gray">Не начат</span>
                      `}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Data Backup & Reset (localStorage) -->
          <div class="data-section">
            <h4 style="font-size: 1.1rem; font-weight: 700;">Резервная копия и сохранение</h4>
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">
              Все ваши результаты, словарь и прогресс автоматически сохраняются в памяти текущего браузера (localStorage). Вы можете экспортировать свои данные в файл JSON или перенести на другое устройство.
            </p>

            <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
              <button class="btn btn-secondary" id="exportDataBtn">
                📥 Экспорт прогресса (JSON)
              </button>
              <label class="btn btn-secondary" style="margin: 0; cursor: pointer;">
                📤 Импорт прогресса (JSON)
                <input type="file" id="importFileInput" accept=".json" style="display: none;">
              </label>
              <button class="btn btn-outline" style="color: var(--red-600); border-color: var(--red-400);" id="resetProgressBtn">
                🗑 Сбросить весь прогресс
              </button>
            </div>

            <div class="data-warning mt-1">
              ⚠️ При сбросе все завершённые уроки, ошибки и статистика будут удалены.
            </div>
          </div>
        </div>
      `;

      // Export button handler
      const exportBtn = container.querySelector('#exportDataBtn');
      if (exportBtn) {
        exportBtn.addEventListener('click', () => {
          StorageManager.exportJSON();
          this.showToast('Файл с резервной копией скачан!', 'success');
        });
      }

      // Import button handler
      const importInput = container.querySelector('#importFileInput');
      if (importInput) {
        importInput.addEventListener('change', (e) => {
          const file = e.target.files[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = (event) => {
            const res = StorageManager.importJSON(event.target.result);
            if (res.success) {
              this.showToast('Прогресс успешно восстановлен из файла!', 'success');
              this.updateBadges();
              this.renderProgress(container);
            } else {
              this.showToast(`Ошибка импорта: ${res.error}`, 'error');
            }
          };
          reader.readAsText(file);
        });
      }

      // Reset button handler
      const resetBtn = container.querySelector('#resetProgressBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          if (confirm('Вы уверены, что хотите сбросить весь прогресс? Это действие нельзя отменить.')) {
            StorageManager.resetProgress();
            this.showToast('Прогресс успешно сброшен к начальному состоянию', 'info');
            this.updateBadges();
            this.renderProgress(container);
          }
        });
      }
    }
  };

  // Expose to window
  window.App = App;

  // Initialize on DOM load
  document.addEventListener('DOMContentLoaded', () => {
    App.init();
  });

})();
