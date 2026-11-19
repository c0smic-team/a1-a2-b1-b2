// Lessons 5-8: W-Fragen, Genus, Ein/Kein, Plural
window.LESSONS_5_8 = [
  // ============================================================
  // LESSON 5: W-Fragen und Ja/Nein-Fragen
  // ============================================================
  {
    id: 'a1-05',
    level: 'A1',
    order: 5,
    title: 'W-Fragen и Ja/Nein-Fragen',
    titleDe: 'W-Fragen und Ja/Nein-Fragen',
    description: 'Учимся задавать вопросы по-немецки: вопросы с вопросительным словом и вопросы да/нет',
    status: 'available',
    goal: 'После этого урока вы сможете задавать любые вопросы по-немецки — с вопросительным словом (кто? что? где?) и без него (да/нет), а также правильно отвечать на них.',
    explanation: `В русском языке мы превращаем предложение в вопрос просто интонацией: «Ты пьёшь кофе?» — мы повышаем голос в конце. В немецком языке всё устроено иначе — порядок слов меняется!

В немецком есть два главных типа вопросов:

📌 **1. W-Fragen (вопросы с вопросительным словом)**

Это вопросы, которые начинаются с вопросительного слова на букву «W»:
• **Wer?** — Кто?
• **Was?** — Что?
• **Wo?** — Где?
• **Woher?** — Откуда?
• **Wohin?** — Куда?
• **Wie?** — Как?
• **Wann?** — Когда?
• **Warum?** — Почему? / Зачем?
• **Wie viel?** — Сколько? (неисчисляемое)
• **Wie viele?** — Сколько? (исчисляемое)

Порядок слов в W-Frage:
**W-Wort + Verb + Subjekt + ...**

Например: **Wo** wohnst du? — Где ты живёшь?
Глагол стоит на ВТОРОМ месте, сразу после вопросительного слова.

📌 **2. Ja/Nein-Fragen (вопросы да/нет)**

Это вопросы без вопросительного слова. На них можно ответить «да» или «нет».

Порядок слов:
**Verb + Subjekt + ...?**

Например: **Trinkst** du Kaffee? — Ты пьёшь кофе?
Глагол стоит на ПЕРВОМ месте!

📌 **Ответы на Ja/Nein-Fragen:**
• **Ja** — Да (на утвердительный вопрос)
• **Nein** — Нет (на утвердительный вопрос)
• **Doch** — Нет, наоборот! (ответ «да» на отрицательный вопрос)

Пример с «Doch»:
— Trinkst du keinen Kaffee? (Ты не пьёшь кофе?)
— **Doch**, ich trinke Kaffee! (Нет, пью!)

«Doch» — уникальное немецкое слово. В русском нет точного аналога. Оно означает: «Ты думаешь, что нет, но на самом деле — ДА!»`,
    formula: 'W-Frage: W-Wort + Verb + Subjekt + ... ? | Ja/Nein-Frage: Verb + Subjekt + ... ?',
    formsTable: {
      headers: ['W-Wort', 'Перевод', 'Пример'],
      rows: [
        ['Wer?', 'Кто?', 'Wer ist das?'],
        ['Was?', 'Что?', 'Was trinkst du?'],
        ['Wo?', 'Где?', 'Wo wohnst du?'],
        ['Woher?', 'Откуда?', 'Woher kommst du?'],
        ['Wohin?', 'Куда?', 'Wohin gehst du?'],
        ['Wie?', 'Как?', 'Wie heißt du?'],
        ['Wann?', 'Когда?', 'Wann kommst du?'],
        ['Warum?', 'Почему?', 'Warum lernst du Deutsch?'],
        ['Wie viel?', 'Сколько?', 'Wie viel kostet das?'],
        ['Wie viele?', 'Сколько? (шт.)', 'Wie viele Kinder hast du?']
      ]
    },
    examples: [
      { de: '**Wo** wohnst du? — Ich wohne in Berlin.', ru: '**Где** ты живёшь? — Я живу в Берлине.', note: 'W-Frage: вопросительное слово + глагол + подлежащее' },
      { de: '**Was** trinkst du? — Ich trinke Tee.', ru: '**Что** ты пьёшь? — Я пью чай.', note: 'Глагол стоит на втором месте' },
      { de: '**Woher** kommen Sie? — Ich komme aus Russland.', ru: '**Откуда** вы (вежл.)? — Я из России.', note: 'Sie (вежливое «вы») пишется с большой буквы' },
      { de: '**Trinkst** du Kaffee? — Ja, ich trinke Kaffee.', ru: 'Ты **пьёшь** кофе? — Да, я пью кофе.', note: 'Ja/Nein-Frage: глагол на первом месте' },
      { de: '**Sprichst** du Deutsch? — Nein, ich spreche kein Deutsch.', ru: 'Ты **говоришь** по-немецки? — Нет, я не говорю по-немецки.', note: 'Отрицание с kein' },
      { de: 'Isst du **keine** Pizza? — **Doch**, ich esse Pizza!', ru: 'Ты **не** ешь пиццу? — Нет, ем!', note: 'Doch = да! (в ответ на отрицательный вопрос)' },
      { de: '**Wie viel** kostet der Kaffee? — Er kostet zwei Euro.', ru: '**Сколько** стоит кофе? — Он стоит два евро.', note: 'Wie viel — для неисчисляемых и цен' },
      { de: '**Wann** öffnet das Café? — Es öffnet um acht Uhr.', ru: '**Когда** открывается кафе? — Оно открывается в восемь часов.', note: 'um + время = в ... часов' }
    ],
    commonMistakes: [
      { wrong: 'Wo du wohnst?', correct: 'Wo wohnst du?', explanation: 'В W-Fragen глагол стоит на ВТОРОМ месте, сразу после вопросительного слова. Нельзя ставить подлежащее перед глаголом.' },
      { wrong: 'Du trinkst Kaffee?', correct: 'Trinkst du Kaffee?', explanation: 'В Ja/Nein-Fragen глагол стоит на ПЕРВОМ месте. Нельзя строить вопрос как в русском — только интонацией.' },
      { wrong: '— Trinkst du keinen Tee? — Nein, ich trinke Tee.', correct: '— Trinkst du keinen Tee? — Doch, ich trinke Tee.', explanation: 'Если вопрос с отрицанием и ответ положительный, используйте Doch, а не Ja или Nein.' },
      { wrong: 'Was du machst?', correct: 'Was machst du?', explanation: 'Порядок слов: W-Wort + VERB + Subjekt. Глагол всегда на втором месте!' }
    ],
    connectedText: {
      title: 'Im Café (В кафе)',
      sentences: [
        { de: 'Anna geht in ein Café.', ru: 'Анна идёт в кафе.' },
        { de: 'Der Kellner fragt: „Was möchten Sie bestellen?"', ru: 'Официант спрашивает: «Что бы вы хотели заказать?»' },
        { de: 'Anna antwortet: „Ich möchte einen Kaffee, bitte."', ru: 'Анна отвечает: «Я бы хотела кофе, пожалуйста.»' },
        { de: '„Möchten Sie auch etwas essen?" — fragt der Kellner.', ru: '«Хотите ли вы также что-нибудь поесть?» — спрашивает официант.' },
        { de: '„Was haben Sie?" — fragt Anna.', ru: '«Что у вас есть?» — спрашивает Анна.' },
        { de: '„Wir haben Kuchen und Brötchen."', ru: '«У нас есть торт и булочки.»' },
        { de: '„Wie viel kostet ein Stück Kuchen?"', ru: '«Сколько стоит кусок торта?»' },
        { de: '„Drei Euro fünfzig."', ru: '«Три евро пятьдесят.»' },
        { de: '„Gut, dann nehme ich einen Kuchen. Wann schließt das Café?"', ru: '«Хорошо, тогда я возьму торт. Когда закрывается кафе?»' },
        { de: '„Um neun Uhr. Brauchen Sie noch etwas?"', ru: '«В девять часов. Вам нужно ещё что-нибудь?»' },
        { de: '„Nein, danke. Kann ich bitte die Rechnung haben?"', ru: '«Нет, спасибо. Можно мне, пожалуйста, счёт?»' }
      ]
    },
    summary: 'В немецком языке вопросы строятся порядком слов, а не только интонацией. W-Fragen: W-Wort + Verb + Subjekt. Ja/Nein-Fragen: Verb + Subjekt. На отрицательный вопрос отвечают Doch (= да, наоборот!).',
    exercises: [
      {
        type: 'multipleChoice',
        question: 'Какой порядок слов правильный для W-Frage?',
        options: [
          'W-Wort + Subjekt + Verb',
          'W-Wort + Verb + Subjekt',
          'Verb + W-Wort + Subjekt',
          'Subjekt + W-Wort + Verb'
        ],
        correctIndex: 1,
        explanation: 'В W-Fragen порядок слов: вопросительное слово (W-Wort) + глагол (Verb) + подлежащее (Subjekt). Например: Wo wohnst du?'
      },
      {
        type: 'multipleChoice',
        question: 'Как переводится вопросительное слово «Woher»?',
        options: ['Где?', 'Куда?', 'Откуда?', 'Почему?'],
        correctIndex: 2,
        explanation: 'Woher = Откуда? Например: Woher kommst du? — Откуда ты? Не путайте: Wo = где, Wohin = куда, Woher = откуда.'
      },
      {
        type: 'fillBlank',
        question: '___ heißt du? — Ich heiße Maria.',
        acceptedAnswers: ['Wie'],
        explanation: '«Wie heißt du?» = «Как тебя зовут?». Wie = Как.'
      },
      {
        type: 'fillBlank',
        question: '___ wohnst du? — Ich wohne in München.',
        acceptedAnswers: ['Wo'],
        explanation: '«Wo wohnst du?» = «Где ты живёшь?». Wo = Где.'
      },
      {
        type: 'fillBlank',
        question: '___ kommst du? — Ich komme aus der Türkei.',
        acceptedAnswers: ['Woher'],
        explanation: '«Woher kommst du?» = «Откуда ты?». Woher = Откуда.'
      },
      {
        type: 'wordOrder',
        words: ['du', 'Was', 'trinkst', '?'],
        correctOrder: ['Was', 'trinkst', 'du', '?'],
        translation: 'Что ты пьёшь?'
      },
      {
        type: 'wordOrder',
        words: ['Kaffee', 'du', 'Trinkst', '?'],
        correctOrder: ['Trinkst', 'du', 'Kaffee', '?'],
        translation: 'Ты пьёшь кофе?'
      },
      {
        type: 'wordOrder',
        words: ['Deutsch', 'Warum', 'du', 'lernst', '?'],
        correctOrder: ['Warum', 'lernst', 'du', 'Deutsch', '?'],
        translation: 'Почему ты учишь немецкий?'
      },
      {
        type: 'translation',
        question: 'Где ты работаешь?',
        acceptedAnswers: ['Wo arbeitest du?'],
        explanation: 'Wo = где, arbeitest = работаешь (du-форма глагола arbeiten). Порядок: Wo + arbeitest + du?'
      },
      {
        type: 'translation',
        question: 'Ты говоришь по-немецки?',
        acceptedAnswers: ['Sprichst du Deutsch?', 'Sprechen Sie Deutsch?'],
        explanation: 'Ja/Nein-Frage: глагол на первом месте. Sprichst du Deutsch? (на «ты») или Sprechen Sie Deutsch? (вежливая форма).'
      },
      {
        type: 'multipleChoice',
        question: '— Trinkst du keinen Kaffee? — ___, ich trinke Kaffee! (Ты хочешь ответить: «Нет, наоборот, пью!»)',
        options: ['Ja', 'Nein', 'Doch', 'Nicht'],
        correctIndex: 2,
        explanation: '«Doch» используется, когда вопрос содержит отрицание (keinen), но ответ положительный. Doch = «Нет, наоборот, да!»'
      },
      {
        type: 'errorCorrection',
        sentence: 'Wo du arbeitest?',
        correctedSentence: 'Wo arbeitest du?',
        explanation: 'В W-Fragen глагол стоит на ВТОРОМ месте, перед подлежащим: Wo arbeitest du? (а не Wo du arbeitest).'
      },
      {
        type: 'errorCorrection',
        sentence: 'Du sprichst Deutsch?',
        correctedSentence: 'Sprichst du Deutsch?',
        explanation: 'В Ja/Nein-Fragen глагол стоит на ПЕРВОМ месте: Sprichst du Deutsch? Нельзя строить вопрос только интонацией, как в русском.'
      },
      {
        type: 'fillBlank',
        question: '___ kostet das Wasser? — Zwei Euro.',
        acceptedAnswers: ['Wie viel', 'Wieviel'],
        explanation: '«Wie viel kostet...?» = «Сколько стоит...?». Wie viel используется для количества и цены.'
      },
      {
        type: 'multipleChoice',
        question: 'Какой вопрос правильно сформулирован?',
        options: [
          'Wann du kommst?',
          'Wann kommst du?',
          'Du kommst wann?',
          'Kommst wann du?'
        ],
        correctIndex: 1,
        explanation: 'Правильный порядок слов: W-Wort (Wann) + Verb (kommst) + Subjekt (du) = Wann kommst du?'
      }
    ]
  },

  // ============================================================
  // LESSON 6: Der, die, das — род существительных
  // ============================================================
  {
    id: 'a1-06',
    level: 'A1',
    order: 6,
    title: 'Der, die, das — род существительных',
    titleDe: 'Der, die, das — das Genus der Nomen',
    description: 'Три рода в немецком языке: мужской, женский, средний. Правила и подсказки для определения рода.',
    status: 'available',
    goal: 'После этого урока вы будете знать три рода немецких существительных и сможете угадывать род по окончанию слова и другим подсказкам.',
    explanation: `В русском языке есть три рода: мужской (стол), женский (книга), средний (окно). В немецком тоже три рода, НО они часто не совпадают с русским!

📌 **Три рода (Genus):**
• **Maskulin (мужской род)** — артикль **der**: der Tisch (стол), der Mann (мужчина)
• **Feminin (женский род)** — артикль **die**: die Lampe (лампа), die Frau (женщина)
• **Neutrum (средний род)** — артикль **das**: das Fenster (окно), das Kind (ребёнок)

⚠️ Важно! Род в немецком и русском часто НЕ совпадает:
• «девочка» в русском — женский род, а das Mädchen — средний род (das)!
• «стул» в русском — мужской род, и der Stuhl — тоже мужской (der). Совпадение!
• «лампа» в русском — женский род, и die Lampe — тоже женский (die). Повезло!

Артикль нужно заучивать с каждым новым словом! Но есть подсказки:

📌 **Обычно МУЖСКОЙ род (der):**
• Лица мужского пола: der Vater (отец), der Bruder (брат)
• Дни недели: der Montag, der Dienstag...
• Месяцы: der Januar, der Februar...
• Времена года: der Frühling, der Sommer, der Herbst, der Winter
• Окончание **-er**: der Computer, der Lehrer
• Окончание **-en**: der Garten (сад)
• Окончание **-ling**: der Frühling (весна), der Schmetterling (бабочка)

📌 **Обычно ЖЕНСКИЙ род (die):**
• Лица женского пола: die Mutter (мать), die Schwester (сестра)
• Окончание **-e** (очень много слов!): die Lampe, die Straße (улица)
• Окончание **-ung**: die Wohnung (квартира), die Übung (упражнение)
• Окончание **-heit**: die Freiheit (свобода), die Gesundheit (здоровье)
• Окончание **-keit**: die Möglichkeit (возможность)
• Окончание **-schaft**: die Freundschaft (дружба)
• Окончание **-tion**: die Information, die Situation
• Окончание **-ie**: die Energie, die Melodie

📌 **Обычно СРЕДНИЙ род (das):**
• Окончание **-chen** (уменьшительное): das Mädchen (девочка), das Brötchen (булочка)
• Окончание **-lein** (уменьшительное): das Büchlein (книжечка)
• Окончание **-um**: das Museum, das Zentrum
• Окончание **-ment**: das Dokument, das Instrument
• Приставка **Ge-**: das Gebäude (здание), das Gespräch (разговор)
• Глаголы как существительные: das Essen (еда, от essen), das Leben (жизнь, от leben)

📌 **Почему род важен?**
Артикль меняется в разных падежах (мы изучим это позже). Если вы не знаете род — вы не сможете правильно склонять. Поэтому ВСЕГДА учите слово вместе с артиклем!

Не «Tisch», а «**der** Tisch».
Не «Lampe», а «**die** Lampe».
Не «Fenster», а «**das** Fenster».`,
    formula: 'der (maskulin) | die (feminin) | das (neutrum)',
    formsTable: {
      headers: ['Род', 'Артикль', 'Подсказки по окончаниям', 'Примеры'],
      rows: [
        ['Maskulin', 'der', '-er, -en, -ling, дни/месяцы/сезоны', 'der Tisch, der Lehrer, der Montag'],
        ['Feminin', 'die', '-e, -ung, -heit, -keit, -schaft, -tion, -ie', 'die Lampe, die Wohnung, die Freiheit'],
        ['Neutrum', 'das', '-chen, -lein, -um, -ment, Ge-', 'das Mädchen, das Museum, das Gebäude']
      ]
    },
    examples: [
      { de: '**Der** Tisch ist groß.', ru: 'Стол большой.', note: 'der Tisch (die Tische) — мужской род, окончание -isch не по правилу, нужно запомнить' },
      { de: '**Die** Lampe ist neu.', ru: 'Лампа новая.', note: 'die Lampe (die Lampen) — женский род, окончание -e → обычно die' },
      { de: '**Das** Fenster ist offen.', ru: 'Окно открыто.', note: 'das Fenster (die Fenster) — средний род, окончание -er, но не человек → das' },
      { de: '**Die** Wohnung ist schön.', ru: 'Квартира красивая.', note: 'die Wohnung (die Wohnungen) — окончание -ung → всегда die' },
      { de: '**Das** Mädchen spielt im Garten.', ru: 'Девочка играет в саду.', note: 'das Mädchen (die Mädchen) — окончание -chen → всегда das, даже если это девочка!' },
      { de: '**Der** Frühling ist warm.', ru: 'Весна тёплая.', note: 'der Frühling — время года → der; окончание -ling → тоже der' },
      { de: '**Die** Küche ist klein, aber gemütlich.', ru: 'Кухня маленькая, но уютная.', note: 'die Küche (die Küchen) — окончание -e → обычно die' },
      { de: '**Das** Bad ist sauber.', ru: 'Ванная комната чистая.', note: 'das Bad (die Bäder) — средний род, нужно запомнить' }
    ],
    commonMistakes: [
      { wrong: 'Die Mädchen ist klein.', correct: 'Das Mädchen ist klein.', explanation: 'Mädchen — средний род (das), потому что окончание -chen всегда даёт средний род, даже если речь о девочке.' },
      { wrong: 'Der Wohnung ist groß.', correct: 'Die Wohnung ist groß.', explanation: 'Все слова на -ung — женский род (die). Die Wohnung, die Übung, die Zeitung...' },
      { wrong: 'Das Stuhl ist braun.', correct: 'Der Stuhl ist braun.', explanation: 'Der Stuhl — мужской род. Нужно запомнить артикль с каждым словом!' },
      { wrong: 'Ich lerne Tisch.', correct: 'Ich lerne „der Tisch".', explanation: 'Всегда учите слово ВМЕСТЕ с артиклем. Не «Tisch», а «der Tisch».' }
    ],
    connectedText: {
      title: 'Meine Wohnung (Моя квартира)',
      sentences: [
        { de: 'Ich habe eine Wohnung in Berlin.', ru: 'У меня есть квартира в Берлине.' },
        { de: 'Die Wohnung hat drei Zimmer.', ru: 'В квартире три комнаты.' },
        { de: 'Das Wohnzimmer ist groß und hell.', ru: 'Гостиная большая и светлая.' },
        { de: 'Der Tisch steht in der Mitte.', ru: 'Стол стоит посередине.' },
        { de: 'Die Lampe hängt über dem Tisch.', ru: 'Лампа висит над столом.' },
        { de: 'Das Schlafzimmer ist klein, aber gemütlich.', ru: 'Спальня маленькая, но уютная.' },
        { de: 'Das Bett ist neu und bequem.', ru: 'Кровать новая и удобная.' },
        { de: 'Die Küche ist mein Lieblingsraum.', ru: 'Кухня — моя любимая комната.' },
        { de: 'Der Stuhl am Fenster ist sehr alt.', ru: 'Стул у окна очень старый.' },
        { de: 'Das Bad ist sauber und modern.', ru: 'Ванная комната чистая и современная.' },
        { de: 'Die Tür ist weiß und die Wände sind blau.', ru: 'Дверь белая, а стены голубые.' }
      ]
    },
    summary: 'В немецком три рода: der (мужской), die (женский), das (средний). Род часто не совпадает с русским. Есть подсказки по окончаниям: -ung, -heit, -keit → die; -chen, -lein → das; -ling → der. Всегда учите слово вместе с артиклем!',
    exercises: [
      {
        type: 'multipleChoice',
        question: 'Какой артикль у слова «Lampe» (лампа)?',
        options: ['der Lampe', 'die Lampe', 'das Lampe'],
        correctIndex: 1,
        explanation: 'Die Lampe — женский род. Слова на -e чаще всего женского рода (die).'
      },
      {
        type: 'multipleChoice',
        question: 'Какой артикль у слова «Mädchen» (девочка)?',
        options: ['der Mädchen', 'die Mädchen', 'das Mädchen'],
        correctIndex: 2,
        explanation: 'Das Mädchen — средний род! Окончание -chen ВСЕГДА даёт средний род (das), даже если речь о девочке.'
      },
      {
        type: 'multipleChoice',
        question: 'Какой артикль у слова «Wohnung» (квартира)?',
        options: ['der Wohnung', 'die Wohnung', 'das Wohnung'],
        correctIndex: 1,
        explanation: 'Die Wohnung — женский род. Все слова на -ung — ВСЕГДА женский род (die).'
      },
      {
        type: 'fillBlank',
        question: '___ Tisch ist groß. (стол — большой)',
        acceptedAnswers: ['Der'],
        explanation: 'Der Tisch — мужской род. Артикль мужского рода — der.'
      },
      {
        type: 'fillBlank',
        question: '___ Fenster ist offen. (окно — открыто)',
        acceptedAnswers: ['Das'],
        explanation: 'Das Fenster — средний род. Артикль среднего рода — das.'
      },
      {
        type: 'fillBlank',
        question: '___ Küche ist klein. (кухня — маленькая)',
        acceptedAnswers: ['Die'],
        explanation: 'Die Küche — женский род. Слова на -e обычно женского рода.'
      },
      {
        type: 'multipleChoice',
        question: 'Слова с окончанием -ung — это обычно...',
        options: ['мужской род (der)', 'женский род (die)', 'средний род (das)', 'может быть любой род'],
        correctIndex: 1,
        explanation: 'Окончание -ung ВСЕГДА указывает на женский род: die Wohnung, die Übung, die Zeitung, die Ordnung...'
      },
      {
        type: 'fillBlank',
        question: '___ Frühling ist meine Lieblingsjahreszeit. (весна — моё любимое время года)',
        acceptedAnswers: ['Der'],
        explanation: 'Der Frühling — мужской род. Все времена года мужского рода: der Frühling, der Sommer, der Herbst, der Winter.'
      },
      {
        type: 'translation',
        question: 'Стул старый.',
        acceptedAnswers: ['Der Stuhl ist alt.'],
        explanation: 'Der Stuhl (мужской род) + ist (есть/является) + alt (старый).'
      },
      {
        type: 'translation',
        question: 'Кровать новая.',
        acceptedAnswers: ['Das Bett ist neu.'],
        explanation: 'Das Bett (средний род) + ist + neu (новая/новое). Обратите внимание: в немецком кровать — среднего рода!'
      },
      {
        type: 'errorCorrection',
        sentence: 'Die Stuhl ist braun.',
        correctedSentence: 'Der Stuhl ist braun.',
        explanation: 'Stuhl — мужской род, артикль — der, а не die. Der Stuhl (die Stühle).'
      },
      {
        type: 'errorCorrection',
        sentence: 'Der Küche ist modern.',
        correctedSentence: 'Die Küche ist modern.',
        explanation: 'Küche — женский род (окончание -e). Правильно: die Küche.'
      },
      {
        type: 'multipleChoice',
        question: 'Какой род у слова «Brötchen» (булочка)?',
        options: ['Maskulin (der)', 'Feminin (die)', 'Neutrum (das)'],
        correctIndex: 2,
        explanation: 'Das Brötchen — средний род. Окончание -chen всегда указывает на средний род (das).'
      },
      {
        type: 'fillBlank',
        question: '___ Tür ist weiß. (дверь — белая)',
        acceptedAnswers: ['Die'],
        explanation: 'Die Tür (die Türen) — женский род.'
      }
    ]
  },

  // ============================================================
  // LESSON 7: Ein/eine и kein/keine
  // ============================================================
  {
    id: 'a1-07',
    level: 'A1',
    order: 7,
    title: 'Ein/eine и kein/keine',
    titleDe: 'Unbestimmter Artikel und Negationsartikel',
    description: 'Неопределённый артикль (ein/eine) и отрицательный артикль (kein/keine) в именительном падеже.',
    status: 'available',
    goal: 'После этого урока вы сможете использовать неопределённый артикль (ein, eine) и отрицательный артикль (kein, keine) и понимать, когда нужен определённый, а когда неопределённый артикль.',
    explanation: `В русском языке артиклей нет. Мы говорим просто «книга», «стол», «яблоко». В немецком перед каждым существительным стоит артикль. В прошлом уроке мы выучили определённый артикль (der, die, das). Теперь — неопределённый и отрицательный.

📌 **Определённый артикль (bestimmter Artikel): der, die, das**
Используется, когда мы говорим о КОНКРЕТНОМ предмете, который уже известен:
• **Der** Apfel ist rot. — (Этот конкретный) яблоко красное.
• Где **die** Milch? — Где (та самая) молоко?

📌 **Неопределённый артикль (unbestimmter Artikel): ein, eine**
Используется, когда мы говорим о предмете впервые, он неизвестен или один из многих:
• Ich kaufe **einen** Apfel. — Я покупаю (какое-то) яблоко.
• Das ist **eine** Banane. — Это (какая-то/одна) банан.

Формы неопределённого артикля (Nominativ):
• Мужской род: **ein** (der Apfel → **ein** Apfel)
• Женский род: **eine** (die Banane → **eine** Banane)
• Средний род: **ein** (das Brot → **ein** Brot)
• Множественное число: — (артикля НЕТ! Das sind Äpfel.)

📌 **Отрицательный артикль (Negationsartikel): kein, keine**
Это как «ein», но с отрицанием. Означает «ни один», «никакой», «нет (чего-то)»:
• Ich habe **keinen** Apfel. — У меня нет яблока.
• Das ist **keine** Banane. — Это не банан.

Формы отрицательного артикля (Nominativ):
• Мужской род: **kein** (Ich habe **kein** Bruder → неправильно! → но в Nom.: Das ist **kein** Apfel.)
• Женский род: **keine** (Das ist **keine** Banane.)
• Средний род: **kein** (Das ist **kein** Brot.)
• Множественное число: **keine** (Das sind **keine** Äpfel.)

📌 **Когда что использовать?**

1. Ты впервые упоминаешь предмет → **ein/eine**
   «Ich habe **eine** Katze.» — У меня есть (одна) кошка.

2. Предмет уже известен, конкретный → **der/die/das**
   «**Die** Katze heißt Mia.» — (Эта) кошка зовётся Мия.

3. Предмета нет, отрицание → **kein/keine**
   «Ich habe **keine** Katze.» — У меня нет кошки.

📌 **Сравнение: nicht vs. kein**
• **kein** отрицает существительные с неопределённым артиклем или без артикля:
  ein Apfel → **kein** Apfel
  Milch (без артикля) → **keine** Milch
• **nicht** отрицает всё остальное (глаголы, прилагательные, существительные с определённым артиклем):
  Ich trinke **nicht**. — Я не пью.
  Das ist **nicht** der Lehrer. — Это не (тот) учитель.`,
    formula: 'ein (m), eine (f), ein (n) | kein (m), keine (f), kein (n), keine (pl)',
    formsTable: {
      headers: ['Род', 'Определённый (der/die/das)', 'Неопределённый (ein/eine)', 'Отрицательный (kein/keine)'],
      rows: [
        ['Maskulin (м.р.)', 'der', 'ein', 'kein'],
        ['Feminin (ж.р.)', 'die', 'eine', 'keine'],
        ['Neutrum (ср.р.)', 'das', 'ein', 'kein'],
        ['Plural (мн.ч.)', 'die', '— (нет артикля)', 'keine']
      ]
    },
    examples: [
      { de: 'Das ist **ein** Apfel.', ru: 'Это яблоко.', note: 'ein — неопределённый артикль для мужского рода (der Apfel → ein Apfel)' },
      { de: 'Ich kaufe **eine** Banane.', ru: 'Я покупаю банан.', note: 'eine — неопределённый артикль для женского рода (die Banane → eine Banane)' },
      { de: 'Ich brauche **ein** Brot.', ru: 'Мне нужен хлеб.', note: 'ein — неопределённый артикль для среднего рода (das Brot → ein Brot)' },
      { de: 'Das ist **kein** Käse, das ist Butter.', ru: 'Это не сыр, это масло.', note: 'kein — отрицание мужского рода (der Käse → kein Käse)' },
      { de: 'Ich habe **keine** Milch.', ru: 'У меня нет молока.', note: 'keine — отрицание женского рода (die Milch → keine Milch)' },
      { de: 'Wir haben **keine** Eier.', ru: 'У нас нет яиц.', note: 'keine — отрицание множественного числа (die Eier → keine Eier)' },
      { de: 'Ich habe **eine** Katze. **Die** Katze heißt Mia.', ru: 'У меня есть кошка. Кошку зовут Мия.', note: 'Первый раз — eine (новая информация). Второй раз — die (уже известная кошка).' },
      { de: 'Gibt es hier **ein** Café? — Nein, hier gibt es **kein** Café.', ru: 'Здесь есть кафе? — Нет, здесь нет кафе.', note: 'Вопрос с ein → отрицание с kein' }
    ],
    commonMistakes: [
      { wrong: 'Ich habe nicht Katze.', correct: 'Ich habe keine Katze.', explanation: 'Для отрицания существительных с неопределённым артиклем (или без артикля) используется kein/keine, а НЕ nicht.' },
      { wrong: 'Das ist ein Banane.', correct: 'Das ist eine Banane.', explanation: 'Banane — женский род (die Banane), поэтому неопределённый артикль — eine, а не ein.' },
      { wrong: 'Das sind ein Äpfel.', correct: 'Das sind Äpfel.', explanation: 'Во множественном числе неопределённого артикля НЕТ. Просто: Das sind Äpfel.' },
      { wrong: 'Ich habe kein Eier.', correct: 'Ich habe keine Eier.', explanation: 'Во множественном числе отрицательный артикль — keine (не kein).' }
    ],
    connectedText: {
      title: 'Im Supermarkt (В супермаркете)',
      sentences: [
        { de: 'Lisa geht in den Supermarkt.', ru: 'Лиза идёт в супермаркет.' },
        { de: 'Sie braucht ein Brot und eine Butter.', ru: 'Ей нужен хлеб и масло.' },
        { de: 'Sie nimmt auch eine Milch und einen Käse.', ru: 'Она берёт также молоко и сыр.' },
        { de: 'Lisa möchte Äpfel kaufen, aber es gibt keine Äpfel.', ru: 'Лиза хочет купить яблоки, но яблок нет.' },
        { de: '„Haben Sie Bananen?" — fragt Lisa.', ru: '«У вас есть бананы?» — спрашивает Лиза.' },
        { de: '„Ja, wir haben Bananen. Möchten Sie auch ein Ei?"', ru: '«Да, у нас есть бананы. Хотите также яйцо?»' },
        { de: '„Nein, danke. Ich brauche keine Eier."', ru: '«Нет, спасибо. Мне не нужны яйца.»' },
        { de: 'An der Kasse fragt die Verkäuferin: „Brauchen Sie eine Tüte?"', ru: 'На кассе продавщица спрашивает: «Вам нужен пакет?»' },
        { de: '„Nein, danke. Ich habe eine Tasche."', ru: '«Нет, спасибо. У меня есть сумка.»' },
        { de: 'Lisa bezahlt und geht nach Hause.', ru: 'Лиза платит и идёт домой.' }
      ]
    },
    summary: 'Ein/eine — неопределённый артикль (когда предмет упоминается впервые). Kein/keine — отрицательный артикль (отрицание существительных). Во множественном числе: нет артикля (Äpfel) / keine (keine Äpfel). Für отрицания существительных — всегда kein, а не nicht!',
    exercises: [
      {
        type: 'multipleChoice',
        question: 'Как сказать «Это яблоко» (впервые упоминая)?',
        options: ['Das ist der Apfel.', 'Das ist ein Apfel.', 'Das ist kein Apfel.', 'Das ist Apfel.'],
        correctIndex: 1,
        explanation: 'Когда мы впервые упоминаем предмет, используем неопределённый артикль: ein Apfel (м.р.).'
      },
      {
        type: 'multipleChoice',
        question: 'Какой артикль нужен? «Das ist ___ Banane.» (Это банан.)',
        options: ['ein', 'eine', 'das', 'kein'],
        correctIndex: 1,
        explanation: 'Die Banane — женский род, поэтому неопределённый артикль — eine.'
      },
      {
        type: 'fillBlank',
        question: 'Ich habe ___ Hund. Er heißt Rex. (У меня есть собака.)',
        acceptedAnswers: ['einen'],
        explanation: 'Der Hund — мужской род. В Akkusativ (после "habe") мужской род: einen. (Ich habe einen Hund.)'
      },
      {
        type: 'fillBlank',
        question: 'Das ist ___ Brot. (Это хлеб.)',
        acceptedAnswers: ['ein'],
        explanation: 'Das Brot — средний род, неопределённый артикль в Nominativ — ein.'
      },
      {
        type: 'fillBlank',
        question: 'Ich habe ___ Auto. (У меня нет машины.)',
        acceptedAnswers: ['kein'],
        explanation: 'Das Auto — средний род. Отрицание: kein Auto. В Nominativ/Akkusativ среднего рода — kein.'
      },
      {
        type: 'fillBlank',
        question: 'Wir haben ___ Milch. (У нас нет молока.)',
        acceptedAnswers: ['keine'],
        explanation: 'Die Milch — женский род. Отрицание женского рода — keine.'
      },
      {
        type: 'multipleChoice',
        question: 'Как сказать «У нас нет яиц»?',
        options: [
          'Wir haben nicht Eier.',
          'Wir haben kein Eier.',
          'Wir haben keine Eier.',
          'Wir haben ein Eier nicht.'
        ],
        correctIndex: 2,
        explanation: 'Для отрицания во множественном числе используется keine: keine Eier. Nicht для существительных не используется.'
      },
      {
        type: 'wordOrder',
        words: ['eine', 'Das', 'ist', 'Katze', '.'],
        correctOrder: ['Das', 'ist', 'eine', 'Katze', '.'],
        translation: 'Это кошка.'
      },
      {
        type: 'wordOrder',
        words: ['keine', 'habe', 'Ich', 'Geschwister', '.'],
        correctOrder: ['Ich', 'habe', 'keine', 'Geschwister', '.'],
        translation: 'У меня нет братьев и сестёр.'
      },
      {
        type: 'translation',
        question: 'У меня нет хлеба.',
        acceptedAnswers: ['Ich habe kein Brot.'],
        explanation: 'Das Brot (средний род) → отрицание: kein Brot. Ich habe kein Brot.'
      },
      {
        type: 'translation',
        question: 'Это не сыр.',
        acceptedAnswers: ['Das ist kein Käse.'],
        explanation: 'Der Käse (мужской род) → отрицание в Nominativ: kein Käse.'
      },
      {
        type: 'errorCorrection',
        sentence: 'Ich habe nicht Katze.',
        correctedSentence: 'Ich habe keine Katze.',
        explanation: 'Для отрицания существительных используется kein/keine, а не nicht. Die Katze (ж.р.) → keine Katze.'
      },
      {
        type: 'errorCorrection',
        sentence: 'Das ist ein Milch.',
        correctedSentence: 'Das ist eine Milch.',
        explanation: 'Die Milch — женский род, поэтому неопределённый артикль — eine, не ein.'
      },
      {
        type: 'multipleChoice',
        question: 'Во множественном числе неопределённый артикль...',
        options: [
          'ein',
          'eine',
          'не существует (артикля нет)',
          'einen'
        ],
        correctIndex: 2,
        explanation: 'Во множественном числе неопределённого артикля НЕТ. Говорим просто: Das sind Äpfel (не: Das sind ein Äpfel).'
      }
    ]
  },

  // ============================================================
  // LESSON 8: Множественное число
  // ============================================================
  {
    id: 'a1-08',
    level: 'A1',
    order: 8,
    title: 'Множественное число существительных',
    titleDe: 'Der Plural der Nomen',
    description: 'Как образуется множественное число в немецком: основные типы и примеры.',
    status: 'available',
    goal: 'После этого урока вы будете знать основные способы образования множественного числа немецких существительных и сможете правильно использовать их в речи.',
    explanation: `В русском языке множественное число обычно образуется предсказуемо: стол → столы, книга → книги. В немецком всё сложнее — есть несколько способов, и нужно запоминать форму множественного числа для каждого слова.

📌 **Главное правило: во множественном числе артикль ВСЕГДА «die»!**
• der Tisch → **die** Tische
• die Frau → **die** Frauen
• das Kind → **die** Kinder
Неважно, какой род у слова — во множественном числе артикль всегда die.

📌 **Основные типы образования множественного числа:**

**Тип 1: + окончание -e**
Многие слова мужского рода. Иногда с умлаутом (¨).
• der Tisch → die Tisch**e** (стол → столы)
• der Stuhl → die Stühl**e** (стул → стулья) ← с умлаутом!
• der Freund → die Freund**e** (друг → друзья)
• der Beruf → die Beruf**e** (профессия → профессии)

**Тип 2: + окончание -er**
Многие слова среднего рода. Часто с умлаутом.
• das Kind → die Kind**er** (ребёнок → дети)
• das Buch → die Büch**er** (книга → книги) ← с умлаутом!
• das Bild → die Bild**er** (картина → картины)
• das Land → die Länd**er** (страна → страны) ← с умлаутом!

**Тип 3: + окончание -en или -n**
Очень многие слова женского рода.
• die Frau → die Frau**en** (женщина → женщины)
• die Lampe → die Lampe**n** (лампа → лампы) ← уже есть -e, добавляем только -n
• die Zeitung → die Zeitung**en** (газета → газеты)
• die Schule → die Schule**n** (школа → школы)

**Тип 4: + окончание -s**
Заимствованные слова (из английского, французского).
• das Auto → die Auto**s** (машина → машины)
• das Handy → die Handy**s** (мобильный → мобильные)
• das Hotel → die Hotel**s** (отель → отели)
• die Kamera → die Kamera**s** (камера → камеры)

**Тип 5: без изменений (–)**
Слова мужского рода на -er, -el, -en. Уменьшительные на -chen, -lein.
• der Lehrer → die Lehrer (учитель → учителя) ← ничего не меняется!
• der Schüler → die Schüler (ученик → ученики)
• das Mädchen → die Mädchen (девочка → девочки)
• das Fenster → die Fenster (окно → окна)

**Тип 6: умлаут без окончания (¨)**
Некоторые слова мужского рода меняют только гласную.
• der Vater → die V**ä**ter (отец → отцы)
• der Bruder → die Br**ü**der (брат → братья)
• die Mutter → die M**ü**tter (мать → матери)
• die Tochter → die T**ö**chter (дочь → дочери)

📌 **Как запомнить?**
К сожалению, нет одного универсального правила. Лучший способ — учить каждое слово сразу с множественным числом:
der Tisch, **die Tische**
die Frau, **die Frauen**
das Kind, **die Kinder**

В словарях множественное число обычно записывается так:
der Tisch (-e) → добавить -e
die Frau (-en) → добавить -en
das Kind (-er) → добавить -er
der Lehrer (-) → без изменений
der Vater (¨) → только умлаут`,
    formula: 'Plural: -e | -er | -en/-n | -s | – (без изменений) | ¨ (умлаут)',
    formsTable: {
      headers: ['Тип', 'Окончание', 'Единственное число', 'Множественное число'],
      rows: [
        ['1', '-e (иногда ¨+e)', 'der Tisch / der Stuhl', 'die Tische / die Stühle'],
        ['2', '-er (иногда ¨+er)', 'das Kind / das Buch', 'die Kinder / die Bücher'],
        ['3', '-en / -n', 'die Frau / die Lampe', 'die Frauen / die Lampen'],
        ['4', '-s', 'das Auto / das Handy', 'die Autos / die Handys'],
        ['5', '– (нет)', 'der Lehrer / das Fenster', 'die Lehrer / die Fenster'],
        ['6', '¨ (умлаут)', 'der Vater / die Mutter', 'die Väter / die Mütter']
      ]
    },
    examples: [
      { de: 'Der Tisch ist neu. → Die **Tische** sind neu.', ru: 'Стол новый. → Столы новые.', note: 'Тип 1: + окончание -e. Артикль во мн.ч. всегда die.' },
      { de: 'Das Kind spielt. → Die **Kinder** spielen.', ru: 'Ребёнок играет. → Дети играют.', note: 'Тип 2: + окончание -er.' },
      { de: 'Die Frau arbeitet. → Die **Frauen** arbeiten.', ru: 'Женщина работает. → Женщины работают.', note: 'Тип 3: + окончание -en.' },
      { de: 'Das Auto ist rot. → Die **Autos** sind rot.', ru: 'Машина красная. → Машины красные.', note: 'Тип 4: + окончание -s (заимствованное слово).' },
      { de: 'Der Lehrer kommt. → Die **Lehrer** kommen.', ru: 'Учитель приходит. → Учителя приходят.', note: 'Тип 5: без изменений. Только артикль меняется: der → die.' },
      { de: 'Der Vater kocht. → Die **Väter** kochen.', ru: 'Отец готовит. → Отцы готовят.', note: 'Тип 6: только умлаут (a → ä).' },
      { de: 'Das Buch ist interessant. → Die **Bücher** sind interessant.', ru: 'Книга интересная. → Книги интересные.', note: 'Тип 2 с умлаутом: u → ü + окончание -er.' },
      { de: 'Die Schule ist groß. → Die **Schulen** sind groß.', ru: 'Школа большая. → Школы большие.', note: 'Тип 3: -n (потому что слово уже заканчивается на -e → добавляем -n).' }
    ],
    commonMistakes: [
      { wrong: 'der Kinder', correct: 'die Kinder', explanation: 'Во множественном числе артикль ВСЕГДА «die», независимо от рода в единственном числе.' },
      { wrong: 'die Kindern', correct: 'die Kinder', explanation: 'Kind → Kinder (не Kindern). Окончание множественного числа — -er, а не -ern.' },
      { wrong: 'die Fraus', correct: 'die Frauen', explanation: 'Frau → Frauen (тип -en). Окончание -s используется в основном для заимствованных слов.' },
      { wrong: 'die Stuhl', correct: 'die Stühle', explanation: 'Stuhl → Stühle (тип -e с умлаутом). Нужно добавить -e и умлаут: u → ü.' }
    ],
    connectedText: {
      title: 'In der Schule (В школе)',
      sentences: [
        { de: 'In unserer Schule gibt es viele Schüler und Schülerinnen.', ru: 'В нашей школе много учеников и учениц.' },
        { de: 'Die Lehrer sind nett und freundlich.', ru: 'Учителя добрые и приветливые.' },
        { de: 'In jedem Zimmer stehen Tische und Stühle.', ru: 'В каждом кабинете стоят столы и стулья.' },
        { de: 'Die Kinder haben Hefte und Bücher.', ru: 'У детей есть тетради и книги.' },
        { de: 'An der Wand hängen Bilder und eine große Tafel.', ru: 'На стене висят картины и большая доска.' },
        { de: 'Die Schüler schreiben mit Kugelschreibern.', ru: 'Ученики пишут шариковыми ручками.' },
        { de: 'In der Pause essen die Kinder Brötchen und trinken Wasser.', ru: 'На перемене дети едят булочки и пьют воду.' },
        { de: 'Die Mädchen spielen im Garten und die Jungen spielen Fußball.', ru: 'Девочки играют в саду, а мальчики играют в футбол.' },
        { de: 'Nach der Schule gehen die Väter und Mütter ihre Kinder abholen.', ru: 'После школы отцы и матери идут забирать своих детей.' },
        { de: 'Es gibt drei Schulen in unserer Stadt.', ru: 'В нашем городе есть три школы.' }
      ]
    },
    summary: 'Во множественном числе артикль всегда die. Есть 6 типов образования: -e, -er, -en/-n, -s, без изменений, умлаут. Нужно запоминать множественное число вместе с каждым новым словом: der Tisch (die Tische), das Kind (die Kinder), die Frau (die Frauen).',
    exercises: [
      {
        type: 'multipleChoice',
        question: 'Какой артикль стоит перед ВСЕМИ существительными во множественном числе?',
        options: ['der', 'die', 'das', 'зависит от рода'],
        correctIndex: 1,
        explanation: 'Во множественном числе артикль ВСЕГДА «die» — независимо от рода в единственном числе: der Tisch → die Tische, das Kind → die Kinder.'
      },
      {
        type: 'multipleChoice',
        question: 'Как будет множественное число от «das Kind» (ребёнок)?',
        options: ['die Kindes', 'die Kinden', 'die Kinder', 'die Kinds'],
        correctIndex: 2,
        explanation: 'Das Kind → die Kinder. Тип 2: окончание -er.'
      },
      {
        type: 'fillBlank',
        question: 'der Tisch → die ___',
        acceptedAnswers: ['Tische'],
        explanation: 'Der Tisch → die Tische. Тип 1: добавляется окончание -e.'
      },
      {
        type: 'fillBlank',
        question: 'die Frau → die ___',
        acceptedAnswers: ['Frauen'],
        explanation: 'Die Frau → die Frauen. Тип 3: добавляется окончание -en.'
      },
      {
        type: 'fillBlank',
        question: 'das Auto → die ___',
        acceptedAnswers: ['Autos'],
        explanation: 'Das Auto → die Autos. Тип 4: добавляется окончание -s (заимствованное слово).'
      },
      {
        type: 'fillBlank',
        question: 'der Lehrer → die ___',
        acceptedAnswers: ['Lehrer'],
        explanation: 'Der Lehrer → die Lehrer. Тип 5: без изменений! Только артикль меняется (der → die).'
      },
      {
        type: 'fillBlank',
        question: 'der Vater → die ___',
        acceptedAnswers: ['Väter'],
        explanation: 'Der Vater → die Väter. Тип 6: только умлаут (a → ä), окончание не добавляется.'
      },
      {
        type: 'multipleChoice',
        question: 'Как будет множественное число от «das Buch» (книга)?',
        options: ['die Buche', 'die Büche', 'die Bucher', 'die Bücher'],
        correctIndex: 3,
        explanation: 'Das Buch → die Bücher. Тип 2 с умлаутом: u → ü + окончание -er.'
      },
      {
        type: 'wordOrder',
        words: ['sind', 'Kinder', 'Die', 'im Garten', '.'],
        correctOrder: ['Die', 'Kinder', 'sind', 'im Garten', '.'],
        translation: 'Дети в саду.'
      },
      {
        type: 'wordOrder',
        words: ['Stühle', 'alt', 'Die', 'sind', '.'],
        correctOrder: ['Die', 'Stühle', 'sind', 'alt', '.'],
        translation: 'Стулья старые.'
      },
      {
        type: 'translation',
        question: 'Книги интересные.',
        acceptedAnswers: ['Die Bücher sind interessant.'],
        explanation: 'Das Buch → die Bücher (мн.ч. с умлаутом и -er). Sind = есть/являются (мн.ч.).'
      },
      {
        type: 'translation',
        question: 'Учителя добрые.',
        acceptedAnswers: ['Die Lehrer sind nett.', 'Die Lehrer sind freundlich.'],
        explanation: 'Der Lehrer → die Lehrer (без изменений). Nett/freundlich = добрый/приветливый.'
      },
      {
        type: 'errorCorrection',
        sentence: 'Der Kinder spielen im Garten.',
        correctedSentence: 'Die Kinder spielen im Garten.',
        explanation: 'Во множественном числе артикль всегда die, а не der. Die Kinder spielen im Garten.'
      },
      {
        type: 'errorCorrection',
        sentence: 'Die Fraus arbeiten hier.',
        correctedSentence: 'Die Frauen arbeiten hier.',
        explanation: 'Frau → Frauen (не Fraus). Тип 3: окончание -en. Окончание -s только для заимствованных слов.'
      }
    ]
  }
];
