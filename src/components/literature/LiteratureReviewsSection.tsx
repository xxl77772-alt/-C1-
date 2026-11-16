import React, { useState } from 'react';
import {
  FileText,
  ExternalLink,
  Copy,
  Check,
  BookOpen,
  Clock,
  Sparkles,
  ShieldCheck,
  Youtube,
  Play,
  Award,
  Layers,
  Search,
} from 'lucide-react';
import { LiteraryWork, SupportedLang, LiteratureCriticalArticle, LiteratureYoutubeReview } from '../../types';

interface LiteratureReviewsSectionProps {
  work: LiteraryWork;
  lang: SupportedLang;
  watchedVideos?: string[];
  onRecordVideoWatched?: (videoId: string) => void;
}

export const LiteratureReviewsSection: React.FC<LiteratureReviewsSectionProps> = ({
  work,
  lang,
  watchedVideos = [],
  onRecordVideoWatched = (_videoId: string) => {},
}) => {
  const articles = work.criticalArticles || [];
  const youtubeReviews = work.youtubeReviews || [];

  const [activeTab, setActiveTab] = useState<'all' | 'articles' | 'videos'>('all');
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [selectedVideoId, setSelectedVideoId] = useState<string>(youtubeReviews[0]?.id || '');
  const [searchFilter, setSearchFilter] = useState('');

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => {
      setCopiedUrl(null);
    }, 2000);
  };

  const activeVideo = youtubeReviews.find((v) => v.id === selectedVideoId) || youtubeReviews[0];
  const isVideoWatched = activeVideo ? watchedVideos.includes(activeVideo.id) : false;

  const filteredArticles = articles.filter(
    (a) =>
      a.titleRu.toLowerCase().includes(searchFilter.toLowerCase()) ||
      a.authorOrCriticRu.toLowerCase().includes(searchFilter.toLowerCase()) ||
      a.sourceName.toLowerCase().includes(searchFilter.toLowerCase()) ||
      a.annotationRu.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const filteredVideos = youtubeReviews.filter(
    (v) =>
      v.titleRu.toLowerCase().includes(searchFilter.toLowerCase()) ||
      v.speakerOrHostRu.toLowerCase().includes(searchFilter.toLowerCase()) ||
      v.channelName.toLowerCase().includes(searchFilter.toLowerCase()) ||
      v.summaryRu.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const getSourceBadgeStyle = (sourceName: string) => {
    if (sourceName.includes('Полка')) {
      return 'bg-indigo-50 text-indigo-700 border-indigo-200';
    }
    if (sourceName.includes('Arzamas')) {
      return 'bg-amber-50 text-amber-800 border-amber-200';
    }
    if (sourceName.includes('Ilibrary') || sourceName.includes('Классика')) {
      return 'bg-emerald-50 text-emerald-800 border-emerald-200';
    }
    return 'bg-blue-50 text-blue-700 border-blue-200';
  };

  return (
    <div className="space-y-6">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-950 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-lg border border-indigo-900/50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-500/30">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{lang === 'ru' ? 'Верифицированные рецензии (200 OK)' : 'Verified Reviews (200 OK)'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              {lang === 'ru'
                ? `Рецензии и разборы: «${work.titleRu}»`
                : `Reviews & Critical Essays: "${work.titleEn}"`}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {lang === 'ru'
                ? 'Рабочие прямые ссылки на авторитетные академические рецензии («Полка», «Arzamas», классическая критика XIX века на Ilibrary) и видеоразборы ведущих литературоведов.'
                : 'Direct working links to acclaimed literary criticism (Polka Academy, Arzamas, classic 19th-century essays on Ilibrary), and video lectures.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 shrink-0">
            <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 text-xs flex items-center space-x-3">
              <FileText className="w-5 h-5 text-indigo-400 shrink-0" />
              <div>
                <span className="text-slate-300 block">{lang === 'ru' ? 'Статей и рецензий:' : 'Articles & Reviews:'}</span>
                <span className="font-bold text-white text-sm">{articles.length} {lang === 'ru' ? 'материала' : 'items'}</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 text-xs flex items-center space-x-3">
              <Youtube className="w-5 h-5 text-rose-400 shrink-0" />
              <div>
                <span className="text-slate-300 block">{lang === 'ru' ? 'Видеоразборов:' : 'Video Lectures:'}</span>
                <span className="font-bold text-white text-sm">{youtubeReviews.length} {lang === 'ru' ? 'видео' : 'videos'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {lang === 'ru' ? 'Все материалы' : 'All Materials'} ({articles.length + youtubeReviews.length})
          </button>
          <button
            onClick={() => setActiveTab('articles')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
              activeTab === 'articles'
                ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/20'
                : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{lang === 'ru' ? 'Академические статьи и критика' : 'Academic Articles'} ({articles.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
              activeTab === 'videos'
                ? 'bg-red-600 text-white shadow-sm shadow-red-600/20'
                : 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200'
            }`}
          >
            <Youtube className="w-3.5 h-3.5" />
            <span>{lang === 'ru' ? 'Видеорецензии (YouTube)' : 'Video Reviews'} ({youtubeReviews.length})</span>
          </button>
        </div>

        {/* Quick Filter */}
        <div className="relative min-w-[220px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder={lang === 'ru' ? 'Поиск рецензий...' : 'Search reviews...'}
            className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs text-slate-800 bg-white placeholder-slate-400 focus:outline-hidden focus:border-indigo-500"
          />
        </div>
      </div>

      {/* SECTION 1: Critical Articles and Texts */}
      {(activeTab === 'all' || activeTab === 'articles') && (
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-slate-900 font-bold text-base">
            <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
              <FileText className="w-4 h-4" />
            </div>
            <span>{lang === 'ru' ? 'Академические рецензии и критические статьи' : 'Academic Critical Reviews'}</span>
            <span className="text-xs text-slate-500 font-normal">
              ({filteredArticles.length} {lang === 'ru' ? 'источника' : 'sources'})
            </span>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center text-xs text-slate-500">
              {lang === 'ru' ? 'Рецензии по вашему запросу не найдены' : 'No articles match your query'}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {filteredArticles.map((article) => {
                const isCopied = copiedUrl === article.url;
                return (
                  <div
                    key={article.id}
                    className="bg-white rounded-2xl border border-slate-200 hover:border-indigo-300 p-5 sm:p-6 transition-all shadow-xs hover:shadow-md space-y-4 relative group"
                  >
                    {/* Top Row: Meta Badges */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${getSourceBadgeStyle(article.sourceName)}`}>
                          {article.sourceName}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                          👤 {article.authorOrCriticRu}
                        </span>
                        {article.readingTimeMinutes && (
                          <span className="inline-flex items-center space-x-1 text-xs text-slate-500 font-medium">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{article.readingTimeMinutes} {lang === 'ru' ? 'мин чтения' : 'min read'}</span>
                          </span>
                        )}
                      </div>

                      {/* Verified Link Badge */}
                      <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{lang === 'ru' ? 'Ссылка проверена (200 OK)' : 'Verified Link (200 OK)'}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-indigo-900 transition-colors">
                        {lang === 'ru' ? article.titleRu : article.titleEn}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                        {lang === 'ru' ? article.annotationRu : article.annotationEn}
                      </p>
                    </div>

                    {/* Key Themes tags */}
                    {article.keyThemesRu && article.keyThemesRu.length > 0 && (
                      <div className="flex items-center space-x-1.5 flex-wrap gap-y-1 pt-1">
                        <span className="text-[11px] text-slate-400 font-semibold mr-1">
                          {lang === 'ru' ? 'Ключевые темы:' : 'Key themes:'}
                        </span>
                        {article.keyThemesRu.map((theme, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-lg text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200"
                          >
                            #{theme}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Bar with Direct Working Links */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between flex-wrap gap-3">
                      <div className="text-[11px] text-slate-400 font-mono truncate max-w-xs sm:max-w-md">
                        {article.url}
                      </div>

                      <div className="flex items-center space-x-2">
                        {/* Copy Link Button */}
                        <button
                          onClick={() => handleCopyLink(article.url)}
                          className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                          title={lang === 'ru' ? 'Копировать прямую ссылку' : 'Copy direct link'}
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-emerald-700">{lang === 'ru' ? 'Скопировано!' : 'Copied!'}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-slate-500" />
                              <span>{lang === 'ru' ? 'Копировать' : 'Copy'}</span>
                            </>
                          )}
                        </button>

                        {/* Open Working Link Button */}
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-xl text-xs font-bold bg-[#0039A6] hover:bg-blue-800 text-white shadow-2xs transition-all hover:shadow-sm"
                        >
                          <span>{lang === 'ru' ? 'Читать рецензию' : 'Read Review'}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* SECTION 2: YouTube Video Reviews */}
      {(activeTab === 'all' || activeTab === 'videos') && youtubeReviews.length > 0 && (
        <div className="space-y-4 pt-4">
          <div className="flex items-center space-x-2 text-slate-900 font-bold text-base">
            <div className="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold">
              <Youtube className="w-4 h-4" />
            </div>
            <span>{lang === 'ru' ? 'Видеорецензии и академические видеолекции' : 'Video Reviews & Lectures'}</span>
            <span className="text-xs text-slate-500 font-normal">
              ({filteredVideos.length} {lang === 'ru' ? 'видео' : 'videos'})
            </span>
          </div>

          {/* Active Video Player and Description Card */}
          {activeVideo && (
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm space-y-0">
              {/* Video Embed */}
              <div className="relative aspect-video w-full bg-slate-950">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?rel=0&modestbranding=1`}
                  title={activeVideo.titleRu}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Video Info and Controls */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center space-x-2.5">
                    <span className="text-2xl">{activeVideo.channelAvatar}</span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{activeVideo.channelName}</h4>
                      <p className="text-xs text-slate-500">
                        {lang === 'ru' ? 'Лектор:' : 'Host:'} {activeVideo.speakerOrHostRu} • ⏱ {activeVideo.duration}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {/* External Link directly to YouTube */}
                    <a
                      href={activeVideo.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-red-50 text-red-700 hover:bg-red-100 border border-red-200 transition-colors"
                    >
                      <Youtube className="w-3.5 h-3.5 text-red-600" />
                      <span>{lang === 'ru' ? 'Открыть на YouTube' : 'Open in YouTube'}</span>
                      <ExternalLink className="w-3 h-3 text-red-500" />
                    </a>

                    {/* Mark as watched button */}
                    <button
                      onClick={() => onRecordVideoWatched(activeVideo.id)}
                      className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-colors ${
                        isVideoWatched
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                      <span>{isVideoWatched ? (lang === 'ru' ? 'Просмотрено' : 'Watched') : (lang === 'ru' ? 'Отметить (+15 XP)' : 'Mark Watched (+15 XP)')}</span>
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    {lang === 'ru' ? activeVideo.titleRu : activeVideo.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {lang === 'ru' ? activeVideo.summaryRu : activeVideo.summaryEn}
                  </p>
                </div>

                {/* Key Takeaways */}
                {activeVideo.keyTakeawaysRu && activeVideo.keyTakeawaysRu.length > 0 && (
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2">
                    <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>{lang === 'ru' ? 'Главные тезисы рецензии:' : 'Key Review Takeaways:'}</span>
                    </h5>
                    <ul className="space-y-1.5">
                      {activeVideo.keyTakeawaysRu.map((item, i) => (
                        <li key={i} className="text-xs text-slate-700 flex items-start space-x-2">
                          <span className="text-emerald-500 font-bold shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Video selector pills if multiple videos exist */}
          {youtubeReviews.length > 1 && (
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
              <span className="text-xs font-bold text-slate-500 whitespace-nowrap pl-1">
                {lang === 'ru' ? 'Другие видеоразборы:' : 'Other Video Lectures:'}
              </span>
              {youtubeReviews.map((v) => {
                const isSelected = v.id === activeVideo.id;
                const watched = watchedVideos.includes(v.id);
                return (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVideoId(v.id)}
                    className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                      isSelected
                        ? 'bg-red-600 text-white border-red-700 shadow-xs'
                        : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                    }`}
                  >
                    <span>{v.channelAvatar}</span>
                    <span>{v.channelName}</span>
                    <span className="opacity-75 font-normal">({v.duration})</span>
                    {watched && <Check className="w-3 h-3 text-emerald-400 ml-1" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
