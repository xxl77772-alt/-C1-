import { HistoryTopic } from '../../types';

export const TOPICS_GRADE_5_6: HistoryTopic[] = [
  // =========================================================================
  // GRADE 5 - TOPIC 1: Древнейшие культуры и народы на территории России
  // =========================================================================
  {
    id: 'hist-5-ancient-eurasia',
    grade: 5,
    eraId: 'era-grade-5',
    order: 1,
    titleRu: 'Древнейшие народы и цивилизации на территории современной России',
    titleEn: 'Ancient Peoples & Civilizations in Modern Russia',
    subtitleRu: 'От стоянок каменного века (Костёнки, Сунгирь) до скифских курганов и греческих полисов',
    subtitleEn: 'From Paleolithic sites to Scythian kurgans and Greek Black Sea poleis',
    periodRu: '40 000 лет назад — IV в. н.э.',
    periodEn: '40,000 BP — 4th Century AD',
    icon: '🏺',
    overviewRu:
      'На бескрайних просторах Евразии за десятки тысяч лет до образования Древнерусского государства кипела жизнь. Здесь найдены древнейшие стоянки кроманьонцев и неандертальцев, загадочные скифы воздвигали курганы с золотыми шедеврами звериного стиля, а на берегах Чёрного моря греческие колонисты основывали цветущие полисы Ольвию, Херсонес и Пантикапей.',
    overviewEn:
      'Long before Kievan Rus formed, Eurasia hosted world-famous Paleolithic archaeological complexes (Kostenki, Sungir), the nomadic Scythians with their golden Animal Style, and flourishing Greek Black Sea poleis such as Chersonesus and Panticapaeum.',
    sections: [
      {
        headingRu: '1. Палеолит и неолитическая революция на территории России',
        headingEn: '1. Paleolithic Sites & Neolithic Revolution',
        contentRu:
          'Археологические памятники на территории России входят в число важнейших мировых открытий. Стоянка Костёнки под Воронежем (около 40 000 лет назад) явила миру сложнейшие жилища из костей мамонта и знаменитые «палеолитические венеры». Погребения в Сунгире под Владимиром (около 30 000 лет назад) поразили учёных роскошными одеяниями, расшитыми десятками тысяч бусин из бивня мамонта, и копьями из распрямленного бивня. А на Алтае в Денисовой пещере был открыт ранее неизвестный подвид древнего человека — «денисовец».',
        contentEn:
          'Kostenki near Voronezh (ca. 40,000 BP) revealed intricate mammoth-bone dwellings and Venus figurines. Sungir near Vladimir (ca. 30,000 BP) yielded thousands of mammoth-ivory beads on royal burial garments. Denisova Cave in Altai revealed Denisovans.',
        bulletsRu: [
          'Костёнки: древнейшие жилища из костей мамонта, развитое кремневое производство.',
          'Сунгирь: погребения старейшины и мальчиков-охотников, высшее мастерство обработки кости.',
          'Денисова пещера: древнейший браслет из хлоритолита, свидетельство ранней полировки камня.',
          'Неолитическая революция: переход от присваивающего хозяйства (охота, собирательство) к производящему (земледелие, скотоводство).',
        ],
      },
      {
        headingRu: '2. Скифы, сарматы и степные кочевники Евразии',
        headingEn: '2. Scythians, Sarmatians & Eurasian Steppe Nomads',
        contentRu:
          'В VII–III вв. до н.э. степи Причерноморья заняли скифы — ираноязычный кочевой народ, воспетый Геродотом («отцом истории»). Скифы владели непревзойдённым искусством верховой езды, дальнобойными составными луками и тактикой ложного отступления. Царские скифы возводили грандиозные курганы (Чертомлык, Солоха), наполняя их драгоценным оружием и золотыми украшениями в скифо-сибирском «зверином стиле» (олени с ветвистыми рогами, грифоны, пантеры).',
        contentEn:
          'The Scythians dominated the Black Sea steppes from the 7th to 3rd centuries BC, famous for composite bows, mounted archery, and gold kurgans showcasing the Animal Style.',
        highlightBoxRu: {
          title: 'Геродот о скифской тактике',
          text: '«У них нет ни городов, ни укреплений, свои жилища они возят с собой; все они — конные стрелки из лука... Как же врагу настичь их или одержать победу?»',
        },
      },
      {
        headingRu: '3. Античные греческие города-полисы в Северном Причерноморье',
        headingEn: '3. Greek City-States on the Black Sea',
        contentRu:
          'В ходе Великой греческой колонизации (VIII–VI вв. до н.э.) эллины основали на побережье Чёрного и Азовского морей десятки полисов: Херсонес Таврический (современный Севастополь), Пантикапей (Керчь), Ольвию, Горгиппию (Анапа). В V веке до н.э. вокруг Пантикапея сформировалось мощное Боспорское царство. Греки вели оживлённую торговлю с местными племенами, экспортируя хлеб, солёную рыбу и кожу в Афины, а завозя оливковое масло, амфорные вина и мраморные скульптуры.',
        contentEn:
          'Greek settlers founded colonies including Chersonesus, Panticapaeum (capital of the Bosporan Kingdom), and Olbia, trading grain and salt fish with Athens.',
      },
    ],
    keyFigures: [
      {
        id: 'fig-herodotus',
        nameRu: 'Геродот Галикарнасский',
        nameEn: 'Herodotus of Halicarnassus',
        dates: 'ок. 484 — ок. 425 гг. до н.э.',
        roleRu: 'Древнегреческий историк, автор книги «История» (Скифский рассказ)',
        roleEn: 'Ancient Greek historian, chronicler of Scythia',
        avatar: '📜',
        grade: 5,
        keyActionsRu: [
          'Подробно описал быт, обряды, пантеон богов и военные обычаи скифов в IV книге «Истории».',
          'Описал поход персидского царя Дария I в Скифию (512 г. до н.э.) и поражение персов от скифской тактики «выжженной земли».',
        ],
        legacyRu: 'Оставил бесценный письменный источник по древнейшей истории народов современной России.',
        legacyEn: 'Authored the earliest detailed written historical account of Eurasian steppe peoples.',
      },
      {
        id: 'fig-mithridates',
        nameRu: 'Митридат VI Евпатор',
        nameEn: 'Mithridates VI Eupator',
        dates: '134 — 63 гг. до н.э.',
        roleRu: 'Царь Понта и владыка Боспорского царства, противник Римской республики',
        roleEn: 'King of Pontus and ruler of the Bosporan Kingdom',
        avatar: '👑',
        grade: 5,
        keyActionsRu: [
          'Объединил греческие города Причерноморья и Боспор под своей властью.',
          'Вёл три ожесточённые войны против Рима (Митридатовы войны). Погиб в Пантикапее (Керчь).',
        ],
        legacyRu: 'В его честь назван холм Митридат в Керчи и город Евпатория в Крыму.',
        legacyEn: 'Namesake of Mount Mithridat in Kerch and the city of Eupatoria in Crimea.',
      },
    ],
    timelineEvents: [
      {
        year: -512,
        dateRu: 'ок. 512 г. до н.э.',
        dateEn: 'ca. 512 BC',
        titleRu: 'Поход персидского царя Дария I в Скифию',
        titleEn: 'Darius I’s Scythian Expedition',
        descriptionRu: 'Скифы применили тактику заманивания врага вглубь степей и партизанских ударов, заставив огромную персидскую армию бежать.',
        significanceRu: 'Первая зафиксированная в источниках победа на территории юга России благодаря стратегии манёвренной войны.',
        tags: ['Скифия', 'Персия', 'Битвы'],
      },
      {
        year: -480,
        dateRu: 'ок. 480 г. до н.э.',
        dateEn: 'ca. 480 BC',
        titleRu: 'Образование Боспорского царства',
        titleEn: 'Foundation of the Bosporan Kingdom',
        descriptionRu: 'Объединение греческих городов по обоим берегам Керченского пролива под властью династии Археанактидов со столицей в Пантикапее.',
        significanceRu: 'Крупнейшее эллинистическое государственное образование на территории России.',
        tags: ['Греция', 'Крым', 'Государственность'],
      },
    ],
    terms: [
      {
        termRu: 'Неолитическая революция',
        termEn: 'Neolithic Revolution',
        definitionRu: 'Исторический переход человеческих сообществ от присваивающего хозяйства (охота, рыбалка, собирательство) к производящему (земледелие и скотоводство).',
        definitionEn: 'The wide-scale transition from foraging and hunting to agricultural farming and domesticating animals.',
        historicalContextRu: 'Произошла в период неолита (новокаменного века), привела к оседлости и росту населения.',
        historicalContextEn: 'Led to permanent settlements, ceramic pottery, and population growth.',
        examTipRu: 'Для ОГЭ/ЕГЭ: обязательно знать разницу между «присваивающим» и «производящим» типом хозяйства.',
      },
      {
        termRu: 'Звериный стиль',
        termEn: 'Scythian Animal Style',
        definitionRu: 'Самобытный стиль изобразительного и декоративно-прикладного искусства древних кочевников (скифов, сарматов), изображающий животных в динамичных позах борьбы и бега.',
        definitionEn: 'Distinctive decorative art style of ancient Eurasian nomads portraying dynamic animals and predators.',
        historicalContextRu: 'Украшал золотое скифское оружие, конскую сбрую, гребни и пекторали из курганов.',
        historicalContextEn: 'Featured prominently on golden artifacts excavated from royal burial kurgans.',
      },
      {
        termRu: 'Полис',
        termEn: 'Polis',
        definitionRu: 'Античный город-государство, состоявший из городской части и прилегающей сельскохозяйственной округи (хоры).',
        definitionEn: 'Ancient Greek city-state comprising an urban center and rural territory.',
        historicalContextRu: 'Херсонес, Ольвия и Пантикапей были типичными греческими полисами с демократическим или олигархическим самоуправлением.',
        historicalContextEn: 'Chersonesus and Olbia operated as autonomous self-governing city-states.',
      },
    ],
    sourceDocuments: [
      {
        id: 'doc-herodotus-scythia',
        titleRu: 'Геродот: «История» (Книга IV. Мельпомена)',
        titleEn: 'Herodotus: Histories (Book IV)',
        authorOrSourceRu: 'Геродот Галикарнасский',
        yearOrCentury: 'V век до н.э.',
        excerptRu:
          '«Когда скифы узнали о приближении персов, они решили не вступать в открытое сражение... Они стали засыпать колодцы и источники, мимо которых проходил враг, и истреблять траву на корню. Так персы блуждали по бескрайней степи, не находя ни пропитания, ни врага...»',
        excerptEn:
          'When the Scythians learned of the Persian advance, they chose not to engage in open battle... They filled in wells and springs and scorched the grass, leaving the Persians wandering the arid steppes with neither food nor enemy to face.',
        analysisRu:
          'Этот отрывок иллюстрирует скифскую военную доктрину: кочевники уклонялись от генерального сражения с превосходящей армией, истощая захватчиков климатом и блокадой ресурсов.',
        analysisEn:
          'Illustrates nomadic warfare strategy: avoiding pitched battles against superior forces while using scorched-earth tactics.',
        examQuestionRu: 'Какую военную тактику применили скифы против персидского войска Дария I?',
        examAnswerRu: 'Тактику «выжженной земли», заманивания противника вглубь пустынной степи и внезапных конных набегов.',
      },
    ],
    examFocusRu: {
      examTarget: 'ОГЭ (Раздел 1) / ВПР по истории 5 класс',
      coreTakeaways: [
        'Понимать смену археологических эпох: палеолит → мезолит → неолит → бронзовый → железный век.',
        'Знать ключевые археологические стоянки: Костёнки (мамонтовы кости), Сунгирь (погребения в бусинах), Денисова пещера.',
        'Уметь охарактеризовать роль скифов и греческих колоний (Херсонес, Пантикапей) в культурном обмене.',
      ],
      essayPrompts: [
        'В чём заключались главные последствия неолитической революции для человечества?',
        'Почему греческие полисы Причерноморья зависели от мирных отношений со степными кочевниками?',
      ],
    },
    examFocusEn: {
      examTarget: 'Russian Middle School History Syllabus (Grade 5)',
      coreTakeaways: [
        'Distinguish Paleolithic and Neolithic hunter-gatherer vs producer models.',
        'Understand Scythian nomadic lifestyle and Greek colonies in Crimea.',
      ],
      essayPrompts: [
        'How did environmental conditions shape nomadic pastoralism in Eurasian steppes?',
      ],
    },
    quizQuestions: [
      {
        id: 'hist-q-5-1',
        type: 'multiple-choice',
        questionRu: 'Какая всемирно известная палеолитическая стоянка на территории России прославилась погребениями, расшитыми тысячами бусин из бивня мамонта?',
        questionEn: 'Which famous Paleolithic site in Russia yielded royal burials adorned with thousands of ivory beads?',
        options: ['Сунгирь', 'Херсонес', 'Чертомлык', 'Ольвия'],
        correctAnswer: 'Сунгирь',
        explanationRu: 'Стоянка Сунгирь под Владимиром (ок. 30 тыс. лет назад) открыла миру уникальные погребения с копьями из бивня мамонта и одеждой, украшенной костяными бусинами.',
        explanationEn: 'Sungir near Vladimir features extraordinary burials with garments embroidered with thousands of mammoth-ivory beads.',
      },
      {
        id: 'hist-q-5-2',
        type: 'multiple-choice',
        questionRu: 'В чём заключалась суть «неолитической революции»?',
        questionEn: 'What was the core essence of the Neolithic Revolution?',
        options: [
          'Переход от присваивающего хозяйства к производящему (земледелию и скотоводству)',
          'Изобретение железного оружия и колесниц',
          'Переселение греков на берега Чёрного моря',
          'Появление первой письменности на пергаменте',
        ],
        correctAnswer: 'Переход от присваивающего хозяйства к производящему (земледелию и скотоводству)',
        explanationRu: 'Неолитическая революция — это величайший рубеж: люди перестали только собирать и охотиться, начав сами выращивать хлеб и разводить скот.',
        explanationEn: 'The transition from foraging to producing agriculture and livestock husbandry.',
      },
    ],
  },

  // =========================================================================
  // GRADE 5 - TOPIC 2: Восточные славяне и их соседи
  // =========================================================================
  {
    id: 'hist-5-slavs-neighbors',
    grade: 5,
    eraId: 'era-grade-5',
    order: 2,
    titleRu: 'Восточные славяне и их соседи: быт, верования и путь «из варяг в греки»',
    titleEn: 'East Slavs & Neighbors: Culture, Beliefs & Trade Routes',
    subtitleRu: 'Племенные союзы, земледелие, языческий пантеон Перуна и торговые артерии Восточной Европы',
    subtitleEn: 'Tribal unions, agriculture, Slavic pagan pantheon, and Baltic-to-Byzantine trade',
    periodRu: 'VI — IX века н.э.',
    periodEn: '6th — 9th Century AD',
    icon: '🌾',
    overviewRu:
      'В середине I тысячелетия н.э. в ходе Великого переселения народов славяне разделились на три ветви: западных, южных и восточных. Предки русского народа — восточные славяне — расселились от Карпат до Оки и от Ладоги до Днепра. Они объединялись в племенные союзы (поляне, ильменские словене, древляне, кривичи), вели подсечное и переложное земледелие, поклонялись богам грозы, солнца и плодородия, и контролировали важнейший торговый путь «из варяг в греки».',
    overviewEn:
      'In the mid-first millennium AD, the Slavs divided into Western, Southern, and Eastern branches. Eastern Slavs settled the Dnieper and Volga river basins, cultivating crops via slash-and-burn, worshiping Perun and Veles, and policing the great waterway from the Varangians to the Greeks.',
    sections: [
      {
        headingRu: '1. Расселение и племенные союзы восточных славян',
        headingEn: '1. Settlement & Tribal Unions',
        contentRu:
          '«Повесть временных лет» Нестора Летописца сохранила подробную географию восточнославянских союзов племён:\n• Поляне — жили в среднем течении Днепра (центр — Киев);\n• Ильменские словене — селились вокруг озера Ильмень (центры — Новгород, Ладога);\n• Древляне — обитали в лесах по реке Припять (центр — Искоростень);\n• Кривичи — в верховьях Днепра, Волги и Западной Двины (центр — Смоленск);\n• Вятичи — в бассейне Оки и Москвы-реки;\n• Северяне — по рекам Десна, Сейм и Сула (центр — Чернигов).',
        contentEn:
          'Primary Chronicle details the distribution of East Slavic tribal leagues: Polyane (around Kyiv), Ilmen Slavs (Novgorod/Ladoga), Drevlyane (forests of Pripyat), Krivichi (Smolensk), and Vyatichi (Oka river).',
        bulletsRu: [
          'Соседская община (вервь): сменила родовую общину; земля находилась в совместном пользовании, но каждая семья имела свой надел.',
          'Вече — народное собрание свободных общинников-мужчин для решения вопросов войны, мира и избрания старейшин.',
          'Князь и дружина: военный предводитель и его постоянное профессиональное войско.',
        ],
      },
      {
        headingRu: '2. Земледелие и промыслы',
        headingEn: '2. Agriculture & Crafts',
        contentRu:
          'Основой жизни восточных славян было земледелие, зависевшее от климатических зон:\n• В северной лесной зоне применялось подсечно-огневое земледелие: весной деревья подрубали, через год сухой лес сжигали, а зола служила естественным удобрением. Почва давала урожай 2-3 года, после чего расчищали новый участок.\n• В южной лесостепной зоне господствовало переложное земледелие: участок пахали ралом или сохой до истощения, затем «перекладывались» на другой.\n• Развивались промыслы: бортничество (сбор мёда диких пчёл), пушная охота (соболь, куница — пушнина служила эквивалентом денег), рыболовство и кузнечное дело.',
        contentEn:
          'Agriculture was adapted to ecosystems: slash-and-burn in northern forests and shifting cultivation (perelog) in the southern forest-steppes. Wild beekeeping (bortnichestvo) and fur trapping provided valuable export trade goods.',
      },
      {
        headingRu: '3. Торговый путь «из варяг в греки» и соседи славян',
        headingEn: '3. The Route from the Varangians to the Greeks',
        contentRu:
          'Великий водный путь соединял Балтийское (Варяжское) море с Чёрным (Русским) морем и Константинополем (Царьградом): Балтийское море → река Нева → Ладожское озеро → река Волхов → озеро Ильмень → река Ловать → волоки → река Днепр → Чёрное море.\nНа этом маршруте выросли древнейшие города Руси: Ладога, Новгород, Смоленск, Любеч, Киев.\nСоседями славян были: на востоке — Хазарский каганат (кочевники, взимавшие дань с полян и вятичей) и Волжская Булгария; на северо-западе — варяги (норманны-викинги); на юге — могущественная Византийская империя.',
        contentEn:
          'The trade artery linked Scandinavia to Constantinople via the Neva, Lake Ladoga, Volkhov, Dnieper, and Black Sea. Along it arose Ladoga, Novgorod, Smolensk, and Kyiv.',
      },
      {
        headingRu: '4. Языческий пантеон восточных славян',
        headingEn: '4. Slavic Pagan Pantheon',
        contentRu:
          'До принятия христианства славяне были язычниками и одушевляли природу:\n• Перун — бог грома, молнии и покровитель князя и дружины;\n• Велес (Волос) — «скотий бог», покровитель скотоводства, торговли и богатства;\n• Даждьбог и Хорс — божества солнца и солнечного света;\n• Стрибог — повелитель ветров;\n• Мокошь (Макошь) — единственное женское божество, покровительница прядения, ткачества и женской доли.\nСлавяне верили в низших духов: домового, лешего, водяного, русалок.',
        contentEn:
          'Slavs worshipped forces of nature: Perun (thunder/war god of the princely retinue), Veles (god of livestock and wealth), Dazhbog (sun god), and Mokosh (goddess of weaving and fertility).',
      },
    ],
    keyFigures: [
      {
        id: 'fig-nestor',
        nameRu: 'Нестор Летописец',
        nameEn: 'Nestor the Chronicler',
        dates: 'ок. 1056 — 1114 гг.',
        roleRu: 'Монах Киево-Печерского монастыря, создатель «Повести временных лет»',
        roleEn: 'Monk and author of the Primary Chronicle (Tale of Bygone Years)',
        avatar: '🪶',
        grade: 5,
        keyActionsRu: [
          'Собрал устные предания, византийские хроники и княжеские грамоты в первый общерусский летописный свод.',
          'Поставил фундаментальный исторический вопрос: «Откуду есть пошла Русская земля, кто в Киеве нача первее княжити?»',
        ],
        legacyRu: 'Отец русской исторической науки, давший потомкам летописную хронологию IX–XII веков.',
        legacyEn: 'Considered the father of Russian historiography.',
      },
    ],
    timelineEvents: [
      {
        year: 800,
        dateRu: 'VIII — IX вв.',
        dateEn: '8th — 9th Century',
        titleRu: 'Сложение торгового пути «из варяг в греки»',
        titleEn: 'Establishment of the Route from Varangians to Greeks',
        descriptionRu: 'Налаживание регулярного торгового пути между Скандинавией и Византией по речным артериям Руси.',
        significanceRu: 'Экономический хребет, вокруг которого сформировалось Древнерусское государство.',
        tags: ['Торговля', 'География', 'Путь из варяг в греки'],
      },
    ],
    terms: [
      {
        termRu: 'Подсечно-огневое земледелие',
        termEn: 'Slash-and-Burn Agriculture',
        definitionRu: 'Система земледелия в лесной зоне, при которой деревья подрубали, сжигали, а золу использовали как удобрение.',
        definitionEn: 'Forest farming technique of cutting trees, burning debris, and seeding crops in nutrient-rich ash.',
        historicalContextRu: 'Характерно для северных восточнославянских племен (ильменские словене, кривичи).',
        historicalContextEn: 'Practiced primarily by northern East Slavic tribes in taiga regions.',
        examTipRu: 'В заданиях ОГЭ/ЕГЭ не путать с переложным (перелог — в лесостепи, подсека — в лесу).',
      },
      {
        termRu: 'Вервь (мир)',
        termEn: 'Verv (Peasant Commune)',
        definitionRu: 'Соседская (территориальная) община у восточных славян, связанная круговой порукой и общими границами угодий.',
        definitionEn: 'The territorial village commune in early Medieval Rus bound by mutual guarantee.',
        historicalContextRu: 'Описана в первых статьях древнейшего судебника «Русская Правда».',
        historicalContextEn: 'Formed the baseline socio-economic unit documented in Russkaya Pravda.',
      },
      {
        termRu: 'Бортничество',
        termEn: 'Bortnichestvo (Wild Beekeeping)',
        definitionRu: 'Древнейший промысел по сбору мёда и воска диких пчёл из дупел деревьев (бортей).',
        definitionEn: 'Harvesting honey and wax from natural tree hollows in ancient forests.',
        historicalContextRu: 'Воск и мёд были главными товарами славянского экспорта в Византию и страны Востока.',
        historicalContextEn: 'Beeswax was a prime export to the Byzantine Empire for church candles.',
      },
    ],
    examFocusRu: {
      examTarget: 'ОГЭ по истории (Задания 1, 3, 15) / ЕГЭ (Карта расселения племён)',
      coreTakeaways: [
        'Безошибочно определять на карте расселение полян (Киев), словен (Новгород), древлян (Искоростень), кривичей (Смоленск).',
        'Знать маршрут пути «из варяг в греки» и ключевые реки/озёра: Нева → Ладога → Волхов → Ильмень → Ловать → волоки → Днепр.',
        'Понимать структуру славянского язычества: Перун, Велес, Даждьбог, Мокошь.',
      ],
      essayPrompts: [
        'Как природно-географический фактор повлиял на занятия и образ жизни восточных славян?',
        'Какую роль торговый путь «из варяг в греки» сыграл в образовании Древнерусского государства?',
      ],
    },
    examFocusEn: {
      examTarget: 'Russian History 5th Grade Curriculum',
      coreTakeaways: [
        'Locate Polyane, Ilmen Slavs, and Krivichi on historical maps.',
        'Trace the Varangian-Greek trade route through Novgorod and Kyiv.',
      ],
      essayPrompts: [
        'How did rivers serve as catalysts for early state unification?',
      ],
    },
    quizQuestions: [
      {
        id: 'hist-q-5-3',
        type: 'multiple-choice',
        questionRu: 'Какое восточнославянское племя проживало в среднем течении Днепра с центром в Киеве?',
        questionEn: 'Which East Slavic tribe inhabited the Middle Dnieper area with its center in Kyiv?',
        options: ['Поляне', 'Древляне', 'Вятичи', 'Кривичи'],
        correctAnswer: 'Поляне',
        explanationRu: 'Поляне жили в среднем Поднепровье. Согласно летописи, братья Кий, Щек, Хорив и сестра Лыбедь основали Киев в земле полян.',
        explanationEn: 'The Polyane lived in the Middle Dnieper where their legendary leaders founded Kyiv.',
      },
      {
        id: 'hist-q-5-4',
        type: 'multiple-choice',
        questionRu: 'Кто в языческом пантеоне восточных славян являлся богом грома, молний и покровителем княжеской дружины?',
        questionEn: 'Who in the Slavic pagan pantheon was the god of thunder and patron of warriors?',
        options: ['Перун', 'Велес', 'Стрибог', 'Мокошь'],
        correctAnswer: 'Перун',
        explanationRu: 'Перун — верховный бог грозы, молнии и войны, почитавшийся князем и его дружиной.',
        explanationEn: 'Perun was the thunder god and martial patron of the Slavic prince and druzhina.',
      },
    ],
  },

  // =========================================================================
  // GRADE 6 - TOPIC 1: Зарождение Древнерусского государства (862–980 гг.)
  // =========================================================================
  {
    id: 'hist-6-kievan-rus-rise',
    grade: 6,
    eraId: 'era-grade-6',
    order: 1,
    titleRu: 'Образование Древнерусского государства: Рюрик, Олег, Ольга и Святослав',
    titleEn: 'Birth of Early Rus: Rurik, Oleg, Olga & Svyatoslav',
    subtitleRu: 'Призвание варягов (862 г.), объединение Киева и Новгорода (882 г.), реформы Ольги и походы Святослава',
    subtitleEn: 'Calling of Varangians (862), Kyiv-Novgorod union (882), Olga’s reforms, and Svyatoslav’s wars',
    periodRu: '862 — 972 гг.',
    periodEn: '862 — 972 AD',
    icon: '⚔️',
    overviewRu:
      'В IX веке разрозненные союзы восточнославянских и финно-угорских племен встали на путь объединения. В 862 году согласно «Повести временных лет» в Новгород на княжение был призван варяжский князь Рюрик. Его преемник Олег Вещий в 882 году захватил Киев, объединив северные и южные русские земли. Княгиня Ольга после трагической гибели мужа Игоря провела первую государственную налоговую реформу (уроки и погосты), а её сын Святослав сокрушил Хазарский каганат.',
    overviewEn:
      'In 862 AD, according to the Primary Chronicle, the Varangian prince Rurik was invited to rule Novgorod. In 882, his successor Oleg conquered Kyiv, uniting Northern and Southern Rus. Princess Olga instituted state taxation (uroki & pogosti), and Svyatoslav defeated the Khazar Khaganate.',
    sections: [
      {
        headingRu: '1. Призвание варягов (862 г.) и норманнская теория',
        headingEn: '1. Invitation of the Varangians (862) & Norman Theory',
        contentRu:
          'Под 862 годом «Повесть временных лет» повествует: новгородские словене, кривичи, чудь и весь изгнали за море варягов, но между ними начались междоусобицы. Тогда послы заявили: «Земля наша велика и обильна, а наряда (порядка) в ней нет. Да пойдете княжить и володеть нами». На призыв откликнулся варяжский князь Рюрик, севший княжить в Новгороде (Ладоге), а его братья Синеус и Трувор — на Белоозере и в Изборске.\n\nВ исторической науке возник спор:\n• Норманнская теория (Г.З. Байер, Г.Ф. Миллер, XVIII в.): государство на Руси создано пришельцами-варягами (скандинавами).\n• Антинорманнская теория (М.В. Ломоносов): государство возникло в результате внутреннего социально-экономического развития славян, а варяги лишь служили наёмными военными вождями.',
        contentEn:
          'Primary Chronicle records that in 862 northern tribes invited Rurik to rule. The 18th-century debate between Normanists (Bayer, Miller) and Anti-Normanists (Lomonosov) centered on whether the state arose from Scandinavian agency or domestic Slavic social stratification.',
        bulletsRu: [
          'Современный научный консенсус: варяги дали правящую династию (Рюриковичи), но предпосылки государства (города, классы, торговля) созрели у славян задолго до 862 года.',
        ],
      },
      {
        headingRu: '2. Князь Олег Вещий и объединение Руси (882 г.)',
        headingEn: '2. Prince Oleg & Unification of Rus (882)',
        contentRu:
          'После смерти Рюрика власть перешла к его воеводе Олегу (опекуну малолетнего сына Рюрика — Игоря). В 882 году Олег во главе войска спустился по Днепру, хитростью выманил киевских князей Аскольда и Дира, убил их и провозгласил: «Да будет это мать городам русским!». Объединение Новгорода и Киева под единой властью ознаменовало рождение Древнерусского государства.\nВ 907 и 911 годах Олег совершил победоносные походы на Византию, прибив свой щит к вратам Царьграда, и заключил первый в истории Руси письменный международный договор о беспошлинной торговле русских купцов.',
        contentEn:
          'In 882 Oleg captured Kyiv, uniting the trade route under a single crown. In 907 and 911 he campaigned against Constantinople, pinning his shield to the city gates and signing a historic duty-free commercial treaty.',
      },
      {
        headingRu: '3. Восстание древлян (945 г.) и реформы княгини Ольги',
        headingEn: '3. Drevlyane Revolt (945) & Princess Olga’s Tax Reforms',
        contentRu:
          'Князь Игорь Рюрикович собирал дань путём полюдья — ежегодного зимнего объезда подвластных племён. Осенью 945 года Игорь собрал дань с древлян, но по наущению дружины вернулся за «добавкой». Восставшие древляне во главе с князем Малом перебили малый отряд Игоря и предали князя мучительной казни.\n\nВдова Игоря княгиня Ольга жестоко отомстила за гибель мужа, но как мудрая правительница осознала порочность старой системы и провела первую административно-налоговую реформу:\n• Уроки — строго фиксированный размер дани;\n• Погосты — специальные укреплённые пункты и центры для сбора дани княжескими тиунами.\nВ 957 году Ольга лично посетила Константинополь и приняла христианство под именем Елена.',
        contentEn:
          'In 945 Prince Igor was killed by the Drevlyane while attempting to collect double tribute (polyudye). His widow Princess Olga crushed the revolt and instituted Russia’s first fiscal code: fixed tribute amounts (uroki) collected at designated administrative stations (pogosti). In 957 she was baptized in Constantinople.',
      },
      {
        headingRu: '4. Походы князя Святослава Храброго (964–972 гг.)',
        headingEn: '4. Campaigns of Prince Svyatoslav (964–972)',
        contentRu:
          'Сын Игоря и Ольги, Святослав Игоревич, был выдающимся полководцем, презиравшим роскошь («аки барс ступая, ходил на врагов легко», предупреждая врагов: «Иду на вы!»).\nЕго завоевания:\n• 965 г. — полный разгром векового врага Руси — Хазарского каганата (взятие крепостей Саркел и Итиль);\n• Покорение волжских булгар и вятичей;\n• Походы в Дунайскую Болгарию и война с Византийской империей (оборона Доростола 971 г. против императора Иоанна Цимисхия).\nВозвращаясь в Киев в 972 году, Святослав попал в засаду печенегов у днепровских порогов и погиб. Печенежский хан Куря сделал из его черепа чашу, оковав её золотом.',
        contentEn:
          'Svyatoslav crushed the Khazar Khaganate in 965, subdued the Volga Bulgarians, campaigned on the Danube, and fought the Byzantine Empire at Dorostolon (971). He was ambushed and killed by Pechenegs at the Dnieper cataracts in 972.',
      },
    ],
    keyFigures: [
      {
        id: 'fig-rurik',
        nameRu: 'Рюрик',
        nameEn: 'Rurik',
        dates: 'ум. 879 г.',
        roleRu: 'Варяжский князь, основатель династии Рюриковичей',
        roleEn: 'Varangian prince, founder of the Rurikid Dynasty',
        avatar: '👑',
        grade: 6,
        keyActionsRu: [
          'Призван в 862 году на княжение ильменскими словенами и кривичами.',
          'Сел княжить в Ладоге / Новгороде, положив начало многовековой царствующей династии.',
        ],
        legacyRu: 'Символ начала русской государственности.',
        legacyEn: 'Symbolic patriarch of Russian statehood.',
      },
      {
        id: 'fig-olga',
        nameRu: 'Княгиня Ольга (Святая Елена)',
        nameEn: 'Princess Olga of Kyiv',
        dates: 'ок. 890 — 969 гг.',
        roleRu: 'Правительница Древнерусского государства, первая христианка во главе Руси',
        roleEn: 'Regent of Kievan Rus, first Christian ruler of Rus',
        avatar: '🕊️',
        grade: 6,
        keyActionsRu: [
          'Провела первую государственную реформу налогообложения (уроки и погосты).',
          'Приняла личное крещение в Константинополе в 957 году, став крёстной дочерью византийского императора Константина VII Багрянородного.',
        ],
        legacyRu: 'Канонизирована как святая равноапостольная; заложила фундамент христианской цивилизации на Руси.',
        legacyEn: 'Canonized as equal-to-the-apostles; paved the way for Christianization.',
      },
      {
        id: 'fig-svyatoslav',
        nameRu: 'Святослав Игоревич Храбрый',
        nameEn: 'Svyatoslav the Brave',
        dates: 'ок. 942 — 972 гг.',
        roleRu: 'Великий князь Киевский, великий полководец Древней Руси',
        roleEn: 'Grand Prince of Kyiv, warrior sovereign',
        avatar: '🗡️',
        grade: 6,
        keyActionsRu: [
          'Разгромил Хазарский каганат (965 г.), ликвидировав хазарскую дань со славянских племен.',
          'Перенёс военную ставку на Дунай (Переяславец-на-Дунае), расширив рубежи влияния Руси.',
        ],
        legacyRu: '«Александр Македонский нашей древней истории» (по выражению Н.М. Карамзина).',
        legacyEn: 'Celebrated by Karamzin as the Alexander the Great of early Russian history.',
      },
    ],
    timelineEvents: [
      {
        year: 862,
        dateRu: '862 г.',
        dateEn: '862 AD',
        titleRu: 'Призвание варягов (Рюрик, Синеус, Трувор)',
        titleEn: 'Invitation of Rurik & Founding of the Dynasty',
        descriptionRu: 'Приход варяжских князей на княжение в Новгород, Белоозеро и Изборск.',
        significanceRu: 'Официальная летописная дата зарождения русской государственности.',
        tags: ['Рюрик', 'Новгород', 'Государственность'],
      },
      {
        year: 882,
        dateRu: '882 г.',
        dateEn: '882 AD',
        titleRu: 'Объединение Новгорода и Киева князем Олегом',
        titleEn: 'Oleg’s Conquest of Kyiv & Unification',
        descriptionRu: 'Олег захватил Киев, убив Аскольда и Дира, и объявил Киев столицей Руси.',
        significanceRu: 'Возникновение единого Древнерусского государства (Киевская Русь).',
        tags: ['Олег', 'Киев', 'Столица'],
      },
      {
        year: 945,
        dateRu: '945 г.',
        dateEn: '945 AD',
        titleRu: 'Восстание древлян и гибель князя Игоря',
        titleEn: 'Drevlyane Uprising & Death of Prince Igor',
        descriptionRu: 'Игорь убит древлянами при попытке повторного сбора полюдья.',
        significanceRu: 'Привело к налоговой реформе княгини Ольги (уроки и погосты).',
        tags: ['Полюдье', 'Древляне', 'Реформа'],
      },
      {
        year: 965,
        dateRu: '965 г.',
        dateEn: '965 AD',
        titleRu: 'Разгром Хазарского каганата Святославом',
        titleEn: 'Svyatoslav’s Destruction of Khazaria',
        descriptionRu: 'Падение Саркела и столицы Хазарии Итиля под ударами дружины Святослава.',
        significanceRu: 'Ликвидация вековой кочевой угрозы и открытие волжского торгового пути.',
        tags: ['Хазария', 'Святослав', 'Победа'],
      },
    ],
    terms: [
      {
        termRu: 'Полюдье',
        termEn: 'Polyudye',
        definitionRu: 'Ежегодный объезд князем с дружиной подвластных племен для сбора дани и отправления суда, проходивший с осени по весну.',
        definitionEn: 'Annual circuit made by the prince and his retinue from November to April to extract tribute and dispense justice.',
        historicalContextRu: 'Существовало до восстания древлян 945 года, после чего было заменено повозом.',
        historicalContextEn: 'Replaced after Igor’s death by organized delivery stations (pogosti).',
        examTipRu: 'Обязательный термин ЕГЭ (Задание 19). Указывать: кто собирал, когда и чем заменено.',
      },
      {
        termRu: 'Уроки и погосты',
        termEn: 'Uroki and Pogosti',
        definitionRu: 'Уроки — точно установленный размер дани; погосты — специальные места сбора дани, учреждённые княгиней Ольгой.',
        definitionEn: 'Uroki: statutory tribute quotas; Pogosti: fortified regional collection administrative centers established by Princess Olga.',
        historicalContextRu: 'Первая административно-финансовая реформа в истории Древнерусского государства (946 г.).',
        historicalContextEn: 'First formal state fiscal reform in early Russian history.',
      },
      {
        termRu: 'Дружина',
        termEn: 'Druzhina (Princely Retinue)',
        definitionRu: 'Вооружённый отряд верных воинов при князе, составлявший ядро войска и аппарат управления.',
        definitionEn: 'Elite armed retinue serving the prince as military backbone and advisory council.',
        historicalContextRu: 'Делилась на «старшую дружину» (бояре, советники) и «младшую дружину» (отроки, гриди).',
        historicalContextEn: 'Stratified into senior boyar counselors and junior bodyguards (gridi/otroki).',
      },
    ],
    examFocusRu: {
      examTarget: 'ОГЭ / ЕГЭ (Задания 1, 2, 4, 18, 19)',
      coreTakeaways: [
        'Знать хронологию первых князей: Рюрик (862–879) → Олег (879–912) → Игорь (912–945) → Ольга (945–964) → Святослав (964–972).',
        'Понимать суть Норманнской теории и аргументы Ломоносова.',
        'Чётко формулировать термины: полюдье, повоз, уроки, погосты, вервь, дружина.',
      ],
      essayPrompts: [
        'Почему налоговая реформа княгини Ольги способствовала укреплению государственности на Руси?',
        'Оцените итоги внешней политики князя Святослава: была ли она дальновидной для интересов Руси?',
      ],
    },
    examFocusEn: {
      examTarget: 'Russian History Grade 6 (Standard State Curriculum)',
      coreTakeaways: [
        'Master the timeline of early Rurikid rulers.',
        'Understand historical importance of Olga’s administrative reforms.',
      ],
      essayPrompts: [
        'Evaluate Svyatoslav’s foreign policy achievements and shortcomings.',
      ],
    },
    quizQuestions: [
      {
        id: 'hist-q-6-1',
        type: 'multiple-choice',
        questionRu: 'В каком году князь Олег захватил Киев и объединил северные и южные русские земли?',
        questionEn: 'In which year did Prince Oleg capture Kyiv and unite northern and southern Rus?',
        options: ['862 г.', '882 г.', '945 г.', '988 г.'],
        correctAnswer: '882 г.',
        explanationRu: 'В 882 году князь Олег Вещий объединил Новгород и Киев, сделав Киев «матерью городов русских».',
        explanationEn: 'In 882 AD Oleg united Novgorod and Kyiv into a single realm.',
      },
      {
        id: 'hist-q-6-2',
        type: 'multiple-choice',
        questionRu: 'Какое новшество ввела княгиня Ольга в налоговую систему после гибели князя Игоря?',
        questionEn: 'What administrative fiscal reform did Princess Olga introduce after Igor’s death?',
        options: [
          'Уроки (точный размер дани) и погосты (места сбора)',
          'Подушную подать со всех крестьян',
          'Юрьев день и плату за пожилое',
          'Полную отмену сбора дани с племен',
        ],
        correctAnswer: 'Уроки (точный размер дани) и погосты (места сбора)',
        explanationRu: 'Ольга упорядочила сбор дани: установила фиксированные уроки и определила постоянные пункты сбора — погосты.',
        explanationEn: 'Princess Olga replaced arbitrary tribute with fixed amounts (uroki) collected at administrative centers (pogosti).',
      },
    ],
  },

  // =========================================================================
  // GRADE 6 - TOPIC 2: Расцвет Руси: Владимир Святой и Ярослав Мудрый
  // =========================================================================
  {
    id: 'hist-6-vladimir-christianization',
    grade: 6,
    eraId: 'era-grade-6',
    order: 2,
    titleRu: 'Расцвет Древнерусского государства: Крещение Руси и эпоха Ярослава Мудрого',
    titleEn: 'Golden Age of Rus: Christianization & Yaroslav the Wise',
    subtitleRu: 'Крещение Руси (988 г.), создание первого свода законов «Русская Правда» и династические браки',
    subtitleEn: 'Christianization (988), the first codified law code Russkaya Pravda, and international diplomacy',
    periodRu: '980 — 1054 гг.',
    periodEn: '980 — 1054 AD',
    icon: '⛪',
    overviewRu:
      'Эпоха князей Владимира Святославича (Красно Солнышко) и его сына Ярослава Мудрого стала зенитом могущества и культурного расцвета Древней Руси. В 988 году Русь приняла христианство из Византии, войдя в семью ведущих европейских христианских держав. При Ярославе Мудром был разбит вековой враг — печенеги, воздвигнуты величественные Софийские соборы в Киеве и Новгороде, и создан первый письменный свод древнерусского права — «Русская Правда».',
    overviewEn:
      'Under Grand Princes Vladimir the Great and Yaroslav the Wise, Kievan Rus reached its zenith. In 988 Rus accepted Christianity from Byzantium. Yaroslav codified Russkaya Pravda, crushed the Pecheneg nomads (1036), built St. Sophia Cathedral, and arranged royal marriages with royal houses across France, Norway, and Hungary.',
    sections: [
      {
        headingRu: '1. Князь Владимир I и Крещение Руси (988 г.)',
        headingEn: '1. Prince Vladimir & Christianization of Rus (988)',
        contentRu:
          'Владимир Святославич пришёл к власти после первой междоусобицы со своими братьями Ярополком и Олегом. Первоначально он попытался объединить языческие племена, создав в Киеве капище с пантеоном из шести богов во главе с Перуном. Однако языческая реформа не сплотила разрозненные земли.\n\nВ 988 году после осады византийского Корсуня (Херсонеса) в Крыму Владимир крестился сам и крестил Русь в водах Днепра и Почайны.\n\nИсторическое значение принятия христианства:\n• Международное: Русь перестала быть «варварской» страной и вошла в семью цивилизованных европейских государств на равных правах с Византийской империей;\n• Внутриполитическое: единая вера укрепила княжескую власть («один Бог на небе — один князь на земле»);\n• Культурное: появление славянской письменности (кириллицы), каменного зодчества (Десятинная церковь в Киеве), иконописи, летописания и школ.',
        contentEn:
          'In 988 Prince Vladimir accepted Eastern Orthodox Christianity after capturing Byzantine Chersonesus. Christianization integrated Rus into European high culture, stimulated literacy via Cyrillic script, and inaugurated stone architecture and monumental art.',
        bulletsRu: [
          'Десятинная церковь (Успения Богородицы, 996 г.): первый каменный храм Древней Руси, на содержание которого князь отдавал десятую часть своих доходов.',
        ],
      },
      {
        headingRu: '2. Правление Ярослава Мудрого (1019–1054 гг.)',
        headingEn: '2. Reign of Yaroslav the Wise (1019–1054)',
        contentRu:
          'После смерти Владимира вспыхнула жестокая усобица: пасынок Владимира Святополк Окаянный убил своих братьев Бориса и Глеба (первых русских святых страстотерпцев). Ярослав, княживший в Новгороде, разбил Святополка на реке Альте (1019 г.) и утвердился в Киеве.\n\nДостижения Ярослава Мудрого:\n• В 1036 году наголову разгромил печенегов под Киевом, навсегда обезопасив южные рубежи от их набегов. На месте битвы был заложен грандиозный Софийский собор;\n• В 1051 году без санкции византийского патриарха впервые назначил русским митрополитом уроженца Руси Илариона (автора шедевра «Слово о законе и благодати»);\n• Развернул широкую династическую политику («тесть Европы»): дочь Анна стала королевой Франции, Елизавета — королевой Норвегии, Анастасия — королевой Венгрии.',
        contentEn:
          'Yaroslav established order following fraternal wars. He defeated the Pechenegs in 1036, erected St. Sophia Cathedral, appointed the first native Metropolitan Ilarion (1051), and married his daughters to kings of France, Norway, and Hungary.',
      },
      {
        headingRu: '3. «Русская Правда» — первый свод законов Руси',
        headingEn: '3. Russkaya Pravda — First Legal Code',
        contentRu:
          'При Ярославе Мудром была записана «Правда Ярослава» (древнейшая часть «Русской Правды», ок. 1016 г.):\n• Ограничила кровную месть кругом ближайших родственников (отец, сын, брат), а в случае отсутствия мстителя ввела денежный штраф — виру;\n• Защищала честь и личную неприкосновенность дружинников и свободных людей;\n• Позднее сыновья Ярослава (Изяслав, Всеволод, Святослав) дополнили свод «Правдой Ярославичей» (ок. 1072 г.), которая полностью запретила кровную месть, заменив её выкупом в княжескую казну.',
        contentEn:
          'The Russkaya Pravda restricted blood feuds to immediate relatives (later abolished entirely under the Pravda of Yaroslav’s Sons in favor of state fines called vira) and codified the social hierarchy.',
      },
    ],
    keyFigures: [
      {
        id: 'fig-vladimir',
        nameRu: 'Владимир I Святославич (Красное Солнышко)',
        nameEn: 'Vladimir the Great',
        dates: 'ок. 958 — 1015 гг.',
        roleRu: 'Креститель Руси, святой равноапостольный великий князь Киевский',
        roleEn: 'Grand Prince of Kyiv, Christianizer of Rus',
        avatar: '☀️',
        grade: 6,
        keyActionsRu: [
          'Провёл крещение Руси в 988 году, определив цивилизационный выбор страны на тысячелетие вперёд.',
          'Создал систему оборонительных валов и крепостей-застав по рекам Десна, Остёр, Трубеж против печенегов.',
        ],
        legacyRu: 'Национальный герой былин, заложивший духовные и культурные основы русской цивилизации.',
        legacyEn: 'Formative cultural founder who anchored Rus in Eastern Christian civilization.',
      },
      {
        id: 'fig-yaroslav',
        nameRu: 'Ярослав Мудрый',
        nameEn: 'Yaroslav the Wise',
        dates: 'ок. 978 — 1054 гг.',
        roleRu: 'Великий князь Киевский, создатель «Русской Правды»',
        roleEn: 'Grand Prince of Kyiv, Lawgiver of Rus',
        avatar: '🏛️',
        grade: 6,
        keyActionsRu: [
          'Создал первый свод законов Руси — «Русскую Правду».',
          'Построил Софийские соборы в Киеве и Новгороде, Золотые ворота в Киеве, основал крупнейшую библиотеку.',
          'Разгромил печенегов (1036 г.) и укрепил международный авторитет Руси через династические браки.',
        ],
        legacyRu: 'Один из самых просвещённых правителей Средневековой Европы.',
        legacyEn: 'One of the most literate and diplomatic monarchs of medieval Europe.',
      },
    ],
    timelineEvents: [
      {
        year: 988,
        dateRu: '988 г.',
        dateEn: '988 AD',
        titleRu: 'Крещение Руси князем Владимиром',
        titleEn: 'Christianization of Rus',
        descriptionRu: 'Принятие православного христианства в качестве государственной религии Руси.',
        significanceRu: 'Величайший цивилизационный выбор, определивший развитие русской культуры, права и государственности.',
        tags: ['Крещение Руси', 'Владимир', 'Православие'],
      },
      {
        year: 1016,
        dateRu: 'ок. 1016 г.',
        dateEn: 'ca. 1016 AD',
        titleRu: 'Создание «Русской Правды» Ярослава Мудрого',
        titleEn: 'Compilation of Russkaya Pravda',
        descriptionRu: 'Первая письменная фиксация правовых норм древнерусского общества.',
        significanceRu: 'Ограничение кровной мести и установление судебных штрафов (вира).',
        tags: ['Законы', 'Русская Правда', 'Ярослав'],
      },
      {
        year: 1036,
        dateRu: '1036 г.',
        dateEn: '1036 AD',
        titleRu: 'Разгром печенегов под Киевом',
        titleEn: 'Defeat of Pechenegs at Kyiv',
        descriptionRu: 'Решающая победа Ярослава Мудрого, навсегда устранившая печенежскую угрозу.',
        significanceRu: 'В честь победы был заложен всемирно известный Софийский собор в Киеве.',
        tags: ['Печенеги', 'Битва', 'София Киевская'],
      },
    ],
    terms: [
      {
        termRu: 'Вира',
        termEn: 'Vira',
        definitionRu: 'Денежный штраф в пользу князя за убийство свободного человека в Древнерусском государстве по «Русской Правде».',
        definitionEn: 'A monetary wergild fine paid to the grand prince for murder under the Russkaya Pravda legal code.',
        historicalContextRu: 'За убийство княжеского огнищанина или тиуна вира составляла 80 гривен, за рядового свободного человека — 40 гривен.',
        historicalContextEn: 'Graduated according to victim status: 80 grivnas for princely officials, 40 for free men.',
        examTipRu: 'Для ЕГЭ: чётко знать, что вира шла в казну князя, а родственники убитого получали головничество.',
      },
      {
        termRu: 'Закуп и рядович',
        termEn: 'Zakup and Ryadovich',
        definitionRu: 'Категории зависимого населения по «Русской Правде»: закуп — человек, взявший купу (ссуду/долг) и отрабатывающий её; рядович — человек, заключивший ряд (договор).',
        definitionEn: 'Dependent social classes in Rus: zakup worked off a debt (kupa); ryadovich was bonded by contractual agreement (ryad).',
        historicalContextRu: 'Если закуп пытался бежать от господина, он превращался в полного холопа (раба).',
        historicalContextEn: 'Fleeing without repaying forfeited personal freedom, reducing the debtor to a slave (kholop).',
      },
      {
        termRu: 'Холоп',
        termEn: 'Kholop',
        definitionRu: 'Лицо, находившееся в полной собственности господина (раб) в Древней Руси.',
        definitionEn: 'Bonded chattel slave with no legal rights in early Russian law.',
        historicalContextRu: 'Источниками холопства были плен, продажа за долги, брак с холопом.',
        historicalContextEn: 'Became unfree via war captivity, debt default, or marriage to an enslaved person.',
      },
    ],
    examFocusRu: {
      examTarget: 'ОГЭ / ЕГЭ (Задания 1, 3, 17, 18, 19)',
      coreTakeaways: [
        'Понимать причины и последствия принятия христианства в 988 году.',
        'Знать категории населения по «Русской Правде»: смерды, закупы, рядовичи, холопы, челядь, огнищане.',
        'Уметь связывать Софийский собор в Киеве с победой над печенегами в 1036 году.',
      ],
      essayPrompts: [
        'Какие аргументы подтверждают, что принятие христианства было закономерным шагом для Древнерусского государства?',
        'Как «Русская Правда» отражала социальное расслоение древнерусского общества?',
      ],
    },
    examFocusEn: {
      examTarget: 'Grade 6 Russian History',
      coreTakeaways: [
        'Identify consequences of 988 Christianization.',
        'Distinguish between free peasants (smerdy), indentured debtors (zakupy), and slaves (kholopy).',
      ],
      essayPrompts: [
        'Why was Yaroslav called the "Father-in-law of Europe"?',
      ],
    },
    quizQuestions: [
      {
        id: 'hist-q-6-3',
        type: 'multiple-choice',
        questionRu: 'Какой храм был заложен князем Ярославом Мудрым на месте разгрома печенегов в 1036 году?',
        questionEn: 'Which cathedral was founded by Yaroslav the Wise at the site of the 1036 Pecheneg defeat?',
        options: ['Софийский собор в Киеве', 'Десятинная церковь', 'Успенский собор во Владимире', 'Покров на Нерли'],
        correctAnswer: 'Софийский собор в Киеве',
        explanationRu: 'Софийский собор в Киеве был воздвигнут в ознаменование победы над печенегами на месте решающей битвы 1036 года.',
        explanationEn: 'Saint Sophia Cathedral in Kyiv was commissioned by Yaroslav on the exact site of the historic victory over the Pechenegs.',
      },
      {
        id: 'hist-q-6-4',
        type: 'multiple-choice',
        questionRu: 'Как назывался денежный судебный штраф за убийство свободного человека по «Русской Правде»?',
        questionEn: 'What was the legal term for the monetary fine for murder in Russkaya Pravda?',
        options: ['Вира', 'Полюдье', 'Пожилое', 'Барщина'],
        correctAnswer: 'Вира',
        explanationRu: 'Вира — установленный княжеский штраф за убийство, заменивший обычай кровной мести.',
        explanationEn: 'Vira was the statutory monetary fine paid to the grand prince for manslaughter or murder.',
      },
    ],
  },
];
