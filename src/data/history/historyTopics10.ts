import { HistoryTopic } from '../../types';

export const TOPICS_GRADE_10: HistoryTopic[] = [
  // =========================================================================
  // GRADE 10 - TOPIC 1: Первая мировая война и Революция 1917 года
  // =========================================================================
  {
    id: 'hist-10-ww1-revolution-1917',
    grade: 10,
    eraId: 'era-grade-10',
    order: 1,
    titleRu: 'Россия в Первой мировой войне и Великая Российская революция 1917 года',
    titleEn: 'Russia in WWI & The Great Russian Revolution of 1917',
    subtitleRu: 'Брусиловский прорыв (1916 г.), падение самодержавия в Феврале, двоевластие и Октябрьское вооружённое восстание большевиков',
    subtitleEn: 'Brusilov Offensive (1916), February downfall of the Romanovs, Dual Power, and Bolshevik October Revolution',
    periodRu: '1914 — 1917 гг.',
    periodEn: '1914 — 1917 AD',
    icon: '⚡',
    overviewRu:
      'Вступление Российской империи в Первую мировую войну в августе 1914 года в составе Антанты вызвало патриотический подъём, но затяжная позиционная бойня, «снарядный голод» 1915 года и хозяйственная разруха привели к глубочайшему кризису. Выдающийся Брусиловский прорыв летом 1916 года не смог предотвратить катастрофу. В феврале 1917 года хлебные бунты в Петрограде переросли во всеобщее восстание: 2 марта 1917 года император Николай II отрёкся от престола. Сложилось двоевластие: буржуазное Временное правительство и революционный Петроградский Совет рабочих и солдатских депутатов. Неспособность Временного правительства решить вопросы о мире и земле привела к триумфу большевиков во главе с В.И. Лениным: 25 октября (7 ноября) 1917 года штурмом взят Зимний дворец, а II съезд Советов провозгласил Советскую власть и принял Декреты о мире и о земле.',
    overviewEn:
      'WWI strained the Russian Empire to breaking point. Despite General Brusilov’s 1916 breakthrough, supply collapses catalyzed the February 1917 Revolution, forcing Nicholas II’s abdication and creating Dual Power between the Provisional Government and the Petrograd Soviet. Paralysis over the war and land enabled Vladimir Lenin’s Bolsheviks to seize power on October 25 (Nov 7), 1917, storming the Winter Palace and issuing the historic Decrees on Peace and Land.',
    sections: [
      {
        headingRu: '1. Россия в огне Первой мировой войны (1914–1916 гг.)',
        headingEn: '1. Russia in World War I (1914–1916)',
        contentRu:
          '19 июля (1 августа) 1914 года Германия объявила войну России. Россия вступила в войну в союзе с Францией и Великобританией (Антанта) против Германии, Австро-Венгрии и Османской империи:\n• Август 1914 г. — Восточно-Прусская операция: наступление 1-й и 2-й русских армий спасло Париж от молниеносного захвата немцами ценой тяжёлого поражения армии А. Самсонова;\n• Осень 1914 г. — блестящая Галицийская битва: разгром австро-венгерских войск и взятие Львова и Перемышля;\n• 1915 г. — «Великое отступление»: Германия обрушила главный удар на Восточный фронт; русская армия из-за острой нехватки снарядов и патронов («снарядный голод») оставила Польшу, Галицию и часть Прибалтики, но избежала разгрома;\n• Май — август 1916 г. — Брусиловский прорыв: Юго-Западный фронт генерала А.А. Брусилова применил новаторскую тактику одновременного наступления по всему фронту, наголову разбив австро-венгерские войска и поставив Австро-Венгрию на грань капитуляции.',
        contentEn:
          'Russia fought alongside Britain and France. Early campaigns included the heroic sacrifice in East Prussia that saved Paris, the Galician victory, the 1915 Great Retreat under munitions shortages, and the innovative 1916 Brusilov Offensive.',
      },
      {
        headingRu: '2. Февральская революция 1917 года и двоевластие',
        headingEn: '2. February 1917 Revolution & Dual Power',
        contentRu:
          'К началу 1917 года страна страдала от инфляции, транспортного коллапса и очередей за хлебом («хвостов»):\n• 23 февраля (8 марта) 1917 г. — забастовка женщин-работниц Выборгской стороны Петрограда под лозунгами «Хлеба!» и «Долой войну!», переросшая во всеобщую политическую стачку;\n• 27 февраля 1917 г. — гарнизон Петрограда перешёл на сторону восставших рабочих; взяты арсенал и Зимний дворец;\n• 2 марта 1917 г. — в вагоне царского поезда на станции Псков император Николай II подписал отречение от престола за себя и за сына Алексея в пользу брата Михаила. Михаил Романов отказался от власти до решения Учредительного собрания. 304-летнее правление дома Романовых и монархия в России пали;\n• Возникло двоевластие: Временное правительство (князь Г.Е. Львов, П.Н. Милюков, А.И. Гучков, А.Ф. Керенский — обладало официальной властью, но не имело военной силы) и Петроградский Совет рабочих и солдатских депутатов (Н.С. Чхеидзе — контролировал солдат и рабочих через Приказ №1, демократизировавший армию).',
        contentEn:
          'Bread strikes in Petrograd culminated in military mutiny in February 1917. Nicholas II abdicated on March 2. Dual Power formed: the liberal Provisional Government and the socialist Petrograd Soviet.',
      },
      {
        headingRu: '3. Октябрьское вооружённое восстание 1917 года',
        headingEn: '3. The October Bolshevik Revolution',
        contentRu:
          'Временное правительство отказалось немедленно прекратить войну («война до победного конца») и отдать землю крестьянам. В апреле 1917 года из эмиграции вернулся лидер большевиков В.И. Ленин, провозгласив «Апрельские тезисы» («Никакой поддержки Временному правительству! Вся власть Советам!»).\n\nПосле провала июньского наступления на фронте, Июльского кризиса в Петрограде и мятежа генерала Л.Г. Корнилова авторитет Временного правительства А.Ф. Керенского рухнул. Началась стремительная «большевизация Советов».\n\nВ ночь на 25 октября (7 ноября) 1917 года отряды Красной гвардии, революционные матросы Балтийского флота и солдаты бескровно заняли мосты, вокзалы, почту и телеграф в Петрограде. Крейсер «Аврора» холостым выстрелом подал сигнал к штурму. В ночь на 26 октября Зимний дворец был взят, министры Временного правительства арестованы.\n\nII Всероссийский съезд Советов в Смольном провозгласил переход власти к Советам и принял первые исторические декреты:\n1. Декрет о мире — призыв ко всем воюющим народам заключить немедленный демократический мир без аннексий и контрибуций;\n2. Декрет о земле — немедленная отмена помещичьей собственности без выкупа и безвозмездная передача всей земли крестьянам;\n3. Образовано первое Советское правительство — Совет народных комиссаров (СНК) во главе с В.И. Лениным.',
        contentEn:
          'Lenin’s April Theses championed "All Power to the Soviets." Following the Kornilov affair, Bolsheviks mobilized Red Guards. On October 25 (Nov 7), 1917, the Aurora fired the signal shot, the Winter Palace was stormed, and the Second Congress of Soviets enacted the landmark Decrees on Peace and Land.',
      },
    ],
    keyFigures: [
      {
        id: 'fig-lenin',
        nameRu: 'Владимир Ильич Ульянов (Ленин)',
        nameEn: 'Vladimir Ilyich Lenin',
        dates: '1870 — 1924 гг.',
        roleRu: 'Основатель партии большевиков (РСДРП(б)), создатель первого в мире социалистического государства (СССР)',
        roleEn: 'Bolshevik leader, founder of the Soviet Union',
        avatar: '🚩',
        grade: 10,
        keyActionsRu: [
          'Разработал теорию социалистической революции («Апрельские тезисы»).',
          'Руководил Октябрьским вооружённым восстанием в Петрограде 1917 года.',
          'Возглавил первое Советское правительство — Совет народных комиссаров (СНК).',
          'Ввёл Новую экономическую политику (НЭП) в 1921 году и создал СССР в 1922 году.',
        ],
        legacyRu: 'Один из самых влиятельных политических деятелей XX века, изменивший ход мировой истории.',
        legacyEn: 'A colossus of 20th-century history whose communist model transformed global politics.',
      },
      {
        id: 'fig-brusilov',
        nameRu: 'Алексей Алексеевич Брусилов',
        nameEn: 'Aleksei Alekseevich Brusilov',
        dates: '1853 — 1926 гг.',
        roleRu: 'Генерал от кавалерии, автор знаменитого Брусиловского прорыва 1916 года',
        roleEn: 'General, architect of the Brusilov Offensive',
        avatar: '🎖️',
        grade: 10,
        keyActionsRu: [
          'Разработал и осуществил победоносное наступление Юго-Западного фронта летом 1916 года, сломавшее австро-венгерскую армию.',
          'В 1920 году перешёл на службу в Красную армию, призвав офицеров защищать Отечество в советско-польской войне.',
        ],
        legacyRu: 'Единственный русский военачальник Первой мировой войны, чьим именем названа фронтовая операция.',
        legacyEn: 'One of the brilliant military innovators of World War I.',
      },
    ],
    timelineEvents: [
      {
        year: 1914,
        dateRu: '19 июля (1 августа) 1914 г.',
        dateEn: 'August 1, 1914 AD',
        titleRu: 'Вступление России в Первую мировую войну',
        titleEn: 'Russia Enters World War I',
        descriptionRu: 'Германия объявила войну Российской империи после мобилизации русской армии в защиту Сербии.',
        significanceRu: 'Начало разрушительной войны, приведшей к крушению четырёх великих империй Европы.',
        tags: ['Первая мировая', 'Антанта', '1914 год'],
      },
      {
        year: 1917,
        dateRu: '2 марта 1917 г.',
        dateEn: 'March 15 (March 2 O.S.) 1917 AD',
        titleRu: 'Отречение императора Николая II от престола',
        titleEn: 'Abdication of Emperor Nicholas II',
        descriptionRu: 'Падение самодержавия и династии Романовых в ходе Февральской революции в Петрограде.',
        significanceRu: 'Ликвидация монархического строя в России и установление двоевластия.',
        tags: ['Николай II', 'Отречение', 'Февраль 1917'],
      },
      {
        year: 1917,
        dateRu: '25–26 октября (7–8 ноября) 1917 г.',
        dateEn: 'November 7–8 (Oct 25–26 O.S.) 1917 AD',
        titleRu: 'Октябрьское вооружённое восстание и штурм Зимнего дворца',
        titleEn: 'Bolshevik October Revolution',
        descriptionRu: 'Свержение Временного правительства, взятие Зимнего дворца и переход власти к Советам.',
        significanceRu: 'Установление Советской власти и рождение первого в мире социалистического государства.',
        tags: ['Октябрь 1917', 'Ленин', 'Аврора', 'Советы'],
      },
    ],
    terms: [
      {
        termRu: 'Двоевластие',
        termEn: 'Dual Power (Dvoyevlastiye)',
        definitionRu: 'Своеобразное переплетение двух властей в России после Февральской революции (март — июль 1917 г.): буржуазного Временного правительства и революционного Петроградского Совета рабочих и солдатских депутатов.',
        definitionEn: 'Coexistence of authority in early 1917 between the official Provisional Government and the grassroots Petrograd Soviet.',
        historicalContextRu: 'Завершилось в июле 1917 года после расстрела мирной демонстрации и сосредоточения власти у А.Ф. Керенского.',
        historicalContextEn: 'Terminated during the July Days crisis when Kerensky cracked down on radicals.',
      },
      {
        termRu: 'Декреты о мире и о земле',
        termEn: 'Decrees on Peace and Land',
        definitionRu: 'Первые законодательные акты Советской власти, принятые II Всероссийским съездом Советов 26 октября 1917 года.',
        definitionEn: 'Foundational Soviet laws promulgated by the Second Congress of Soviets in October 1917, withdrawing from WWI and redistributing noble estates to the peasantry.',
        historicalContextRu: 'Декрет о земле ликвидировал частную собственность на землю, конфисковав помещичьи угодья без выкупа.',
        historicalContextEn: 'Abolished private ownership of land without compensation.',
      },
    ],
    examFocusRu: {
      examTarget: 'ОГЭ / ЕГЭ (Задания 1-5, 13, 14, 18, 19, 21)',
      coreTakeaways: [
        'Понимать причины двух революций 1917 года: нерешённость аграрного, рабочего и национального вопросов + бремя войны.',
        'Знать хронологию 1917 г.: Февраль (отречение Николая II 2 марта) → Апрельские тезисы → Июльский кризис → Корниловский мятеж (август) → Октябрьское восстание (25 октября).',
        'Знать решения II съезда Советов: Декрет о мире, Декрет о земле, Декрет о власти (создание СНК во главе с Лениным).',
      ],
      essayPrompts: [
        'Почему Временное правительство не смогло удержать власть в 1917 году?',
        'Каковы были главные геополитические и цивилизационные последствия Октябрьской революции 1917 года?',
      ],
    },
    examFocusEn: {
      examTarget: 'Grade 10 Russian History Examination Review',
      coreTakeaways: [
        'Contrast the dynamics of February and October 1917 revolutions.',
        'Analyze the collapse of the Russian imperial military apparatus in WWI.',
      ],
      essayPrompts: [
        'Evaluate the structural causes behind the Bolshevik ascent to power in autumn 1917.',
      ],
    },
    quizQuestions: [
      {
        id: 'hist-q-10-1',
        type: 'multiple-choice',
        questionRu: 'В какой день по старому стилю состоялось Октябрьское вооружённое восстание и штурм Зимнего дворца в Петрограде?',
        questionEn: 'On which date in the Julian calendar did the Bolshevik October Revolution occur?',
        options: [
          '25 октября (7 ноября) 1917 г.',
          '23 февраля 1917 г.',
          '2 марта 1917 г.',
          '1 августа 1914 г.',
        ],
        correctAnswer: '25 октября (7 ноября) 1917 г.',
        explanationRu: 'Вооружённое восстание большевиков произошло 25–26 октября (7–8 ноября по новому стилю) 1917 года.',
        explanationEn: 'The October Revolution took place on October 25 (November 7), 1917.',
      },
      {
        id: 'hist-q-10-2',
        type: 'multiple-choice',
        questionRu: 'Какое уникальное политическое состояние возникло в России сразу после Февральской революции 1917 года?',
        questionEn: 'What unique political condition arose in Russia immediately after the February 1917 Revolution?',
        options: ['Двоевластие', 'Абсолютная монархия', 'Военная диктатура Корнилова', 'Однопартийная диктатура'],
        correctAnswer: 'Двоевластие',
        explanationRu: 'Двоевластие — сосуществование Временного правительства и Петроградского Совета в марте — июле 1917 года.',
        explanationEn: 'Dual Power characterized Russian governance between March and July 1917.',
      },
    ],
  },

  // =========================================================================
  // GRADE 10 - TOPIC 2: Гражданская война, военный коммунизм и образование СССР
  // =========================================================================
  {
    id: 'hist-10-civil-war-ussr-founding',
    grade: 10,
    eraId: 'era-grade-10',
    order: 2,
    titleRu: 'Гражданская война в России (1917–1922 гг.), «военный коммунизм» и образование СССР (1922 г.)',
    titleEn: 'Russian Civil War (1917–1922), War Communism & USSR Founding (1922)',
    subtitleRu: 'Красный и Белый террор, иностранная интервенция, разгром Колчака и Деникина, Брестский мир и объединение республик',
    subtitleEn: 'Red & White terror, Allied intervention, Kolchak and Denikin defeats, Treaty of Brest-Litovsk, and union treaty',
    periodRu: '1917 — 1922 гг.',
    periodEn: '1917 — 1922 AD',
    icon: '⭐',
    overviewRu:
      'После Октября 1917 года Россия погрузилась в пучину братоубийственной Гражданской войны (1917–1922 гг.). Большевики вышли из Первой мировой войны, заключив тяжёлый Брестский мир с Германией (март 1918 г.). Против Советской власти выступили белые армии генералов и адмиралов (А.В. Колчак в Сибири, А.И. Деникин на Юге, Н.Н. Юденич под Петроградом, П.Н. Врангель в Крыму) и войска 14 иностранных государств-интервентов (Великобритания, Франция, США, Япония). В условиях разрухи большевики ввели жестокую политику «военного коммунизма» (продразвёрстка, национализация всей промышленности, трудовая повинность). Благодаря созданию дисциплинированной Рабоче-Крестьянской Красной Армии (РККА) под руководством Л.Д. Троцкого и М.В. Фрунзе Советская власть победила. 30 декабря 1922 года на I Всесоюзном съезде Советов было провозглашено образование Союза Советских Социалистических Республик (СССР).',
    overviewEn:
      'Following October 1917, Russia erupted into the devastating Civil War. After concluding the Treaty of Brest-Litovsk (1918), the Bolsheviks fought White armies (Kolchak, Denikin, Yudenich, Wrangel) and Allied interventionists. Under the draconian policy of War Communism (grain requisitioning prodrazvyorstka, universal labor), the Red Army triumphed. On December 30, 1922, the Union of Soviet Socialist Republics (USSR) was officially founded.',
    sections: [
      {
        headingRu: '1. Брестский мир (3 марта 1918 г.) и иностранная интервенция',
        headingEn: '1. Treaty of Brest-Litovsk & Allied Intervention',
        contentRu:
          '3 марта 1918 года Советская Россия подписала в Брест-Литовске сепаратный мирный договор с Германией. Страна теряла Польшу, Прибалтику, часть Белоруссии и Закавказья, признавала независимость Украины и обязалась выплатить контрибуцию. Ленин пошёл на этот «похабный мир», чтобы получить мирную передышку для спасения революции. После поражения Германии в Первой мировой войне в ноябре 1918 года Брестский мир был аннулирован.\n\nБывшие союзники по Антанте начали интервенцию: британцы и американцы высадились в Мурманске и Архангельске, японцы и американцы — во Владивостоке, французы — в Одессе и Севастополе. В мае 1918 года восстал 40-тысячный Чехословацкий корпус, растянувшийся вдоль Транссибирской магистрали от Волги до Владивостока, что стало катализатором полномасштабной войны.',
        contentEn:
          'To preserve the fledgling regime, Lenin accepted the territorial losses of the Treaty of Brest-Litovsk in March 1918. Western interventionists occupied Murmansk, Vladivostok, and Black Sea ports, while the revolt of the Czechoslovak Legion unseated Soviet authority along the Trans-Siberian corridor.',
      },
      {
        headingRu: '2. Противостояние Красных и Белых: причины победы большевиков',
        headingEn: '2. Reds vs. Whites: Anatomy of Bolshevik Victory',
        contentRu:
          'Главные этапы борьбы:\n• Весна — лето 1919 г. — наступление армий «Верховного правителя России» адмирала А.В. Колчака из Сибири к Волге. Разгромлен армиями Восточного фронта под командованием М.В. Фрунзе;\n• Осень 1919 г. — поход Вооружённых сил Юга России генерала А.И. Деникина на Москву («Московская директива»). Белые взяли Курск, Орёл и подошли к Туле. Контрудар конницы С.М. Будённого и латышских стрелков отбросил деникинцев к Новороссийску;\n• Осень 1920 г. — разгром «Русской армии» генерала П.Н. Врангеля в Крыму: героический штурм перекопских укреплений и форсирование залива Сиваш бойцами М.В. Фрунзе.\n\nПочему победили красные?\n1. Большевики дали крестьянам землю (Декрет о земле), тогда как белые возвращали помещиков;\n2. Красные контролировали центр страны с промышленностью, железными дорогами и арсеналами;\n3. Белое движение страдало от отсутствия единого лидера, разобщённости и сотрудничества с иностранными интервентами, воспринимавшегося народом как измена.',
        contentEn:
          'The Red Army repelled Kolchak in Siberia (1919), halted Denikin’s march on Moscow at Orel-Tula, and stormed Wrangel’s Crimean defenses across the Sivash marshes in late 1920. The Reds prevailed because they defended peasant land tenure, commanded internal railway logistics, and mobilized a unified military command.',
      },
      {
        headingRu: '3. Политика «военного коммунизма» и образование СССР (1922 г.)',
        headingEn: '3. War Communism & Creation of the USSR (1922)',
        contentRu:
          'В годы войны большевики проводили социально-экономическую политику «военного коммунизма» (1918–1921 гг.):\n• Продразвёрстка — насильственное изъятие у крестьян всех излишков зерна и продовольствия (а часто и семенного фонда) по твёрдым ценам отрядами продотрядовцев;\n• Национализация всей промышленности (вплоть до мелких мастерских);\n• Запрет частной торговли и ликвидация денег (карточная система);\n• Всеобщая трудовая повинность («кто не работает, тот не ест»).\n\nПосле победы в войне встал вопрос об объединении советских республик (РСФСР, Украинская ССР, Белорусская ССР, Закавказская СФСР):\n• И.В. Сталин предлагал план автономизации: включение республик в состав РСФСР на правах автономий;\n• В.И. Ленин настоял на создании федерации равноправных суверенных республик с правом свободного выхода из союза.\n\n30 декабря 1922 года I Всесоюзный съезд Советов утвердил Декларацию и Договор об образовании Союза Советских Социалистических Республик (СССР).',
        contentEn:
          'War Communism entailed forced grain requisitioning (prodrazvyorstka), nationalization of all enterprise, and labor conscription. In 1922, Lenin rejected Stalin’s "autonomization" plan in favor of a federation of equal republics with constitutional right of secession, formally ratified on December 30, 1922.',
      },
    ],
    keyFigures: [
      {
        id: 'fig-frunze',
        nameRu: 'Михаил Васильевич Фрунзе',
        nameEn: 'Mikhail Vasilyevich Frunze',
        dates: '1885 — 1925 гг.',
        roleRu: 'Выдающийся советский полководец, военный нарком и теоретик',
        roleEn: 'Red Army commander, military commissar',
        avatar: '⭐',
        grade: 10,
        keyActionsRu: [
          'Разгромил армии адмирала Колчака на Восточном фронте.',
          'Осуществил блестящую Перекопско-Чонгарскую операцию по штурму Крыма (1920 г.), завершившую Гражданскую войну в Европейской России.',
          'Провёл военную реформу Красной армии 1924–1925 годов.',
        ],
        legacyRu: 'Один из главных творцов победы Красной армии в Гражданской войне.',
        legacyEn: 'Key military architect of early Soviet armed forces.',
      },
      {
        id: 'fig-kolchak',
        nameRu: 'Адмирал Александр Васильевич Колчак',
        nameEn: 'Admiral Alexander Vasilyevich Kolchak',
        dates: '1874 — 1920 гг.',
        roleRu: 'Полярный исследователь, адмирал, Верховный правитель России (1918–1920 гг.)',
        roleEn: 'Supreme Ruler of Russia, White movement leader',
        avatar: '⚓',
        grade: 10,
        keyActionsRu: [
          'Возглавил Белое движение в Сибири и на Дальнем Востоке.',
          'Создал Русскую армию в Омске, захватив золотой запас Российской империи.',
          'После поражения выдан чехословаками и расстрелян в Иркутске в феврале 1920 года.',
        ],
        legacyRu: 'Олицетворение трагической судьбы Белого движения и русского офицерства.',
        legacyEn: 'Tragic symbol of the anti-Bolshevik White cause.',
      },
    ],
    timelineEvents: [
      {
        year: 1918,
        dateRu: '3 марта 1918 г.',
        dateEn: 'March 3, 1918 AD',
        titleRu: 'Подписание Брестского мира',
        titleEn: 'Signing of the Treaty of Brest-Litovsk',
        descriptionRu: 'Сепаратный мирный договор Советской России с Германией и выход из Первой мировой войны.',
        significanceRu: 'Обеспечение передышки для укрепления Советской власти ценой колоссальных территориальных уступок.',
        tags: ['Брестский мир', 'Ленин', 'Германия'],
      },
      {
        year: 1920,
        dateRu: 'Ноябрь 1920 г.',
        dateEn: 'November 1920 AD',
        titleRu: 'Штурм Перекопа и освобождение Крыма',
        titleEn: 'Assault on Perekop & Liberation of Crimea',
        descriptionRu: 'Разгром белогвардейской армии генерала П.Н. Врангеля войсками М.В. Фрунзе.',
        significanceRu: 'Окончание масштабных боевых действий Гражданской войны в европейской части страны.',
        tags: ['Перекоп', 'Врангель', 'Фрунзе', 'Крым'],
      },
      {
        year: 1922,
        dateRu: '30 декабря 1922 г.',
        dateEn: 'December 30, 1922 AD',
        titleRu: 'Образование СССР',
        titleEn: 'Founding of the Soviet Union (USSR)',
        descriptionRu: 'I Всесоюзный съезд Советов утвердил объединение РСФСР, УССР, БССР и ЗСФСР в Союз ССР.',
        significanceRu: 'Рождение великого союзного социалистического государства, ставшего сверхдержавой XX века.',
        tags: ['СССР', 'Образование СССР', 'Ленин', 'Союз'],
      },
    ],
    terms: [
      {
        termRu: 'Военный коммунизм',
        termEn: 'War Communism',
        definitionRu: 'Внутренняя социально-экономическая политика Советского государства в 1918–1921 гг. в условиях Гражданской войны, основанная на продразвёрстке, всеобщей трудовой повинности и запрете торговли.',
        definitionEn: 'Radical wartime economic policy (1918–1921) characterized by compulsory agricultural requisitioning, universal labor service, and state distribution.',
        historicalContextRu: 'Привела к голоду 1921–1922 годов и Кронштадтскому мятежу, вынудив Ленина перейти к НЭПу.',
        historicalContextEn: 'Replaced by Lenin’s New Economic Policy (NEP) in 1921 following the Kronstadt rebellion.',
        examTipRu: 'Для ЕГЭ: обязательно помнить компоненты: продразвёрстка, отмена денег, трудовая повинность, карточки, национализация.',
      },
      {
        termRu: 'Продразвёрстка',
        termEn: 'Prodrazvyorstka (Grain Requisitioning)',
        definitionRu: 'Система принудительных заготовок сельскохозяйственной продукции в период «военного коммунизма», при которой крестьяне обязаны были сдавать государству все излишки хлеба сверх нормы потребления.',
        definitionEn: 'Forced quota-based seizure of grain and agricultural surplus from peasants by armed food detachments (prodotryady).',
        historicalContextRu: 'В марте 1921 года на X съезде РКП(б) заменена продналогом, который был в 2 раза меньше и объявлялся заранее.',
        historicalContextEn: 'Replaced in 1921 by the fixed, predictable prodnalog tax-in-kind.',
      },
    ],
    examFocusRu: {
      examTarget: 'ОГЭ / ЕГЭ (Задания 1-5, 13, 14, 18, 19, 21)',
      coreTakeaways: [
        'Понимать причины победы красных и поражения Белого движения (земельный вопрос, отсутствие единого командования белых, интервенция).',
        'Знать черты «военного коммунизма»: продразвёрстка, национализация, всеобщая трудовая повинность, уравнительное распределение.',
        'Помнить дату образования СССР — 30 декабря 1922 г. и спор Ленина (федерация) и Сталина (автономизация).',
      ],
      essayPrompts: [
        'Почему белогвардейские армии Колчака и Деникина не смогли найти прочной поддержки у крестьянского большинства России?',
        'В чём заключались принципиальные различия между планом «автономизации» Сталина и планом «федерации» Ленина при создании СССР?',
      ],
    },
    examFocusEn: {
      examTarget: 'Grade 10 Russian History Exam Guide',
      coreTakeaways: [
        'Master the key campaigns of the Civil War.',
        'Analyze the constitutional structure of the 1922 USSR Union Treaty.',
      ],
      essayPrompts: [
        'How did War Communism generate structural economic crisis by 1921?',
      ],
    },
    quizQuestions: [
      {
        id: 'hist-q-10-3',
        type: 'multiple-choice',
        questionRu: 'В каком году на I Всесоюзном съезде Советов было официально провозглашено образование СССР?',
        questionEn: 'In which year was the creation of the USSR officially declared at the First All-Union Congress of Soviets?',
        options: ['1922 г.', '1917 г.', '1924 г.', '1936 г.'],
        correctAnswer: '1922 г.',
        explanationRu: 'СССР был образован 30 декабря 1922 года подписанием Договора об образовании СССР четырьмя республиками.',
        explanationEn: 'The USSR was officially founded on December 30, 1922.',
      },
      {
        id: 'hist-q-10-4',
        type: 'multiple-choice',
        questionRu: 'Как называлась чрезвычайная система принудительного изъятия хлеба у крестьян в период «военного коммунизма»?',
        questionEn: 'What was the emergency system of forced agricultural grain extraction called under War Communism?',
        options: ['Продразвёрстка', 'Продналог', 'Подушная подать', 'Выкупные платежи'],
        correctAnswer: 'Продразвёрстка',
        explanationRu: 'Продразвёрстка — принудительное изъятие продовольствия по твёрдым ценам продотрядами в годы Гражданской войны.',
        explanationEn: 'Prodrazvyorstka was the mandatory grain requisitioning system enforced until 1921.',
      },
    ],
  },

  // =========================================================================
  // GRADE 10 - TOPIC 3: НЭП, индустриализация пятилеток и коллективизация (1921–1939 гг.)
  // =========================================================================
  {
    id: 'hist-10-nep-industrialization-collectivization',
    grade: 10,
    eraId: 'era-grade-10',
    order: 3,
    titleRu: 'СССР в 1920–1930-е гг.: НЭП, форсированная индустриализация пятилеток и коллективизация',
    titleEn: 'USSR in 1920s–1930s: NEP, Five-Year Industrialization & Collectivization',
    subtitleRu: 'Золотой червонец Сокольникова, Днепрогэс, Магнитка, колхозы, культурная революция и Конституция 1936 года',
    subtitleEn: 'Sokolnikov’s chervonets, DneproGES, Magnitogorsk, kolkhozes, Stakhanovite drive, and 1936 Constitution',
    periodRu: '1921 — 1939 гг.',
    periodEn: '1921 — 1939 AD',
    icon: '🏭',
    overviewRu:
      'После Гражданской войны страна лежала в руинах. В марте 1921 года на X съезде РКП(б) Ленин провозгласил переход к Новой экономической политике (НЭП): замена продразвёрстки продналогом, разрешение частной торговли, аренды мелких предприятий и введение твёрдого золотого червонца (Г.Я. Сокольников). Экономика быстро восстановилась, однако к концу 1920-х годов руководство СССР во главе с И.В. Сталиным взяло курс на форсированную индустриализацию и сплошную коллективизацию. Ценой неимоверного напряжения народных сил за годы первых двух пятилеток (1928–1937 гг.) СССР превратился из отсталой аграрной страны во вторую промышленную державу мира (построены Днепрогэс, Магнитогорский металлургический комбинат, Сталинградский и Челябинский тракторные заводы, Московское метро). В деревне ценой раскулачивания и трагедии голода 1932–1933 гг. были созданы колхозы, обеспечившие перекачку ресурсов в тяжелую и оборонную промышленность.',
    overviewEn:
      'To overcome economic collapse, Lenin launched the New Economic Policy (NEP) in 1921, introducing the prodnalog tax, private trade, and a stable currency. By the late 1920s, Joseph Stalin pivoted toward forced industrialization and total rural collectivization. Across two Five-Year Plans, the USSR built giants like DneproGES and Magnitogorsk, rising to become the world’s second industrial power, while collectivization eliminated private farming, funding defense ahead of World War II.',
    sections: [
      {
        headingRu: '1. Новая экономическая политика (НЭП, 1921–1928 гг.)',
        headingEn: '1. The New Economic Policy (NEP, 1921–1928)',
        contentRu:
          'Кризис 1921 года (крестьянские восстания в Тамбовщине — «антоновщина», Кронштадтский мятеж моряков под лозунгом «Советы без коммунистов!») показал гибельность «военного коммунизма».\n\nВ марте 1921 года X съезд партии принял НЭП:\n• Замена продразвёрстки фиксированным продналогом (взимался в натуральной форме, был вдвое меньше развёрстки и объявлялся до начала весеннего сева; излишки крестьянин мог свободно продавать на рынке);\n• Разрешение частной торговли, концессий и аренды мелких и средних предприятий («нэпманы»);\n• Хозрасчёт на государственных предприятиях («тресты»);\n• Финансовая реформа 1922–1924 гг. наркома финансов Г.Я. Сокольникова: выпуск обеспеченного золотом советского червонца, восстановившего доверие к деньгам.\nК 1927 году экономика достигла довоенного уровня 1913 года.',
        contentEn:
          'Prompted by the Kronstadt rebellion and Tambov uprising, Lenin instituted NEP in March 1921: replacing grain requisitioning with a fixed tax-in-kind (prodnalog), legalizing market trade, and issuing a gold-backed currency (chervonets). Agricultural output recovered to pre-WWI levels by 1927.',
      },
      {
        headingRu: '2. Форсированная индустриализация: «Пятилетку — в четыре года!»',
        headingEn: '2. Five-Year Industrialization Drive',
        contentRu:
          'В 1925 году на XIV съезде ВКП(б) был взят курс на индустриализацию, а в 1928 году начался Первый пятилетний план (1928–1932 гг.). Сталин сформулировал историческую задачу: «Мы отстали от передовых стран на 50–100 лет. Мы должны пробежать это расстояние в десять лет. Либо мы сделаем это, либо нас сомнут».\n\nГлавный приоритет — группа «А» (тяжёлая промышленность, металлургия, энергетика, машиностроение, ВПК):\n• Флагманы первых пятилеток: Днепрогэс (крупнейшая гидроэлектростанция Европы), Магнитогорский и Кузнецкий металлургические комбинаты, Турксиб (Туркестано-Сибирская железная дорога), Сталинградский и Харьковский тракторные заводы, Горьковский автомобильный завод (ГАЗ), Московский метрополитен (открыт в 1935 г.);\n• Движение энтузиастов: Стахановское движение (в августе 1935 г. донецкий шахтёр Алексей Стаханов нарубил за смену 102 тонны угля, превысив норму в 14 раз);\n• Источники средств: экспорт зерна, нефти, леса и сокровищ музеев Эрмитажа; внутренние займы у населения; бесплатный труд заключённых ГУЛАГа (строительство Беломорканала).\nК 1937 году СССР вышел на 1-е место в Европе и 2-е место в мире по объёму промышленного производства.',
        contentEn:
          'The 1928 First Five-Year Plan prioritized heavy industry. Tens of thousands of factories arose, including DneproGES, Magnitogorsk, and GAZ. The Stakhanovite movement spurred hyper-productivity, transforming the USSR into the world’s second industrial giant by 1937.',
      },
      {
        headingRu: '3. Сплошная коллективизация сельского хозяйства (1929–1937 гг.)',
        headingEn: '3. Total Agrarian Collectivization',
        contentRu:
          'Для перекачки средств и рабочей силы из деревни на стройки пятилеток в конце 1929 года Сталин провозгласил «Год великого перелома» и курс на сплошную коллективизацию — объединение единоличных крестьянских хозяйств в коллективные хозяйства (колхозы) и совхозы.\n\n• Политика «ликвидации кулачества как класса» (раскулачивание): зажиточных и несогласных крестьян лишали имущества и целыми семьями высылали в Сибирь и на Север (раскулачено более 4 млн человек);\n• Насильственная ломка уклада вызвала резкий спад сбора зерна, забой скота крестьянами и трагический массовый голод 1932–1933 гг. в Поволжье, на Украине, Кубани и в Казахстане (погибли миллионы людей);\n• Создание сети МТС (машинно-тракторных станций): деревня получила отечественные тракторы и комбайны;\n• К концу 1930-х годов коллективизация была завершена: государство получило гарантированный централизованный источник дешёвого продовольствия и сырья.',
        contentEn:
          'In late 1929 Stalin launched forced collectivization into collective farms (kolkhozy) accompanied by "dekulakization," exiling millions. Agricultural disruptions provoked the catastrophic 1932–1933 famine. Despite human costs, collectivization secured food supplies for urban industrial centers.',
      },
    ],
    keyFigures: [
      {
        id: 'fig-stalin',
        nameRu: 'Иосиф Виссарионович Сталин (Джугашвили)',
        nameEn: 'Joseph Vissarionovich Stalin',
        dates: '1878 — 1953 гг.',
        roleRu: 'Генеральный секретарь ЦК ВКП(б), Председатель Совета Министров СССР, Генералиссимус Советского Союза',
        roleEn: 'General Secretary of the Communist Party, Soviet leader',
        avatar: '⭐',
        grade: 10,
        keyActionsRu: [
          'Осуществил форсированную индустриализацию и коллективизацию, создав мощный военно-промышленный комплекс.',
          'Возглавлял Государственный Комитет Обороны (ГКО) и Ставку Верховного Главнокомандования в Великой Отечественной войне.',
          'Участник Тегеранской, Ялтинской и Потсдамской конференций «Большой тройки».',
        ],
        legacyRu: 'Руководитель страны, превративший СССР в ядерную сверхдержаву и победитель фашизма, правивший методами жестокой командно-административной системы и массовых репрессий.',
        legacyEn: 'Led the transformation of the USSR into an industrialized military superpower and defeated Nazi Germany, at immense human and moral costs.',
      },
      {
        id: 'fig-stakhanov',
        nameRu: 'Алексей Григорьевич Стаханов',
        nameEn: 'Aleksei Grigoryevich Stakhanov',
        dates: '1906 — 1977 гг.',
        roleRu: 'Забойщик шахты «Центральная-Ирмино» в Донбассе, зачинатель стахановского движения',
        roleEn: 'Miner, founder of the Stakhanovite movement',
        avatar: '⛏️',
        grade: 10,
        keyActionsRu: [
          'В ночь с 30 на 31 августа 1935 года добыл за смену 102 тонны угля (норма — 7 тонн).',
          'Положил начало всенародному движению передовиков производства за перевыполнение трудовых норм.',
        ],
        legacyRu: 'Символ советского трудового энтузиазма первых пятилеток.',
        legacyEn: 'World-famous icon of Soviet labor heroism and rapid industrial productivity.',
      },
    ],
    timelineEvents: [
      {
        year: 1921,
        dateRu: 'Март 1921 г.',
        dateEn: 'March 1921 AD',
        titleRu: 'Переход к Новой экономической политике (НЭП)',
        titleEn: 'Transition to the New Economic Policy (NEP)',
        descriptionRu: 'X съезд РКП(б) отменил продразвёрстку, заменив её продналогом.',
        significanceRu: 'Преодоление послевоенной разрухи и восстановление экономики рыночными методами.',
        tags: ['НЭП', 'Продналог', 'Ленин'],
      },
      {
        year: 1928,
        dateRu: '1928–1932 гг.',
        dateEn: '1928–1932 AD',
        titleRu: 'Первая пятилетка в СССР',
        titleEn: 'First Five-Year Plan',
        descriptionRu: 'Начало форсированной индустриализации и строительства базовых отраслей тяжёлой промышленности.',
        significanceRu: 'Превращение СССР из аграрной страны в индустриальную державу.',
        tags: ['Пятилетка', 'Индустриализация', 'Днепрогэс', 'Магнитка'],
      },
      {
        year: 1929,
        dateRu: '1929 г.',
        dateEn: '1929 AD',
        titleRu: '«Год великого перелома» и начало сплошной коллективизации',
        titleEn: 'Start of Total Rural Collectivization',
        descriptionRu: 'Публикация статьи Сталина «Год великого перелома» и ликвидация кулачества как класса.',
        significanceRu: 'Полное огосударствление аграрного сектора и создание колхозного строя.',
        tags: ['Коллективизация', 'Колхоз', 'Раскулачивание'],
      },
      {
        year: 1936,
        dateRu: '5 декабря 1936 г.',
        dateEn: 'December 5, 1936 AD',
        titleRu: 'Принятие Конституции СССР («Сталинской конституции»)',
        titleEn: 'Adoption of the 1936 Soviet Constitution',
        descriptionRu: 'Провозглашение победы социализма в СССР и закрепление всеобщего равного избирательного права.',
        significanceRu: 'Юридическое оформление основ советского социалистического строя.',
        tags: ['Конституция 1936', 'Социализм', 'Закон'],
      },
    ],
    terms: [
      {
        termRu: 'Индустриализация в СССР',
        termEn: 'Soviet Industrialization',
        definitionRu: 'Процесс форсированного наращивания промышленного потенциала СССР в конце 1920–1930-х гг. (пятилетки) для ликвидации отставания от Запада и создания мощного ВПК.',
        definitionEn: 'Crash program of state-directed heavy industrial development across Five-Year Plans to ensure defense parity and self-sufficiency.',
        historicalContextRu: 'Осуществлялась за счёт внутренних источников накопления (коллективизация, продажа сырья, займы).',
        historicalContextEn: 'Financed domestically via agriculture, raw material exports, and consumer rationing.',
        examTipRu: 'Для ЕГЭ: называть ключевые стройки: Днепрогэс, Магнитка, Турксиб, Сталинградский тракторный, ГАЗ, Московское метро.',
      },
      {
        termRu: 'Коллективизация',
        termEn: 'Collectivization',
        definitionRu: 'Политика объединения мелких единоличных крестьянских хозяйств в крупные коллективные хозяйства (колхозы), проводившаяся в СССР в 1929–1937 гг.',
        definitionEn: 'Transformation of individual peasant agriculture into state-controlled collective farms (kolkhozy) and state farms (sovkhozy).',
        historicalContextRu: 'Сопровождалась раскулачиванием, созданием МТС и перекачкой зерна и людей на индустриальные стройки.',
        historicalContextEn: 'Accompanied by dekulakization and state grain procurements.',
      },
      {
        termRu: 'Стахановское движение',
        termEn: 'Stakhanovite Movement',
        definitionRu: 'Массовое движение советских рабочих, колхозников и инженеров за многократное превышение производственных норм и производительности труда, возникшее в 1935 году.',
        definitionEn: 'Mass campaign celebrating extraordinary industrial labor output inspired by coal miner Aleksei Stakhanov in 1935.',
        historicalContextRu: 'Охватило промышленность, сельское хозяйство (Паша Ангелина), транспорт (Пётр Кривонос).',
        historicalContextEn: 'Extended across transport, metallurgy, and mechanized farming.',
      },
    ],
    examFocusRu: {
      examTarget: 'ОГЭ / ЕГЭ (Задания 1-5, 13, 14, 18, 19, 21)',
      coreTakeaways: [
        'Сравнивать «военный коммунизм», НЭП и сталинскую модернизацию (индустриализацию и коллективизацию).',
        'Знать главные стройки пятилеток: Днепрогэс, Магнитогорск, Турксиб, ГАЗ, метро Москвы.',
        'Понимать последствия коллективизации: создание механизированного колхозного строя ценой слома традиционной деревни и голода 1932–1933 гг.',
      ],
      essayPrompts: [
        'Почему руководство СССР в конце 1920-х годов отказалось от НЭПа в пользу форсированной индустриализации и коллективизации?',
        'Какую роль созданный в 1930-е годы промышленный потенциал сыграл в победе СССР в Великой Отечественной войне?',
      ],
    },
    examFocusEn: {
      examTarget: 'Grade 10 Russian History Curriculum',
      coreTakeaways: [
        'Trace economic policy transitions from NEP to central planning.',
        'Evaluate the human and strategic balance sheet of pre-WWII Soviet modernization.',
      ],
      essayPrompts: [
        'Examine how industrial targets dictated agricultural collectivization policy.',
      ],
    },
    quizQuestions: [
      {
        id: 'hist-q-10-5',
        type: 'multiple-choice',
        questionRu: 'Какая гидроэлектростанция на Днепре стала крупнейшим символом Первой пятилетки в СССР?',
        questionEn: 'Which hydroelectric dam on the Dnieper became the premier symbol of the First Five-Year Plan?',
        options: ['Днепрогэс', 'Саяно-Шушенская ГЭС', 'Братская ГЭС', 'Волжская ГЭС'],
        correctAnswer: 'Днепрогэс',
        explanationRu: 'Днепрогэс (Днепровская гидроэлектростанция) была пущена в 1932 году, став гордостью первой пятилетки.',
        explanationEn: 'DneproGES was commissioned in 1932 as the centerpiece of early Soviet electrification.',
      },
      {
        id: 'hist-q-10-6',
        type: 'multiple-choice',
        questionRu: 'Кто в 1935 году нарубил за смену 102 тонны угля, положив начало массовому трудовому движению?',
        questionEn: 'Who mined 102 tons of coal in a single shift in 1935, initiating the labor movement bearing his name?',
        options: ['Алексей Стаханов', 'Михаил Фрунзе', 'Валерий Чкалов', 'Григорий Сокольников'],
        correctAnswer: 'Алексей Стаханов',
        explanationRu: 'Шахтёр Алексей Стаханов в августе 1935 года установил рекорд, положив начало Стахановскому движению.',
        explanationEn: 'Donbas miner Aleksei Stakhanov set the productivity record in August 1935.',
      },
    ],
  },

  // =========================================================================
  // GRADE 10 - TOPIC 4: Великая Отечественная война (1941–1945 гг.)
  // =========================================================================
  {
    id: 'hist-10-great-patriotic-war',
    grade: 10,
    eraId: 'era-grade-10',
    order: 4,
    titleRu: 'Великая Отечественная война советского народа (1941–1945 гг.): битва за Москву, Сталинград, Курская дуга и взятие Берлина',
    titleEn: 'The Great Patriotic War (1941–1945): Moscow, Stalingrad, Kursk & Fall of Berlin',
    subtitleRu: 'От трагедии 22 июня и обороны Брестской крепости до Знамени Победы над Рейхстагом и Парада Победы 1945 года',
    subtitleEn: 'From June 22 invasion and Brest Fortress to the Victory Banner over the Reichstag and the June 1945 Victory Parade',
    periodRu: '1941 — 1945 гг.',
    periodEn: '1941 — 1945 AD',
    icon: '🎖️',
    overviewRu:
      'Великая Отечественная война (22 июня 1941 — 9 мая 1945 гг.) — священная и величайшая страница отечественной истории. Нацистская Германия и её сателлиты вероломно обрушили на СССР колоссальную армаду плана «Барбаросса» с целью уничтожения советского государства и истребления народов (план «Ост»). Преодолев горечь первых отступлений и котлов лета 1941 года, героизм Брестской крепости и Смоленского сражения, советский народ под Москвой в декабре 1941 года развеял миф о непобедимости вермахта (Г.К. Жуков). Бессмертный подвиг 872 дней блокады Ленинграда, грандиозный триумф под Сталинградом (операция «Уран», пленение фельдмаршала Паулюса) и танковое сражение под Прохоровкой на Курской дуге (1943 г.) сломали хребет фашистскому зверю. В 1944 году десять сокрушительных «сталинских ударов» (операция «Багратион») полностью освободили родную землю. В мае 1945 года советские воины штурмом взяли Берлин, водрузили Знамя Победы над Рейхстагом (Егоров и Кантария) и спасли человечество от нацистского порабощения.',
    overviewEn:
      'The Great Patriotic War (1941–1945) was the defining existential struggle of modern civilization. Surviving Operation Barbarossa, the Red Army checked the Wehrmacht at Moscow in December 1941, held Leningrad through 872 days of blockade, and achieved the decisive turning point at Stalingrad in February 1943. After the tank clash at Kursk and Operation Bagration, Soviet troops captured Berlin in May 1945, hoisting the Victory Banner over the Reichstag.',
    sections: [
      {
        headingRu: '1. Начало войны, трагедия лета 1941 года и битва за Москву',
        headingEn: '1. Barbarossa, Summer Catastrophe & Battle of Moscow',
        contentRu:
          'На рассвете 22 июня 1941 года нацистская Германия без объявления войны напала на СССР по плану молниеносной войны («Барбаросса»). Нарком иностранных дел В.М. Молотов обратился к народу: «Наше дело правое. Враг будет разбит. Победа будет за нами!».\n• Месяц держался гарнизон Брестской крепости (майор П. Гаврилов: «Умираю, но не сдаюсь! Прощай, Родина»);\n• Подвиг Николая Гастелло (огненный таран) и Виктора Талалихина (ночной таран);\n• Эвакуация на восток: под руководством Совета по эвакуации (Н. Шверник, А. Косыгин) за Урал, в Сибирь и Среднюю Азию было вывезено более 2500 промышленных предприятий и 12 млн человек. На пустом месте, на морозе заводы давали танки Т-34 и штурмовики Ил-2 («Всё для фронта, всё для Победы!»);\n• Битва за Москву (30 сентября 1941 — 20 апреля 1942 гг.): план Гитлера «Тайфун» был сорван. 7 ноября 1941 года состоялся исторический военный парад на Красной площади, с которого полки уходили прямо на фронт. 5–6 декабря 1941 года войска Западного фронта генерала армии Г.К. Жукова перешли в победоносное контрнаступление, отбросив врага на 100–250 км от столицы. Это было первое крупное поражение вермахта во Второй мировой войне.',
        contentEn:
          'Invaded on June 22, 1941, the USSR evacuated 2,500 industrial plants eastward. Following the heroic stand of Brest Fortress, General Georgy Zhukov launched the winter counteroffensive at Moscow on December 5, 1941, shattering the Blitzkrieg myth.',
      },
      {
        headingRu: '2. Коренной перелом: Сталинградская и Курская битвы (1942–1943 гг.)',
        headingEn: '2. The Turning Point: Stalingrad & Kursk (1942–1943)',
        contentRu:
          '• Сталинградская битва (17 июля 1942 — 2 февраля 1943 гг.): бои за каждую улицу, завод и этаж (62-я армия В.И. Чуйкова, легендарный Дом Павлова, Мамаев курган). Приказ №227 («Ни шагу назад!»). 19 ноября 1942 года началась операция «Уран» (Г.К. Жуков, А.М. Василевский, К.К. Рокоссовский): советские танковые корпуса замкнули кольцо окружения в Калаче-на-Дону. 330-тысячная 6-я армия противника капитулировала, в плен взят генерал-фельдмаршал Фридрих Паулюс и 24 генерала. Сталинград стал коренным переломом всей Второй мировой войны;\n• 18 января 1943 г. — прорыв блокады Ленинграда (операция «Искра», встреча Ленинградского и Волховского фронтов);\n• Курская битва (5 июля — 23 августа 1943 гг.): немецкая наступательная операция «Цитадель» была перемолота советской эшелонированной обороной. 12 июля 1943 г. у деревни Прохоровка состоялось грандиозное встречное танковое сражение (до 1200 танков и самоходок). 5 августа 1943 года в Москве прогремел первый победный салют в честь освобождения Орла и Белгорода. Немецкая армия окончательно перешла к стратегической обороне.',
        contentEn:
          'Stalingrad (July 1942–Feb 1943) marked the decisive turning point: Operation Uranus encircled Paulus’s 6th Army. In July 1943 at Kursk (Prokhorovka tank clash), the Red Army smashed the German armored spearhead, inaugurating non-stop offensive momentum.',
      },
      {
        headingRu: '3. Блокада Ленинграда, освобождение Европы и взятие Берлина (1944–1945 гг.)',
        headingEn: '3. Siege of Leningrad, Liberation of Europe & Fall of Berlin',
        contentRu:
          '• 27 января 1944 г. — полное снятие 872-дневной фашистской блокады Ленинграда (погибло от голода, холода и бомбёжек около 1 млн жителей, символ трагедии — дневник 11-летней Тани Савичевой; спасением была ледовая «Дорога жизни» по Ладожскому озеру);\n• Лето 1944 г. — Белорусская наступательная операция «Багратион» (Рокоссовский, Василевский): крупнейший разгром нацистской группы армий «Центр», освобождение Белоруссии, Литвы и выход к границам Германии;\n• В 1944–1945 гг. Красная армия ценой сотен тысяч жизней своих солдат освободила народы Европы: Польшу, Югославию, Венгрию, Чехословакию, Австрию, Румынию, Болгарию, освободила узников лагерей смерти (Освенцим 27 января 1945 г. воинами маршала Конева);\n• Берлинская операция (16 апреля — 2 мая 1945 гг., маршалы Г.К. Жуков, И.С. Конев, К.К. Рокоссовский): штурм Зееловских высот и окружение столицы Рейха. 30 апреля 1945 года сержанты Михаил Егоров и Мелитон Кантария (вместе с лейтенантом А. Берестом) водрузили штурмовое Знамя Победы над куполом поверженного Рейхстага;\n• В ночь с 8 на 9 мая 1945 года в предместье Берлина Карлсхорсте маршал Г.К. Жуков принял Акт о безоговорочной капитуляции вооружённых сил фашистской Германии. 9 Мая стало всенародным Днём Победы;\n• 24 июня 1945 года на Красной площади в Москве состоялся легендарный Парад Победы (принимал маршал Г.К. Жуков, командовал маршал К.К. Рокоссовский), где 200 фашистских знамён и штандартов были брошены к подножию Мавзолея Ленина;\n• В августе 1945 года советские войска под командованием маршала А.М. Василевского в Маньчжурии за 24 дня разгромили миллионную Квантунскую армию милитаристской Японии, победоносно завершив Вторую мировую войну (2 сентября 1945 г.).',
        contentEn:
          'Leningrad was fully liberated on January 27, 1944. Operation Bagration smashed Army Group Centre. In April–May 1945, Zhukov and Konev took Berlin. Yegorov and Kantaria raised the Victory Banner over the Reichstag. On May 8/9, 1945, Nazi Germany signed unconditional surrender. In August 1945, Soviet forces routed the Japanese Kwantung Army in Manchuria.',
      },
    ],
    keyFigures: [
      {
        id: 'fig-zhukov',
        nameRu: 'Георгий Константинович Жуков («Маршал Победы»)',
        nameEn: 'Georgy Konstantinovich Zhukov',
        dates: '1896 — 1974 гг.',
        roleRu: 'Маршал Советского Союза, четырежды Герой Советского Союза, величайший полководец XX века',
        roleEn: 'Marshal of the Soviet Union, chief commander',
        avatar: '🎖️',
        grade: 10,
        keyActionsRu: [
          'Командовал обороной Ленинграда и контрнаступлением под Москвой (1941 г.).',
          'Координировал действия фронтов под Сталинградом и на Курской дуге.',
          'Командовал 1-м Белорусским фронтом при штурме Берлина (1945 г.).',
          'Принял безоговорочную капитуляцию Германии в Карлсхорсте и Парад Победы 24 июня 1945 года.',
        ],
        legacyRu: 'Национальный символ Великой Победы, «Маршал Победы».',
        legacyEn: 'Supreme military strategist whose leadership crushed the Third Reich.',
      },
      {
        id: 'fig-rokossovsky',
        nameRu: 'Константин Константинович Рокоссовский',
        nameEn: 'Konstantin Konstantinovich Rokossovsky',
        dates: '1896 — 1968 гг.',
        roleRu: 'Маршал Советского Союза, Маршал Польши, дважды Герой Советского Союза',
        roleEn: 'Marshal of the Soviet Union',
        avatar: '⭐',
        grade: 10,
        keyActionsRu: [
          'Командовал Донским фронтом, пленившим армию Паулюса под Сталинградом (операция «Кольцо»).',
          'Автор гениального плана двойного главного удара в операции «Багратион» (1944 г.).',
          'Командовал легендарным Парадом Победы на Красной площади 24 июня 1945 года.',
        ],
        legacyRu: 'Один из самых талантливых и рыцарственных полководцев Второй мировой войны.',
        legacyEn: 'Brilliant operational mastermind of Stalingrad and Operation Bagration.',
      },
    ],
    timelineEvents: [
      {
        year: 1941,
        dateRu: '22 июня 1941 г.',
        dateEn: 'June 22, 1941 AD',
        titleRu: 'Вероломное нападение фашистской Германии на СССР',
        titleEn: 'German Invasion of the USSR (Operation Barbarossa)',
        descriptionRu: 'Начало Великой Отечественной войны советского народа.',
        significanceRu: 'Священная народная война за независимость Родины и спасение мира от нацизма.',
        tags: ['22 июня', 'Начало войны', 'Брестская крепость'],
      },
      {
        year: 1941,
        dateRu: '5 декабря 1941 г.',
        dateEn: 'December 5, 1941 AD',
        titleRu: 'Контрнаступление советских войск под Москвой',
        titleEn: 'Counteroffensive at the Battle of Moscow',
        descriptionRu: 'Разгром немецко-фашистских войск под Москвой армиями генерала Г.К. Жукова.',
        significanceRu: 'Первое крупное стратегическое поражение вермахта и срыв плана «Барбаросса».',
        tags: ['Битва за Москву', 'Жуков', 'Победа'],
      },
      {
        year: 1943,
        dateRu: '2 февраля 1943 г.',
        dateEn: 'February 2, 1943 AD',
        titleRu: 'Победоносное завершение Сталинградской битвы',
        titleEn: 'Soviet Victory in the Battle of Stalingrad',
        descriptionRu: 'Окружение и пленение 330-тысячной группировки фельдмаршала Паулюса.',
        significanceRu: 'Коренной перелом в Великой Отечественной и всей Второй мировой войне.',
        tags: ['Сталинград', 'Паулюс', 'Коренной перелом'],
      },
      {
        year: 1944,
        dateRu: '27 января 1944 г.',
        dateEn: 'January 27, 1944 AD',
        titleRu: 'Полное освобождение Ленинграда от фашистской блокады',
        titleEn: 'Complete Relief of the Siege of Leningrad',
        descriptionRu: 'Окончание 872 дней бессмертной и мужественной обороны города-героя на Неве.',
        significanceRu: 'Триумф стойкости и несгибаемого духа ленинградцев (День воинской славы России).',
        tags: ['Ленинград', 'Блокада', 'Дорога жизни'],
      },
      {
        year: 1945,
        dateRu: '8–9 мая 1945 г.',
        dateEn: 'May 8–9, 1945 AD',
        titleRu: 'Безоговорочная капитуляция Германии и День Победы',
        titleEn: 'German Instrument of Surrender & Victory Day',
        descriptionRu: 'Подписание маршалом Г.К. Жуковым Акта о капитуляции в Карлсхорсте.',
        significanceRu: 'Всенародный триумф Советского Союза и спасение мировой цивилизации от фашизма.',
        tags: ['9 Мая', 'День Победы', 'Рейхстаг', 'Капитуляция'],
      },
    ],
    terms: [
      {
        termRu: 'Коренной перелом',
        termEn: 'Decisive Turning Point (Korennoy Perelom)',
        definitionRu: 'Этап Великой Отечественной войны (ноябрь 1942 — конец 1943 гг., от Сталинграда до Днепра), в ходе которого стратегическая инициатива безвозвратно перешла к Красной армии, а враг перешёл к обороне.',
        definitionEn: 'The fundamental turning point (Nov 1942–late 1943) encompassing Stalingrad, Kursk, and the Battle of the Dnieper when strategic initiative shifted permanently to the USSR.',
        historicalContextRu: 'Включает две великие битвы: Сталинградскую (1942–1943 гг.) и Курскую (лето 1943 г.).',
        historicalContextEn: 'Anchored by the twin victories of Stalingrad and Kursk.',
        examTipRu: 'Обязательный термин ЕГЭ (Задание 19). Знать временные рамки и ключевые битвы коренного перелома.',
      },
      {
        termRu: 'Операция «Багратион» (1944 г.)',
        termEn: 'Operation Bagration',
        definitionRu: 'Крупнейшая Белорусская стратегическая наступательная операция Красной армии (23 июня — 29 августа 1944 г.), в ходе которой была наголову разгромлена немецкая группа армий «Центр».',
        definitionEn: 'Massive Soviet offensive in summer 1944 that annihilated 28 divisions of Wehrmacht Army Group Centre, liberating Belarus and eastern Poland.',
        historicalContextRu: 'Названа в честь героя Отечественной войны 1812 года полководца П.И. Багратиона.',
        historicalContextEn: 'Named after General Pyotr Bagration of 1812 fame.',
      },
      {
        termRu: 'План «Барбаросса» и план «Ост»',
        termEn: 'Operation Barbarossa & Generalplan Ost',
        definitionRu: 'План «Барбаросса» — план молниеносной войны (блицкрига) Германии против СССР за 6–8 недель; Генеральный план «Ост» — нацистский план колонизации и уничтожения славянского и еврейского населения СССР.',
        definitionEn: 'Barbarossa: Wehrmacht 1941 invasion blitzkrieg strategy; Generalplan Ost: Nazi extermination and colonial displacement program targeting Slavic and Jewish populations.',
        historicalContextRu: 'Оба плана были сокрушены героическим сопротивлением советского народа.',
        historicalContextEn: 'Thwarted through total Soviet military and demographic mobilization.',
      },
    ],
    examFocusRu: {
      examTarget: 'ОГЭ / ЕГЭ (Задания 1-5, 8, 13, 14, 17, 18, 19, 21 — Великая Отечественная война занимает до 20% всех вопросов ЕГЭ!)',
      coreTakeaways: [
        'Помнить ключевые битвы и даты: Битва за Москву (30 сент 1941 — 20 апр 1942, контрнаступление 5 дек 1941) → Сталинград (17 июля 1942 — 2 фев 1943, «Уран» 19 нояб) → Курская дуга (5 июля — 23 авг 1943, Прохоровка 12 июля) → Снятие блокады Ленинграда (27 янв 1944) → «Багратион» (лето 1944) → Берлинская операция (16 апр — 2 мая 1945).',
        'Знать имена героев: панфиловцы (политрук Клочков: «Велика Россия, а отступать некуда — позади Москва!»), Зоя Космодемьянская, Александр Матросов, Николай Гастелло, молодогвардейцы Краснодона.',
        'Полководцы: Г.К. Жуков, А.М. Василевский, К.К. Рокоссовский, И.С. Конев, Н.Ф. Ватутин, Р.Я. Малиновский.',
      ],
      essayPrompts: [
        'В чём заключалось всемирно-историческое значение победы советского народа в Сталинградской битве?',
        'Каковы были главные источники Победы советского народа в Великой Отечественной войне (военное искусство, экономика эвакуации, массовый героизм на фронте и в тылу)?',
      ],
    },
    examFocusEn: {
      examTarget: 'Grade 10 Russian History State Exam Focus',
      coreTakeaways: [
        'Master the operational chronology of the Eastern Front.',
        'Analyze how wartime economic evacuation underpinned victory.',
      ],
      essayPrompts: [
        'Assess the strategic implications of the Battle of Kursk for Axis collapse in Europe.',
      ],
    },
    quizQuestions: [
      {
        id: 'hist-q-10-7',
        type: 'multiple-choice',
        questionRu: 'В какой день советские войска под командованием генерала Г.К. Жукова перешли в победоносное контрнаступление под Москвой?',
        questionEn: 'On which date did the Red Army launch its victorious counteroffensive at the Battle of Moscow?',
        options: [
          '5–6 декабря 1941 г.',
          '22 июня 1941 г.',
          '7 ноября 1941 г.',
          '19 ноября 1942 г.',
        ],
        correctAnswer: '5–6 декабря 1941 г.',
        explanationRu: 'Контрнаступление под Москвой началось 5–6 декабря 1941 года, развеяв миф о непобедимости фашистской армии.',
        explanationEn: 'The Moscow counteroffensive began on December 5–6, 1941.',
      },
      {
        id: 'hist-q-10-8',
        type: 'multiple-choice',
        questionRu: 'Кто водрузил историческое штурмовое Знамя Победы над поверженным куполом Рейхстага в Берлине?',
        questionEn: 'Who raised the historic Victory Banner over the Reichstag dome in Berlin?',
        options: [
          'Михаил Егоров и Мелитон Кантария',
          'Александр Матросов и Николай Гастелло',
          'Василий Чуйков и Яков Павлов',
          'Иван Конев и Георгий Жуков',
        ],
        correctAnswer: 'Михаил Егоров и Мелитон Кантария',
        explanationRu: 'Сержанты Михаил Егоров и Мелитон Кантария (вместе с лейтенантом А. Берестом) водрузили Знамя Победы над Рейхстагом.',
        explanationEn: 'Sergeants Mikhail Yegorov and Meliton Kantaria hoisted the Victory Banner over the Reichstag.',
      },
    ],
  },
];
