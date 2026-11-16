import { CaseInfo } from '../types';

export const RUSSIAN_CASES: CaseInfo[] = [
  {
    nameRu: 'Именительный падеж (Субъект)',
    nameEn: 'Nominative Case (Subject)',
    questionRu: 'Кто? Что?',
    questionEn: 'Who? What?',
    usageRu: 'Исходная форма имени. В стиле C1 используется в качестве подлежащего в пассивных синтаксических конструкциях («Закон утверждается парламентом») и в номинативных предложениях.',
    usageEn: 'Base form of nouns/adjectives. In C1 registers, widely used as subjects in passive syntactic structures and nominative sentences.',
    color: 'emerald',
    singularEndings: {
      masculine: 'согласный / -й / -ь (исследователь, тезис)',
      feminine: '-а / -я / -ь (концепция, парадигма, мысль)',
      neuter: '-о / -е / -мя (исследование, решение, бремя)',
    },
    examples: [
      {
        sentenceRu: 'Выдвинутая учёным гипотеза получила эмпирическое подтверждение.',
        translationEn: 'The hypothesis put forward by the scientist received empirical confirmation.',
        highlightWord: 'гипотеза',
        caseName: 'Именительный',
      },
      {
        sentenceRu: 'Человеческий фактор остаётся ключевым элементом безопасности.',
        translationEn: 'The human factor remains the linchpin of safety.',
        highlightWord: 'фактор',
        caseName: 'Именительный',
      },
    ],
  },
  {
    nameRu: 'Родительный падеж (Партитив и Производные предлоги)',
    nameEn: 'Genitive Case (Partitive & Derivative Prepositions)',
    questionRu: 'Кого? Чего? Откуда?',
    questionEn: 'Whose? Of what? (Absence, Partitive -у, Prepositions)',
    usageRu: 'Отрицание абстрактных понятий («нет оснований», «не имеет прецедента»), партитивный родительный на -у/-ю («выпить чаю», «насыпать сахару»), производные предлоги C1: во избежание, в силу, ввиду, по причине, в отличие от.',
    usageEn: 'Abstract negation, partitive quantitative -у/-ю (чаю, сахару), and crucial C1 derivative prepositions: во избежание, в силу, ввиду, в отличие от.',
    color: 'sky',
    singularEndings: {
      masculine: '-а / -я / партитив -у / -ю (кризиса, факта, чаю)',
      feminine: '-ы / -и (концепции, прерогативы)',
      neuter: '-а / -я / -мени (решения, времени, бремени)',
    },
    examples: [
      {
        sentenceRu: 'Во избежание дальнейших разногласий стороны внесли поправку в регламент.',
        translationEn: 'In order to avoid further disputes, the parties amended the regulations.',
        highlightWord: 'разногласий',
        caseName: 'Родительный (во избежание)',
      },
      {
        sentenceRu: 'Данное явление не имеет аналогов в современной практике.',
        translationEn: 'This phenomenon has no analogies in modern practice.',
        highlightWord: 'аналогов',
        caseName: 'Родительный (отрицание)',
      },
    ],
  },
  {
    nameRu: 'Дательный падеж (Норма «Согласно / Вопреки»)',
    nameEn: 'Dative Case (Norm of "Согласно / Вопреки")',
    questionRu: 'Кому? Чему?',
    questionEn: 'To whom? To what? (Adherence & Prepositions)',
    usageRu: 'Ключевая C1 норма: производные предлоги «согласно», «вопреки», «благодаря», «наперекор» строго требуют Дательного падежа! Также глаголы содействия и препятствия: препятствовать чему-л., способствовать чему-л., потворствовать чему-л.',
    usageEn: 'Rigorous C1 rule: prepositions "согласно", "вопреки", "благодаря" govern the Dative case without exception. Verbs of assistance & hindrance: препятствовать, способствовать.',
    color: 'amber',
    singularEndings: {
      masculine: '-у / -ю (регламенту, проекту, учёному)',
      feminine: '-е / -и (традиции, норме, концепции)',
      neuter: '-у / -ю (распоряжению, решению)',
    },
    examples: [
      {
        sentenceRu: 'Согласно утверждённому регламенту, доклад длится не более двадцати минут.',
        translationEn: 'Pursuant to the approved protocol, the report lasts no longer than twenty minutes.',
        highlightWord: 'регламенту',
        caseName: 'Дательный (согласно)',
      },
      {
        sentenceRu: 'Вопреки пессимистическим прогнозам, проект был успешно завершён.',
        translationEn: 'Contrary to pessimistic forecasts, the project was successfully accomplished.',
        highlightWord: 'прогнозам',
        caseName: 'Дательный (вопреки)',
      },
    ],
  },
  {
    nameRu: 'Винительный падеж (Объект и Временные рамки)',
    nameEn: 'Accusative Case (Direct Object & Temporal Frame)',
    questionRu: 'Кого? Что? В какое время?',
    questionEn: 'Whom? What? (Direct Object)',
    usageRu: 'Прямое дополнение при переходных глаголах научного дискурса («верифицировать гипотезу», «нивелировать различия», «денонсировать конвенцию»). Одушевлённость для абстрактных лиц и юрлиц.',
    usageEn: 'Direct object of high-register transitive verbs. Distinguishing animacy in legal and abstract discourse.',
    color: 'purple',
    singularEndings: {
      masculine: 'неодуш = Им.п. / одуш = Род.п. (договор / контрагента)',
      feminine: '-у / -ю / -ь (концепцию, прерогативу, мысль)',
      neuter: '-о / -е = Им.п. (решение, постановление)',
    },
    examples: [
      {
        sentenceRu: 'Исследователи стремятся нивелировать возможные методологические погрешности.',
        translationEn: 'Researchers strive to eliminate potential methodological discrepancies.',
        highlightWord: 'погрешности',
        caseName: 'Винительный',
      },
      {
        sentenceRu: 'Парламент единогласно денонсировал международный договор.',
        translationEn: 'The parliament unanimously denounced the international treaty.',
        highlightWord: 'договор',
        caseName: 'Винительный',
      },
    ],
  },
  {
    nameRu: 'Творительный падеж (Предикатив и Орудие)',
    nameEn: 'Instrumental Case (Predicative & Agency)',
    questionRu: 'Кем? Чем?',
    questionEn: 'By whom? With what? (Agency & Predicate Complement)',
    usageRu: 'В стиле C1 оформляет агента действия в страдательном залоге («написан профессором»), предикативное определение статуса («является квинтэссенцией», «служит прецедентом») и глаголы: пренебрегать чем-л., дорожить чем-л., поступиться чем-л.',
    usageEn: 'In C1 texts: marks agent in passive voice, predicative complement with "является / служит", and verbs: пренебрегать, дорожить.',
    color: 'rose',
    singularEndings: {
      masculine: '-ом / -ем / -ём (фактором, исследованием)',
      feminine: '-ой / -ей / -ью (парадигмой, мыслью, прерогативой)',
      neuter: '-ом / -ем (решением, значением)',
    },
    examples: [
      {
        sentenceRu: 'Данное соглашение является безукоризненным образцом дипломатического такта.',
        translationEn: 'This agreement constitutes an irreproachable model of diplomatic tact.',
        highlightWord: 'образцом',
        caseName: 'Творительный (предикатив)',
      },
      {
        sentenceRu: 'Ни в коем случае нельзя пренебрегать установленными нормами безопасности.',
        translationEn: 'Under no circumstances should one neglect established safety norms.',
        highlightWord: 'нормами',
        caseName: 'Творительный (управление)',
      },
    ],
  },
  {
    nameRu: 'Предложный падеж (Местный падеж на -У́)',
    nameEn: 'Prepositional Case (Locative on -У́ & Abstract Topic)',
    questionRu: 'О ком? О чём? В ком? В чём?',
    questionEn: 'About what? In where? (Second Locative on -у́)',
    usageRu: 'Предмет рассуждения и исследования («о природе сознания»). Второй предложный (местный) падеж с ударным окончанием -у́/-ю́: в аэропорту́, на мосту́, в саду́, в лесу́, на ветру́, в строю́.',
    usageEn: 'Object of scholarly discourse ("о природе сознания"). Second locative with stressed -у́ (в аэропорту́, на мосту́, в строю́).',
    color: 'indigo',
    singularEndings: {
      masculine: '-е / -и / местный -у́ (о факторе, в развитии, в аэропорту́)',
      feminine: '-е / -и (о концепции, о мысли)',
      neuter: '-е / -и (об исследовании, о решении)',
    },
    examples: [
      {
        sentenceRu: 'В авторской монографии подробно говорится о трансформации мирового порядка.',
        translationEn: 'The author’s monograph details the transformation of global order.',
        highlightWord: 'трансформации',
        caseName: 'Предложный',
      },
      {
        sentenceRu: 'Самолёт делегации приземлился в международном аэропорту́.',
        translationEn: 'The delegation’s aircraft touched down at the international airport.',
        highlightWord: 'аэропорту',
        caseName: 'Местный (второй предложный)',
      },
    ],
  },
];

