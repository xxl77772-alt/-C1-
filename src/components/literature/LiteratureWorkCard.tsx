import React from 'react';
import { LiteraryWork, SupportedLang } from '../../types';
import { BookOpen, CheckCircle2, Bookmark, Award, Feather, ArrowRight, Youtube } from 'lucide-react';

interface LiteratureWorkCardProps {
  work: LiteraryWork;
  lang: SupportedLang;
  isStudied: boolean;
  isFavorite: boolean;
  quizScore?: { score: number; total: number };
  onSelect: (work: LiteraryWork) => void;
  onToggleStudied: (workId: string) => void;
  onToggleFavorite: (workId: string) => void;
}

export const LiteratureWorkCard: React.FC<LiteratureWorkCardProps> = ({
  work,
  lang,
  isStudied,
  isFavorite,
  quizScore,
  onSelect,
  onToggleStudied,
  onToggleFavorite,
}) => {
  return (
    <div
      id={`work-card-${work.id}`}
      className={`group relative bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md ${
        isStudied
          ? 'border-emerald-200 ring-1 ring-emerald-100'
          : 'border-slate-200 hover:border-blue-300'
      }`}
    >
      {/* Top accent bar */}
      <div
        className={`h-1.5 w-full ${
          work.grade >= 10
            ? 'bg-gradient-to-r from-amber-500 to-rose-500'
            : work.grade >= 8
            ? 'bg-gradient-to-r from-blue-600 to-indigo-600'
            : 'bg-gradient-to-r from-emerald-500 to-teal-500'
        }`}
      />

      <div className="p-5 flex-1 flex flex-col">
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center space-x-2 flex-wrap gap-y-1">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide bg-slate-100 text-slate-700 border border-slate-200">
              {work.grade} {lang === 'ru' ? 'класс' : 'grade'}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-100">
              {lang === 'ru' ? work.genreRu : work.genreEn}
            </span>
            {work.youtubeReviews && work.youtubeReviews.length > 0 && (
              <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-red-50 text-red-700 border border-red-200">
                <Youtube className="w-3 h-3 text-red-600" />
                <span>{work.youtubeReviews.length}</span>
              </span>
            )}
          </div>

          <div className="flex items-center space-x-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(work.id);
              }}
              className={`p-1.5 rounded-lg transition-colors ${
                isFavorite
                  ? 'text-rose-500 bg-rose-50 hover:bg-rose-100'
                  : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
              }`}
              title={lang === 'ru' ? 'Добавить в список для чтения' : 'Bookmark for reading'}
              aria-label="Bookmark"
            >
              <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-rose-500' : ''}`} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleStudied(work.id);
              }}
              className={`p-1.5 rounded-lg transition-colors ${
                isStudied
                  ? 'text-emerald-600 bg-emerald-50 hover:bg-emerald-100'
                  : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
              }`}
              title={lang === 'ru' ? 'Отметить как изученное (+25 XP)' : 'Mark as studied (+25 XP)'}
              aria-label="Mark studied"
            >
              <CheckCircle2 className={`w-4 h-4 ${isStudied ? 'fill-emerald-100 text-emerald-600' : ''}`} />
            </button>
          </div>
        </div>

        {/* Title and Author */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-[#0039A6] transition-colors">
            {lang === 'ru' ? work.titleRu : work.titleEn}
          </h3>
          <div className="flex items-center space-x-2 mt-1.5 text-xs text-slate-600">
            <span className="text-base">{work.authorAvatar}</span>
            <span className="font-semibold text-slate-800">{lang === 'ru' ? work.authorRu : work.authorEn}</span>
            <span className="text-slate-400">({work.yearCreated})</span>
          </div>
        </div>

        {/* Movement / Direction */}
        <div className="mb-3 flex items-center space-x-1.5 text-xs font-medium text-slate-500">
          <Feather className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
          <span>{lang === 'ru' ? work.movementRu : work.movementEn}</span>
        </div>

        {/* Brief Summary */}
        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4 flex-1">
          {lang === 'ru' ? work.briefSummaryRu : work.briefSummaryEn}
        </p>

        {/* Exam Tag / Features Pill */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="truncate max-w-[170px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
            🎯 {work.examFocusRu.targetExams}
          </span>
          {quizScore && (
            <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded flex items-center space-x-1">
              <Award className="w-3 h-3 text-emerald-600" />
              <span>{quizScore.score}/{quizScore.total}</span>
            </span>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-5 py-3 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-500 font-medium">
          {work.characters.length} {lang === 'ru' ? 'героев' : 'characters'} • {work.excerpts.length} {lang === 'ru' ? 'отрывка' : 'excerpts'}
        </span>
        <button
          onClick={() => onSelect(work)}
          className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0039A6] hover:text-blue-800 transition-colors cursor-pointer"
        >
          <span>{lang === 'ru' ? 'Изучить подробно' : 'Read & Analyze'}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
};
