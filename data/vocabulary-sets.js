// ===================================================================
// VOCABULARY SETS — 5 тематических наборов слов (A1)
// Каждый набор: 13 слов, связный текст, 8+ упражнений
// ===================================================================

window.VOCABULARY_SETS = [

  // =====================================================================
  // SET 1: Семья и близкие (Familie und Freunde)
  // =====================================================================
  {
    id: 'vocab-01',
    level: 'A1',
    title: 'Семья и близкие',
    titleDe: 'Familie und Freunde',
    description: 'Слова о семье, родственниках и друзьях',

    words: [
      {
        de: 'Mutter',
        article: 'die',
        plural: 'die Mütter',
        ru: 'мама, мать',
        partOfSpeech: 'noun',
        exampleDe: 'Meine **Mutter** kocht sehr gut.',
        exampleRu: 'Моя мама очень хорошо готовит.'
      },
      {
        de: 'Vater',
        article: 'der',
        plural: 'die Väter',
        ru: 'папа, отец',
        partOfSpeech: 'noun',
        exampleDe: 'Mein **Vater** arbeitet als Ingenieur.',
        exampleRu: 'Мой отец работает инженером.'
      },
      {
        de: 'Bruder',
        article: 'der',
        plural: 'die Brüder',
        ru: 'брат',
        partOfSpeech: 'noun',
        exampleDe: 'Mein **Bruder** ist zehn Jahre alt.',
        exampleRu: 'Моему брату десять лет.'
      },
      {
        de: 'Schwester',
        article: 'die',
        plural: 'die Schwestern',
        ru: 'сестра',
        partOfSpeech: 'noun',
        exampleDe: 'Meine **Schwester** studiert Medizin.',
        exampleRu: 'Моя сестра изучает медицину.'
      },
      {
        de: 'Großmutter',
        article: 'die',
        plural: 'die Großmütter',
        ru: 'бабушка (также: die Oma)',
        partOfSpeech: 'noun',
        exampleDe: 'Meine **Großmutter** wohnt auf dem Land.',
        exampleRu: 'Моя бабушка живёт в деревне.'
      },
      {
        de: 'Großvater',
        article: 'der',
        plural: 'die Großväter',
        ru: 'дедушка (также: der Opa)',
        partOfSpeech: 'noun',
        exampleDe: 'Mein **Großvater** liest gern Zeitung.',
        exampleRu: 'Мой дедушка любит читать газету.'
      },
      {
        de: 'Kind',
        article: 'das',
        plural: 'die Kinder',
        ru: 'ребёнок',
        partOfSpeech: 'noun',
        exampleDe: 'Das **Kind** spielt im Garten.',
        exampleRu: 'Ребёнок играет в саду.'
      },
      {
        de: 'Tochter',
        article: 'die',
        plural: 'die Töchter',
        ru: 'дочь',
        partOfSpeech: 'noun',
        exampleDe: 'Ihre **Tochter** geht in die Schule.',
        exampleRu: 'Её дочь ходит в школу.'
      },
      {
        de: 'Sohn',
        article: 'der',
        plural: 'die Söhne',
        ru: 'сын',
        partOfSpeech: 'noun',
        exampleDe: 'Sein **Sohn** spielt gern Fußball.',
        exampleRu: 'Его сын любит играть в футбол.'
      },
      {
        de: 'Eltern',
        article: 'die',
        plural: null,
        ru: 'родители (только мн.ч.)',
        partOfSpeech: 'noun',
        exampleDe: 'Meine **Eltern** kommen aus Russland.',
        exampleRu: 'Мои родители из России.'
      },
      {
        de: 'Freund',
        article: 'der',
        plural: 'die Freunde',
        ru: 'друг; парень (бойфренд)',
        partOfSpeech: 'noun',
        exampleDe: 'Mein bester **Freund** heißt Max.',
        exampleRu: 'Моего лучшего друга зовут Макс.'
      },
      {
        de: 'Freundin',
        article: 'die',
        plural: 'die Freundinnen',
        ru: 'подруга; девушка (герлфренд)',
        partOfSpeech: 'noun',
        exampleDe: 'Meine **Freundin** kommt aus Berlin.',
        exampleRu: 'Моя подруга из Берлина.'
      },
      {
        de: 'Familie',
        article: 'die',
        plural: 'die Familien',
        ru: 'семья',
        partOfSpeech: 'noun',
        exampleDe: 'Unsere **Familie** ist sehr groß.',
        exampleRu: 'Наша семья очень большая.'
      }
    ],

    connectedText: {
      title: 'Моя семья',
      titleDe: 'Meine Familie',
      sentences: [
        {
          de: 'Hallo, ich heiße Lena und ich möchte euch von meiner **Familie** erzählen.',
          ru: 'Привет, меня зовут Лена, и я хочу рассказать вам о своей семье.'
        },
        {
          de: 'Meine **Mutter** heißt Irina und sie arbeitet als Lehrerin.',
          ru: 'Мою маму зовут Ирина, и она работает учительницей.'
        },
        {
          de: 'Mein **Vater** heißt Sergej, er ist Arzt in einem Krankenhaus.',
          ru: 'Моего папу зовут Сергей, он врач в больнице.'
        },
        {
          de: 'Meine **Eltern** leben zusammen in Moskau.',
          ru: 'Мои родители живут вместе в Москве.'
        },
        {
          de: 'Ich habe einen jüngeren **Bruder**, er heißt Dima und ist zwölf Jahre alt.',
          ru: 'У меня есть младший брат, его зовут Дима, и ему двенадцать лет.'
        },
        {
          de: 'Meine ältere **Schwester** Anna studiert in Sankt Petersburg.',
          ru: 'Моя старшая сестра Анна учится в Санкт-Петербурге.'
        },
        {
          de: 'Unsere **Großmutter** — wir sagen Oma — wohnt auf dem Land und hat einen großen Garten.',
          ru: 'Наша бабушка — мы говорим Oma — живёт в деревне, и у неё большой сад.'
        },
        {
          de: 'Unser **Großvater** liest ihr jeden Abend etwas vor.',
          ru: 'Наш дедушка каждый вечер читает ей вслух.'
        },
        {
          de: 'Die Nachbarn sagen: „Ihr **Kind** ist so höflich!" — und sie meinen meinen **Bruder** Dima.',
          ru: 'Соседи говорят: «Ваш ребёнок такой вежливый!» — и имеют в виду моего брата Диму.'
        },
        {
          de: 'Die **Tochter** von meiner Tante ist auch meine beste **Freundin**.',
          ru: 'Дочь моей тёти — также моя лучшая подруга.'
        },
        {
          de: 'Ihr **Sohn** Max ist ein guter **Freund** von Dima.',
          ru: 'Её сын Макс — хороший друг Димы.'
        },
        {
          de: 'Ich bin sehr froh, dass ich so eine große und liebe **Familie** habe!',
          ru: 'Я очень рада, что у меня такая большая и любящая семья!'
        }
      ]
    },

    exercises: [
      {
        type: 'multipleChoice',
        question: 'Как будет «мама» по-немецки?',
        options: ['der Vater', 'die Mutter', 'die Schwester', 'die Tochter'],
        correctIndex: 1,
        explanation: 'die Mutter (мн.ч.: die Mütter) — мама, мать.'
      },
      {
        type: 'multipleChoice',
        question: 'Welches Wort bedeutet «брат»?',
        options: ['der Sohn', 'der Freund', 'der Bruder', 'der Vater'],
        correctIndex: 2,
        explanation: 'der Bruder (мн.ч.: die Brüder) — брат.'
      },
      {
        type: 'fillBlank',
        question: 'Mein ___ arbeitet als Ingenieur.',
        acceptedAnswers: ['Vater'],
        explanation: 'der Vater — папа, отец. «Мой отец работает инженером.»'
      },
      {
        type: 'fillBlank',
        question: 'Meine ___ studiert in Berlin.',
        acceptedAnswers: ['Schwester'],
        explanation: 'die Schwester — сестра. «Моя сестра учится в Берлине.»'
      },
      {
        type: 'fillBlank',
        question: 'Unsere ___ wohnt auf dem Land.',
        acceptedAnswers: ['Großmutter', 'Oma'],
        explanation: 'die Großmutter (die Oma) — бабушка.'
      },
      {
        type: 'translation',
        question: 'Мой брат играет в футбол.',
        acceptedAnswers: ['Mein Bruder spielt Fußball.', 'Mein Bruder spielt gern Fußball.'],
        explanation: 'der Bruder — брат, spielen — играть, der Fußball — футбол.'
      },
      {
        type: 'translation',
        question: 'У меня большая семья.',
        acceptedAnswers: ['Ich habe eine große Familie.', 'Meine Familie ist groß.'],
        explanation: 'die Familie — семья, groß — большой.'
      },
      {
        type: 'multipleChoice',
        question: 'Какой артикль у слова «Kind» (ребёнок)?',
        options: ['der Kind', 'die Kind', 'das Kind', 'den Kind'],
        correctIndex: 2,
        explanation: 'das Kind (мн.ч.: die Kinder) — ребёнок. Средний род (das).'
      },
      {
        type: 'fillBlank',
        question: 'Meine ___ kommen aus Russland.',
        acceptedAnswers: ['Eltern'],
        explanation: 'die Eltern — родители (используется только во множественном числе).'
      },
      {
        type: 'multipleChoice',
        question: 'Как будет «дочь» по-немецки?',
        options: ['die Freundin', 'die Tochter', 'die Schwester', 'die Mutter'],
        correctIndex: 1,
        explanation: 'die Tochter (мн.ч.: die Töchter) — дочь.'
      },
      {
        type: 'translation',
        question: 'Моя подруга живёт в Берлине.',
        acceptedAnswers: ['Meine Freundin wohnt in Berlin.', 'Meine Freundin lebt in Berlin.'],
        explanation: 'die Freundin — подруга, wohnen / leben — жить.'
      },
      {
        type: 'fillBlank',
        question: 'Sein ___ spielt gern Fußball.',
        acceptedAnswers: ['Sohn'],
        explanation: 'der Sohn (мн.ч.: die Söhne) — сын.'
      }
    ]
  },

  // =====================================================================
  // SET 2: Еда и напитки (Essen und Trinken)
  // =====================================================================
  {
    id: 'vocab-02',
    level: 'A1',
    title: 'Еда и напитки',
    titleDe: 'Essen und Trinken',
    description: 'Слова о продуктах питания, напитках и приёмах пищи',

    words: [
      {
        de: 'Brot',
        article: 'das',
        plural: 'die Brote',
        ru: 'хлеб',
        partOfSpeech: 'noun',
        exampleDe: 'Ich kaufe frisches **Brot** beim Bäcker.',
        exampleRu: 'Я покупаю свежий хлеб в пекарне.'
      },
      {
        de: 'Butter',
        article: 'die',
        plural: null,
        ru: 'масло (сливочное)',
        partOfSpeech: 'noun',
        exampleDe: 'Die **Butter** ist im Kühlschrank.',
        exampleRu: 'Масло в холодильнике.'
      },
      {
        de: 'Käse',
        article: 'der',
        plural: 'die Käse',
        ru: 'сыр',
        partOfSpeech: 'noun',
        exampleDe: 'Ich esse gern **Käse** zum Frühstück.',
        exampleRu: 'Я люблю есть сыр на завтрак.'
      },
      {
        de: 'Milch',
        article: 'die',
        plural: null,
        ru: 'молоко',
        partOfSpeech: 'noun',
        exampleDe: 'Trinkst du **Milch** zum Frühstück?',
        exampleRu: 'Ты пьёшь молоко на завтрак?'
      },
      {
        de: 'Apfel',
        article: 'der',
        plural: 'die Äpfel',
        ru: 'яблоко',
        partOfSpeech: 'noun',
        exampleDe: 'Dieser **Apfel** ist sehr süß.',
        exampleRu: 'Это яблоко очень сладкое.'
      },
      {
        de: 'Banane',
        article: 'die',
        plural: 'die Bananen',
        ru: 'банан',
        partOfSpeech: 'noun',
        exampleDe: 'Ich nehme eine **Banane** als Snack mit.',
        exampleRu: 'Я беру банан с собой в качестве перекуса.'
      },
      {
        de: 'Wasser',
        article: 'das',
        plural: 'die Wasser / die Wässer',
        ru: 'вода',
        partOfSpeech: 'noun',
        exampleDe: 'Kann ich bitte ein Glas **Wasser** haben?',
        exampleRu: 'Можно мне, пожалуйста, стакан воды?'
      },
      {
        de: 'Kaffee',
        article: 'der',
        plural: 'die Kaffees',
        ru: 'кофе',
        partOfSpeech: 'noun',
        exampleDe: 'Morgens trinke ich immer **Kaffee**.',
        exampleRu: 'По утрам я всегда пью кофе.'
      },
      {
        de: 'Tee',
        article: 'der',
        plural: 'die Tees',
        ru: 'чай',
        partOfSpeech: 'noun',
        exampleDe: 'Möchtest du **Tee** oder Kaffee?',
        exampleRu: 'Ты хочешь чай или кофе?'
      },
      {
        de: 'Fleisch',
        article: 'das',
        plural: null,
        ru: 'мясо',
        partOfSpeech: 'noun',
        exampleDe: 'Meine Schwester isst kein **Fleisch**.',
        exampleRu: 'Моя сестра не ест мясо.'
      },
      {
        de: 'Salat',
        article: 'der',
        plural: 'die Salate',
        ru: 'салат',
        partOfSpeech: 'noun',
        exampleDe: 'Zum Mittagessen esse ich einen **Salat**.',
        exampleRu: 'На обед я ем салат.'
      },
      {
        de: 'Suppe',
        article: 'die',
        plural: 'die Suppen',
        ru: 'суп',
        partOfSpeech: 'noun',
        exampleDe: 'Die **Suppe** ist heiß und lecker.',
        exampleRu: 'Суп горячий и вкусный.'
      },
      {
        de: 'Frühstück',
        article: 'das',
        plural: 'die Frühstücke',
        ru: 'завтрак',
        partOfSpeech: 'noun',
        exampleDe: 'Was isst du zum **Frühstück**?',
        exampleRu: 'Что ты ешь на завтрак?'
      }
    ],

    connectedText: {
      title: 'Мой день за столом',
      titleDe: 'Mein Tag am Tisch',
      sentences: [
        {
          de: 'Jeden Morgen beginne ich mit einem guten **Frühstück**.',
          ru: 'Каждое утро я начинаю с хорошего завтрака.'
        },
        {
          de: 'Ich schneide frisches **Brot** und lege **Butter** und **Käse** darauf.',
          ru: 'Я нарезаю свежий хлеб и кладу на него масло и сыр.'
        },
        {
          de: 'Dazu trinke ich eine Tasse heißen **Kaffee** mit etwas **Milch**.',
          ru: 'К этому я пью чашку горячего кофе с небольшим количеством молока.'
        },
        {
          de: 'Manchmal esse ich auch einen **Apfel** oder eine **Banane**.',
          ru: 'Иногда я ем ещё яблоко или банан.'
        },
        {
          de: 'Mittags koche ich mir eine warme **Suppe** oder mache einen frischen **Salat**.',
          ru: 'В обед я готовлю себе тёплый суп или делаю свежий салат.'
        },
        {
          de: 'Wenn ich großen Hunger habe, esse ich auch **Fleisch** mit Reis.',
          ru: 'Когда я очень голоден, я ем ещё и мясо с рисом.'
        },
        {
          de: 'Nach dem Mittagessen trinke ich gern ein Glas kaltes **Wasser**.',
          ru: 'После обеда я люблю выпить стакан холодной воды.'
        },
        {
          de: 'Am Abend trinke ich lieber **Tee** als Kaffee, weil ich dann besser schlafe.',
          ru: 'Вечером я предпочитаю чай, а не кофе, потому что тогда лучше сплю.'
        },
        {
          de: 'Meine Mutter sagt immer: „Ein gutes **Frühstück** ist das Wichtigste am Tag!"',
          ru: 'Моя мама всегда говорит: «Хороший завтрак — самое важное за день!»'
        },
        {
          de: 'Ich denke, sie hat recht!',
          ru: 'Я думаю, она права!'
        }
      ]
    },

    exercises: [
      {
        type: 'multipleChoice',
        question: 'Какой артикль у слова «Brot» (хлеб)?',
        options: ['der Brot', 'die Brot', 'das Brot', 'den Brot'],
        correctIndex: 2,
        explanation: 'das Brot (мн.ч.: die Brote) — хлеб. Средний род (das).'
      },
      {
        type: 'multipleChoice',
        question: 'Как будет «молоко» по-немецки?',
        options: ['das Wasser', 'die Milch', 'der Tee', 'die Suppe'],
        correctIndex: 1,
        explanation: 'die Milch — молоко. Женский род (die).'
      },
      {
        type: 'fillBlank',
        question: 'Morgens trinke ich immer ___.',
        acceptedAnswers: ['Kaffee'],
        explanation: 'der Kaffee — кофе. «По утрам я всегда пью кофе.»'
      },
      {
        type: 'fillBlank',
        question: 'Ich schneide frisches ___ und lege Butter darauf.',
        acceptedAnswers: ['Brot'],
        explanation: 'das Brot — хлеб. «Я нарезаю свежий хлеб и кладу масло.»'
      },
      {
        type: 'fillBlank',
        question: 'Die ___ ist heiß und lecker.',
        acceptedAnswers: ['Suppe'],
        explanation: 'die Suppe (мн.ч.: die Suppen) — суп.'
      },
      {
        type: 'translation',
        question: 'Что ты ешь на завтрак?',
        acceptedAnswers: ['Was isst du zum Frühstück?', 'Was essen Sie zum Frühstück?'],
        explanation: 'das Frühstück — завтрак, essen — есть, zum — на (к).'
      },
      {
        type: 'translation',
        question: 'Я люблю есть сыр.',
        acceptedAnswers: ['Ich esse gern Käse.', 'Ich esse gerne Käse.'],
        explanation: 'der Käse — сыр, gern(e) essen — любить есть.'
      },
      {
        type: 'multipleChoice',
        question: 'Множественное число от «der Apfel» — это…',
        options: ['die Apfeln', 'die Äpfel', 'die Apfels', 'die Äpfeln'],
        correctIndex: 1,
        explanation: 'der Apfel → die Äpfel. При образовании множественного числа a меняется на ä (умлаут).'
      },
      {
        type: 'fillBlank',
        question: 'Möchtest du ___ oder Kaffee?',
        acceptedAnswers: ['Tee'],
        explanation: 'der Tee — чай. «Хочешь чай или кофе?»'
      },
      {
        type: 'multipleChoice',
        question: 'Какое из этих слов означает «мясо»?',
        options: ['der Salat', 'die Suppe', 'das Fleisch', 'die Butter'],
        correctIndex: 2,
        explanation: 'das Fleisch — мясо. Средний род, не имеет формы множественного числа.'
      }
    ]
  },

  // =====================================================================
  // SET 3: Дом и квартира (Haus und Wohnung)
  // =====================================================================
  {
    id: 'vocab-03',
    level: 'A1',
    title: 'Дом и квартира',
    titleDe: 'Haus und Wohnung',
    description: 'Слова о жилье, комнатах и предметах мебели',

    words: [
      {
        de: 'Haus',
        article: 'das',
        plural: 'die Häuser',
        ru: 'дом',
        partOfSpeech: 'noun',
        exampleDe: 'Unser **Haus** hat einen schönen Garten.',
        exampleRu: 'У нашего дома красивый сад.'
      },
      {
        de: 'Wohnung',
        article: 'die',
        plural: 'die Wohnungen',
        ru: 'квартира',
        partOfSpeech: 'noun',
        exampleDe: 'Die **Wohnung** liegt im dritten Stock.',
        exampleRu: 'Квартира находится на третьем этаже.'
      },
      {
        de: 'Zimmer',
        article: 'das',
        plural: 'die Zimmer',
        ru: 'комната',
        partOfSpeech: 'noun',
        exampleDe: 'Mein **Zimmer** ist klein, aber gemütlich.',
        exampleRu: 'Моя комната маленькая, но уютная.'
      },
      {
        de: 'Küche',
        article: 'die',
        plural: 'die Küchen',
        ru: 'кухня',
        partOfSpeech: 'noun',
        exampleDe: 'In der **Küche** koche ich das Abendessen.',
        exampleRu: 'На кухне я готовлю ужин.'
      },
      {
        de: 'Badezimmer',
        article: 'das',
        plural: 'die Badezimmer',
        ru: 'ванная комната (также: das Bad)',
        partOfSpeech: 'noun',
        exampleDe: 'Das **Badezimmer** ist neben dem Schlafzimmer.',
        exampleRu: 'Ванная комната рядом со спальней.'
      },
      {
        de: 'Schlafzimmer',
        article: 'das',
        plural: 'die Schlafzimmer',
        ru: 'спальня',
        partOfSpeech: 'noun',
        exampleDe: 'Im **Schlafzimmer** steht ein großes Bett.',
        exampleRu: 'В спальне стоит большая кровать.'
      },
      {
        de: 'Wohnzimmer',
        article: 'das',
        plural: 'die Wohnzimmer',
        ru: 'гостиная',
        partOfSpeech: 'noun',
        exampleDe: 'Abends sitzen wir zusammen im **Wohnzimmer**.',
        exampleRu: 'По вечерам мы сидим вместе в гостиной.'
      },
      {
        de: 'Tisch',
        article: 'der',
        plural: 'die Tische',
        ru: 'стол',
        partOfSpeech: 'noun',
        exampleDe: 'Wir essen zusammen am **Tisch**.',
        exampleRu: 'Мы едим вместе за столом.'
      },
      {
        de: 'Stuhl',
        article: 'der',
        plural: 'die Stühle',
        ru: 'стул',
        partOfSpeech: 'noun',
        exampleDe: 'Der **Stuhl** am Fenster ist sehr bequem.',
        exampleRu: 'Стул у окна очень удобный.'
      },
      {
        de: 'Bett',
        article: 'das',
        plural: 'die Betten',
        ru: 'кровать',
        partOfSpeech: 'noun',
        exampleDe: 'Ich lese gern ein Buch im **Bett**.',
        exampleRu: 'Я люблю читать книгу в кровати.'
      },
      {
        de: 'Lampe',
        article: 'die',
        plural: 'die Lampen',
        ru: 'лампа',
        partOfSpeech: 'noun',
        exampleDe: 'Die **Lampe** auf dem Tisch gibt warmes Licht.',
        exampleRu: 'Лампа на столе даёт тёплый свет.'
      },
      {
        de: 'Tür',
        article: 'die',
        plural: 'die Türen',
        ru: 'дверь',
        partOfSpeech: 'noun',
        exampleDe: 'Bitte mach die **Tür** zu!',
        exampleRu: 'Пожалуйста, закрой дверь!'
      },
      {
        de: 'Fenster',
        article: 'das',
        plural: 'die Fenster',
        ru: 'окно',
        partOfSpeech: 'noun',
        exampleDe: 'Öffne bitte das **Fenster**, es ist heiß.',
        exampleRu: 'Открой, пожалуйста, окно, жарко.'
      }
    ],

    connectedText: {
      title: 'Моя новая квартира',
      titleDe: 'Meine neue Wohnung',
      sentences: [
        {
          de: 'Letzten Monat bin ich in eine neue **Wohnung** umgezogen.',
          ru: 'В прошлом месяце я переехал в новую квартиру.'
        },
        {
          de: 'Die Wohnung ist in einem alten **Haus** im Zentrum der Stadt.',
          ru: 'Квартира находится в старом доме в центре города.'
        },
        {
          de: 'Sie hat drei **Zimmer**, eine **Küche** und ein **Badezimmer**.',
          ru: 'В ней три комнаты, кухня и ванная.'
        },
        {
          de: 'Mein **Schlafzimmer** ist nicht groß, aber dort steht ein bequemes **Bett** und eine kleine **Lampe** auf dem Nachttisch.',
          ru: 'Моя спальня небольшая, но там стоит удобная кровать и маленькая лампа на тумбочке.'
        },
        {
          de: 'Das **Wohnzimmer** ist der größte Raum — hier habe ich einen **Tisch** und vier **Stühle** für Gäste.',
          ru: 'Гостиная — самая большая комната, здесь у меня стол и четыре стула для гостей.'
        },
        {
          de: 'Das **Fenster** im Wohnzimmer ist sehr groß und es kommt viel Licht herein.',
          ru: 'Окно в гостиной очень большое, и внутрь попадает много света.'
        },
        {
          de: 'Die **Küche** ist klein, aber modern — dort koche ich jeden Abend.',
          ru: 'Кухня маленькая, но современная — там я готовлю каждый вечер.'
        },
        {
          de: 'Die **Tür** zum Badezimmer knarrt ein bisschen — ich muss sie reparieren.',
          ru: 'Дверь в ванную немного скрипит — мне нужно её починить.'
        },
        {
          de: 'Aber insgesamt bin ich sehr zufrieden mit meiner neuen **Wohnung**!',
          ru: 'Но в целом я очень доволен своей новой квартирой!'
        }
      ]
    },

    exercises: [
      {
        type: 'multipleChoice',
        question: 'Какой артикль у слова «Küche» (кухня)?',
        options: ['der Küche', 'die Küche', 'das Küche', 'den Küche'],
        correctIndex: 1,
        explanation: 'die Küche (мн.ч.: die Küchen) — кухня. Женский род (die).'
      },
      {
        type: 'multipleChoice',
        question: 'Как будет «окно» по-немецки?',
        options: ['die Tür', 'die Lampe', 'das Fenster', 'der Tisch'],
        correctIndex: 2,
        explanation: 'das Fenster (мн.ч.: die Fenster) — окно.'
      },
      {
        type: 'fillBlank',
        question: 'Im ___ steht ein großes Bett.',
        acceptedAnswers: ['Schlafzimmer'],
        explanation: 'das Schlafzimmer — спальня. «В спальне стоит большая кровать.»'
      },
      {
        type: 'fillBlank',
        question: 'Abends sitzen wir zusammen im ___.',
        acceptedAnswers: ['Wohnzimmer'],
        explanation: 'das Wohnzimmer — гостиная.'
      },
      {
        type: 'fillBlank',
        question: 'Bitte mach die ___ zu!',
        acceptedAnswers: ['Tür'],
        explanation: 'die Tür (мн.ч.: die Türen) — дверь. «Пожалуйста, закрой дверь!»'
      },
      {
        type: 'translation',
        question: 'Моя комната маленькая, но уютная.',
        acceptedAnswers: ['Mein Zimmer ist klein, aber gemütlich.', 'Mein Zimmer ist klein aber gemütlich.'],
        explanation: 'das Zimmer — комната, klein — маленький, gemütlich — уютный.'
      },
      {
        type: 'translation',
        question: 'На столе стоит лампа.',
        acceptedAnswers: ['Auf dem Tisch steht eine Lampe.', 'Eine Lampe steht auf dem Tisch.'],
        explanation: 'der Tisch — стол, die Lampe — лампа, auf dem Tisch — на столе.'
      },
      {
        type: 'multipleChoice',
        question: 'Что значит «das Bett»?',
        options: ['стул', 'стол', 'кровать', 'лампа'],
        correctIndex: 2,
        explanation: 'das Bett (мн.ч.: die Betten) — кровать.'
      },
      {
        type: 'multipleChoice',
        question: 'Множественное число от «der Stuhl» — это…',
        options: ['die Stühle', 'die Stuhlen', 'die Stühlen', 'die Stuhle'],
        correctIndex: 0,
        explanation: 'der Stuhl → die Stühle. При образовании множественного числа u меняется на ü (умлаут).'
      },
      {
        type: 'fillBlank',
        question: 'Die ___ ist in einem alten Haus.',
        acceptedAnswers: ['Wohnung'],
        explanation: 'die Wohnung (мн.ч.: die Wohnungen) — квартира.'
      }
    ]
  },

  // =====================================================================
  // SET 4: Город и транспорт (Stadt und Verkehr)
  // =====================================================================
  {
    id: 'vocab-04',
    level: 'A1',
    title: 'Город и транспорт',
    titleDe: 'Stadt und Verkehr',
    description: 'Слова о городе, местах и транспорте',

    words: [
      {
        de: 'Stadt',
        article: 'die',
        plural: 'die Städte',
        ru: 'город',
        partOfSpeech: 'noun',
        exampleDe: 'Berlin ist eine große **Stadt**.',
        exampleRu: 'Берлин — большой город.'
      },
      {
        de: 'Straße',
        article: 'die',
        plural: 'die Straßen',
        ru: 'улица',
        partOfSpeech: 'noun',
        exampleDe: 'Die **Straße** ist breit und lang.',
        exampleRu: 'Улица широкая и длинная.'
      },
      {
        de: 'Bus',
        article: 'der',
        plural: 'die Busse',
        ru: 'автобус',
        partOfSpeech: 'noun',
        exampleDe: 'Der **Bus** kommt in fünf Minuten.',
        exampleRu: 'Автобус придёт через пять минут.'
      },
      {
        de: 'U-Bahn',
        article: 'die',
        plural: 'die U-Bahnen',
        ru: 'метро',
        partOfSpeech: 'noun',
        exampleDe: 'Ich fahre jeden Tag mit der **U-Bahn** zur Arbeit.',
        exampleRu: 'Я каждый день езжу на метро на работу.'
      },
      {
        de: 'Bahnhof',
        article: 'der',
        plural: 'die Bahnhöfe',
        ru: 'вокзал, станция',
        partOfSpeech: 'noun',
        exampleDe: 'Der **Bahnhof** ist nicht weit von hier.',
        exampleRu: 'Вокзал недалеко отсюда.'
      },
      {
        de: 'Auto',
        article: 'das',
        plural: 'die Autos',
        ru: 'машина, автомобиль',
        partOfSpeech: 'noun',
        exampleDe: 'Mein **Auto** steht vor dem Haus.',
        exampleRu: 'Моя машина стоит перед домом.'
      },
      {
        de: 'Haltestelle',
        article: 'die',
        plural: 'die Haltestellen',
        ru: 'остановка',
        partOfSpeech: 'noun',
        exampleDe: 'Die **Haltestelle** ist gleich um die Ecke.',
        exampleRu: 'Остановка прямо за углом.'
      },
      {
        de: 'Supermarkt',
        article: 'der',
        plural: 'die Supermärkte',
        ru: 'супермаркет',
        partOfSpeech: 'noun',
        exampleDe: 'Im **Supermarkt** kaufe ich Obst und Gemüse.',
        exampleRu: 'В супермаркете я покупаю фрукты и овощи.'
      },
      {
        de: 'Apotheke',
        article: 'die',
        plural: 'die Apotheken',
        ru: 'аптека',
        partOfSpeech: 'noun',
        exampleDe: 'Die **Apotheke** hat bis 20 Uhr geöffnet.',
        exampleRu: 'Аптека открыта до 20 часов.'
      },
      {
        de: 'Krankenhaus',
        article: 'das',
        plural: 'die Krankenhäuser',
        ru: 'больница',
        partOfSpeech: 'noun',
        exampleDe: 'Das **Krankenhaus** ist in der Hauptstraße.',
        exampleRu: 'Больница находится на главной улице.'
      },
      {
        de: 'Post',
        article: 'die',
        plural: 'die Posten',
        ru: 'почта',
        partOfSpeech: 'noun',
        exampleDe: 'Ich muss einen Brief bei der **Post** abgeben.',
        exampleRu: 'Мне нужно отнести письмо на почту.'
      },
      {
        de: 'Park',
        article: 'der',
        plural: 'die Parks',
        ru: 'парк',
        partOfSpeech: 'noun',
        exampleDe: 'Am Sonntag gehen wir in den **Park** spazieren.',
        exampleRu: 'В воскресенье мы идём гулять в парк.'
      },
      {
        de: 'Schule',
        article: 'die',
        plural: 'die Schulen',
        ru: 'школа',
        partOfSpeech: 'noun',
        exampleDe: 'Die **Schule** beginnt um acht Uhr.',
        exampleRu: 'Школа начинается в восемь часов.'
      }
    ],

    connectedText: {
      title: 'Мой путь в школу',
      titleDe: 'Mein Weg zur Schule',
      sentences: [
        {
          de: 'Ich wohne in einer großen **Stadt** im Süden Deutschlands.',
          ru: 'Я живу в большом городе на юге Германии.'
        },
        {
          de: 'Meine **Schule** ist nicht in der Nähe, deshalb fahre ich mit dem **Bus** dorthin.',
          ru: 'Моя школа не рядом, поэтому я езжу туда на автобусе.'
        },
        {
          de: 'Die **Haltestelle** ist direkt vor unserem Haus in der Goethestraße — das ist eine ruhige **Straße**.',
          ru: 'Остановка прямо перед нашим домом на Гётештрассе — это тихая улица.'
        },
        {
          de: 'Manchmal nehme ich auch die **U-Bahn**, wenn der Bus zu spät kommt.',
          ru: 'Иногда я также еду на метро, когда автобус опаздывает.'
        },
        {
          de: 'Die nächste U-Bahn-Station ist am **Bahnhof**, das sind zehn Minuten zu Fuß.',
          ru: 'Ближайшая станция метро — на вокзале, это десять минут пешком.'
        },
        {
          de: 'Auf dem Weg zur Schule sehe ich viele Orte: einen **Supermarkt**, eine **Apotheke** und ein großes **Krankenhaus**.',
          ru: 'По дороге в школу я вижу много мест: супермаркет, аптеку и большую больницу.'
        },
        {
          de: 'Neben der Schule gibt es eine **Post**, wo meine Mutter oft Pakete abgibt.',
          ru: 'Рядом со школой есть почта, где моя мама часто отправляет посылки.'
        },
        {
          de: 'Nach der Schule gehe ich manchmal in den **Park** und treffe dort meine Freunde.',
          ru: 'После школы я иногда иду в парк и встречаю там своих друзей.'
        },
        {
          de: 'Mein Vater holt mich dann mit dem **Auto** ab, und wir fahren zusammen nach Hause.',
          ru: 'Потом мой папа забирает меня на машине, и мы вместе едем домой.'
        },
        {
          de: 'Ich mag meine **Stadt** — hier gibt es alles, was man braucht!',
          ru: 'Мне нравится мой город — здесь есть всё, что нужно!'
        }
      ]
    },

    exercises: [
      {
        type: 'multipleChoice',
        question: 'Как будет «остановка» по-немецки?',
        options: ['der Bahnhof', 'die Haltestelle', 'die Straße', 'die Post'],
        correctIndex: 1,
        explanation: 'die Haltestelle (мн.ч.: die Haltestellen) — остановка.'
      },
      {
        type: 'multipleChoice',
        question: 'Какой артикль у слова «Auto» (машина)?',
        options: ['der Auto', 'die Auto', 'das Auto', 'den Auto'],
        correctIndex: 2,
        explanation: 'das Auto (мн.ч.: die Autos) — машина. Средний род (das).'
      },
      {
        type: 'fillBlank',
        question: 'Ich fahre jeden Tag mit der ___ zur Arbeit.',
        acceptedAnswers: ['U-Bahn'],
        explanation: 'die U-Bahn — метро. «Я каждый день езжу на метро на работу.»'
      },
      {
        type: 'fillBlank',
        question: 'Die ___ beginnt um acht Uhr.',
        acceptedAnswers: ['Schule'],
        explanation: 'die Schule (мн.ч.: die Schulen) — школа.'
      },
      {
        type: 'fillBlank',
        question: 'Im ___ kaufe ich Obst und Gemüse.',
        acceptedAnswers: ['Supermarkt'],
        explanation: 'der Supermarkt (мн.ч.: die Supermärkte) — супермаркет.'
      },
      {
        type: 'translation',
        question: 'Автобус придёт через пять минут.',
        acceptedAnswers: ['Der Bus kommt in fünf Minuten.'],
        explanation: 'der Bus — автобус, kommen — приходить, in fünf Minuten — через пять минут.'
      },
      {
        type: 'translation',
        question: 'Больница находится на главной улице.',
        acceptedAnswers: ['Das Krankenhaus ist in der Hauptstraße.', 'Das Krankenhaus liegt in der Hauptstraße.'],
        explanation: 'das Krankenhaus — больница, die Hauptstraße — главная улица.'
      },
      {
        type: 'multipleChoice',
        question: 'Что значит «der Park»?',
        options: ['площадь', 'парковка', 'парк', 'улица'],
        correctIndex: 2,
        explanation: 'der Park (мн.ч.: die Parks) — парк.'
      },
      {
        type: 'multipleChoice',
        question: 'Множественное число от «die Stadt» — это…',
        options: ['die Stadten', 'die Städte', 'die Stadts', 'die Städter'],
        correctIndex: 1,
        explanation: 'die Stadt → die Städte. При образовании множественного числа a меняется на ä (умлаут).'
      },
      {
        type: 'fillBlank',
        question: 'Die ___ hat bis 20 Uhr geöffnet.',
        acceptedAnswers: ['Apotheke'],
        explanation: 'die Apotheke (мн.ч.: die Apotheken) — аптека.'
      }
    ]
  },

  // =====================================================================
  // SET 5: Время и распорядок дня (Zeit und Tagesablauf)
  // =====================================================================
  {
    id: 'vocab-05',
    level: 'A1',
    title: 'Время и распорядок дня',
    titleDe: 'Zeit und Tagesablauf',
    description: 'Слова о времени, частях суток и расписании',

    words: [
      {
        de: 'Uhr',
        article: 'die',
        plural: 'die Uhren',
        ru: 'часы (прибор); час (при указании времени)',
        partOfSpeech: 'noun',
        exampleDe: 'Es ist acht **Uhr**.',
        exampleRu: 'Сейчас восемь часов.'
      },
      {
        de: 'Stunde',
        article: 'die',
        plural: 'die Stunden',
        ru: 'час (единица времени)',
        partOfSpeech: 'noun',
        exampleDe: 'Der Unterricht dauert eine **Stunde**.',
        exampleRu: 'Урок длится один час.'
      },
      {
        de: 'Minute',
        article: 'die',
        plural: 'die Minuten',
        ru: 'минута',
        partOfSpeech: 'noun',
        exampleDe: 'Warte bitte fünf **Minuten**.',
        exampleRu: 'Подожди, пожалуйста, пять минут.'
      },
      {
        de: 'Morgen',
        article: 'der',
        plural: 'die Morgen',
        ru: 'утро',
        partOfSpeech: 'noun',
        exampleDe: 'Am **Morgen** trinke ich Kaffee.',
        exampleRu: 'Утром я пью кофе.'
      },
      {
        de: 'Mittag',
        article: 'der',
        plural: 'die Mittage',
        ru: 'полдень, обед (время дня)',
        partOfSpeech: 'noun',
        exampleDe: 'Um **Mittag** esse ich in der Kantine.',
        exampleRu: 'В обед я ем в столовой.'
      },
      {
        de: 'Abend',
        article: 'der',
        plural: 'die Abende',
        ru: 'вечер',
        partOfSpeech: 'noun',
        exampleDe: 'Am **Abend** sehe ich gern einen Film.',
        exampleRu: 'Вечером я люблю смотреть фильм.'
      },
      {
        de: 'Nacht',
        article: 'die',
        plural: 'die Nächte',
        ru: 'ночь',
        partOfSpeech: 'noun',
        exampleDe: 'In der **Nacht** schlafe ich.',
        exampleRu: 'Ночью я сплю.'
      },
      {
        de: 'heute',
        article: null,
        plural: null,
        ru: 'сегодня',
        partOfSpeech: 'adverb',
        exampleDe: '**Heute** habe ich viel zu tun.',
        exampleRu: 'Сегодня у меня много дел.'
      },
      {
        de: 'morgen',
        article: null,
        plural: null,
        ru: 'завтра',
        partOfSpeech: 'adverb',
        exampleDe: '**Morgen** fahre ich nach Berlin.',
        exampleRu: 'Завтра я еду в Берлин.'
      },
      {
        de: 'gestern',
        article: null,
        plural: null,
        ru: 'вчера',
        partOfSpeech: 'adverb',
        exampleDe: '**Gestern** war ich im Kino.',
        exampleRu: 'Вчера я был в кино.'
      },
      {
        de: 'früh',
        article: null,
        plural: null,
        ru: 'рано',
        partOfSpeech: 'adverb',
        exampleDe: 'Ich stehe **früh** auf.',
        exampleRu: 'Я встаю рано.'
      },
      {
        de: 'spät',
        article: null,
        plural: null,
        ru: 'поздно',
        partOfSpeech: 'adverb',
        exampleDe: 'Es ist schon **spät**, ich muss ins Bett.',
        exampleRu: 'Уже поздно, мне пора в кровать.'
      },
      {
        de: 'Woche',
        article: 'die',
        plural: 'die Wochen',
        ru: 'неделя',
        partOfSpeech: 'noun',
        exampleDe: 'Diese **Woche** habe ich viele Termine.',
        exampleRu: 'На этой неделе у меня много встреч.'
      }
    ],

    connectedText: {
      title: 'Мой обычный день',
      titleDe: 'Mein normaler Tag',
      sentences: [
        {
          de: 'Ich stehe **früh** auf — mein Wecker klingelt um sechs **Uhr**.',
          ru: 'Я встаю рано — мой будильник звонит в шесть часов.'
        },
        {
          de: 'Am **Morgen** dusche ich, frühstücke und trinke eine Tasse Kaffee.',
          ru: 'Утром я принимаю душ, завтракаю и пью чашку кофе.'
        },
        {
          de: 'In zwanzig **Minuten** bin ich fertig und gehe zur Haltestelle.',
          ru: 'Через двадцать минут я готов и иду на остановку.'
        },
        {
          de: 'Die Fahrt zur Arbeit dauert eine halbe **Stunde**.',
          ru: 'Дорога на работу занимает полчаса.'
        },
        {
          de: 'Um **Mittag** esse ich in der Kantine mit meinen Kollegen.',
          ru: 'В обед я ем в столовой с коллегами.'
        },
        {
          de: 'Am **Abend** koche ich zu Hause oder gehe mit Freunden spazieren.',
          ru: 'Вечером я готовлю дома или гуляю с друзьями.'
        },
        {
          de: '**Heute** bin ich müde, weil ich **gestern** **spät** ins Bett gegangen bin.',
          ru: 'Сегодня я устал, потому что вчера поздно лёг спать.'
        },
        {
          de: '**Morgen** ist Samstag, da kann ich endlich ausschlafen!',
          ru: 'Завтра суббота, тогда я наконец-то смогу выспаться!'
        },
        {
          de: 'In der **Nacht** schlafe ich normalerweise sieben oder acht Stunden.',
          ru: 'Ночью я обычно сплю семь или восемь часов.'
        },
        {
          de: 'So sieht jeder Tag in meiner **Woche** aus — außer am Wochenende natürlich!',
          ru: 'Так выглядит каждый день моей недели — кроме выходных, конечно!'
        }
      ]
    },

    exercises: [
      {
        type: 'multipleChoice',
        question: 'Как будет «сегодня» по-немецки?',
        options: ['gestern', 'morgen', 'heute', 'früh'],
        correctIndex: 2,
        explanation: 'heute — сегодня. Это наречие (Adverb), не изменяется.'
      },
      {
        type: 'multipleChoice',
        question: 'Что значит «die Nacht»?',
        options: ['утро', 'вечер', 'день', 'ночь'],
        correctIndex: 3,
        explanation: 'die Nacht (мн.ч.: die Nächte) — ночь.'
      },
      {
        type: 'fillBlank',
        question: 'Es ist acht ___.',
        acceptedAnswers: ['Uhr'],
        explanation: 'die Uhr — при указании времени: «Сейчас восемь часов.»'
      },
      {
        type: 'fillBlank',
        question: 'Ich stehe ___ auf.',
        acceptedAnswers: ['früh'],
        explanation: 'früh — рано. «Я встаю рано.»'
      },
      {
        type: 'fillBlank',
        question: 'Am ___ trinke ich Kaffee.',
        acceptedAnswers: ['Morgen'],
        explanation: 'der Morgen — утро. Am Morgen — утром.'
      },
      {
        type: 'translation',
        question: 'Вчера я был в кино.',
        acceptedAnswers: ['Gestern war ich im Kino.'],
        explanation: 'gestern — вчера, war — был (прошедшее от sein), im Kino — в кино.'
      },
      {
        type: 'translation',
        question: 'Урок длится один час.',
        acceptedAnswers: ['Der Unterricht dauert eine Stunde.', 'Die Stunde dauert eine Stunde.'],
        explanation: 'die Stunde — час (единица времени), dauern — длиться.'
      },
      {
        type: 'multipleChoice',
        question: 'Какая часть речи у слова «spät» (поздно)?',
        options: ['существительное (Nomen)', 'глагол (Verb)', 'наречие (Adverb)', 'артикль (Artikel)'],
        correctIndex: 2,
        explanation: 'spät — наречие (Adverb). Означает «поздно». Не изменяется.'
      },
      {
        type: 'multipleChoice',
        question: 'Как будет «неделя» по-немецки?',
        options: ['die Stunde', 'die Woche', 'die Minute', 'die Nacht'],
        correctIndex: 1,
        explanation: 'die Woche (мн.ч.: die Wochen) — неделя.'
      },
      {
        type: 'fillBlank',
        question: '___ fahre ich nach Berlin.',
        acceptedAnswers: ['Morgen'],
        explanation: 'morgen — завтра (наречие, с маленькой буквы, но в начале предложения — с большой). «Завтра я еду в Берлин.»'
      },
      {
        type: 'fillBlank',
        question: 'Es ist schon ___, ich muss ins Bett.',
        acceptedAnswers: ['spät'],
        explanation: 'spät — поздно. «Уже поздно, мне пора в кровать.»'
      }
    ]
  }

];