// C1 PARTICIPLES (ПРИЧАСТИЯ)
export interface ParticipleRule {
  type: string;
  tense: 'Настоящее время' | 'Прошедшее время';
  voice: 'Действительное (Active)' | 'Страдательное (Passive)';
  suffixes: string;
  formationRu: string;
  examples: { word: string; sentence: string; translation: string }[];
}

export const C1_PARTICIPLES: ParticipleRule[] = [
  {
    type: 'Действительное причастие настоящего времени',
    tense: 'Настоящее время',
    voice: 'Действительное (Active)',
    suffixes: '-ущ- / -ющ- (I спряжение), -ащ- / -ящ- (II спряжение)',
    formationRu: 'От основы настоящего времени переходных и непереходных глаголов НСВ.',
    examples: [
      { word: 'Определя́ющий', sentence: 'Фактор, определяющий вектор экономического роста.', translation: 'A factor determining the vector of economic growth.' },
      { word: 'Коррели́рующий', sentence: 'Показатели, коррелирующие с динамикой инфляции.', translation: 'Indicators correlating with inflation trajectory.' },
    ],
  },
  {
    type: 'Действительное причастие прошедшего времени',
    tense: 'Прошедшее время',
    voice: 'Действительное (Active)',
    suffixes: '-вш- (после гласных), -ш- (после согласных)',
    formationRu: 'От основы инфинитива глаголов СВ и НСВ.',
    examples: [
      { word: 'Дости́гший', sentence: 'Учёный, достигший выдающихся успехов в квантовой физике.', translation: 'The scientist who attained outstanding achievements in quantum physics.' },
      { word: 'Иниции́ровавший', sentence: 'Комитет, инициировавший масштабную реформу.', translation: 'The committee that initiated wide-scale reform.' },
    ],
  },
  {
    type: 'Страдательное причастие настоящего времени',
    tense: 'Настоящее время',
    voice: 'Страдательное (Passive)',
    suffixes: '-ем- / -ом- (I спр.), -им- (II спр.)',
    formationRu: 'От основы настоящего времени переходных глаголов НСВ книжного стиля.',
    examples: [
      { word: 'Реша́емый', sentence: 'Проблема, решаемая междисциплинарной группой.', translation: 'A problem being resolved by an interdisciplinary team.' },
      { word: 'Изуча́емый', sentence: 'Феномен, изучаемый ведущими социологами мира.', translation: 'A phenomenon studied by world-leading sociologists.' },
    ],
  },
  {
    type: 'Страдательное причастие прошедшего времени',
    tense: 'Прошедшее время',
    voice: 'Страдательное (Passive)',
    suffixes: '-нн-, -енн-, -т-',
    formationRu: 'От основы инфинитива переходных глаголов СВ. Краткая форма имеет одну букву Н (решён, утверждён).',
    examples: [
      { word: 'Утверждённый', sentence: 'Меморандум, утверждённый обеими палатами парламента.', translation: 'The memorandum ratified by both chambers of parliament.' },
      { word: 'При́нятый', sentence: 'Закон, единогласно принятый в третьем чтении.', translation: 'The law unanimously adopted in the third reading.' },
    ],
  },
];

