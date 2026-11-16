import React, { useState, useMemo } from 'react';
import { SchoolGrade, SupportedLang, HistoryTopic, UserProgress } from '../types';
import { HISTORY_ERAS, ALL_HISTORY_TOPICS, getTopicsByGrade } from '../data/history';
import { HistoryTopicCard } from './history/HistoryTopicCard';
import { HistoryTopicDetail } from './history/HistoryTopicDetail';
import { HistoryYoutubeHub } from './history/HistoryYoutubeHub';
import {
  Landmark,
  Search,
  CheckCircle2,
  Bookmark,
  Sparkles,
  Trophy,
  Filter,
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  Layers,
  Youtube,
} from 'lucide-react';

interface HistoryViewProps {
  lang: SupportedLang;
  audioSpeed: number;
  progress: UserProgress;
  onRecordTopicStudied: (topicId: string) => void;
  onToggleFavoriteTopic: (topicId: string) => void;
  onRecordQuizScore: (topicId: string, topicTitleRu: string, topicTitleEn: string, score: number, total: number) => void;
}

const GRADE_CONFIGS: {
  grade: SchoolGrade;
  titleRu: string;
  titleEn: string;
  periodRu: string;
  periodEn: string;
  icon: string;
  badgeRu: string;
  badgeEn: string;
  summaryRu: string;
  summaryEn: string;
}[] = [
  {
    grade: 5,
    titleRu: '5 класс: Истоки и древнейшие культуры',
    titleEn: 'Grade 5: Origins and Ancient Peoples',
    periodRu: 'Древность — IX век',
    periodEn: 'Antiquity — 9th Century',
    icon: '🏺',
    badgeRu: 'Истоки цивилизаций',
    badgeEn: 'Civilization Origins',
    summaryRu: 'Расселение восточных славян, путь «из варяг в греки», соседние племена и предпосылки государственности.',
    summaryEn: 'East Slavic migrations, the Varangian trade route, neighbouring tribes, and the seeds of statehood.',
  },
  {
    grade: 6,
    titleRu: '6 класс: Древняя Русь и возвышение Москвы',
    titleEn: 'Grade 6: Kievan Rus & Rise of Moscow',
    periodRu: 'IX — начало XVI века',
    periodEn: '9th — early 16th Century',
    icon: '⚔️',
    badgeRu: 'Древняя Русь & Орда',
    badgeEn: 'Kievan Rus & Horde',
    summaryRu: 'Призвание Рюрика, крещение Руси, феодальная раздробленность, Батыево нашествие, Куликовская битва и объединение вокруг Москвы.',
    summaryEn: 'Rurik, Christianization, fragmentation, Mongol invasion, Kulikovo battle, and unification under Moscow.',
  },
  {
    grade: 7,
    titleRu: '7 класс: Единое царство и Смутное время',
    titleEn: 'Grade 7: Tsardom & Time of Troubles',
    periodRu: 'XVI — XVII век',
    periodEn: '16th — 17th Century',
    icon: '👑',
    badgeRu: 'Иван Грозный & Смута',
    badgeEn: 'Ivan the Terrible & Troubles',
    summaryRu: 'Реформы Избранной рады, опричнина, Смута и народное ополчение Минина и Пожарского, первые Романовы и раскол церкви.',
    summaryEn: 'Reforms of Ivan IV, oprichnina, the Time of Troubles, Minin and Pozharsky, early Romanovs, and the Church Schism.',
  },
  {
    grade: 8,
    titleRu: '8 класс: Российская империя XVIII века',
    titleEn: 'Grade 8: Russian Empire in the 18th Century',
    periodRu: 'XVIII век (1689–1801)',
    periodEn: '18th Century (1689–1801)',
    icon: '⚓',
    badgeRu: 'Пётр I & Екатерина II',
    badgeEn: 'Peter I & Catherine II',
    summaryRu: 'Преобразования Петра Великого, выход к Балтике, эпоха дворцовых переворотов, просвещённый абсолютизм Екатерины II и победы Суворова.',
    summaryEn: 'Petrine modernization, Baltic access, palace coups, Catherine the Great enlightened absolutism, and Suvorov triumphs.',
  },
  {
    grade: 9,
    titleRu: '9 класс: Россия в XIX веке (Курс ОГЭ)',
    titleEn: 'Grade 9: 19th Century Russia (OGE Focus)',
    periodRu: '1801 — 1914 гг.',
    periodEn: '1801 — 1914',
    icon: '🏛️',
    badgeRu: 'Отечественная война & Реформы',
    badgeEn: '1812 & Great Reforms',
    summaryRu: 'Отечественная война 1812 года, восстание декабристов, Крымская война, Великие реформы Александра II и контрреформы Александра III.',
    summaryEn: 'Patriotic War of 1812, Decembrists, Crimean War, Great Reforms of Alexander II, and conservative turn under Alexander III.',
  },
  {
    grade: 10,
    titleRu: '10 класс: Россия в первой половине XX века',
    titleEn: 'Grade 10: Early 20th Century Russia',
    periodRu: '1914 — 1945 гг.',
    periodEn: '1914 — 1945',
    icon: '⭐',
    badgeRu: 'Революции & Великая Отечественная',
    badgeEn: 'Revolutions & WWII',
    summaryRu: 'Первая мировая война, Революции 1917 года, Гражданская война, образование СССР, индустриализация и Победа в Великой Отечественной войне.',
    summaryEn: 'WWI, Revolutions of 1917, Civil War, USSR formation, industrialization, and Great Patriotic War victory.',
  },
  {
    grade: 11,
    titleRu: '11 класс: СССР во второй половине XX в. и Россия в XXI в.',
    titleEn: 'Grade 11: Late USSR & Contemporary Russia (EGE)',
    periodRu: '1945 — 2020-е гг.',
    periodEn: '1945 — 2020s',
    icon: '🚀',
    badgeRu: 'Оттепель, Застой, РФ (ЕГЭ)',
    badgeEn: 'Thaw, Stagnation, Modern RF',
    summaryRu: 'Апогей сталинизма, хрущёвская Оттепель и космос, брежневский Застой, горбачёвская Перестройка, распад СССР и становление современной России.',
    summaryEn: 'Post-war recovery, Khrushchev Thaw & space race, Brezhnev stagnation, Perestroika, USSR collapse, and contemporary Russia.',
  },
];

