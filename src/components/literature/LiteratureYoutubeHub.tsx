import React, { useState, useMemo } from 'react';
import { SchoolGrade, SupportedLang, LiteraryWork, LiteratureYoutubeReview } from '../../types';
import { ALL_LITERATURE_WORKS } from '../../data/literatureData';
import { getAllYoutubeReviews } from '../../data/literatureYoutubeReviews';
import {
  Play,
  ExternalLink,
  CheckCircle2,
  Clock,
  User,
  Award,
  Youtube,
  Search,
  BookOpen,
  Filter,
  Sparkles,
} from 'lucide-react';

interface LiteratureYoutubeHubProps {
  currentGrade: SchoolGrade;
  lang: SupportedLang;
  watchedVideos: string[];
  onRecordVideoWatched: (videoId: string) => void;
  onSelectWork: (work: LiteraryWork) => void;
}

export const LiteratureYoutubeHub: React.FC<LiteratureYoutubeHubProps> = ({
  currentGrade,
  lang,
  watchedVideos,
  onRecordVideoWatched,
  onSelectWork,
}) => {
  const [scope, setScope] = useState<'grade' | 'all'>('grade');
  const [selectedChannel, setSelectedChannel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePlayingId, setActivePlayingId] = useState<string | null>(null);

  // All reviews paired with their parent work
  const allReviewsWithWork = useMemo(() => {
    const list: { review: LiteratureYoutubeReview; work: LiteraryWork }[] = [];
    ALL_LITERATURE_WORKS.forEach((w) => {
      (w.youtubeReviews || []).forEach((r) => {
        list.push({ review: r, work: w });
      });
    });
    return list;
  }, []);

  // Channels list
  const availableChannels = useMemo(() => {
    const set = new Set<string>();
    allReviewsWithWork.forEach((item) => set.add(item.review.channelName));
    return Array.from(set);
  }, [allReviewsWithWork]);

  // Filtered reviews
  const filtered = useMemo(() => {
    return allReviewsWithWork.filter((item) => {
      // Grade scope
      if (scope === 'grade' && item.work.grade !== currentGrade) return false;

      // Channel filter
      if (selectedChannel !== 'all' && item.review.channelName !== selectedChannel) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.review.titleRu.toLowerCase().includes(q) || item.review.titleEn.toLowerCase().includes(q);
        const matchHost = item.review.speakerOrHostRu.toLowerCase().includes(q) || item.review.channelName.toLowerCase().includes(q);
        const matchWork = item.work.titleRu.toLowerCase().includes(q) || item.work.authorRu.toLowerCase().includes(q);
        const matchTags = item.review.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchTitle && !matchHost && !matchWork && !matchTags) return false;
      }

      return true;
    });
  }, [allReviewsWithWork, scope, currentGrade, selectedChannel, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-950 via-slate-900 to-rose-950 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-red-900/50">
        <div className="absolute -right-10 -top-10 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold uppercase tracking-wider border border-red-500/30">
              <Youtube className="w-4 h-4 text-red-400" />
              <span>{lang === 'ru' ? 'YouTube-лекторий & Видеокритика' : 'YouTube Video Lectures & Criticism'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              {lang === 'ru'
                ? 'Рецензии и глубокий анализ классики'
                : 'Video Essays & Master Lectures on Classics'}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {lang === 'ru'
                ? 'Отобранные лекции филологов, историков литературы и критиков каналов «Полка», «Arzamas», «Армен и Фёдор», «Лекторий Достоевский» для глубокого осмысления текстов и подготовки к сочинениям.'
                : 'Curated video essays and lectures from leading philologists and educational channels analyzing classic Russian masterpieces.'}
            </p>
          </div>

          <div className="flex flex-row md:flex-col gap-3 shrink-0">
            <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 text-xs">
              <span className="text-slate-400 block">{lang === 'ru' ? 'Просмотрено:' : 'Watched:'}</span>
              <span className="font-black text-amber-300 text-lg">
                {watchedVideos.length} <span className="text-xs font-normal text-slate-300">/ {allReviewsWithWork.length} видео</span>
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 text-xs">
              <span className="text-slate-400 block">{lang === 'ru' ? 'Бонус за каждое:' : 'Bonus per video:'}</span>
              <span className="font-black text-emerald-300 text-sm flex items-center space-x-1">
                <Award className="w-4 h-4 text-amber-400" />
                <span>+15 XP к опыту</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Scope Control Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Scope Switcher: Current Grade vs All Grades */}
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <button
            onClick={() => setScope('grade')}
            className={`flex-1 md:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
              scope === 'grade'
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {lang === 'ru' ? `Только ${currentGrade} класс` : `Grade ${currentGrade} only`}
          </button>
          <button
            onClick={() => setScope('all')}
            className={`flex-1 md:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
              scope === 'all'
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {lang === 'ru' ? `Все классы 5–11 (${allReviewsWithWork.length})` : `All Grades 5-11 (${allReviewsWithWork.length})`}
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === 'ru' ? 'Поиск по книге, автору или критику...' : 'Search by book, critic, topic...'}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
          />
        </div>

        {/* Channel Selector */}
        <div className="w-full md:w-auto">
          <select
            value={selectedChannel}
            onChange={(e) => setSelectedChannel(e.target.value)}
            aria-label={lang === 'ru' ? 'Фильтр по YouTube-каналу' : 'Filter by YouTube channel'}
            className="w-full md:w-auto px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200 focus:outline-hidden"
          >
            <option value="all">{lang === 'ru' ? 'Все каналы' : 'All channels'}</option>
            {availableChannels.map((ch) => (
              <option key={ch} value={ch}>
                {ch}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Reviews Cards Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(({ review, work }) => {
            const isWatched = watchedVideos.includes(review.id);
            const isPlayingThis = activePlayingId === review.id;

            return (
              <div
                key={review.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Top Video Preview / Embed */}
                <div>
                  <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
                    {isPlayingThis ? (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${review.youtubeId}?autoplay=1&rel=0`}
                        title={lang === 'ru' ? review.titleRu : review.titleEn}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full border-0"
                      />
                    ) : (
                      <div
                        onClick={() => setActivePlayingId(review.id)}
                        className="w-full h-full relative cursor-pointer group/thumb"
                      >
                        {/* High-res YouTube thumbnail */}
                        <img
                          src={`https://img.youtube.com/vi/${review.youtubeId}/hqdefault.jpg`}
                          alt={lang === 'ru' ? review.titleRu : review.titleEn}
                          className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300 opacity-90"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center group-hover/thumb:scale-110 group-hover/thumb:bg-red-600 transition-all shadow-lg">
                            <Play className="w-6 h-6 ml-0.5 fill-white" />
                          </div>
                        </div>

                        {/* Top Badges overlay */}
                        <div className="absolute top-2.5 left-2.5 flex items-center space-x-1.5">
                          <span className="px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-white text-[11px] font-bold">
                            {work.grade} {lang === 'ru' ? 'класс' : 'grade'}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-red-600 text-white text-[11px] font-bold flex items-center space-x-1">
                            <span>{review.channelAvatar}</span>
                            <span>{review.channelName}</span>
                          </span>
                        </div>

                        {/* Duration badge */}
                        <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/80 text-white text-[11px] font-semibold flex items-center space-x-1">
                          <Clock className="w-3 h-3 text-slate-300" />
                          <span>{review.duration}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    {/* Work Title & Author pill */}
                    <div className="flex items-center justify-between gap-2">
                      <button
                        onClick={() => onSelectWork(work)}
                        className="text-xs font-bold text-[#0039A6] hover:underline flex items-center space-x-1 text-left"
                      >
                        <BookOpen className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">«{lang === 'ru' ? work.titleRu : work.titleEn}»</span>
                      </button>
                      <span className="text-[11px] text-slate-500 shrink-0 font-medium">
                        {lang === 'ru' ? work.authorRu : work.authorEn}
                      </span>
                    </div>

                    {/* Review Title */}
                    <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-red-700 transition-colors">
                      {lang === 'ru' ? review.titleRu : review.titleEn}
                    </h3>

                    {/* Speaker */}
                    <div className="flex items-center space-x-1.5 text-xs text-slate-600">
                      <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="font-medium text-slate-800">
                        {lang === 'ru' ? review.speakerOrHostRu : review.speakerOrHostEn}
                      </span>
                    </div>

                    {/* Summary */}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {lang === 'ru' ? review.summaryRu : review.summaryEn}
                    </p>

                    {/* Key Takeaways snippet */}
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center space-x-1">
                        <Sparkles className="w-3 h-3 text-amber-500" />
                        <span>{lang === 'ru' ? 'Главный инсайт:' : 'Key insight:'}</span>
                      </span>
                      <p className="text-[11px] text-slate-700 italic line-clamp-2">
                        «{review.keyTakeawaysRu[0]}»
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onRecordVideoWatched(review.id)}
                    className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      isWatched
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 hover:bg-amber-200 text-amber-900'
                    }`}
                  >
                    {isWatched ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{lang === 'ru' ? 'Просмотрено' : 'Watched'}</span>
                      </>
                    ) : (
                      <>
                        <Award className="w-3.5 h-3.5 text-amber-700" />
                        <span>+15 XP</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onSelectWork(work)}
                      className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors"
                    >
                      {lang === 'ru' ? 'Разбор книги' : 'Study work'}
                    </button>
                    <a
                      href={review.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors"
                      title={lang === 'ru' ? 'Смотреть на YouTube' : 'Watch on YouTube'}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto space-y-3">
          <div className="w-12 h-12 rounded-full bg-red-50 text-red-600 flex items-center justify-center mx-auto text-xl">
            🎬
          </div>
          <h3 className="text-lg font-bold text-slate-800">
            {lang === 'ru' ? 'Рецензий не найдено' : 'No video reviews found'}
          </h3>
          <p className="text-xs text-slate-500">
            {lang === 'ru'
              ? 'Попробуйте сбросить поисковый фильтр или переключить класс.'
              : 'Try clearing the search filter or switching the grade.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedChannel('all');
              setScope('all');
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-red-600 text-white hover:bg-red-700 transition-colors"
          >
            {lang === 'ru' ? 'Показать все видео' : 'Show all videos'}
          </button>
        </div>
      )}
    </div>
  );
};
