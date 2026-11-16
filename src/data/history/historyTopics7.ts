import { HistoryTopic } from '../../types';

export const TOPICS_GRADE_7: HistoryTopic[] = [
  // =========================================================================
  // GRADE 7 - TOPIC 1: Эпоха Ивана IV Грозного: реформы и опричнина
  // =========================================================================
  {
    id: 'hist-7-ivan-the-terrible',
    grade: 7,
    eraId: 'era-grade-7',
    order: 1,
    titleRu: 'Эпоха Ивана IV Грозного: реформы Избранной рады, взятие Казани и Опричнина',
    titleEn: 'Ivan the Terrible: Chosen Council Reforms, Kazan Conquest & Oprichnina',
    subtitleRu: 'Первый русский царь (1547 г.), Земский собор, стрелецкое войско, Ливонская война и террор опричнины',
    subtitleEn: 'Coronation as Tsar (1547), first Zemsky Sobor, Streltsy army, Livonian War, and the terror of Oprichnina',
    periodRu: '1533 — 1584 гг.',
    periodEn: '1533 — 1584 AD',
    icon: '👑',
    overviewRu:
      'Правление Ивана IV Грозного стало переломным в истории Московского царства. В 1547 году он первым на Руси торжественно венчался на царский титул. В первую половину правления вместе с правительством «Избранной рады» царь провёл масштабные реформы: созвал первый Земский собор, создал стрелецкое войско и приказы, издал Судебник 1550 года, присоединил Казанское (1552 г.) и Астраханское (1556 г.) ханства, открыв путь в Сибирь (поход Ермака). Однако во второй половине правления царь разорвал с соратниками, начал изнурительную Ливонскую войну (1558–1583 гг.) и установил режим опричнины (1565–1572 гг.), приведший страну к тяжелейшему кризису.',
    overviewEn:
      'Ivan IV crowned himself the first Tsar of All Rus in 1547. Partnering with the Chosen Council, he convoked the first Zemsky Sobor, instituted the Streltsy infantry and departmental prikazy, and annexed Kazan (1552) and Astrakhan (1556). In 1565 he split the country into the Oprichnina terror and Zemshchina, leading to economic devastation and setting the stage for the Time of Troubles.',
    sections: [
      {
        headingRu: '1. Венчание на царство (1547 г.) и реформы Избранной рады',
        headingEn: '1. Coronation as Tsar (1547) & Chosen Council Reforms',
        contentRu:
          '16 января 1547 года в Успенском соборе Московского Кремля 16-летний великий князь Иван IV венчался на царство. Царский титул (от латинского «цезарь») ставил русского монарха вровень с императором Священной Римской империи и выше королей Польши или Швеции.\n\nВ 1549 году вокруг молодого царя сложился круг реформаторов — Избранная рада (дворянин А. Адашев, придворный священник Сильвестр, князь А. Курбский, митрополит Макарий, дьяк И. Висковатый):\n• 1549 г. — созыв первого в истории Земского собора («Собора примирения») — сословно-представительного органа;\n• 1550 г. — принятие Судебника Ивана IV: увеличение платы за пожилое, ограничение власти наместников;\n• Создание приказов — отраслевых органов центрального управления (Посольский, Поместный, Разрядный, Челобитный);\n• Создание стрелецкого войска (1550 г.) — постоянной пехоты, вооружённой огнестрельным оружием (пищалями) и бердышами;\n• Церковный Стоглавый собор (1551 г.) — унификация обрядов и святых;\n• Земская реформа (1555–1556 гг.) — отмена кормлений и введение выборных земских и губных старост.',
        contentEn:
          'Ivan’s 1547 coronation was followed by the Chosen Council’s transformations: convocation of the Zemsky Sobor (1549), Sudebnik of 1550, establishment of government departments (prikazy), creation of the standing Streltsy musketeers, and abolition of the kormlenie governorships.',
      },
      {
        headingRu: '2. Внешняя политика: Казань, Астрахань и поход Ермака в Сибирь',
        headingEn: '2. Eastern Conquests: Kazan, Astrakhan & Siberia',
        contentRu:
          'Восточное направление увенчалось выдающимися триумфами:\n• Октябрь 1552 г. — взятие штурмом Казани после подкопа крепостных стен инженером Иваном Выродковым. Казанское ханство ликвидировано. В честь взятия Казани на Красной площади в Москве воздвигнут шедевр мировой архитектуры — Покровский собор (Храм Василия Блаженного, зодчие Барма и Постник);\n• 1556 г. — бескровное присоединение Астраханского ханства: вся Волга от истока до Каспийского моря стала русской рекой;\n• 1581–1585 гг. — казачий поход атамана Ермака Тимофеевича против сибирского хана Кучума: разгром столицы Кашлык и начало вхождения необъятной Сибири в состав России.',
        contentEn:
          'Kazan fell in 1552 (celebrated by Saint Basil’s Cathedral on Red Square), followed by Astrakhan in 1556, securing the entire Volga basin. In 1581 Cossack Ataman Yermak launched the expedition that initiated the conquest and settlement of Siberia.',
      },
      {
        headingRu: '3. Ливонская война (1558–1583 гг.) и Опричнина (1565–1572 гг.)',
        headingEn: '3. Livonian War (1558–1583) & The Oprichnina',
        contentRu:
          'Стремясь пробиться к Балтийскому морю, Иван IV начал Ливонскую войну (1558–1583 гг.). На первом этапе Ливонский орден был разгромлен, но против России объединились Речь Посполитая (король Стефан Баторий) и Швеция. Война затянулась на 25 лет и окончилась поражением (Ям-Запольский мир и Плюсское перемирие), лишившим Россию выхода к Балтике.\n\nВ 1565 году царь разделил государство на две части:\n• Земщина — территория, управляемая Боярской думой;\n• Опричнина (от слова «опричь» — кроме) — личный удел царя с собственным войском (опричниками во главе с Малютой Скуратовым), наделёнными символами преданности (собачья голова и метла у седла).\nОпричный террор (казнь митрополита Филиппа Колычева, разгром Новгорода в 1570 г.) подорвал экономику страны, вызвал запустение земель («поруха 1570–1580-х годов») и введение Заповедных лет (1581 г. — временный запрет перехода в Юрьев день).',
        contentEn:
          'The 25-year Livonian War ended in defeat without Baltic access. Domestically, Ivan instituted the Oprichnina (1565–1572), executing opponents like Metropolitan Philip and sacking Novgorod in 1570, provoking economic collapse that necessitated the first Forbidden Years (1581).',
      },
    ],
    keyFigures: [
      {
        id: 'fig-ivan-iv',
        nameRu: 'Иван IV Васильевич Грозный',
        nameEn: 'Ivan IV the Terrible',
        dates: '1530 — 1584 гг.',
        roleRu: 'Первый царь всея Руси, реформатор и самодержец',
        roleEn: 'First Tsar of Russia',
        avatar: '👑',
        grade: 7,
        keyActionsRu: [
          'Венчался на царство в 1547 году.',
          'Провёл реформы Избранной рады (Судебник 1550, стрельцы, приказы, Земский собор).',
          'Присоединил Казанское, Астраханское и Сибирское ханства.',
          'Ввёл опричнину (1565–1572 гг.), приведшую к хозяйственному разорению страны.',
        ],
        legacyRu: 'Сложнейшая и противоречивая фигура: создатель мощного централизованного государства и деспот, подготовивший Смутное время.',
        legacyEn: 'A polarizing monarch who vastly expanded the state while inflicting deep societal trauma.',
      },
      {
        id: 'fig-yermak',
        nameRu: 'Ермак Тимофеевич',
        nameEn: 'Yermak Timofeyevich',
        dates: 'ок. 1532 — 1585 гг.',
        roleRu: 'Казачий атаман, первопроходец и покоритель Сибири',
        roleEn: 'Cossack ataman, explorer of Siberia',
        avatar: '🚣',
        grade: 7,
        keyActionsRu: [
          'На средства купцов Строгановых снарядил поход казаков за Уральский хребет (1581 г.).',
          'Разбил войско хана Кучума на реке Иртыш и занял его столицу Кашлык (Искер).',
        ],
        legacyRu: 'Легендарный народный герой, открывший для России богатства Сибири.',
        legacyEn: 'Folk hero whose expedition incorporated Siberia into the Russian realm.',
      },
    ],
    timelineEvents: [
      {
        year: 1547,
        dateRu: '16 января 1547 г.',
        dateEn: 'January 16, 1547 AD',
        titleRu: 'Венчание Ивана IV на царство',
        titleEn: 'Coronation of Ivan IV as Tsar',
        descriptionRu: 'Принятие титула «царь» в Успенском соборе Московского Кремля.',
        significanceRu: 'Повышение международного статуса России и укрепление авторитета монарха.',
        tags: ['Царь', 'Коронация', 'Иван Грозный'],
      },
      {
        year: 1549,
        dateRu: '1549 г.',
        dateEn: '1549 AD',
        titleRu: 'Созыв первого Земского собора',
        titleEn: 'First Zemsky Sobor',
        descriptionRu: 'Первый сословно-представительный орган власти в России («Собор примирения»).',
        significanceRu: 'Начало эпохи сословно-представительной монархии в России.',
        tags: ['Земский собор', 'Реформа', 'Парламент'],
      },
      {
        year: 1552,
        dateRu: '2 октября 1552 г.',
        dateEn: 'October 2, 1552 AD',
        titleRu: 'Взятие Казани русскими войсками',
        titleEn: 'Capture of Kazan',
        descriptionRu: 'Штурм и ликвидация Казанского ханства войсками Ивана IV.',
        significanceRu: 'Обеспечение безопасности восточных рубежей и присоединение Поволжья.',
        tags: ['Казань', 'Поволжье', 'Победа'],
      },
      {
        year: 1565,
        dateRu: '1565–1572 гг.',
        dateEn: '1565–1572 AD',
        titleRu: 'Опричнина Ивана Грозного',
        titleEn: 'The Oprichnina Terror',
        descriptionRu: 'Раздел государства на опричнину и земщину, массовые репрессии и террор.',
        significanceRu: 'Уничтожение боярской оппозиции ценой тяжелейшего хозяйственного разорения страны.',
        tags: ['Опричнина', 'Малюта Скуратов', 'Кризис'],
      },
      {
        year: 1581,
        dateRu: '1581 г.',
        dateEn: '1581 AD',
        titleRu: 'Введение «Заповедных лет»',
        titleEn: 'Decree of Forbidden Years',
        descriptionRu: 'Царский указ, временно запрещавший крестьянам переход в Юрьев день.',
        significanceRu: 'Крупнейший шаг на пути к полному закрепощению крестьян.',
        tags: ['Крепостное право', 'Заповедные лета', 'Юрьев день'],
      },
    ],
    terms: [
      {
        termRu: 'Земский собор',
        termEn: 'Zemsky Sobor',
        definitionRu: 'Высший сословно-представительный орган в России с середины XVI до конца XVII века, включавший Боярскую думу, Освященный собор (церковь) и выборных от дворянства и посадов.',
        definitionEn: 'The estate-representative assembly of the Russian Tsardom from 1549 to the late 17th century.',
        historicalContextRu: 'Решал ключевые вопросы войны, налогов и избрания новых царей (1598, 1613 гг.).',
        historicalContextEn: 'Elected tsars Boris Godunov (1598) and Michael Romanov (1613).',
        examTipRu: 'Для ЕГЭ: сословно-представительная монархия в России началась с созыва собора 1549 года.',
      },
      {
        termRu: 'Приказы',
        termEn: 'Prikazy',
        definitionRu: 'Органы центрального государственного отраслевого управления в Русском государстве XVI–XVII веков (Посольский, Разрядный, Поместный, Стрелецкий).',
        definitionEn: 'Central bureaucratic administrative ministries in the Muscovite Tsardom headed by duma dyaks.',
        historicalContextRu: 'Возглавлялись боярами или дьяками, ведали специализированными отраслями или территориями (Казанский приказ).',
        historicalContextEn: 'Replaced in the 18th century by Peter the Great’s collegia.',
      },
      {
        termRu: 'Стрельцы',
        termEn: 'Streltsy',
        definitionRu: 'Постоянное пешее войско в России XVI–XVII веков, набранное из свободного посадского населения и вооружённое огнестрельным оружием (пищалями).',
        definitionEn: 'First regular firearm-equipped infantry units in the Russian state instituted by Ivan IV in 1550.',
        historicalContextRu: 'Служили пожизненно, получали денежное и хлебное жалование и жили в особых слободах, занимаясь торговлей и промыслами.',
        historicalContextEn: 'Lived in hereditary Moscow quarters with commercial trading privileges.',
      },
      {
        termRu: 'Заповедные лета',
        termEn: 'Forbidden Years',
        definitionRu: 'Годы, в которые царским указом временно запрещался переход крестьян от одного землевладельца к другому в осенний Юрьев день.',
        definitionEn: 'Years in which peasant departure on Yuri’s Day was temporarily banned, beginning in 1581.',
        historicalContextRu: 'Введены Иваном Грозным в 1581 году в условиях разрухи Ливонской войны и опричнины.',
        historicalContextEn: 'Instituted in 1581 to prevent agricultural abandonment following the Livonian War.',
      },
    ],
    examFocusRu: {
      examTarget: 'ОГЭ / ЕГЭ (Задания 1-5, 17, 18, 19, 20)',
      coreTakeaways: [
        'Различать два периода правления Ивана Грозного: реформы Избранной рады (до 1560 г.) и репрессивная политика опричнины (1565–1572 гг.).',
        'Знать памятники: Храм Василия Блаженного (Барма и Постник), крепости Казани, печатный станок Ивана Фёдорова («Апостол» 1564 г.).',
        'Чётко отличать термины: Заповедные лета (запрет перехода, 1581 г.) и Урочные лета (срок сыска беглых, 1597 г.).',
      ],
      essayPrompts: [
        'Каковы были главные цели и трагические последствия опричнины для социально-экономического развития России?',
        'Почему реформы Избранной рады оцениваются историками как прогрессивный этап становления сословно-представительной монархии?',
      ],
    },
    examFocusEn: {
      examTarget: 'Grade 7 History Curriculum',
      coreTakeaways: [
        'Master the date 1547 for royal coronation.',
        'Distinguish between Zemsky Sobor and Boyar Duma.',
      ],
      essayPrompts: [
        'Evaluate the long-term demographic effects of the Oprichnina and Livonian War.',
      ],
    },
    quizQuestions: [
      {
        id: 'hist-q-7-1',
        type: 'multiple-choice',
        questionRu: 'В каком году Иван IV Грозный впервые на Руси торжественно венчался на царство?',
        questionEn: 'In which year was Ivan IV formally crowned the first Tsar of Russia?',
        options: ['1547 г.', '1533 г.', '1552 г.', '1565 г.'],
        correctAnswer: '1547 г.',
        explanationRu: 'Венчание на царство состоялось 16 января 1547 года в Успенском соборе Московского Кремля.',
        explanationEn: 'The coronation took place on January 16, 1547.',
      },
      {
        id: 'hist-q-7-2',
        type: 'multiple-choice',
        questionRu: 'Какой храм на Красной площади в Москве был возведён в ознаменование взятия Казани в 1552 году?',
        questionEn: 'Which cathedral on Red Square was erected to commemorate the 1552 capture of Kazan?',
        options: [
          'Покровский собор (Храм Василия Блаженного)',
          'Успенский собор',
          'Архангельский собор',
          'Храм Христа Спасителя',
        ],
        correctAnswer: 'Покровский собор (Храм Василия Блаженного)',
        explanationRu: 'Покровский собор (Василия Блаженного) был построен зодчими Бармой и Постником по повелению Ивана IV в честь взятия Казани.',
        explanationEn: 'Saint Basil’s Cathedral was constructed on Red Square to celebrate the conquest of the Kazan Khanate.',
      },
    ],
  },

  // =========================================================================
  // GRADE 7 - TOPIC 2: Смутное время в России (конец XVI — начало XVII в.)
  // =========================================================================
  {
    id: 'hist-7-smuta-rebellion',
    grade: 7,
    eraId: 'era-grade-7',
    order: 2,
    titleRu: 'Смутное время в России: самозванцы, гражданская война и подвиг ополчения (1612 г.)',
    titleEn: 'The Time of Troubles: Impostors, Civil War & 1612 Liberation',
    subtitleRu: 'Борис Годунов, Лжедмитрий I, Семибоярщина, Второе народное ополчение Минина и Пожарского и избрание Романовых (1613 г.)',
    subtitleEn: 'Boris Godunov, False Dmitry, Seven Boyars, Minin & Pozharsky, and the 1613 election of Michael Romanov',
    periodRu: '1598 — 1613 гг.',
    periodEn: '1598 — 1613 AD',
    icon: '⚡',
    overviewRu:
      'На рубеже XVI и XVII веков Россия пережила глубочайший национально-государственный кризис — Смуту. Пресечение древней династии Рюриковичей со смертью бездетного царя Фёдора Иоанновича, страшный голод 1601–1603 годов, череда самозванцев (Лжедмитрий I и II), польско-шведская интервенция и предательство Семибоярщины поставили страну на грань гибели. Спасение государства пришло снизу — от народа: Второе народное ополчение Кузьмы Минина и Дмитрия Пожарского осенью 1612 года штурмом освободило Москву, а Земский собор 1613 года положил начало новой династии Романовых.',
    overviewEn:
      'The dynastic extinction of the Rurikids and the Great Famine of 1601–1603 plunged Russia into the Time of Troubles (Smuta). Poland and Sweden intervened, backing pretenders like False Dmitry. National salvation emerged through popular mobilization: Kuzma Minin and Prince Dmitry Pozharsky led the Second Volunteer Militia to liberate the Kremlin in November 1612, culminating in Michael Romanov’s election at the 1613 Zemsky Sobor.',
    sections: [
      {
        headingRu: '1. Причины Смуты и правление Бориса Годунова',
        headingEn: '1. Causes of the Smuta & Boris Godunov',
        contentRu:
          'Причины Смутного времени:\n• Династический кризис: пресечение правящей ветви Рюриковичей со смертью царя Фёдора Иоанновича (1598 г.) и загадочная гибель царевича Дмитрия в Угличе (1591 г.);\n• Социально-экономическое разорение после опричнины и Ливонской войны;\n• Страшный великий голод 1601–1603 гг. из-за заморозков и неурожаев (погибла треть населения, начались людоедство и бунты — восстание Хлопка Косолапа 1603 г.);\n• Кризис легитимности: царь Борис Годунов (1598–1605 гг.), избранный Земским собором, в глазах народа воспринимался как «ненастоящий царь», виновный в угличской трагедии.',
        contentEn:
          'The dynastic void following the 1591 death of Tsarevich Dmitry in Uglich, paired with the disastrous 1601–1603 famine, undermined Boris Godunov’s legitimacy and fueled popular unrest.',
      },
      {
        headingRu: '2. Самозванцы: Лжедмитрий I и Лжедмитрий II («Тушинский вор»)',
        headingEn: '2. False Dmitry I & False Dmitry II',
        contentRu:
          'Осенью 1604 года из Польши в пределы России вторгся беглый монах Чудова монастыря Григорий Отрепьев, выдававший себя за «чудесно спасшегося царевича Дмитрия» (Лжедмитрий I). При поддержке польских магнатов и казаков в июне 1605 года он триумфально вошёл в Москву и венчался на царство. Однако его пренебрежение русскими обычаями и засилие поляков вызвали восстание москвичей: 17 мая 1606 года самозванец был убит.\n\nЦарём стал «боярский царь» Василий Шуйский (1606–1610 гг.), давший крестоцеловальную запись (обязательство не казнить без суда Боярской думы). Вскоре вспыхнули народное восстание Ивана Болотникова и поход Лжедмитрия II, создавшего параллельную столицу в Тушино под Москвой («Тушинский вор»).',
        contentEn:
          'False Dmitry I seized the throne in 1605 with Polish backing but was overthrown in May 1606. Vasily Shuisky took the throne but was immediately challenged by the Bolotnikov peasant rebellion and False Dmitry II at Tushino.',
      },
      {
        headingRu: '3. Семибоярщина, польская оккупация Кремля и подвиг ополчения',
        headingEn: '3. The Seven Boyars, Polish Occupation & National Liberation',
        contentRu:
          'В 1610 году Шуйский был низложен, а власть захватило боярское правительство — Семибоярщина (во главе с Ф. Мстиславским). Спасая своё положение, бояре совершили национальное предательство: присягнули польскому королевичу Владиславу и тайно впустили польский гарнизон гетмана Жолкевского в Московский Кремль. Одновременно шведы захватили Новгород, а польский король Сигизмунд III осадил Смоленск (20-месячная героическая оборона воеводы М.Б. Шеина).\n\nРоссия оказалась на грани потери государственного суверенитета. В Нижнем Новгороде земский староста Кузьма Минин обратился к народу с пламенным призывом: «Не пожалеем животов наших, дворы продадим, жён и детей заложим, но очистим Московское государство!». Военным предводителем Второго ополчения стал князь Дмитрий Пожарский.\n\nВ августе 1612 года ополчение подошло к Москве, разбило шедшие на выручку осаждённым полякам отборные полки гетмана Ходкевича, а 4 ноября (22 октября по ст. ст.) 1612 года штурмом освободило Китай-город и вынудило польский гарнизон Кремля капитулировать.',
        contentEn:
          'In 1610 the Seven Boyars invited Polish Prince Wladyslaw to rule and allowed Polish troops into the Kremlin. In 1611–1612 the Nizhny Novgorod butcher Kuzma Minin and Prince Dmitry Pozharsky raised a citizen army that defeated Chodkiewicz and freed the Kremlin in November 1612.',
      },
      {
        headingRu: '4. Земский собор 1613 года и начало династии Романовых',
        headingEn: '4. The 1613 Zemsky Sobor & Election of the Romanovs',
        contentRu:
          'В январе — феврале 1613 года в освобождённой Москве собрался самый представительный в истории Земский собор, в котором участвовали представители всех сословий, включая черносошных крестьян и казаков. 21 февраля 1613 года царём был избран 16-летний Михаил Фёдорович Романов (сын патриарха Филарета, родственник первой жены Ивана Грозного Анастасии Романовой).\nСмута завершилась восстановлением русской государственности ценой территориальных потерь: Столбовский мир со Швецией (1617 г., потеря выхода к Балтике) и Деулинское перемирие с Польшей (1618 г., потеря Смоленска).',
        contentEn:
          'In February 1613, the grand Zemsky Sobor elected 16-year-old Michael Romanov, inaugurating the 300-year Romanov Dynasty. Borders were stabilized under the Treaty of Stolbovo (1617) and Truce of Deulino (1618).',
      },
    ],
    keyFigures: [
      {
        id: 'fig-minin-pozharsky',
        nameRu: 'Кузьма Минин и князь Дмитрий Пожарский',
        nameEn: 'Kuzma Minin & Prince Dmitry Pozharsky',
        dates: 'Минин (ум. 1616), Пожарский (1578 — 1642 гг.)',
        roleRu: 'Организаторы и предводители Второго народного ополчения 1612 года',
        roleEn: 'Leaders of the Second Volunteer Militia',
        avatar: '⚔️',
        grade: 7,
        keyActionsRu: [
          'Собрали народные средства и войско в Нижнем Новгороде и Ярославле («Совет всея земли»).',
          'Освободили Москву от польских интервентов в ноябре 1612 года.',
        ],
        legacyRu: 'Национальные герои России; на Красной площади в Москве им воздвигнут памятник И. Мартоса: «Гражданину Минину и князю Пожарскому благодарная Россия».',
        legacyEn: 'National liberators commemorated by Martos’s famous bronze monument on Red Square.',
      },
      {
        id: 'fig-ivan-susanin',
        nameRu: 'Иван Сусанин',
        nameEn: 'Ivan Susanin',
        dates: 'ум. 1613 г.',
        roleRu: 'Костромской вотчинный крестьянин, народный герой',
        roleEn: 'Kostroma peasant, national folk hero',
        avatar: '🌲',
        grade: 7,
        keyActionsRu: [
          'Зимой 1613 года завёл польско-литовский карательный отряд, искавший молодого царя Михаила Романова, в непроходимое Исуповское болото ценой собственной жизни.',
        ],
        legacyRu: 'Символ беззаветной народной верности Родине (опера М.И. Глинки «Жизнь за царя»).',
        legacyEn: 'Immortalized in Glinka’s opera "A Life for the Tsar".',
      },
    ],
    timelineEvents: [
      {
        year: 1598,
        dateRu: '1598 г.',
        dateEn: '1598 AD',
        titleRu: 'Пресечение династии Рюриковичей и избрание Бориса Годунова',
        titleEn: 'End of Rurikid Dynasty & Election of Boris Godunov',
        descriptionRu: 'Смерть бездетного царя Фёдора Иоанновича; Земский собор избрал Бориса Годунова.',
        significanceRu: 'Начало династического кризиса и вступление России в Смутное время.',
        tags: ['Годунов', 'Рюриковичи', 'Земский собор'],
      },
      {
        year: 1605,
        dateRu: '1605–1606 гг.',
        dateEn: '1605–1606 AD',
        titleRu: 'Царствование Лжедмитрия I',
        titleEn: 'Reign of False Dmitry I',
        descriptionRu: 'Вступление самозванца в Москву при поддержке казаков и польских магнатов.',
        significanceRu: 'Первый самозванец на русском троне, свергнутый восстанием москвичей.',
        tags: ['Лжедмитрий', 'Самозванец', 'Смута'],
      },
      {
        year: 1612,
        dateRu: '4 ноября (22 октября) 1612 г.',
        dateEn: 'November 4, 1612 AD',
        titleRu: 'Освобождение Москвы ополчением Минина и Пожарского',
        titleEn: 'Liberation of Moscow by Volunteer Militia',
        descriptionRu: 'Штурм Китай-города и изгнание польского гарнизона из Кремля.',
        significanceRu: 'Спасение российской государственности (государственный праздник — День народного единства).',
        tags: ['Минин', 'Пожарский', 'Освобождение', 'Кремль'],
      },
      {
        year: 1613,
        dateRu: '21 февраля 1613 г.',
        dateEn: 'February 21, 1613 AD',
        titleRu: 'Избрание Михаила Романова на царство',
        titleEn: 'Election of Michael Romanov',
        descriptionRu: 'Земский собор избрал нового царя, положив начало правлению династии Романовых (1613–1917 гг.).',
        significanceRu: 'Преодоление Смуты и восстановление суверенной монархии.',
        tags: ['Романовы', 'Михаил Романов', 'Земский собор'],
      },
    ],
    terms: [
      {
        termRu: 'Смутное время (Смута)',
        termEn: 'Time of Troubles (Smuta)',
        definitionRu: 'Период глубокого династического, социально-экономического и государственного кризиса в России (1598–1613 гг.), сопровождавшийся гражданской войной, самозванством и иностранной интервенцией.',
        definitionEn: 'Period of political crisis, social breakdown, civil war, and foreign invasion between the death of the last Rurikid and the rise of the Romanovs (1598–1613).',
        historicalContextRu: 'Закончилось избранием Михаила Романова на Земском соборе 1613 года.',
        historicalContextEn: 'Resolved with the enthronement of Michael Romanov in 1613.',
      },
      {
        termRu: 'Семибоярщина',
        termEn: 'Seven Boyars',
        definitionRu: 'Боярское правительство из семи знатных бояр во главе с князем Ф.И. Мстиславским, захватившее власть в Москве в 1610 году после свержения Василия Шуйского.',
        definitionEn: 'A junta of seven boyar magnates who ruled Russia following the overthrow of Vasily Shuisky in 1610 and admitted Polish troops to the Kremlin.',
        historicalContextRu: 'Впустили польский гарнизон в Кремль и пригласили на престол польского королевича Владислава.',
        historicalContextEn: 'Capitulated to Polish invaders before being overthrown by Minin and Pozharsky’s militia.',
      },
      {
        termRu: 'Урочные лета',
        termEn: 'Statute of Limitations on Runaway Serfs (Urochnye Leta)',
        definitionRu: 'Установленный царским указом срок давности для розыска и возврата беглых крестьян их владельцам.',
        definitionEn: 'Statutory search window for recapturing runaway bonded peasants, instituted in 1597 at 5 years.',
        historicalContextRu: 'Введены указом Фёдора Иоанновича в 1597 году (5-летний срок сыска); отменены Соборным уложением 1649 года, установившим бессрочный сыск.',
        historicalContextEn: 'Abolished in 1649 when serf search was made permanent and indefinite.',
      },
    ],
    examFocusRu: {
      examTarget: 'ОГЭ / ЕГЭ (Задания 1, 2, 4, 18, 19, 21)',
      coreTakeaways: [
        'Знать хронологию правителей Смуты: Фёдор Иоаннович → Борис Годунов → Фёдор Годунов → Лжедмитрий I → Василий Шуйский → Семибоярщина → Михаил Романов.',
        'Понимать значение 4 ноября 1612 года (День народного единства).',
        'Уметь анализировать причины неудач Первого ополчения (Ляпунов, Трубецкой, Заруцкий) и триумфа Второго ополчения (Минин и Пожарский).',
      ],
      essayPrompts: [
        'Почему Смутное время называют общенациональной катастрофой и нравственным испытанием русского народа?',
        'Какую роль сыграл Земский собор 1613 года в консолидации российского общества?',
      ],
    },
    examFocusEn: {
      examTarget: 'Grade 7 Russian History Curriculum',
      coreTakeaways: [
        'Trace the progression of pretenders and foreign interventions.',
        'Assess the significance of November 4, 1612, liberation.',
      ],
      essayPrompts: [
        'Analyze how cross-class popular solidarity reversed state collapse during the Smuta.',
      ],
    },
    quizQuestions: [
      {
        id: 'hist-q-7-3',
        type: 'multiple-choice',
        questionRu: 'В каком городе Кузьма Минин и князь Дмитрий Пожарский сформировали победоносное Второе народное ополчение?',
        questionEn: 'In which city did Kuzma Minin and Prince Pozharsky organize the victorious Second Volunteer Militia?',
        options: ['Нижний Новгород', 'Ярославль', 'Смоленск', 'Рязань'],
        correctAnswer: 'Нижний Новгород',
        explanationRu: 'Второе народное ополчение начало формироваться осенью 1611 года в Нижнем Новгороде по призыву Кузьмы Минина.',
        explanationEn: 'The Second Volunteer Militia was initiated in Nizhny Novgorod in autumn 1611.',
      },
      {
        id: 'hist-q-7-4',
        type: 'multiple-choice',
        questionRu: 'Кто был избран царём на Земском соборе 1613 года, положив начало новой правящей династии?',
        questionEn: 'Who was elected Tsar at the 1613 Zemsky Sobor, inaugurating the Romanov Dynasty?',
        options: ['Михаил Фёдорович Романов', 'Алексей Михайлович', 'Дмитрий Пожарский', 'Василий Шуйский'],
        correctAnswer: 'Михаил Фёдорович Романов',
        explanationRu: '21 февраля 1613 года Земский собор избрал 16-летнего Михаила Романова на царский престол.',
        explanationEn: 'Michael Romanov was elected Tsar on February 21, 1613.',
      },
    ],
  },

  // =========================================================================
  // GRADE 7 - TOPIC 3: «Бунташный век» Алексея Михайловича
  // =========================================================================
  {
    id: 'hist-7-alexis-rebellions-schism',
    grade: 7,
    eraId: 'era-grade-7',
    order: 3,
    titleRu: '«Бунташный век» царя Алексея Михайловича: Соборное уложение 1649 г., Раскол церкви и Степан Разин',
    titleEn: 'The Rebellious 17th Century: Alexis of Russia, 1649 Law Code, Church Schism & Razin',
    subtitleRu: 'Соляной и Медный бунты, окончательное закрепощение крестьян, патриарх Никон и воссоединение Украины (1654 г.)',
    subtitleEn: 'Salt and Copper Riots, definitive enserfment in 1649, Patriarch Nikon’s Schism, and Pereyaslav Rada (1654)',
    periodRu: '1645 — 1676 гг.',
    periodEn: '1645 — 1676 AD',
    icon: '📜',
    overviewRu:
      'XVII век вошёл в историю России под красноречивым названием «Бунташный век». В правление царя Алексея Михайловича «Тишайшего» (1645–1676 гг.) страна пережила череду мощных социальных потрясений: Соляной бунт (1648 г.), Медный бунт (1662 г.) и грандиозное казачье-крестьянское восстание Степана Разина (1670–1671 гг.). Соборное уложение 1649 года юридически завершило процесс закрепощения крестьян (введя бессрочный сыск беглых). Церковная реформа патриарха Никона расколола русский народ на никониан и старообрядцев во главе с протопопом Аввакумом. Вместе с тем произошло историческое воссоединение Украины с Россией на Переяславской раде 1654 года.',
    overviewEn:
      'The 17th century was dubbed the "Rebellious Century." Under Tsar Alexis "the Quietest," urban revolts (Salt and Copper Riots) and Stenka Razin’s massive Cossack-peasant rebellion shook the state. The Sobornoye Ulozheniye of 1649 codified permanent, hereditary serfdom. Patriarch Nikon’s liturgical changes split the Russian church into mainstream Orthodoxy and Old Believers led by Avvakum, while the 1654 Pereyaslav Rada reunited Left-Bank Ukraine with Russia.',
    sections: [
      {
        headingRu: '1. Городские восстания и Соборное уложение 1649 года',
        headingEn: '1. Urban Riots & the Law Code of 1649 (Sobornoye Ulozheniye)',
        contentRu:
          'В июне 1648 года в Москве вспыхнул Соляной бунт: введение высокого налога на соль и злоупотребления бояр вызвали восстание посада и стрельцов. Царь был вынужден казнить ненавистных приказных и созвать Земский собор для выработки нового кодекса законов.\n\nВ 1649 году Земский собор принял монументальное Соборное уложение — первый печатный свод законов России (968 статей в 25 главах):\n• Полное и окончательное закрепощение крестьян: отмена «урочных лет» и установление бессрочного сыска беглых крестьян («крепостное состояние стало потомственным»);\n• Защита царской власти и православия: жесточайшие кары за преступления против чести царя и веры;\n• Ликвидация «белых слобод» (частных владений бояр в городах, освобождённых от налогов), обязание всех жителей посада нести государево тягло.\nУложение действовало почти 200 лет (до 1832 г. при Николае I).',
        contentEn:
          'Triggered by the 1648 Salt Riot, the Zemsky Sobor codified the Sobornoye Ulozheniye of 1649: abolishing the search term for runaway peasants (making serfdom permanent and hereditary) and eliminating tax-exempt boyar urban enclaves (belye slobody).',
      },
      {
        headingRu: '2. Церковная реформа патриарха Никона и Раскол',
        headingEn: '2. Patriarch Nikon’s Reform & The Great Schism (Raskol)',
        contentRu:
          'В 1653–1656 годах властный патриарх Никон начал церковную реформу для исправления богослужебных книг по греческим оригиналам и унификации обрядов:\n• Введение крещения тремя перстами вместо двух;\n• Поклоны поясные вместо земных;\n• Написание имени «Иисус» вместо «Исус»;\n• Крестный ход против солнца (посолонь).\n\nРеформа вызвала ожесточённое сопротивление и глубочайший духовный раскол общества. Противников реформы назвали старообрядцами (раскольниками). Их духовным вождём стал неистовый протопоп Аввакум, автор первого автобиографического романа «Житие протопопа Аввакума». Старообрядцы подвергались преследованиям, уходили в глухие леса Сибири и на Север, сжигая себя в срубах («гари»), но не покоряясь никонианам.\nСам патриарх Никон вступил в конфликт с царём, заявив, что «священство выше царства», и был низложен Церковным собором 1666–1667 годов.',
        contentEn:
          'Patriarch Nikon standardized Russian liturgical practices to contemporary Greek texts (three-finger sign of the cross, three Hallelujahs). Old Believers led by Archpriest Avvakum rejected the innovations as heresy, triggering a bitter, enduring religious schism (Raskol). Nikon was deposed in 1666 after asserting papal-style primacy over the Tsar.',
      },
      {
        headingRu: '3. Восстание Степана Разина и Переяславская рада (1654 г.)',
        headingEn: '3. Stenka Razin Uprising & Pereyaslav Rada',
        contentRu:
          'В 1670–1671 годах Дон и Поволжье охватила Крестьянская война под предводительством донского атамана Степана Разина. Разин рассылал «прелестные грамоты», призывая бить бояр и приказных и дать «волю» простому люду. Восставшие захватили Царицын, Астрахань, Саратов, Самару, но были остановлены под Симбирском. Разин был предан зажиточными казаками и четвертован на Красной площади в Москве.\n\nВнешнеполитический триумф эпохи — национально-освободительная война украинского народа под предводительством гетмана Богдана Хмельницкого против шляхетской Польши. 8 января 1654 года на Переяславской раде казаки единодушно постановили: «Волим под царя восточного, православного!». Левобережная Украина и Киев вошли в состав России, что привело к победоносной русско-польской войне (1654–1667 гг.) и Андрусовскому перемирию (1667 г., возвращение Смоленска и Левобережья).',
        contentEn:
          'The 1670–1671 rebellion of Cossack ataman Stepan Razin engulfed the Volga until his defeat at Simbirsk. Abroad, Bohdan Khmelnytsky led the Ukrainian Cossack revolt against Polish dominion, joining Left-Bank Ukraine to Moscow at the 1654 Pereyaslav Council.',
      },
    ],
    keyFigures: [
      {
        id: 'fig-alexis-romanov',
        nameRu: 'Царь Алексей Михайлович Романов («Тишайший»)',
        nameEn: 'Tsar Alexis of Russia',
        dates: '1629 — 1676 гг.',
        roleRu: 'Второй царь из династии Романовых, отец Петра Великого',
        roleEn: 'Second Romanov Tsar, father of Peter the Great',
        avatar: '👑',
        grade: 7,
        keyActionsRu: [
          'Утвердил Соборное уложение 1649 года.',
          'Принял Украину в состав Российского государства (1654 г.).',
          'Основал первые мануфактуры, Новоторговый устав (1667 г., протекционизм А.Л. Ордина-Нащокина).',
        ],
        legacyRu: 'Мудрый монарх, подготовивший почву для грандиозных преобразований своего сына Петра Великого.',
        legacyEn: 'Laid the institutional and geopolitical foundations for Petrine modernization.',
      },
      {
        id: 'fig-nikon-avvakum',
        nameRu: 'Патриарх Никон и протопоп Аввакум',
        nameEn: 'Patriarch Nikon & Archpriest Avvakum',
        dates: 'Никон (1605 — 1681), Аввакум (1620 — 1682 гг.)',
        roleRu: 'Главные антагонисты Церковного раскола XVII века',
        roleEn: 'Key figures of the 17th-century Russian Church Schism',
        avatar: '☦️',
        grade: 7,
        keyActionsRu: [
          'Никон провёл исправление книг и обрядов, построил Новоиерусалимский монастырь.',
          'Аввакум стал духовным вождём старообрядчества, погиб за веру в срубе в Пустозерске (1682 г.).',
        ],
        legacyRu: 'Олицетворение трагического раскола русской религиозно-культурной мысли.',
        legacyEn: 'Embody the profound fracture within Russian religious consciousness.',
      },
    ],
    timelineEvents: [
      {
        year: 1648,
        dateRu: '1648 г.',
        dateEn: '1648 AD',
        titleRu: 'Соляной бунт в Москве',
        titleEn: 'Salt Riot in Moscow',
        descriptionRu: 'Народное восстание против налога на соль и коррупции бояр.',
        significanceRu: 'Послужил поводом к созыву Земского собора и выработке Соборного уложения 1649 г.',
        tags: ['Соляной бунт', 'Москва', 'Восстание'],
      },
      {
        year: 1649,
        dateRu: '1649 г.',
        dateEn: '1649 AD',
        titleRu: 'Принятие Соборного уложения царя Алексея Михайловича',
        titleEn: 'Sobornoye Ulozheniye (Law Code of 1649)',
        descriptionRu: 'Окончательное юридическое закрепощение крестьян (бессрочный сыск беглых).',
        significanceRu: 'Фундаментальный свод законов Российской монархии, действовавший до XIX века.',
        tags: ['Соборное уложение', 'Крепостное право', 'Закон'],
      },
      {
        year: 1654,
        dateRu: '8 января 1654 г.',
        dateEn: 'January 8, 1654 AD',
        titleRu: 'Переяславская рада: воссоединение Украины с Россией',
        titleEn: 'Pereyaslav Council',
        descriptionRu: 'Решение казацкой рады во главе с Богданом Хмельницким о вхождении в состав России.',
        significanceRu: 'Воссоединение православных славянских земель и усиление геополитической мощи страны.',
        tags: ['Переяславская рада', 'Украина', 'Хмельницкий'],
      },
      {
        year: 1670,
        dateRu: '1670–1671 гг.',
        dateEn: '1670–1671 AD',
        titleRu: 'Крестьянско-казацкое восстание Степана Разина',
        titleEn: 'Stepan Razin Rebellion',
        descriptionRu: 'Масштабное антифеодальное восстание казаков и крестьян в Поволжье.',
        significanceRu: 'Крупнейшее народное выступление «бунташного века».',
        tags: ['Степан Разин', 'Бунташный век', 'Восстание'],
      },
    ],
    terms: [
      {
        termRu: 'Соборное уложение 1649 года',
        termEn: 'Sobornoye Ulozheniye of 1649',
        definitionRu: 'Первый печатный свод законов Русского государства, окончательно закрепостивший крестьян введением бессрочного сыска беглых.',
        definitionEn: 'Comprehensive legal code promulgated under Tsar Alexis that formalized total, perpetual serfdom in Russia.',
        historicalContextRu: 'Принято на Земском соборе 1648–1649 годов после Соляного бунта.',
        historicalContextEn: 'Formulated in response to the 1648 Salt Riot in Moscow.',
        examTipRu: 'Для ЕГЭ: Соборное уложение 1649 года юридически оформило окончательное закрепощение крестьян (отмена урочных лет).',
      },
      {
        termRu: 'Раскол (старообрядчество)',
        termEn: 'Raskol (Old Believers)',
        definitionRu: 'Религиозно-общественное движение в России XVII века, возникшее в результате неприятия частью верующих реформ патриарха Никона.',
        definitionEn: 'The profound ecclesiastical fracture caused by opposition to Patriarch Nikon’s liturgical reforms.',
        historicalContextRu: 'Старообрядцы сохранили двоеперстие, восьмиконечный крест и написание «Исус». Лидер — протопоп Аввакум.',
        historicalContextEn: 'Old Believers retained the two-finger sign of the cross and pre-Nikonian prayer books.',
      },
      {
        termRu: 'Белые и чёрные слободы',
        termEn: 'White and Black Slobody',
        definitionRu: 'Белые слободы — городские кварталы, принадлежавшие боярам и монастырям и освобождённые от государевых налогов («обелённые»); чёрные слободы — кварталы тяглого посадского населения, платившие все налоги.',
        definitionEn: 'White slobody were tax-exempt aristocratic/monastic urban districts; black slobody paid full state levies.',
        historicalContextRu: 'Соборное уложение 1649 года полностью ликвидировало белые слободы, обложив их общим тяглом.',
        historicalContextEn: 'Abolished in 1649 to expand the royal tax base.',
      },
    ],
    examFocusRu: {
      examTarget: 'ОГЭ / ЕГЭ (Задания 1-5, 17, 18, 19, 21)',
      coreTakeaways: [
        'Понимать логику закрепощения: Судебник 1497 (Юрьев день) → Судебник 1550 → Заповедные лета 1581 → Урочные лета 1597 → Соборное уложение 1649 (бессрочный сыск).',
        'Знать суть Раскола и противостояние Никона и Аввакума.',
        'Помнить даты: Соляной бунт (1648 г.), Соборное уложение (1649 г.), Переяславская рада (1654 г.), восстание Разина (1670–1671 гг.).',
      ],
      essayPrompts: [
        'Почему XVII век в истории России получил название «бунташного века»?',
        'Какие социально-экономические последствия имело принятие Соборного уложения 1649 года?',
      ],
    },
    examFocusEn: {
      examTarget: 'Grade 7 Russian History Review',
      coreTakeaways: [
        'Identify milestones in the legal codification of serfdom.',
        'Analyze the religious and cultural rifts of the Raskol.',
      ],
      essayPrompts: [
        'Assess the domestic and international repercussions of the 1654 Pereyaslav Rada.',
      ],
    },
    quizQuestions: [
      {
        id: 'hist-q-7-5',
        type: 'multiple-choice',
        questionRu: 'Какое главное решение относительно крестьян содержалось в Соборном уложении 1649 года?',
        questionEn: 'What fundamental decision regarding peasants was enacted in the 1649 Sobornoye Ulozheniye?',
        options: [
          'Введение бессрочного сыска беглых крестьян и окончательное закрепощение',
          'Полная отмена крепостного права и выкуп земли',
          'Возвращение Юрьева дня и уменьшение платы за пожилое',
          'Освобождение крестьян от рекрутской повинности',
        ],
        correctAnswer: 'Введение бессрочного сыска беглых крестьян и окончательное закрепощение',
        explanationRu: 'Соборное уложение 1649 года отменило урочные лета и установило бессрочный сыск беглых крестьян, окончательно закрепостив их.',
        explanationEn: 'The 1649 code abolished the statute of limitations on runaway serfs, establishing hereditary, perpetual bondage.',
      },
      {
        id: 'hist-q-7-6',
        type: 'multiple-choice',
        questionRu: 'Кто являлся духовным вождём старообрядцев и автором шедевра древнерусской литературы «Житие»?',
        questionEn: 'Who was the spiritual leader of the Old Believers and author of the celebrated autobiography?',
        options: ['Протопоп Аввакум', 'Патриарх Никон', 'Митрополит Макарий', 'Сильвестр'],
        correctAnswer: 'Протопоп Аввакум',
        explanationRu: 'Протопоп Аввакум Петров возглавил сопротивление никонианской реформе и написал знаменитое «Житие протопопа Аввакума».',
        explanationEn: 'Archpriest Avvakum championed the Old Believers and wrote Russia’s first major autobiographical literary work.',
      },
    ],
  },
];
