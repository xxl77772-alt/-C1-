import { HistoryEra, HistoryTopic, HistoryDeepAnalysis } from '../../types';
import { HISTORY_ERAS as HISTORY_ERAS_MAP } from './historyEras';
import { TOPICS_GRADE_5_6 } from './historyTopics5_6';
import { TOPICS_GRADE_6_MEDIEVAL } from './historyTopics6_fragmentation_moscow';
import { TOPICS_GRADE_7 } from './historyTopics7';
import { TOPICS_GRADE_8 } from './historyTopics8';
import { TOPICS_GRADE_9 } from './historyTopics9';
import { TOPICS_GRADE_10 } from './historyTopics10';
import { TOPICS_GRADE_11 } from './historyTopics11';
import { HISTORY_DEEP_ANALYSIS, HISTORY_SOURCE_DOCUMENTS } from './historyDeepAnalysisData';
import { HISTORY_YOUTUBE_LECTURES, getAllHistoryVideoLectures, getHistoryVideoLecturesForTopic } from './historyYoutubeLectures';

export const HISTORY_ERAS_RECORD = HISTORY_ERAS_MAP;
export const HISTORY_ERAS: HistoryEra[] = Object.values(HISTORY_ERAS_MAP);
export { HISTORY_YOUTUBE_LECTURES, getAllHistoryVideoLectures, getHistoryVideoLecturesForTopic };

function generateDefaultHistoryDeepAnalysis(topic: HistoryTopic): HistoryDeepAnalysis {
  return {
    causeAndEffectRu: {
      prerequisites: [
        { categoryRu: 'Социально-политические', descriptionRu: `Развитие институтов государственной власти и сословных отношений в период: ${topic.periodRu}.` },
        { categoryRu: 'Экономические', descriptionRu: 'Изменения в хозяйственном укладе, торговых путях, налогах и формах собственности на землю.' },
        { categoryRu: 'Внешнеполитические', descriptionRu: 'Взаимодействие с соседними державами, геополитические вызовы и оборона государственных рубежей.' },
        { categoryRu: 'Духовные и культурные', descriptionRu: 'Эволюция общественного сознания, религиозных институтов и национально-культурной идентичности.' },
      ],
      pretextRu: `Обострение накопившихся противоречий, послужившее катализатором ключевых процессов эпохи (${topic.subtitleRu}).`,
      turningPointRu: topic.timelineEvents[0]?.titleRu || 'Кульминационный перелом в расстановке сил эпохи',
      shortTermOutcomesRu: [
        'Перестройка управленческих структур и принятие важнейших законодательных и политических решений.',
        'Закрепление новых позиций ведущих исторических деятелей и государственных институтов.',
      ],
      longTermSignificanceRu: [
        'Определило стратегический вектор дальнейшего развития российской государственности и права.',
        'Вошло в золотой фонд исторической памяти и традиций отечественной цивилизации.',
      ],
    },
    historiographyDebatesRu: [
      {
        topic: `Оценка исторического значения темы «${topic.titleRu}»`,
        viewpointA: {
          historianOrSchool: 'Государственная (юридическая) школа (С. М. Соловьёв, Б. Н. Чичерин)',
          argument: 'Рассматривает исторические события как закономерный этап поступательного укрепления институтов централизованного государства.',
        },
        viewpointB: {
          historianOrSchool: 'Социально-экономическая школа (В. О. Ключевский, отечественная академическая мысль)',
          argument: 'Акцентирует внимание на интересах народных сословий, социальной борьбе и объективных экономических закономерностях.',
        },
        modernConsensus: 'Современная историческая наука гармонично сочетает анализ объективных экономических факторов с признанием колоссальной роли личности правителей и духовной культуры.',
      },
    ],
    geographyRu: {
      keyLocations: topic.timelineEvents.slice(0, 3).map((e) => ({
        name: e.titleRu.split(':')[0] || 'Ключевой исторический центр',
        role: e.significanceRu,
      })),
      strategicSignificance: 'Освоение, укрепление и защита геополитического пространства Российского государства.',
    },
  };
}

const RAW_HISTORY_TOPICS: HistoryTopic[] = [
  ...TOPICS_GRADE_5_6,
  ...TOPICS_GRADE_6_MEDIEVAL,
  ...TOPICS_GRADE_7,
  ...TOPICS_GRADE_8,
  ...TOPICS_GRADE_9,
  ...TOPICS_GRADE_10,
  ...TOPICS_GRADE_11,
];

export const ALL_HISTORY_TOPICS: HistoryTopic[] = RAW_HISTORY_TOPICS.map((topic) => {
  const existingDocs = topic.sourceDocuments || [];
  const additionalDocs = HISTORY_SOURCE_DOCUMENTS[topic.id] || [];
  const existingVideos = topic.videoLectures || [];
  const additionalVideos = HISTORY_YOUTUBE_LECTURES[topic.id] || [];
  return {
    ...topic,
    sourceDocuments: existingDocs.length > 0 ? existingDocs : additionalDocs,
    deepAnalysis: HISTORY_DEEP_ANALYSIS[topic.id] || generateDefaultHistoryDeepAnalysis(topic),
    videoLectures: existingVideos.length > 0 ? existingVideos : additionalVideos,
  };
});

export function getTopicsByGrade(grade: number): HistoryTopic[] {
  return ALL_HISTORY_TOPICS.filter((topic) => topic.grade === grade);
}

export function getTopicsByEra(eraId: string): HistoryTopic[] {
  return ALL_HISTORY_TOPICS.filter((topic) => topic.eraId === eraId);
}

export function getTopicById(id: string): HistoryTopic | undefined {
  return ALL_HISTORY_TOPICS.find((topic) => topic.id === id);
}

export function getAllHistoryEras(): HistoryEra[] {
  return HISTORY_ERAS;
}
