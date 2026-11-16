import React, { useState } from 'react';
import { HistoryTopic, SupportedLang } from '../../types';
import { HistoryDeepAnalysisView } from './HistoryDeepAnalysisView';
import { HistoryYoutubeSection } from './HistoryYoutubeSection';
import {
  ArrowLeft,
  Bookmark,
  CheckCircle2,
  BookOpen,
  Users,
  Clock,
  BookMarked,
  Target,
  Award,
  Sparkles,
  HelpCircle,
  RotateCcw,
  Calendar,
  Quote,
  Youtube,
} from 'lucide-react';

interface HistoryTopicDetailProps {
  topic: HistoryTopic;
  lang: SupportedLang;
  audioSpeed: number;
  isStudied: boolean;
  isFavorite: boolean;
  quizScore?: { score: number; total: number; passedAt: string };
  onBack: () => void;
  onToggleStudied: (topicId: string) => void;
  onToggleFavorite: (topicId: string) => void;
  onRecordQuiz: (topicId: string, topicTitleRu: string, topicTitleEn: string, score: number, total: number) => void;
}

export const HistoryTopicDetail: React.FC<HistoryTopicDetailProps> = ({
  topic,
  lang,
  isStudied,
  isFavorite,
  quizScore,
  onBack,
  onToggleStudied,
  onToggleFavorite,
  onRecordQuiz,
}) => {
  const [activeTab, setActiveTab] = useState<'text' | 'analysis' | 'video' | 'figures' | 'timeline' | 'terms' | 'exam' | 'quiz'>('text');

  // Interactive Quiz State
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  const questions = topic.quizQuestions || [];

  const handleSelectAnswer = (option: string) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIdx]: option,
    }));
  };

  const handleQuizSubmit = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        score++;
      }
    });
    setQuizSubmitted(true);
    setShowResults(true);
    onRecordQuiz(topic.id, topic.titleRu, topic.titleEn, score, questions.length);
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setShowResults(false);
    setCurrentQuestionIdx(0);
  };

  const scoreCount = questions.reduce((acc, q, idx) => {
    return acc + (selectedAnswers[idx] === q.correctAnswer ? 1 : 0);
  }, 0);

  return (
    <div className="space-y-6 animate-fadeIn pb-16">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center justify-between gap-4">
        <button
          id="history-detail-back-btn"
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-sm font-bold text-slate-600 hover:text-[#0039A6] transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>{lang === 'ru' ? 'Назад к темам истории' : 'Back to History Topics'}</span>
        </button>

        <div className="flex items-center space-x-2">
          <button
            id={`detail-fav-btn-${topic.id}`}
            onClick={() => onToggleFavorite(topic.id)}
            className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
              isFavorite
                ? 'bg-amber-50 text-amber-800 border-amber-200 shadow-2xs'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-amber-500 text-amber-500' : ''}`} />
            <span className="hidden sm:inline">
              {isFavorite ? (lang === 'ru' ? 'В закладках' : 'Bookmarked') : (lang === 'ru' ? 'В закладки' : 'Bookmark')}
            </span>
          </button>

          <button
            id={`detail-study-btn-${topic.id}`}
            onClick={() => onToggleStudied(topic.id)}
            className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl border text-xs font-bold transition-all ${
              isStudied
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300 shadow-2xs'
                : 'bg-[#0039A6] text-white border-transparent hover:bg-blue-800 shadow-xs'
            }`}
          >
            <CheckCircle2 className={`w-4 h-4 ${isStudied ? 'fill-emerald-200' : ''}`} />
            <span>
              {isStudied ? (lang === 'ru' ? 'Тема изучена' : 'Studied') : (lang === 'ru' ? 'Отметить как изученную' : 'Mark Studied')}
            </span>
          </button>
        </div>
      </div>

      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 w-72 h-72 bg-gradient-to-br from-blue-100/40 to-amber-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-lg text-xs font-bold bg-blue-50 text-[#0039A6] border border-blue-100 flex items-center gap-1.5">
              <span>{topic.icon}</span>
              <span>{topic.grade} {lang === 'ru' ? 'класс' : 'Grade'}</span>
            </span>
            <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>{lang === 'ru' ? topic.periodRu : topic.periodEn}</span>
            </span>
            {quizScore && (
              <span className="px-3 py-1 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                <span>{lang === 'ru' ? 'Тест сдан' : 'Quiz passed'}: {quizScore.score}/{quizScore.total}</span>
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-2">
            {lang === 'ru' ? topic.titleRu : topic.titleEn}
          </h1>

          <p className="text-sm sm:text-base font-semibold text-slate-600 mb-4">
            {lang === 'ru' ? topic.subtitleRu : topic.subtitleEn}
          </p>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
            {lang === 'ru' ? topic.overviewRu : topic.overviewEn}
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center space-x-2 border-b border-slate-200 pb-2 overflow-x-auto scrollbar-none">
        <button
          id="tab-btn-text"
          onClick={() => setActiveTab('text')}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'text'
              ? 'bg-[#0039A6] text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>{lang === 'ru' ? '1. Учебник и очерк' : '1. Textbook Narrative'}</span>
        </button>

        <button
          id="tab-btn-analysis"
          onClick={() => setActiveTab('analysis')}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'analysis'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'text-amber-800 bg-amber-50/70 hover:bg-amber-100/80 font-bold border border-amber-200/60'
          }`}
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>{lang === 'ru' ? '2. Глубокий разбор темы' : '2. Deep Analysis'}</span>
        </button>

        <button
          id="tab-btn-video"
          onClick={() => setActiveTab('video')}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'video'
              ? 'bg-red-600 text-white shadow-xs'
              : 'text-red-700 bg-red-50/70 hover:bg-red-100/80 font-bold border border-red-200/60'
          }`}
        >
          <Youtube className="w-4 h-4 text-red-500" />
          <span>{lang === 'ru' ? '3. Видеолекции YouTube' : '3. Video Lectures'}</span>
          <span className="px-1.5 py-0.5 rounded-md bg-white/20 text-xs font-semibold">
            {topic.videoLectures?.length || 2}
          </span>
        </button>

        <button
          id="tab-btn-figures"
          onClick={() => setActiveTab('figures')}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'figures'
              ? 'bg-[#0039A6] text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>
            {lang === 'ru' ? '4. Личности' : '4. Key Figures'} ({topic.keyFigures.length})
          </span>
        </button>

        <button
          id="tab-btn-timeline"
          onClick={() => setActiveTab('timeline')}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'timeline'
              ? 'bg-[#0039A6] text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>
            {lang === 'ru' ? '5. Хронология' : '5. Timeline'} ({topic.timelineEvents.length})
          </span>
        </button>

        <button
          id="tab-btn-terms"
          onClick={() => setActiveTab('terms')}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'terms'
              ? 'bg-[#0039A6] text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <BookMarked className="w-4 h-4" />
          <span>
            {lang === 'ru' ? '6. Словарь понятий' : '6. Terms'} ({topic.terms.length})
          </span>
        </button>

        <button
          id="tab-btn-exam"
          onClick={() => setActiveTab('exam')}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'exam'
              ? 'bg-[#0039A6] text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
          }`}
        >
          <Target className="w-4 h-4" />
          <span>{lang === 'ru' ? '7. ОГЭ / ЕГЭ (Фокус)' : '7. Exam Prep'}</span>
        </button>

        <button
          id="tab-btn-quiz"
          onClick={() => setActiveTab('quiz')}
          className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
            activeTab === 'quiz'
              ? 'bg-amber-600 text-white shadow-xs'
              : 'text-amber-700 bg-amber-50 hover:bg-amber-100 font-bold'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>
            {lang === 'ru' ? '8. Тест по теме' : '8. Topic Quiz'} ({questions.length})
          </span>
        </button>
      </div>

      {/* Tab: YouTube Video Lectures */}
      {activeTab === 'video' && (
        <HistoryYoutubeSection topic={topic} lang={lang} />
      )}

      {/* Tab 2: Deep Historical Analysis (Causes, Historiography, Documents, Geography) */}
      {activeTab === 'analysis' && (
        <HistoryDeepAnalysisView topic={topic} lang={lang} />
      )}

      {/* Tab 1: Textbook Narrative */}
      {activeTab === 'text' && (
        <div className="space-y-6">
          {topic.sections.map((sec, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4"
            >
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-blue-50 text-[#0039A6] flex items-center justify-center font-black text-sm">
                  {idx + 1}
                </span>
                <span>{lang === 'ru' ? sec.headingRu : sec.headingEn}</span>
              </h2>

              <div className="text-slate-700 leading-relaxed text-sm sm:text-base space-y-4 whitespace-pre-line font-normal">
                {lang === 'ru' ? sec.contentRu : sec.contentEn}
              </div>

              {sec.bulletsRu && (
                <ul className="space-y-2 pt-2">
                  {(lang === 'ru' ? sec.bulletsRu : sec.bulletsEn || sec.bulletsRu).map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0039A6] mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Key Historical Figures */}
      {activeTab === 'figures' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topic.keyFigures.map((figure) => (
            <div
              key={figure.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-blue-300 transition-colors"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-2xl flex items-center justify-center shrink-0">
                      {figure.avatar}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                        {lang === 'ru' ? figure.nameRu : figure.nameEn}
                      </h3>
                      <p className="text-xs font-bold text-slate-500">
                        {figure.dates}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-3 px-3 py-1.5 rounded-xl bg-blue-50/70 border border-blue-100 text-xs font-semibold text-[#0039A6]">
                  {lang === 'ru' ? figure.roleRu : figure.roleEn}
                </div>

                <div className="space-y-2 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    {lang === 'ru' ? 'Главные свершения:' : 'Key Deeds:'}
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                    {(lang === 'ru' ? figure.keyActionsRu : figure.keyActionsEn || figure.keyActionsRu).map((action, aIdx) => (
                      <li key={aIdx} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 bg-slate-50/50 p-3 rounded-xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                  {lang === 'ru' ? 'Историческое наследие:' : 'Historical Legacy:'}
                </span>
                <p className="text-xs text-slate-700 font-medium italic">
                  {lang === 'ru' ? figure.legacyRu : figure.legacyEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Chronological Timeline */}
      {activeTab === 'timeline' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#0039A6]" />
            <span>{lang === 'ru' ? 'Лента решающих исторических событий' : 'Chronology of Decisive Events'}</span>
          </h2>

          <div className="relative border-l-2 border-blue-200 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
            {topic.timelineEvents.map((evt, idx) => (
              <div key={idx} className="relative group">
                {/* Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-[#0039A6] border-4 border-white shadow-xs group-hover:scale-125 transition-transform" />

                <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200 hover:border-blue-300 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-blue-100 text-[#0039A6] font-black text-xs">
                      {lang === 'ru' ? evt.dateRu : evt.dateEn}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {evt.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white border border-slate-200 text-slate-600">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1.5">
                    {lang === 'ru' ? evt.titleRu : evt.titleEn}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
                    {lang === 'ru' ? evt.descriptionRu : evt.descriptionEn}
                  </p>

                  <div className="bg-white p-3 rounded-xl border border-slate-200/70 text-xs text-slate-600">
                    <span className="font-bold text-[#0039A6]">
                      {lang === 'ru' ? 'Историческое значение: ' : 'Historical Significance: '}
                    </span>
                    <span>{lang === 'ru' ? evt.significanceRu : evt.significanceEn || evt.significanceRu}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Historical Terms */}
      {activeTab === 'terms' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topic.terms.map((term, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <BookMarked className="w-5 h-5 text-[#0039A6]" />
                  <h3 className="text-lg font-black text-slate-900">
                    {lang === 'ru' ? term.termRu : term.termEn}
                  </h3>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed mb-3">
                  <span className="font-bold text-slate-900 block mb-1">
                    {lang === 'ru' ? 'Определение:' : 'Definition:'}
                  </span>
                  {lang === 'ru' ? term.definitionRu : term.definitionEn}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  <span className="font-bold text-slate-700">
                    {lang === 'ru' ? 'Исторический контекст: ' : 'Context: '}
                  </span>
                  {lang === 'ru' ? term.historicalContextRu : term.historicalContextEn}
                </p>
              </div>

              {term.examTipRu && (
                <div className="pt-3 border-t border-amber-100 bg-amber-50/70 p-3 rounded-xl text-xs text-amber-900 font-medium">
                  <span className="font-bold text-amber-800">🎯 {lang === 'ru' ? 'Для экзамена (ОГЭ/ЕГЭ): ' : 'Exam Tip: '}</span>
                  {term.examTipRu}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Tab 5: Exam Focus */}
      {activeTab === 'exam' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold mb-3">
              <Target className="w-4 h-4 text-amber-400" />
              <span>{lang === 'ru' ? 'Экзаменационный фокус' : 'State Exam Target'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black mb-2">
              {topic.examFocusRu.examTarget}
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
              {lang === 'ru'
                ? 'Ключевые тезисы, причинно-следственные связи и темы исторических сочинений / развёрнутых ответов второй части экзамена.'
                : 'Core takeaways, cause-and-effect patterns, and high-yield essay prompts for state examinations.'}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>{lang === 'ru' ? 'Главные выводы для успешного ответа:' : 'Core Examination Takeaways:'}</span>
            </h3>

            <div className="space-y-3">
              {(lang === 'ru' ? topic.examFocusRu.coreTakeaways : topic.examFocusEn.coreTakeaways).map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="w-6 h-6 rounded-lg bg-blue-100 text-[#0039A6] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <Quote className="w-5 h-5 text-purple-600" />
              <span>{lang === 'ru' ? 'Темы проблемно-дискуссионных сочинений и вопросов:' : 'Analytical Essay Prompts:'}</span>
            </h3>

            <div className="space-y-3">
              {(lang === 'ru' ? topic.examFocusRu.essayPrompts : topic.examFocusEn.essayPrompts).map((prompt, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 text-xs sm:text-sm font-semibold text-purple-950">
                  «{prompt}»
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 6: Interactive Topic Quiz */}
      {activeTab === 'quiz' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          {!quizSubmitted ? (
            <div className="max-w-2xl mx-auto space-y-6">
              {/* Question count & progress */}
              <div className="flex items-center justify-between text-xs text-slate-500 font-bold border-b border-slate-100 pb-3">
                <span>
                  {lang === 'ru' ? 'Вопрос' : 'Question'} {currentQuestionIdx + 1} / {questions.length}
                </span>
                <span>
                  {Math.round(((currentQuestionIdx + 1) / questions.length) * 100)}%
                </span>
              </div>

              {/* Current Question */}
              {questions[currentQuestionIdx] && (
                <div className="space-y-5">
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                    {lang === 'ru'
                      ? questions[currentQuestionIdx].questionRu
                      : questions[currentQuestionIdx].questionEn}
                  </h3>

                  <div className="space-y-2.5">
                    {questions[currentQuestionIdx].options?.map((opt, optIdx) => {
                      const isSelected = selectedAnswers[currentQuestionIdx] === opt;
                      return (
                        <button
                          key={optIdx}
                          id={`opt-btn-${currentQuestionIdx}-${optIdx}`}
                          onClick={() => handleSelectAnswer(opt)}
                          className={`w-full text-left p-4 rounded-2xl border text-sm font-medium transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'bg-blue-50 border-[#0039A6] text-[#0039A6] font-bold shadow-xs'
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                          }`}
                        >
                          <span>{opt}</span>
                          <span
                            className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs ${
                              isSelected
                                ? 'border-[#0039A6] bg-[#0039A6] text-white'
                                : 'border-slate-300'
                            }`}
                          >
                            {isSelected && '✓'}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Navigation between questions */}
                  <div className="flex items-center justify-between pt-4">
                    <button
                      onClick={() => setCurrentQuestionIdx((p) => Math.max(0, p - 1))}
                      disabled={currentQuestionIdx === 0}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      {lang === 'ru' ? '← Назад' : '← Previous'}
                    </button>

                    {currentQuestionIdx < questions.length - 1 ? (
                      <button
                        onClick={() => setCurrentQuestionIdx((p) => Math.min(questions.length - 1, p + 1))}
                        className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#0039A6] hover:bg-blue-800 shadow-xs"
                      >
                        {lang === 'ru' ? 'Далее →' : 'Next →'}
                      </button>
                    ) : (
                      <button
                        id="submit-quiz-btn"
                        onClick={handleQuizSubmit}
                        disabled={Object.keys(selectedAnswers).length === 0}
                        className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>{lang === 'ru' ? 'Завершить тест' : 'Submit Quiz'}</span>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Results View */
            <div className="max-w-2xl mx-auto text-center space-y-6 py-4">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 text-3xl font-black mx-auto flex items-center justify-center shadow-xs">
                🏆
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  {lang === 'ru' ? 'Тест успешно завершён!' : 'Quiz Completed!'}
                </h3>
                <p className="text-sm font-semibold text-slate-600">
                  {lang === 'ru' ? 'Ваш результат:' : 'Your Score:'}{' '}
                  <span className="text-[#0039A6] font-black text-lg">
                    {scoreCount} / {questions.length}
                  </span>{' '}
                  ({Math.round((scoreCount / questions.length) * 100)}%)
                </p>
              </div>

              {/* Review questions with explanations */}
              <div className="text-left space-y-4 pt-4 border-t border-slate-100">
                <h4 className="text-sm font-black text-slate-800 uppercase tracking-wider">
                  {lang === 'ru' ? 'Разбор вопросов:' : 'Question Review:'}
                </h4>
                {questions.map((q, qIdx) => {
                  const userAns = selectedAnswers[qIdx];
                  const isCorrect = userAns === q.correctAnswer;
                  return (
                    <div
                      key={qIdx}
                      className={`p-4 rounded-2xl border ${
                        isCorrect ? 'bg-emerald-50/50 border-emerald-200' : 'bg-rose-50/50 border-rose-200'
                      }`}
                    >
                      <p className="text-xs font-black text-slate-900 mb-1.5">
                        {qIdx + 1}. {lang === 'ru' ? q.questionRu : q.questionEn}
                      </p>
                      <p className="text-xs mb-1 text-slate-700">
                        <span className="font-bold">{lang === 'ru' ? 'Ваш ответ: ' : 'Your Answer: '}</span>
                        <span className={isCorrect ? 'text-emerald-700 font-bold' : 'text-rose-600 font-bold'}>
                          {userAns || (lang === 'ru' ? 'Не отвечено' : 'Unanswered')}
                        </span>
                      </p>
                      {!isCorrect && (
                        <p className="text-xs text-slate-700 mb-1">
                          <span className="font-bold text-emerald-700">
                            {lang === 'ru' ? 'Правильный ответ: ' : 'Correct Answer: '}
                          </span>
                          <span className="font-bold text-emerald-800">{q.correctAnswer}</span>
                        </p>
                      )}
                      <p className="text-xs text-slate-600 italic bg-white p-2.5 rounded-xl border border-slate-200/80 mt-2">
                        💡 {lang === 'ru' ? q.explanationRu : q.explanationEn}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-center gap-3 pt-4">
                <button
                  onClick={handleResetQuiz}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{lang === 'ru' ? 'Пройти снова' : 'Retake Quiz'}</span>
                </button>
                <button
                  onClick={onBack}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0039A6] hover:bg-blue-800"
                >
                  <span>{lang === 'ru' ? 'К списку тем' : 'Back to Topics'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