// C1 VERBAL ADVERBS (ДЕЕПРИЧАСТИЯ)
export interface GerundRule {
  aspect: 'Несовершенный вид (НСВ)' | 'Совершенный вид (СВ)';
  suffixes: string;
  meaningRu: string;
  syntacticRuleRu: string;
  examples: { word: string; sentence: string; errorComparison?: string }[];
}

export const C1_GERUNDS: GerundRule[] = [
  {
    aspect: 'Несовершенный вид (НСВ)',
    suffixes: '-а / -я (читая, анализируя), редко -учи/-ючи',
    meaningRu: 'Обозначает добавочное действие, происходящее одновременно с главным сказуемым.',
    syntacticRuleRu: 'Главный глагол и деепричастие обязаны относиться к одному грамматическому субъекту-подлежащему.',
    examples: [
      {
        word: 'Анализи́руя',
        sentence: 'Анализируя архивные документы, исследователи обнаружили неизвестные письма.',
        errorComparison: 'Нельзя: «Анализируя документы, исследователям открылась истина» (нет подлежащего-деятеля).',
      },
      {
        word: 'Опира́ясь',
        sentence: 'Опираясь на математические расчеты, инженеры доказали устойчивость конструкции.',
      },
    ],
  },
  {
    aspect: 'Совершенный вид (СВ)',
    suffixes: '-в, -вши, -ши (взвесив, поняв, принесши)',
    meaningRu: 'Обозначает добавочное действие, предшествующее главному сказуемому или обусловливающее его.',
    syntacticRuleRu: 'Действие деепричастия СВ уже завершилось к моменту совершения сказуемого.',
    examples: [
      {
        word: 'Тща́тельно взве́сив',
        sentence: 'Тщательно взвесив все риски, совет директоров воздержался от поспешных инвестиций.',
        errorComparison: 'Нельзя: «Взвесив риски, решение было отложено» (решение не взвешивало риски).',
      },
      {
        word: 'Исчерпа́в',
        sentence: 'Исчерпав дипломатические каналы, стороны обратились в международный арбитраж.',
      },
    ],
  },
];

