import React, { useState, useMemo, useEffect } from 'react';
import { SchoolGrade, SupportedLang, LiteraryWork, UserProgress } from '../types';
import { GRADE_CURRICULUMS, ALL_LITERATURE_WORKS, getWorksByGrade, getAllGrades } from '../data/literatureData';
import { LiteratureWorkCard } from './literature/LiteratureWorkCard';
import { LiteratureWorkDetail } from './literature/LiteratureWorkDetail';
import { LiteratureYoutubeHub } from './literature/LiteratureYoutubeHub';
import {
  BookOpen,
  Search,
  CheckCircle2,
  Bookmark,
  Sparkles,
  Trophy,
  Filter,
  GraduationCap,
  Award,
  ChevronRight,
  Youtube,
  Calendar,
} from 'lucide-react';

interface LiteratureViewProps {
  lang: SupportedLang;
  audioSpeed: number;
  progress: UserProgress;
  initialWorkId?: string | null;
  onRecordWorkStudied: (workId: string) => void;
  onToggleFavoriteWork: (workId: string) => void;
  onRecordQuizScore: (workId: string, workTitleRu: string, workTitleEn: string, score: number, total: number) => void;
  onRecordVideoWatched?: (videoId: string) => void;
  onNavigateToCalendar?: () => void;
}

