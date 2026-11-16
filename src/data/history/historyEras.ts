import { HistoryEra, SchoolGrade } from '../../types';

export const HISTORY_ERAS: Record<SchoolGrade, HistoryEra> = {
  5: {
    id: 'era-grade-5',
    grade: 5,
    titleRu: 'Истоки и древнейшие народы на территории России',
    titleEn: 'Origins & Ancient Peoples of Eurasia',
    periodRu: 'С древнейших времён до IX века',
    periodEn: 'From Ancient Times to the 9th Century',
    centuryRu: 'Каменный век — IX в. н.э.',
    centuryEn: 'Stone Age — 9th Century AD',
    descriptionRu:
      'Первобытная эпоха на просторах Евразии, скифы и античные колонии Причерноморья, расселение восточных славян, великий путь «из варяг в греки», племенные союзы и соседство с Хазарским каганатом и Византией.',
    descriptionEn:
      'Paleolithic sites, Scythians, Greek Black Sea colonies, East Slavic tribal confederations, the trade route from the Varangians to the Greeks, and neighboring empires.',
    badgeRu: 'Древнейшая история',
    badgeEn: 'Ancient Roots',
    icon: '🏺',
    topicsCount: 2,
  },
  6: {
    id: 'era-grade-6',
    grade: 6,
    titleRu: 'Русь Древняя и Средневековая: от Рюрика до Ивана III',
    titleEn: 'Ancient & Medieval Rus: Rurik to Ivan III',
    periodRu: 'IX век — начало XVI века (862–1505 гг.)',
    periodEn: '9th Century — Early 16th Century (862–1505)',
    centuryRu: 'IX — XV века',
    centuryEn: '9th — 15th Centuries',
    descriptionRu:
      'Призвание варягов, объединение Киева и Новгорода, Крещение Руси князем Владимиром (988 г.), «Русская Правда» Ярослава Мудрого, феодальная раздробленность, Батыево нашествие и подвиги Александра Невского, возвышение Москвы, Куликовская битва (1380 г.) и свержение ордынского ига Иваном III (1480 г.).',
    descriptionEn:
      'Establishment of the Kievan Rus, Christianization (988), Russkaya Pravda laws, feudal fragmentation, Mongol invasion, Alexander Nevsky, Rise of Moscow, Battle of Kulikovo (1380), and emancipation under Ivan III (1480).',
    badgeRu: 'Древняя Русь',
    badgeEn: 'Kievan Rus & Moscow',
    icon: '🛡️',
    topicsCount: 5,
  },
  7: {
    id: 'era-grade-7',
    grade: 7,
    titleRu: 'Россия в XVI–XVII веках: Царство, Смута и первые Романовы',
    titleEn: 'Russia in the 16th–17th Centuries: Tsardom, Smuta & Early Romanovs',
    periodRu: '1505 — 1689 гг.',
    periodEn: '1505 — 1689',
    centuryRu: 'XVI — XVII века',
    centuryEn: '16th — 17th Centuries',
    descriptionRu:
      'Венчание Ивана Грозного на царство, реформы Избранной рады и Опричнина, взятие Казани и покорение Сибири Ермаком; трагедия Смутного времени, подвиг Минина и Пожарского (1612 г.), воцарение династии Романовых; «бунташный век» Алексея Михайловича, Соборное уложение 1649 г., раскол церкви и воссоединение с Украиной.',
    descriptionEn:
      'Ivan the Terrible, reforms of the Chosen Council, the Oprichnina; Time of Troubles, liberation of Moscow by Minin and Pozharsky (1612), election of Michael Romanov; Alexis of Russia, Law Code of 1649, Schism, and Cossack uprisings.',
    badgeRu: 'Московское царство',
    badgeEn: 'Tsardom of Muscovy',
    icon: '👑',
    topicsCount: 3,
  },
  8: {
    id: 'era-grade-8',
    grade: 8,
    titleRu: 'Российская империя в XVIII веке: от Петра I до Павла I',
    titleEn: 'Russian Empire in the 18th Century: Peter the Great to Paul I',
    periodRu: '1689 — 1801 гг.',
    periodEn: '1689 — 1801',
    centuryRu: 'XVIII век',
    centuryEn: '18th Century',
    descriptionRu:
      'Грандиозные преобразования Петра Великого: основание Санкт-Петербурга (1703 г.), победа в Северной войне (Полтава 1709 г.), провозглашение Империи (1721 г.) и Табель о рангах; эпоха дворцовых переворотов; Просвещённый абсолютизм Екатерины II Великой, победы Суворова и Ушакова, присоединение Крыма (1783 г.) и противоречивое правление Павла I.',
    descriptionEn:
      'Petrine modernizations, St. Petersburg founding, Poltava (1709), declaration of the Empire (1721); Era of Palace Revolutions; Catherine the Great, Enlightenment reforms, annexation of Crimea (1783), and Paul I reign.',
    badgeRu: 'Век Просвещения & Империя',
    badgeEn: 'Imperial Golden Age',
    icon: '⚔️',
    topicsCount: 4,
  },
  9: {
    id: 'era-grade-9',
    grade: 9,
    titleRu: 'Российская империя в XIX — начале XX века: Реформы и модернизация',
    titleEn: 'Russian Empire 1801–1914: Reform, War & Modernization',
    periodRu: '1801 — 1914 гг.',
    periodEn: '1801 — 1914',
    centuryRu: 'XIX — начало XX века',
    centuryEn: '19th — Early 20th Century',
    descriptionRu:
      'Отечественная война 1812 года и разгром Наполеона, восстание декабристов (1825 г.), правление Николая I и Крымская война; Великие реформы Александра II Освободителя (отмена крепостного права 1861 г., суд присяжных, земство); промышленный рывок Витте, русско-японская война, Первая русская революция 1905 г. и аграрная реформа Столыпина.',
    descriptionEn:
      'Patriotic War of 1812 against Napoleon, Decembrist Revolt (1825), Crimean War; Great Reforms of Alexander II (Emancipation of Serfs 1861, zemstvo, trial by jury); industrialization under Witte, 1905 Revolution, and Stolypin reforms.',
    badgeRu: 'Классическая империя',
    badgeEn: '19th Century Russia',
    icon: '🏛️',
    topicsCount: 4,
  },
  10: {
    id: 'era-grade-10',
    grade: 10,
    titleRu: 'Россия и СССР в 1914–1945 гг.: Войны, Революции и Великая Победа',
    titleEn: 'Russia & USSR 1914–1945: Revolution, Industrialization & Great Victory',
    periodRu: '1914 — 1945 гг.',
    periodEn: '1914 — 1945',
    centuryRu: 'Первая половина XX века',
    centuryEn: 'First Half of the 20th Century',
    descriptionRu:
      'Первая мировая война, Февральская и Октябрьская революции 1917 г., Гражданская война, образование СССР (1922 г.), НЭП, форсированная индустриализация и коллективизация; Великая Отечественная война (1941–1945 гг.): битва за Москву, Сталинград, Курская дуга, блокада Ленинграда, штурм Берлина и разгром фашизма.',
    descriptionEn:
      'WWI, 1917 Revolutions, Russian Civil War, USSR founding (1922), NEP, industrialization & collectivization; Great Patriotic War (1941–1945): Moscow, Stalingrad, Kursk, Siege of Leningrad, Fall of Berlin, and Victory in Europe.',
    badgeRu: 'Великие потрясения & Победа',
    badgeEn: '1914–1945 Watershed',
    icon: '⭐',
    topicsCount: 4,
  },
  11: {
    id: 'era-grade-11',
    grade: 11,
    titleRu: 'СССР и Новейшая история России: от Победы 1945 года до наших дней',
    titleEn: 'USSR & Contemporary Russia: 1945 to Present Day',
    periodRu: '1945 — настоящее время',
    periodEn: '1945 — Present',
    centuryRu: 'Вторая половина XX — XXI век',
    centuryEn: 'Late 20th — 21st Century',
    descriptionRu:
      'Послевоенное возрождение и ядерный паритет; «Оттепель» Хрущева, триумф космонавтики (Юрий Гагарин, 1961 г.); эпоха «Застоя» Брежнева, Самотлор и БАМ; Перестройка Горбачева и распад СССР; становление новой России в 1990-е, Конституция 1993 г.; Россия в XXI веке, воссоединение с Крымом (2014 г.), суверенитет и современные вызовы.',
    descriptionEn:
      'Post-war reconstruction & Cold War; Khrushchev Thaw and Space Age (Gagarin 1961); Brezhnev Stagnation & oil boom; Perestroika & collapse of USSR (1991); Russian Federation in the 1990s, 1993 Constitution; Russia in the 21st century and modern challenges.',
    badgeRu: 'Новейшая история',
    badgeEn: 'Contemporary Era',
    icon: '🚀',
    topicsCount: 4,
  },
};

export const getAllHistoryEras = (): HistoryEra[] => {
  return [
    HISTORY_ERAS[5],
    HISTORY_ERAS[6],
    HISTORY_ERAS[7],
    HISTORY_ERAS[8],
    HISTORY_ERAS[9],
    HISTORY_ERAS[10],
    HISTORY_ERAS[11],
  ];
};
