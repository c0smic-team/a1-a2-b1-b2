// Full curriculum catalog A1-B1
window.CURRICULUM = {
  levels: [
    {
      id: 'A1',
      title: 'A1 — Начальный уровень',
      titleDe: 'Anfänger',
      description: 'Первые шаги в немецком: артикли, базовые глаголы, простые предложения',
      color: '#34d399',
      icon: '🌱',
      groups: [
        {
          title: 'Артикли и существительные',
          icon: '📦',
          topics: [
            { id: 'a1-06', title: 'Der, die, das — род существительных', titleDe: 'Artikel und Genus' },
            { id: 'a1-07', title: 'Ein/eine и kein/keine', titleDe: 'Unbestimmter Artikel' },
            { id: 'a1-08', title: 'Множественное число', titleDe: 'Plural' },
            { id: 'a1-09', title: 'Nominativ и Akkusativ', titleDe: 'Nominativ und Akkusativ' },
            { id: 'a1-12', title: 'Основы Dativ', titleDe: 'Dativ — Grundlagen' },
          ]
        },
        {
          title: 'Местоимения',
          icon: '👤',
          topics: [
            { id: 'a1-01', title: 'Личные местоимения и sein', titleDe: 'Personalpronomen und sein' },
            { id: 'a1-10', title: 'Притяжательные: mein, dein, sein, ihr…', titleDe: 'Possessivartikel' },
            { id: 'a1-13', title: 'Указательные: dieser, diese, dieses', titleDe: 'Demonstrativpronomen', status: 'coming' },
          ]
        },
        {
          title: 'Глаголы',
          icon: '⚡',
          topics: [
            { id: 'a1-02', title: 'Глагол haben и простые предложения', titleDe: 'haben und einfache Sätze' },
            { id: 'a1-03', title: 'Präsens правильных глаголов', titleDe: 'Präsens regelmäßiger Verben' },
            { id: 'a1-14', title: 'Неправильные глаголы', titleDe: 'Unregelmäßige Verben', status: 'coming' },
            { id: 'a1-15', title: 'Модальные глаголы: können, müssen, wollen…', titleDe: 'Modalverben', status: 'coming' },
            { id: 'a1-16', title: 'Отделяемые глаголы', titleDe: 'Trennbare Verben', status: 'coming' },
            { id: 'a1-17', title: 'Возвратные глаголы', titleDe: 'Reflexive Verben', status: 'coming' },
            { id: 'a1-18', title: 'Perfekt: haben/sein + Partizip II', titleDe: 'Perfekt', status: 'coming' },
          ]
        },
        {
          title: 'Предложения',
          icon: '📝',
          topics: [
            { id: 'a1-04', title: 'Порядок слов в предложении', titleDe: 'Wortstellung' },
            { id: 'a1-05', title: 'W-Fragen и Ja/Nein-Fragen', titleDe: 'Fragesätze' },
            { id: 'a1-11', title: 'Отрицание nicht / kein', titleDe: 'Negation' },
            { id: 'a1-19', title: 'Imperativ', titleDe: 'Imperativ', status: 'coming' },
            { id: 'a1-20', title: 'Придаточные с weil и dass', titleDe: 'Nebensätze mit weil und dass', status: 'coming' },
          ]
        },
        {
          title: 'Прилагательные и наречия',
          icon: '🎨',
          topics: [
            { id: 'a1-21', title: 'Базовые прилагательные', titleDe: 'Grundlegende Adjektive', status: 'coming' },
            { id: 'a1-22', title: 'Сравнительная и превосходная степень', titleDe: 'Komparativ und Superlativ', status: 'coming' },
          ]
        },
        {
          title: 'Предлоги',
          icon: '📍',
          topics: [
            { id: 'a1-23', title: 'Предлоги места', titleDe: 'Lokale Präpositionen', status: 'coming' },
            { id: 'a1-24', title: 'Предлоги времени', titleDe: 'Temporale Präpositionen', status: 'coming' },
            { id: 'a1-25', title: 'Предлоги с Akkusativ и Dativ', titleDe: 'Präpositionen mit Akk/Dat', status: 'coming' },
          ]
        }
      ]
    },
    {
      id: 'A2',
      title: 'A2 — Базовый средний уровень',
      titleDe: 'Grundstufe',
      description: 'Расширение: времена, придаточные предложения, склонение прилагательных',
      color: '#4f8ff7',
      icon: '📘',
      groups: [
        {
          title: 'Времена',
          icon: '⏰',
          topics: [
            { id: 'a2-01', title: 'Präteritum: sein, haben, модальные', titleDe: 'Präteritum', status: 'coming' },
            { id: 'a2-02', title: 'Plusquamperfekt — основы', titleDe: 'Plusquamperfekt', status: 'coming' },
            { id: 'a2-03', title: 'Futur I — основы', titleDe: 'Futur I', status: 'coming' },
          ]
        },
        {
          title: 'Падежи и предлоги',
          icon: '🔀',
          topics: [
            { id: 'a2-04', title: 'Падежи — углубление', titleDe: 'Kasus — Vertiefung', status: 'coming' },
            { id: 'a2-05', title: 'Genitiv — основы', titleDe: 'Genitiv', status: 'coming' },
            { id: 'a2-06', title: 'Wechselpräpositionen', titleDe: 'Wechselpräpositionen', status: 'coming' },
          ]
        },
        {
          title: 'Глаголы — углубление',
          icon: '⚡',
          topics: [
            { id: 'a2-07', title: 'Сильные и слабые глаголы', titleDe: 'Starke und schwache Verben', status: 'coming' },
            { id: 'a2-08', title: 'Отделяемые и неотделяемые приставки', titleDe: 'Trennbare/untrennbare Präfixe', status: 'coming' },
            { id: 'a2-09', title: 'lassen и werden', titleDe: 'lassen und werden', status: 'coming' },
            { id: 'a2-10', title: 'Глаголы с Dativ и Akkusativ', titleDe: 'Verben mit Dativ/Akkusativ', status: 'coming' },
          ]
        },
        {
          title: 'Модальные конструкции',
          icon: '🔧',
          topics: [
            { id: 'a2-11', title: 'Модальные глаголы — углубление', titleDe: 'Modalverben — Vertiefung', status: 'coming' },
            { id: 'a2-12', title: 'sollte / könnte / müsste / hätte / wäre', titleDe: 'Konjunktiv II der Modalverben', status: 'coming' },
          ]
        },
        {
          title: 'Придаточные предложения',
          icon: '🔗',
          topics: [
            { id: 'a2-13', title: 'wenn, obwohl', titleDe: 'Nebensätze mit wenn, obwohl', status: 'coming' },
            { id: 'a2-14', title: 'als, bevor, nachdem, während', titleDe: 'Temporale Nebensätze', status: 'coming' },
            { id: 'a2-15', title: 'zu + Infinitiv / um…zu / ohne…zu', titleDe: 'Infinitivkonstruktionen', status: 'coming' },
            { id: 'a2-16', title: 'Относительные предложения', titleDe: 'Relativsätze', status: 'coming' },
          ]
        },
        {
          title: 'Прилагательные и Пассив',
          icon: '🎨',
          topics: [
            { id: 'a2-17', title: 'Склонение прилагательных', titleDe: 'Adjektivdeklination', status: 'coming' },
            { id: 'a2-18', title: 'Passiv Präsens', titleDe: 'Passiv Präsens', status: 'coming' },
          ]
        }
      ]
    },
    {
      id: 'B1',
      title: 'B1 — Средний уровень',
      titleDe: 'Mittelstufe',
      description: 'Свобода речи: Konjunktiv II, сложный пассив, связки, словообразование',
      color: '#fbbf24',
      icon: '🏆',
      groups: [
        {
          title: 'Времена — все основные',
          icon: '⏰',
          topics: [
            { id: 'b1-01', title: 'Plusquamperfekt', titleDe: 'Plusquamperfekt', status: 'coming' },
            { id: 'b1-02', title: 'Futur I и Futur II', titleDe: 'Futur I und II', status: 'coming' },
            { id: 'b1-03', title: 'Präteritum — широкое использование', titleDe: 'Präteritum — Vertiefung', status: 'coming' },
          ]
        },
        {
          title: 'Konjunktiv II',
          icon: '💭',
          topics: [
            { id: 'b1-04', title: 'wäre, hätte, würde + Infinitiv', titleDe: 'Konjunktiv II', status: 'coming' },
            { id: 'b1-05', title: 'könnte, sollte, müsste, dürfte', titleDe: 'Konjunktiv II der Modalverben', status: 'coming' },
            { id: 'b1-06', title: 'Условные предложения', titleDe: 'Konditionalsätze', status: 'coming' },
          ]
        },
        {
          title: 'Passiv — все формы',
          icon: '🔄',
          topics: [
            { id: 'b1-07', title: 'Passiv: Präsens, Präteritum, Perfekt', titleDe: 'Passiv in allen Zeiten', status: 'coming' },
            { id: 'b1-08', title: 'Modalverb + Passiv', titleDe: 'Passiv mit Modalverben', status: 'coming' },
          ]
        },
        {
          title: 'Придаточные и связки',
          icon: '🔗',
          topics: [
            { id: 'b1-09', title: 'sobald, solange, seitdem, falls, damit', titleDe: 'Weitere Nebensätze', status: 'coming' },
            { id: 'b1-10', title: 'Относительные предложения — все падежи', titleDe: 'Relativsätze — alle Kasus', status: 'coming' },
            { id: 'b1-11', title: 'deshalb, trotzdem, außerdem, nämlich…', titleDe: 'Konnektoren', status: 'coming' },
          ]
        },
        {
          title: 'Лексика и словообразование',
          icon: '🧩',
          topics: [
            { id: 'b1-12', title: 'Nomen-Verb-Verbindungen', titleDe: 'Nomen-Verb-Verbindungen', status: 'coming' },
            { id: 'b1-13', title: 'Глаголы с предлогами', titleDe: 'Verben mit Präpositionen', status: 'coming' },
            { id: 'b1-14', title: 'Словообразование: -ung, -heit, -keit…', titleDe: 'Wortbildung', status: 'coming' },
          ]
        }
      ]
    }
  ]
};