export const LiteratureView: React.FC<LiteratureViewProps> = ({
  lang,
  audioSpeed,
  progress,
  initialWorkId,
  onRecordWorkStudied,
  onToggleFavoriteWork,
  onRecordQuizScore,
  onRecordVideoWatched = () => {},
  onNavigateToCalendar,
}) => {
  const [selectedGrade, setSelectedGrade] = useState<SchoolGrade>(9); // default to 9th grade (classic canon)
  const [selectedWork, setSelectedWork] = useState<LiteraryWork | null>(null);

  useEffect(() => {
    if (initialWorkId) {
      const found = ALL_LITERATURE_WORKS.find((w) => w.id === initialWorkId);
      if (found) {
        setSelectedGrade(found.grade);
        setSelectedWork(found);
      }
    }
  }, [initialWorkId]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMode, setFilterMode] = useState<'all' | 'studied' | 'favorites' | 'videos'>('all');
  const [movementFilter, setMovementFilter] = useState<string>('all');

  const grades = getAllGrades();
  const currentCurriculum = GRADE_CURRICULUMS[selectedGrade];

  // Works for current grade
  const gradeWorks = useMemo(() => {
    return getWorksByGrade(selectedGrade);
  }, [selectedGrade]);

  // Movements available in this grade
  const availableMovements = useMemo(() => {
    const set = new Set<string>();
    gradeWorks.forEach((w) => set.add(w.movementRu));
    return Array.from(set);
  }, [gradeWorks]);

  // Filtered works based on search & tags
  const filteredWorks = useMemo(() => {
    return gradeWorks.filter((work) => {
      // Search
      const matchSearch =
        work.titleRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
        work.authorRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
        work.genreRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
        work.movementRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
        work.briefSummaryRu.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchSearch) return false;

      // Studied / Favorite filter
      const isStudied = (progress.studiedLiteratureWorks || []).includes(work.id);
      const isFav = (progress.favoriteLiteratureWorks || []).includes(work.id);

      if (filterMode === 'studied' && !isStudied) return false;
      if (filterMode === 'favorites' && !isFav) return false;

      // Movement
      if (movementFilter !== 'all' && work.movementRu !== movementFilter) return false;

      return true;
    });
  }, [gradeWorks, searchQuery, filterMode, movementFilter, progress]);

  // Grade Progress statistics
  const studiedCount = useMemo(() => {
    const list = progress.studiedLiteratureWorks || [];
    return gradeWorks.filter((w) => list.includes(w.id)).length;
  }, [gradeWorks, progress.studiedLiteratureWorks]);

  const totalStudiedOverall = useMemo(() => {
    return (progress.studiedLiteratureWorks || []).length;
  }, [progress.studiedLiteratureWorks]);

  const gradeVideosCount = useMemo(() => {
    return gradeWorks.reduce((acc, w) => acc + (w.youtubeReviews?.length || 0), 0);
  }, [gradeWorks]);

  const totalVideosCount = useMemo(() => {
    return ALL_LITERATURE_WORKS.reduce((acc, w) => acc + (w.youtubeReviews?.length || 0), 0);
  }, []);

  const watchedVideosCount = useMemo(() => {
    return (progress.watchedLiteratureVideos || []).length;
  }, [progress.watchedLiteratureVideos]);

  // If a work detail is active, show detail screen
  if (selectedWork) {
    const isStudied = (progress.studiedLiteratureWorks || []).includes(selectedWork.id);
    const isFav = (progress.favoriteLiteratureWorks || []).includes(selectedWork.id);
    const score = progress.literatureQuizScores?.[selectedWork.id];

    return (
      <LiteratureWorkDetail
        work={selectedWork}
        lang={lang}
        audioSpeed={audioSpeed}
        isStudied={isStudied}
        isFavorite={isFav}
        quizScore={score}
        watchedVideos={progress.watchedLiteratureVideos || []}
        onBack={() => setSelectedWork(null)}
        onToggleStudied={onRecordWorkStudied}
        onToggleFavorite={onToggleFavoriteWork}
        onRecordQuiz={onRecordQuizScore}
        onRecordVideoWatched={onRecordVideoWatched}
      />
    );
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Section: Header & Stats */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 w-72 h-72 bg-gradient-to-br from-blue-100/50 to-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0039A6] mb-3">
              <GraduationCap className="w-4 h-4" />
              <span>{lang === 'ru' ? 'Школьная программа 5–11 классы' : 'School Literature Curriculum (Grades 5-11)'}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-2">
              {lang === 'ru' ? 'Золотой фонд русской литературы' : 'Golden Treasury of Russian Literature'}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {lang === 'ru'
                ? 'Полный интерактивный курс по произведениям с 5 по 11 класс: анализ сюжетов, портреты героев, золотые отрывки с озвучкой, теория литературы, рецензии на YouTube и подготовка к сочинению, ОГЭ и ЕГЭ.'
                : 'A comprehensive interactive course covering 5th to 11th grade classics: detailed plot analyses, character profiles, audio-recited excerpts, literary theory, YouTube critiques, and state exam essay guides.'}
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex sm:flex-col gap-3 shrink-0">
            <div className="bg-slate-50 border border-slate-200 p-3.5 sm:p-4 rounded-2xl flex items-center space-x-3.5 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0039A6] flex items-center justify-center font-black text-lg">
                📚
              </div>
              <div>
                <span className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider block">
                  {lang === 'ru' ? 'Изучено книг' : 'Studied Works'}
                </span>
                <span className="text-lg sm:text-xl font-black text-slate-900">
                  {totalStudiedOverall} <span className="text-xs font-medium text-slate-400">/ {ALL_LITERATURE_WORKS.length}</span>
                </span>
              </div>
            </div>

            <div className="bg-rose-50 border border-rose-200 p-3.5 sm:p-4 rounded-2xl flex items-center space-x-3.5 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-red-600 flex items-center justify-center font-black">
                <Youtube className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <span className="text-[11px] text-rose-800 font-semibold uppercase tracking-wider block">
                  {lang === 'ru' ? 'Видеолекторий' : 'Video Reviews'}
                </span>
                <span className="text-lg sm:text-xl font-black text-slate-900">
                  {watchedVideosCount} <span className="text-xs font-medium text-slate-400">/ {totalVideosCount}</span>
                </span>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-3.5 sm:p-4 rounded-2xl flex items-center space-x-3.5 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
                <Trophy className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <span className="text-[11px] text-emerald-700 font-semibold uppercase tracking-wider block">
                  {lang === 'ru' ? 'Тестов сдано' : 'Quizzes Passed'}
                </span>
                <span className="text-lg sm:text-xl font-black text-emerald-950">
                  {Object.keys(progress.literatureQuizScores || {}).length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 30-Day Calendar Quick Action Banner */}
      {onNavigateToCalendar && (
        <div className="bg-gradient-to-r from-[#002D84] via-[#0039A6] to-[#1E40AF] text-white rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-xs flex items-center justify-center text-xl shrink-0 border border-white/20">
              📅
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h4 className="text-sm font-bold text-white">
                  30-Дневный интенсив с синхронизацией в Google Календарь
                </h4>
                <span className="px-2 py-0.5 rounded-full bg-amber-400 text-slate-900 text-[10px] font-black uppercase">
                  Новинка
                </span>
              </div>
              <p className="text-xs text-blue-100/90 mt-0.5">
                Запланируйте ежедневный разбор произведений, рецензий Белинского, Гончарова, проекта «Полка» и видеолекций прямо в свой Google Календарь на 30 дней.
              </p>
            </div>
          </div>
          <button
            onClick={onNavigateToCalendar}
            className="w-full sm:w-auto px-4 py-2.5 bg-white hover:bg-blue-50 text-[#0039A6] rounded-xl text-xs font-black shadow-md transition-all shrink-0 cursor-pointer flex items-center justify-center space-x-1.5"
          >
            <span>Открыть календарь</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Grade Selector Strip (5, 6, 7, 8, 9, 10, 11) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            {lang === 'ru' ? 'Выберите класс обучения:' : 'Select Grade:'}
          </span>
          <span className="text-xs font-medium text-slate-400">
            {lang === 'ru' ? 'Федеральный государственный стандарт (ФГОС)' : 'Russian National Standard (FGOS)'}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {grades.map((grade) => {
            const isSelected = selectedGrade === grade;
            const info = GRADE_CURRICULUMS[grade];
            const worksInThisGrade = getWorksByGrade(grade);
            const studiedInThisGrade = worksInThisGrade.filter((w) =>
              (progress.studiedLiteratureWorks || []).includes(w.id)
            ).length;

            return (
              <button
                key={grade}
                onClick={() => {
                  setSelectedGrade(grade);
                  setSearchQuery('');
                  setFilterMode('all');
                  setMovementFilter('all');
                }}
                className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0039A6] text-white border-[#0039A6] shadow-md ring-2 ring-blue-300'
                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xl">{info.icon}</span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {info.badgeRu}
                  </span>
                </div>

                <div>
                  <div className={`text-base font-black leading-tight ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {grade} {lang === 'ru' ? 'класс' : 'Grade'}
                  </div>
                  <div className={`text-[11px] mt-0.5 truncate ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                    {studiedInThisGrade}/{worksInThisGrade.length} {lang === 'ru' ? 'изучено' : 'studied'}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Grade Curriculum Context Banner */}
      <div className="bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/60 rounded-3xl p-6 sm:p-7 border border-blue-100 shadow-2xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{currentCurriculum.icon}</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                {lang === 'ru' ? currentCurriculum.titleRu : currentCurriculum.titleEn}
              </h2>
            </div>

            <p className="text-xs font-semibold text-[#0039A6] uppercase tracking-wider">
              📌 {lang === 'ru' ? currentCurriculum.focusPeriodRu : currentCurriculum.focusPeriodEn}
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {lang === 'ru' ? currentCurriculum.descriptionRu : currentCurriculum.descriptionEn}
            </p>
          </div>

          {/* Progress Bar for Grade */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs min-w-[220px]">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1.5">
              <span>{lang === 'ru' ? 'Прогресс класса' : 'Grade Completion'}</span>
              <span>
                {Math.round((studiedCount / (gradeWorks.length || 1)) * 100)}%
              </span>
            </div>
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-2">
              <div
                className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                style={{
                  width: `${(studiedCount / (gradeWorks.length || 1)) * 100}%`,
                }}
              />
            </div>
            <span className="text-[11px] text-slate-500 block text-right font-medium">
              {studiedCount} из {gradeWorks.length} {lang === 'ru' ? 'произведений' : 'works'}
            </span>
          </div>
        </div>

        {/* Highlights List */}
        <div className="mt-5 pt-4 border-t border-blue-100/80 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-700">
          {(lang === 'ru' ? currentCurriculum.curriculumHighlightsRu : currentCurriculum.curriculumHighlightsEn).map(
            (hl, i) => (
              <div key={i} className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0039A6] shrink-0" />
                <span className="truncate">{hl}</span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              lang === 'ru' ? 'Поиск по автору, названию, герою...' : 'Search by author, title, character...'
            }
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-[#0039A6] focus:bg-white transition-all"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          <button
            onClick={() => setFilterMode('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
              filterMode === 'all'
                ? 'bg-[#0039A6] text-white shadow-2xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {lang === 'ru' ? 'Все книги' : 'All Works'} ({gradeWorks.length})
          </button>
          <button
            onClick={() => setFilterMode('studied')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap flex items-center space-x-1 ${
              filterMode === 'studied'
                ? 'bg-emerald-600 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{lang === 'ru' ? 'Изученные' : 'Studied'} ({studiedCount})</span>
          </button>
          <button
            onClick={() => setFilterMode('favorites')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap flex items-center space-x-1 ${
              filterMode === 'favorites'
                ? 'bg-rose-600 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>{lang === 'ru' ? 'В закладках' : 'Bookmarked'}</span>
          </button>
          <button
            onClick={() => setFilterMode('videos')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap flex items-center space-x-1 ${
              filterMode === 'videos'
                ? 'bg-red-600 text-white shadow-2xs'
                : 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200'
            }`}
          >
            <Youtube className="w-3.5 h-3.5" />
            <span>{lang === 'ru' ? 'YouTube-лекторий' : 'Video Lectures'} ({gradeVideosCount})</span>
          </button>

          {/* Movement selector if multiple */}
          {availableMovements.length > 1 && (
            <select
              value={movementFilter}
              onChange={(e) => setMovementFilter(e.target.value)}
              aria-label={lang === 'ru' ? 'Фильтр по направлению' : 'Filter by movement'}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200 focus:outline-hidden"
            >
              <option value="all">{lang === 'ru' ? 'Все направления' : 'All movements'}</option>
              {availableMovements.map((mov) => (
                <option key={mov} value={mov}>
                  {mov}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* Main Content Area: Videos Hub OR Works Grid */}
      {filterMode === 'videos' ? (
        <LiteratureYoutubeHub
          currentGrade={selectedGrade}
          lang={lang}
          watchedVideos={progress.watchedLiteratureVideos || []}
          onRecordVideoWatched={onRecordVideoWatched}
          onSelectWork={(w) => setSelectedWork(w)}
        />
      ) : filteredWorks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work) => {
            const isStudied = (progress.studiedLiteratureWorks || []).includes(work.id);
            const isFav = (progress.favoriteLiteratureWorks || []).includes(work.id);
            const score = progress.literatureQuizScores?.[work.id];

            return (
              <LiteratureWorkCard
                key={work.id}
                work={work}
                lang={lang}
                isStudied={isStudied}
                isFavorite={isFav}
                quizScore={score}
                onSelect={(w) => setSelectedWork(w)}
                onToggleStudied={onRecordWorkStudied}
                onToggleFavorite={onToggleFavoriteWork}
              />
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto text-xl">
            🔍
          </div>
          <h3 className="text-lg font-bold text-slate-800">
            {lang === 'ru' ? 'Произведений не найдено' : 'No works found'}
          </h3>
          <p className="text-xs text-slate-500">
            {lang === 'ru'
              ? 'Попробуйте изменить поисковый запрос или сбросить фильтры.'
              : 'Try clearing search filters to see all works.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setFilterMode('all');
              setMovementFilter('all');
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-[#0039A6] text-white hover:bg-blue-800 transition-colors"
          >
            {lang === 'ru' ? 'Сбросить фильтры' : 'Reset filters'}
          </button>
        </div>
      )}
    </div>
  );
};
