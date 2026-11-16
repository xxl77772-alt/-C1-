export type SupportedLang = 'ru' | 'en';

export interface AlphabetLetter {
  letter: string; // Uppercase and lowercase, e.g. "А а"
  upper: string;
  lower: string;
  name: string; // Russian name, e.g. "а", "бэ", "вэ"
  soundEn: string; // Approximate sound in English, e.g. "a as in father"
  ipa: string; // International Phonetic Alphabet, e.g. "/a/"
  type: 'vowel' | 'consonant' | 'sign';
  subType?: 'voiced' | 'voiceless' | 'soft' | 'hard';
  exampleWord: string; // e.g. "Арбуз"
  exampleTranslationEn: string; // "Watermelon"
  exampleTranslationRu: string; // "Арбуз"
  transliteration: string; // "A"
  audioText: string; // "А"
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'fill-blank' | 'match' | 'listen';
  questionRu: string;
  questionEn: string;
  audioPrompt?: string;
  options?: string[];
  correctAnswer: string | number;
  explanationRu: string;
  explanationEn: string;
  hintRu?: string;
  hintEn?: string;
}

export interface DialogueLine {
  speaker: string;
  speakerRoleEn: string;
  speakerRoleRu: string;
  avatar: string;
  textRu: string;
  textEn: string;
  stressMarks: string;
  notes?: string;
}

export interface Lesson {
  id: string;
  level: 'A0' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
  order: number;
  titleRu: string;
  titleEn: string;
  descriptionRu: string;
  descriptionEn: string;
  icon: string;
  estimatedMinutes: number;
  grammarFocus: string;
  dialogue?: DialogueLine[];
  theoryPoints: {
    headingRu: string;
    headingEn: string;
    contentRu: string;
    contentEn: string;
    examples: { ru: string; en: string; stress: string }[];
  }[];
  vocabulary: {
    ru: string;
    en: string;
    stress: string;
    partOfSpeech: string;
  }[];
  questions: QuizQuestion[];
}

export interface Flashcard {
  id: string;
  category: 'academic' | 'stylistics' | 'business' | 'idioms' | 'rhetoric' | 'paronyms' | 'essentials' | 'family' | 'food' | 'city' | 'time' | 'verbs' | 'adjectives' | 'home';
  wordRu: string;
  stressWord: string;
  transliteration: string;
  translationEn: string;
  translationRu: string;
  partOfSpeech: string;
  gender?: 'm' | 'f' | 'n' | 'pl';
  exampleSentenceRu: string;
  exampleSentenceEn: string;
  tip?: string;
}

export interface CaseInfo {
  nameRu: string;
  nameEn: string;
  questionRu: string;
  questionEn: string;
  usageRu: string;
  usageEn: string;
  color: string;
  singularEndings: {
    masculine: string;
    feminine: string;
    neuter: string;
  };
  examples: {
    sentenceRu: string;
    translationEn: string;
    highlightWord: string;
    caseName: string;
  }[];
}

export interface PhraseItem {
  id: string;
  category: 'rhetoric' | 'academic' | 'negotiation' | 'courtesy' | 'stylistics' | 'idioms' | 'greetings' | 'cafe' | 'directions' | 'shopping' | 'emergency';
  phraseRu: string;
  stressRu: string;
  transliteration: string;
  translationEn: string;
  contextNote?: string;
}

export interface UserProgress {
  xp: number;
  streakDays: number;
  lastActiveDate: string;
  completedLessons: string[]; // lesson ids
  lessonQuizScores?: Record<string, { score: number; total: number; date: string; percent: number }>;
  passedTests?: {
    id: string;
    testTitleRu: string;
    testTitleEn: string;
    score: number;
    total: number;
    percent: number;
    category: 'grammar' | 'vocabulary' | 'listening' | 'exercises';
    passedAt: string;
  }[];
  completedExercises?: Record<string, { type: 'fill-blank' | 'case-agreement' | 'sentence-build'; score: number; passedAt: string }>;
  listenedAudios?: string[]; // audio ids listened
  bookmarkedCards: string[]; // flashcard ids
  masteredCards: string[]; // flashcard ids
  studiedLiteratureWorks?: string[]; // literature work ids
  favoriteLiteratureWorks?: string[]; // literature work ids
  literatureQuizScores?: Record<string, { score: number; total: number; passedAt: string }>;
  watchedLiteratureVideos?: string[]; // review ids
  studiedHistoryTopics?: string[]; // history topic ids
  favoriteHistoryTopics?: string[]; // history topic ids
  historyQuizScores?: Record<string, { score: number; total: number; passedAt: string }>;
  watchedHistoryVideos?: string[]; // history video ids
  answeredQuizCount: number;
  correctQuizCount: number;
  // 30-Day Calendar & Google Calendar integration
  syncedCalendarEvents?: Record<number, { eventId: string; syncedAt: string; eventUrl?: string; summary?: string }>;
  completedCalendarDays?: number[];
  calendarPreferredTime?: string;
  calendarStartDate?: string;
}

