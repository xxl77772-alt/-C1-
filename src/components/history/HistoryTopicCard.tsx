import React from 'react';
import { HistoryTopic, SupportedLang } from '../../types';
import { Bookmark, CheckCircle2, Award, Calendar, Users, BookMarked, ArrowRight, Play } from 'lucide-react';

interface HistoryTopicCardProps {
  topic: HistoryTopic;
  lang: SupportedLang;
  isStudied: boolean;
  isFavorite: boolean;
  quizScore?: { score: number; total: number; passedAt: string };
  onSelect: () => void;
  onToggleFavorite: (e: React.MouseEvent) => void;
  onToggleStudied: (e: React.MouseEvent) => void;
}

export const HistoryTopicCard: React.FC<HistoryTopicCardProps> = ({
  topic,
  lang,
  isStudied,
  isFavorite,
  quizScore,
  onSelect,
  onToggleFavorite,
  onToggleStudied,
}) => {
  return (
    <div
      id={`history-topic-${topic.id}`}
      onClick={onSelect}
      className={`group relative bg-white rounded-3xl border p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 ${
        isStudied
          ? 'border-emerald-200 bg-emerald-50/20'
          : 'border-slate-200 hover:border-blue-400'
      }`}
    >
      <div>
        {/* Top badges & actions */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-blue-50 text-[#0039A6] border border-blue-100 flex items-center gap-1.5">
              <span>{topic.icon}</span>
              <span>{topic.grade} {lang === 'ru' ? 'класс' : 'Grade'}</span>
            </span>
            <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1">
              <Calendar className="w-3 h-3 text-slate-500" />
              <span>{lang === 'ru' ? topic.periodRu : topic.periodEn}</span>
            </span>
          </div>

          <div className="flex items-center space-x-1" onClick={(e) => e.stopPropagation()}>
            <button
              id={`fav-btn-${topic.id}`}
              onClick={onToggleFavorite}
              className={`p-2 rounded-xl transition-colors ${
                isFavorite
                  ? 'text-amber-500 bg-amber-50'
                  : 'text-slate-400 hover:text-amber-500 hover:bg-slate-100'
              }`}
              title={lang === 'ru' ? 'В закладки' : 'Bookmark topic'}
            >
              <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-amber-500' : ''}`} />
            </button>
            <button
              id={`studied-btn-${topic.id}`}
              onClick={onToggleStudied}
              className={`p-2 rounded-xl transition-colors ${
                isStudied
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-slate-400 hover:text-emerald-600 hover:bg-slate-100'
              }`}
              title={lang === 'ru' ? 'Отметить как изученное' : 'Mark as studied'}
            >
              <CheckCircle2 className={`w-4 h-4 ${isStudied ? 'fill-emerald-100' : ''}`} />
            </button>
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#0039A6] transition-colors leading-snug mb-1.5 line-clamp-2">
          {lang === 'ru' ? topic.titleRu : topic.titleEn}
        </h3>

        <p className="text-xs sm:text-sm font-medium text-slate-500 mb-3 line-clamp-2">
          {lang === 'ru' ? topic.subtitleRu : topic.subtitleEn}
        </p>

        {/* Overview Excerpt */}
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
          {lang === 'ru' ? topic.overviewRu : topic.overviewEn}
        </p>

        {/* Content Highlights Pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className="px-2 py-0.5 text-[11px] font-semibold rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100 flex items-center gap-1">
            <Users className="w-3 h-3" />
            {topic.keyFigures.length} {lang === 'ru' ? 'деятелей' : 'figures'}
          </span>
          <span className="px-2 py-0.5 text-[11px] font-semibold rounded-md bg-amber-50 text-amber-800 border border-amber-100 flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {topic.timelineEvents.length} {lang === 'ru' ? 'дат' : 'events'}
          </span>
          <span className="px-2 py-0.5 text-[11px] font-semibold rounded-md bg-purple-50 text-purple-700 border border-purple-100 flex items-center gap-1">
            <BookMarked className="w-3 h-3" />
            {topic.terms.length} {lang === 'ru' ? 'терминов' : 'terms'}
          </span>
          {topic.videoLectures && topic.videoLectures.length > 0 && (
            <span className="px-2 py-0.5 text-[11px] font-semibold rounded-md bg-rose-50 text-rose-700 border border-rose-100 flex items-center gap-1">
              <Play className="w-2.5 h-2.5 fill-rose-600 text-rose-600" />
              {topic.videoLectures.length} {lang === 'ru' ? 'видео' : 'videos'}
            </span>
          )}
        </div>
      </div>

      {/* Footer info & CTA */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
        <div className="flex items-center space-x-2 text-xs text-slate-500">
          {quizScore ? (
            <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              <Award className="w-3.5 h-3.5" />
              {quizScore.score}/{quizScore.total} ({Math.round((quizScore.score / quizScore.total) * 100)}%)
            </span>
          ) : (
            <span className="text-slate-400 font-medium">
              {topic.quizQuestions.length} {lang === 'ru' ? 'вопросов' : 'quiz items'}
            </span>
          )}
        </div>

        <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0039A6] group-hover:translate-x-0.5 transition-transform">
          {lang === 'ru' ? 'Изучить тему' : 'Study topic'}
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
};
