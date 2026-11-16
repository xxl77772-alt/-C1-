import React, { useState } from 'react';
import { Play, ExternalLink, CheckCircle2, Clock, User, Award, BookOpen, Sparkles, Youtube } from 'lucide-react';
import { LiteraryWork, LiteratureYoutubeReview } from '../../types';

interface LiteratureYoutubeSectionProps {
  work: LiteraryWork;
  lang: 'ru' | 'en';
  watchedVideos: string[];
  onRecordVideoWatched: (videoId: string) => void;
}

export const LiteratureYoutubeSection: React.FC<LiteratureYoutubeSectionProps> = ({
  work,
  lang,
  watchedVideos,
  onRecordVideoWatched,
}) => {
  const reviews = work.youtubeReviews || [];
  const [selectedReviewId, setSelectedReviewId] = useState<string>(reviews[0]?.id || '');
  const [isPlayingEmbed, setIsPlayingEmbed] = useState<boolean>(true);

  if (reviews.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200 p-8 text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-3xl">
          🎬
        </div>
        <h3 className="text-xl font-bold text-slate-900">
          {lang === 'ru' ? 'Видеорецензии готовятся' : 'Video reviews coming soon'}
        </h3>
        <p className="text-slate-600 max-w-md mx-auto text-sm">
          {lang === 'ru'
            ? 'Мы отбираем лучшие академические лекции и разборы от каналов «Полка», «Arzamas» и «Армен и Фёдор» для этого произведения.'
            : 'We are curating the highest-rated academic lectures and video essays from Polka, Arzamas, and renowned literary critics.'}
        </p>
      </div>
    );
  }

  const activeReview = reviews.find((r) => r.id === selectedReviewId) || reviews[0];
  const isWatched = watchedVideos.includes(activeReview.id);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-red-950 via-slate-900 to-rose-950 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-red-900/40">
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold uppercase tracking-wider border border-red-500/30">
              <Youtube className="w-3.5 h-3.5 text-red-400" />
              <span>{lang === 'ru' ? 'YouTube-видеолекторий и критика' : 'YouTube Video Lectures & Criticism'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              {lang === 'ru'
                ? `Видеорецензии: «${work.titleRu}»`
                : `Video Reviews: "${work.titleEn}"`}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {lang === 'ru'
                ? 'Глубокие литературоведческие разборы, лекции филологов и видеоэссе от ведущих просветительских каналов: Полка, Arzamas, Армен и Фёдор, Лекторий Достоевский.'
                : 'In-depth literary analyses, philological lectures, and video essays from acclaimed educational channels.'}
            </p>
          </div>

          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 text-xs">
            <Award className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <span className="text-slate-300 block">{lang === 'ru' ? 'Награда за просмотр:' : 'Reward per video:'}</span>
              <span className="font-bold text-amber-300 text-sm">+15 XP {lang === 'ru' ? 'к опыту' : 'XP points'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Multiple reviews selector tabs if > 1 */}
      {reviews.length > 1 && (
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-bold text-slate-500 whitespace-nowrap pl-1">
            {lang === 'ru' ? 'Выберите рецензию:' : 'Select review:'}
          </span>
          {reviews.map((r, idx) => {
            const isSelected = r.id === activeReview.id;
            const reviewWatched = watchedVideos.includes(r.id);
            return (
              <button
                key={r.id}
                onClick={() => {
                  setSelectedReviewId(r.id);
                  setIsPlayingEmbed(true);
                }}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-red-600 text-white border-red-700 shadow-md shadow-red-600/20'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                }`}
              >
                <span className="text-sm">{r.channelAvatar}</span>
                <span>{r.channelName}</span>
                <span className="opacity-75 font-normal">({r.duration})</span>
                {reviewWatched && (
                  <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-red-200' : 'text-emerald-500'}`} />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Main Video & Details Panel */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Left / Top: Video Player Embed */}
        <div className="lg:col-span-7 bg-black flex flex-col">
          <div className="relative w-full aspect-video bg-slate-950">
            {isPlayingEmbed ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeReview.youtubeId}?autoplay=0&rel=0&modestbranding=1`}
                title={lang === 'ru' ? activeReview.titleRu : activeReview.titleEn}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-white space-y-4">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white cursor-pointer shadow-lg hover:scale-105 transition-transform"
                  onClick={() => setIsPlayingEmbed(true)}
                >
                  <Play className="w-8 h-8 ml-1" />
                </div>
                <div>
                  <h4 className="font-bold text-base">{activeReview.titleRu}</h4>
                  <p className="text-xs text-slate-400 mt-1">{activeReview.channelName} • {activeReview.duration}</p>
                </div>
              </div>
            )}
          </div>

          {/* Quick controls bar below video */}
          <div className="p-4 bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 text-xs">
            <div className="flex items-center space-x-2">
              <span className="text-base">{activeReview.channelAvatar}</span>
              <span className="font-bold text-slate-200">{activeReview.channelName}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{activeReview.duration}</span>
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => onRecordVideoWatched(activeReview.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl font-bold transition-colors ${
                  isWatched
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30'
                }`}
              >
                {isWatched ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === 'ru' ? 'Просмотрено (+15 XP)' : 'Watched (+15 XP)'}</span>
                  </>
                ) : (
                  <>
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>{lang === 'ru' ? 'Отметить просмотр (+15 XP)' : 'Mark watched (+15 XP)'}</span>
                  </>
                )}
              </button>

              <a
                href={activeReview.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-red-600/80 hover:bg-red-600 text-white font-bold transition-colors"
                title={lang === 'ru' ? 'Смотреть прямо на YouTube' : 'Watch on YouTube'}
              >
                <Youtube className="w-3.5 h-3.5" />
                <span>{lang === 'ru' ? 'На YouTube' : 'YouTube'}</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right / Bottom: Reviewer Breakdown & Key Takeaways */}
        <div className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Title & Critic */}
            <div>
              <div className="flex flex-wrap items-center gap-1.5 mb-2">
                {activeReview.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-black text-slate-900 leading-snug">
                {lang === 'ru' ? activeReview.titleRu : activeReview.titleEn}
              </h3>
              <div className="flex items-center space-x-2 mt-2 text-xs text-slate-500">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span>{lang === 'ru' ? 'Лектор / Рецензент:' : 'Speaker / Reviewer:'}</span>
                <span className="font-bold text-slate-800">
                  {lang === 'ru' ? activeReview.speakerOrHostRu : activeReview.speakerOrHostEn}
                </span>
              </div>
            </div>

            {/* Summary */}
            <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100 text-xs text-slate-700 leading-relaxed space-y-1">
              <span className="font-bold text-rose-900 block text-[11px] uppercase tracking-wider">
                {lang === 'ru' ? 'О чём этот видеоразбор:' : 'Review Overview:'}
              </span>
              <p>{lang === 'ru' ? activeReview.summaryRu : activeReview.summaryEn}</p>
            </div>

            {/* Key Takeaways */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>{lang === 'ru' ? 'Ключевые инсайты рецензента' : 'Key Critical Insights'}</span>
              </h4>
              <ul className="space-y-2">
                {activeReview.keyTakeawaysRu.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-slate-700 flex items-start space-x-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center shrink-0 text-[10px]">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Exam & Essay Application Hint */}
          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 space-y-1">
            <span className="font-bold flex items-center space-x-1.5 text-amber-800">
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>{lang === 'ru' ? 'Польза для сочинения и экзамена' : 'Exam & Essay Value'}</span>
            </span>
            <p className="text-[11px] text-amber-800 leading-relaxed">
              {lang === 'ru' ? activeReview.recommendedForRu : activeReview.recommendedForEn}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
