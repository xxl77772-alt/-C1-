import React, { useState } from 'react';
import { UserProgress, SupportedLang } from '../types';
import { LESSONS_DATA } from '../data/lessonsData';
import {
  Trophy,
  Flame,
  CheckCircle2,
  BookOpen,
  Award,
  Sparkles,
  BarChart3,
  ListChecks,
  PieChart,
  Calendar,
  Layers,
  ArrowUpRight,
  RotateCcw,
  AlertTriangle,
  FileText,
  Volume2,
  Check,
} from 'lucide-react';

interface ProgressViewProps {
  progress: UserProgress;
  lang: SupportedLang;
  onResetProgress: () => void;
  onNavigateToLesson: (lessonId: string) => void;
  onNavigateToTab: (tabId: string) => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  progress,
  lang,
  onResetProgress,
  onNavigateToLesson,
  onNavigateToTab,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'topics' | 'lessons' | 'tests'>('topics');
  const [showResetModal, setShowResetModal] = useState<boolean>(false);

  // Calculate Level based on XP
  // 0-99: Level 1 (Новичок / Beginner)
  // 100-249: Level 2 (Ученик / Learner)
  // 250-499: Level 3 (Знаток / Skilled)
  // 500-999: Level 4 (Мастер / Master)
  // 1000+: Level 5 (Эксперт / Expert)
  const xp = progress.xp || 0;
  let level = 1;
  let levelTitleRu = 'Соискатель C1';
  let levelTitleEn = 'C1 Candidate';
  let nextLevelXp = 100;
  let prevLevelXp = 0;

  if (xp >= 1000) {
    level = 5;
    levelTitleRu = 'Академический Эксперт C1';
    levelTitleEn = 'Academic C1 Expert';
    nextLevelXp = 2000;
    prevLevelXp = 1000;
  } else if (xp >= 500) {
    level = 4;
    levelTitleRu = 'Мастер ТРКИ-III';
    levelTitleEn = 'TORFL-3 Master';
    nextLevelXp = 1000;
    prevLevelXp = 500;
  } else if (xp >= 250) {
    level = 3;
    levelTitleRu = 'Знаток стилистики и риторики';
    levelTitleEn = 'Stylistics & Rhetoric Connoisseur';
    nextLevelXp = 500;
    prevLevelXp = 250;
  } else if (xp >= 100) {
    level = 2;
    levelTitleRu = 'Практик академического дискурса';
    levelTitleEn = 'Discourse Practitioner';
    nextLevelXp = 250;
    prevLevelXp = 100;
  }

  const levelProgressPercent = Math.min(
    100,
    Math.max(0, Math.round(((xp - prevLevelXp) / (nextLevelXp - prevLevelXp)) * 100))
  );

  // Overall accuracy
  const totalAnswered = progress.answeredQuizCount || 0;
  const totalCorrect = progress.correctQuizCount || 0;
  const accuracyPercent =
    totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 100;

  // Topic Statistics Calculations
  // 1. Грамматика: based on completed lessons + tests in grammar
  const grammarTests = (progress.passedTests || []).filter((t) => t.category === 'grammar');
  const grammarLessonsCount = (progress.completedLessons || []).length;
  const grammarPercent = Math.min(
    100,
    Math.round(((grammarLessonsCount + grammarTests.length) / (LESSONS_DATA.length + 3)) * 100)
  );

  // 2. Лексика: based on mastered cards and vocabulary tests
  const masteredWordsCount = (progress.masteredCards || []).length;
  const vocabularyPercent = Math.min(100, Math.round((masteredWordsCount / 32) * 100));

  // 3. Фонетика и Аудирование: based on listened audios
  const listenedCount = (progress.listenedAudios || []).length;
  const audioPercent = Math.min(100, Math.round((listenedCount / 18) * 100));

  // 4. Интерактивные упражнения: based on completed exercises
  const completedExercisesCount = Object.keys(progress.completedExercises || {}).length;
  const exercisesPercent = Math.min(100, Math.round((completedExercisesCount / 17) * 100));

  // 5. Русская литература (5-11 классы): based on studied works
  const studiedLiteratureCount = (progress.studiedLiteratureWorks || []).length;
  const literatureQuizCount = Object.keys(progress.literatureQuizScores || {}).length;
  const literaturePercent = Math.min(100, Math.round((studiedLiteratureCount / 10) * 100));