export const HistoryView: React.FC<HistoryViewProps> = ({
  lang,
  audioSpeed,
  progress,
  onRecordTopicStudied,
  onToggleFavoriteTopic,
  onRecordQuizScore,
}) => {
  const [selectedGrade, setSelectedGrade] = useState<SchoolGrade>(6);
  const [selectedTopic, setSelectedTopic] = useState<HistoryTopic | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMode, setFilterMode] = useState<'all' | 'studied' | 'favorites' | 'videos'>('all');
  const [eraFilter, setEraFilter] = useState<string>('all');

  const currentConfig = GRADE_CONFIGS.find((c) => c.grade === selectedGrade) || GRADE_CONFIGS[1];

  // Topics for current grade
  const gradeTopics = useMemo(() => {
    return getTopicsByGrade(selectedGrade);
  }, [selectedGrade]);

  const gradeVideosCount = useMemo(() => {
    return gradeTopics.reduce((acc, t) => acc + (t.videoLectures?.length || 0), 0);
  }, [gradeTopics]);

  // Eras available for current grade
  const currentGradeEras = useMemo(() => {
    return HISTORY_ERAS.filter((era) => era.grade === selectedGrade);
  }, [selectedGrade]);

  // Filtered topics
  const filteredTopics = useMemo(() => {
    return gradeTopics.filter((topic) => {
      // Search
      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        !query ||
        topic.titleRu.toLowerCase().includes(query) ||
        topic.subtitleRu.toLowerCase().includes(query) ||
        topic.overviewRu.toLowerCase().includes(query) ||
        topic.periodRu.toLowerCase().includes(query) ||
        topic.keyFigures.some((f) => f.nameRu.toLowerCase().includes(query)) ||
        topic.timelineEvents.some((e) => e.titleRu.toLowerCase().includes(query)) ||
        topic.terms.some((t) => t.termRu.toLowerCase().includes(query));

      if (!matchSearch) return false;

      // Era filter
      if (eraFilter !== 'all' && topic.eraId !== eraFilter) return false;

      // Studied / Favorite filter
      const isStudied = (progress.studiedHistoryTopics || []).includes(topic.id);
      const isFav = (progress.favoriteHistoryTopics || []).includes(topic.id);

      if (filterMode === 'studied' && !isStudied) return false;
      if (filterMode === 'favorites' && !isFav) return false;

      return true;
    });
  }, [gradeTopics, searchQuery, eraFilter, filterMode, progress]);

  // Stats
  const studiedInGrade = useMemo(() => {
    const list = progress.studiedHistoryTopics || [];
    return gradeTopics.filter((t) => list.includes(t.id)).length;
  }, [gradeTopics, progress.studiedHistoryTopics]);

  const totalStudiedOverall = useMemo(() => {
    return (progress.studiedHistoryTopics || []).length;
  }, [progress.studiedHistoryTopics]);

  // If a topic is selected, render detail view
  if (selectedTopic) {
    const isStudied = (progress.studiedHistoryTopics || []).includes(selectedTopic.id);
    const isFav = (progress.favoriteHistoryTopics || []).includes(selectedTopic.id);
    const score = progress.historyQuizScores?.[selectedTopic.id];

    return (
      <HistoryTopicDetail
        topic={selectedTopic}
        lang={lang}
        audioSpeed={audioSpeed}
        isStudied={isStudied}
        isFavorite={isFav}
        quizScore={score}
        onBack={() => setSelectedTopic(null)}
        onToggleStudied={onRecordTopicStudied}
        onToggleFavorite={onToggleFavoriteTopic}
        onRecordQuiz={onRecordQuizScore}
      />
    );
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 w-72 h-72 bg-gradient-to-br from-amber-100/40 via-blue-100/30 to-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800 mb-3">
              <Landmark className="w-4 h-4 text-amber-700" />
              <span>{lang === 'ru' ? 'Школьный курс истории России (5–11 классы)' : 'Russian History Curriculum (Grades 5-11)'}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-2">
              {lang === 'ru' ? 'История Государства Российского' : 'History of the Russian State'}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {lang === 'ru'
                ? 'Полный интерактивный курс отечественной истории с 5 по 11 класс: ключевые эпохи, правители и реформаторы, хронология сражений, словарь понятий и подготовка к ОГЭ и ЕГЭ.'
                : 'A comprehensive interactive course covering 5th to 11th grade Russian history: crucial eras, rulers and reformers, battle timelines, glossary of terms, and state exam mastery.'}
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex sm:flex-col gap-3 shrink-0">
            <div className="bg-slate-50 border border-slate-200 p-3.5 sm:p-4 rounded-2xl flex items-center space-x-3.5 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-lg">
                🏛️
              </div>
              <div>
                <span className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider block">
                  {lang === 'ru' ? 'Изучено тем' : 'Studied Topics'}
                </span>
                <span className="text-lg sm:text-xl font-black text-slate-900">
                  {totalStudiedOverall} <span className="text-xs font-medium text-slate-400">/ {ALL_HISTORY_TOPICS.length}</span>
                </span>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-3.5 sm:p-4 rounded-2xl flex items-center space-x-3.5 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0039A6] flex items-center justify-center font-black text-lg">
                🎯
              </div>
              <div>
                <span className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider block">
                  {lang === 'ru' ? 'В этом классе' : 'In This Grade'}
                </span>
                <span className="text-lg sm:text-xl font-black text-slate-900">
                  {studiedInGrade} <span className="text-xs font-medium text-slate-400">/ {gradeTopics.length}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grade Selector Tabs (5 - 11) */}
      <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
          {GRADE_CONFIGS.map((cfg) => {
            const isSelected = selectedGrade === cfg.grade;
            return (
              <button
                key={cfg.grade}
                id={`grade-tab-${cfg.grade}`}
                onClick={() => {
                  setSelectedGrade(cfg.grade);
                  setEraFilter('all');
                }}
                className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0039A6] text-white shadow-md shadow-blue-800/20'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span className="text-base">{cfg.icon}</span>
                <span>{cfg.grade} {lang === 'ru' ? 'класс' : 'Grade'}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-md font-semibold hidden md:inline ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {lang === 'ru' ? cfg.periodRu : cfg.periodEn}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grade Curriculum Overview Card */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-white/10 text-xs font-bold text-amber-300 mb-2">
              <span>{currentConfig.icon}</span>
              <span>{lang === 'ru' ? currentConfig.badgeRu : currentConfig.badgeEn}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black mb-1">
              {lang === 'ru' ? currentConfig.titleRu : currentConfig.titleEn}
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 max-w-3xl leading-relaxed font-normal">
              {lang === 'ru' ? currentConfig.summaryRu : currentConfig.summaryEn}
            </p>
          </div>

          <div className="shrink-0 bg-white/10 px-4 py-2.5 rounded-2xl text-center border border-white/10">
            <span className="text-xs text-blue-200 block font-medium">
              {lang === 'ru' ? 'Хронология эпохи' : 'Era Period'}
            </span>
            <span className="text-sm font-black text-amber-300">
              {lang === 'ru' ? currentConfig.periodRu : currentConfig.periodEn}
            </span>
          </div>
        </div>
      </div>

      {/* Search & Filters Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="history-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === 'ru'
                  ? 'Поиск по теме, правителю, битве, реформе или термину...'
                  : 'Search by topic, ruler, battle, reform, or term...'
              }
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0039A6] focus:bg-white transition-all"
            />
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                filterMode === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {lang === 'ru' ? 'Все темы' : 'All Topics'} ({gradeTopics.length})
            </button>

            <button
              onClick={() => setFilterMode('studied')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center space-x-1.5 ${
                filterMode === 'studied'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{lang === 'ru' ? 'Изученные' : 'Studied'}</span>
            </button>

            <button
              onClick={() => setFilterMode('favorites')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center space-x-1.5 ${
                filterMode === 'favorites'
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>{lang === 'ru' ? 'В закладках' : 'Favorites'}</span>
            </button>

            <button
              onClick={() => setFilterMode('videos')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center space-x-1.5 ${
                filterMode === 'videos'
                  ? 'bg-red-600 text-white shadow-2xs'
                  : 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200'
              }`}
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>{lang === 'ru' ? 'YouTube-лекторий' : 'Video Lectures'}</span>
              <span className={`px-1.5 py-0.2 text-[10px] rounded-full font-black ${
                filterMode === 'videos' ? 'bg-white/20 text-white' : 'bg-red-200 text-red-900'
              }`}>
                {gradeVideosCount}
              </span>
            </button>
          </div>
        </div>

        {/* Era Sub-filter Pills */}
        {filterMode !== 'videos' && currentGradeEras.length > 1 && (
          <div className="flex items-center space-x-2 overflow-x-auto pt-1 pb-1 scrollbar-none border-t border-slate-100">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-1">
              <Layers className="w-3.5 h-3.5" />
              {lang === 'ru' ? 'Эпохи:' : 'Eras:'}
            </span>
            <button
              onClick={() => setEraFilter('all')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                eraFilter === 'all'
                  ? 'bg-blue-100 text-[#0039A6] font-bold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {lang === 'ru' ? 'Все эпохи' : 'All Eras'}
            </button>
            {currentGradeEras.map((era) => (
              <button
                key={era.id}
                onClick={() => setEraFilter(era.id)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  eraFilter === era.id
                    ? 'bg-blue-100 text-[#0039A6] font-bold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{era.icon}</span>
                <span>{lang === 'ru' ? era.titleRu : era.titleEn}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Content Area: Videos Hub OR Topics Grid */}
      {filterMode === 'videos' ? (
        <HistoryYoutubeHub
          currentGrade={selectedGrade}
          lang={lang}
          onSelectTopic={(topic) => setSelectedTopic(topic)}
        />
      ) : filteredTopics.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.map((topic) => {
            const isStudied = (progress.studiedHistoryTopics || []).includes(topic.id);
            const isFav = (progress.favoriteHistoryTopics || []).includes(topic.id);
            const score = progress.historyQuizScores?.[topic.id];

            return (
              <HistoryTopicCard
                key={topic.id}
                topic={topic}
                lang={lang}
                isStudied={isStudied}
                isFavorite={isFav}
                quizScore={score}
                onSelect={() => setSelectedTopic(topic)}
                onToggleFavorite={(e) => {
                  e.stopPropagation();
                  onToggleFavoriteTopic(topic.id);
                }}
                onToggleStudied={(e) => {
                  e.stopPropagation();
                  onRecordTopicStudied(topic.id);
                }}
              />
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-xs space-y-4">
          <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-400 text-2xl flex items-center justify-center mx-auto">
            🔍
          </div>
          <h3 className="text-lg font-bold text-slate-800">
            {lang === 'ru' ? 'Темы не найдены' : 'No topics found'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
            {lang === 'ru'
              ? 'Попробуйте изменить поисковый запрос или сбросить фильтры по изученным и избранным темам.'
              : 'Try modifying your search query or clearing the filters.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setFilterMode('all');
              setEraFilter('all');
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold text-[#0039A6] bg-blue-50 hover:bg-blue-100 transition-colors"
          >
            {lang === 'ru' ? 'Сбросить все фильтры' : 'Reset all filters'}
          </button>
        </div>
      )}
    </div>
  );
};
