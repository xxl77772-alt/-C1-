import { HistoryTopic } from '../../types';

export const TOPICS_GRADE_8: HistoryTopic[] = [
  // =========================================================================
  // GRADE 8 - TOPIC 1: Эпоха Петра I: модернизация и рождение Российской империи
  // =========================================================================
  {
    id: 'hist-8-peter-the-great',
    grade: 8,
    eraId: 'era-grade-8',
    order: 1,
    titleRu: 'Эпоха Петра I Великого: реформы, Северная война и рождение Российской империи',
    titleEn: 'Peter the Great: Reforms, Great Northern War & Birth of the Russian Empire',
    subtitleRu: 'Основание Петербурга (1703 г.), Полтавская битва (1709 г.), Табель о рангах и Ништадтский мир (1721 г.)',
    subtitleEn: 'Founding of St. Petersburg (1703), Poltava (1709), Table of Ranks, and Treaty of Nystad (1721)',
    periodRu: '1689 — 1725 гг.',
    periodEn: '1689 — 1725 AD',
    icon: '⚓',
    overviewRu:
      'Правление Петра I Алексеевича радикально изменило облик и статус России. В ходе изнурительной 21-летней Северной войны (1700–1721 гг.) против Швеции Карла XII Россия завоевала выход к Балтийскому морю, построила Балтийский флот и основала новую блистательную столицу — Санкт-Петербург (1703 г.). После Полтавской битвы (1709 г.) и победоносного Ништадтского мира (1721 г.) Сенат поднёс Петру титул Отца Отечества и Императора Всероссийского, а государство стало Российской империей. Петровские реформы охватили все сферы: учреждены Сенат, Синод, коллегии, введена Табель о рангах (1722 г.), подушная подать, рекрутчина и Академия наук.',
    overviewEn:
      'Peter the Great transformed Muscovy into the Russian Empire through relentless modernization. Defeating Charles XII of Sweden in the Great Northern War (1700–1721), culminating at Poltava (1709), Russia acquired the Baltic coastline and built St. Petersburg (1703). With the 1721 Treaty of Nystad, Peter assumed the title Emperor. His reforms established the Senate, Holy Synod, collegiate ministries, Table of Ranks, and regular conscription.',
    sections: [
      {
        headingRu: '1. Великое посольство (1697–1698 гг.) и замысел реформ',
        headingEn: '1. The Grand Embassy (1697–1698) & Modernization Blueprint',
        contentRu:
          'После взятия турецкой крепости Азов (1696 г.) и создания Азовского флота молодой царь организовал Великое посольство в Западную Европу (Голландию, Англию, Австрию). Петр ехал инкогнито под именем урядника Петра Михайлова. Царь лично работал плотником на верфях Саардама и Амстердама, изучал артиллерию, навигацию и анатомию, нанял сотни европейских инженеров и офицеров.\nПосольство решило две задачи:\n• Геополитическую: союзники против Турции не нашлись, зато сложился Северный союз (Россия, Дания, Саксония/Польша) для борьбы со Швецией за выход к Балтийскому морю;\n• Цивилизационную: взят курс на форсированную вестернизацию быта (сбривание бород, европейское платье, новое летоисчисление с 1 января 1700 года).',
        contentEn:
          'The Grand Embassy exposed Peter firsthand to Dutch shipbuilding and English navigation. He pivoted foreign policy toward the Baltic, establishing the Northern Alliance against Sweden, and initiated cultural westernization.',
      },
      {
        headingRu: '2. Северная война (1700–1721 гг.) и морские триумфы',
        headingEn: '2. The Great Northern War (1700–1721)',
        contentRu:
          'Война началась с катастрофического поражения русских войск под Нарвой (1700 г.) от 18-летнего шведского короля Карла XII. Петр сделал верные выводы: переплавил церковные колокола в пушки, ввёл рекрутскую повинность и создал регулярную армию.\n\nХроника триумфа:\n• 16 (27) мая 1703 г. — на Заячьем острове в устье Невы заложена Петропавловская крепость — рождение Санкт-Петербурга;\n• 28 сентября 1708 г. — битва при Лесной («матерь Полтавской баталии»): разгром шведского корпуса Левенгаупта и перехват обоза;\n• 27 июня 1709 г. — генеральная Полтавская битва: наголову разбита непобедимая армия Карла XII, Карл и гетман-изменник Мазепа бежали в Турцию;\n• 27 июля 1714 г. — мыс Гангут: первая великая морская победа русского галерного флота (Ф. Апраксин);\n• 27 июля 1720 г. — остров Гренгам: повторный разгром шведской эскадры.\n\n30 августа 1721 года подписан Ништадтский мир: Россия получила Лифляндию, Эстляндию, Ингерманландию (с Петербургом) и часть Карелии с Выборгом.',
        contentEn:
          'After initial defeat at Narva (1700), Peter modernized the army. Key turning points: Lesnaya (1708), the crushing victory at Poltava (1709), and naval triumphs at Gangut (1714) and Grengam (1720). The 1721 Treaty of Nystad secured the Baltic seaboard.',
      },
      {
        headingRu: '3. Государственные реформы Петра I',
        headingEn: '3. Petrine Administrative & Social Reforms',
        contentRu:
          'Петр выстроил регулярное абсолютистское государство («регулярное государство»):\n• 1711 г. — учреждение Правительствующего Сената (высший законодательный, распорядительный и судебный орган);\n• 1718–1721 гг. — замена неэффективных приказов 12 коллегиями (Иностранных дел, Военная, Адмиралтейская, Берг-коллегия, Мануфактур-коллегия и др.);\n• 1721 г. — ликвидация патриаршества и создание Святейшего Синода во главе с гражданским чиновником — обер-прокурором («церковь подчинена государству»);\n• 1714 г. — Указ о единонаследии: слияние вотчины и поместья в единый статус «недвижимое имение», запрет дробления дворянских земель между сыновьями;\n• 1722 г. — Табель о рангах: деление военной, гражданской и придворной службы на 14 классов. Чиновник 14-го класса (коллежский регистратор) и офицер получали личное или потомственное дворянство, что открыло дорогу талантам из низших сословий;\n• Финансовая реформа: введение подушной подати (вместо подворного налога) после переписи мужского населения («ревизские сказки»).',
        contentEn:
          'Peter instituted the Senate (1711), Collegia (ministries), Holy Synod (subordinating the church to the state under an Ober-Procurator), the 1714 Single Inheritance Edict, the 1722 Table of Ranks (14 civil and military ranks rewarding merit), and the poll tax based on census revisions.',
      },
    ],
    keyFigures: [
      {
        id: 'fig-peter-i',
        nameRu: 'Пётр I Алексеевич Великий',
        nameEn: 'Peter I the Great',
        dates: '1672 — 1725 гг.',
        roleRu: 'Первый Император Всероссийский, царь-реформатор',
        roleEn: 'First Emperor of All Russia, modernizing monarch',
        avatar: '⚓',
        grade: 8,
        keyActionsRu: [
          'Основал Санкт-Петербург (1703 г.) и создал военно-морской флот России.',
          'Победил в Северной войне (Полтава 1709 г.) и провозгласил Российскую империю (1721 г.).',
          'Создал Сенат, Синод, коллегии, Табель о рангах, Академию наук.',
        ],
        legacyRu: '«Россию поднял на дыбы» (А.С. Пушкин); превратил страну в первоклассную европейскую сверхдержаву.',
        legacyEn: 'Transformed Russia into a premier European imperial great power.',
      },
      {
        id: 'fig-menshikov',
        nameRu: 'Александр Данилович Меншиков',
        nameEn: 'Alexander Danilovich Menshikov',
        dates: '1673 — 1729 гг.',
        roleRu: 'Светлейший князь, генералиссимус, первый губернатор Санкт-Петербурга',
        roleEn: 'Generalissimo, First Governor of Saint Petersburg',
        avatar: '⭐',
        grade: 8,
        keyActionsRu: [
          'Ближайший сподвижник Петра Великого («полудержавный властелин»).',
          'Командовал конницей в Полтавской битве, пленив остатки шведской армии у Переволочны.',
          'Фактический правитель России в царствование Екатерины I.',
        ],
        legacyRu: 'Олицетворение «птенцов гнезда Петрова», поднявшихся из низов благодаря энергии и таланту.',
        legacyEn: 'A prime example of social mobility under the meritocratic Table of Ranks.',
      },
    ],
    timelineEvents: [
      {
        year: 1703,
        dateRu: '16 (27) мая 1703 г.',
        dateEn: 'May 27, 1703 AD',
        titleRu: 'Основание Санкт-Петербурга',
        titleEn: 'Founding of Saint Petersburg',
        descriptionRu: 'Закладка Петропавловской крепости на Заячьем острове в дельте Невы.',
        significanceRu: 'Основание будущей столицы Российской империи и «окна в Европу».',
        tags: ['Петербург', 'Петропавловская крепость', 'Столица'],
      },
      {
        year: 1709,
        dateRu: '27 июня 1709 г.',
        dateEn: 'June 27, 1709 AD',
        titleRu: 'Полтавская битва',
        titleEn: 'Battle of Poltava',
        descriptionRu: 'Генеральное сражение Северной войны: полный разгром шведской армии Карла XII.',
        significanceRu: 'Коренной перелом в войне, утвердивший военную гегемонию России на Балтике.',
        tags: ['Полтава', 'Петр I', 'Карл XII', 'Триумф'],
      },
      {
        year: 1721,
        dateRu: '30 августа 1721 г.',
        dateEn: 'August 30, 1721 AD',
        titleRu: 'Ништадтский мир и провозглашение Российской империи',
        titleEn: 'Treaty of Nystad & Proclamation of the Empire',
        descriptionRu: 'Победное окончание Северной войны. Петр I принял титул Императора Всероссийского.',
        significanceRu: 'Официальное превращение Русского государства в Российскую империю.',
        tags: ['Империя', 'Ништадтский мир', 'Балтика'],
      },
      {
        year: 1722,
        dateRu: '1722 г.',
        dateEn: '1722 AD',
        titleRu: 'Издание Табели о рангах',
        titleEn: 'Enactment of the Table of Ranks',
        descriptionRu: 'Закон о порядке государственной и военной службы, разделивший чины на 14 классов.',
        significanceRu: 'Утверждение принципа выслуги и личных способностей вместо родовой знатности.',
        tags: ['Табель о рангах', 'Дворянство', 'Служба'],
      },
    ],
    terms: [
      {
        termRu: 'Табель о рангах (1722 г.)',
        termEn: 'Table of Ranks (1722)',
        definitionRu: 'Закон Петра I, устанавливавший систему из 14 чиновничьих и военных классов (от XIV — прапорщик/коллежский регистратор до I — канцлер/генерал-фельдмаршал) и дававший возможность получения дворянства за выслугу.',
        definitionEn: 'Formal hierarchy of 14 military, civil, and court ranks instituted by Peter the Great where advancement was earned through state service rather than pedigree.',
        historicalContextRu: 'Служила стержнем государственного аппарата Российской империи до ноября 1917 года.',
        historicalContextEn: 'Formed the institutional spine of the Russian Imperial bureaucracy until 1917.',
        examTipRu: 'Обязательно знать для ЕГЭ: заменила местничество, продвигала на основе личной выслуги, а не знатности рода.',
      },
      {
        termRu: 'Рекрутская повинность',
        termEn: 'Recruitment Conscription',
        definitionRu: 'Способ комплектования регулярной армии в России в 1705–1874 гг., при котором податные сословия (крестьяне, мещане) выставляли определённое число рекрутов на пожизненную службу.',
        definitionEn: 'Universal military levy requiring peasant and urban communes to furnish lifelong conscripts, creating a massive standing professional army.',
        historicalContextRu: 'Введена Петром I в 1705 году, заменена всеобщей воинской повинностью при Александре II в 1874 году.',
        historicalContextEn: 'Replaced in 1874 by universal conscription under Alexander II.',
      },
      {
        termRu: 'Подушная подать',
        termEn: 'Poll Tax (Podushnaya Podat)',
        definitionRu: 'Основной прямой налог в Российской империи XVIII–XIX вв., взимавшийся в одинаковом размере с каждой мужской «души» податного сословия независимо от возраста.',
        definitionEn: 'Direct head tax levied on every male soul of the taxed classes, regardless of age, based on census revisions.',
        historicalContextRu: 'Введена Петром I вместо подворного обложения, отменена в 1880-е годы Н.Х. Бунге при Александре III.',
        historicalContextEn: 'Abolished in the 1880s by Finance Minister Bunge under Alexander III.',
      },
      {
        termRu: 'Коллегии',
        termEn: 'Collegia (Colleges)',
        definitionRu: 'Отраслевые органы центрального управления в России XVIII века, созданные Петром I взамен приказов; решения принимались коллегиально (большинством голосов).',
        definitionEn: 'Executive ministerial boards introduced by Peter I in 1718 based on Swedish collegial consensus models.',
        historicalContextRu: 'Заменены министерствами с единоличной властью министра в 1802 году при Александре I.',
        historicalContextEn: 'Replaced in 1802 by Alexander I’s ministries.',
      },
    ],
    examFocusRu: {
      examTarget: 'ОГЭ / ЕГЭ (Задания 1-5, 13, 14, 18, 19, 21)',
      coreTakeaways: [
        'Знать хронологию Северной войны: Нарва (1700) → основание Петербурга (1703) → Лесная (1708) → Полтава (1709) → Прутский поход (1711) → Гангут (1714) → Гренгам (1720) → Ништадтский мир (1721).',
        'Уметь анализировать модернизацию: Сенат, Синод, коллегии, Табель о рангах, рекрутчина, подушная подать.',
        'Понимать цену реформ: усиление крепостничества (приписные и посессионные крестьяне) и колоссальное напряжение народных сил.',
      ],
      essayPrompts: [
        'Каковы были главные итоги и историческая цена преобразований Петра Великого для русского народа?',
        'Почему Полтавскую битву 1709 года называют коренным переломом не только Северной войны, но и всей европейской геополитики?',
      ],
    },
    examFocusEn: {
      examTarget: 'Grade 8 Russian History Syllabus',
      coreTakeaways: [
        'Master the date 1721 for Imperial proclamation.',
        'Analyze institutional mechanisms of the Petrine autocracy.',
      ],
      essayPrompts: [
        'Examine how the Table of Ranks restructured social hierarchy in 18th-century Russia.',
      ],
    },
    quizQuestions: [
      {
        id: 'hist-q-8-1',
        type: 'multiple-choice',
        questionRu: 'В каком году в устье Невы Петром I был заложен город Санкт-Петербург?',
        questionEn: 'In which year did Peter the Great found the city of Saint Petersburg?',
        options: ['1703 г.', '1700 г.', '1709 г.', '1721 г.'],
        correctAnswer: '1703 г.',
        explanationRu: 'Санкт-Петербург был основан 16 (27) мая 1703 года закладкой Петропавловской крепости.',
        explanationEn: 'Saint Petersburg was founded on May 27, 1703.',
      },
      {
        id: 'hist-q-8-2',
        type: 'multiple-choice',
        questionRu: 'Какой мирный договор 1721 года завершил Северную войну и закрепил за Россией выход к Балтийскому морю?',
        questionEn: 'Which 1721 peace treaty ended the Great Northern War, granting Russia the Baltic coast?',
        options: ['Ништадтский мир', 'Плюсское перемирие', 'Столбовский мир', 'Ясский мир'],
        correctAnswer: 'Ништадтский мир',
        explanationRu: 'Ништадтский мир был подписан 30 августа 1721 года, после чего Россия стала империей.',
        explanationEn: 'The Treaty of Nystad was signed on August 30, 1721.',
      },
    ],
  },

  // =========================================================================
  // GRADE 8 - TOPIC 2: Эпоха дворцовых переворотов (1725–1762 гг.)
  // =========================================================================
  {
    id: 'hist-8-palace-revolutions',
    grade: 8,
    eraId: 'era-grade-8',
    order: 2,
    titleRu: 'Эпоха дворцовых переворотов (1725–1762 гг.): от Екатерины I до Петра III',
    titleEn: 'Era of Palace Revolutions (1725–1762): Catherine I to Peter III',
    subtitleRu: 'Гвардия как политическая сила, «кондиции» Анны Иоанновны, правление Елизаветы и рождение Московского университета (1755 г.)',
    subtitleEn: 'The Guards as kingmakers, Anna’s conditions, Elizabeth’s golden reign, and Moscow University (1755)',
    periodRu: '1725 — 1762 гг.',
    periodEn: '1725 — 1762 AD',
    icon: '👑',
    overviewRu:
      'После смерти Петра Великого, не успевшего назначить преемника по собственному Указу о престолонаследии 1722 года («Отдайте всё...»), в России наступила эпоха дворцовых переворотов (термин В.О. Ключевского). За 37 лет на троне сменилось шесть монархов. Решающей политической силой стали гвардейские полки (Преображенский и Семёновский). Несмотря на политическую нестабильность, этот период ознаменовался расширением дворянских привилегий (Манифест о вольности дворянства 1762 г.), открытием Московского университета (1755 г., М.В. Ломоносов и И.И. Шувалов) и победами русского оружия в Семилетней войне (взятие Берлина 1760 г.).',
    overviewEn:
      'Between 1725 and 1762, Russia experienced six monarchical changes engineered by the Imperial Guards. Highlights included the supreme privy council’s failed attempt to limit Anna’s autocracy via "Conditions" (1730), Elizabeth Petrovna’s reign, founding of Moscow University by Lomonosov (1755), Russia’s entry into Berlin during the Seven Years’ War (1760), and Peter III’s 1762 Manifesto Freeing the Nobility.',
    sections: [
      {
        headingRu: '1. Причины и череда монархов на троне',
        headingEn: '1. Causes & Succession of Monarchs',
        contentRu:
          'Причины переворотов:\n• Указ Петра I о наследии престола (1722 г.): монарх получил право единолично назначать любого преемника по своей воле, но сам Петр скончался, не оставив завещания;\n• Пресечение прямой мужской линии династии Романовых;\n• Превращение гвардейских полков в корпоративную силу, определявшую, кому сидеть на троне.\n\nХронология правителей:\n1. Екатерина I (1725–1727 гг.) — вдова Петра I, возведена на трон А.Д. Меншиковым и гвардией. Создан Верховный тайный совет;\n2. Пётр II (1727–1730 гг.) — 12-летний внук Петра I; ссылка Меншикова в Берёзов, возвышение Долгоруковых;\n3. Анна Иоанновна (1730–1740 гг.) — герцогиня Курляндская, племянница Петра I. Верховники предложили ей «Кондиции» (ограничение самодержавия), но Анна разорвала кондиции при поддержке дворян и гвардии. Эпоха «бироновщины» (засилье немцев);\n4. Иван VI Антонович (1740–1741 гг.) — младенец-император при регентстве матери Анны Леопольдовны, свергнут Елизаветой;\n5. Елизавета Петровна (1741–1761 гг.) — дочь Петра I, пришла к власти с помощью гренадеров Преображенского полка («Дщерь Петрова»). Провозгласила возвращение к петровским порядкам;\n6. Пётр III (1761–1762 гг.) — внук Петра I, правил 186 дней. Заключил сепаратный мир с Пруссией, издал Манифест о вольности дворянства (1762 г.), свергнут женой Екатериной II.',
        contentEn:
          'Caused by the 1722 succession decree and lack of a designated heir, six monarchs held power: Catherine I, Peter II, Anna (who tore up the constitutional "Conditions" in 1730), the infant Ivan VI, Elizabeth (1741–1761), and Peter III (1762).',
      },
      {
        headingRu: '2. Расцвет культуры при Елизавете: М.В. Ломоносов и Московский университет',
        headingEn: '2. Cultural Flourishing: Lomonosov & Moscow University (1755)',
        contentRu:
          '20-летнее царствование Елизаветы Петровны принесло стране стабильность и культурный расцвет:\n• Отмена внутренних таможенных пошлин (1754 г., по инициативе П.И. Шувалова) — колоссальный стимул для формирования единого всероссийского рынка;\n• 25 января 1755 г. (Татьянин день) — основание Московского университета по проекту великого учёного-энциклопедиста Михаила Васильевича Ломоносова и фаворита императрицы Ивана Ивановича Шувалова;\n• Расцвет русского барокко: гениальный архитектор Франческо Бартоломео Растрелли воздвиг Зимний дворец в Петербурге, Большой Петергофский дворец, Екатерининский дворец в Царском Селе и Смольный собор;\n• Создание первого русского государственного профессионального театра в Ярославле (Фёдор Волков, 1750 г.).',
        contentEn:
          'Elizabeth’s reign saw the elimination of internal trade tariffs (1754), founding of Moscow University on Tatiana Day (Jan 25, 1755) by polymath Mikhail Lomonosov, creation of Rastrelli’s baroque masterpieces (Winter Palace, Peterhof), and Fyodor Volkov’s national theater.',
      },
      {
        headingRu: '3. Семилетняя война (1756–1763 гг.) и Манифест 1762 года',
        headingEn: '3. Seven Years’ War (1756–1763) & 1762 Nobility Manifesto',
        contentRu:
          'В Семилетней войне Россия в коалиции с Австрией и Францией противостояла сильнейшей армии Европы — Пруссии короля Фридриха II Великого. Русские полководцы (С. Апраксин, П. Салтыков) разгромили пруссаков при Гросс-Егерсдорфе (1757 г.) и Кунерсдорфе (1759 г.). 28 сентября 1760 года русский корпус графа Тотлебена вошёл в Берлин. Пруссия стояла на краю гибели («чудо Бранденбургского дома»).\n\nОднако смерть Елизаветы в декабре 1761 года спасла Фридриха: вступивший на престол Пётр III, поклонник прусского короля, немедленно прекратил войну и вернул Пруссии все завоёванные земли без компенсаций.\n\n18 февраля 1762 года Пётр III издал важнейший Манифест о вольности дворянства: дворяне освобождались от обязательной пожизненной государственной и военной службы, получив право служить по желанию или жить в своих поместьях.',
        contentEn:
          'Russia defeated Frederick the Great at Gross-Jagersdorf and Kunersdorf, capturing Berlin in 1760. Upon Elizabeth’s death, Peter III withdrew from the war and returned all conquests. Domestically, Peter III issued the landmark 1762 Manifesto on the Freedom of the Nobility, emancipating the gentry from mandatory state service.',
      },
    ],
    keyFigures: [
      {
        id: 'fig-lomonosov',
        nameRu: 'Михаил Васильевич Ломоносов',
        nameEn: 'Mikhail Lomonosov',
        dates: '1711 — 1765 гг.',
        roleRu: 'Первый русский учёный-естествоиспытатель мирового значения, поэт, просветитель',
        roleEn: 'Polymath, scientist, writer, founder of Moscow University',
        avatar: '🔬',
        grade: 8,
        keyActionsRu: [
          'Открыл закон сохранения массы вещества, атмосферу Венеры.',
          'Создал первую химическую лабораторию, возродил искусство мозаики (картина «Полтавская баталия»).',
          'Разработал проект и основал Московский университет (1755 г.).',
        ],
        legacyRu: '«Он сам был нашим первым университетом» (А.С. Пушкин).',
        legacyEn: 'Celebrated by Pushkin as Russia’s "first university in himself".',
      },
      {
        id: 'fig-elizabeth',
        nameRu: 'Императрица Елизавета Петровна',
        nameEn: 'Empress Elizabeth of Russia',
        dates: '1709 — 1761 гг.',
        roleRu: 'Императрица Всероссийская (1741–1761 гг.), дочь Петра I',
        roleEn: 'Empress of Russia, daughter of Peter the Great',
        avatar: '👑',
        grade: 8,
        keyActionsRu: [
          'Возвратила управление к петровским коллегиям и Сенату.',
          'Отменила смертную казнь в России (мораторий).',
          'Одержала победы над Пруссией в Семилетней войне.',
        ],
        legacyRu: 'Эпоха стабильности, просвещения и триумфа русской культуры и архитектуры барокко.',
        legacyEn: 'Presided over an era of cultural renaissance and military ascendance.',
      },
    ],
    timelineEvents: [
      {
        year: 1730,
        dateRu: '1730 г.',
        dateEn: '1730 AD',
        titleRu: 'Разрыв «Кондиций» Анной Иоанновной',
        titleEn: 'Empress Anna Tearing Up the Conditions',
        descriptionRu: 'Попытка Верховного тайного совета ограничить самодержавие провалилась из-за протеста дворянства.',
        significanceRu: 'Сохранение незыблемости абсолютной самодержавной власти в России.',
        tags: ['Кондиции', 'Анна Иоанновна', 'Самодержавие'],
      },
      {
        year: 1755,
        dateRu: '25 января 1755 г.',
        dateEn: 'January 25, 1755 AD',
        titleRu: 'Основание Московского университета',
        titleEn: 'Founding of Moscow State University',
        descriptionRu: 'Указ императрицы Елизаветы по проекту М.В. Ломоносова и И.И. Шувалова.',
        significanceRu: 'Рождение высшего светского университетского образования в России (Татьянин день).',
        tags: ['МГУ', 'Ломоносов', 'Университет', 'Просвещение'],
      },
      {
        year: 1760,
        dateRu: '28 сентября 1760 г.',
        dateEn: 'October 1760 AD',
        titleRu: 'Взятие Берлина русскими войсками',
        titleEn: 'Russian Capture of Berlin (Seven Years’ War)',
        descriptionRu: 'Вступление русского экспедиционного корпуса в столицу Пруссии.',
        significanceRu: 'Высшая точка русского военного триумфа в Семилетней войне.',
        tags: ['Берлин', 'Семилетняя война', 'Победа'],
      },
      {
        year: 1762,
        dateRu: '18 февраля 1762 г.',
        dateEn: 'February 18, 1762 AD',
        titleRu: 'Манифест о вольности дворянства',
        titleEn: 'Manifesto on the Freedom of the Nobility',
        descriptionRu: 'Указ Петра III, освободивший дворян от обязательной государственной службы.',
        significanceRu: 'Превращение дворянства в привилегированное благородное сословие.',
        tags: ['Вольность дворянства', 'Петр III', 'Манифест'],
      },
    ],
    terms: [
      {
        termRu: 'Дворцовые перевороты',
        termEn: 'Palace Revolutions',
        definitionRu: 'Период в истории Российской империи (1725–1762 гг.), когда смена власти при дворе происходила путём заговоров и переворотов с решающим участием гвардейских полков.',
        definitionEn: 'The era (1725–1762) during which supreme imperial authority changed hands rapidly via elite guard-backed coups.',
        historicalContextRu: 'Термин введён историком В.О. Ключевским.',
        historicalContextEn: 'Historiographical concept coined by historian Vasily Klyuchevsky.',
      },
      {
        termRu: 'Кондиции',
        termEn: 'Conditions of 1730',
        definitionRu: 'Условия вступления на престол, предъявленные верховниками курляндской герцогине Анне Иоанновне для ограничения её самодержавной власти в пользу знати.',
        definitionEn: 'Draft constitutional restrictions imposed on Empress Anna in 1730 by the Supreme Privy Council.',
        historicalContextRu: 'Анна публично разорвала кондиции после обращения к ней рядового шляхетства.',
        historicalContextEn: 'Torn up publicly by Anna with the backing of middle-ranking nobility.',
      },
      {
        termRu: 'Манифест о вольности дворянства (1762 г.)',
        termEn: 'Manifesto on the Freedom of the Nobility',
        definitionRu: 'Законодательный акт Петра III, освободивший русских дворян от обязательной государственной и военной службы, введённой Петром I.',
        definitionEn: '1762 imperial decree liberating Russian gentry from mandatory state service, permitting them to travel abroad and resign commissions.',
        historicalContextRu: 'Окончательно закреплён Жалованной грамотой дворянству Екатерины II в 1785 году.',
        historicalContextEn: 'Ratified and expanded in Catherine II’s 1785 Charter to the Nobility.',
      },
    ],
    examFocusRu: {
      examTarget: 'ОГЭ / ЕГЭ (Задания 1, 3, 4, 18, 19)',
      coreTakeaways: [
        'Знать хронологию переворотов: 1725 (Екатерина I) → 1727 (Петр II) → 1730 (Анна Иоанновна) → 1740 (Иван VI) → 1741 (Елизавета) → 1761 (Петр III) → 1762 (Екатерина II).',
        'Понимать роль М.В. Ломоносова (1755 г. — МГУ) и П.И. Шувалова (отмена внутренних таможен 1754 г.).',
        'Знать суть Манифеста о вольности дворянства (1762 г.).',
      ],
      essayPrompts: [
        'Почему попытка верховников ограничить самодержавие с помощью «Кондиций» в 1730 году потерпела крах?',
        'Как изменился социальный статус дворянства в эпоху дворцовых переворотов?',
      ],
    },
    examFocusEn: {
      examTarget: 'Grade 8 History Exam Syllabus',
      coreTakeaways: [
        'Analyze the constitutional crisis of 1730.',
        'Understand educational milestones under Elizabeth Petrovna.',
      ],
      essayPrompts: [
        'Examine the contradictions of Peter III’s brief reign.',
      ],
    },
    quizQuestions: [
      {
        id: 'hist-q-8-3',
        type: 'multiple-choice',
        questionRu: 'В каком году по инициативе М.В. Ломоносова и И.И. Шувалова был основан Московский университет?',
        questionEn: 'In which year was Moscow State University founded by Lomonosov and Shuvalov?',
        options: ['1755 г.', '1725 г.', '1762 г.', '1785 г.'],
        correctAnswer: '1755 г.',
        explanationRu: 'Московский университет был основан указом Елизаветы Петровны 25 января 1755 года (Татьянин день).',
        explanationEn: 'Moscow University was founded on January 25, 1755 (Tatiana Day).',
      },
      {
        id: 'hist-q-8-4',
        type: 'multiple-choice',
        questionRu: 'Какой император издал знаменитый «Манифест о вольности дворянства» 1762 года?',
        questionEn: 'Which emperor enacted the 1762 "Manifesto on the Freedom of the Nobility"?',
        options: ['Пётр III', 'Пётр I', 'Пётр II', 'Павел I'],
        correctAnswer: 'Пётр III',
        explanationRu: 'Пётр III 18 февраля 1762 года освободил дворянство от обязательной государственной службы.',
        explanationEn: 'Peter III issued the manifesto on February 18, 1762.',
      },
    ],
  },

  // =========================================================================
  // GRADE 8 - TOPIC 3: Золотой век Екатерины II: Просвещённый абсолютизм и победы
  // =========================================================================
  {
    id: 'hist-8-catherine-the-great',
    grade: 8,
    eraId: 'era-grade-8',
    order: 3,
    titleRu: 'Золотой век Екатерины II Великой: Просвещённый абсолютизм, пугачёвщина и триумфы Суворова',
    titleEn: 'Catherine the Great’s Golden Age: Enlightened Absolutism, Pugachev & Suvorov',
    subtitleRu: 'Уложенная комиссия (1767 г.), восстание Емельяна Пугачёва, присоединение Крыма (1783 г.) и взятие Измаила (1790 г.)',
    subtitleEn: 'Legislative Commission (1767), Pugachev Rebellion, Annexation of Crimea (1783), and Siege of Izmail (1790)',
    periodRu: '1762 — 1796 гг.',
    periodEn: '1762 — 1796 AD',
    icon: '👑',
    overviewRu:
      '34-летнее царствование Екатерины II Великой (1762–1796 гг.) по праву называют «золотым веком» русского дворянства и эпохой Просвещённого абсолютизма. Императрица вела переписку с Вольтером и Дидро, созвала Уложенную комиссию (1767 г.) и составила «Наказ». Однако апогей дворянских привилегий сопровождался крайним закрепощением крестьян, что вызвало грандиозную Крестьянскую войну под предводительством Емельяна Пугачёва (1773–1775 гг.). Внешняя политика Екатерины ознаменовалась эпохальными победами полководцев Румянцева, Суворова и адмирала Ушакова: разгромлена Османская империя, к России присоединены Крым (1783 г.), Новороссия и Правобережная Украина, а в результате трёх разделов Речи Посполитой возвращены древнерусские земли.',
    overviewEn:
      'Catherine the Great guided Russia through the Enlightenment while entrenching aristocratic privilege. Her Legislative Commission and "Nakaz" reflected Montesquieu’s ideas, yet rural oppression ignited Yemelyan Pugachev’s Cossack-Peasant War (1773–1775). In foreign policy, Suvorov and Ushakov conquered the Ottoman Empire, securing Crimea (1783) and the Black Sea, while three partitions of Poland reincorporated historic Rus territories.',
    sections: [
      {
        headingRu: '1. Просвещённый абсолютизм и Уложенная комиссия (1767 г.)',
        headingEn: '1. Enlightened Absolutism & Legislative Commission',
        contentRu:
          'Политика Просвещённого абсолютизма — использование идей европейского Просвещения (Вольтер, Монтескье, Дидро) для укрепления самодержавия и модернизации правовой системы сверху:\n• Секуляризация церковных земель (1764 г.): монастырские земли и около 2 млн крепостных крестьян переданы государству («экономические крестьяне»), церковь окончательно лишилась экономической независимости;\n• 1767 г. — созыв Уложенной комиссии для составления нового свода законов взамен Соборного уложения 1649 года. Екатерина лично написала для депутатов «Наказ» — философско-правовой трактат об идеальном монархе и законности;\n• Комиссия показала неразрешимые сословные противоречия между дворянами, купцами и крестьянами и была распущена под предлогом начавшейся русско-турецкой войны (1768 г.).',
        contentEn:
          'Catherine nationalized church estates in 1764 (secularization) and summoned the 1767 Legislative Commission, guided by her philosophical treatise "Nakaz." The assembly was adjourned without a new code due to irreconcilable social cleavages.',
      },
      {
        headingRu: '2. Крестьянская война под предводительством Емельяна Пугачёва (1773–1775 гг.)',
        headingEn: '2. Pugachev’s Rebellion (1773–1775)',
        contentRu:
          'Бесправное положение крепостных крестьян («торговля людьми», право помещиков ссылать крепостных в Сибирь на каторгу) привело к страшному социальному взрыву.\n\nДонской казак Емельян Пугачёв объявил себя «чудесно спасшимся императором Петром III» и поднял восстание на реке Яик (Урал). К нему примкнули яицкие казаки, башкиры во главе с Салаватом Юлаевым, работные люди уральских заводов и миллионы крепостных крестьян. Пугачёв рассылал манифесты, обещая землю, волю, отмену податей и уничтожение дворян.\n\nВосставшие осадили Оренбург, взяли Казань и двинулись на Москву. Восстание было подавлено регулярными войсками (П. Панин, И. Михельсон). Пугачёв был выдан соратниками, доставлен в Москву в железной клетке и казнён на Болотной площади в январе 1775 года. Река Яик была переименована в Урал, чтобы стереть память о бунте.',
        contentEn:
          'Pugachev posed as Peter III, rallying Cossacks, Bashkirs under Salavat Yulaev, Ural factory serfs, and peasants in a bloody revolt that seized Kazan before being crushed. Pugachev was executed on Bolotnaya Square in 1675.',
      },
      {
        headingRu: '3. Реформы после бунта: Губернская реформа и Жалованные грамоты (1785 г.)',
        headingEn: '3. Post-Revolt Reforms: Provincial Reform & 1785 Charters',
        contentRu:
          'Потрясённая восстанием Екатерина укрепила административный аппарат на местах:\n• Губернская реформа 1775 г.: Россия разделена на 50 губерний (вместо 23) с населением 300–400 тыс. человек каждая, во главе с губернаторами;\n• 21 апреля 1785 г. — издание Жалованной грамоты дворянству: подтверждение свободы от обязательной службы, освобождение от телесных наказаний и налогов, монопольное право владения землёй и крепостными («золотой век дворянства»);\n• Жалованная грамота городам (1785 г.): создание городской думы и разделение городского населения на 6 разрядов.',
        contentEn:
          'The 1775 Provincial Reform decentralized administration across 50 governates. The 1785 Charter to the Nobility solidified aristocrats as a privileged estate exempt from corporal punishment and taxes.',
      },
      {
        headingRu: '4. Внешняя политика: присоединение Крыма и победы Суворова и Ушакова',
        headingEn: '4. Foreign Triumphs: Suvorov, Ushakov & Crimea (1783)',
        contentRu:
          'Россия решила вековую историческую задачу — пробилась к Чёрному морю и обезопасила южные рубежи:\n• Русско-турецкая война (1768–1774 гг.): победы П.А. Румянцева при Ларге и Кагуле, разгром турецкого флота в Чесменском сражении (1770 г., А. Орлов, Г. Спиридов). Кючук-Кайнарджийский мир (1774 г.): независимость Крымского ханства;\n• 8 апреля 1783 г. — манифест Екатерины II о включении полуострова Крым, Тамани и Кубани в состав Российской империи. Светлейший князь Г.А. Потёмкин-Таврический основал Черноморский флот и город-герой Севастополь (1783 г.);\n• Русско-турецкая война (1787–1791 гг.): гениальные победы А.В. Суворова при Кинбурне, Фокшанах, Рымнике и штурм неприступной турецкой крепости Измаил (11 декабря 1790 г.); триумфы адмирала Ф.Ф. Ушакова при Фидониси, Тендре и мысе Калиакрия. Ясский мир (1791 г.) закрепил Крым и Новороссию за Россией;\n• Разделы Речи Посполитой (1772, 1793, 1795 гг.): возвращение Правобережной Украины, Белоруссии, Литвы и Курляндии.',
        contentEn:
          'Victories at Chesma (1770), Rymnik, and Izmail (1790) under Suvorov, and naval victories under Ushakov smashed Ottoman power. In 1783 Potemkin annexed Crimea and founded Sevastopol. The Partitions of Poland recovered Belarus and Right-Bank Ukraine.',
      },
    ],
    keyFigures: [
      {
        id: 'fig-catherine-ii',
        nameRu: 'Екатерина II Алексеевна Великая',
        nameEn: 'Catherine II the Great',
        dates: '1729 — 1796 гг.',
        roleRu: 'Императрица Всероссийская, реформатор Просвещённого абсолютизма',
        roleEn: 'Empress of Russia',
        avatar: '👑',
        grade: 8,
        keyActionsRu: [
          'Провела секуляризацию церковных земель (1764 г.) и губернскую реформу (1775 г.).',
          'Издала Жалованную грамоту дворянству (1785 г.).',
          'Присоединила Крым (1783 г.), Новороссию, Белоруссию, Правобережную Украину.',
        ],
        legacyRu: 'Величайшая правительница в российской истории, расширившая рубежи империи до Чёрного моря.',
        legacyEn: 'A towering figure who elevated Russia into an unassailable global power.',
      },
      {
        id: 'fig-suvorov',
        nameRu: 'Александр Васильевич Суворов',
        nameEn: 'Alexander Vasilyevich Suvorov',
        dates: '1730 — 1800 гг.',
        roleRu: 'Великий русский полководец, генералиссимус, не проигравший ни одного сражения',
        roleEn: 'Generalissimo, undefeated military theorist',
        avatar: '⚔️',
        grade: 8,
        keyActionsRu: [
          'Одержал победы при Козлуджи, Кинбурне, Фокшанах, Рымнике.',
          'Взял считавшийся неприступным турецкий Измаил (1790 г.).',
          'Совершил легендарный переход через Альпы (1799 г.). Автор книги «Наука побеждать» («Тяжело в ученье — легко в бою»).',
        ],
        legacyRu: 'Национальный символ русского воинского гения и непобедимости.',
        legacyEn: 'Legendary military genius renowned for his tactical doctrine "The Science of Victory".',
      },
      {
        id: 'fig-ushakov',
        nameRu: 'Святой праведный воин Фёдор Фёдорович Ушаков',
        nameEn: 'Fyodor Ushakov',
        dates: '1745 — 1817 гг.',
        roleRu: 'Выдающийся флотоводец, адмирал, командующий Черноморским флотом',
        roleEn: 'Admiral of the Black Sea Fleet, naval innovator',
        avatar: '⚓',
        grade: 8,
        keyActionsRu: [
          'Не потерпел ни единого поражения в 43 морских сражениях, не потеряв ни одного корабля.',
          'Разгромил турецкий флот у мыса Калиакрия (1791 г.) и взял неприступную французскую крепость Корфу на Ионических островах (1799 г.).',
        ],
        legacyRu: 'Основатель русской маневренной морской тактики, канонизирован Русской православной церковью.',
        legacyEn: 'Canonized patron saint of the Russian Navy.',
      },
    ],
    timelineEvents: [
      {
        year: 1767,
        dateRu: '1767 г.',
        dateEn: '1767 AD',
        titleRu: 'Созыв Уложенной комиссии',
        titleEn: 'Convocation of the Legislative Commission',
        descriptionRu: 'Собрание депутатов всех сословий (кроме помещичьих крестьян) для создания законов на основе «Наказа».',
        significanceRu: 'Ярчайшее проявление политики Просвещённого абсолютизма в России.',
        tags: ['Уложенная комиссия', 'Наказ', 'Екатерина II'],
      },
      {
        year: 1773,
        dateRu: '1773–1775 гг.',
        dateEn: '1773–1775 AD',
        titleRu: 'Крестьянская война под предводительством Емельяна Пугачёва',
        titleEn: 'Pugachev’s Cossack-Peasant Rebellion',
        descriptionRu: 'Грандиозное восстание казаков, крестьян и народов Поволжья и Урала.',
        significanceRu: 'Крупнейшее народное восстание в истории Российской империи.',
        tags: ['Пугачёв', 'Крестьянская война', 'Бунт'],
      },
      {
        year: 1783,
        dateRu: '8 апреля 1783 г.',
        dateEn: 'April 8, 1783 AD',
        titleRu: 'Манифест о присоединении Крыма к России',
        titleEn: 'Annexation of Crimea to the Russian Empire',
        descriptionRu: 'Вхождение Крымского полуострова, Тамани и Кубани в состав империи под началом Г.А. Потёмкина.',
        significanceRu: 'Ликвидация вековой угрозы набегов и создание Черноморского флота в Севастополе.',
        tags: ['Крым', 'Севастополь', 'Потёмкин', 'Новороссия'],
      },
      {
        year: 1790,
        dateRu: '11 (22) декабря 1790 г.',
        dateEn: 'December 22, 1790 AD',
        titleRu: 'Штурм крепости Измаил войсками А.В. Суворова',
        titleEn: 'Storming of the Fortress of Izmail by Suvorov',
        descriptionRu: 'Взятие неприступной турецкой дунайской крепости, считавшейся европейскими инженерами непреодолимой.',
        significanceRu: 'Триумф русского военного искусства (День воинской славы России).',
        tags: ['Измаил', 'Суворов', 'Победа'],
      },
    ],
    terms: [
      {
        termRu: 'Просвещённый абсолютизм',
        termEn: 'Enlightened Absolutism',
        definitionRu: 'Политика второй половины XVIII века, проводившаяся монархами (Екатерина II, Фридрих II) и заключавшаяся в использовании идей Просвещения для модернизации общества и укрепления самодержавия.',
        definitionEn: 'Form of absolute monarchy inspired by the European Enlightenment, combining progressive administrative/legal rationalization with autocratic social dominance.',
        historicalContextRu: 'Проявилась в составлении «Наказа», секуляризации церковных земель и развитии образования.',
        historicalContextEn: 'Exemplified by the Nakaz, secularization, and creation of the Free Economic Society.',
      },
      {
        termRu: 'Жалованная грамота дворянству (1785 г.)',
        termEn: 'Charter to the Nobility (1785)',
        definitionRu: 'Законодательный акт Екатерины II, закрепивший за дворянством статус высшего привилегированного сословия («благородного сословия»), освобождённого от налогов, рекрутчины и телесных наказаний.',
        definitionEn: 'Landmark decree by Catherine II codifying aristocratic civil rights, personal immunity, and regional noble assemblies.',
        historicalContextRu: 'Венцом реформы стало создание губернских дворянских собраний во главе с предводителями дворянства.',
        historicalContextEn: 'Instituted regional noble assemblies headed by Marshals of the Nobility.',
      },
      {
        termRu: 'Секуляризация',
        termEn: 'Secularization of Church Lands',
        definitionRu: 'Обращение государственной властью церковной и монастырской земельной собственности в государственную.',
        definitionEn: 'The state confiscation and conversion of ecclesiastical and monastic properties into public domain.',
        historicalContextRu: 'Проведена Екатериной II в 1764 году: монастырские крестьяне стали экономическими.',
        historicalContextEn: 'Executed in 1764, transforming 2 million monastic serfs into economic peasants.',
      },
    ],
    examFocusRu: {
      examTarget: 'ОГЭ / ЕГЭ (Задания 1-5, 13, 14, 18, 19, 21)',
      coreTakeaways: [
        'Понимать противоречивость эпохи: расцвет идей Просвещения на фоне максимального бесправия крепостных крестьян.',
        'Знать даты русско-турецких войн (1768–1774 гг. — Кючук-Кайнарджи; 1787–1791 гг. — Яссы).',
        'Помнить ключевые события: присоединение Крыма (1783 г.), Жалованная грамота дворянству (1785 г.), взятие Измаила (1790 г.), разделы Польши (1772, 1793, 1795 гг.).',
      ],
      essayPrompts: [
        'Почему восстание Емельяна Пугачёва приобрело столь широкий размах и ожесточённый характер?',
        'Каковы были главные геополитические результаты внешнеполитических триумфов эпохи Екатерины Великой?',
      ],
    },
    examFocusEn: {
      examTarget: 'Grade 8 History Exam Syllabus',
      coreTakeaways: [
        'Identify territorial gains in the Black Sea and Baltic spheres.',
        'Analyze the impact of the Charter to the Nobility on class structure.',
      ],
      essayPrompts: [
        'Evaluate whether Catherine II truly embodied the ideals of the European Enlightenment.',
      ],
    },
    quizQuestions: [
      {
        id: 'hist-q-8-5',
        type: 'multiple-choice',
        questionRu: 'В каком году императрица Екатерина II подписала исторический манифест о присоединении Крыма к России?',
        questionEn: 'In which year did Catherine II sign the historic manifesto incorporating Crimea into Russia?',
        options: ['1783 г.', '1774 г.', '1791 г.', '1768 г.'],
        correctAnswer: '1783 г.',
        explanationRu: 'Манифест о вхождении Крыма, Тамани и Кубани в состав Российской империи был подписан 8 апреля 1783 года.',
        explanationEn: 'The manifesto incorporating Crimea was signed on April 8, 1783.',
      },
      {
        id: 'hist-q-8-6',
        type: 'multiple-choice',
        questionRu: 'Какую неприступную турецкую крепость взял штурмом А.В. Суворов 11 декабря 1790 года?',
        questionEn: 'Which fortress considered impregnable did Suvorov capture by assault in December 1790?',
        options: ['Измаил', 'Очаков', 'Азов', 'Кинбурн'],
        correctAnswer: 'Измаил',
        explanationRu: 'Штурм дунайской крепости Измаил 11 декабря 1790 года стал вершиной полководческого мастерства Суворова.',
        explanationEn: 'The storming of the fortress of Izmail on December 22, 1790, was Suvorov’s greatest siege victory.',
      },
    ],
  },

  // =========================================================================
  // GRADE 8 - TOPIC 4: Правление Павла I (1796–1801 гг.)
  // =========================================================================
  {
    id: 'hist-8-paul-i',
    grade: 8,
    eraId: 'era-grade-8',
    order: 4,
    titleRu: 'Правление Павла I (1796–1801 гг.): закон о престолонаследии и походы Суворова',
    titleEn: 'Reign of Paul I (1796–1801): Succession Law & Suvorov’s Alpine Odyssey',
    subtitleRu: 'Акт о престолонаследии (1797 г.), ограничение барщины, Итальянский и Швейцарский походы и дворцовый переворот 1801 года',
    subtitleEn: 'Pauline Succession Edict, Three-Day Corvée, Suvorov’s Swiss campaign, and the 1801 coup',
    periodRu: '1796 — 1801 гг.',
    periodEn: '1796 — 1801 AD',
    icon: '⚔️',
    overviewRu:
      'Четырёхлетнее царствование сына Екатерины II, императора Павла I Петровича (1796–1801 гг.), отличалось резким пересмотром екатерининских порядков. Павел стремился восстановить строгую дисциплину, ограничил дворянские привилегии (вернул телесные наказания) и издал фундаментальный Акт о престолонаследии 1797 года, навсегда закрепивший передачу трона строго по мужской нисходящей линии. Он сделал первый робкий шаг к облегчению участи крестьян — Манифест о трёхдневной барщине. Во внешней политике Павел вступил во 2-ю антифранцузскую коалицию, где А.В. Суворов совершил бессмертный переход через Альпы (1799 г.), а Ф.Ф. Ушаков освободил Корфу. Недовольство дворянской верхушки и сближение с Наполеоном привели к заговору и гибели императора в Михайловском замке в ночь на 12 марта 1801 года.',
    overviewEn:
      'Paul I reacted against Catherine’s policies by tightening state discipline, curbing noble freedoms, and passing the 1797 Pauline Edict establishing strict patrilineal succession. He issued the 1797 Manifesto on Three-Day Corvée to ease peasant labor. Abroad, Suvorov completed his epic 1799 crossing of the Alps and Ushakov took Corfu. Aristocratic anger and British intrigue led to Paul’s assassination in the St. Michael’s Castle in March 1801.',
    sections: [
      {
        headingRu: '1. Акт о престолонаследии 1797 года и крестьянский вопрос',
        headingEn: '1. The 1797 Succession Act & Peasant Policy',
        contentRu:
          'В день своей коронации 5 апреля 1797 года Павел I обнародовал два ключевых манифеста:\n• Акт о престолонаследии (Учреждение об императорской фамилии): отменял петровский указ 1722 года о назначении преемника по воле монарха. Отныне российский престол передавался строго от отца к старшему сыну по мужской нисходящей линии (примогенитура). Закон навсегда покончил с эпохой дворцовых переворотов и действовал до падения монархии в 1917 году;\n• Манифест о трёхдневной барщине (1797 г.): запрещал помещикам принуждать крестьян к работе по воскресеньям и праздникам и рекомендовал делить оставшиеся шесть дней поровну — три дня крестьянин работал на барщине помещика, три дня — на собственном поле. Это было первое в истории России законодательное ограничение помещичьего произвола.',
        contentEn:
          'The 1797 Pauline Edict replaced Peter I’s arbitrary succession rule with strict male-line primogeniture, ending palace coups permanently. The Manifesto on Three-Day Corvée marked the first legal restriction on noble exploitation of serf labor.',
      },
      {
        headingRu: '2. Борьба с дворянскими привилегиями и прусская муштра',
        headingEn: '2. Curtailment of Noble Privileges & Prussian Discipline',
        contentRu:
          'Павел ненавидел екатерининский фаворитизм и «дворянскую распущенность». Он ввёл прусскую военную форму (парики с буклями и косицами), жестокую муштру и строжайшую регламентацию жизни общества (запрет круглых шляп, фраков и слова «гражданин»).\nСамым болезненным для дворян стало наступление на их права:\n• Отменено освобождение дворян от телесных наказаний за уголовные преступления;\n• Введён налог на дворянские имения;\n• Запрещены губернские дворянские собрания без разрешения губернаторов;\n• Принудительный возврат не служивших дворянских недорослей на военную службу.',
        contentEn:
          'Paul restricted aristocratic liberties: reinstating corporal punishment for nobles convicted of crimes, taxing estates, and strictly regulating attire and European books.',
      },
      {
        headingRu: '3. Итальянский и Швейцарский походы Суворова (1799 г.) и переворот 1801 года',
        headingEn: '3. Suvorov’s 1799 Campaigns & The 1801 Palace Coup',
        contentRu:
          'Во внешней политике Павел вступил в коалицию против революционной Франции:\n• Весна — лето 1799 г. — Итальянский поход А.В. Суворова: освобождение Северной Италии от французов за несколько месяцев (победы на реках Адда, Треббия и при Нови);\n• Сентябрь 1799 г. — Швейцарский поход Суворова: героический переход 21-тысячной русской армии через неприступные заснеженные Альпы (штурм перевала Сен-Готард и Чёртова моста), выход из окружения в Мутенской долине. За этот подвиг Суворов получил высшее звание Генералиссимуса;\n• Предательство австрийских и английских союзников возмутило Павла: он разорвал отношения с Англией, заключил союз с Первым консулом Франции Наполеоном Бонапартом и направил 40 полков донских казаков атамана М. Платова в поход на Британскую Индию.\n\nВ ночь с 11 на 12 марта 1801 года заговорщики из гвардейских офицеров во главе с петербургским военным губернатором графом П.А. Паленом ворвались в Михайловский замок и убили императора. На престол взошёл его старший сын Александр I.',
        contentEn:
          'In 1799 Suvorov liberated Northern Italy and carried out the epic crossing of the Alps via Devil’s Bridge. Disillusioned with Austrian and British allies, Paul forged an alliance with Napoleon. On the night of March 11–12, 1801, conspirators assassinated Paul in St. Michael’s Castle.',
      },
    ],
    keyFigures: [
      {
        id: 'fig-paul-i',
        nameRu: 'Император Павел I Петрович',
        nameEn: 'Emperor Paul I of Russia',
        dates: '1754 — 1801 гг.',
        roleRu: 'Император Всероссийский, гроссмейстер Мальтийского ордена',
        roleEn: 'Emperor of Russia, Grand Master of the Knights Hospitaller',
        avatar: '👑',
        grade: 8,
        keyActionsRu: [
          'Принял закон о престолонаследии по мужской линии (1797 г.).',
          'Издал Манифест о трёхдневной барщине (1797 г.).',
          'Ограничил дворянские привилегии, вернув телесные наказания.',
        ],
        legacyRu: 'Романтический и противоречивый монарх, павший жертвой дворянского заговора.',
        legacyEn: 'A tragic sovereign whose reforms curtailed aristocratic privileges.',
      },
      {
        id: 'fig-palen',
        nameRu: 'Граф Пётр Алексеевич фон дер Пален',
        nameEn: 'Peter Ludwig von der Pahlen',
        dates: '1745 — 1826 гг.',
        roleRu: 'Военный губернатор Санкт-Петербурга, организатор заговора 1801 года',
        roleEn: 'Military Governor of St. Petersburg, coup mastermind',
        avatar: '🗡️',
        grade: 8,
        keyActionsRu: [
          'Возглавил заговор против императора Павла I с участием Н. Панина, братьев Зубовых и гвардейцев.',
          'Обеспечил восшествие на престол Александра I.',
        ],
        legacyRu: 'Организатор последнего успешного дворцового переворота в истории России.',
        legacyEn: 'Architect of the final successful palace coup in Russian history.',
      },
    ],
    timelineEvents: [
      {
        year: 1797,
        dateRu: '5 апреля 1797 г.',
        dateEn: 'April 5, 1797 AD',
        titleRu: 'Акт о престолонаследии Павла I',
        titleEn: 'Pauline Succession Act of 1797',
        descriptionRu: 'Установление обязательного перехода престола по мужской нисходящей линии.',
        significanceRu: 'Окончательное прекращение эпохи дворцовых переворотов и стабилизация династии.',
        tags: ['Павел I', 'Престолонаследие', 'Закон'],
      },
      {
        year: 1799,
        dateRu: 'Сентябрь — октябрь 1799 г.',
        dateEn: 'Autumn 1799 AD',
        titleRu: 'Швейцарский поход А.В. Суворова через Альпы',
        titleEn: 'Suvorov’s Swiss Alpine Expedition',
        descriptionRu: 'Переход русских войск через Сен-Готард и Чёртов мост, выход из окружения.',
        significanceRu: 'Бессмертный подвиг русской армии; Суворов удостоен звания Генералиссимуса.',
        tags: ['Суворов', 'Альпы', 'Чёртов мост', 'Подвиг'],
      },
      {
        year: 1801,
        dateRu: 'В ночь на 12 марта 1801 г.',
        dateEn: 'Night of March 11–12, 1801 AD',
        titleRu: 'Убийство Павла I в Михайловском замке',
        titleEn: 'Assassination of Paul I',
        descriptionRu: 'Гвардейский заговор под руководством графа Палена; гибель монарха.',
        significanceRu: 'Последний дворцовый переворот в России; начало правления Александра I.',
        tags: ['Михайловский замок', 'Пален', 'Переворот', 'Александр I'],
      },
    ],
    terms: [
      {
        termRu: 'Манифест о трёхдневной барщине (1797 г.)',
        termEn: 'Manifesto on Three-Day Corvée (1797)',
        definitionRu: 'Законодательный акт Павла I, запрещавший помещикам заставлять крестьян работать по воскресеньям и рекомендовавший ограничить барщину тремя днями в неделю.',
        definitionEn: '1797 imperial decree prohibiting Sunday serf labor and recommending limiting unpaid corvée labor to three days per week.',
        historicalContextRu: 'Первая официальная попытка государственной власти ограничить эксплуатацию крепостных крестьян.',
        historicalContextEn: 'First state measure in Russian history seeking to curb aristocratic exploitation of serfs.',
        examTipRu: 'Для ЕГЭ: запомнить как первый шаг верховной власти по ограничению крепостного права.',
      },
      {
        termRu: 'Акт о престолонаследии (1797 г.)',
        termEn: 'Pauline Succession Edict',
        definitionRu: 'Закон Павла I, установивший чёткий порядок наследования престола по праву первородства строго по мужской линии («от отца к старшему сыну»).',
        definitionEn: 'Law enacted by Paul I instituting agnatic primogeniture for the Russian imperial crown.',
        historicalContextRu: 'Действовал вплоть до отречения Николая II и крушения монархии в марте 1917 года.',
        historicalContextEn: 'Governed Russian imperial inheritance until the monarchy fell in 1917.',
      },
    ],
    examFocusRu: {
      examTarget: 'ОГЭ / ЕГЭ (Задания 1, 3, 18, 19)',
      coreTakeaways: [
        'Понимать значение двух указов 5 апреля 1797 г.: Акт о престолонаследии и Манифест о трёхдневной барщине.',
        'Знать походы А.В. Суворова 1799 года (Итальянский и Швейцарский — Чёртов мост, Сен-Готард) и звание Генералиссимус.',
        'Понимать причины заговора 1801 года: ущемление дворянских привилегий и разворот внешней политики от Англии к Франции.',
      ],
      essayPrompts: [
        'Почему политика Павла I вызвала ожесточённое сопротивление дворянской элиты и привела к трагическому перевороту 1801 года?',
        'Каково историческое значение Швейцарского похода Суворова 1799 года?',
      ],
    },
    examFocusEn: {
      examTarget: 'Grade 8 Russian History',
      coreTakeaways: [
        'Master the 1797 succession and corvée decrees.',
        'Understand the geopolitical backdrop of the 1801 assassination.',
      ],
      essayPrompts: [
        'Evaluate Paul I’s attempt to enforce legal order against the established gentry.',
      ],
    },
    quizQuestions: [
      {
        id: 'hist-q-8-7',
        type: 'multiple-choice',
        questionRu: 'Какой порядок наследования престола установил Акт о престолонаследии Павла I 1797 года?',
        questionEn: 'What succession rule was established by Paul I’s 1797 Edict?',
        options: [
          'Строго по мужской нисходящей линии от отца к старшему сыну',
          'По личному завещанию царствующего монарха',
          'Выбором на Земском соборе представителей всех сословий',
          'По решению Сената и Синода',
        ],
        correctAnswer: 'Строго по мужской нисходящей линии от отца к старшему сыну',
        explanationRu: 'Акт 1797 года ввёл примогенитуру — передачу престола по мужской линии от отца к старшему сыну.',
        explanationEn: 'The 1797 law established strict male primogeniture from father to eldest son.',
      },
      {
        id: 'hist-q-8-8',
        type: 'multiple-choice',
        questionRu: 'В каком замке Санкт-Петербурга в ночь на 12 марта 1801 года был убит заговорщиками император Павел I?',
        questionEn: 'In which St. Petersburg castle was Paul I assassinated by conspirators in March 1801?',
        options: ['Михайловский (Инженерный) замок', 'Зимний дворец', 'Гатчинский дворец', 'Юсуповский дворец'],
        correctAnswer: 'Михайловский (Инженерный) замок',
        explanationRu: 'Павел I был убит заговорщиками в своей новой неприступной резиденции — Михайловском замке.',
        explanationEn: 'Paul I was murdered in the newly constructed Saint Michael’s Castle.',
      },
    ],
  },
];
