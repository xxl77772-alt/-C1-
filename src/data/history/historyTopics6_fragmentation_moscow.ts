import { HistoryTopic } from '../../types';

export const TOPICS_GRADE_6_MEDIEVAL: HistoryTopic[] = [
  // =========================================================================
  // GRADE 6 - TOPIC 3: Феодальная раздробленность и центры силы Руси
  // =========================================================================
  {
    id: 'hist-6-feudal-fragmentation',
    grade: 6,
    eraId: 'era-grade-6',
    order: 3,
    titleRu: 'Феодальная раздробленность Руси: Любечский съезд, Новгородская республика и Владимиро-Суздальское княжество',
    titleEn: 'Feudal Fragmentation: Lyubech Council, Novgorod Republic & Vladimir-Suzdal',
    subtitleRu: '«Каждый да держит отчину свою» (1097 г.), вечевое народоправство Новгорода и взлёт Северо-Восточной Руси',
    subtitleEn: 'Princely decentralization (1097), Novgorod merchant democracy, and northeastern Vladimir sovereignty',
    periodRu: '1097 — 1237 гг.',
    periodEn: '1097 — 1237 AD',
    icon: '🏰',
    overviewRu:
      'В конце XI — XII веках Русь вступила в закономерный период феодальной раздробленности. На Любечском съезде князей 1097 года был провозглашён принцип: «Каждый да держит отчину свою». Единое государство распалось на полтора десятка самостоятельных княжеств и земель. Среди них выделились три ключевые модели власти: боярская вечевая республика в Великом Новгороде, сильное княжеское самовластие во Владимиро-Суздальской земле и дуализм князя и бояр в Галицко-Волынском княжестве.',
    overviewEn:
      'In the 12th century Rus divided into autonomous principalities following the 1097 Lyubech Council principle ("Every prince holds his own patrimony"). Three distinct political systems emerged: Novgorod republican boyar rule, Vladimir-Suzdal princely autocracy, and Galician-Volhynian boyar-princely dualism.',
    sections: [
      {
        headingRu: '1. Причины раздробленности и Любечский съезд (1097 г.)',
        headingEn: '1. Causes of Fragmentation & Lyubech Council (1097)',
        contentRu:
          'Причины распада единого государства были глубокими и закономерными:\n• Господство натурального хозяйства: каждое княжество полностью обеспечивало себя само и не зависело от торговли с соседями;\n• Рост и укрепление вотчинного боярского землевладения: местные бояре хотели иметь своего сильного князя на месте, а не кормить далёкий Киев;\n• Упадок торгового пути «из варяг в греки» из-за набегов половцев и крестовых походов;\n• Лествичная система престолонаследия (переход власти от старшего брата к младшему), порождавшая бесконечные кровавые усобицы.\n\nВ 1097 году по инициативе Владимира Мономаха состоялся Любечский съезд князей, закрепивший раздел земель между княжескими родами: «Каждый да держит отчину свою». Раздробленность была юридически признана.',
        contentEn:
          'Economic self-sufficiency, rise of hereditary boyar estates (votchina), decline of the trade route from the Varangians to the Greeks, and the convoluted lateral succession ladder led to decentralization codified at the 1097 Lyubech Council.',
      },
      {
        headingRu: '2. Новгородская феодальная боярская республика',
        headingEn: '2. Novgorod Boyar Republic',
        contentRu:
          'В 1136 году новгородцы восстали против князя Всеволода Мстиславича и изгнали его, установив республиканский строй.\n\nСтруктура управления в Великом Новгороде:\n• Вече — общегородское собрание свободных граждан на Торговой стороне; избирало высших должностных лиц, принимало законы, решало вопросы войны и мира;\n• Посадник — выборный глава городского самоуправления из знатнейших бояр; вёл суд, дипломатию и казну;\n• Тысяцкий — предводитель городского ополчения и защитник интересов купцов и ремесленников;\n• Архиепископ (владыка) — глава церкви, хранитель государственной казны и печати Новгорода;\n• Князь — приглашался вечем исключительно как военный специалист по договору («ряду»); не имел права владеть землёй в Новгородской волости и вмешиваться во внутренний суд.',
        contentEn:
          'In 1136 Novgorod expelled its prince, establishing a merchant boyar republic. The Veche elected the Posadnik (chief magistrate), Tysyatsky (militia commander), and Archbishop, hiring a prince purely as contracted military commander with no landholding rights.',
      },
      {
        headingRu: '3. Владимиро-Суздальское княжество и белокаменное зодчество',
        headingEn: '3. Vladimir-Suzdal Principality & White-Stone Architecture',
        contentRu:
          'В Северо-Восточной Руси («Залесском крае»), защищённом густыми лесами от набегов степняков, сформировалось мощное княжество с неограниченной властью князя:\n• Юрий Долгорукий — основал многие города, впервые упомянул Москву под 1147 годом («Приди ко мне, брате, в Москов»);\n• Андрей Боголюбский (1157–1174 гг.) — перенёс столицу из Суздаля во Владимир, построил шедевры белокаменного зодчества: Успенский собор, Золотые ворота во Владимире, жемчужину мировой архитектуры храм Покрова на Нерли (1165 г.); стремился к единоличной власти и был убит заговорщиками-боярами Кучковичами;\n• Всеволод Большое Гнездо (1176–1212 гг.) — наивысший расцвет Владимира; построил Дмитриевский собор, славился многочисленным потомством и огромным войском («может Волгу вёслами расплескать, а Дон шлемами вычерпать»).',
        contentEn:
          'Protected by dense forests, northeastern Rus flourished under Yuri Dolgoruky (founded Moscow, mentioned 1147), Andrei Bogolyubsky (capital in Vladimir; built Church of the Intercession on the Nerl 1165), and Vsevolod the Big Nest (Dmitrievsky Cathedral).',
      },
    ],
    keyFigures: [
      {
        id: 'fig-vladimir-monomakh',
        nameRu: 'Владимир Всеволодович Мономах',
        nameEn: 'Vladimir Monomakh',
        dates: '1053 — 1125 гг.',
        roleRu: 'Великий князь Киевский, государственный деятель и полководец',
        roleEn: 'Grand Prince of Kyiv, author of "Instruction"',
        avatar: '👑',
        grade: 6,
        keyActionsRu: [
          'Организатор победоносных походов в степь против половцев (1103, 1111 гг. — «крестовый поход в степь»).',
          'Принял «Устав Владимира Мономаха» (1113 г.), ограничивший ростовщические проценты и защитивший закупов.',
          'Написал знаменитое «Поучение детям» — памятник нравственной и государственной мудрости.',
        ],
        legacyRu: 'Символ идеального мудрого правителя, временно восстановившего единство Руси.',
        legacyEn: 'Epitome of the wise medieval ruler whose cap (Cap of Monomakh) became imperial regalia.',
      },
      {
        id: 'fig-andrei-bogolyubsky',
        nameRu: 'Андрей Юрьевич Боголюбский',
        nameEn: 'Andrei Bogolyubsky',
        dates: 'ок. 1111 — 1174 гг.',
        roleRu: 'Князь Владимиро-Суздальский, первый самовластец Северо-Восточной Руси',
        roleEn: 'Prince of Vladimir-Suzdal, white-stone architecture patron',
        avatar: '🏛️',
        grade: 6,
        keyActionsRu: [
          'Сделал город Владимир новой столицей Руси, перевезя чудотворную Владимирскую икону Божией Матери.',
          'Построил соборы во Владимире и храм Покрова на Нерли (1165 г.).',
          'В 1169 году взял Киев штурмом, но отказался в нём править, утвердив первенство Владимира.',
        ],
        legacyRu: 'Заложил фундамент будущей великорусской государственности с центром на Северо-Востоке.',
        legacyEn: 'Shifted the Russian political gravitational center from Kyiv to Vladimir-on-Klyazma.',
      },
    ],
    timelineEvents: [
      {
        year: 1097,
        dateRu: '1097 г.',
        dateEn: '1097 AD',
        titleRu: 'Любечский съезд русских князей',
        titleEn: 'Council of Lyubech',
        descriptionRu: 'Съезд князей, провозгласивший вотчинный принцип наследования: «Каждый да держит отчину свою».',
        significanceRu: 'Юридическое оформление политической раздробленности Древнерусского государства.',
        tags: ['Любеч', 'Съезд', 'Раздробленность'],
      },
      {
        year: 1136,
        dateRu: '1136 г.',
        dateEn: '1136 AD',
        titleRu: 'Изгнание князя Всеволода из Новгорода',
        titleEn: 'Expulsion of Prince Vsevolod & Novgorod Republic',
        descriptionRu: 'Восстание новгородцев и установление вечевой боярской республики.',
        significanceRu: 'Появление уникальной формы республиканского правления на Руси.',
        tags: ['Новгород', 'Вече', 'Республика'],
      },
      {
        year: 1147,
        dateRu: '1147 г.',
        dateEn: '1147 AD',
        titleRu: 'Первое летописное упоминание Москвы',
        titleEn: 'First Historical Mention of Moscow',
        descriptionRu: 'Князь Юрий Долгорукий пригласил черниговского князя Святослава: «Приди ко мне, брате, в Москов».',
        significanceRu: 'Официальный год основания Москвы.',
        tags: ['Москва', 'Юрий Долгорукий', 'Основание'],
      },
      {
        year: 1165,
        dateRu: '1165 г.',
        dateEn: '1165 AD',
        titleRu: 'Строительство храма Покрова на Нерли',
        titleEn: 'Construction of the Church of the Intercession on the Nerl',
        descriptionRu: 'Возведение белокаменного шедевра древнерусского зодчества при впадении Нерли в Клязьму.',
        significanceRu: 'Вершина домонгольской русской архитектуры (объект Всемирного наследия ЮНЕСКО).',
        tags: ['Архитектура', 'Покров на Нерли', 'Культура'],
      },
    ],
    terms: [
      {
        termRu: 'Вотчина',
        termEn: 'Votchina (Patrimonial Estate)',
        definitionRu: 'Крупная родовая земельная собственность, передававшаяся по наследству от отца к сыну, с правом продажи и дарения.',
        definitionEn: 'Hereditary allodial land estate passed down through generations of boyar nobility.',
        historicalContextRu: 'В отличие от более позднего поместья, вотчина была безусловным владением, не зависевшим от службы.',
        historicalContextEn: 'Unconditional private landholding distinct from the later service pomestye.',
        examTipRu: 'Для ЕГЭ: принципиально уметь сравнивать вотчину (безусловное родовое владение) и поместье (условное служебное).',
      },
      {
        termRu: 'Посадник и тысяцкий',
        termEn: 'Posadnik and Tysyatsky',
        definitionRu: 'Высшие выборные должностные лица в Новгородской республике: посадник руководил администрацией и судом; тысяцкий возглавлял ополчение и сбор налогов.',
        definitionEn: 'Chief elected magistrates of Novgorod: Posadnik (mayor/judge) and Tysyatsky (militia head/tax official).',
        historicalContextRu: 'Избирались на новгородском вече из наиболее влиятельных боярских кланов.',
        historicalContextEn: 'Chosen by the Veche assembly from powerful oligarchic boyar factions.',
      },
    ],
    examFocusRu: {
      examTarget: 'ОГЭ / ЕГЭ (Задания 1, 3, 13, 14, 18, 19)',
      coreTakeaways: [
        'Понимать положительные (расцвет городов, культуры, архитектуры) и отрицательные (ослабление обороноспособности перед кочевниками) последствия раздробленности.',
        'Знать памятники культуры: Покров на Нерли (1165 г.), Успенский и Дмитриевский соборы во Владимире, Георгиевский собор в Юрьеве-Польском.',
        'Уметь сопоставлять системы власти: Новгород (республика), Владимир (княжеская монархия), Галич (боярско-княжеская борьба).',
      ],
      essayPrompts: [
        'Почему феодальная раздробленность на Руси была исторически неизбежным процессом?',
        'Каковы были достоинства и уязвимости новгородской вечевой модели управления?',
      ],
    },
    examFocusEn: {
      examTarget: 'Grade 6 Medieval Rus History',
      coreTakeaways: [
        'Master the date 1147 for Moscow founding.',
        'Distinguish governance models between Novgorod and Vladimir.',
      ],
      essayPrompts: [
        'Analyze the impact of decentralization on military preparedness against nomadic incursions.',
      ],
    },
    quizQuestions: [
      {
        id: 'hist-q-6-5',
        type: 'multiple-choice',
        questionRu: 'Под каким годом в летописи впервые упоминается Москва?',
        questionEn: 'Under which year does Moscow first appear in historical chronicles?',
        options: ['1147 г.', '1097 г.', '1136 г.', '1242 г.'],
        correctAnswer: '1147 г.',
        explanationRu: 'Москва впервые упомянута в Ипатьевской летописи под 1147 годом во фразе Юрия Долгорукого: «Приди ко мне, брате, в Москов».',
        explanationEn: 'The first written chronicle record of Moscow dates to 1147 by Prince Yuri Dolgoruky.',
      },
      {
        id: 'hist-q-6-6',
        type: 'multiple-choice',
        questionRu: 'Кто в Новгородской боярской республике избирался вечем в качестве предводителя городского ополчения?',
        questionEn: 'Who in the Novgorod Republic was elected to command the urban town militia?',
        options: ['Тысяцкий', 'Посадник', 'Архиепископ', 'Тиун'],
        correctAnswer: 'Тысяцкий',
        explanationRu: 'Тысяцкий возглавлял новгородское ополчение («тысячу»), собирал налоги и защищал интересы купцов.',
        explanationEn: 'The Tysyatsky was the military leader of the town levy and guardian of commerce.',
      },
    ],
  },

  // =========================================================================
  // GRADE 6 - TOPIC 4: Борьба с захватчиками: Батыево нашествие и Александр Невский
  // =========================================================================
  {
    id: 'hist-6-mongols-nevsky',
    grade: 6,
    eraId: 'era-grade-6',
    order: 4,
    titleRu: 'Русь между Востоком и Западом: Батыево нашествие и подвиги Александра Невского',
    titleEn: 'Rus Between East and West: Mongol Invasions & Alexander Nevsky',
    subtitleRu: 'Битва на Калке (1223 г.), разорение Рязани, Козельска и Киева, Невская битва (1240 г.) и Ледовое побоище (1242 г.)',
    subtitleEn: 'Battle of Kalka (1223), Mongol Conquest, Battle of the Neva (1240), and Battle on the Ice (1242)',
    periodRu: '1223 — 1263 гг.',
    periodEn: '1223 — 1263 AD',
    icon: '🛡️',
    overviewRu:
      'В XIII веке Русь столкнулась с величайшей угрозой в своей истории. С востока обрушились непобедимые тумены Монгольской империи под предводительством хана Батыя, а с запада на русские рубежи наступали шведские рыцари и немецкие крестоносцы Ливонского ордена. Героическое сопротивление городов (Рязань, Козельск), мужество защитников и полководческий гений святого благоверного князя Александра Невского позволили отстоять северо-западные рубежи и православную веру, начав долгий путь преодоления ордынского ига.',
    overviewEn:
      'In the 13th century Rus was caught in a two-front geopolitical vice: Batu Khan’s devastating Mongol conquest from the East and crusader crusades from the Catholic West. Alexander Nevsky repelled Swedish and Teutonic invaders while navigating submissive diplomacy with the Golden Horde to safeguard national cultural survival.',
    sections: [
      {
        headingRu: '1. Битва на реке Калке (1223 г.) и первое столкновение с монголами',
        headingEn: '1. Battle of the Kalka River (1223)',
        contentRu:
          '31 мая 1223 года произошло первое трагическое столкновение русских дружин с передовыми туменами Чингисхана (полководцы Джебэ и Субэдей). Половецкий хан Котян обратился к русским князьям: «Нашу землю сегодня отняли, а вашу завтра возьмут». Однако из-за отсутствия единого командования и распрей между князьями (Мстислав Удатный, Мстислав Черниговский, Мстислав Киевский) русско-половецкое войско было наголову разбито на реке Калке.',
        contentEn:
          'The first encounter with Mongol forces at the Kalka in 1223 resulted in catastrophe due to rivalry among the three rival Mstislav princes.',
      },
      {
        headingRu: '2. Нашествие хана Батыя на Русь (1237–1240 гг.)',
        headingEn: '2. Batu Khan’s Invasion of Rus (1237–1240)',
        contentRu:
          'Зимой 1237 года внук Чингисхана хан Батый повёл огромное монгольское войско на Русь:\n• Декабрь 1237 г. — штурм и сожжение Рязани после 6-дневной осады. Подвиг рязанского боярина Евпатия Коловрата, который с малой дружиной догнал врага и нанёс ему жестокий урон;\n• Зима 1238 г. — взятие Коломны, Москвы, Владимира, Суздаля. 4 марта 1238 г. — гибель великого князя Юрия Всеволодовича в битве на реке Сити;\n• Март — май 1238 г. — 7-недельная героическая оборона маленького городка Козельска («Злой город»), в боях за который монголы потеряли тысячи воинов;\n• Осень 1240 г. — осада и падение Киева под предводительством воеводы Димитрия.',
        contentEn:
          'Batu stormed Ryazan (Dec 1237, heroic counter-attack of Evpaty Kolovrat), devastated Vladimir and Suzdal, was delayed for 7 weeks by the "Evil City" Kozelsk in 1238, and sacked Kyiv in late 1240.',
      },
      {
        headingRu: '3. Установление золотоордынского ига',
        headingEn: '3. Golden Horde Vassalage',
        contentRu:
          'Русь оказалась под тяжёлым игом Золотой Орды (1240–1480 гг.):\n• Политическая зависимость: русские князья обязаны были ездить в Сарай (столицу Орды) к хану за ярлыком — ханской грамотой на великое княжение;\n• Экономическая зависимость: регулярная выплата дани («ордынский выход»); сбор дани первоначально вели ханские наместники — баскаки, а население было переписано монгольскими численниками («запись в число» 1257 г.);\n• Военная зависимость: обязанность поставлять русских воинов в монгольские походы.',
        contentEn:
          'Horde suzerainty comprised the yarlyk (investiture patent granted by the Khan in Sarai), the orda tribute (vykhod) enforced by baskaks, and forced military conscription.',
      },
      {
        headingRu: '4. Отражение агрессии с Запада: Александр Невский',
        headingEn: '4. Alexander Nevsky: Neva & Ice Battles',
        contentRu:
          'Пока восточные земли лежали в руинах, Новгород и Псков столкнулись со шведской и немецкой экспансией:\n• 15 июля 1240 г. — Невская битва. 19-летний новгородский князь Александр Ярославич внезапной атакой разгромил шведский десант ярла Биргера в устье реки Ижоры на Неве («Не в силе Бог, а в правде!»), за что получил прозвание Невский;\n• 5 апреля 1242 г. — Ледовое побоище на льду Чудского озера. Александр окружил и разгромил рыцарей Ливонского ордена, применивших боевое построение «свинья» (клин), сокрушив крестоносную экспансию на восток.',
        contentEn:
          'Alexander Nevsky routed Swedish invaders on the Neva on July 15, 1240, and trapped the Teutonic Knights’ heavy armored wedge on the thawing ice of Lake Peipus on April 5, 1242.',
      },
    ],
    keyFigures: [
      {
        id: 'fig-alexander-nevsky',
        nameRu: 'Святой благоверный князь Александр Невский',
        nameEn: 'Alexander Nevsky',
        dates: '1221 — 1263 гг.',
        roleRu: 'Князь Новгородский, великий князь Владимирский, полководец и дипломат',
        roleEn: 'Prince of Novgorod & Grand Prince of Vladimir',
        avatar: '⚔️',
        grade: 6,
        keyActionsRu: [
          'Разгромил шведов на Неве (1240 г.) и ливонских рыцарей на Чудском озере (1242 г.).',
          'Провёл тонкую дипломатическую линию с Золотой Ордой, предотвратив карательные набеги монголов на разорённую Русь.',
        ],
        legacyRu: 'Святой покровитель русского воинства и защитник православия; имя России в общенародном голосовании.',
        legacyEn: 'Canonized defender of Russian Orthodoxy and military patron.',
      },
      {
        id: 'fig-batu-khan',
        nameRu: 'Хан Батый (Бату)',
        nameEn: 'Batu Khan',
        dates: 'ок. 1209 — 1255 гг.',
        roleRu: 'Внук Чингисхана, правитель Улуса Джучи (Золотой Орды)',
        roleEn: 'Mongol ruler, founder of the Golden Horde',
        avatar: '🐎',
        grade: 6,
        keyActionsRu: [
          'Возглавил общемонгольский Западный поход 1236–1242 годов, покорив Волжскую Булгарию, Русь и вторгшись в Польшу и Венгрию.',
          'Основал столицу Золотой Орды — Сарай-Бату в низовьях Волги.',
        ],
        legacyRu: 'Установил двухвековое ордынское иго над русскими княжествами.',
        legacyEn: 'Established over two centuries of Mongol dominance over Russian lands.',
      },
    ],
    timelineEvents: [
      {
        year: 1223,
        dateRu: '1223 г.',
        dateEn: '1223 AD',
        titleRu: 'Битва на реке Калке',
        titleEn: 'Battle of the Kalka River',
        descriptionRu: 'Первое сражение русских князей и половцев против монгольских полководцев Джебэ и Субэдея.',
        significanceRu: 'Первое предупреждение об опасности с Востока, завершившееся поражением Руси.',
        tags: ['Калка', 'Монголы', 'Битва'],
      },
      {
        year: 1237,
        dateRu: '1237–1240 гг.',
        dateEn: '1237–1240 AD',
        titleRu: 'Батыево нашествие на Русь',
        titleEn: 'Mongol Conquest of Rus',
        descriptionRu: 'Разорение Рязани, Владимира, Козельска, Чернигова и Киева.',
        significanceRu: 'Установление золотоордынского ига, затормозившего экономическое развитие страны.',
        tags: ['Батый', 'Нашествие', 'Иго'],
      },
      {
        year: 1240,
        dateRu: '15 июля 1240 г.',
        dateEn: 'July 15, 1240 AD',
        titleRu: 'Невская битва',
        titleEn: 'Battle of the Neva',
        descriptionRu: 'Разгром шведского войска дружиной 19-летнего князя Александра Ярославича.',
        significanceRu: 'Предотвращение захвата шведами устья Невы и Ладоги.',
        tags: ['Александр Невский', 'Шведы', 'Нева'],
      },
      {
        year: 1242,
        dateRu: '5 апреля 1242 г.',
        dateEn: 'April 5, 1242 AD',
        titleRu: 'Ледовое побоище (Битва на Чудском озере)',
        titleEn: 'Battle on the Ice (Lake Peipus)',
        descriptionRu: 'Разгром немецких рыцарей-крестоносцев Ливонского ордена войском Александра Невского.',
        significanceRu: 'Остановка экспансии рыцарских орденов на русские земли.',
        tags: ['Ледовое побоище', 'Чудское озеро', 'Победа'],
      },
    ],
    terms: [
      {
        termRu: 'Ярлык',
        termEn: 'Yarlyk',
        definitionRu: 'Ханская грамота, дававшая русским князьям право на княжение, а православной церкви — освобождение от налогов.',
        definitionEn: 'A written patent from the Golden Horde Khan investing a prince with authority or granting tax immunity to the church.',
        historicalContextRu: 'Борьба за ярлык на великое княжение Владимирское стала главным нервом межкняжеской политики XIV века.',
        historicalContextEn: 'Competition for the Vladimir grand princely yarlyk propelled the rise of Moscow.',
      },
      {
        termRu: 'Ордынский выход',
        termEn: 'Orda Tribute (Vykhod)',
        definitionRu: 'Регулярная ежегодная дань, выплачивавшаяся русскими землями ханам Золотой Орды серебром и натурой.',
        definitionEn: 'The annual collective tribute extracted by the Mongol Khanate from Russian principalities.',
        historicalContextRu: 'Сбором выхода первоначально ведали баскаки, а с XIV века право сбора перешло к московским князьям (Иван Калита).',
        historicalContextEn: 'Later outsourced directly to the Grand Prince of Moscow.',
      },
      {
        termRu: 'Баскак',
        termEn: 'Baskak',
        definitionRu: 'Представитель ордынского хана на Руси, ведавший сбором дани и контролем над князьями.',
        definitionEn: 'Mongol administrative official or viceroy stationed in Rus to enforce tribute collection.',
        historicalContextRu: 'После антиордынского восстания в Твери 1327 года система баскачества была ликвидирована.',
        historicalContextEn: 'Abolished after the massive Tver anti-tax rebellion of 1327.',
      },
    ],
    examFocusRu: {
      examTarget: 'ОГЭ / ЕГЭ (Задания 1-5, 13, 14, 17, 18, 19)',
      coreTakeaways: [
        'Знать точные даты: битва на Калке (1223 г.), нашествие Батыя (1237–1240 гг.), Невская битва (1240 г.), Ледовое побоище (1242 г.).',
        'Уметь показывать на карте поход Батыя: Рязань → Коломна → Москва → Владимир → битва на реке Сити → Торжок → «разворот» на юг от Игнач-креста → Козельск.',
        'Понимать дуализм политики Александра Невского: жёсткий военный отпор Западу и гибкая дипломатия с Ордой.',
      ],
      essayPrompts: [
        'Почему Александр Невский выбрал союз с Ордой и беспощадную войну с крестоносцами Запада?',
        'Каковы были последствия монгольского завоевания для исторической судьбы Руси?',
      ],
    },
    examFocusEn: {
      examTarget: 'Grade 6 Russian History Exam Review',
      coreTakeaways: [
        'Master the dates 1240 (Neva) and 1242 (Ice Battle).',
        'Analyze the geopolitical implications of the Golden Horde tributary system.',
      ],
      essayPrompts: [
        'Examine the historical debates surrounding Alexander Nevsky’s eastern diplomatic pragmatism.',
      ],
    },
    quizQuestions: [
      {
        id: 'hist-q-6-7',
        type: 'multiple-choice',
        questionRu: 'В каком году дружина князя Александра Ярославича разбила рыцарей Ливонского ордена на льду Чудского озера?',
        questionEn: 'In which year did Alexander Nevsky defeat the Teutonic Knights on the ice of Lake Peipus?',
        options: ['1242 г.', '1240 г.', '1223 г.', '1238 г.'],
        correctAnswer: '1242 г.',
        explanationRu: 'Ледовое побоище состоялось 5 апреля 1242 года на Чудском озере.',
        explanationEn: 'The Battle on the Ice took place on April 5, 1242.',
      },
      {
        id: 'hist-q-6-8',
        type: 'multiple-choice',
        questionRu: 'Как называлась ханская грамота, дававшая князю право на княжение на Руси?',
        questionEn: 'What was the Mongol imperial investiture decree authorizing a prince to rule called?',
        options: ['Ярлык', 'Выход', 'Баскак', 'Урок'],
        correctAnswer: 'Ярлык',
        explanationRu: 'Ярлык — ханский указ и грамота на княжение, выдаваемая ханами Золотой Орды.',
        explanationEn: 'Yarlyk was the official diploma of authority granted by the Khan.',
      },
    ],
  },

  // =========================================================================
  // GRADE 6 - TOPIC 5: Возвышение Москвы, Куликовская битва и свержение ига
  // =========================================================================
  {
    id: 'hist-6-moscow-kulikovo-ugra',
    grade: 6,
    eraId: 'era-grade-6',
    order: 5,
    titleRu: 'Объединение русских земель вокруг Москвы: Куликовская битва (1380 г.) и свержение ига (1480 г.)',
    titleEn: 'Rise of Moscow: Kulikovo Battle (1380) & Liberation on the Ugra (1480)',
    subtitleRu: 'От Ивана Калиты и Сергия Радонежского до победы Дмитрия Донского и рождения единого государства при Иване III',
    subtitleEn: 'From Ivan Kalita and St. Sergius to Dmitry Donskoy’s victory and Ivan III’s national reunification',
    periodRu: '1325 — 1505 гг.',
    periodEn: '1325 — 1505 AD',
    icon: '🏰',
    overviewRu:
      'В XIV–XV веках Москва из скромного удела превратилась в сердце объединения русских земель и центр освободительной борьбы. Иван Калита обеспечил мирную передышку и перенёс митрополию в Москву. Преподобный Сергий Радонежский благословил князя Дмитрия Донского на Куликовскую битву (8 сентября 1380 г.), где русские полки впервые нанесли сокрушительное поражение главным силам Орды. А при великом князе Иване III Великом произошло окончательное свержение ордынского ига (Стояние на реке Угре 1480 г.), присоединение Новгорода и Твери и принятие первого общерусского Судебника 1497 года с Юрьевым днём.',
    overviewEn:
      'Between 1325 and 1505 Moscow led Russian national consolidation. Ivan Kalita secured peace and moved the Metropolitan seat to Moscow. St. Sergius of Radonezh blessed Dmitry Donskoy for the historic victory over Mamai at Kulikovo (1380). Under Ivan III the Great, the Mongol Yoke was terminated at the Ugra (1480), Novgorod and Tver were absorbed, and the 1497 Sudebnik legal code established Yuri’s Day.',
    sections: [
      {
        headingRu: '1. Иван Калита и возвышение Москвы (1325–1340 гг.)',
        headingEn: '1. Ivan Kalita & the Ascent of Moscow',
        contentRu:
          'Причины возвышения Москвы:\n• Выгодное географическое положение: на перекрёстке торговых путей, в центре русских земель, защищённых от набегов лесами и соседними княжествами;\n• Гибкая и дальновидная политика московских князей;\n• Поддержка Русской православной церкви: переезд митрополита Петра в Москву (1326 г.), сделавший город духовной столицей Руси.\n\nВ 1327 году в Твери вспыхнуло антиордынское восстание против баскака Чолхана (Щелкана). Князь Иван I Данилович Калита («Денежный мешок») помог ордынцам подавить восстание, за что получил ярлык на великое княжение Владимирское и право сбора ордынского выхода со всех русских земель. Наступили «сорок лет тишины» без разорительных татарских набегов.',
        contentEn:
          'Ivan Kalita exploited the 1327 Tver uprising to secure the Vladimir yarlyk and tax-collection monopoly for Moscow. Metropolitan Peter established his seat in Moscow, making it the spiritual hub of Rus.',
      },
      {
        headingRu: '2. Куликовская битва (8 сентября 1380 г.) и Дмитрий Донской',
        headingEn: '2. Dmitry Donskoy & Battle of Kulikovo (1380)',
        contentRu:
          'К 1380 году фактический правитель Орды темник Мамай собрал колоссальное войско для подчинения непокорной Москвы. Московский князь Дмитрий Иванович объединил полки почти всех русских земель. Перед битвой Дмитрий посетил Троицкий монастырь, где преподобный Сергий Радонежский благословил войско и дал двух монахов-богатырей — Пересвета и Ослябю.\n\n8 сентября 1380 года на Куликовом поле (у впадения реки Непрядвы в Дон) сошлись две армии:\n• Битва началась с поединка богатырей: Александра Пересвета и татарского батыра Челубея (оба погибли);\n• Исход ожесточённого сражения решил внезапный удар Засадного полка (князь Владимир Серпуховской и воевода Дмитрий Боброк-Волынский) в тыл ордынцам.\nМамай бежал, а князь Дмитрий получил почётное прозвание Донской.',
        contentEn:
          'Blessed by St. Sergius of Radonezh, Dmitry gathered an all-Russian army at Kulikovo Field on September 8, 1380. A decisive ambush regiment flank strike led by Bobrok-Volynsky routed Mamai’s host.',
        highlightBoxRu: {
          title: 'Историк Лев Гумилёв о Куликовской битве',
          text: '«На Куликово поле пошли рати москвичей, владимирцев, суздальцев, костромичей... а вернулись полки единого русского народа».',
        },
      },
      {
        headingRu: '3. Иван III Великий и свержение ордынского ига (1480 г.)',
        headingEn: '3. Ivan III the Great & End of the Yoke (1480)',
        contentRu:
          'При великом князе Иване III Васильевиче (1462–1505 гг.) завершилось объединение русских земель вокруг Москвы:\n• 1478 г. — окончательное присоединение Новгородской республики (вечевой колокол снят и увезён в Москву);\n• 1485 г. — присоединение Тверского княжества. Иван III стал именоваться «Государь всея Руси».\n• Октябрь — ноябрь 1480 г. — Стояние на реке Угре. Хан Большой Орды Ахмат двинул войско на Москву, но русская армия заблокировала броды через Угру с помощью артиллерии («тюфяков»). Не решившись на бой, Ахмат отступил. Ордынское иго, длившееся 240 лет, пало навсегда!\n• 1497 г. — принятие первого общерусского Судебника Ивана III: гербом государства стал византийский Двуглавый орёл (после брака Ивана III с племянницей последнего императора Византии Софьей Палеолог); введён Юрьев день (26 ноября) и плата за «пожилое» — первый шаг к закрепощению крестьян.',
        contentEn:
          'Ivan III annexed Novgorod (1478) and Tver (1485). The Great Stand on the Ugra River in 1480 ended 240 years of Mongol tributary subjection without a pitched clash. The 1497 Sudebnik adopted the double-headed eagle and instituted Yuri’s Day.',
      },
    ],
    keyFigures: [
      {
        id: 'fig-dmitry-donskoy',
        nameRu: 'Святой благоверный князь Дмитрий Иванович Донской',
        nameEn: 'Dmitry Donskoy',
        dates: '1350 — 1389 гг.',
        roleRu: 'Великий князь Московский и Владимирский, победитель на Куликовом поле',
        roleEn: 'Grand Prince of Moscow, hero of Kulikovo',
        avatar: '🛡️',
        grade: 6,
        keyActionsRu: [
          'Построил первый белокаменный Московский Кремль (1367 г.), выдержавший осады литовского князя Ольгерда.',
          'Разгромил полчища Мамая на Куликовом поле (1380 г.).',
          'В завещании передал великое княжение сыну Василию I без ханского ярлыка, как вотчину Москвы.',
        ],
        legacyRu: 'Доказал, что Русь способна победить Орду, сделав объединение вокруг Москвы необратимым.',
        legacyEn: 'Broke the myth of Mongol military invincibility.',
      },
      {
        id: 'fig-sergius-radonezh',
        nameRu: 'Преподобный Сергий Радонежский',
        nameEn: 'St. Sergius of Radonezh',
        dates: '1314 — 1392 гг.',
        roleRu: 'Основатель Троице-Сергиевой лавры, игумен земли Русской',
        roleEn: 'Founder of Trinity-Sergius Lavra, spiritual patron of Rus',
        avatar: '🕊️',
        grade: 6,
        keyActionsRu: [
          'Основал Троице-Сергиев монастырь, ставший главным духовным центром Руси.',
          'Благословил Дмитрия Донского на Куликовскую битву, вдохновив народ на духовное и национальное единство.',
        ],
        legacyRu: 'Духовный собиратель русского народа в эпоху преодоления ига.',
        legacyEn: 'Spiritual patron of Russian cultural and political renaissance.',
      },
      {
        id: 'fig-ivan-iii',
        nameRu: 'Иван III Васильевич Великий',
        nameEn: 'Ivan III the Great',
        dates: '1440 — 1505 гг.',
        roleRu: 'Государь всея Руси, создатель единого Российского государства',
        roleEn: 'Sovereign of All Rus, unifier of Russian lands',
        avatar: '👑',
        grade: 6,
        keyActionsRu: [
          'Сверг ордынское иго в Стоянии на реке Угре (1480 г.).',
          'Присоединил Новгород (1478 г.), Тверь (1485 г.), Ярославль.',
          'Построил современный кирпичный Московский Кремль и Успенский собор (Аристотель Фиораванти).',
          'Издал Судебник 1497 года и утвердил герб с двуглавым орлом.',
        ],
        legacyRu: 'Основатель единого независимого Русского государства.',
        legacyEn: 'The true architectural founder of the unified Russian state.',
      },
    ],
    timelineEvents: [
      {
        year: 1327,
        dateRu: '1327 г.',
        dateEn: '1327 AD',
        titleRu: 'Антиордынское восстание в Твери',
        titleEn: 'Tver Anti-Tax Rebellion',
        descriptionRu: 'Тверичи восстали против ханского баскака Чолхана. Иван Калита возглавил подавление.',
        significanceRu: 'Переход права сбора ордынского выхода и лидерства к Москве.',
        tags: ['Тверь', 'Калита', 'Восстание'],
      },
      {
        year: 1380,
        dateRu: '8 сентября 1380 г.',
        dateEn: 'September 8, 1380 AD',
        titleRu: 'Куликовская битва (Мамаево побоище)',
        titleEn: 'Battle of Kulikovo Field',
        descriptionRu: 'Разгром ордынского войска Мамая полками Дмитрия Донского на реке Непрядве.',
        significanceRu: 'Первая великая победа над главными силами Орды и национальный перелом.',
        tags: ['Куликово поле', 'Донской', 'Мамай', 'Победа'],
      },
      {
        year: 1480,
        dateRu: 'Октябрь — ноябрь 1480 г.',
        dateEn: 'Autumn 1480 AD',
        titleRu: 'Стояние на реке Угре',
        titleEn: 'Great Stand on the Ugra River',
        descriptionRu: 'Противостояние войск Ивана III и хана Большой Орды Ахмата на реке Угре («Пояс Богородицы»).',
        significanceRu: 'Окончательное свержение 240-летнего ордынского ига над Русью.',
        tags: ['Угра', 'Иван III', 'Свержение ига', 'Независимость'],
      },
      {
        year: 1497,
        dateRu: '1497 г.',
        dateEn: '1497 AD',
        titleRu: 'Принятие Судебника Ивана III',
        titleEn: 'Promulgation of Ivan III’s Sudebnik',
        descriptionRu: 'Первый единый свод законов объединённого Российского государства.',
        significanceRu: 'Введение Юрьева дня (ограничение перехода крестьян) и налога пожилое.',
        tags: ['Судебник', 'Юрьев день', 'Закон'],
      },
    ],
    terms: [
      {
        termRu: 'Юрьев день',
        termEn: 'Yuri’s Day (St. George’s Day)',
        definitionRu: 'Установленный Судебником 1497 года единый срок перехода крестьян от одного землевладельца к другому: за неделю до осеннего Юрьева дня (26 ноября) и неделю после него.',
        definitionEn: 'A two-week annual window around St. George’s Day (Nov 26) when bonded peasants could legally change landlords upon paying compensation.',
        historicalContextRu: 'Обязательным условием ухода была уплата компенсации господину — пожилого.',
        historicalContextEn: 'Required paying exit compensation called pozhiloye.',
        examTipRu: 'Ключевой термин ЕГЭ по закрепощению крестьян: Судебник 1497 г. → Судебник 1550 г. → Заповедные лета (1581 г.) → Урочные лета (1597 г.) → Соборное уложение (1649 г.).',
      },
      {
        termRu: 'Пожилое',
        termEn: 'Pozhiloye',
        definitionRu: 'Денежная плата, которую крестьянин отдавал землевладельцу при уходе в Юрьев день за пользование двором и постройками.',
        definitionEn: 'Compensation fee paid by a departing peasant to a landlord under the 1497 Law Code.',
        historicalContextRu: 'В лесной зоне составляло 1 рубль, в степной — полтину.',
        historicalContextEn: 'Averaged one ruble in forested lands, a substantial financial barrier for poorer families.',
      },
      {
        termRu: 'Местничество',
        termEn: 'Mestnichestvo',
        definitionRu: 'Порядок назначения на военные и государственные должности в зависимости от знатности рода и заслуг предков, а не личных способностей.',
        definitionEn: 'System of state and military appointment based strictly on genealogical pedigree and family precedence.',
        historicalContextRu: 'Существовало на Руси до его торжественной отмены на Земском соборе 1682 года.',
        historicalContextEn: 'Hampered military meritocracy until formally abolished in 1682.',
      },
      {
        termRu: 'Кормление',
        termEn: 'Kormlenie (Feeding System)',
        definitionRu: 'Система содержания наместников и волостелей за счёт сборов с местного населения вместо государственного жалования.',
        definitionEn: 'System where provincial governors were supported by levies extracted directly from the local populace.',
        historicalContextRu: 'Отменено в ходе земской реформы Избранной рады Ивана Грозного в 1555–1556 годах.',
        historicalContextEn: 'Abolished during Ivan IV’s 1556 reforms in favor of elected municipal elders.',
      },
    ],
    examFocusRu: {
      examTarget: 'ОГЭ / ЕГЭ (Задания 1, 3, 4, 18, 19, 20)',
      coreTakeaways: [
        'Понимать этапы объединения Руси: Иван Калита → Дмитрий Донской (Куликово 1380) → Иван III (Новгород 1478, Угра 1480, Судебник 1497).',
        'Знать архитектуру Московского Кремля при Иване III: Успенский собор (Аристотель Фиораванти), Грановитая палата, Благовещенский собор.',
        'Безошибочно определять термины: Юрьев день, пожилое, кормление, местничество, вотчина, поместье.',
      ],
      essayPrompts: [
        'Почему именно Москва, а не Тверь или Великий Новгород, стала центром объединения русских земель?',
        'Каково историческое значение Стояния на реке Угре 1480 года для суверенитета России?',
      ],
    },
    examFocusEn: {
      examTarget: 'Grade 6 Russian History State Exam syllabus',
      coreTakeaways: [
        'Analyze causes of Moscow’s rise to supremacy.',
        'Understand legal significance of the 1497 Sudebnik and Yuri’s Day.',
      ],
      essayPrompts: [
        'Assess the role of the Russian Orthodox Church in legitimizing Muscovite central authority.',
      ],
    },
    quizQuestions: [
      {
        id: 'hist-q-6-9',
        type: 'multiple-choice',
        questionRu: 'В каком году произошла историческая битва на Куликовом поле?',
        questionEn: 'In which year did the historic Battle of Kulikovo take place?',
        options: ['1380 г.', '1242 г.', '1480 г.', '1497 г.'],
        correctAnswer: '1380 г.',
        explanationRu: 'Куликовская битва состоялась 8 сентября 1380 года на реке Дон.',
        explanationEn: 'The Battle of Kulikovo was fought on September 8, 1380.',
      },
      {
        id: 'hist-q-6-10',
        type: 'multiple-choice',
        questionRu: 'Какое событие 1480 года положило конец 240-летнему ордынскому игу над Русью?',
        questionEn: 'Which event in 1480 marked the definitive end of the 240-year Mongol Yoke over Rus?',
        options: ['Стояние на реке Угре', 'Ледовое побоище', 'Битва на реке Сити', 'Осада Казани'],
        correctAnswer: 'Стояние на реке Угре',
        explanationRu: 'Стояние на реке Угре осенью 1480 года привело к отступлению хана Ахмата и падению ордынского ига.',
        explanationEn: 'The Great Stand on the Ugra River in 1480 terminated the Mongol Yoke without a pitched slaughter.',
      },
    ],
  },
];
