import { LiteraryWork, SchoolGrade, GradeCurriculumInfo, LiteratureDeepAnalysis } from '../types';
import { GRADE_CURRICULUMS } from './literatureGrades';
import { MIDDLE_SCHOOL_WORKS } from './literatureWorksMiddle';
import { SENIOR_SCHOOL_WORKS } from './literatureWorksSenior';
import { LITERATURE_YOUTUBE_REVIEWS, getAllYoutubeReviews, getYoutubeReviewsForWork } from './literatureYoutubeReviews';
import { LITERATURE_DEEP_ANALYSIS } from './literatureDeepAnalysisData';
import { LITERATURE_CRITICAL_ARTICLES, getAllCriticalArticles, getCriticalArticlesForWork } from './literatureCriticalArticles';

export {
  GRADE_CURRICULUMS,
  getAllYoutubeReviews,
  getYoutubeReviewsForWork,
  LITERATURE_YOUTUBE_REVIEWS,
  LITERATURE_CRITICAL_ARTICLES,
  getAllCriticalArticles,
  getCriticalArticlesForWork,
};

function generateDefaultDeepAnalysis(work: LiteraryWork): LiteratureDeepAnalysis {
  return {
    creationHistoryRu: `Произведение «${work.titleRu}» создано в ${work.yearCreated} году и занимает центральное место в творчестве автора (${work.authorRu}). Оно отражает ключевые историко-культурные веяния своей эпохи и стало важной вехой в развитии направления «${work.movementRu}».`,
    compositionAnalysisRu: {
      structure: `Жанровая структура: ${work.genreRu}. Композиция подчинена раскрытию сложного внутреннего конфликта персонажей и ведущей нравственной идеи.`,
      exposition: `Начальные сцены вводят читателя в атмосферу эпохи, знакомя с ключевыми действующими лицами (${work.characters.map((c) => c.nameRu).join(', ')}).`,
      climax: 'Момент наивысшего драматического напряжения, в котором герои сталкиваются с предельным нравственным выбором.',
      denouement: 'Итоговое разрешение конфликта, подводящее читателя к глубокому авторскому философскому выводу.',
      nonPlotElements: 'Пейзажные зарисовки, монологи и портретные детали служат средством глубокого психологизма.',
    },
    poeticsAndSymbolsRu: work.centralThemesRu.map((t) => ({
      symbol: t.title,
      meaning: t.description,
    })),
    criticalReceptionRu: [
      {
        critic: 'Русская классическая критика',
        workOrArticle: 'Литературоведческий анализ произведения',
        quote: `«${work.titleRu}» явилось образцом глубокого проникновения в психологию русского человека и правду жизни.`,
        summary: 'Критики единодушно отмечали непреходящую эстетическую и гражданскую ценность произведения для отечественной культуры.',
      },
    ],
    historicalContextRu: `Создано в контексте социальных и духовных исканий русского общества ${work.yearCreated} года.`,
    sampleEssayPlanRu: {
      topic: `Проблематика и художественное своеобразие произведения «${work.titleRu}»`,
      introduction: `Вступление: Место шедевра ${work.authorRu} в истории русской словесности.`,
      thesis1: 'Анализ ключевого конфликта и системы персонажей с опорой на текст.',
      thesis2: 'Художественные приемы, символика и авторская позиция.',
      conclusion: 'Вывод: Актуальность поставленных вечных нравственных вопросов для современного читателя.',
    },
  };
}

const RAW_WORKS: LiteraryWork[] = [
  ...MIDDLE_SCHOOL_WORKS,
  ...SENIOR_SCHOOL_WORKS,
];

export const ALL_LITERATURE_WORKS: LiteraryWork[] = RAW_WORKS.map((work) => ({
  ...work,
  youtubeReviews: LITERATURE_YOUTUBE_REVIEWS[work.id] || [],
  criticalArticles: LITERATURE_CRITICAL_ARTICLES[work.id] || [],
  deepAnalysis: LITERATURE_DEEP_ANALYSIS[work.id] || generateDefaultDeepAnalysis(work),
}));

export const getWorksByGrade = (grade: SchoolGrade): LiteraryWork[] => {
  return ALL_LITERATURE_WORKS.filter((work) => work.grade === grade);
};

export const getWorkById = (id: string): LiteraryWork | undefined => {
  return ALL_LITERATURE_WORKS.find((work) => work.id === id);
};

export const getAllGrades = (): SchoolGrade[] => {
  return [5, 6, 7, 8, 9, 10, 11];
};