// C1 DERIVATIVE PREPOSITIONS (ПРОИЗВОДНЫЕ ПРЕДЛОГИ)
export interface DerivativePreposition {
  prepositionRu: string;
  caseGovernedRu: string;
  meaningEn: string;
  exampleSentenceRu: string;
  typicalMistakeRu: string;
}

export const C1_DERIVATIVE_PREPOSITIONS: DerivativePreposition[] = [
  {
    prepositionRu: 'Согласно',
    caseGovernedRu: 'Дательный падеж (Кому? Чему?)',
    meaningEn: 'According to / Pursuant to / In accordance with',
    exampleSentenceRu: 'Согласно распоряжению ректора, занятия перенесены на дистанционный формат.',
    typicalMistakeRu: 'Грубейшая ошибка — использовать родительный: «согласно распоряжения» ❌. Норма: «согласно распоряжению» ✅.',
  },
  {
    prepositionRu: 'Вопреки',
    caseGovernedRu: 'Дательный падеж (Кому? Чему?)',
    meaningEn: 'Contrary to / In spite of / Despite',
    exampleSentenceRu: 'Вопреки пессимистическим ожиданиям критиков, премьера прошла с грандиозным триумфом.',
    typicalMistakeRu: 'Только с Дательным: вопреки предсказаниям (не предсказаний!).',
  },
  {
    prepositionRu: 'Благодаря',
    caseGovernedRu: 'Дательный падеж (Кому? Чему?)',
    meaningEn: 'Thanks to / Owing to (only for positive or neutral outcomes)',
    exampleSentenceRu: 'Благодаря слаженной работе исследовательской группы эксперимент завершился успешно.',
    typicalMistakeRu: 'В русском литературном языке «благодаря» употребляется только с положительными причинами. При негативных — «из-за» или «вследствие».',
  },
  {
    prepositionRu: 'Во избежание',
    caseGovernedRu: 'Родительный падеж (Кого? Чего?)',
    meaningEn: 'In order to avoid / To avert / In avoidance of',
    exampleSentenceRu: 'Во избежание фальсификации данных исходные протоколы были зашифрованы.',
    typicalMistakeRu: 'Пишется раздельно, на конце буква Е: «во избежаниЕ» (чего? Род. падеж).',
  },
  {
    prepositionRu: 'В силу',
    caseGovernedRu: 'Родительный падеж (Кого? Чего?)',
    meaningEn: 'By virtue of / Due to the force of',
    exampleSentenceRu: 'В силу непредвиденных юридических коллизий контракт подлежит пересмотру.',
    typicalMistakeRu: 'Пишется раздельно: «в силу».',
  },
  {
    prepositionRu: 'Ввиду',
    caseGovernedRu: 'Родительный падеж (Кого? Чего?)',
    meaningEn: 'In view of / Considering',
    exampleSentenceRu: 'Ввиду надвигающегося шторма навигация в заливе временно приостановлена.',
    typicalMistakeRu: 'Предлог пишется слитно («ввиду обстоятельств»), в отличие от существительного с предлогом («иметь в виду»).',
  },
];

// C1 VERBAL GOVERNANCE (СЛОЖНОЕ ГЛАГОЛЬНОЕ УПРАВЛЕНИЕ)
export interface VerbalGovernanceItem {
  verbRu: string;
  governanceRu: string;
  meaningEn: string;
  exampleRu: string;
}