export interface CalendarStudyDay {
  dayNumber: number; // 1 to 30
  workId?: string;
  grade: SchoolGrade;
  titleRu: string;
  titleEn: string;
  authorRu: string;
  authorEn: string;
  workTitleRu: string;
  workTitleEn: string;
  focusTopicRu: string;
  focusTopicEn: string;
  readingMinutes: number;
  criticalArticleTitleRu?: string;
  criticalArticleCriticRu?: string;
  criticalArticleUrl?: string;
  youtubeReviewTitleRu?: string;
  youtubeReviewChannel?: string;
  youtubeUrl?: string;
  tagsRu: string[];
}

// Literature Types (Grades 5 - 11)
export type SchoolGrade = 5 | 6 | 7 | 8 | 9 | 10 | 11;

export interface LiteraryCharacter {
  nameRu: string;
  nameEn: string;
  roleRu: string;
  roleEn: string;
  descriptionRu: string;
  descriptionEn: string;
  quoteRu?: string;
  quoteEn?: string;
}

export interface LiteraryExcerpt {
  id: string;
  titleRu: string;
  titleEn: string;
  textRu: string;
  textEn: string;
  contextRu: string;
  contextEn: string;
  analysisRu: string;
  analysisEn: string;
  poeticFormRu?: string;
}

export interface LiteraryTerm {
  termRu: string;
  termEn: string;
  definitionRu: string;
  definitionEn: string;
  exampleInWorkRu: string;
  exampleInWorkEn: string;
}

export interface LiteratureDeepAnalysis {
  creationHistoryRu: string;
  creationHistoryEn?: string;
  compositionAnalysisRu: {
    structure: string;
    exposition: string;
    climax: string;
    denouement: string;
    nonPlotElements?: string;
  };
  poeticsAndSymbolsRu: {
    symbol: string;
    meaning: string;
  }[];
  criticalReceptionRu: {
    critic: string;
    workOrArticle: string;
    quote: string;
    summary: string;
    articleUrl?: string;
  }[];
  historicalContextRu: string;
  sampleEssayPlanRu: {
    topic: string;
    introduction: string;
    thesis1: string;
    thesis2: string;
    conclusion: string;
  };
}

export interface LiteratureCriticalArticle {
  id: string;
  workId: string;
  workTitleRu: string;
  grade: SchoolGrade;
  titleRu: string;
  titleEn: string;
  authorOrCriticRu: string;
  authorOrCriticEn: string;
  sourceName: 'Полка' | 'Arzamas' | 'Ilibrary (Классическая критика)' | 'Русская виртуальная библиотека' | string;
  sourceType: 'academic' | 'classic' | 'guide';
  url: string; // verified working link (HTTP 200 OK)
  annotationRu: string;
  annotationEn: string;
  keyThemesRu: string[];
  readingTimeMinutes?: number;
}

export interface LiteraryWork {
  id: string;
  grade: SchoolGrade;
  titleRu: string;
  titleEn: string;
  authorRu: string;
  authorEn: string;
  authorDates: string;
  authorAvatar: string;
  yearCreated: string;
  genreRu: string;
  genreEn: string;
  movementRu: string; // e.g. "Реализм", "Романтизм", "Классицизм", "Модернизм"
  movementEn: string;
  briefSummaryRu: string;
  briefSummaryEn: string;
  detailedPlotRu: string;
  detailedPlotEn: string;
  centralThemesRu: { title: string; description: string }[];
  centralThemesEn?: { title: string; description: string }[];
  characters: LiteraryCharacter[];
  excerpts: LiteraryExcerpt[];
  literaryTerms: LiteraryTerm[];
  deepAnalysis?: LiteratureDeepAnalysis;
  examFocusRu: {
    targetExams: string; // e.g. "ОГЭ / ЕГЭ (Задание 11, 12) / Итоговое сочинение"
    coreIdeas: string;
    criticalEssayPrompts: string[];
  };
  examFocusEn: {
    targetExams: string;
    coreIdeas: string;
    criticalEssayPrompts: string[];
  };
  quizQuestions: QuizQuestion[];
  youtubeReviews?: LiteratureYoutubeReview[];
  criticalArticles?: LiteratureCriticalArticle[];
}

