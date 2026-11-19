// ===================================================================
// SENTENCE BUILDER — Тренажёр пошагового построения предложений
// ===================================================================

window.SENTENCE_BUILDER_DATA = [
  {
    id: 'chain-01',
    level: 'A1',
    title: 'Учёба и языки: от простого к сложному',
    theme: 'Lernen und Sprachen',
    steps: [
      {
        step: 1,
        de: 'Ich **lerne**.',
        ru: 'Я учусь.',
        explanation: 'Базовое простое предложение: Подлежащее (Ich) + Спрягаемый глагол (lerne) на 2-м месте.',
        rule: 'Позиция II: глагол всегда второй.'
      },
      {
        step: 2,
        de: 'Ich **lerne** Deutsch.',
        ru: 'Я учу немецкий.',
        explanation: 'Добавляем прямое дополнение (что именно?). Оно встаёт после глагола.',
        rule: 'Подлежащее + Глагол + Объект.'
      },
      {
        step: 3,
        de: 'Heute **lerne** ich Deutsch.',
        ru: 'Сегодня я учу немецкий.',
        explanation: 'Инверсия! Мы вынесли время (Heute) на 1-е место для акцента. Глагол lerne остался на 2-м месте, а подлежащее ich ушло на 3-е.',
        rule: 'Время (поз. 1) + Глагол (поз. 2) + Подлежащее (поз. 3).'
      },
      {
        step: 4,
        de: 'Heute **lerne** ich zu Hause Deutsch.',
        ru: 'Сегодня я учу немецкий дома.',
        explanation: 'Добавляем место (zu Hause). По немецким правилам обстоятельство времени (Heute) идёт раньше, чем место (zu Hause).',
        rule: 'Порядок обстоятельств: Сначала Когда (Heute), потом Где (zu Hause).'
      },
      {
        step: 5,
        de: 'Heute **lerne** ich sehr fleißig zu Hause Deutsch.',
        ru: 'Сегодня я очень усердно учу дома немецкий.',
        explanation: 'Добавили образ действия (sehr fleißig — как?). Вступает правило TeKaMoLo: Temporal (heute) → Modal (fleißig) → Lokal (zu Hause).',
        rule: 'TeKaMoLo: Время → Как → Где.'
      },
      {
        step: 6,
        de: 'Ich **lerne** Deutsch, weil ich in Deutschland **studieren möchte**.',
        ru: 'Я учу немецкий, потому что хочу учиться в Германии.',
        explanation: 'Придаточное предложение с союзом weil (потому что). В придаточном предложении все глаголы уходят в САМЫЙ КОНЕЦ предложения!',
        rule: 'Союз weil отправляет спрягаемый глагол в конец: ...weil ich in Deutschland studieren möchte.'
      }
    ]
  },
  {
    id: 'chain-02',
    level: 'A1',
    title: 'Поездка на работу: времена и модальные глаголы',
    theme: 'Zur Arbeit fahren',
    steps: [
      {
        step: 1,
        de: 'Er **fährt**.',
        ru: 'Он едет.',
        explanation: 'Подлежащее (Er) + сильный глагол fahren с изменением гласной (a → ä).',
        rule: 'fahren: er fährt'
      },
      {
        step: 2,
        de: 'Er **fährt** zur Arbeit.',
        ru: 'Он едет на работу.',
        explanation: 'Добавили направление (куда? zur Arbeit = zu der Arbeit).',
        rule: 'Предлог zu всегда требует Dativ (die Arbeit → der Arbeit).'
      },
      {
        step: 3,
        de: 'Morgens **fährt** er mit dem Bus zur Arbeit.',
        ru: 'По утрам он едет на автобусе на работу.',
        explanation: 'Инверсия: Morgens (1) + fährt (2) + er (3). Транспорт (mit dem Bus — как?) стоит перед направлением (куда?).',
        rule: 'Morgens на 1-м месте выталкивает глагол на 2-е место.'
      },
      {
        step: 4,
        de: 'Er **muss** jeden Morgen früh zur Arbeit **fahren**.',
        ru: 'Он должен каждое утро рано ехать на работу.',
        explanation: 'Появился модальный глагол müssen (muss). Модальный глагол встаёт на 2-е место, а смысловой глагол (fahren) в инфинитиве уходит в САМЫЙ КОНЕЦ (глагольная рамка!).',
        rule: 'Глагольная рамка: Modalverb (поз. 2) ... Infinitiv (в самом конце).'
      },
      {
        step: 5,
        de: 'Gestern **ist** er mit dem Auto zur Arbeit **gefahren**.',
        ru: 'Вчера он поехал на работу на машине (прошедшее время Perfekt).',
        explanation: 'В прошедшем времени Perfekt вспомогательный глагол sein (ist) стоит на 2-м месте, а Partizip II (gefahren) — в самом конце!',
        rule: 'Perfekt движения: sein (поз. 2) ... Partizip II (в конце).'
      }
    ]
  },
  {
    id: 'chain-03',
    level: 'A1-A2',
    title: 'Вечер в ресторане: заказ и друзья',
    theme: 'Im Restaurant',
    steps: [
      {
        step: 1,
        de: 'Wir **essen**.',
        ru: 'Мы едим.',
        explanation: 'Базовое утверждение: Wir + essen.',
        rule: 'essen: wir essen'
      },
      {
        step: 2,
        de: 'Wir **essen** Pizza.',
        ru: 'Мы едим пиццу.',
        explanation: 'Объект в винительном падеже (Akkusativ).',
        rule: 'Was essen wir? Pizza.'
      },
      {
        step: 3,
        de: 'Am Abend **essen** wir gern Pizza im Restaurant.',
        ru: 'Вечером мы с удовольствием едим пиццу в ресторане.',
        explanation: 'Am Abend (поз. 1) + essen (поз. 2) + wir (поз. 3). Снова порядок TeKaMoLo: когда (Am Abend) → как (gern) → где (im Restaurant).',
        rule: 'Инверсия + Te-Mo-Lo порядок слов.'
      },
      {
        step: 4,
        de: 'Wir **möchten** heute Abend Pizza **bestellen**.',
        ru: 'Мы хотели бы сегодня вечером заказать пиццу.',
        explanation: 'Вежливая форма möchten (хотели бы) на 2-м месте. Заказать (bestellen) — в конце в инфинитиве.',
        rule: 'möchten (2) ... bestellen (конец).'
      },
      {
        step: 5,
        de: 'Obwohl es spät **ist**, **gehen** wir noch ins Restaurant.',
        ru: 'Хотя уже поздно, мы всё же идём в ресторан.',
        explanation: 'Сложное предложение! В придаточном с obwohl глагол ist уходит в конец. А главное предложение начинается СРАЗУ с глагола gehen, потому что всё придаточное предложение считается позицией 1!',
        rule: 'Если придаточное впереди: союз... Глагол, ГЛАГОЛ Подлежащее...'
      }
    ]
  },
  {
    id: 'chain-04',
    level: 'A2-B1',
    title: 'Покупка квартиры: предлоги и придаточные причины',
    theme: 'Wohnung mieten',
    steps: [
      {
        step: 1,
        de: 'Sie **sucht** eine Wohnung.',
        ru: 'Она ищет квартиру.',
        explanation: 'S + V + O: Sie sucht (Akkusativ: eine Wohnung).',
        rule: 'Akkusativ женского рода не меняется: eine Wohnung.'
      },
      {
        step: 2,
        de: 'Sie **sucht** eine moderne Wohnung im Zentrum von Berlin.',
        ru: 'Она ищет современную квартиру в центре Берлина.',
        explanation: 'Добавили прилагательное с окончанием -e (eine moderne Wohnung) и предлог места im Zentrum.',
        rule: 'Склонение прилагательных после неопределённого артикля: eine moderne.'
      },
      {
        step: 3,
        de: 'Seit zwei Monaten **sucht** sie intensiv nach einer bezahlbaren Wohnung.',
        ru: 'Уже два месяца она интенсивно ищет доступную квартиру.',
        explanation: 'Предлог seit требует дательного падежа (Dativ): seit zwei Monaten. Управление глагола: suchen nach + Dativ.',
        rule: 'Инверсия: Seit zwei Monaten (1) + sucht (2) + sie (3).'
      },
      {
        step: 4,
        de: 'Sie **hat** eine schöne Wohnung **gefunden**, die ihr sehr gut **gefällt**.',
        ru: 'Она нашла прекрасную квартиру, которая ей очень нравится.',
        explanation: 'Главное в Perfekt (hat ... gefunden) + определительное придаточное (die ihr gefällt). Глагол gefällt стоит в самом конце придаточного!',
        rule: 'Относительное предложение (Relativsatz): относительное местоимение die ... глагол на конце.'
      }
    ]
  }
];
