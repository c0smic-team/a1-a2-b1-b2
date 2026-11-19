// Lessons 9-12: Nominativ/Akkusativ, Possessivpronomen, Negation, Dativ
window.LESSONS_9_12 = [
  // ==================== LESSON 9 ====================
  {
    id: 'a1-09',
    level: 'A1',
    order: 9,
    title: 'Nominativ и Akkusativ',
    titleDe: 'Nominativ und Akkusativ',
    description: 'Падежи в немецком языке: кто делает и кого/что',
    status: 'available',
    goal: 'После этого урока вы сможете различать именительный (Nominativ) и винительный (Akkusativ) падежи, правильно менять артикли и строить предложения с прямым дополнением.',

    explanation: `Что такое падежи (Fälle / Kasus)?

В русском языке мы меняем окончания слов, чтобы показать их роль в предложении. Например: «кот» → «кота» → «коту». В немецком языке окончания существительных почти не меняются — вместо этого меняются АРТИКЛИ (der, die, das → den, dem и т.д.).

Падеж — это форма слова, которая показывает, ЧТО это слово делает в предложении. В немецком 4 падежа. Сегодня мы учим два первых.

📗 Nominativ (именительный падеж) — КТО? ЧТО?
Nominativ отвечает на вопрос «кто?» или «что?». Это ПОДЛЕЖАЩЕЕ — тот, кто выполняет действие.

• **Der Mann** liest ein Buch. — **Мужчина** читает книгу. (Кто читает? — мужчина)
• **Die Frau** kauft Milch. — **Женщина** покупает молоко. (Кто покупает? — женщина)
• **Das Kind** spielt. — **Ребёнок** играет. (Кто играет? — ребёнок)

📕 Akkusativ (винительный падеж) — КОГО? ЧТО?
Akkusativ отвечает на вопрос «кого?» или «что?». Это ПРЯМОЕ ДОПОЛНЕНИЕ — объект действия, на который направлено действие.

• Ich sehe **den Mann**. — Я вижу **мужчину**. (Кого вижу? — мужчину)
• Er kauft **die Milch**. — Он покупает **молоко**. (Что покупает? — молоко)
• Sie liest **das Buch**. — Она читает **книгу**. (Что читает? — книгу)

⚡ Главное правило: в Akkusativ меняется ТОЛЬКО мужской род!
der → den, ein → einen. Женский, средний и множественное число НЕ меняются!

Глаголы, после которых нужен Akkusativ:
haben (иметь), sehen (видеть), kaufen (покупать), trinken (пить), essen (есть), lesen (читать), brauchen (нуждаться), suchen (искать), nehmen (брать), finden (находить), möchten (хотеть бы).

Как определить падеж? Задайте вопрос:
1. Кто делает? → Nominativ
2. Кого/что (делают)? → Akkusativ

Пример: Der Junge kauft den Apfel.
— Кто покупает? Der Junge → Nominativ
— Что покупает? den Apfel → Akkusativ`,

    formula: 'Subjekt (Nominativ) + Verb + Objekt (Akkusativ): Ich kaufe den Apfel.',

    formsTable: {
      headers: ['', 'Maskulin (м.р.)', 'Feminin (ж.р.)', 'Neutrum (ср.р.)', 'Plural (мн.ч.)'],
      rows: [
        ['Nominativ (best.)', 'der', 'die', 'das', 'die'],
        ['Akkusativ (best.)', 'den', 'die', 'das', 'die'],
        ['Nominativ (unbest.)', 'ein', 'eine', 'ein', '—'],
        ['Akkusativ (unbest.)', 'einen', 'eine', 'ein', '—']
      ]
    },

    examples: [
      { de: '**Der Vater** kauft **den Saft**.', ru: 'Отец покупает сок.', note: 'der Saft → den Saft (м.р., Akkusativ)' },
      { de: 'Ich sehe **einen Mann**.', ru: 'Я вижу одного мужчину.', note: 'ein Mann → einen Mann (м.р., Akkusativ)' },
      { de: 'Sie trinkt **die Milch**.', ru: 'Она пьёт молоко.', note: 'die Milch → die Milch (ж.р. не меняется!)' },
      { de: 'Wir essen **das Brot**.', ru: 'Мы едим хлеб.', note: 'das Brot → das Brot (ср.р. не меняется!)' },
      { de: '**Das Kind** braucht **einen Apfel**.', ru: 'Ребёнку нужно яблоко.', note: 'Das Kind = Nominativ, einen Apfel = Akkusativ' },
      { de: 'Er sucht **den Supermarkt**.', ru: 'Он ищет супермаркет.', note: 'der Supermarkt → den Supermarkt (м.р., Akkusativ)' },
      { de: 'Ich lese **ein Buch**.', ru: 'Я читаю книгу.', note: 'ein Buch → ein Buch (ср.р. не меняется)' },
      { de: 'Hast du **einen Bruder**?', ru: 'У тебя есть брат?', note: 'haben + Akkusativ: ein Bruder → einen Bruder' }
    ],

    commonMistakes: [
      { wrong: 'Ich sehe der Mann.', correct: 'Ich sehe den Mann.', explanation: 'После глагола sehen нужен Akkusativ. Мужской род: der → den.' },
      { wrong: 'Er kauft ein Apfel.', correct: 'Er kauft einen Apfel.', explanation: 'Apfel — мужского рода (der Apfel). В Akkusativ: ein → einen.' },
      { wrong: 'Sie trinkt den Milch.', correct: 'Sie trinkt die Milch.', explanation: 'Milch — женского рода (die Milch). В Akkusativ женский род НЕ меняется!' }
    ],

    connectedText: {
      title: 'Im Supermarkt (В супермаркете)',
      sentences: [
        { de: 'Heute gehe ich in den Supermarkt.', ru: 'Сегодня я иду в супермаркет.' },
        { de: 'Ich brauche einen Apfel und eine Banane.', ru: 'Мне нужно яблоко и банан.' },
        { de: 'Ich suche den Saft, aber ich finde ihn nicht.', ru: 'Я ищу сок, но не нахожу его.' },
        { de: 'Dann kaufe ich die Butter und das Fleisch.', ru: 'Потом я покупаю масло и мясо.' },
        { de: 'Ich sehe einen Freund — er kauft auch einen Kuchen.', ru: 'Я вижу друга — он тоже покупает торт.' },
        { de: 'Am Ende nehme ich noch ein Brot.', ru: 'В конце я ещё беру хлеб.' },
        { de: 'Ich habe jetzt alles und bezahle an der Kasse.', ru: 'Теперь у меня всё, и я плачу на кассе.' }
      ]
    },

    summary: 'Nominativ — кто/что делает (подлежащее). Akkusativ — кого/что (прямое дополнение). В Akkusativ меняется ТОЛЬКО мужской род: der → den, ein → einen. Женский, средний и множественное число остаются без изменений.',

    exercises: [
      {
        type: 'multipleChoice',
        question: 'Выберите правильный артикль: Ich sehe ___ Hund. (der Hund — собака)',
        options: ['der', 'den', 'das', 'die'],
        correctIndex: 1,
        explanation: 'Hund — мужской род (der Hund). После глагола sehen нужен Akkusativ: der → den.'
      },
      {
        type: 'multipleChoice',
        question: 'В каком падеже стоит выделенное слово? **Der Lehrer** liest ein Buch.',
        options: ['Akkusativ', 'Nominativ', 'Dativ', 'Genitiv'],
        correctIndex: 1,
        explanation: 'Der Lehrer — подлежащее (кто читает?). Подлежащее стоит в Nominativ.'
      },
      {
        type: 'multipleChoice',
        question: 'Какой артикль НЕ меняется в Akkusativ?',
        options: ['der', 'ein (м.р.)', 'die', 'einen'],
        correctIndex: 2,
        explanation: 'Артикль die (ж.р. и мн.ч.) не меняется в Akkusativ. Меняется только мужской род: der → den, ein → einen.'
      },
      {
        type: 'fillBlank',
        question: 'Er kauft ___ Kuchen. (der Kuchen — торт)',
        acceptedAnswers: ['den', 'einen'],
        explanation: 'Kuchen — мужской род. В Akkusativ: der → den (или ein → einen).'
      },
      {
        type: 'fillBlank',
        question: 'Ich trinke ___ Milch. (die Milch — молоко)',
        acceptedAnswers: ['die', 'eine'],
        explanation: 'Milch — женский род. В Akkusativ женский род не меняется: die остаётся die.'
      },
      {
        type: 'fillBlank',
        question: 'Wir brauchen ___ Brot. (das Brot — хлеб)',
        acceptedAnswers: ['das', 'ein'],
        explanation: 'Brot — средний род. В Akkusativ средний род не меняется: das остаётся das.'
      },
      {
        type: 'wordOrder',
        words: ['einen', 'Ich', 'Apfel', 'kaufe'],
        correctOrder: ['Ich', 'kaufe', 'einen', 'Apfel'],
        translation: 'Я покупаю яблоко.'
      },
      {
        type: 'wordOrder',
        words: ['den', 'Der', 'Junge', 'Saft', 'trinkt'],
        correctOrder: ['Der', 'Junge', 'trinkt', 'den', 'Saft'],
        translation: 'Мальчик пьёт сок.'
      },
      {
        type: 'translation',
        question: 'Я вижу мужчину.',
        acceptedAnswers: ['Ich sehe den Mann.', 'Ich sehe einen Mann.'],
        explanation: 'sehen + Akkusativ. Mann — мужской род: der → den (или ein → einen).'
      },
      {
        type: 'translation',
        question: 'Она читает книгу.',
        acceptedAnswers: ['Sie liest das Buch.', 'Sie liest ein Buch.'],
        explanation: 'lesen + Akkusativ. Buch — средний род: das остаётся das.'
      },
      {
        type: 'errorCorrection',
        sentence: 'Ich habe ein Bruder.',
        correctedSentence: 'Ich habe einen Bruder.',
        explanation: 'haben требует Akkusativ. Bruder — мужской род (der Bruder): ein → einen.'
      },
      {
        type: 'errorCorrection',
        sentence: 'Sie sucht der Schlüssel.',
        correctedSentence: 'Sie sucht den Schlüssel.',
        explanation: 'suchen требует Akkusativ. Schlüssel — мужской род: der → den.'
      },
      {
        type: 'multipleChoice',
        question: 'Ich esse ___ Suppe. (die Suppe — суп)',
        options: ['den', 'die', 'das', 'einen'],
        correctIndex: 1,
        explanation: 'Suppe — женский род (die Suppe). В Akkusativ женский род не меняется: die.'
      },
      {
        type: 'fillBlank',
        question: 'Hast du ___ Freund? (der Freund — друг)',
        acceptedAnswers: ['einen'],
        explanation: 'haben + Akkusativ. Freund — мужской род: ein → einen.'
      }
    ]
  },

  // ==================== LESSON 10 ====================
  {
    id: 'a1-10',
    level: 'A1',
    order: 10,
    title: 'Притяжательные местоимения',
    titleDe: 'Possessivpronomen',
    description: 'Мой, твой, его, её — mein, dein, sein, ihr',
    status: 'available',
    goal: 'После этого урока вы сможете рассказывать о своей семье и принадлежности вещей, используя притяжательные местоимения mein, dein, sein, ihr и другие.',

    explanation: `Притяжательные местоимения (Possessivpronomen) — это слова «мой», «твой», «его», «её» и т.д. Они показывают, КОМУ принадлежит что-то.

В немецком притяжательные местоимения зависят от ЛИЦА (кто владеет):
• ich → mein (мой)
• du → dein (твой)
• er → sein (его)
• sie → ihr (её)
• es → sein (его, для среднего рода)
• wir → unser (наш)
• ihr → euer (ваш, для «вы» на «ты»)
• sie (они) → ihr (их)
• Sie (Вы) → Ihr (Ваш, вежливая форма)

⚡ Важнейшее правило: притяжательные местоимения склоняются КАК ein/eine!
Окончание зависит НЕ от владельца, а от существительного, которое идёт ПОСЛЕ.

📗 Nominativ (именительный):
• Мужской род (der): mein Bruder, dein Bruder, sein Bruder
• Женский род (die): mein-e Schwester, dein-e Schwester, sein-e Schwester
• Средний род (das): mein Kind, dein Kind, sein Kind
• Множественное число: mein-e Eltern, dein-e Eltern, sein-e Eltern

📕 Akkusativ (винительный) — меняется ТОЛЬКО мужской род!
• Мужской род: mein-en Bruder, dein-en Bruder, sein-en Bruder
• Женский род: mein-e Schwester (без изменений)
• Средний род: mein Kind (без изменений)

Сравните с русским языком:
мой брат / моя сестра / моё дитя — род зависит от существительного, а не от владельца.
Точно так же и в немецком: mein Bruder / meine Schwester / mein Kind.

⚠️ Особенность слова euer (ваш):
Когда добавляется окончание -e или -en, буква «e» в середине выпадает:
euer → eure Mutter (не «euere»), euren Vater (не «eueren»).

Примеры в контексте семьи:
• Mein Vater heißt Thomas. — Моего отца зовут Томас.
• Deine Mutter ist sehr nett. — Твоя мама очень милая.
• Sein Bruder wohnt in Berlin. — Его брат живёт в Берлине.
• Ihre Schwester studiert Medizin. — Её сестра изучает медицину.`,

    formula: 'Possessivpronomen + Endung (wie ein/eine) + Nomen: mein Bruder, meine Schwester, meinen Bruder (Akk)',

    formsTable: {
      headers: ['Лицо', 'Pronomen', 'Maskulin (Nom)', 'Feminin (Nom)', 'Neutrum (Nom)', 'Plural (Nom)', 'Maskulin (Akk)'],
      rows: [
        ['ich', 'mein', 'mein Vater', 'meine Mutter', 'mein Kind', 'meine Eltern', 'meinen Vater'],
        ['du', 'dein', 'dein Vater', 'deine Mutter', 'dein Kind', 'deine Eltern', 'deinen Vater'],
        ['er/es', 'sein', 'sein Vater', 'seine Mutter', 'sein Kind', 'seine Eltern', 'seinen Vater'],
        ['sie', 'ihr', 'ihr Vater', 'ihre Mutter', 'ihr Kind', 'ihre Eltern', 'ihren Vater'],
        ['wir', 'unser', 'unser Vater', 'unsere Mutter', 'unser Kind', 'unsere Eltern', 'unseren Vater'],
        ['ihr', 'euer', 'euer Vater', 'eure Mutter', 'euer Kind', 'eure Eltern', 'euren Vater'],
        ['sie/Sie', 'ihr/Ihr', 'ihr Vater', 'ihre Mutter', 'ihr Kind', 'ihre Eltern', 'ihren Vater']
      ]
    },

    examples: [
      { de: '**Mein Großvater** ist 80 Jahre alt.', ru: 'Моему дедушке 80 лет.', note: 'mein + Großvater (м.р., Nominativ) — без окончания' },
      { de: '**Deine Tante** wohnt in Hamburg.', ru: 'Твоя тётя живёт в Гамбурге.', note: 'dein + e (Tante — ж.р., Nominativ)' },
      { de: 'Ich besuche **seinen Onkel**.', ru: 'Я навещаю его дядю.', note: 'sein + en (Onkel — м.р., Akkusativ)' },
      { de: '**Ihre Cousine** studiert in München.', ru: 'Её кузина учится в Мюнхене.', note: 'ihr + e (Cousine — ж.р., Nominativ)' },
      { de: '**Unser Kind** geht in den Kindergarten.', ru: 'Наш ребёнок ходит в детский сад.', note: 'unser + Kind (ср.р., Nominativ) — без окончания' },
      { de: 'Kennt ihr **eure Nachbarn**?', ru: 'Вы знаете ваших соседей?', note: 'euer → eure (мн.ч., Akkusativ); «e» в середине выпадает' },
      { de: 'Er liebt **seine Familie**.', ru: 'Он любит свою семью.', note: 'sein + e (Familie — ж.р., Akkusativ = Nominativ)' },
      { de: 'Ich rufe **meinen Cousin** an.', ru: 'Я звоню моему кузену.', note: 'mein + en (Cousin — м.р., Akkusativ)' }
    ],

    commonMistakes: [
      { wrong: 'Er besucht sein Schwester.', correct: 'Er besucht seine Schwester.', explanation: 'Schwester — женский род (die Schwester). Нужно окончание -e: seine Schwester.' },
      { wrong: 'Ich sehe mein Bruder.', correct: 'Ich sehe meinen Bruder.', explanation: 'sehen + Akkusativ. Bruder — мужской род. В Akkusativ: mein → meinen.' },
      { wrong: 'Das ist euere Mutter.', correct: 'Das ist eure Mutter.', explanation: 'У euer при добавлении окончания буква «e» в середине выпадает: eure, не euere.' },
      { wrong: 'Sie liebt sein Mann.', correct: 'Sie liebt ihren Mann.', explanation: 'Она любит СВОЕГО мужа. «Её» = ihr. В Akkusativ м.р.: ihr → ihren.' }
    ],

    connectedText: {
      title: 'Meine Familie (Моя семья)',
      sentences: [
        { de: 'Ich möchte euch meine Familie vorstellen.', ru: 'Я хочу представить вам мою семью.' },
        { de: 'Mein Vater heißt Peter und meine Mutter heißt Anna.', ru: 'Моего отца зовут Петер, а мою маму — Анна.' },
        { de: 'Mein Bruder ist 20 Jahre alt — sein Name ist Max.', ru: 'Моему брату 20 лет — его зовут Макс.' },
        { de: 'Seine Freundin heißt Laura.', ru: 'Его девушку зовут Лаура.' },
        { de: 'Meine Schwester hat zwei Kinder — ihre Kinder sind noch klein.', ru: 'У моей сестры двое детей — её дети ещё маленькие.' },
        { de: 'Unsere Großeltern wohnen auf dem Land.', ru: 'Наши бабушка и дедушка живут в деревне.' },
        { de: 'Ich besuche meinen Großvater jeden Sonntag.', ru: 'Я навещаю дедушку каждое воскресенье.' },
        { de: 'Wir lieben unsere Familie sehr!', ru: 'Мы очень любим нашу семью!' }
      ]
    },

    summary: 'Притяжательные местоимения (mein, dein, sein, ihr, unser, euer, ihr) склоняются как ein/eine. Окончание зависит от рода существительного, а не от владельца. В Akkusativ мужского рода добавляется -en: meinen, deinen, seinen.',

    exercises: [
      {
        type: 'multipleChoice',
        question: 'Как сказать «мой отец»?',
        options: ['meine Vater', 'mein Vater', 'meinen Vater', 'meiner Vater'],
        correctIndex: 1,
        explanation: 'Vater — мужской род (der Vater). В Nominativ: mein Vater (без окончания, как ein).'
      },
      {
        type: 'multipleChoice',
        question: '«Её брат» — это:',
        options: ['sein Bruder', 'ihre Bruder', 'ihr Bruder', 'ihren Bruder'],
        correctIndex: 2,
        explanation: '«Её» = ihr. Bruder — мужской род, Nominativ: ihr Bruder (без окончания).'
      },
      {
        type: 'multipleChoice',
        question: 'Ich besuche ___ Großmutter. (моя бабушка)',
        options: ['mein', 'meinen', 'meine', 'meiner'],
        correctIndex: 2,
        explanation: 'Großmutter — женский род (die Großmutter). В Akkusativ ж.р. не меняется: meine Großmutter.'
      },
      {
        type: 'fillBlank',
        question: '___ Schwester wohnt in Berlin. (его сестра)',
        acceptedAnswers: ['Seine'],
        explanation: '«Его» = sein. Schwester — женский род → seine (с окончанием -e).'
      },
      {
        type: 'fillBlank',
        question: 'Er liebt ___ Kinder sehr. (его дети)',
        acceptedAnswers: ['seine'],
        explanation: '«Его» = sein. Kinder — множественное число → seine (с окончанием -e, как eine).'
      },
      {
        type: 'fillBlank',
        question: 'Wir besuchen ___ Onkel. (наш дядя)',
        acceptedAnswers: ['unseren'],
        explanation: 'besuchen + Akkusativ. Onkel — мужской род. unser → unseren (Akk, м.р.).'
      },
      {
        type: 'wordOrder',
        words: ['ist', 'Meine', 'Lehrerin', 'Mutter'],
        correctOrder: ['Meine', 'Mutter', 'ist', 'Lehrerin'],
        translation: 'Моя мама — учительница.'
      },
      {
        type: 'wordOrder',
        words: ['seinen', 'Er', 'besucht', 'Großvater'],
        correctOrder: ['Er', 'besucht', 'seinen', 'Großvater'],
        translation: 'Он навещает своего дедушку.'
      },
      {
        type: 'translation',
        question: 'Моя сестра живёт в Мюнхене.',
        acceptedAnswers: ['Meine Schwester wohnt in München.'],
        explanation: 'Schwester — ж.р., Nominativ → meine Schwester. wohnen in + Dativ: München.'
      },
      {
        type: 'translation',
        question: 'Ты знаешь его отца?',
        acceptedAnswers: ['Kennst du seinen Vater?'],
        explanation: 'kennen + Akkusativ. «Его» = sein. Vater — м.р., Akk: seinen Vater.'
      },
      {
        type: 'errorCorrection',
        sentence: 'Mein Mutter ist Ärztin.',
        correctedSentence: 'Meine Mutter ist Ärztin.',
        explanation: 'Mutter — женский род (die Mutter). Нужно окончание -e: meine Mutter.'
      },
      {
        type: 'errorCorrection',
        sentence: 'Wir lieben unser Vater.',
        correctedSentence: 'Wir lieben unseren Vater.',
        explanation: 'lieben + Akkusativ. Vater — мужской род. В Akk: unser → unseren.'
      },
      {
        type: 'fillBlank',
        question: 'Kennt ihr ___ Nachbarn? (ваши соседи, ihr-форма)',
        acceptedAnswers: ['eure'],
        explanation: '«Ваши» (ihr-форма) = euer. Мн.ч. → eure (буква e в середине выпадает).'
      }
    ]
  },

  // ==================== LESSON 11 ====================
  {
    id: 'a1-11',
    level: 'A1',
    order: 11,
    title: 'Отрицание с nicht и kein',
    titleDe: 'Negation mit nicht und kein',
    description: 'Два способа сказать «нет» и «не» в немецком',
    status: 'available',
    goal: 'После этого урока вы сможете правильно отрицать предложения, используя nicht и kein/keine, и знать, где их ставить в предложении.',

    explanation: `В русском языке мы используем «не» для всего: не хожу, не большой, не книга. В немецком есть ДВА разных слова для отрицания, и у каждого своя роль!

📕 kein / keine — отрицает СУЩЕСТВИТЕЛЬНЫЕ
Используйте kein, когда хотите сказать «никакой», «ни одного», «нет (чего-то)».
kein заменяет неопределённый артикль ein/eine или отсутствие артикля:

• Ich habe ein Auto. → Ich habe **kein** Auto. (У меня нет машины.)
• Er trinkt Milch. → Er trinkt **keine** Milch. (Он не пьёт молоко.)
• Hast du eine Schwester? → Nein, ich habe **keine** Schwester. (Нет, у меня нет сестры.)

kein склоняется КАК ein/eine:
• Мужской род (Nom): kein Hund — Женский род: keine Katze — Средний род: kein Kind
• Множественное число: keine Kinder
• Мужской род (Akk): keinen Hund (как einen!)

📗 nicht — отрицает ВСЁ ОСТАЛЬНОЕ
Используйте nicht для отрицания:
• глаголов: Ich komme **nicht**. (Я не приду.)
• прилагательных: Er ist **nicht** müde. (Он не устал.)
• наречий: Sie singt **nicht** gut. (Она поёт не хорошо.)
• существительных с определённым артиклем (der/die/das): Das ist **nicht** der Lehrer. (Это не тот учитель.)
• имён собственных: Das ist **nicht** Maria. (Это не Мария.)

📍 Где ставить nicht в предложении?
1. В КОНЦЕ предложения (общее отрицание глагола):
   Ich verstehe **nicht**. — Я не понимаю.
   Er kommt heute **nicht**. — Он сегодня не придёт.

2. ПЕРЕД тем, что вы отрицаете (частичное отрицание):
   Er ist **nicht** groß. — Он не высокий. (перед прилагательным)
   Ich wohne **nicht** in Berlin. — Я живу не в Берлине. (перед предлогом)
   Das ist **nicht** mein Buch. — Это не моя книга. (перед притяжательным)

💡 Простое правило: если перед существительным стоит ein/eine или нет артикля — используйте kein. Во всех остальных случаях — nicht.

Примеры для сравнения:
• Ich habe **kein** Geld. (Нет ein → kein) — У меня нет денег.
• Ich habe **nicht** genug Geld. (Отрицаю genug) — У меня недостаточно денег.
• Das ist **kein** Problem. (Нет ein → kein) — Это не проблема.
• Das ist **nicht** das Problem. (Есть das → nicht) — Это не та проблема.`,

    formula: 'kein + Nomen (заменяет ein/eine) | nicht + Verb/Adjektiv/Adverb/bestimmter Artikel',

    formsTable: {
      headers: ['', 'Maskulin', 'Feminin', 'Neutrum', 'Plural'],
      rows: [
        ['Nominativ', 'kein', 'keine', 'kein', 'keine'],
        ['Akkusativ', 'keinen', 'keine', 'kein', 'keine']
      ]
    },

    examples: [
      { de: 'Ich habe **kein** Auto.', ru: 'У меня нет машины.', note: 'Auto — ср.р. (das Auto), kein заменяет ein' },
      { de: 'Er trinkt **keine** Milch.', ru: 'Он не пьёт молоко.', note: 'Milch — ж.р. (die Milch), перед Milch нет артикля → keine' },
      { de: 'Ich verstehe das **nicht**.', ru: 'Я этого не понимаю.', note: 'nicht в конце — отрицание глагола' },
      { de: 'Sie ist **nicht** müde.', ru: 'Она не устала.', note: 'nicht перед прилагательным müde' },
      { de: 'Wir haben **keinen** Hund.', ru: 'У нас нет собаки.', note: 'Hund — м.р. (der Hund), Akkusativ: keinen' },
      { de: 'Das ist **nicht** mein Buch.', ru: 'Это не моя книга.', note: 'nicht перед притяжательным местоимением mein' },
      { de: 'Er spielt **nicht** gern Fußball.', ru: 'Он не любит играть в футбол.', note: 'nicht перед наречием gern' },
      { de: 'Ich habe **keine** Geschwister.', ru: 'У меня нет братьев и сестёр.', note: 'Geschwister — мн.ч., keine для мн.ч.' }
    ],

    commonMistakes: [
      { wrong: 'Ich habe nicht Auto.', correct: 'Ich habe kein Auto.', explanation: 'Перед существительным без артикля (или с ein) используется kein, не nicht.' },
      { wrong: 'Er ist kein müde.', correct: 'Er ist nicht müde.', explanation: 'Перед прилагательным используется nicht, не kein. kein стоит только перед существительными.' },
      { wrong: 'Ich komme nicht heute.', correct: 'Ich komme heute nicht.', explanation: 'При общем отрицании глагола nicht ставится в конец предложения (после обстоятельства времени).' }
    ],

    connectedText: {
      title: 'Ein langweiliger Tag (Скучный день)',
      sentences: [
        { de: 'Heute ist Samstag, aber ich habe kein Hobby.', ru: 'Сегодня суббота, но у меня нет хобби.' },
        { de: 'Ich spiele nicht gern Fußball und ich schwimme nicht.', ru: 'Я не люблю играть в футбол, и я не плаваю.' },
        { de: 'Mein Freund hat keine Zeit — er arbeitet heute.', ru: 'У моего друга нет времени — он сегодня работает.' },
        { de: 'Ich gehe nicht ins Kino, denn ich habe kein Geld.', ru: 'Я не иду в кино, потому что у меня нет денег.' },
        { de: 'Fernsehen ist nicht interessant — es gibt keine guten Filme.', ru: 'Телевизор не интересен — нет хороших фильмов.' },
        { de: 'Ich lese nicht gern Bücher, aber ich höre gern Musik.', ru: 'Я не люблю читать книги, но я люблю слушать музыку.' },
        { de: 'Na ja, vielleicht ist der Tag doch nicht so langweilig!', ru: 'Ну ладно, может, день и не такой уж скучный!' }
      ]
    },

    summary: 'kein/keine заменяет ein/eine и отрицает существительные (Ich habe kein Auto). nicht отрицает всё остальное: глаголы, прилагательные, наречия, существительные с определённым артиклем. nicht обычно стоит в конце предложения или перед тем словом, которое отрицается.',

    exercises: [
      {
        type: 'multipleChoice',
        question: 'Ich habe ___ Bruder. (У меня нет брата.)',
        options: ['nicht', 'keinen', 'kein', 'keine'],
        correctIndex: 1,
        explanation: 'Bruder — мужской род (der Bruder). haben + Akkusativ: ein Bruder → keinen Bruder.'
      },
      {
        type: 'multipleChoice',
        question: 'Das Buch ist ___ interessant. (Книга не интересная.)',
        options: ['kein', 'keine', 'nicht', 'keinen'],
        correctIndex: 2,
        explanation: 'Перед прилагательным (interessant) используется nicht, не kein.'
      },
      {
        type: 'multipleChoice',
        question: 'Какое отрицание правильное? «У нас нет детей.»',
        options: ['Wir haben nicht Kinder.', 'Wir haben keine Kinder.', 'Wir haben Kinder nicht.', 'Wir nicht haben Kinder.'],
        correctIndex: 1,
        explanation: 'Kinder — существительное без определённого артикля. Используем keine (мн.ч.).'
      },
      {
        type: 'fillBlank',
        question: 'Sie kommt heute ___.',
        acceptedAnswers: ['nicht'],
        explanation: 'Отрицание глагола. nicht стоит в конце предложения: Sie kommt heute nicht.'
      },
      {
        type: 'fillBlank',
        question: 'Er hat ___ Geld. (У него нет денег.)',
        acceptedAnswers: ['kein'],
        explanation: 'Geld — средний род (das Geld). Без артикля → kein. Средний род в Akkusativ не меняется.'
      },
      {
        type: 'fillBlank',
        question: 'Das ist ___ meine Tasche. (Это не моя сумка.)',
        acceptedAnswers: ['nicht'],
        explanation: 'Перед притяжательным местоимением (meine) используется nicht.'
      },
      {
        type: 'wordOrder',
        words: ['kein', 'Ich', 'habe', 'Hobby'],
        correctOrder: ['Ich', 'habe', 'kein', 'Hobby'],
        translation: 'У меня нет хобби.'
      },
      {
        type: 'wordOrder',
        words: ['nicht', 'Er', 'Fußball', 'gern', 'spielt'],
        correctOrder: ['Er', 'spielt', 'nicht', 'gern', 'Fußball'],
        translation: 'Он не любит играть в футбол.'
      },
      {
        type: 'translation',
        question: 'Я не понимаю.',
        acceptedAnswers: ['Ich verstehe nicht.', 'Ich verstehe das nicht.'],
        explanation: 'Отрицание глагола → nicht в конце предложения.'
      },
      {
        type: 'translation',
        question: 'У меня нет машины.',
        acceptedAnswers: ['Ich habe kein Auto.'],
        explanation: 'Auto — ср.р. (das Auto). Существительное без определённого артикля → kein Auto.'
      },
      {
        type: 'errorCorrection',
        sentence: 'Sie hat nicht Katze.',
        correctedSentence: 'Sie hat keine Katze.',
        explanation: 'Katze — существительное (die Katze). Перед существительным без артикля нужно keine, а не nicht.'
      },
      {
        type: 'errorCorrection',
        sentence: 'Das Wetter ist kein gut.',
        correctedSentence: 'Das Wetter ist nicht gut.',
        explanation: 'Перед прилагательным (gut) используется nicht, а не kein.'
      },
      {
        type: 'multipleChoice',
        question: 'Wir gehen ___ ins Kino. (Мы не идём в кино.)',
        options: ['kein', 'keinen', 'nicht', 'keine'],
        correctIndex: 2,
        explanation: 'Отрицаем действие (gehen), а не существительное с ein. Используем nicht перед предложной группой ins Kino.'
      },
      {
        type: 'fillBlank',
        question: 'Ich habe ___ Hunger. (Я не голоден.)',
        acceptedAnswers: ['keinen'],
        explanation: 'Hunger — мужской род (der Hunger). «Hunger haben» — без артикля → kein. Akkusativ м.р.: keinen.'
      }
    ]
  },

  // ==================== LESSON 12 ====================
  {
    id: 'a1-12',
    level: 'A1',
    order: 12,
    title: 'Основы Dativ',
    titleDe: 'Grundlagen des Dativs',
    description: 'Дательный падеж — кому? с кем? где?',
    status: 'available',
    goal: 'После этого урока вы сможете использовать дательный падеж (Dativ), правильно изменять артикли и употреблять глаголы и предлоги с Dativ.',

    explanation: `Мы уже знаем два падежа: Nominativ (кто?) и Akkusativ (кого/что?). Теперь учим третий!

📘 Dativ (дательный падеж) — КОМУ? ЧЕМУ?
Dativ показывает, КОМУ адресовано действие. Это косвенное дополнение — получатель.

В русском это тоже дательный падеж:
• Я даю книгу КОМУ? — брату (дательный), маме (дательный).

В немецком Dativ меняет артикли так:

Определённые артикли:
• der (м.р.) → dem: Ich gebe **dem** Mann ein Buch.
• die (ж.р.) → der: Ich helfe **der** Frau.
• das (ср.р.) → dem: Ich schenke **dem** Kind ein Spielzeug.
• die (мн.ч.) → den + -n: Ich danke **den** Kindern. (Kinder → Kindern!)

⚠️ Важно! Во множественном числе в Dativ к существительному добавляется -n (если его ещё нет):
die Kinder → den Kindern, die Freunde → den Freunden.
Но: die Frauen → den Frauen (уже есть -n).

Неопределённые артикли:
• ein (м.р.) → einem: Ich gebe **einem** Mann ein Buch.
• eine (ж.р.) → einer: Ich helfe **einer** Frau.
• ein (ср.р.) → einem: Ich schenke **einem** Kind ein Spielzeug.

📗 Глаголы с Dativ — эти глаголы ВСЕГДА требуют Dativ:
• helfen (помогать): Ich helfe **dem** Freund. — Я помогаю другу.
• geben (давать): Er gibt **der** Mutter Blumen. — Он даёт маме цветы.
• schenken (дарить): Wir schenken **dem** Kind ein Buch. — Мы дарим ребёнку книгу.
• zeigen (показывать): Sie zeigt **dem** Touristen den Weg. — Она показывает туристу дорогу.
• gefallen (нравиться): Das Buch gefällt **dem** Lehrer. — Книга нравится учителю.
• gehören (принадлежать): Das Auto gehört **meinem** Vater. — Машина принадлежит моему отцу.
• danken (благодарить): Ich danke **der** Lehrerin. — Я благодарю учительницу.

📕 Предлоги с Dativ — после этих предлогов ВСЕГДА Dativ:
• mit (с): Ich gehe **mit dem** Freund ins Kino. — Я иду с другом в кино.
• von (от, о): Das Geschenk ist **von der** Mutter. — Подарок от мамы.
• zu (к): Ich gehe **zu meinem** Onkel. — Я иду к моему дяде.
• aus (из): Er kommt **aus der** Schweiz. — Он из Швейцарии.
• bei (у, при): Ich wohne **bei meinen** Eltern. — Я живу у родителей.
• nach (после, в): Nach **dem** Frühstück gehe ich arbeiten. — После завтрака я иду работать.
• seit (с, начиная с): Ich lerne Deutsch **seit einem** Jahr. — Я учу немецкий уже год.
• gegenüber (напротив): Das Café ist **dem** Bahnhof gegenüber. — Кафе напротив вокзала.

📍 Порядок слов с Dativ и Akkusativ:
Subjekt + Verb + DATIV (кому) + AKKUSATIV (что):
• Ich gebe **dem Kind** (Dat) **einen Apfel** (Akk). — Я даю ребёнку яблоко.
• Er schenkt **seiner Mutter** (Dat) **Blumen** (Akk). — Он дарит своей маме цветы.`,

    formula: 'S + V + Dativ (кому) + Akkusativ (что) | Предлог (mit/von/zu/aus/bei/nach/seit) + Dativ',

    formsTable: {
      headers: ['', 'Maskulin', 'Feminin', 'Neutrum', 'Plural'],
      rows: [
        ['Nominativ (best.)', 'der', 'die', 'das', 'die'],
        ['Akkusativ (best.)', 'den', 'die', 'das', 'die'],
        ['Dativ (best.)', 'dem', 'der', 'dem', 'den + -n'],
        ['Nominativ (unbest.)', 'ein', 'eine', 'ein', '—'],
        ['Akkusativ (unbest.)', 'einen', 'eine', 'ein', '—'],
        ['Dativ (unbest.)', 'einem', 'einer', 'einem', '—']
      ]
    },

    examples: [
      { de: 'Ich gebe **dem Kind** einen Apfel.', ru: 'Я даю ребёнку яблоко.', note: 'das Kind → dem Kind (Dativ, ср.р.)' },
      { de: 'Er hilft **der Frau**.', ru: 'Он помогает женщине.', note: 'die Frau → der Frau (Dativ, ж.р.)' },
      { de: 'Wir schenken **dem Vater** eine Uhr.', ru: 'Мы дарим отцу часы.', note: 'der Vater → dem Vater (Dativ, м.р.)' },
      { de: 'Ich gehe **mit meinem Bruder** ins Kino.', ru: 'Я иду с братом в кино.', note: 'mit + Dativ: mein Bruder → mit meinem Bruder' },
      { de: 'Das Buch gehört **der Lehrerin**.', ru: 'Книга принадлежит учительнице.', note: 'die Lehrerin → der Lehrerin (Dativ, ж.р.)' },
      { de: 'Ich danke **den Freunden** für die Hilfe.', ru: 'Я благодарю друзей за помощь.', note: 'die Freunde → den Freunden (Dativ, мн.ч. + n)' },
      { de: 'Sie kommt **aus der** Türkei.', ru: 'Она из Турции.', note: 'aus + Dativ: die Türkei → aus der Türkei' },
      { de: 'Er zeigt **einem Touristen** den Weg.', ru: 'Он показывает туристу дорогу.', note: 'ein Tourist → einem Touristen (Dativ, м.р.)' }
    ],

    commonMistakes: [
      { wrong: 'Ich helfe die Frau.', correct: 'Ich helfe der Frau.', explanation: 'helfen требует Dativ, не Akkusativ! die Frau → der Frau (Dativ, ж.р.).' },
      { wrong: 'Ich gehe mit der Freund.', correct: 'Ich gehe mit dem Freund.', explanation: 'mit + Dativ. Freund — мужской род (der Freund): der → dem.' },
      { wrong: 'Er gibt den Kindern ein Geschenk.', correct: 'Er gibt den Kindern ein Geschenk.', explanation: 'Это правильно! Множественное число в Dativ: die Kinder → den Kindern (+n).' },
      { wrong: 'Ich danke die Lehrerin.', correct: 'Ich danke der Lehrerin.', explanation: 'danken + Dativ! die Lehrerin → der Lehrerin (Dativ, ж.р.).' }
    ],

    connectedText: {
      title: 'Der Geburtstag (День рождения)',
      sentences: [
        { de: 'Heute hat mein Bruder Geburtstag — er wird 30!', ru: 'Сегодня у моего брата день рождения — ему исполняется 30!' },
        { de: 'Ich schenke meinem Bruder ein Buch über Fußball.', ru: 'Я дарю брату книгу о футболе.' },
        { de: 'Meine Mutter gibt ihm einen Pullover.', ru: 'Мама даёт ему свитер.' },
        { de: 'Unser Vater schenkt dem Geburtstagskind eine Uhr.', ru: 'Наш отец дарит имениннику часы.' },
        { de: 'Die Blumen sind von der Großmutter.', ru: 'Цветы от бабушки.' },
        { de: 'Am Abend gehen wir mit der ganzen Familie ins Restaurant.', ru: 'Вечером мы идём со всей семьёй в ресторан.' },
        { de: 'Mein Bruder dankt allen Gästen für die schönen Geschenke.', ru: 'Мой брат благодарит всех гостей за прекрасные подарки.' },
        { de: 'Nach dem Essen zeigt er den Freunden seine Geschenke.', ru: 'После еды он показывает друзьям свои подарки.' }
      ]
    },

    summary: 'Dativ — дательный падеж (кому? чему?). Артикли: der → dem, die → der, das → dem, die (мн.ч.) → den + -n к существительному. Глаголы с Dativ: helfen, geben, schenken, zeigen, gefallen, gehören, danken. Предлоги с Dativ: mit, von, zu, aus, bei, nach, seit, gegenüber.',

    exercises: [
      {
        type: 'multipleChoice',
        question: 'Ich helfe ___ Mutter. (Я помогаю маме.)',
        options: ['die', 'der', 'dem', 'den'],
        correctIndex: 1,
        explanation: 'helfen + Dativ. Mutter — женский род (die Mutter): die → der (Dativ).'
      },
      {
        type: 'multipleChoice',
        question: 'Er gibt ___ Kind einen Ball.',
        options: ['das', 'dem', 'den', 'der'],
        correctIndex: 1,
        explanation: 'geben + Dativ (кому) + Akkusativ (что). Kind — средний род: das → dem (Dativ).'
      },
      {
        type: 'multipleChoice',
        question: 'Какой предлог НЕ требует Dativ?',
        options: ['mit', 'für', 'von', 'aus'],
        correctIndex: 1,
        explanation: 'für требует Akkusativ, не Dativ! mit, von, aus — всегда с Dativ.'
      },
      {
        type: 'fillBlank',
        question: 'Ich gehe mit ___ Freund ins Kino. (der Freund)',
        acceptedAnswers: ['dem', 'meinem', 'einem'],
        explanation: 'mit + Dativ. Freund — м.р.: der → dem, ein → einem, mein → meinem.'
      },
      {
        type: 'fillBlank',
        question: 'Sie schenkt ___ Vater eine Krawatte. (der Vater — отец)',
        acceptedAnswers: ['dem', 'ihrem', 'einem'],
        explanation: 'schenken + Dativ. Vater — м.р.: der → dem (Dativ).'
      },
      {
        type: 'fillBlank',
        question: 'Das Fahrrad gehört ___ Schwester. (die Schwester)',
        acceptedAnswers: ['der', 'meiner', 'seiner', 'ihrer', 'einer'],
        explanation: 'gehören + Dativ. Schwester — ж.р.: die → der (Dativ).'
      },
      {
        type: 'wordOrder',
        words: ['dem', 'einen', 'Kind', 'Apfel', 'gibt', 'Er'],
        correctOrder: ['Er', 'gibt', 'dem', 'Kind', 'einen', 'Apfel'],
        translation: 'Он даёт ребёнку яблоко.'
      },
      {
        type: 'wordOrder',
        words: ['mit', 'Ich', 'Bruder', 'meinem', 'gehe', 'spazieren'],
        correctOrder: ['Ich', 'gehe', 'mit', 'meinem', 'Bruder', 'spazieren'],
        translation: 'Я иду гулять с моим братом.'
      },
      {
        type: 'translation',
        question: 'Я помогаю другу.',
        acceptedAnswers: ['Ich helfe dem Freund.', 'Ich helfe einem Freund.', 'Ich helfe meinem Freund.'],
        explanation: 'helfen + Dativ. Freund — м.р.: der Freund → dem Freund.'
      },
      {
        type: 'translation',
        question: 'Она дарит маме цветы.',
        acceptedAnswers: ['Sie schenkt der Mutter Blumen.', 'Sie schenkt ihrer Mutter Blumen.'],
        explanation: 'schenken + Dativ (кому) + Akkusativ (что). Mutter — ж.р.: die → der (Dativ).'
      },
      {
        type: 'errorCorrection',
        sentence: 'Ich helfe die Lehrerin.',
        correctedSentence: 'Ich helfe der Lehrerin.',
        explanation: 'helfen требует Dativ! die Lehrerin → der Lehrerin (Dativ, ж.р.).'
      },
      {
        type: 'errorCorrection',
        sentence: 'Er geht mit die Schwester nach Hause.',
        correctedSentence: 'Er geht mit der Schwester nach Hause.',
        explanation: 'mit + Dativ! die Schwester → der Schwester (Dativ, ж.р.).'
      },
      {
        type: 'multipleChoice',
        question: 'Wir danken ___ Kindern für die Hilfe.',
        options: ['die', 'der', 'dem', 'den'],
        correctIndex: 3,
        explanation: 'danken + Dativ. Множественное число в Dativ: die → den. Kinder → Kindern (+n).'
      },
      {
        type: 'fillBlank',
        question: 'Das Geschenk ist von ___ Großmutter. (die Großmutter)',
        acceptedAnswers: ['der', 'meiner', 'seiner', 'ihrer', 'unserer'],
        explanation: 'von + Dativ. Großmutter — ж.р.: die → der (Dativ).'
      }
    ]
  }
];