  // 6. История России (5-11 классы): based on studied history topics
  const studiedHistoryCount = (progress.studiedHistoryTopics || []).length;
  const historyQuizCount = Object.keys(progress.historyQuizScores || {}).length;
  const historyPercent = Math.min(100, Math.round((studiedHistoryCount / 14) * 100));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner & User Score Card */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-800/40 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Main User Info */}
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold uppercase tracking-wider">
              <BarChart3 className="w-3.5 h-3.5 text-blue-300" />
              <span>{lang === 'ru' ? 'Система отслеживания прогресса' : 'Progress & Analytics System'}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#0039A6] to-blue-500 border-2 border-white/20 flex items-center justify-center text-white font-black text-2xl shadow-lg">
                {level}
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-white">
                  {lang === 'ru' ? levelTitleRu : levelTitleEn}
                </h1>
                <p className="text-xs sm:text-sm text-blue-200/80 font-medium">
                  {lang === 'ru' ? `Уровень ${level} • ${xp} суммарных очков XP` : `Level ${level} • ${xp} total XP points`}
                </p>
              </div>
            </div>

            {/* XP progress bar towards next level */}
            <div className="pt-2 space-y-1.5">
              <div className="flex items-center justify-between text-xs text-slate-300 font-semibold">
                <span>{lang === 'ru' ? 'Прогресс до следующего уровня:' : 'Progress to next level:'}</span>
                <span>{xp} / {nextLevelXp} XP ({levelProgressPercent}%)</span>
              </div>
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/15">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full transition-all duration-500"
                  style={{ width: `${levelProgressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 shrink-0">
            {/* Total XP */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center">
              <div className="flex items-center justify-center space-x-1 text-emerald-400 mb-1">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">{lang === 'ru' ? 'Общий балл' : 'Total XP'}</span>
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white">{xp}</span>
            </div>

            {/* Streak */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center">
              <div className="flex items-center justify-center space-x-1 text-amber-400 mb-1">
                <Flame className="w-4 h-4 fill-amber-400" />
                <span className="text-xs font-bold uppercase">{lang === 'ru' ? 'Ударный режим' : 'Streak'}</span>
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white">
                {progress.streakDays} {lang === 'ru' ? 'дн.' : 'd.'}
              </span>
            </div>

            {/* Accuracy */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 text-center col-span-2 sm:col-span-1">
              <div className="flex items-center justify-center space-x-1 text-blue-300 mb-1">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-xs font-bold uppercase">{lang === 'ru' ? 'Точность' : 'Accuracy'}</span>
              </div>
              <span className="text-2xl sm:text-3xl font-black text-white">{accuracyPercent}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sub-tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div className="flex items-center space-x-2 overflow-x-auto">
          <button
            onClick={() => setActiveSubTab('topics')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeSubTab === 'topics'
                ? 'bg-[#0039A6] text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <PieChart className="w-4 h-4" />
            <span>{lang === 'ru' ? 'Статистика по темам' : 'Stats by Topic'}</span>
          </button>

          <button
            onClick={() => setActiveSubTab('lessons')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeSubTab === 'lessons'
                ? 'bg-[#0039A6] text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{lang === 'ru' ? 'Пройденные уроки' : 'Completed Lessons'}</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                activeSubTab === 'lessons' ? 'bg-blue-700' : 'bg-slate-100 text-slate-600'
              }`}
            >
              {(progress.completedLessons || []).length} / {LESSONS_DATA.length}
            </span>
          </button>

          <button
            onClick={() => setActiveSubTab('tests')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeSubTab === 'tests'
                ? 'bg-[#0039A6] text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <ListChecks className="w-4 h-4" />
            <span>{lang === 'ru' ? 'Сданные тесты и квизы' : 'Passed Tests & Quizzes'}</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                activeSubTab === 'tests' ? 'bg-blue-700' : 'bg-slate-100 text-slate-600'
              }`}
            >
              {(progress.passedTests || []).length}
            </span>
          </button>
        </div>

        {/* Reset progress button */}
        <button
          onClick={() => setShowResetModal(true)}
          className="flex items-center space-x-1.5 px-3 py-2 rounded-xl text-slate-500 hover:text-rose-600 hover:bg-rose-50 text-xs font-semibold transition-colors shrink-0"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{lang === 'ru' ? 'Сбросить прогресс' : 'Reset progress'}</span>
        </button>
      </div>

      {/* ----------------------------------------------------------------- */}
      {/* SUB-TAB 1: STATISTICS BY TOPIC ('Грамматика', 'Лексика', etc.) */}
      {/* ----------------------------------------------------------------- */}
      {activeSubTab === 'topics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* TOPIC 1: ГРАММАТИКА */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#0039A6] flex items-center justify-center text-2xl">
                    🏛️
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">
                      {lang === 'ru' ? 'Грамматика' : 'Grammar'}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {lang === 'ru'
                        ? '6 падежей, род существительных, спряжение глаголов'
                        : '6 Russian cases, noun genders & verb conjugations'}
                    </p>
                  </div>
                </div>
                <span className="text-xl font-black text-[#0039A6]">{grammarPercent}%</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0039A6] rounded-full transition-all duration-500"
                  style={{ width: `${grammarPercent}%` }}
                />
              </div>

              {/* Topic metrics */}
              <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 block">{lang === 'ru' ? 'Пройдено уроков:' : 'Lessons completed:'}</span>
                  <span className="font-bold text-slate-800 text-sm">
                    {grammarLessonsCount} / {LESSONS_DATA.length}
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 block">{lang === 'ru' ? 'Сдано граммат. тестов:' : 'Grammar tests passed:'}</span>
                  <span className="font-bold text-slate-800 text-sm">{grammarTests.length}</span>
                </div>
              </div>

              <button
                onClick={() => onNavigateToTab('grammar')}
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-blue-50 hover:bg-blue-100 text-[#0039A6] rounded-xl font-bold text-xs transition-colors"
              >
                <span>{lang === 'ru' ? 'Перейти в справочник грамматики' : 'Go to Grammar Guide'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* TOPIC 2: ЛЕКСИКА */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl">
                    🃏
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">
                      {lang === 'ru' ? 'Лексика' : 'Vocabulary'}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {lang === 'ru'
                        ? 'Словарный запас, флеш-карточки и разговорник'
                        : 'Active vocabulary, flashcards & phrasebook'}
                    </p>
                  </div>
                </div>
                <span className="text-xl font-black text-emerald-600">{vocabularyPercent}%</span>
              </div>

              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                  style={{ width: `${vocabularyPercent}%` }}
                />
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 block">{lang === 'ru' ? 'Выучено слов:' : 'Mastered words:'}</span>
                  <span className="font-bold text-slate-800 text-sm">
                    {masteredWordsCount} {lang === 'ru' ? 'слов' : 'words'}
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 block">{lang === 'ru' ? 'В закладках:' : 'Bookmarked:'}</span>
                  <span className="font-bold text-slate-800 text-sm">
                    {(progress.bookmarkedCards || []).length} {lang === 'ru' ? 'карточек' : 'cards'}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onNavigateToTab('flashcards')}
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl font-bold text-xs transition-colors"
              >
                <span>{lang === 'ru' ? 'Тренировать карточки слов' : 'Practice Flashcards'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* TOPIC 3: ФОНЕТИКА И АУДИРОВАНИЕ */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-800 flex items-center justify-center text-2xl">
                    🎧
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">
                      {lang === 'ru' ? 'Фонетика и Аудирование' : 'Phonetics & Listening'}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {lang === 'ru'
                        ? 'Диалоги носителей, скороговорки, пары ударений'
                        : 'Native dialogues, tongue twisters, stress pairs'}
                    </p>
                  </div>
                </div>
                <span className="text-xl font-black text-indigo-600">{audioPercent}%</span>
              </div>

              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-500 rounded-full transition-all duration-500"
                  style={{ width: `${audioPercent}%` }}
                />
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 block">{lang === 'ru' ? 'Прослушано записей:' : 'Audios listened:'}</span>
                  <span className="font-bold text-slate-800 text-sm">
                    {listenedCount} {lang === 'ru' ? 'материалов' : 'tracks'}
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 block">{lang === 'ru' ? 'Алфавит:' : 'Alphabet:'}</span>
                  <span className="font-bold text-slate-800 text-sm">33 {lang === 'ru' ? 'буквы' : 'letters'}</span>
                </div>
              </div>

              <button
                onClick={() => onNavigateToTab('audio')}
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl font-bold text-xs transition-colors"
              >
                <span>{lang === 'ru' ? 'Открыть аудиоматериалы' : 'Open Audio Materials'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* TOPIC 4: ИНТЕРАКТИВНЫЕ УПРАЖНЕНИЯ */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-2xl">
                    ✍️
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">
                      {lang === 'ru' ? 'Практические упражнения' : 'Interactive Exercises'}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {lang === 'ru'
                        ? 'Пропуски, падежи сущ. + прил., конструктор предложений'
                        : 'Fill-blanks, noun-adj agreement, sentence builder'}
                    </p>
                  </div>
                </div>
                <span className="text-xl font-black text-amber-600">{exercisesPercent}%</span>
              </div>

              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full transition-all duration-500"
                  style={{ width: `${exercisesPercent}%` }}
                />
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 block">{lang === 'ru' ? 'Решено заданий:' : 'Exercises solved:'}</span>
                  <span className="font-bold text-slate-800 text-sm">
                    {completedExercisesCount} {lang === 'ru' ? 'упражнений' : 'drills'}
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 block">{lang === 'ru' ? 'Бонусный опыт:' : 'Earned bonus XP:'}</span>
                  <span className="font-bold text-slate-800 text-sm">+{completedExercisesCount * 10} XP</span>
                </div>
              </div>

              <button
                onClick={() => onNavigateToTab('exercises')}
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-xl font-bold text-xs transition-colors"
              >
                <span>{lang === 'ru' ? 'Выполнять упражнения' : 'Start Exercises'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* TOPIC 5: РУССКАЯ ЛИТЕРАТУРА (5-11 КЛАССЫ) */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4 md:col-span-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-800 flex items-center justify-center text-2xl">
                    📚
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">
                      {lang === 'ru' ? 'Русская классическая литература (5–11 классы)' : 'Russian Classical Literature (Grades 5-11)'}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {lang === 'ru'
                        ? 'Школьный канон ФГОС: Пушкин, Лермонтов, Гоголь, Толстой, Достоевский, Чехов, Булгаков'
                        : 'National curriculum FGOS: Pushkin, Lermontov, Gogol, Tolstoy, Dostoevsky, Chekhov, Bulgakov'}
                    </p>
                  </div>
                </div>
                <span className="text-xl font-black text-rose-600">{literaturePercent}%</span>
              </div>

              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-rose-500 rounded-full transition-all duration-500"
                  style={{ width: `${literaturePercent}%` }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 block">{lang === 'ru' ? 'Изучено произведений:' : 'Studied works:'}</span>
                  <span className="font-bold text-slate-800 text-sm">
                    {studiedLiteratureCount} {lang === 'ru' ? 'книг' : 'works'}
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 block">{lang === 'ru' ? 'Сдано тестов по книгам:' : 'Book quizzes passed:'}</span>
                  <span className="font-bold text-slate-800 text-sm">
                    {literatureQuizCount} {lang === 'ru' ? 'тестов' : 'quizzes'}
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 block">{lang === 'ru' ? 'Заработано баллов:' : 'XP earned in literature:'}</span>
                  <span className="font-bold text-rose-700 text-sm">+{studiedLiteratureCount * 25} XP</span>
                </div>
              </div>

              <button
                onClick={() => onNavigateToTab('literature')}
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-xl font-bold text-xs transition-colors"
              >
                <span>{lang === 'ru' ? 'Открыть раздел «Литература 5-11»' : 'Open Literature 5-11 Hub'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* TOPIC 6: ИСТОРИЯ РОССИИ (5-11 КЛАССЫ) */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4 md:col-span-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-2xl">
                    🏛️
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900">
                      {lang === 'ru' ? 'История России (5–11 классы)' : 'History of Russia (Grades 5-11)'}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {lang === 'ru'
                        ? 'От расселения древних славян, Рюрика и Крещения Руси до Петра I, реформ XIX в., ВОВ и современности'
                        : 'From ancient Slavic origins, Rurik and Christianization to Peter the Great, 19th c. reforms, WWII and modern era'}
                    </p>
                  </div>
                </div>
                <span className="text-xl font-black text-amber-600">{historyPercent}%</span>
              </div>

              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 rounded-full transition-all duration-500"
                  style={{ width: `${historyPercent}%` }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 block">{lang === 'ru' ? 'Изучено тем:' : 'Studied topics:'}</span>
                  <span className="font-bold text-slate-800 text-sm">
                    {studiedHistoryCount} {lang === 'ru' ? 'тем' : 'topics'}
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 block">{lang === 'ru' ? 'Сдано тестов по истории:' : 'History quizzes passed:'}</span>
                  <span className="font-bold text-slate-800 text-sm">
                    {historyQuizCount} {lang === 'ru' ? 'тестов' : 'quizzes'}
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 block">{lang === 'ru' ? 'Заработано баллов:' : 'XP earned in history:'}</span>
                  <span className="font-bold text-amber-700 text-sm">+{studiedHistoryCount * 25} XP</span>
                </div>
              </div>

              <button
                onClick={() => onNavigateToTab('history')}
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-800 rounded-xl font-bold text-xs transition-colors"
              >
                <span>{lang === 'ru' ? 'Открыть раздел «История 5-11»' : 'Open History 5-11 Hub'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* TOPIC 7: GOOGLE КАЛЕНДАРЬ (30-ДНЕВНЫЙ ПЛАН) */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4 md:col-span-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#0039A6] flex items-center justify-center text-2xl">
                    📅
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-800">
                      {lang === 'ru' ? 'Google Календарь на 30 дней' : 'Google Calendar 30-Day Study Plan'}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {lang === 'ru'
                        ? 'Ежедневные 45-минутные занятия по русской классике с рецензиями и видеоразборами'
                        : 'Daily 45-minute literature study sessions with critical reviews and video lectures'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-[#0039A6]">
                    {Object.keys(progress.syncedCalendarEvents || {}).length}
                  </span>
                  <span className="text-xs font-semibold text-slate-400"> / 30 дн.</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 block">{lang === 'ru' ? 'Синхронизировано:' : 'Synced days:'}</span>
                  <span className="font-bold text-slate-800 text-sm">
                    {Object.keys(progress.syncedCalendarEvents || {}).length} из 30 дней
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl">
                  <span className="text-slate-500 block">{lang === 'ru' ? 'Пройдено дней:' : 'Days completed:'}</span>
                  <span className="font-bold text-emerald-700 text-sm">
                    {(progress.completedCalendarDays || []).length} из 30
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl col-span-2 sm:col-span-1">
                  <span className="text-slate-500 block">{lang === 'ru' ? 'Учебное время:' : 'Study time:'}</span>
                  <span className="font-bold text-blue-700 text-sm">
                    {progress.calendarPreferredTime || '18:00'} (45 мин/день)
                  </span>
                </div>
              </div>

              <button
                onClick={() => onNavigateToTab('calendar')}
                className="w-full flex items-center justify-center space-x-2 py-2.5 bg-blue-50 hover:bg-blue-100 text-[#0039A6] rounded-xl font-bold text-xs transition-colors cursor-pointer"
              >
                <span>{lang === 'ru' ? 'Открыть «Календарь на 30 дней»' : 'Open 30-Day Calendar'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------------- */}
      {/* SUB-TAB 2: COMPLETED LESSONS LIST */}
      {/* ----------------------------------------------------------------- */}
      {activeSubTab === 'lessons' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
              {lang === 'ru' ? 'Список уроков учебного плана' : 'Curriculum Lessons Checklist'}
            </h3>
            <span className="text-xs font-semibold text-slate-500">
              {progress.completedLessons.length} {lang === 'ru' ? 'из' : 'of'} {LESSONS_DATA.length} {lang === 'ru' ? 'пройдено' : 'completed'}
            </span>
          </div>

          <div className="space-y-3">
            {LESSONS_DATA.map((lesson) => {
              const isCompleted = (progress.completedLessons || []).includes(lesson.id);
              const quizScoreData = progress.lessonQuizScores?.[lesson.id];

              return (
                <div
                  key={lesson.id}
                  className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    isCompleted
                      ? 'bg-emerald-50/40 border-emerald-200/80 shadow-xs'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-lg font-bold ${
                        isCompleted
                          ? 'bg-emerald-500 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {isCompleted ? <Check className="w-6 h-6 stroke-[3]" /> : lesson.order}
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-0.5 rounded bg-blue-100 text-[#0039A6] text-xs font-black">
                          {lesson.level}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          ~{lesson.estimatedMinutes} {lang === 'ru' ? 'мин' : 'min'}
                        </span>
                        {isCompleted && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                            {lang === 'ru' ? 'Пройден' : 'Completed'}
                          </span>
                        )}
                      </div>

                      <h4 className="text-base font-bold text-slate-900">
                        {lesson.titleRu}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {lang === 'ru' ? lesson.descriptionRu : lesson.descriptionEn}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 shrink-0 self-end sm:self-center">
                    {quizScoreData && (
                      <div className="text-right">
                        <span className="text-[11px] text-slate-400 block font-medium">
                          {lang === 'ru' ? 'Тест сдан:' : 'Quiz score:'}
                        </span>
                        <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                          {quizScoreData.score} / {quizScoreData.total} ({quizScoreData.percent}%)
                        </span>
                      </div>
                    )}

                    <button
                      onClick={() => onNavigateToLesson(lesson.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                        isCompleted
                          ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                          : 'bg-[#0039A6] hover:bg-blue-800 text-white shadow-xs'
                      }`}
                    >
                      {isCompleted
                        ? lang === 'ru'
                          ? 'Повторить урок'
                          : 'Review Lesson'
                        : lang === 'ru'
                        ? 'Начать урок'
                        : 'Start Lesson'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ----------------------------------------------------------------- */}
      {/* SUB-TAB 3: PASSED TESTS & QUIZZES HISTORY */}
      {/* ----------------------------------------------------------------- */}
      {activeSubTab === 'tests' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">
              {lang === 'ru' ? 'История сданных тестов и квизов' : 'History of Passed Tests & Quizzes'}
            </h3>
            <span className="text-xs font-semibold text-slate-500">
              {(progress.passedTests || []).length} {lang === 'ru' ? 'тестов зафиксировано' : 'tests recorded'}
            </span>
          </div>

          {(!progress.passedTests || progress.passedTests.length === 0) ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
              <FileText className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="text-slate-600 font-bold text-base">
                {lang === 'ru' ? 'Вы пока не сдали ни одного теста' : 'You have not passed any tests yet'}
              </p>
              <p className="text-xs text-slate-400">
                {lang === 'ru'
                  ? 'Пройдите уроки или интерактивные упражнения, чтобы результаты появились здесь!'
                  : 'Complete lesson quizzes or practice exercises to view your score history here!'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {progress.passedTests.map((test) => {
                const isPerfect = test.percent === 100;
                return (
                  <div
                    key={test.id}
                    className="p-4 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all flex items-start justify-between gap-3 shadow-xs"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            test.category === 'grammar'
                              ? 'bg-blue-100 text-[#0039A6]'
                              : test.category === 'vocabulary'
                              ? 'bg-emerald-100 text-emerald-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {test.category}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {test.passedAt}
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-slate-800 line-clamp-1">
                        {lang === 'ru' ? test.testTitleRu : test.testTitleEn}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {lang === 'ru' ? 'Результат:' : 'Score:'} {test.score} / {test.total}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span
                        className={`text-sm font-black px-2.5 py-1 rounded-lg inline-block ${
                          isPerfect
                            ? 'bg-emerald-500 text-white'
                            : 'bg-blue-100 text-[#0039A6]'
                        }`}
                      >
                        {test.percent}%
                      </span>
                      <span className="text-[10px] text-slate-400 block mt-1 font-semibold">
                        {isPerfect ? '⭐ Отлично' : '✓ Сдано'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Confirmation Modal for Resetting Progress */}
      {showResetModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center space-x-3 text-rose-600">
              <div className="p-3 bg-rose-50 rounded-2xl border border-rose-200">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900">
                  {lang === 'ru' ? 'Сбросить весь прогресс?' : 'Reset All Progress?'}
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === 'ru' ? 'Это действие необратимо' : 'This action cannot be undone'}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'ru'
                ? 'Ваши баллы XP, пройденные уроки, история сданных тестов и выученные карточки будут сброшены до начального состояния.'
                : 'All your XP points, completed lesson checklists, quiz history, and card mastery will be reset to zero.'}
            </p>

            <div className="flex items-center justify-end space-x-3 pt-2">
              <button
                onClick={() => setShowResetModal(false)}
                className="px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 text-xs font-bold transition-colors"
              >
                {lang === 'ru' ? 'Отмена' : 'Cancel'}
              </button>
              <button
                onClick={() => {
                  onResetProgress();
                  setShowResetModal(false);
                }}
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-md transition-colors"
              >
                {lang === 'ru' ? 'Да, сбросить всё' : 'Yes, reset everything'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