export const C1_VERBAL_GOVERNANCE: VerbalGovernanceItem[] = [
  {
    verbRu: 'Препятствовать',
    governanceRu: 'Чему? (Дательный падеж без предлога)',
    meaningEn: 'To hinder / obstruct / impede',
    exampleRu: 'Бюрократические барьеры препятствуют развитию инновационного предпринимательства.',
  },
  {
    verbRu: 'Способствовать',
    governanceRu: 'Чему? (Дательный падеж без предлога)',
    meaningEn: 'To facilitate / foster / contribute to',
    exampleRu: 'Инвестиции в фундаментальную науку способствуют экономическому процветанию страны.',
  },
  {
    verbRu: 'Придерживаться',
    governanceRu: 'Чего? (Родительный падеж без предлога)',
    meaningEn: 'To adhere to / abide by',
    exampleRu: 'Команда строго придерживается академической этики и методологической точности.',
  },
  {
    verbRu: 'Пренебрегать / Пренебречь',
    governanceRu: 'Чем? (Творительный падеж без предлога)',
    meaningEn: 'To disregard / neglect',
    exampleRu: 'Ни при каких условиях нельзя пренебрегать техникой безопасности на производстве.',
  },
  {
    verbRu: 'Удостоить',
    governanceRu: 'Кого? Чем? или Чего? (Творительный или Родительный)',
    meaningEn: 'To bestow upon / honor with',
    exampleRu: 'Учёного удостоили Нобелевской премии за выдающееся открытие.',
  },
  {
    verbRu: 'Отдавать себе отчёт',
    governanceRu: 'В чём? (Предложный падеж с предлогом «в»)',
    meaningEn: 'To be fully cognizant of / realize',
    exampleRu: 'Руководство отдаёт себе отчёт в колоссальной сложности стоящей задачи.',
  },
  {
    verbRu: 'Апеллировать',
    governanceRu: 'К кому? К чему? (Дательный падеж с предлогом «к»)',
    meaningEn: 'To appeal to / invoke (facts, court)',
    exampleRu: 'Адвокат апеллировал к непреложным доказательствам невиновности подзащитного.',
  },
];

// C1 PARONYMS (ПАРОНИМЫ РУССКОГО ЯЗЫКА)
export interface ParonymPair {
  wordA: string;
  meaningA: string;
  exampleA: string;
  wordB: string;
  meaningB: string;
  exampleB: string;
  mnemonicRu: string;
}

export const C1_PARONYMS: ParonymPair[] = [
  {
    wordA: 'Дипломатический',
    meaningA: 'Относящийся к дипломатии как государственной службе',
    exampleA: 'Дипломатический иммунитет, дипломатические переговоры, дипломатический корпус.',
    wordB: 'Дипломатичный',
    meaningB: 'Тонкий, чуткий, вежливый, умеющий улаживать разногласия',
    exampleB: 'Дипломатичный ответ, дипломатичное поведение, проявить дипломатичный такт.',
    mnemonicRu: 'Отношения и протокол — дипломатические; человек и его характер — дипломатичный.',
  },
  {
    wordA: 'Невежа',
    meaningA: 'Грубый, невоспитанный человек (нарушитель этикета)',
    exampleA: 'Не уступил место пожилому человеку — повёл себя как невоспитанный невежа.',
    wordB: 'Невежда',
    meaningB: 'Необразованный, несведущий человек, неуч (не ведает знаний)',
    exampleB: 'Он полный невежда в вопросах астрофизики и квантовой механики.',
    mnemonicRu: 'Невежа — от «вежливость» (невежливый). Невежда — от «ведать» (не знающий).',
  },
  {
    wordA: 'Предоставить',
    meaningA: 'Дать возможность пользоваться, передать в чьё-то распоряжение',
    exampleA: 'Предоставить слово, предоставить кредит, предоставить отпуск.',
    wordB: 'Представить',
    meaningB: 'Познакомить, предъявить документ, вообразить в мыслях',
    exampleB: 'Представить отчёт руководству, представить нового сотрудника, трудно себе представить.',
    mnemonicRu: 'Предоставить = отдать во власть; представить = показать перед кем-то.',
  },
  {
    wordA: 'Факт',
    meaningA: 'Действительное событие, реальное происшествие',
    exampleA: 'Привести исторические факты, установить факт правонарушения.',
    wordB: 'Фактор',
    meaningB: 'Причина, движущая сила какого-либо процесса',
    exampleB: 'Человеческий фактор, решающий фактор успеха, социально-экономические факторы.',
    mnemonicRu: 'Факт — свершившееся событие; фактор — условие или причина развития.',
  },
  {
    wordA: 'Экономичный',
    meaningA: 'Дающий возможность сэкономить, выгодный по расходам',
    exampleA: 'Экономичный автомобиль с низким расходом топлива, экономичная технология.',
    wordB: 'Экономный',
    meaningB: 'Бережливый, разумно тратящий деньги или ресурсы (о человеке)',
    exampleB: 'Экономная хозяйка, экономный расходователь бюджета.',
    mnemonicRu: 'Экономным бывает человек; экономичным — прибор, тариф или механизм.',
  },
  {
    wordA: 'Надеть',
    meaningA: 'Натянуть одежду НА себя или НА предмет (что-то НА кого-то)',
    exampleA: 'Надеть пальто, надеть маску, надеть чехол на кресло.',
    wordB: 'Одеть',
    meaningB: 'Окружить одеждой другого человека или существо (кого-то)',
    exampleB: 'Одеть ребёнка в тёплый комбинезон, одеть куклу.',
    mnemonicRu: 'Одевают Надежду, надевают одежду!',
  },
];

