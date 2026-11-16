import { HistoryTopic } from '../../types';

export const TOPICS_GRADE_9: HistoryTopic[] = [
  // =========================================================================
  // GRADE 9 - TOPIC 1: Александр I и Отечественная война 1812 года
  // =========================================================================
  {
    id: 'hist-9-alexander-i-1812',
    grade: 9,
    eraId: 'era-grade-9',
    order: 1,
    titleRu: 'Александр I: либеральные реформы и Отечественная война 1812 года',
    titleEn: 'Alexander I: Liberal Reforms & The Patriotic War of 1812',
    subtitleRu: 'Негласный комитет, проекты Сперанского, Бородинская битва, Кутузов и разгром «Великой армии» Наполеона',
    subtitleEn: 'Secret Committee, Speransky’s vision, Battle of Borodino, Kutuzov, and the defeat of Napoleon’s Grande Armée',
    periodRu: '1801 — 1825 гг.',
    periodEn: '1801 — 1825 AD',
    icon: '🏛️',
    overviewRu:
      'Первая четверть XIX века стала эпохой великих надежд и суровых ратных испытаний. Вступив на престол после переворота 1801 года, Александр I («Дней Александровых прекрасное начало») с кругом молодых друзей — Негласным комитетом — начал преобразования: заменил коллегии министерствами (1802 г.) и издал Указ о вольных хлебопашцах (1803 г.). Гениальный реформатор М.М. Сперанский разработал план конституционной монархии и создал Государственный совет (1810 г.). В 1812 году Россия выдержала удар колоссальной 600-тысячной «Великой армии» императора Наполеона Бонапарта. Подвиг народа, полководческий гений М.И. Кутузова, Бородинское сражение и партизанское движение привели к полному уничтожению наполеоновского нашествия, а Заграничные походы 1813–1814 гг. сделали Россию вершительницей судеб Европы на Венском конгрессе 1815 года.',
    overviewEn:
      'Alexander I ascended the throne promising enlightenment reforms with his Secret Committee, creating ministries (1802), the 1803 Free Cultivators Edict, and the State Council designed by Mikhail Speransky (1810). In 1812, Russia endured the invasion of Napoleon’s Grande Armée. Led by General Mikhail Kutuzov, the Battle of Borodino, the burning of Moscow, and partisan warfare resulted in the annihilation of Napoleon’s army, culminating in the 1813–1814 European campaigns and the Congress of Vienna.',
    sections: [
      {
        headingRu: '1. «Дней Александровых прекрасное начало» и реформы Сперанского',
        headingEn: '1. Early Reforms & Speransky’s Constitutional Blueprint',
        contentRu:
          'Молодой император Александр I опирался на Негласный комитет (П. Строганов, А. Чарторыйский, Н. Новосильцев, В. Кочубей):\n• 1802 г. — Министерская реформа: коллегии заменены 8 министерствами на основе единоначалия министров;\n• 1803 г. — Указ о вольных хлебопашцах: впервые помещики получили право по взаимному согласию отпускать крепостных крестьян на волю с землёй за выкуп (освободилось около 1,5% крестьян, но был создан прецедент);\n• 1809 г. — Михаил Михайлович Сперанский подготовил фундаментальный проект «Введение к уложению государственных законов» (разделение властей, Государственная дума, выборные суды). Из-за сопротивления дворян-консерваторов Александр утвердил лишь законосовещательный Государственный совет (1810 г.), а в 1812 году Сперанский был отправлен в ссылку в Нижний Новгород.',
        contentEn:
          'Guided by his Secret Committee, Alexander replaced collegia with ministries and enacted the 1803 Free Cultivators Decree. Jurist Mikhail Speransky drafted a sweeping constitutional reform proposing separation of powers, though only the advisory State Council was realized in 1810.',
      },
      {
        headingRu: '2. Отечественная война 1812 года: от Немана до Бородино',
        headingEn: '2. The Patriotic War of 1812: Invasion to Borodino',
        contentRu:
          '12 (24) июня 1812 года 600-тысячная «Великая армия» Наполеона без объявления войны перешла реку Неман и вторглась в Россию. Русские армии (1-я армия М.Б. Барклая-де-Толли и 2-я армия П.И. Багратиона) отступали, ведя арьергардные бои, чтобы соединиться под Смоленском и не дать Наполеону разбить себя порознь.\n\nПод давлением общества 8 августа главнокомандующим был назначен ученик Суворова — Михаил Илларионович Голенищев-Кутузов.\n\n26 августа (7 сентября) 1812 года у села Бородино в 124 км к западу от Москвы состоялась генеральная битва:\n• Героическая оборона Багратионовых флешей и Шевардинского редута;\n• Бессмертная стойкость батареи Раевского («могила французской кавалерии»);\n• Рейд казаков Платова и кавалерии Уварова в тыл Наполеона.\nВ кровопролитнейшей однодневной битве в истории Наполеон не смог уничтожить русскую армию («Французы показали себя достойными победы, а русские стяжали право быть непобедимыми»).',
        contentEn:
          'Napoleon crossed the Neman in June 1812. Russian armies under Barclay de Tolly and Bagration fell back in an orderly strategic retreat to unite at Smolensk. Kutuzov took supreme command and fought Napoleon to a standstill at Borodino on August 26 (Sept 7), shattering French offensive capability.',
      },
      {
        headingRu: '3. Совет в Филях, пожар Москвы и гибель «Великой армии»',
        headingEn: '3. Council at Fili, Fire of Moscow & French Annihilation',
        contentRu:
          '1 (13) сентября 1812 года в избе крестьянина Фролова состоялся знаменитый военный совет в Филях. Кутузов произнёс исторические слова: «С потерею Москвы не потеряна ещё Россия. Приказываю отступать».\nРусская армия оставила Москву и совершила гениальный Тарутинский марш-манёвр: оторвалась от преследования Мюрата, вышла на Калужскую дорогу, прикрыв оружейные заводы Тулы и богатые хлебом южные губернии.\n\nНаполеон вошёл в опустевшую Москву, охваченную грандиозным пожаром. Месяц французский император ждал мирных предложений, но Александр I отказался от переговоров. Развернулась всенародная партизанская война: армейские летучие отряды (Денис Давыдов, А. Сеславин, А. Фигнер) и крестьянские партизаны (Василиса Кожина, Герасим Курин) уничтожали фуражиров захватчиков.\n\nВ октябре после битвы под Малоярославцем Кутузов вынудил Наполеона отступать по разорённой им же Старой Смоленской дороге. В ноябре при переправе через реку Березину остатки французской армии были наголову разгромлены. 25 декабря 1812 года Александр I подписал манифест о победном окончании Отечественной войны.\n\nВ 1813–1814 гг. русская армия освободила Европу (Битва народов под Лейпцигом 1813 г.) и в марте 1814 года триумфально вошла в Париж.',
        contentEn:
          'Following the Council at Fili, Kutuzov yielded Moscow to preserve the army, executing the Tarutino flank maneuver. Napoleon occupied a burning capital before retreating in freezing winter along the scorched Smolensk road, harassed by partisans like Denis Davydov. Annihilated at the Berezina, Napoleon fled; the Russian Army liberated Europe, capturing Paris in 1814.',
      },
    ],
    keyFigures: [
      {
        id: 'fig-kutuzov',
        nameRu: 'Светлейший князь Михаил Илларионович Кутузов-Смоленский',
        nameEn: 'Mikhail Illarionovich Kutuzov',
        dates: '1745 — 1813 гг.',
        roleRu: 'Генерал-фельдмаршал, главнокомандующий русской армией в войне 1812 года',
        roleEn: 'Field Marshal, supreme commander against Napoleon',
        avatar: '🎖️',
        grade: 9,
        keyActionsRu: [
          'Ученик А.В. Суворова, спасший армию на Бородинском поле.',
          'Принял мужественное решение об оставлении Москвы на совете в Филях («С потерею Москвы не потеряна Россия»).',
          'Осуществил Тарутинский манёвр и довёл преследование врага до полного изгнания за пределы Отечества.',
        ],
        legacyRu: 'Первый полный кавалер ордена Святого Георгия, национальный спаситель Отечества.',
        legacyEn: 'Legendary military strategist who orchestrated Napoleon’s catastrophic downfall.',
      },
      {
        id: 'fig-speransky',
        nameRu: 'Михаил Михайлович Сперанский',
        nameEn: 'Mikhail Mikhailovich Speransky',
        dates: '1772 — 1839 гг.',
        roleRu: 'Выдающийся государственный деятель, реформатор, кодификатор законов',
        roleEn: 'Statesman, legal reformer, codifier of Russian law',
        avatar: '📜',
        grade: 9,
        keyActionsRu: [
          'Автор проекта реформ государственного управления и создания Государственного совета (1810 г.).',
          'Позже при Николае I совершил титанический труд: создал 45-томное «Полное собрание законов Российской империи» и 15-томный «Свод законов».',
        ],
        legacyRu: 'Величайший русский юрист и реформатор государственного строя XIX века.',
        legacyEn: 'The preeminent legal and bureaucratic architect of 19th-century imperial administration.',
      },
    ],
    timelineEvents: [
      {
        year: 1803,
        dateRu: '20 февраля 1803 г.',
        dateEn: 'February 20, 1803 AD',
        titleRu: 'Указ о вольных хлебопашцах',
        titleEn: 'Free Cultivators Decree',
        descriptionRu: 'Разрешение помещикам освобождать крепостных крестьян с землёй за добровольный выкуп.',
        significanceRu: 'Первый законодательный акт, установивший возможность добровольного освобождения крепостных с землёй.',
        tags: ['Вольные хлебопашцы', 'Крестьяне', 'Реформа'],
      },
      {
        year: 1812,
        dateRu: '26 августа (7 сентября) 1812 г.',
        dateEn: 'September 7, 1812 AD',
        titleRu: 'Бородинское сражение',
        titleEn: 'Battle of Borodino',
        descriptionRu: 'Генеральное сражение Отечественной войны 1812 года между русской и французской армиями.',
        significanceRu: 'Разрушение надежд Наполеона на уничтожение русской армии; день воинской славы России.',
        tags: ['Бородино', 'Кутузов', 'Наполеон', '1812 год'],
      },
      {
        year: 1814,
        dateRu: '19 (31) марта 1814 г.',
        dateEn: 'March 31, 1814 AD',
        titleRu: 'Взятие Парижа русской армией',
        titleEn: 'Russian Army Enters Paris',
        descriptionRu: 'Император Александр I во главе коалиционных войск триумфально вошёл в столицу Франции.',
        significanceRu: 'Капитуляция наполеоновской Франции и крушение Первой империи.',
        tags: ['Париж', 'Победа', 'Заграничные походы'],
      },
      {
        year: 1815,
        dateRu: '1814–1815 гг.',
        dateEn: '1814–1815 AD',
        titleRu: 'Венский конгресс и создание Священного союза',
        titleEn: 'Congress of Vienna & Holy Alliance',
        descriptionRu: 'Установление новой системы международных отношений в Европе и включение Царства Польского в состав России.',
        significanceRu: 'Россия стала ведущей сухопутной державой Европы и гарантом послевоенного мира.',
        tags: ['Венский конгресс', 'Священный союз', 'Европа'],
      },
    ],
    terms: [
      {
        termRu: 'Негласный комитет',
        termEn: 'Secret Committee (Neglasny Komitet)',
        definitionRu: 'Неофициальный совещательный кружок ближайших соратников Александра I (П.А. Строганов, А.А. Чарторыйский, В.П. Кочубей, Н.Н. Новосильцев) в 1801–1803 гг., разработавший первые проекты реформ.',
        definitionEn: 'Informal advisory circle of Alexander I’s liberal confidants who drafted early administrative and educational modernizations.',
        historicalContextRu: 'Подготовил учреждение министерств, реформу Сената и Указ о вольных хлебопашцах.',
        historicalContextEn: 'Formulated the ministerial reforms and 1803 peasant emancipation decree.',
      },
      {
        termRu: 'Тарутинский манёвр',
        termEn: 'Tarutino Flank March',
        definitionRu: 'Стратегическое отступление русской армии под командованием М.И. Кутузова в сентябре 1812 года от Москвы на юго-запад к селу Тарутино.',
        definitionEn: 'Kutuzov’s brilliant strategic flank march southwest from Moscow to Tarutino in September 1812.',
        historicalContextRu: 'Позволил русской армии прикрыть оружейные заводы Тулы и богатые продовольствием губернии, оторвавшись от Наполеона.',
        historicalContextEn: 'Shielded arms manufacturing in Tula and grain stores while severing French communications.',
      },
      {
        termRu: 'Военные поселения',
        termEn: 'Military Settlements',
        definitionRu: 'Особая система организации войск в России в 1810–1857 гг., при которой военная служба совмещалась с сельскохозяйственным трудом (главный организатор — граф А.А. Аракчеев).',
        definitionEn: 'System organized by Count Arakcheyev where soldiers combined military service with farming under draconian garrison discipline.',
        historicalContextRu: 'Вызывали массовые восстания поселян (Чугуевское восстание 1819 г., Новгородское восстание 1831 г.).',
        historicalContextEn: 'Sparked furious peasant-soldier uprisings due to brutal micromanaged discipline.',
      },
    ],
    examFocusRu: {
      examTarget: 'ОГЭ / ЕГЭ (Задания 1-5, 13, 14, 18, 19, 21)',
      coreTakeaways: [
        'Знать этапы Отечественной войны 1812 года: вторжение через Неман → отступление и соединение под Смоленском → назначение Кутузова → Бородино (26 августа) → совет в Филях → пожар Москвы и Тарутинский манёвр → Малоярославец → разгром на Березине.',
        'Понимать значение проектов Сперанского (Государственный совет 1810 г.) и Указа о вольных хлебопашцах (1803 г.).',
        'Уметь показывать на карте партизанские рейды и маршрут отступления Наполеона по Старой Смоленской дороге.',
      ],
      essayPrompts: [
        'Почему оставление Москвы Кутузовым на совете в Филях оказалось спасительным стратегическим решением?',
        'Каковы были причины и последствия Отечественной войны 1812 года для международного авторитета России?',
      ],
    },
    examFocusEn: {
      examTarget: 'Grade 9 Russian History Curriculum',
      coreTakeaways: [
        'Master the strategic timeline of 1812.',
        'Analyze Mikhail Speransky’s constitutional concepts.',
      ],
      essayPrompts: [
        'Evaluate the role of civilian and partisan resistance in defeating Napoleon’s army.',
      ],
    },
    quizQuestions: [
      {
        id: 'hist-q-9-1',
        type: 'multiple-choice',
        questionRu: 'В какой день состоялось генеральное Бородинское сражение Отечественной войны 1812 года?',
        questionEn: 'On which date was the Battle of Borodino fought?',
        options: [
          '26 августа (7 сентября) 1812 г.',
          '12 июня 1812 г.',
          '1 сентября 1812 г.',
          '14 декабря 1812 г.',
        ],
        correctAnswer: '26 августа (7 сентября) 1812 г.',
        explanationRu: 'Бородинское сражение состоялось 26 августа (7 сентября по новому стилю) 1812 года.',
        explanationEn: 'The Battle of Borodino was fought on September 7 (August 26 Old Style), 1812.',
      },
      {
        id: 'hist-q-9-2',
        type: 'multiple-choice',
        questionRu: 'Кому принадлежат исторические слова на совете в Филях: «С потерею Москвы не потеряна ещё Россия»?',
        questionEn: 'Who uttered the historic words at the Fili Council: "With the loss of Moscow, Russia is not yet lost"?',
        options: ['М.И. Кутузов', 'М.Б. Барклай-де-Толли', 'П.И. Багратион', 'Александр I'],
        correctAnswer: 'М.И. Кутузов',
        explanationRu: 'Главнокомандующий М.И. Кутузов произнёс эту фразу, обосновывая необходимость отступления для сохранения армии.',
        explanationEn: 'Field Marshal Mikhail Kutuzov made the historic decree to abandon Moscow to save the army.',
      },
    ],
  },

  // =========================================================================
  // GRADE 9 - TOPIC 2: Движение декабристов и эпоха Николая I
  // =========================================================================
  {
    id: 'hist-9-decembrists-nicholas-i',
    grade: 9,
    eraId: 'era-grade-9',
    order: 2,
    titleRu: 'Восстание декабристов (1825 г.) и николаевская эпоха: Крымская война и оборона Севастополя',
    titleEn: 'Decembrist Revolt (1825) & Nicholas I: Crimean War & Sevastopol',
    subtitleRu: 'Северное и Южное общества, 14 декабря 1825 года, кодификация Сперанского, Синопский бой и 349 дней обороны Севастополя',
    subtitleEn: 'Northern & Southern Societies, Senate Square, Speransky code, Sinop naval victory, and the 349-day Siege of Sevastopol',
    periodRu: '1825 — 1856 гг.',
    periodEn: '1825 — 1856 AD',
    icon: '⚔️',
    overviewRu:
      'Офицеры-победители, прошедшие Европу в 1813–1814 гг., не могли смириться с сохранением в России крепостного рабства и самодержавного деспотизма. 14 декабря 1825 года на Сенатской площади Санкт-Петербурга вспыхнуло восстание декабристов — первое открытое революционное выступление в истории страны. Подавив мятеж, император Николай I (1825–1855 гг.) стремился укрепить порядок: создал Третье отделение жандармов (А.Х. Бенкендорф), утвердил идеологию «Православие, Самодержавие, Народность» (С.С. Уваров), но одновременно провёл кодификацию законов (М.М. Сперанский), реформу государственных крестьян (П.Д. Киселёв) и денежную реформу (Е.Ф. Канкрин). Правление завершилось трагедией Крымской войны (1853–1856 гг.): несмотря на подвиги Нахимова в Синопе и 349 дней героической обороны Севастополя, техническая и социально-экономическая отсталость крепостной России привела к поражению, сделав неизбежными Великие реформы.',
    overviewEn:
      'Returning victorious from Europe, liberal officers formed the Decembrist societies, staging an armed uprising on Senate Square on December 14, 1825. Crushing the revolt, Nicholas I instituted bureaucratic centralization, the Third Section secret police, and the Official Nationality triad ("Orthodoxy, Autocracy, Nationality"). Though Speransky codified the laws and Kiselev reformed state peasants, the Crimean War (1853–1856) exposed the technological paralysis of serfdom despite heroic resistance during the 349-day Siege of Sevastopol.',
    sections: [
      {
        headingRu: '1. Движение декабристов: тайные общества и восстание 14 декабря 1825 года',
        headingEn: '1. The Decembrist Movement & December 14, 1825 Revolt',
        contentRu:
          'Дворянские революционеры создали тайные организации:\n• Южное общество (в Украине, во главе с Павлом Пестелем): программный документ «Русская правда» — установление республики, ликвидация самодержавия и сословий, отмена крепостного права с передачей половины земли крестьянам, унитарное государство;\n• Северное общество (в Петербурге, во главе с Никитой Муравьёвым): программный документ «Конституция» — конституционная монархия, федеративное устройство из 14 держав, отмена крепостного права с сохранением помещичьих земель (крестьянам по 2 десятины на двор).\n\nПоводом к восстанию стал династический кризис междуцарствия после внезапной смерти Александра I в Таганроге (отказ великого князя Константина от престола в пользу Николая).\n\n14 декабря 1825 года заговорщики вывели 3000 солдат гвардейских полков на Сенатскую площадь в Петербурге, чтобы сорвать присягу Николаю I и заставить Сенат огласить «Манифест к русскому народу». Однако избранный диктатором восстания князь С. Трубецкой на площадь не явился, а Сенат уже успел присягнуть царю ночью. Герой войны 1812 года генерал-губернатор М.А. Милорадович пытался уговорить солдат разойтись, но был смертельно ранен П. Каховским. Николай I применил артиллерию: картечь рассеяла восставших.\nПо приговору суда пять лидеров декабристов (Пестель, Рылеев, Муравьёв-Апостол, Бестужев-Рюмин, Каховский) были казнены, а более 120 человек сосланы в Сибирь на каторгу. За ними добровольно последовали их жёны (княгини Трубецкая, Волконская).',
        contentEn:
          'The Southern Society (Pestel’s republican Russkaya Pravda) and Northern Society (Muravyov’s constitutional monarchist Constitution) exploited the interregnum following Alexander I’s death. On December 14, 1825, 3,000 troops assembled on Senate Square. After General Miloradovich was assassinated by Kakhovsky, Nicholas cleared the square with canister shot. Five leaders were hanged; over 120 were exiled to Siberia, followed by their devoted wives.',
      },
      {
        headingRu: '2. Внутренняя политика Николая I: порядок, бюрократия и кодификация',
        headingEn: '2. Nicholas I: Bureaucracy, Codification & Official Nationality',
        contentRu:
          'Николай I видел свою миссию в наведении железной дисциплины:\n• 1826 г. — создание III Отделения Собственной Е.И.В. канцелярии (политический сыск) и корпуса жандармов во главе с графом А.Х. Бенкендорфом. Издан жестокий цензурный устав («чугунный устав»);\n• Теория официальной народности министра просвещения С.С. Уварова: формула «Православие, Самодержавие, Народность» как исконная основа русской цивилизации в противовес европейским революциям;\n• 1830–1832 гг. — триумф законности: М.М. Сперанский систематизировал все законы страны, издав 45 томов «Полного собрания законов Российской империи» и 15 томов действующих норм — «Свод законов»;\n• 1837–1841 гг. — реформа государственных крестьян графа П.Д. Киселёва: упорядочение налогообложения, самоуправление волостей, открытие школ и медпунктов («подготовка отмены крепостного права»);\n• 1839–1843 гг. — финансовая реформа министра финансов Е.Ф. Канкрина: введение серебряного рубля и стабилизация денежного обращения.',
        contentEn:
          'Nicholas reinforced administrative control via the Third Section and the Official Nationality doctrine ("Orthodoxy, Autocracy, Nationality"). Concurrently, Speransky codified the Digest of Laws, Kiselev modernized state peasant administration, and Kankrin stabilized the ruble backed by silver.',
      },
      {
        headingRu: '3. Крымская война (1853–1856 гг.) и героическая оборона Севастополя',
        headingEn: '3. Crimean War (1853–1856) & The Defense of Sevastopol',
        contentRu:
          'Причины: обострение «Восточного вопроса» — борьба за раздел владений слабеющей Османской империи («больного человека Европы») и контроль над проливами Босфор и Дарданеллы. Повод: спор о «палестинских святынях» (ключах от Вифлеемского храма).\n\n• 18 ноября 1853 г. — Синопское сражение: вице-адмирал П.С. Нахимов в Синопской бухте наголову уничтожил турецкую эскадру. Это было последнее в истории великое сражение парусных флотов;\n• Весна 1854 г. — опасаясь усиления России, против неё выступила мощнейшая коалиция передовых европейских держав: Великобритания, Франция и Сардинское королевство при враждебном «нейтралитете» Австрии;\n• Сентябрь 1854 — август 1855 гг. — 349 дней героической обороны Севастополя. Русские моряки затопили корабли у входа в бухту, преградив путь вражескому флоту, и сошли на берег. Военный инженер Э.И. Тотлебен создал мощную систему бастионов. Защитой руководили вице-адмирал В.А. Корнилов, адмирал П.С. Нахимов и контр-адмирал В.И. Истомин (все трое погибли на Малаховом кургане). Прославились хирург Н.И. Пирогов (впервые применил эфирный наркоз и гипсовые повязки), первая военная медсестра Даша Севастопольская, матрос Пётр Кошка и молодой артиллерийский поручик Лев Николаевич Толстой («Севастопольские рассказы»);\n• В августе 1855 года после падения ключевой высоты — Малахова кургана русские войска перешли на Северную сторону бухты, взорвав укрепления.\n\nВ марте 1856 года был подписан Парижский мирный договор: Россия возвращала Севастополь в обмен на турецкую крепость Карс, но соглашалась на «нейтрализацию Чёрного моря» (запрет иметь военный флот и прибрежные крепости). Поражение вскрыло военно-техническую отсталость крепостнической России (гладкоствольные кремнёвые ружья против нарезных штуцеров, отсутствие парового флота и железных дорог).',
        contentEn:
          'After Nakhimov obliterated the Ottoman fleet at Sinop in 1853, Britain and France intervened. The 349-day Siege of Sevastopol showcased breathtaking valor by admirals Kornilov and Nakhimov, engineer Totleben, surgeon Pirogov, and artillery officer Leo Tolstoy. The 1856 Treaty of Paris neutralized the Black Sea and forced Russia to confront the urgent imperative to emancipate serfs and industrialize.',
      },
    ],
    keyFigures: [
      {
        id: 'fig-nakhimov',
        nameRu: 'Адмирал Павел Степанович Нахимов',
        nameEn: 'Pavel Stepanovich Nakhimov',
        dates: '1802 — 1855 гг.',
        roleRu: 'Выдающийся флотоводец, герой Синопа и руководитель обороны Севастополя',
        roleEn: 'Admiral, victor of Sinop, defender of Sevastopol',
        avatar: '⚓',
        grade: 9,
        keyActionsRu: [
          'Разгромил турецкий флот в Синопском сражении (1853 г.).',
          'Возглавил гарнизон Севастополя после гибели Корнилова, пользовался безграничной любовью матросов и солдат.',
          'Смертельно ранен вражеской пулей на Малаховом кургане 28 июня 1855 года.',
        ],
        legacyRu: 'Один из самых почитаемых национальных военных героев России.',
        legacyEn: 'Beloved naval hero and martyr of Sevastopol.',
      },
      {
        id: 'fig-pirogov',
        nameRu: 'Николай Иванович Пирогов',
        nameEn: 'Nikolay Ivanovich Pirogov',
        dates: '1810 — 1881 гг.',
        roleRu: 'Великий русский хирург, анатом, основоположник военно-полевой хирургии',
        roleEn: 'Founding father of modern field surgery',
        avatar: '🩺',
        grade: 9,
        keyActionsRu: [
          'Во время обороны Севастополя впервые в мире применил эфирный наркоз при операциях на поле боя.',
          'Ввёл гипсовую повязку для фиксации переломов и институт сестёр милосердия (Крестовоздвиженская община).',
        ],
        legacyRu: 'Спас жизни десятков тысяч раненых солдат, совершив революцию в мировой медицине.',
        legacyEn: 'World-renowned pioneer of military triage, anesthesia, and antiseptic surgery.',
      },
    ],
    timelineEvents: [
      {
        year: 1825,
        dateRu: '14 декабря 1825 г.',
        dateEn: 'December 14, 1825 AD',
        titleRu: 'Восстание декабристов на Сенатской площади',
        titleEn: 'Decembrist Uprising on Senate Square',
        descriptionRu: 'Первое открытое революционное выступление дворянских офицеров против самодержавия и крепостничества.',
        significanceRu: 'Рубежное событие русского освободительного движения, вдохновившее поколения борцов за свободу.',
        tags: ['Декабристы', 'Сенатская площадь', '1825 год'],
      },
      {
        year: 1853,
        dateRu: '18 ноября 1853 г.',
        dateEn: 'November 18, 1853 AD',
        titleRu: 'Синопское морское сражение',
        titleEn: 'Battle of Sinop',
        descriptionRu: 'Разгром турецкой эскадры Черноморским флотом вице-адмирала П.С. Нахимова.',
        significanceRu: 'Последнее крупное сражение эпохи парусных флотов (День воинской славы России).',
        tags: ['Синоп', 'Нахимов', 'Флот', 'Победа'],
      },
      {
        year: 1854,
        dateRu: 'Сентябрь 1854 — август 1855 гг.',
        dateEn: '1854–1855 AD',
        titleRu: '349 дней героической обороны Севастополя',
        titleEn: '349-Day Defense of Sevastopol',
        descriptionRu: 'Оборона главной базы Черноморского флота против превосходящих сил коалиции Великобритании, Франции и Турции.',
        significanceRu: 'Пример несгибаемого мужества русских воинов; рождение города русской славы Севастополя.',
        tags: ['Севастополь', 'Крымская война', 'Малахов курган'],
      },
      {
        year: 1856,
        dateRu: 'Март 1856 г.',
        dateEn: 'March 1856 AD',
        titleRu: 'Парижский мирный договор',
        titleEn: 'Treaty of Paris',
        descriptionRu: 'Окончание Крымской войны и нейтрализация Чёрного моря.',
        significanceRu: 'Осознание необходимости масштабной модернизации и отмены крепостного права.',
        tags: ['Парижский мир', 'Итоги', 'Крымская война'],
      },
    ],
    terms: [
      {
        termRu: 'Теория официальной народности',
        termEn: 'Theory of Official Nationality',
        definitionRu: 'Государственная консервативная идеология эпохи Николая I, сформулированная министром просвещения графом С.С. Уваровым: «Православие, Самодержавие, Народность».',
        definitionEn: 'The official imperial state ideology established by Sergey Uvarov combining Eastern Orthodoxy, unyielding Autocracy, and Russian Popular Spirit.',
        historicalContextRu: 'Служила духовным щитом самодержавия против западноевропейских революций и либерализма.',
        historicalContextEn: 'Countered Western revolutionary ideas and liberalism.',
        examTipRu: 'Для ЕГЭ: чётко помнить триаду «Православие, Самодержавие, Народность» и автора С.С. Уварова.',
      },
      {
        termRu: 'Нейтрализация Чёрного моря',
        termEn: 'Neutralization of the Black Sea',
        definitionRu: 'Условие Парижского трактата 1856 года, запрещавшее России и Османской империи иметь на Чёрном море военный флот, арсеналы и береговые укрепления.',
        definitionEn: 'Clause of the 1856 Treaty of Paris barring Russia and the Ottoman Empire from maintaining warships or naval bases on the Black Sea.',
        historicalContextRu: 'Ограничение было блестяще и бескровно ликвидировано канцлером А.М. Горчаковым в 1870–1871 годах.',
        historicalContextEn: 'Abrogated peacefully by Chancellor Gorchakov in 1870–1871 during the Franco-Prussian War.',
      },
    ],
    examFocusRu: {
      examTarget: 'ОГЭ / ЕГЭ (Задания 1-5, 13, 14, 18, 19, 21)',
      coreTakeaways: [
        'Сравнивать программы декабристов: «Русская правда» Пестеля (республика, унитаризм) и «Конституция» Муравьёва (конституционная монархия, федерация).',
        'Знать триаду Уварова: Православие, Самодержавие, Народность.',
        'Понимать причины поражения в Крымской войне (крепостничество, отсталая экономика, парусный флот против парового, гладкоствольное оружие против нарезного, отсутствие железных дорог к Крыму).',
      ],
      essayPrompts: [
        'Почему восстание декабристов 14 декабря 1825 года потерпело неудачу?',
        'Каким образом итоги Крымской войны доказали неизбежность отмены крепостного права в России?',
      ],
    },
    examFocusEn: {
      examTarget: 'Grade 9 Russian History Examination Prep',
      coreTakeaways: [
        'Contrast Northern and Southern Decembrist charters.',
        'Analyze military technology factors in the Crimean defeat.',
      ],
      essayPrompts: [
        'How did the Crimean War mark the definitive transition from romantic autocracy to modern institutional reform?',
      ],
    },
    quizQuestions: [
      {
        id: 'hist-q-9-3',
        type: 'multiple-choice',
        questionRu: 'На какой площади Санкт-Петербурга 14 декабря 1825 года произошло восстание декабристов?',
        questionEn: 'On which square in St. Petersburg did the Decembrist uprising occur?',
        options: ['Сенатская площадь', 'Дворцовая площадь', 'Красная площадь', 'Исаакиевская площадь'],
        correctAnswer: 'Сенатская площадь',
        explanationRu: 'Восстание декабристов произошло на Сенатской площади у Медного всадника 14 декабря 1825 года.',
        explanationEn: 'The Decembrist revolt erupted on Senate Square on December 14, 1825.',
      },
      {
        id: 'hist-q-9-4',
        type: 'multiple-choice',
        questionRu: 'Какое унизительное для России условие содержал Парижский мирный договор 1856 года?',
        questionEn: 'Which punitive clause did the 1856 Treaty of Paris impose on Russia?',
        options: [
          'Нейтрализация Чёрного моря (запрет иметь военный флот)',
          'Потеря Крыма и передача его Османской империи',
          'Отказ от выхода к Балтийскому морю',
          'Выплата колоссальной контрибуции Франции',
        ],
        correctAnswer: 'Нейтрализация Чёрного моря (запрет иметь военный флот)',
        explanationRu: 'Парижский договор запретил России держать военный флот и крепости на Чёрном море.',
        explanationEn: 'The Treaty of Paris banned warships and naval fortifications on the Black Sea.',
      },
    ],
  },

  // =========================================================================
  // GRADE 9 - TOPIC 3: Великие реформы Александра II Освободителя
  // =========================================================================
  {
    id: 'hist-9-great-reforms-alexander-ii',
    grade: 9,
    eraId: 'era-grade-9',
    order: 3,
    titleRu: 'Великие реформы Александра II Освободителя: отмена крепостного права и освобождение Болгарии',
    titleEn: 'Great Reforms of Alexander II: Emancipation of Serfs & Bulgarian Liberation',
    subtitleRu: 'Манифест 19 февраля 1861 г., земская, судебная и военная реформы, подвиг на Шипке и трагедия 1 марта 1881 года',
    subtitleEn: 'Emancipation Manifesto of 1861, Zemstvo & Trial by Jury, Battle of Shipka Pass, and the 1881 assassination',
    periodRu: '1855 — 1881 гг.',
    periodEn: '1855 — 1881 AD',
    icon: '🕊️',
    overviewRu:
      'Царствование Александра II Николаевича (1855–1881 гг.) стало эпохой глубочайшей трансформации страны — временем «Великих реформ». Осознав, что «лучше отменить крепостное право сверху, нежели дожидаться, пока оно само собой начнёт отменяться снизу», император 19 февраля 1861 года подписал Манифест об освобождении более 23 миллионов крестьян. За этим последовали земская и городская реформы (местное самоуправление), судебная реформа 1864 года (самый передовой в мире суд присяжных и адвокатура) и военная реформа Д.А. Милютина (всеобщая воинская повинность 1874 г.). Во внешней политике Россия вернула статус великой державы, разгромила Турцию в войне 1877–1878 гг. (героическая оборона Шипки и взятие Плевны) и принесла свободу братской Болгарии. Однако радикальное революционное народничество («Народная воля») ответило на реформы серией покушений, оборвав жизнь царя-реформатора 1 марта 1881 года.',
    overviewEn:
      'Alexander II the Liberator restructured Russia through the Great Reforms: the 1861 Emancipation of Serfs freed 23 million peasants, followed by elective local Zemstvo councils, the 1864 judicial reform with trial by jury, and universal conscription in 1874. His victory in the 1877–1878 Russo-Turkish War liberated Bulgaria at Shipka Pass. Despite his modernizations, terrorist revolutionaries of the People’s Will assassinated the Tsar on March 1, 1881.',
    sections: [
      {
        headingRu: '1. Отмена крепостного права: Манифест 19 февраля 1861 года',
        headingEn: '1. Emancipation of the Serfs: February 19, 1861 Manifesto',
        contentRu:
          'Подготовка реформы шла гласно (Главный комитет и Редакционные комиссии во главе с Я.И. Ростовцевым и Н.А. Милютиным).\n\n19 февраля 1861 года Александр II подписал Манифест и «Положения о крестьянах, вышедших из крепостной зависимости»:\n• Крестьяне получили личную свободу и общегражданские права (вступать в брак, владеть имуществом, переходить в другие сословия, судиться);\n• Земля оставалась собственностью помещиков. Крестьяне наделялись полевым наделом за выкуп. До выплаты выкупа крестьянин считался временнообязанным и нёс прежние повинности (барщину или оброк);\n• Выкупная операция: государство выплачивало помещику 80% стоимости земли ценными бумагами. Крестьянин возвращал оставшиеся 20% помещику, а государству выплачивал выкупные платежи с процентами (6% годовых в течение 49 лет);\n• Земля передавалась не отдельному крестьянину, а крестьянской общине (миру), связанной круговой порукой;\n• Отрезки: если до реформы надел крестьянина превышал установленную норму, помещик «отрезал» излишек в свою пользу (в чернозёмных губерниях крестьяне потеряли до 20% земли).',
        contentEn:
          'The 1861 decree granted personal freedom to 23 million serfs. Peasants received allotment plots financed through a 49-year state redemption bond program (vykupnye platezhi), held collectively by the village mir commune. Land cuts (otrezki) deprived peasants of pasturage, generating agrarian land hunger.',
      },
      {
        headingRu: '2. Другие Великие реформы 1860–1870-х годов',
        headingEn: '2. The Institutional Great Reforms',
        contentRu:
          'Модернизация затронула все институты Российской империи:\n• Земская реформа (1864 г.): в уездах и губерниях созданы выборные всесословные органы местного самоуправления — земства (занимались строительством школ, больниц, дорог, агрономией);\n• Городская реформа (1870 г.): учреждены выборные городские думы и управы во главе с городским головой;\n• Судебная реформа (1864 г.) — самая последовательная и радикальная: суд стал бессословным, гласным, состязательным, с участием присяжных заседателей и профессиональной адвокатуры (присяжные поверенные); учреждён независимый институт мировых судей;\n• Военная реформа Д.А. Милютина (1874 г.): отмена рекрутчины и введение всеобщей бессословной воинской повинности с 20 лет; срок службы в сухопутных войсках сокращён с 25 до 6 лет (для лиц с высшим образованием — до 6 месяцев); перевооружение армии нарезными винтовками (винтовка Бердана, «берданка»);\n• Реформа образования (1863–1864 гг.): Университетский устав 1863 года вернул университетам широкую автономию; открылись высшие женские курсы (Бестужевские курсы).',
        contentEn:
          'The 1864 Zemstvo councils managed regional welfare; the 1864 judicial reform created an open adversarial court system with trial by jury; and Milyutin’s 1874 military reform replaced lifelong recruitment with modern universal conscription.',
      },
      {
        headingRu: '3. Русско-турецкая война (1877–1878 гг.) и освобождение Болгарии',
        headingEn: '3. Russo-Turkish War (1877–1878) & Bulgarian Liberation',
        contentRu:
          'В 1876 году османские войска жестоко подавили Апрельское восстание в Болгарии. В России поднялась волна сочувствия к братьям-славянам. В апреле 1877 года Александр II объявил войну Турции:\n• Июль — декабрь 1877 г. — бессмертная 5-месячная оборона Шипкинского перевала в Балканских горах (русские солдаты генерала Н.Г. Столетова и болгарские ополченцы отбивали атаки превосходящей армии Сулеймана-паши: «На Шипке всё спокойно!»);\n• Осада и взятие Плевны (генерал М.Д. Скобелев, Э.И. Тотлебен);\n• Зимний переход через Балканы и взятие Сан-Стефано в 12 км от Стамбула.\n19 февраля 1878 года подписан Сан-Стефанский мир: Болгария получила независимость. Однако на Берлинском конгрессе 1878 года западные державы (Бисмарк, Дизраэли) вынудили Россию урезать плоды победы.',
        contentEn:
          'Russia declared war on Turkey in 1877 to protect Balkan Christians. The defense of Shipka Pass and capture of Pleven under "White General" Skobelev brought Russian troops to the gates of Istanbul, securing Bulgarian autonomy.',
      },
      {
        headingRu: '4. Народничество и трагедия 1 марта 1881 года',
        headingEn: '4. Populism & The Assassination of March 1, 1881',
        contentRu:
          'Непоследовательность реформ вызвала подъем революционного народничества (идеологи: М. Бакунин, П. Лавров, П. Ткачёв):\n• 1874 г. — «Хождение в народ»: тысячи интеллигентов пошли в деревни поднимать крестьян на восстание, но крестьяне сдавали агитаторов полиции;\n• 1879 г. — раскол организации «Земля и воля» на пропагандистский «Чёрный передел» (Г. Плеханов) и террористическую «Народную волю» (А. Желябов, С. Перовская, В. Фигнер);\n• Народовольцы вынесли смертный приговор Александру II и устроили на него охоту (подрыв поезда, взрыв Халтурина в Зимнем дворце);\n• 1 марта 1881 года на набережной Екатерининского канала в Петербурге бомба И. Гриневицкого смертельно ранила императора. На месте гибели царя был воздвигнут храм Воскресения Христова (Спас на Крови).',
        contentEn:
          'Disillusioned with rural apathy during the 1874 "Going to the People," radicals formed the terrorist People’s Will (Narodnaya Volya). On March 1, 1881, Ignacy Hryniewiecki assassinated the Tsar with a bomb. The Church of the Savior on Spilled Blood marks the site.',
      },
    ],
    keyFigures: [
      {
        id: 'fig-alexander-ii',
        nameRu: 'Император Александр II Николаевич Освободитель',
        nameEn: 'Alexander II the Liberator',
        dates: '1818 — 1881 гг.',
        roleRu: 'Император Всероссийский, автор Великих реформ',
        roleEn: 'Emperor of Russia, author of the Great Reforms',
        avatar: '👑',
        grade: 9,
        keyActionsRu: [
          'Отменил крепостное право Манифестом 19 февраля 1861 года.',
          'Провёл земскую, судебную, городскую и военную реформы.',
          'Освободил Болгарию от османского ига (1878 г.). Погиб от рук террористов-народовольцев 1 марта 1881 года.',
        ],
        legacyRu: 'Царь-Освободитель, совершивший глубочайшую модернизацию России в XIX веке.',
        legacyEn: 'Historic reformer who dismantled serfdom and modernized the state.',
      },
      {
        id: 'fig-skobelev',
        nameRu: 'Михаил Дмитриевич Скобелев («Белый генерал»)',
        nameEn: 'Mikhail Dmitrievich Skobelev',
        dates: '1843 — 1882 гг.',
        roleRu: 'Генерал от инфантерии, национальный герой русско-турецкой войны',
        roleEn: 'General, hero of the Russo-Turkish War',
        avatar: '⚔️',
        grade: 9,
        keyActionsRu: [
          'Прославился штурмом Плевны и стремительным броском через Балканы к Сан-Стефано.',
          'Всегда шёл в атаку на белом коне и в белом мундире, лично увлекая солдат в бой.',
        ],
        legacyRu: 'Народный герой России и национальный освободитель Болгарии.',
        legacyEn: 'Beloved military commander celebrated in Russia and Bulgaria as a liberator.',
      },
    ],
    timelineEvents: [
      {
        year: 1861,
        dateRu: '19 февраля 1861 г.',
        dateEn: 'February 19, 1861 AD',
        titleRu: 'Манифест об отмене крепостного права в России',
        titleEn: 'Emancipation Manifesto of 1861',
        descriptionRu: 'Освобождение более 23 миллионов крепостных крестьян от личной зависимости.',
        significanceRu: 'Величайший рубеж в истории России, открывший дорогу буржуазному развитию.',
        tags: ['Крепостное право', 'Александр II', 'Манифест', 'Свобода'],
      },
      {
        year: 1864,
        dateRu: '1864 г.',
        dateEn: '1864 AD',
        titleRu: 'Судебная и Земская реформы',
        titleEn: 'Judicial and Zemstvo Reforms of 1864',
        descriptionRu: 'Создание выборного земского самоуправления и самого передового суда присяжных.',
        significanceRu: 'Формирование институтов гражданского общества и правового государства.',
        tags: ['Земство', 'Суд присяжных', 'Реформы'],
      },
      {
        year: 1877,
        dateRu: '1877–1878 гг.',
        dateEn: '1877–1878 AD',
        titleRu: 'Русско-турецкая война за освобождение Балкан',
        titleEn: 'Russo-Turkish Liberation War',
        descriptionRu: 'Героическая оборона Шипки, взятие Плевны и освобождение Болгарии от 500-летнего османского ига.',
        significanceRu: 'Возвращение южной Бессарабии, присоединение Карса и Батума, возрождение болгарского государства.',
        tags: ['Шипка', 'Болгария', 'Скобелев', 'Победа'],
      },
      {
        year: 1881,
        dateRu: '1 марта 1881 г.',
        dateEn: 'March 1, 1881 AD',
        titleRu: 'Убийство Александра II народовольцами',
        titleEn: 'Assassination of Alexander II',
        descriptionRu: 'Гибель царя-Освободителя в Санкт-Петербурге от взрыва бомбы террориста И. Гриневицкого.',
        significanceRu: 'Поворот внутренней политики к контрреформам Александра III.',
        tags: ['1 марта 1881', 'Народная воля', 'Спас на Крови'],
      },
    ],
    terms: [
      {
        termRu: 'Временнообязанные крестьяне',
        termEn: 'Temporarily Obligated Peasants',
        definitionRu: 'Категория бывших помещичьих крестьян, освобождённых от крепостной зависимости по реформе 1861 года, но обязанных нести прежние повинности (барщину или оброк) до заключения выкупной сделки.',
        definitionEn: 'Transitional status of emancipated serfs required to perform traditional labor or monetary dues until redemption payments commenced.',
        historicalContextRu: 'Временнообязанное состояние было окончательно отменено законом Александра III с 1 января 1883 года.',
        historicalContextEn: 'Terminated by Alexander III in 1883 when redemption was made mandatory.',
        examTipRu: 'Ключевой термин ЕГЭ (Задание 19). Знать: почему возникло и когда ликвидировано.',
      },
      {
        termRu: 'Отрезки',
        termEn: 'Otrezki (Land Cuts)',
        definitionRu: 'Часть крестьянских наделов, отрезанная в пользу помещиков в ходе реформы 1861 года, если размер надела превышал установленную законом норму.',
        definitionEn: 'Portions of peasant land cut off and returned to landlords because pre-reform peasant holdings exceeded statutory maximums.',
        historicalContextRu: 'Помещики отрезали самые ценные участки (водопои, луга, леса), вынуждая крестьян арендовать их на кабальных условиях.',
        historicalContextEn: 'Created chronic land shortages in the fertile Central Black Earth belt.',
      },
      {
        termRu: 'Земства',
        termEn: 'Zemstva (Zemstvo Councils)',
        definitionRu: 'Выборные органы местного самоуправления в уездах и губерниях дореволюционной России, введённые земской реформой 1864 года.',
        definitionEn: 'Elective provincial and district administrative councils introduced in 1864 responsible for local infrastructure, healthcare, and schooling.',
        historicalContextRu: 'Ведали местным хозяйством, строительством школ («земские школы»), больниц («земские врачи») и дорог.',
        historicalContextEn: 'Fostered a dedicated class of rural doctors, teachers, and statisticians.',
      },
      {
        termRu: 'Суд присяжных',
        termEn: 'Trial by Jury',
        definitionRu: 'Институт судебной системы, введённый судебной реформой 1864 года, при котором 12 присяжных заседателей решали вопрос о виновности подсудимого, а судья определял меру наказания.',
        definitionEn: 'Adversarial jury trial introduced in 1864 where 12 citizen jurors rendered verdicts on criminal guilt.',
        historicalContextRu: 'Яркий пример: оправдание присяжными Веры Засулич в 1878 году за выстрел в петербургского градоначальника Трепова.',
        historicalContextEn: 'Famously acquitted Vera Zasulich in 1878 after shooting Governor Trepov.',
      },
    ],
    examFocusRu: {
      examTarget: 'ОГЭ / ЕГЭ (Задания 1-5, 13, 14, 18, 19, 21)',
      coreTakeaways: [
        'Понимать противоречия реформы 1861 г.: личная свобода дана, но земля не стала частной собственностью крестьянина (выкупные платежи, община, отрезки).',
        'Знать институты реформ: земства (1864), суд присяжных (1864), всесословная воинская повинность (1874).',
        'Помнить ключевые даты: 19 февраля 1861 (отмена крепостного права), 1877–1878 (русско-турецкая война), 1 марта 1881 (гибель Александра II).',
      ],
      essayPrompts: [
        'Почему отмену крепостного права 1861 года называют одновременно великим освобождением и «великим компромиссом»?',
        'Каковы были причины зарождения революционного терроризма народников в эпоху либеральных реформ?',
      ],
    },
    examFocusEn: {
      examTarget: 'Grade 9 Russian History Exam Syllabus',
      coreTakeaways: [
        'Master the financial and legal mechanics of the 1861 Emancipation.',
        'Analyze institutional legacies of the Zemstvo and modern jury systems.',
      ],
      essayPrompts: [
        'Assess the structural weaknesses in rural land distribution that fueled later 20th-century peasant revolutions.',
      ],
    },
    quizQuestions: [
      {
        id: 'hist-q-9-5',
        type: 'multiple-choice',
        questionRu: 'В каком году император Александр II подписал манифест об отмене крепостного права в России?',
        questionEn: 'In which year did Alexander II sign the Emancipation Manifesto?',
        options: ['1861 г.', '1855 г.', '1864 г.', '1881 г.'],
        correctAnswer: '1861 г.',
        explanationRu: 'Манифест об отмене крепостного права был подписан 19 февраля (3 марта по н. ст.) 1861 года.',
        explanationEn: 'The Emancipation Manifesto was promulgated on February 19, 1861.',
      },
      {
        id: 'hist-q-9-6',
        type: 'multiple-choice',
        questionRu: 'Какая всесословная воинская система была введена военной реформой Д.А. Милютина в 1874 году взамен рекрутчины?',
        questionEn: 'What universal military system was introduced in 1874 by Dmitry Milyutin replacing lifelong recruitment?',
        options: [
          'Всеобщая воинская повинность',
          'Стрелецкое войско',
          'Рекрутские наборы раз в 10 лет',
          'Наёмная иностранная армия',
        ],
        correctAnswer: 'Всеобщая воинская повинность',
        explanationRu: 'Военная реформа 1874 года заменила рекрутские наборы всеобщей воинской повинностью для мужчин всех сословий.',
        explanationEn: 'Universal conscription was instituted across all social classes in 1874.',
      },
    ],
  },

  // =========================================================================
  // GRADE 9 - TOPIC 4: Россия на рубеже XIX–XX веков: индустриализация, 1905 год и Столыпин
  // =========================================================================
  {
    id: 'hist-9-industrialization-revolution-1905',
    grade: 9,
    eraId: 'era-grade-9',
    order: 4,
    titleRu: 'Россия на рубеже XIX–XX веков: реформы Витте, Революция 1905 г. и аграрная реформа Столыпина',
    titleEn: 'Turn of the Century: Witte’s Industrial Boom, 1905 Revolution & Stolypin',
    subtitleRu: 'Транссибирская магистраль, золотой рубль (1897 г.), русско-японская война, Манифест 17 октября и хутора Столыпина',
    subtitleEn: 'Trans-Siberian Railway, gold ruble (1897), Russo-Japanese War, October Manifesto, and Stolypin’s agrarian reforms',
    periodRu: '1881 — 1914 гг.',
    periodEn: '1881 — 1914 AD',
    icon: '🚂',
    overviewRu:
      'На рубеже XIX и XX веков Российская империя переживала бурный и противоречивый модернизационный скачок. В правление Александра III Миротворца (1881–1894 гг.) и Николая II (1894–1917 гг.) благодаря экономической стратегии министра финансов С.Ю. Витте страна построила величайшую в мире Транссибирскую железнодорожную магистраль, ввела золотой рубль (1897 г.) и вошла в пятёрку мировых индустриальных лидеров. Однако сохранение абсолютного самодержавия, аграрное малоземелье крестьян и трагическое поражение в русско-японской войне (1904–1905 гг., сдача Порт-Артура, Цусима) привели к Первой русской революции (1905–1907 гг.). Под давлением Всероссийской октябрьской стачки Николай II издал Манифест 17 октября 1905 года, учредив Государственную думу и даровав гражданские свободы. Выдающийся премьер-министр П.А. Столыпин сочетал беспощадное подавление революционного террора с глубокой аграрной реформой, направленной на создание класса крепких крестьян-собственников.',
    overviewEn:
      'At the turn of the century Russia industrialized rapidly under Sergei Witte, who built the Trans-Siberian Railroad and adopted the gold standard (1897). Defeat in the Russo-Japanese War (1904–1905) triggered the 1905 Russian Revolution starting with Bloody Sunday. Paralyzed by the October General Strike, Nicholas II issued the October Manifesto of 1905, establishing civil liberties and the legislative State Duma. Prime Minister Pyotr Stolypin restored order and introduced agrarian reforms allowing peasants to privatize communal land into private farmsteads.',
    sections: [
      {
        headingRu: '1. Экономический рывок С.Ю. Витте и контрреформы Александра III',
        headingEn: '1. Sergei Witte’s Economic Boom & Alexander III',
        contentRu:
          'При Александре III («Миротворце») во внутренней политике возобладал консервативный курс контрреформ (К.П. Победоносцев, Д.А. Толстой): закон о земских начальниках (1889 г.), циркуляр о «кухаркиных детях» (1887 г.).\n\nОднако в экономике произошёл грандиозный индустриальный рывок благодаря министру финансов Сергею Юльевичу Витте:\n• Винная монополия (1894 г.): государственная монополия на продажу крепких спиртных напитков стала главным источником пополнения бюджета («пьяный бюджет»);\n• Денежная реформа 1897 г.: введение золотого обеспечения рубля сделало русскую валюту одной из самых твёрдых и конвертируемых в мире, вызвав приток иностранного капитала;\n• Железнодорожный бум: строительство Транссибирской магистрали («Великий Сибирский Путь» от Челябинска до Владивостока протяжённостью более 9000 км, 1891–1916 гг.);\n• Россия вышла на 1-е место в мире по темпам промышленного роста и добыче нефти в Баку.',
        contentEn:
          'Finance Minister Sergei Witte catalyzed industrialization via the state vodka monopoly, the 1897 gold-standard currency reform, and construction of the Trans-Siberian Railway, drawing massive French and British investment.',
      },
      {
        headingRu: '2. Русско-японская война (1904–1905 гг.) и падение Порт-Артура',
        headingEn: '2. Russo-Japanese War (1904–1905)',
        contentRu:
          'Стремление расширить влияние в Маньчжурии и Корее столкнуло Россию с модернизированной Японией:\n• В ночь на 27 января 1904 г. японский флот без объявления войны атаковал русскую эскадру в Порт-Артуре. Подвиг крейсера «Варяг» и канонерки «Кореец» в корейском порту Чемульпо (капитан В.Ф. Руднев);\n• Март 1904 г. — гибель на мине броненосца «Петропавловск» с командующим флотом вице-адмиралом С.О. Макаровым и художником-баталистом В.В. Верещагиным;\n• Декабрь 1904 г. — сдача крепости Порт-Артур после 11-месячной осады генералом Стесселем вопреки воле защитников;\n• Февраль 1905 г. — поражение в грандиозной сухопутной битве при Мукдене;\n• 14–15 мая 1905 г. — Цусимское морское сражение: 2-я Тихоокеанская эскадра адмирала З.П. Рожественского, совершив беспримерный переход вокруг Африки, была почти полностью уничтожена японским флотом адмирала Того.\n\nВ августе 1905 года при посредничестве президента США Т. Рузвельта С.Ю. Витте подписал Портсмутский мир: Россия уступила Японии южную часть Сахалина и аренду Порт-Артура.',
        contentEn:
          'The surprise Japanese attack in January 1904 led to Admiral Makarov’s death, the fall of Port Arthur, defeat at Mukden, and the naval catastrophe at Tsushima in May 1905. Under the Portsmouth Treaty negotiated by Witte, Russia ceded southern Sakhalin.',
      },
      {
        headingRu: '3. Первая русская революция и Манифест 17 октября 1905 года',
        headingEn: '3. The 1905 Revolution & October Manifesto',
        contentRu:
          '9 января 1905 года («Кровавое воскресенье») в Санкт-Петербурге правительственные войска расстреляли мирное 140-тысячное шествие рабочих во главе со священником Георгием Гапоном к Зимнему дворцу с петицией царю о нуждах народа (погибли сотни людей). Вера в «доброго царя» рухнула. Вспыхнула Первая русская революция:\n• Июнь 1905 г. — восстание матросов на броненосце «Князь Потёмкин-Таврический» на Чёрном море;\n• Октябрь 1905 г. — Всероссийская октябрьская политическая стачка (бастовало свыше 2 миллионов человек по всей стране, замерли заводы, телеграф, железные дороги);\n• 17 октября 1905 года Николай II подписал исторический Высочайший Манифест «Об усовершенствовании государственного порядка» (подготовленный С.Ю. Витте):\n  1. Дарование народу гражданских свобод (неприкосновенность личности, свобода слова, печати, собраний, союзов);\n  2. Учреждение законодательной Государственной думы («никакой закон не может восприять силу без одобрения Думы»);\n• Декабрь 1905 г. — вооружённое восстание рабочих в Москве (Пресня), подавленное гвардейским Семёновским полком.',
        contentEn:
          'Bloody Sunday on January 9, 1905, ignited nationwide upheaval, including the mutiny on the battleship Potemkin and the October General Strike. Nicholas II signed the October Manifesto on October 17, 1905, granting fundamental civil liberties and establishing the State Duma.',
      },
      {
        headingRu: '4. П.А. Столыпин и аграрная реформа (1906–1911 гг.)',
        headingEn: '4. Pyotr Stolypin & Agrarian Modernization',
        contentRu:
          'Петр Аркадьевич Столыпин, назначенный председателем Совета министров в 1906 году, провозгласил кредо: «Сначала успокоение, потом реформы!» и «Вам нужны великие потрясения, нам нужна Великая Россия!».\n\nСуть столыпинской аграрной реформы (Указ 9 ноября 1906 г.):\n• Разрушение крестьянской общины: крестьянам разрешалось свободно выходить из общины с закреплением надела в частную собственность;\n• Образование хуторов (усадьба с землёй вне деревни) и отрубов (земля в одном массиве с сохранением дома в деревне);\n• Массовое переселение малоземельных крестьян за Урал в Сибирь (выделение земли, ссуд и льготных ж/д вагонов — «столыпинских вагонов»); переселилось более 3 млн крестьян, освоивших миллионы десятин сибирских земель;\n• Развитие Крестьянского поземельного банка и кооперативного движения.\n1 сентября 1911 года Столыпин был смертельно ранен террористом Д. Богровым в оперном театре Киева в присутствии царя.',
        contentEn:
          'Prime Minister Pyotr Stolypin combated terrorism while launching agrarian reform allowing peasants to exit communal land tenure, creating individual consolidated farms (khutora and otruba) and sponsoring mass migration of millions of homesteaders to Siberia.',
      },
    ],
    keyFigures: [
      {
        id: 'fig-witte',
        nameRu: 'Граф Сергей Юльевич Витте',
        nameEn: 'Sergei Yulyevich Witte',
        dates: '1849 — 1915 гг.',
        roleRu: 'Министр путей сообщения, министр финансов, первый председатель Совета министров',
        roleEn: 'Finance Minister & First Prime Minister of Russia',
        avatar: '💼',
        grade: 9,
        keyActionsRu: [
          'Построил Транссибирскую магистраль и ввёл золотой рубль (1897 г.).',
          'Подготовил Манифест 17 октября 1905 года, учредивший Государственную думу.',
          'Заключил почётный Портсмутский мир с Японией (1905 г.).',
        ],
        legacyRu: 'Главный архитектор русской промышленной революции рубежа XIX–XX веков.',
        legacyEn: 'The mastermind behind Russia’s late-imperial industrial takeoff.',
      },
      {
        id: 'fig-stolypin',
        nameRu: 'Пётр Аркадьевич Столыпин',
        nameEn: 'Pyotr Arkadyevich Stolypin',
        dates: '1862 — 1911 гг.',
        roleRu: 'Председатель Совета министров Российской империи, автор аграрной реформы',
        roleEn: 'Prime Minister of Russia, agrarian reformer',
        avatar: '🌾',
        grade: 9,
        keyActionsRu: [
          'Разрушил архаичную крестьянскую общину, дав крестьянам право частной собственности на землю.',
          'Организовал переселение крестьян в Сибирь, превратив Сибирь в крупнейшего экспортёра сливочного масла и зерна.',
          'Подавил революционный террор 1905–1907 гг. военно-полевыми судами.',
        ],
        legacyRu: 'Выдающийся государственный деятель-патриот («Дайте государству 20 лет покоя внутреннего и внешнего, и вы не узнаете нынешней России»).',
        legacyEn: 'Visionary reformist statesman assassinated before his modernization goals were fully realized.',
      },
    ],
    timelineEvents: [
      {
        year: 1897,
        dateRu: '1897 г.',
        dateEn: '1897 AD',
        titleRu: 'Денежная реформа С.Ю. Витте (золотой рубль)',
        titleEn: 'Witte’s Currency Reform (Gold Standard)',
        descriptionRu: 'Введение золотого стандарта рубля и свободного размена кредитных билетов на золото.',
        significanceRu: 'Обеспечение финансовой стабильности и взрывной приток иностранных инвестиций.',
        tags: ['Витте', 'Золотой рубль', 'Экономика'],
      },
      {
        year: 1905,
        dateRu: '9 января 1905 г.',
        dateEn: 'January 9, 1905 AD',
        titleRu: '«Кровавое воскресенье» в Санкт-Петербурге',
        titleEn: 'Bloody Sunday',
        descriptionRu: 'Расстрел мирного шествия рабочих с петицией к царю; начало Первой русской революции.',
        significanceRu: 'Крах народной веры в царя-батюшку и начало революционной борьбы.',
        tags: ['Кровавое воскресенье', 'Революция 1905', 'Гапон'],
      },
      {
        year: 1905,
        dateRu: '17 октября 1905 г.',
        dateEn: 'October 17, 1905 AD',
        titleRu: 'Издание Высочайшего Манифеста 17 октября',
        titleEn: 'The October Manifesto',
        descriptionRu: 'Учреждение Государственной думы и дарование гражданских свобод.',
        significanceRu: 'Превращение Российской империи в конституционную дуалистическую монархию.',
        tags: ['Манифест 17 октября', 'Государственная дума', 'Свободы'],
      },
      {
        year: 1906,
        dateRu: '9 ноября 1906 г.',
        dateEn: 'November 9, 1906 AD',
        titleRu: 'Начало Столыпинской аграрной реформы',
        titleEn: 'Launch of the Stolypin Agrarian Reform',
        descriptionRu: 'Указ о праве свободного выхода крестьян из общины с закреплением земли в частную собственность.',
        significanceRu: 'Создание слоя крепких крестьян-собственников (фермеров) и подъём Сибири.',
        tags: ['Столыпин', 'Община', 'Хутор', 'Отруб'],
      },
    ],
    terms: [
      {
        termRu: 'Хутор и отруб',
        termEn: 'Khutor and Otrub',
        definitionRu: 'Формы крестьянского частного землевладения по реформе Столыпина: отруб — земельный участок в одном месте взамен чересполосицы с сохранением усадьбы в деревне; хутор — земельный участок с переносом самой усадьбы из деревни.',
        definitionEn: 'Private peasant farmsteads established under Stolypin: otrub (consolidated fields while living in village) vs khutor (isolated private homestead outside the village).',
        historicalContextRu: 'Создавались для формирования класса независимых крестьян-собственников.',
        historicalContextEn: 'Designed to build a class of prosperous individual peasant proprietors.',
        examTipRu: 'Один из самых частых терминов ЕГЭ (Задание 19). Чётко помнить разницу: на хутор переносился жилой дом, на отрубе дом оставался в деревне.',
      },
      {
        termRu: 'Манифест 17 октября 1905 года',
        termEn: 'October Manifesto of 1905',
        definitionRu: 'Законодательный акт Николая II, провозгласивший незыблемые гражданские свободы (слова, совести, собраний) и создавший законодательную Государственную думу.',
        definitionEn: 'Imperial decree issued by Nicholas II granting civil liberties and establishing a representative legislative parliament (State Duma).',
        historicalContextRu: 'Подготовлен С.Ю. Витте в разгар Всероссийской октябрьской стачки.',
        historicalContextEn: 'Drafted by Witte under pressure of the October General Strike.',
      },
    ],
    examFocusRu: {
      examTarget: 'ОГЭ / ЕГЭ (Задания 1-5, 13, 14, 18, 19, 21)',
      coreTakeaways: [
        'Понимать роль реформ Витте: Транссиб, золотой рубль 1897 г., винная монополия, привлечение капитала.',
        'Знать этапы Первой русской революции 1905–1907 гг.: Кровавое воскресенье (9 января) → стачка в Иваново-Вознесенске и первый Совет → «Потёмкин» → Октябрьская стачка → Манифест 17 октября → Декабрьское восстание в Москве.',
        'Понимать суть реформ Столыпина: отруба, хутора, переселенческая политика в Сибирь, военно-полевые суды.',
      ],
      essayPrompts: [
        'Почему Манифест 17 октября 1905 года стал переломным рубежом в трансформации российской государственности?',
        'Каковы были главные достижения и причины незавершённости Столыпинской аграрной реформы?',
      ],
    },
    examFocusEn: {
      examTarget: 'Grade 9 Russian History Examination Review',
      coreTakeaways: [
        'Analyze economic modernization under Sergei Witte.',
        'Contrast revolutionary turbulence with Stolypin’s agricultural privatization.',
      ],
      essayPrompts: [
        'Evaluate whether the Stolypin reforms could have averted revolution if uninterrupted by World War I.',
      ],
    },
    quizQuestions: [
      {
        id: 'hist-q-9-7',
        type: 'multiple-choice',
        questionRu: 'Какое событие 9 января 1905 года в Санкт-Петербурге послужило началом Первой русской революции?',
        questionEn: 'Which event on January 9, 1905, marked the beginning of the First Russian Revolution?',
        options: ['«Кровавое воскресенье»', 'Ленский расстрел', 'Восстание на броненосце «Потёмкин»', 'Московское восстание'],
        correctAnswer: '«Кровавое воскресенье»',
        explanationRu: 'Расстрел мирного шествия рабочих к Зимнему дворцу 9 января 1905 года вошёл в историю как «Кровавое воскресенье».',
        explanationEn: 'The shooting of peaceful marching workers on January 9, 1905, became known as Bloody Sunday.',
      },
      {
        id: 'hist-q-9-8',
        type: 'multiple-choice',
        questionRu: 'В чём заключалась главная цель Столыпинской аграрной реформы 1906 года?',
        questionEn: 'What was the primary objective of Stolypin’s 1906 agrarian reform?',
        options: [
          'Разрушение крестьянской общины и создание класса крестьян-собственников (хутора и отруба)',
          'Полная национализация всей помещичьей земли и передача Советам',
          'Создание коллективных хозяйств (колхозов)',
          'Запрет крестьянам переселяться в Сибирь',
        ],
        correctAnswer: 'Разрушение крестьянской общины и создание класса крестьян-собственников (хутора и отруба)',
        explanationRu: 'Столыпин разрушал общину, выделяя крестьянам участки (хутора и отруба) в личную собственность для формирования крепкого среднего класса.',
        explanationEn: 'Stolypin dismantled the village commune to foster an independent class of peasant landowners.',
      },
    ],
  },
];