export interface LiteratureYoutubeReview {
  id: string;
  workId: string;
  workTitleRu: string;
  grade: SchoolGrade;
  titleRu: string;
  titleEn: string;
  channelName: string; // e.g. "Arzamas", "Полка", "Армен и Фёдор", "Лекторий Достоевский", "Прямая речь"
  channelAvatar: string;
  duration: string; // e.g. "18 мин", "42 мин"
  youtubeId: string; // e.g. "b3aZ_..."
  youtubeUrl: string;
  speakerOrHostRu: string;
  speakerOrHostEn: string;
  summaryRu: string;
  summaryEn: string;
  keyTakeawaysRu: string[];
  keyTakeawaysEn?: string[];
  tags: string[]; // e.g. ["Разбор сюжета", "Философия", "Символика", "ОГЭ / ЕГЭ"]
  recommendedForRu: string;
  recommendedForEn: string;
}

export interface GradeCurriculumInfo {
  grade: SchoolGrade;
  titleRu: string;
  titleEn: string;
  focusPeriodRu: string;
  focusPeriodEn: string;
  descriptionRu: string;
  descriptionEn: string;
  badgeRu: string;
  badgeEn: string;
  icon: string;
  curriculumHighlightsRu: string[];
  curriculumHighlightsEn: string[];
}

// Audio Materials Types
export interface AudioDialogueLine {
  id: string;
  speaker: string;
  speakerRoleRu: string;
  speakerRoleEn: string;
  avatar: string;
  textRu: string;
  stressRu: string;
  textEn: string;
  transliteration: string;
  audioText: string;
  note?: string;
}

export interface AudioDialogue {
  id: string;
  titleRu: string;
  titleEn: string;
  situationRu: string;
  situationEn: string;
  category: 'academic' | 'media' | 'business' | 'cafe' | 'directions' | 'hotel' | 'meeting' | 'transport' | 'health';
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
  lines: AudioDialogueLine[];
}

export interface AudioWord {
  id: string;
  wordRu: string;
  stressRu: string;
  transliteration: string;
  translationEn: string;
  category: 'orthoepy' | 'academic' | 'paronyms' | 'clusters' | 'stress-pairs' | 'essentials' | 'soft-hard' | 'emotions' | 'city';
  partOfSpeech: string;
  exampleSentenceRu: string;
  exampleSentenceEn: string;
  phoneticTipRu: string;
  phoneticTipEn: string;
}