// Legacy items preserved to ensure compatibility
export interface GenderRule {
  genderRu: string;
  genderEn: string;
  pronoun: string;
  color: string;
  endingsRu: string;
  endingsEn: string;
  tipRu: string;
  tipEn: string;
  examples: { word: string; translation: string; ending: string }[];
}

export const NOUN_GENDERS: GenderRule[] = [
  {
    genderRu: 'Мужской род',
    genderEn: 'Masculine',
    pronoun: 'Он (He / It)',
    color: 'blue',
    endingsRu: 'Твёрдый согласный, -й, некоторые на -ь',
    endingsEn: 'Hard consonant, -й, some -ь',
    tipRu: 'Мужчины (папа, дедушка) согласуются как мужской род.',
    tipEn: 'Male roles ending in -a agree as masculine.',
    examples: [
      { word: 'Тезис', translation: 'Thesis', ending: 'согласный с' },
      { word: 'Прецедент', translation: 'Precedent', ending: 'согласный т' },
    ],
  },
  {
    genderRu: 'Женский род',
    genderEn: 'Feminine',
    pronoun: 'Она (She / It)',
    color: 'rose',
    endingsRu: 'Окончания на -а, -я, абстрактные на -ость / -есть',
    endingsEn: 'Ends in -а, -я, or abstract -ость / -есть',
    tipRu: 'Существительные на -ость всегда женского рода (прерогатива, парадигма, погрешность).',
    tipEn: 'Abstract nouns ending in -ость are strictly feminine.',
    examples: [
      { word: 'Парадигма', translation: 'Paradigm', ending: '-а' },
      { word: 'Прерогатива', translation: 'Prerogative', ending: '-а' },
    ],
  },
  {
    genderRu: 'Средний род',
    genderEn: 'Neuter',
    pronoun: 'Оно (It)',
    color: 'amber',
    endingsRu: 'Окончания на -о, -е, разносклоняемые на -мя (бремя, время)',
    endingsEn: 'Ends in -о, -е, or heteroclitic -мя',
    tipRu: 'Разносклоняемые слова на -мя: бремя, племя, семя, стремя, пламя.',
    tipEn: 'Heteroclitic neuter nouns end in -мя (бремя, пламя).',
    examples: [
      { word: 'Исследование', translation: 'Research / study', ending: '-е' },
      { word: 'Бремя', translation: 'Burden / onus', ending: '-мя' },
    ],
  },
];

export interface VerbConjugationExample {
  infinitive: string;
  translationEn: string;
  type: '1-я спряжение (-ать / -ять)' | '2-я спряжение (-ить)';
  forms: { pronounRu: string; pronounEn: string; form: string }[];
}

export const VERB_CONJUGATIONS: VerbConjugationExample[] = [
  {
    infinitive: 'Верифици́ровать (to verify)',
    translationEn: 'First Conjugation (I спряжение) - Academic Loan Verb',
    type: '1-я спряжение (-ать / -ять)',
    forms: [
      { pronounRu: 'Я', pronounEn: 'I', form: 'верифици́рую' },
      { pronounRu: 'Ты', pronounEn: 'You', form: 'верифици́руешь' },
      { pronounRu: 'Он / Она́', pronounEn: 'He / She', form: 'верифици́рует' },
      { pronounRu: 'Мы', pronounEn: 'We', form: 'верифици́руем' },
      { pronounRu: 'Вы', pronounEn: 'You (pl.)', form: 'верифици́руете' },
      { pronounRu: 'Они́', pronounEn: 'They', form: 'верифици́руют' },
    ],
  },
];
