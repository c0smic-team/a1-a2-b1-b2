window.LESSONS_1_4 = [
  // ===================== LESSON 1 =====================
  {
    id: 'a1-01',
    level: 'A1',
    order: 1,
    title: 'Личные местоимения и глагол sein',
    titleDe: 'Personalpronomen und das Verb "sein"',
    description: 'Научитесь представляться и говорить, кто вы',
    status: 'available',

    goal: 'После этого урока вы сможете представляться, называть свою профессию, национальность, описывать своё состояние и спрашивать других людей, кто они.',

    explanation: `В русском языке мы говорим «Я студент», «Она врач» — без глагола «быть». В немецком языке глагол **sein** (быть) **обязателен** в каждом предложении.\n\nНапример:\n• Русский: Я студент.\n• Немецкий: Ich **bin** Student. (дословно: Я **есть** студент.)\n\n**Личные местоимения** — это слова, которые заменяют имя человека или предмета:\n• **ich** — я\n• **du** — ты\n• **er** — он\n• **sie** — она\n• **es** — оно\n• **wir** — мы\n• **ihr** — вы (обращение к группе на «ты»)\n• **sie** — они\n• **Sie** — Вы (вежливая форма, всегда с большой буквы)\n\n⚠️ Обратите внимание: **sie** может означать «она» или «они» — различие видно по форме глагола. А **Sie** с большой буквы — это вежливое «Вы».\n\nГлагол **sein** меняет свою форму в зависимости от местоимения. Это называется **спряжение** (Konjugation). Глагол sein — неправильный, его формы нужно запомнить наизусть.\n\n**Когда используется sein:**\n1. Профессия: Ich **bin** Lehrerin. — Я учительница.\n2. Национальность: Er **ist** Russe. — Он русский.\n3. Состояние/чувства: Wir **sind** müde. — Мы устали.\n4. Местоположение: Sie **sind** in Berlin. — Они в Берлине.\n5. Возраст: Du **bist** 20 Jahre alt. — Тебе 20 лет.\n6. Характеристика: Das Buch **ist** interessant. — Книга интересная.`,

    formula: 'Subjekt (местоимение/имя) + sein (спрягаемая форма) + Ergänzung (дополнение)',

    formsTable: {
      headers: ['Местоимение', 'sein', 'Перевод'],
      rows: [
        ['ich', 'bin', 'я есть'],
        ['du', 'bist', 'ты есть'],
        ['er', 'ist', 'он есть'],
        ['sie', 'ist', 'она есть'],
        ['es', 'ist', 'оно есть'],
        ['wir', 'sind', 'мы есть'],
        ['ihr', 'seid', 'вы есть (мн.)'],
        ['sie', 'sind', 'они есть'],
        ['Sie', 'sind', 'Вы есть (вежл.)']
      ]
    },

    examples: [
      {
        de: 'Ich **bin** Anna.',
        ru: 'Я Анна.',
        note: 'ich → bin'
      },
      {
        de: 'Du **bist** mein Freund.',
        ru: 'Ты мой друг.',
        note: 'du → bist'
      },
      {
        de: 'Er **ist** Arzt.',
        ru: 'Он врач.',
        note: 'er → ist'
      },
      {
        de: 'Sie **ist** Studentin.',
        ru: 'Она студентка.',
        note: 'sie (она) → ist'
      },
      {
        de: 'Es **ist** kalt.',
        ru: 'Холодно.',
        note: 'es → ist (безличное предложение)'
      },
      {
        de: 'Wir **sind** aus Russland.',
        ru: 'Мы из России.',
        note: 'wir → sind'
      },
      {
        de: 'Ihr **seid** sehr nett.',
        ru: 'Вы очень милые.',
        note: 'ihr → seid'
      },
      {
        de: '**Sind** Sie Herr Müller?',
        ru: 'Вы господин Мюллер?',
        note: 'Sie (вежл.) → sind; в вопросе глагол на 1-м месте'
      }
    ],

    commonMistakes: [
      {
        wrong: 'Ich bist müde.',
        correct: 'Ich **bin** müde.',
        explanation: 'С местоимением ich всегда используется форма bin, а не bist. Форма bist — только для du.'
      },
      {
        wrong: 'Er sind Lehrer.',
        correct: 'Er **ist** Lehrer.',
        explanation: 'Форма sind используется с wir, sie (они) и Sie (Вы). С er/sie/es — всегда ist.'
      },
      {
        wrong: 'Wir seid Studenten.',
        correct: 'Wir **sind** Studenten.',
        explanation: 'Форма seid используется только с ihr. С wir — всегда sind.'
      },
      {
        wrong: 'Du ist jung.',
        correct: 'Du **bist** jung.',
        explanation: 'С du всегда используется форма bist.'
      }
    ],

    connectedText: {
      title: 'Знакомство в университете (Vorstellung an der Universität)',
      sentences: [
        {
          de: 'Hallo! Ich **bin** Anna. Ich **bin** Studentin.',
          ru: 'Привет! Я Анна. Я студентка.'
        },
        {
          de: 'Das **ist** mein Freund. Er **ist** Markus.',
          ru: 'Это мой друг. Его зовут Маркус.'
        },
        {
          de: 'Wir **sind** aus Russland. Wir **sind** neu hier.',
          ru: 'Мы из России. Мы здесь новенькие.'
        },
        {
          de: '**Sind** Sie der Professor? — Ja, ich **bin** Professor Schmidt.',
          ru: 'Вы профессор? — Да, я профессор Шмидт.'
        },
        {
          de: 'Die Universität **ist** groß und modern. Es **ist** schön hier.',
          ru: 'Университет большой и современный. Здесь красиво.'
        },
        {
          de: 'Anna und Markus **sind** müde, aber sie **sind** glücklich.',
          ru: 'Анна и Маркус устали, но они счастливы.'
        }
      ]
    },

    summary: '**sein** спрягается нестандартно — нужно запомнить:\nich **bin**, du **bist**, er/sie/es **ist**, wir **sind**, ihr **seid**, sie/Sie **sind**.\nГлагол sein обязателен в немецком, даже когда в русском мы его опускаем.\nИспользуется для профессии, национальности, состояния, местоположения.',

    exercises: [
      {
        type: 'multipleChoice',
        question: 'Ich ___ müde.',
        options: ['bin', 'bist', 'ist', 'sind'],
        correctIndex: 0,
        explanation: 'С местоимением ich всегда используется форма bin.'
      },
      {
        type: 'multipleChoice',
        question: 'Er ___ Lehrer.',
        options: ['bin', 'bist', 'ist', 'seid'],
        correctIndex: 2,
        explanation: 'С местоимением er (он) используется форма ist.'
      },
      {
        type: 'multipleChoice',
        question: 'Wir ___ Studenten.',
        options: ['ist', 'seid', 'sind', 'bist'],
        correctIndex: 2,
        explanation: 'С местоимением wir (мы) используется форма sind.'
      },
      {
        type: 'fillBlank',
        question: 'Du ___ mein Freund.',
        acceptedAnswers: ['bist'],
        explanation: 'С du (ты) используется форма bist.'
      },
      {
        type: 'fillBlank',
        question: 'Ihr ___ sehr nett.',
        acceptedAnswers: ['seid'],
        explanation: 'С ihr (вы, мн. ч., неформально) используется форма seid.'
      },
      {
        type: 'fillBlank',
        question: 'Sie ___ Ärztin. (Она — врач.)',
        acceptedAnswers: ['ist'],
        explanation: 'С sie (она) используется форма ist.'
      },
      {
        type: 'wordOrder',
        words: ['bin', 'ich', 'Student'],
        correctOrder: ['Ich', 'bin', 'Student'],
        translation: 'Я студент.'
      },
      {
        type: 'wordOrder',
        words: ['aus', 'sind', 'Deutschland', 'wir'],
        correctOrder: ['Wir', 'sind', 'aus', 'Deutschland'],
        translation: 'Мы из Германии.'
      },
      {
        type: 'translation',
        question: 'Она студентка.',
        acceptedAnswers: ['Sie ist Studentin.', 'Sie ist Studentin'],
        explanation: 'sie (она) → ist. Студентка = Studentin.'
      },
      {
        type: 'translation',
        question: 'Мы из России.',
        acceptedAnswers: ['Wir sind aus Russland.', 'Wir sind aus Russland'],
        explanation: 'wir → sind. Из России = aus Russland.'
      },
      {
        type: 'errorCorrection',
        sentence: 'Er bist Arzt.',
        correctedSentence: 'Er ist Arzt.',
        explanation: 'С er используется форма ist, не bist. Форма bist — только для du.'
      },
      {
        type: 'errorCorrection',
        sentence: 'Wir seid in Berlin.',
        correctedSentence: 'Wir sind in Berlin.',
        explanation: 'С wir используется форма sind. Форма seid — только для ihr.'
      },
      {
        type: 'multipleChoice',
        question: '___ Sie Frau Müller? (Вы госпожа Мюллер?)',
        options: ['Bist', 'Ist', 'Sind', 'Seid'],
        correctIndex: 2,
        explanation: 'Вежливая форма Sie (Вы) требует глагол sind. В вопросе глагол стоит на первом месте.'
      },
      {
        type: 'fillBlank',
        question: 'Anna und Markus ___ glücklich.',
        acceptedAnswers: ['sind'],
        explanation: 'Anna und Markus = они (sie), поэтому используется форма sind.'
      },
      {
        type: 'translation',
        question: 'Ты молодой.',
        acceptedAnswers: ['Du bist jung.', 'Du bist jung'],
        explanation: 'du → bist. Молодой = jung.'
      },
      {
        type: 'wordOrder',
        words: ['Sie', 'sind', 'Herr', 'Schmidt', '?'],
        correctOrder: ['Sind', 'Sie', 'Herr', 'Schmidt', '?'],
        translation: 'Вы господин Шмидт?'
      }
    ]
  },

  // ===================== LESSON 2 =====================
  {
    id: 'a1-02',
    level: 'A1',
    order: 2,
    title: 'Глагол haben и простые предложения',
    titleDe: 'Das Verb "haben" und einfache Sätze',
    description: 'Научитесь говорить о том, что у вас есть, и о семье',
    status: 'available',

    goal: 'После этого урока вы сможете рассказывать о своей семье, говорить о том, что у вас есть, и строить простые предложения по схеме «подлежащее + сказуемое + дополнение».',

    explanation: `Глагол **haben** означает «иметь». В русском мы говорим «У меня **есть** брат», а в немецком — «Ich **habe** einen Bruder» (дословно: Я **имею** брата).\n\n**Спряжение haben в настоящем времени (Präsens):**\nГлагол haben — неправильный, некоторые формы отличаются от стандартного шаблона.\n\n⚠️ Обратите внимание: формы du **hast** и er/sie/es **hat** теряют букву «b» из основы!\n\n**Когда используется haben:**\n1. Владение: Ich **habe** ein Auto. — У меня есть машина.\n2. Семья: Sie **hat** zwei Kinder. — У неё двое детей.\n3. Части тела: Er **hat** blaue Augen. — У него голубые глаза.\n4. Абстрактные понятия: Wir **haben** Zeit. — У нас есть время.\n5. Состояние: Ich **habe** Hunger. — Я голоден. (дословно: Я имею голод.)\n\n**Простое предложение по-немецки:**\nОсновная структура: **Подлежащее (S) + Глагол (V) + Дополнение (O)**\n• Ich (S) habe (V) einen Bruder (O). — У меня есть брат.\n• Wir (S) haben (V) ein Haus (O). — У нас есть дом.\n\nГлагол **всегда** стоит на **втором месте** в обычном предложении.\n\n**Возраст по-немецки:**\nВ русском мы говорим «Мне 20 лет», в немецком используется глагол **sein**, а не haben:\n• Ich **bin** 20 Jahre alt. — Мне 20 лет. (дословно: Я есть 20 лет старый.)\n\n**Словарь по теме «Семья» (die Familie, die Familien):**\n• der Vater (die Väter) — отец\n• die Mutter (die Mütter) — мать\n• der Bruder (die Brüder) — брат\n• die Schwester (die Schwestern) — сестра\n• der Sohn (die Söhne) — сын\n• die Tochter (die Töchter) — дочь\n• das Kind (die Kinder) — ребёнок\n• die Eltern (мн. ч.) — родители\n• der Mann (die Männer) — муж / мужчина\n• die Frau (die Frauen) — жена / женщина\n• die Großmutter (die Großmütter) — бабушка\n• der Großvater (die Großväter) — дедушка`,

    formula: 'Subjekt + haben (спрягаемая форма) + Objekt (дополнение)',

    formsTable: {
      headers: ['Местоимение', 'haben', 'Перевод'],
      rows: [
        ['ich', 'habe', 'я имею'],
        ['du', 'hast', 'ты имеешь'],
        ['er/sie/es', 'hat', 'он/она/оно имеет'],
        ['wir', 'haben', 'мы имеем'],
        ['ihr', 'habt', 'вы имеете (мн.)'],
        ['sie', 'haben', 'они имеют'],
        ['Sie', 'haben', 'Вы имеете (вежл.)']
      ]
    },

    examples: [
      {
        de: 'Ich **habe** einen Bruder.',
        ru: 'У меня есть брат.',
        note: 'ich → habe'
      },
      {
        de: 'Du **hast** eine Schwester.',
        ru: 'У тебя есть сестра.',
        note: 'du → hast'
      },
      {
        de: 'Er **hat** zwei Kinder.',
        ru: 'У него двое детей.',
        note: 'er → hat (без «b»!)'
      },
      {
        de: 'Sie **hat** eine Katze.',
        ru: 'У неё есть кошка.',
        note: 'sie (она) → hat'
      },
      {
        de: 'Wir **haben** ein Haus.',
        ru: 'У нас есть дом.',
        note: 'wir → haben'
      },
      {
        de: 'Ihr **habt** viel Zeit.',
        ru: 'У вас много времени.',
        note: 'ihr → habt'
      },
      {
        de: '**Haben** Sie Kinder?',
        ru: 'У Вас есть дети?',
        note: 'Sie (вежл.) → haben; вопрос — глагол на 1-м месте'
      },
      {
        de: 'Ich **habe** Hunger.',
        ru: 'Я голоден.',
        note: 'Hunger haben = быть голодным'
      }
    ],

    commonMistakes: [
      {
        wrong: 'Er habe ein Auto.',
        correct: 'Er **hat** ein Auto.',
        explanation: 'С er/sie/es используется форма hat (не habe). Форма habe — только для ich.'
      },
      {
        wrong: 'Du habst eine Katze.',
        correct: 'Du **hast** eine Katze.',
        explanation: 'Форма для du — hast, а не habst. Буква «b» выпадает.'
      },
      {
        wrong: 'Ich habe 20 Jahre alt.',
        correct: 'Ich **bin** 20 Jahre alt.',
        explanation: 'Для возраста в немецком используется глагол sein (bin), а не haben!'
      },
      {
        wrong: 'Wir habt drei Kinder.',
        correct: 'Wir **haben** drei Kinder.',
        explanation: 'С wir (мы) используется форма haben, а не habt. Форма habt — только для ihr.'
      }
    ],

    connectedText: {
      title: 'Моя семья (Meine Familie)',
      sentences: [
        {
          de: 'Ich **habe** eine große Familie.',
          ru: 'У меня большая семья.'
        },
        {
          de: 'Mein Vater heißt Oleg. Er **ist** 45 Jahre alt.',
          ru: 'Моего отца зовут Олег. Ему 45 лет.'
        },
        {
          de: 'Meine Mutter **hat** blaue Augen und blonde Haare.',
          ru: 'У моей мамы голубые глаза и светлые волосы.'
        },
        {
          de: 'Ich **habe** einen Bruder und eine Schwester.',
          ru: 'У меня есть брат и сестра.'
        },
        {
          de: 'Mein Bruder **ist** 18 Jahre alt. Er **hat** einen Hund.',
          ru: 'Моему брату 18 лет. У него есть собака.'
        },
        {
          de: 'Meine Schwester **hat** zwei Katzen. Sie **sind** sehr süß.',
          ru: 'У моей сестры две кошки. Они очень милые.'
        },
        {
          de: 'Wir **haben** auch eine Großmutter. Sie **ist** 70 Jahre alt.',
          ru: 'У нас также есть бабушка. Ей 70 лет.'
        }
      ]
    },

    summary: '**haben** спрягается: ich **habe**, du **hast**, er/sie/es **hat**, wir **haben**, ihr **habt**, sie/Sie **haben**.\nВнимание: в формах du и er/sie/es выпадает буква «b».\nДля возраста используется sein, а не haben: Ich **bin** 20 Jahre alt.\nПростое предложение: Подлежащее + Глагол + Дополнение.',

    exercises: [
      {
        type: 'multipleChoice',
        question: 'Ich ___ einen Bruder.',
        options: ['habe', 'hast', 'hat', 'haben'],
        correctIndex: 0,
        explanation: 'С местоимением ich используется форма habe.'
      },
      {
        type: 'multipleChoice',
        question: 'Er ___ ein Auto.',
        options: ['habe', 'hast', 'hat', 'habt'],
        correctIndex: 2,
        explanation: 'С местоимением er используется форма hat.'
      },
      {
        type: 'multipleChoice',
        question: 'Ihr ___ viel Zeit.',
        options: ['haben', 'habt', 'hast', 'hat'],
        correctIndex: 1,
        explanation: 'С местоимением ihr используется форма habt.'
      },
      {
        type: 'fillBlank',
        question: 'Du ___ eine Schwester.',
        acceptedAnswers: ['hast'],
        explanation: 'С du используется форма hast.'
      },
      {
        type: 'fillBlank',
        question: 'Wir ___ zwei Kinder.',
        acceptedAnswers: ['haben'],
        explanation: 'С wir используется форма haben.'
      },
      {
        type: 'fillBlank',
        question: 'Sie ___ eine Katze. (У неё есть кошка.)',
        acceptedAnswers: ['hat'],
        explanation: 'С sie (она) используется форма hat.'
      },
      {
        type: 'wordOrder',
        words: ['habe', 'Bruder', 'ich', 'einen'],
        correctOrder: ['Ich', 'habe', 'einen', 'Bruder'],
        translation: 'У меня есть брат.'
      },
      {
        type: 'wordOrder',
        words: ['Kinder', 'haben', 'sie', 'drei'],
        correctOrder: ['Sie', 'haben', 'drei', 'Kinder'],
        translation: 'У них трое детей.'
      },
      {
        type: 'translation',
        question: 'У него есть собака.',
        acceptedAnswers: ['Er hat einen Hund.', 'Er hat einen Hund'],
        explanation: 'er → hat. Собака = der Hund, в винительном падеже: einen Hund.'
      },
      {
        type: 'translation',
        question: 'У нас есть время.',
        acceptedAnswers: ['Wir haben Zeit.', 'Wir haben Zeit'],
        explanation: 'wir → haben. Время = die Zeit.'
      },
      {
        type: 'errorCorrection',
        sentence: 'Du habst eine Katze.',
        correctedSentence: 'Du hast eine Katze.',
        explanation: 'Правильная форма для du — hast, а не habst. Буква «b» выпадает.'
      },
      {
        type: 'errorCorrection',
        sentence: 'Er habe zwei Brüder.',
        correctedSentence: 'Er hat zwei Brüder.',
        explanation: 'С er используется форма hat. Форма habe — только для ich.'
      },
      {
        type: 'multipleChoice',
        question: 'Ich ___ 25 Jahre alt.',
        options: ['habe', 'bin', 'hat', 'ist'],
        correctIndex: 1,
        explanation: 'Для выражения возраста используется глагол sein: Ich bin ... Jahre alt.'
      },
      {
        type: 'translation',
        question: 'У вас (вежл.) есть дети?',
        acceptedAnswers: ['Haben Sie Kinder?'],
        explanation: 'Sie (вежливое «Вы») → haben. В вопросе глагол стоит на первом месте.'
      }
    ]
  },

  // ===================== LESSON 3 =====================
  {
    id: 'a1-03',
    level: 'A1',
    order: 3,
    title: 'Präsens правильных глаголов',
    titleDe: 'Präsens der regelmäßigen Verben',
    description: 'Научитесь спрягать правильные глаголы и говорить о повседневных действиях',
    status: 'available',

    goal: 'После этого урока вы сможете спрягать правильные глаголы в настоящем времени и рассказывать о своих ежедневных делах: что вы делаете, где живёте, что изучаете.',

    explanation: `Большинство немецких глаголов спрягаются по одному и тому же правилу. Такие глаголы называются **правильными** (regelmäßige Verben).\n\n**Как спрягать правильный глагол:**\n1. Берём инфинитив (начальную форму): например, **machen** (делать)\n2. Убираем окончание **-en** → получаем **основу**: mach-\n3. Добавляем нужное **личное окончание**:\n\n| Местоимение | Окончание | Пример (machen) |\n|---|---|---|\n| ich | **-e** | mach**e** |\n| du | **-st** | mach**st** |\n| er/sie/es | **-t** | mach**t** |\n| wir | **-en** | mach**en** |\n| ihr | **-t** | mach**t** |\n| sie/Sie | **-en** | mach**en** |\n\n**Полезные глаголы для этого урока:**\n• **machen** — делать\n• **lernen** — учить, изучать\n• **spielen** — играть\n• **wohnen** — жить, проживать\n• **kommen** — приходить, приезжать\n• **trinken** — пить\n• **kochen** — готовить (еду)\n• **hören** — слушать\n• **heißen** — называться, зваться\n• **arbeiten** — работать\n\n**⚠️ Особые случаи:**\n\n1. Если основа заканчивается на **-t** или **-d** (например, arbei**t**en, fin**d**en), то перед окончаниями -st и -t добавляется буква **e** для удобства произношения:\n• du arbeit**e**st (а не arbeitst)\n• er/sie/es arbeit**e**t (а не arbeitt)\n• ihr arbeit**e**t (а не arbeitt)\n\n2. Глагол **heißen** (основа heiß-): du heiß**t** (а не heißst, потому что после ß не добавляется ещё одно s).\n\n**Примеры с arbeiten (работать):**\nich arbeite, du arbeit**e**st, er arbeit**e**t, wir arbeiten, ihr arbeit**e**t, sie arbeiten`,

    formula: 'Основа глагола (Infinitiv ohne -en) + личное окончание (-e, -st, -t, -en, -t, -en)',

    formsTable: {
      headers: ['Местоимение', 'machen', 'arbeiten', 'heißen'],
      rows: [
        ['ich', 'mache', 'arbeite', 'heiße'],
        ['du', 'machst', 'arbeitest', 'heißt'],
        ['er/sie/es', 'macht', 'arbeitet', 'heißt'],
        ['wir', 'machen', 'arbeiten', 'heißen'],
        ['ihr', 'macht', 'arbeitet', 'heißt'],
        ['sie/Sie', 'machen', 'arbeiten', 'heißen']
      ]
    },

    examples: [
      {
        de: 'Ich **lerne** Deutsch.',
        ru: 'Я учу немецкий.',
        note: 'lernen → lern + e'
      },
      {
        de: 'Du **spielst** Fußball.',
        ru: 'Ты играешь в футбол.',
        note: 'spielen → spiel + st'
      },
      {
        de: 'Er **wohnt** in Berlin.',
        ru: 'Он живёт в Берлине.',
        note: 'wohnen → wohn + t'
      },
      {
        de: 'Sie **kocht** gern.',
        ru: 'Она любит готовить.',
        note: 'kochen → koch + t'
      },
      {
        de: 'Wir **trinken** Kaffee.',
        ru: 'Мы пьём кофе.',
        note: 'trinken → trink + en'
      },
      {
        de: 'Ihr **hört** Musik.',
        ru: 'Вы слушаете музыку.',
        note: 'hören → hör + t'
      },
      {
        de: 'Sie **arbeitet** in einem Büro.',
        ru: 'Она работает в офисе.',
        note: 'arbeiten → arbeit + et (добавляется «e»!)'
      },
      {
        de: 'Wie **heißt** du?',
        ru: 'Как тебя зовут?',
        note: 'heißen → heiß + t (без удвоения s)'
      }
    ],

    commonMistakes: [
      {
        wrong: 'Er arbeitt viel.',
        correct: 'Er **arbeitet** viel.',
        explanation: 'Когда основа заканчивается на -t (arbeit-), перед окончанием -t добавляется -e: arbeitet.'
      },
      {
        wrong: 'Du spielen Fußball.',
        correct: 'Du **spielst** Fußball.',
        explanation: 'С du нужно окончание -st, а не -en. Окончание -en — для wir, sie, Sie.'
      },
      {
        wrong: 'Ich machen die Hausaufgabe.',
        correct: 'Ich **mache** die Hausaufgabe.',
        explanation: 'С ich нужно окончание -e. Окончание -en — для wir, sie, Sie.'
      },
      {
        wrong: 'Du heißst Maria.',
        correct: 'Du **heißt** Maria.',
        explanation: 'После ß не добавляется дополнительное s. Форма du heißt — уже правильная.'
      }
    ],

    connectedText: {
      title: 'Мой обычный день (Mein Alltag)',
      sentences: [
        {
          de: 'Ich **heiße** Katja und **wohne** in Moskau.',
          ru: 'Меня зовут Катя, и я живу в Москве.'
        },
        {
          de: 'Ich **lerne** Deutsch und **arbeite** in einer Firma.',
          ru: 'Я учу немецкий и работаю в фирме.'
        },
        {
          de: 'Morgens **trinke** ich Kaffee und **höre** Musik.',
          ru: 'По утрам я пью кофе и слушаю музыку.'
        },
        {
          de: 'Mein Freund Sascha **spielt** am Abend Gitarre.',
          ru: 'Мой друг Саша по вечерам играет на гитаре.'
        },
        {
          de: 'Wir **kochen** zusammen das Abendessen.',
          ru: 'Мы готовим ужин вместе.'
        },
        {
          de: 'Am Wochenende **machen** wir einen Spaziergang im Park.',
          ru: 'На выходных мы гуляем в парке.'
        }
      ]
    },

    summary: 'Правильные глаголы спрягаются по формуле: **основа + окончание**.\nОкончания: ich **-e**, du **-st**, er/sie/es **-t**, wir **-en**, ihr **-t**, sie/Sie **-en**.\nОсобый случай: если основа на -t/-d, добавляется **-e** перед -st и -t (du arbeit**e**st, er arbeit**e**t).\nПосле **-ß** не удваивается s: du heißt.',

    exercises: [
      {
        type: 'multipleChoice',
        question: 'Ich ___ Deutsch. (lernen)',
        options: ['lerne', 'lernst', 'lernt', 'lernen'],
        correctIndex: 0,
        explanation: 'С ich используется окончание -e: ich lerne.'
      },
      {
        type: 'multipleChoice',
        question: 'Er ___ in München. (wohnen)',
        options: ['wohne', 'wohnst', 'wohnt', 'wohnen'],
        correctIndex: 2,
        explanation: 'С er используется окончание -t: er wohnt.'
      },
      {
        type: 'multipleChoice',
        question: 'Du ___ sehr gut. (kochen)',
        options: ['koche', 'kochst', 'kocht', 'kochen'],
        correctIndex: 1,
        explanation: 'С du используется окончание -st: du kochst.'
      },
      {
        type: 'fillBlank',
        question: 'Wir ___ Kaffee. (trinken)',
        acceptedAnswers: ['trinken'],
        explanation: 'С wir используется окончание -en: wir trinken.'
      },
      {
        type: 'fillBlank',
        question: 'Sie ___ in Berlin. (arbeiten) (Она работает в Берлине.)',
        acceptedAnswers: ['arbeitet'],
        explanation: 'С er/sie/es глагол arbeiten получает окончание -et (не -t!), потому что основа заканчивается на -t.'
      },
      {
        type: 'fillBlank',
        question: 'Wie ___ du? (heißen)',
        acceptedAnswers: ['heißt'],
        explanation: 'С du: du heißt. После ß не добавляется дополнительное s.'
      },
      {
        type: 'fillBlank',
        question: 'Ihr ___ Fußball. (spielen)',
        acceptedAnswers: ['spielt'],
        explanation: 'С ihr используется окончание -t: ihr spielt.'
      },
      {
        type: 'wordOrder',
        words: ['Deutsch', 'lerne', 'ich'],
        correctOrder: ['Ich', 'lerne', 'Deutsch'],
        translation: 'Я учу немецкий.'
      },
      {
        type: 'wordOrder',
        words: ['er', 'in', 'Hamburg', 'wohnt'],
        correctOrder: ['Er', 'wohnt', 'in', 'Hamburg'],
        translation: 'Он живёт в Гамбурге.'
      },
      {
        type: 'translation',
        question: 'Она играет на гитаре.',
        acceptedAnswers: ['Sie spielt Gitarre.', 'Sie spielt Gitarre'],
        explanation: 'sie (она) → spielt (окончание -t). Играть на гитаре = Gitarre spielen.'
      },
      {
        type: 'translation',
        question: 'Мы слушаем музыку.',
        acceptedAnswers: ['Wir hören Musik.', 'Wir hören Musik'],
        explanation: 'wir → hören (окончание -en). Музыка = die Musik.'
      },
      {
        type: 'errorCorrection',
        sentence: 'Du arbeitet in der Schule.',
        correctedSentence: 'Du arbeitest in der Schule.',
        explanation: 'С du нужно окончание -st. А так как основа заканчивается на -t, добавляется -est: du arbeitest.'
      },
      {
        type: 'errorCorrection',
        sentence: 'Ich machen die Hausaufgabe.',
        correctedSentence: 'Ich mache die Hausaufgabe.',
        explanation: 'С ich используется окончание -e: ich mache. Окончание -en — для wir, sie, Sie.'
      },
      {
        type: 'translation',
        question: 'Откуда ты приехал? (приезжать = kommen)',
        acceptedAnswers: ['Woher kommst du?'],
        explanation: 'du → kommst. Откуда = woher.'
      },
      {
        type: 'multipleChoice',
        question: 'Anna ___ gern. (kochen)',
        options: ['koche', 'kochst', 'kocht', 'kochen'],
        correctIndex: 2,
        explanation: 'Anna = она (sie), поэтому используется окончание -t: kocht.'
      }
    ]
  },

  // ===================== LESSON 4 =====================
  {
    id: 'a1-04',
    level: 'A1',
    order: 4,
    title: 'Порядок слов в предложении',
    titleDe: 'Wortstellung im Satz',
    description: 'Научитесь строить правильный порядок слов в немецком предложении',
    status: 'available',

    goal: 'После этого урока вы сможете строить предложения с правильным порядком слов, ставить глагол на второе место, использовать инверсию и располагать обстоятельства в правильной последовательности.',

    explanation: `В русском языке порядок слов довольно свободный: «Я сегодня учусь» или «Сегодня я учусь» — оба варианта звучат нормально. В немецком языке есть **строгое правило**: глагол всегда стоит на **втором месте**. Это называется **правило V2** (Verb-Zweit-Regel).\n\n**Правило V2 — глагол на втором месте:**\n\nПозиция 1 может быть занята разными элементами, но глагол **всегда** на позиции 2:\n\n| Позиция 1 | Позиция 2 (глагол) | Остальное |\n|---|---|---|\n| **Ich** | lerne | heute Deutsch. |\n| **Heute** | lerne | ich Deutsch. |\n| **Deutsch** | lerne | ich heute. |\n\n☝️ Обратите внимание: когда на первом месте стоит **не подлежащее** (а, например, «heute»), подлежащее переходит **сразу после глагола**. Это называется **инверсия**.\n\n**Обычный порядок:** Subjekt + Verb + ...\n• **Ich** lerne heute Deutsch. — Я учу сегодня немецкий.\n\n**Инверсия:** Другое слово + Verb + Subjekt + ...\n• **Heute** lerne **ich** Deutsch. — Сегодня я учу немецкий.\n• **Am Morgen** trinke **ich** Kaffee. — Утром я пью кофе.\n\n**Порядок обстоятельств (TeKaMoLo):**\nКогда в предложении несколько обстоятельств, они идут в определённом порядке:\n**Te**mporal (время) → **Ka**usal (причина) → **Mo**dal (образ действия) → **Lo**kal (место)\n\nНа уровне A1 запомните: **время → образ действия → место**:\n• Ich lerne **heute** (когда?) **gern** (как?) **zu Hause** (где?) Deutsch.\n\n**Полезные слова для обстоятельств времени:**\n• heute — сегодня\n• morgen — завтра\n• morgens — по утрам\n• abends — по вечерам\n• am Morgen — утром\n• am Abend — вечером\n• am Wochenende — на выходных\n• jetzt — сейчас\n• oft — часто\n• immer — всегда\n\n**Полезные слова для обстоятельств места:**\n• zu Hause — дома\n• in der Schule — в школе\n• in der Universität — в университете\n• im Park — в парке\n• im Büro — в офисе\n• in Berlin — в Берлине\n\n**Вопросительные предложения:**\nВ вопросах с вопросительным словом (W-Frage) глагол тоже на 2-м месте:\n• **Was** machst du heute? — Что ты делаешь сегодня?\n• **Wo** wohnst du? — Где ты живёшь?\n\nВ вопросах без вопросительного слова (Ja/Nein-Frage) глагол стоит на **1-м месте**:\n• **Lernst** du Deutsch? — Ты учишь немецкий?\n• **Wohnst** du in Berlin? — Ты живёшь в Берлине?`,

    formula: 'Position 1 + VERB (Position 2) + Subjekt (если не на позиции 1) + Temporal + Modal + Lokal',

    formsTable: {
      headers: ['Тип предложения', 'Позиция 1', 'Глагол (поз. 2)', 'Остальное'],
      rows: [
        ['Обычное', 'Ich', 'lerne', 'heute Deutsch.'],
        ['Инверсия', 'Heute', 'lerne', 'ich Deutsch.'],
        ['W-вопрос', 'Was', 'machst', 'du heute?'],
        ['Ja/Nein-вопрос', '—', 'Lernst', 'du Deutsch?']
      ]
    },

    examples: [
      {
        de: 'Ich **lerne** heute Deutsch.',
        ru: 'Я учу сегодня немецкий.',
        note: 'Обычный порядок: подлежащее + глагол'
      },
      {
        de: 'Heute **lerne** ich Deutsch.',
        ru: 'Сегодня я учу немецкий.',
        note: 'Инверсия: heute на 1-м месте → глагол на 2-м → подлежащее на 3-м'
      },
      {
        de: 'Am Morgen **trinke** ich Kaffee.',
        ru: 'Утром я пью кофе.',
        note: 'Am Morgen — обстоятельство времени на 1-м месте'
      },
      {
        de: 'Ich **spiele** abends gern im Park Fußball.',
        ru: 'Я по вечерам с удовольствием играю в футбол в парке.',
        note: 'Время (abends) → образ (gern) → место (im Park)'
      },
      {
        de: '**Was** machst du am Wochenende?',
        ru: 'Что ты делаешь на выходных?',
        note: 'W-Frage: вопросительное слово + глагол на 2-м месте'
      },
      {
        de: '**Arbeitest** du morgen?',
        ru: 'Ты завтра работаешь?',
        note: 'Ja/Nein-Frage: глагол на 1-м месте'
      },
      {
        de: 'In der Schule **lernen** wir Mathematik.',
        ru: 'В школе мы учим математику.',
        note: 'Обстоятельство места на 1-м месте → инверсия'
      },
      {
        de: 'Ich **arbeite** morgens im Büro und **lerne** abends zu Hause.',
        ru: 'Я работаю по утрам в офисе и учусь по вечерам дома.',
        note: 'Два глагола — каждый на 2-м месте в своей части'
      }
    ],

    commonMistakes: [
      {
        wrong: 'Heute ich lerne Deutsch.',
        correct: 'Heute **lerne** ich Deutsch.',
        explanation: 'Глагол всегда на 2-й позиции! Если heute стоит первым, то глагол идёт сразу после, а потом подлежащее.'
      },
      {
        wrong: 'Ich Deutsch lerne.',
        correct: 'Ich **lerne** Deutsch.',
        explanation: 'Глагол должен стоять на 2-м месте, а не в конце. Это не придаточное предложение.'
      },
      {
        wrong: 'Morgen ich arbeite nicht.',
        correct: 'Morgen **arbeite** ich nicht.',
        explanation: 'После morgen (позиция 1) глагол обязательно на позиции 2, подлежащее переходит на позицию 3.'
      },
      {
        wrong: 'Ich trinke im Café gern Kaffee.',
        correct: 'Ich trinke **gern** **im Café** Kaffee.',
        explanation: 'Порядок обстоятельств: образ действия (gern) перед местом (im Café). Хотя на уровне A1 оба варианта допустимы, правильный порядок — Modal перед Lokal.'
      }
    ],

    connectedText: {
      title: 'Мой день (Mein Tag)',
      sentences: [
        {
          de: 'Am Morgen **stehe** ich um 7 Uhr auf.',
          ru: 'Утром я встаю в 7 часов.'
        },
        {
          de: 'Dann **trinke** ich Kaffee zu Hause.',
          ru: 'Потом я пью кофе дома.'
        },
        {
          de: 'Um 9 Uhr **arbeite** ich im Büro.',
          ru: 'В 9 часов я работаю в офисе.'
        },
        {
          de: 'Mittags **esse** ich in der Kantine.',
          ru: 'В обед я ем в столовой.'
        },
        {
          de: 'Am Nachmittag **lerne** ich oft Deutsch in der Bibliothek.',
          ru: 'После обеда я часто учу немецкий в библиотеке.'
        },
        {
          de: 'Abends **koche** ich gern zu Hause.',
          ru: 'По вечерам я с удовольствием готовлю дома.'
        },
        {
          de: 'Am Wochenende **spiele** ich im Park Fußball.',
          ru: 'На выходных я играю в парке в футбол.'
        }
      ]
    },

    summary: '**Правило V2**: глагол **всегда** на 2-м месте в утвердительном предложении.\n**Инверсия**: если на 1-м месте стоит не подлежащее, подлежащее переходит за глагол.\nПорядок обстоятельств: **время → образ → место** (TeKaMoLo).\nВ W-вопросе глагол тоже на 2-м месте. В Ja/Nein-вопросе — на 1-м.',

    exercises: [
      {
        type: 'multipleChoice',
        question: 'Какой порядок слов правильный?',
        options: [
          'Heute ich lerne Deutsch.',
          'Heute lerne ich Deutsch.',
          'Ich heute lerne Deutsch.',
          'Deutsch heute ich lerne.'
        ],
        correctIndex: 1,
        explanation: 'Правило V2: глагол всегда на 2-м месте. Heute (поз. 1) + lerne (поз. 2) + ich + Deutsch.'
      },
      {
        type: 'multipleChoice',
        question: 'Какой порядок слов правильный для вопроса «Где ты живёшь?»',
        options: [
          'Du wohnst wo?',
          'Wo wohnst du?',
          'Wo du wohnst?',
          'Wohnst wo du?'
        ],
        correctIndex: 1,
        explanation: 'В W-вопросе: вопросительное слово (Wo) + глагол (wohnst) + подлежащее (du).'
      },
      {
        type: 'multipleChoice',
        question: 'Am Abend ___ ich gern Musik.',
        options: ['höre', 'hören', 'hörst', 'hört'],
        correctIndex: 0,
        explanation: 'Подлежащее ich → höre. Глагол на 2-м месте после «Am Abend», подлежащее ich — после глагола (инверсия).'
      },
      {
        type: 'wordOrder',
        words: ['ich', 'heute', 'lerne', 'Deutsch'],
        correctOrder: ['Heute', 'lerne', 'ich', 'Deutsch'],
        translation: 'Сегодня я учу немецкий. (начните с heute)'
      },
      {
        type: 'wordOrder',
        words: ['du', 'was', 'machst', 'morgen', '?'],
        correctOrder: ['Was', 'machst', 'du', 'morgen', '?'],
        translation: 'Что ты делаешь завтра?'
      },
      {
        type: 'wordOrder',
        words: ['am Morgen', 'Kaffee', 'trinke', 'ich', 'zu Hause'],
        correctOrder: ['Am Morgen', 'trinke', 'ich', 'Kaffee', 'zu Hause'],
        translation: 'Утром я пью кофе дома.'
      },
      {
        type: 'fillBlank',
        question: 'Am Wochenende ___ wir im Park. (spielen)',
        acceptedAnswers: ['spielen'],
        explanation: 'Am Wochenende (поз. 1) + spielen (поз. 2, глагол) + wir (поз. 3, подлежащее после глагола — инверсия).'
      },
      {
        type: 'fillBlank',
        question: '___ du morgen? (arbeiten) — Вопрос: «Ты завтра работаешь?»',
        acceptedAnswers: ['Arbeitest'],
        explanation: 'В Ja/Nein-вопросе глагол стоит на 1-м месте: Arbeitest du morgen?'
      },
      {
        type: 'translation',
        question: 'По вечерам я учу немецкий дома.',
        acceptedAnswers: ['Abends lerne ich Deutsch zu Hause.', 'Abends lerne ich zu Hause Deutsch.'],
        explanation: 'Abends (поз. 1) → lerne (поз. 2, глагол) → ich (поз. 3, инверсия) → Deutsch zu Hause.'
      },
      {
        type: 'translation',
        question: 'Где ты работаешь?',
        acceptedAnswers: ['Wo arbeitest du?'],
        explanation: 'W-вопрос: Wo (поз. 1) + arbeitest (поз. 2) + du (поз. 3).'
      },
      {
        type: 'errorCorrection',
        sentence: 'Morgen ich arbeite nicht.',
        correctedSentence: 'Morgen arbeite ich nicht.',
        explanation: 'Правило V2: Morgen (поз. 1) → arbeite (поз. 2) → ich (поз. 3). Глагол всегда на 2-м месте!'
      },
      {
        type: 'errorCorrection',
        sentence: 'Heute ich trinke Kaffee.',
        correctedSentence: 'Heute trinke ich Kaffee.',
        explanation: 'После heute глагол должен стоять сразу — на 2-й позиции, а подлежащее ich — после глагола.'
      },
      {
        type: 'wordOrder',
        words: ['du', 'wohnst', 'in Berlin', '?'],
        correctOrder: ['Wohnst', 'du', 'in Berlin', '?'],
        translation: 'Ты живёшь в Берлине? (Ja/Nein-вопрос)'
      },
      {
        type: 'multipleChoice',
        question: 'Какой порядок обстоятельств правильный? Ich lerne ___ .',
        options: [
          'zu Hause gern abends Deutsch',
          'abends gern zu Hause Deutsch',
          'gern abends Deutsch zu Hause',
          'Deutsch abends zu Hause gern'
        ],
        correctIndex: 1,
        explanation: 'Порядок: время (abends) → образ (gern) → место (zu Hause) → дополнение (Deutsch).'
      },
      {
        type: 'translation',
        question: 'Ты играешь в футбол? (Ja/Nein-вопрос)',
        acceptedAnswers: ['Spielst du Fußball?'],
        explanation: 'Ja/Nein-вопрос: глагол на 1-м месте → Spielst (поз. 1) + du (поз. 2) + Fußball?'
      },
      {
        type: 'errorCorrection',
        sentence: 'Was du machst am Abend?',
        correctedSentence: 'Was machst du am Abend?',
        explanation: 'В W-вопросе: Was (поз. 1) + machst (поз. 2, глагол) + du (поз. 3). Глагол должен быть на 2-м месте.'
      }
    ]
  }
];