export interface AudioPhrase {
  id: string;
  phraseRu: string;
  stressRu: string;
  transliteration: string;
  translationEn: string;
  category: 'idioms' | 'twisters' | 'politeness' | 'reactions' | 'proverbs';
  culturalNoteRu?: string;
  culturalNoteEn?: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

// Interactive Exercises Types
export interface FillBlankExercise {
  id: string;
  category: 'grammar' | 'vocabulary';
  sentenceWithBlank: string; // e.g. "Каждое утро Анна пьёт горячий ______ с лимоном."
  correctWord: string; // "чай"
  options: string[]; // ["чай", "чае", "чаю", "чаем"]
  grammarTagRu: string; // e.g. "Винительный падеж (Что?)"
  grammarTagEn: string;
  fullSentenceRu: string;
  translationEn: string;
  hintRu: string;
  hintEn: string;
  explanationRu: string;
  explanationEn: string;
}

export interface CaseAgreementExercise {
  id: string;
  sentenceWithBlank: string; // e.g. "Мы долго гуляли по ______ ."
  targetBaseNoun: string; // "старый парк"
  correctPhrase: string; // "старому парку"
  options: string[]; // ["старому парку", "старый парк", "старом парке", "старого парка"]
  caseNameRu: string; // "Дательный падеж (По чему?)"
  caseNameEn: string; // "Dative Case"
  genderAndNumber: string; // "Мужской род, ед. число"
  fullSentenceRu: string;
  translationEn: string;
  adjectiveEndingRuleRu: string; // e.g. "Мужской род в дательном падеже: окончание -ому / -ему"
  nounEndingRuleRu: string; // e.g. "Существительное м.р.: окончание -у / -ю"
  explanationRu: string;
  explanationEn: string;
}

export interface SentenceBuildExercise {
  id: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'c1';
  category: 'academic' | 'media' | 'business' | 'syntax' | 'daily' | 'travel' | 'dialogue';
  scrambledWords: string[]; // ["утром", "Я", "люблю", "пить", "кофе", "в", "кафе"]
  correctSentence: string; // "Я утром люблю пить кофе в кафе"
  acceptableAlternatives?: string[]; // ["Утром я люблю пить кофе в кафе", "Я люблю пить кофе утром в кафе"]
  translationEn: string;
  wordHints?: Record<string, string>; // e.g. {"утром": "in the morning"}
  grammarNoteRu: string;
  grammarNoteEn: string;
}

// ==========================================
// Russian History Types (Grades 5 - 11)
// ==========================================

export interface HistoryEra {
  id: string;
  grade: SchoolGrade;
  titleRu: string;
  titleEn: string;
  periodRu: string;
  periodEn: string;
  centuryRu: string;
  centuryEn: string;
  descriptionRu: string;
  descriptionEn: string;
  badgeRu: string;
  badgeEn: string;
  icon: string;
  topicsCount: number;
}

export interface HistoryFigure {
  id: string;
  nameRu: string;
  nameEn: string;
  dates: string;
  roleRu: string;
  roleEn: string;
  avatar: string; // emoji or icon badge
  grade: SchoolGrade;
  keyActionsRu: string[];
  keyActionsEn?: string[];
  quotesRu?: string[];
  quotesEn?: string[];
  legacyRu: string;
  legacyEn: string;
}

export interface HistoryEvent {
  year: number | string;
  dateRu: string;
  dateEn: string;
  titleRu: string;
  titleEn: string;
  descriptionRu: string;
  descriptionEn?: string;
  significanceRu: string;
  significanceEn?: string;
  tags: string[];
}

export interface HistoryTerm {
  termRu: string;
  termEn: string;
  definitionRu: string;
  definitionEn: string;
  historicalContextRu: string;
  historicalContextEn: string;
  examTipRu?: string;
}

export interface HistorySourceDocument {
  id: string;
  titleRu: string;
  titleEn: string;
  authorOrSourceRu: string;
  yearOrCentury: string;
  excerptRu: string;
  excerptEn: string;
  analysisRu: string;
  analysisEn: string;
  examQuestionRu: string;
  examAnswerRu: string;
}

export interface HistorySection {
  headingRu: string;
  headingEn: string;
  contentRu: string;
  contentEn: string;
  bulletsRu?: string[];
  bulletsEn?: string[];
  highlightBoxRu?: { title: string; text: string };
  highlightBoxEn?: { title: string; text: string };
}

export interface HistoryDeepAnalysis {
  causeAndEffectRu: {
    prerequisites: {
      categoryRu: string;
      descriptionRu: string;
    }[];
    pretextRu: string;
    turningPointRu: string;
    shortTermOutcomesRu: string[];
    longTermSignificanceRu: string[];
  };
  historiographyDebatesRu: {
    topic: string;
    viewpointA: { historianOrSchool: string; argument: string };
    viewpointB: { historianOrSchool: string; argument: string };
    modernConsensus: string;
  }[];
  geographyRu?: {
    keyLocations: { name: string; role: string }[];
    strategicSignificance: string;
  };
}

export interface HistoryVideoLecture {
  id: string;
  topicId?: string;
  titleRu: string;
  titleEn: string;
  channelName: string;
  channelAvatar: string;
  duration: string;
  youtubeId: string;
  youtubeUrl: string;
  lecturerRu: string;
  lecturerEn: string;
  descriptionRu: string;
  descriptionEn: string;
  keyPointsRu?: string[];
  tags?: string[];
}

export interface HistoryTopic {
  id: string;
  grade: SchoolGrade;
  eraId: string;
  order: number;
  titleRu: string;
  titleEn: string;
  subtitleRu: string;
  subtitleEn: string;
  periodRu: string;
  periodEn: string;
  icon: string;
  overviewRu: string;
  overviewEn: string;
  sections: HistorySection[];
  keyFigures: HistoryFigure[];
  timelineEvents: HistoryEvent[];
  terms: HistoryTerm[];
  sourceDocuments?: HistorySourceDocument[];
  deepAnalysis?: HistoryDeepAnalysis;
  examFocusRu: {
    examTarget: string; // e.g. "ОГЭ / ЕГЭ (Задания 1-5, 17, 18, 19)"
    coreTakeaways: string[];
    essayPrompts: string[];
  };
  examFocusEn: {
    examTarget: string;
    coreTakeaways: string[];
    essayPrompts: string[];
  };
  quizQuestions: QuizQuestion[];
  videoLectures?: HistoryVideoLecture[];
}

