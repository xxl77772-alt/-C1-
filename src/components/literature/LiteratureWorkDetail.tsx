import React, { useState } from 'react';
import { LiteraryWork, SupportedLang } from '../../types';
import {
  ArrowLeft,
  BookOpen,
  Users,
  Quote,
  Sparkles,
  Award,
  Volume2,
  VolumeX,
  CheckCircle2,
  Bookmark,
  FileText,
  Target,
  HelpCircle,
  Clock,
  Feather,
  Info,
  Youtube,
  Tv,
} from 'lucide-react';
import { LiteratureYoutubeSection } from './LiteratureYoutubeSection';
import { LiteratureDeepAnalysisView } from './LiteratureDeepAnalysisView';

interface LiteratureWorkDetailProps {
  work: LiteraryWork;
  lang: SupportedLang;
  audioSpeed: number;
  isStudied: boolean;
  isFavorite: boolean;
  quizScore?: { score: number; total: number };
  watchedVideos?: string[];
  onBack: () => void;
  onToggleStudied: (workId: string) => void;
  onToggleFavorite: (workId: string) => void;
  onRecordQuiz: (workId: string, workTitleRu: string, workTitleEn: string, score: number, total: number) => void;
  onRecordVideoWatched?: (videoId: string) => void;
}

export const LiteratureWorkDetail: React.FC<LiteratureWorkDetailProps> = ({
  work,
  lang,
  audioSpeed,
  isStudied,
  isFavorite,
  quizScore,
  watchedVideos = [],
  onBack,
  onToggleStudied,
  onToggleFavorite,
  onRecordQuiz,
  onRecordVideoWatched = () => {},
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'plot' | 'analysis' | 'reviews' | 'characters' | 'excerpts' | 'terms' | 'exam' | 'quiz'>('plot');
  const [playingExcerptId, setPlayingExcerptId] = useState<string | null>(null);

  // Quiz State
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Web Speech API for reciting classical excerpts
  const handlePlayExcerpt = (excerptId: string, text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert(lang === 'ru' ? 'Синтез речи не поддерживается браузером' : 'Speech synthesis not supported by this browser');
      return;
    }

    if (playingExcerptId === excerptId) {
      window.speechSynthesis.cancel();
      setPlayingExcerptId(null);
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ru-RU';
    utterance.rate = audioSpeed || 1.0;

    utterance.onend = () => {
      setPlayingExcerptId(null);
    };
    utterance.onerror = () => {
      setPlayingExcerptId(null);
    };

    setPlayingExcerptId(excerptId);
    window.speechSynthesis.speak(utterance);
  };

  const handleStopSpeech = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setPlayingExcerptId(null);
    }
  };

  const handleSelectOption = (option: string) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(option);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);
    const q = work.quizQuestions[currentQuizIndex];
    if (selectedAnswer === q.correctAnswer) {
      setUserScore((prev) => prev + 1);
    }
  };

  const handleNextQuizQuestion = () => {
    if (currentQuizIndex + 1 < work.quizQuestions.length) {
      setCurrentQuizIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
      const finalScore = userScore + (selectedAnswer === work.quizQuestions[currentQuizIndex].correctAnswer ? 0 : 0);
      onRecordQuiz(work.id, work.titleRu, work.titleEn, finalScore, work.quizQuestions.length);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuizIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setUserScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Back and Utility Bar */}
      <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-200">
        <button
          onClick={() => {
            handleStopSpeech();
            onBack();
          }}
          className="inline-flex items-center space-x-2 text-sm font-bold text-slate-600 hover:text-[#0039A6] bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs transition-all hover:border-blue-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === 'ru' ? 'Назад к программе литературы' : 'Back to literature curriculum'}</span>
        </button>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => onToggleFavorite(work.id)}
            className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-colors ${
              isFavorite
                ? 'bg-rose-50 text-rose-600 border-rose-200 hover:bg-rose-100'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-rose-500' : ''}`} />
            <span>{isFavorite ? (lang === 'ru' ? 'В списке чтения' : 'In reading list') : (lang === 'ru' ? 'В закладки' : 'Bookmark')}</span>
          </button>

          <button
            onClick={() => onToggleStudied(work.id)}
            className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold border transition-colors ${
              isStudied
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                : 'bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isStudied ? (lang === 'ru' ? 'Изучено (+25 XP)' : 'Studied (+25 XP)') : (lang === 'ru' ? 'Отметить изученным' : 'Mark as studied')}</span>
          </button>
        </div>
      </div>

      {/* Hero Work Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 text-9xl opacity-5 select-none pointer-events-none">
          {work.authorAvatar}
        </div>

        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center space-x-2.5 mb-3 flex-wrap gap-y-1">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#0039A6] text-white shadow-2xs">
              {work.grade} {lang === 'ru' ? 'класс' : 'grade'}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
              {lang === 'ru' ? work.genreRu : work.genreEn}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
              {lang === 'ru' ? work.movementRu : work.movementEn}
            </span>
            <span className="px-2.5 py-1 text-xs text-slate-500 font-medium">
              📅 {work.yearCreated}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-2">
            {lang === 'ru' ? work.titleRu : work.titleEn}
          </h1>

          <div className="flex items-center space-x-3 text-slate-700 font-medium text-sm sm:text-base mb-4">
            <span className="text-2xl">{work.authorAvatar}</span>
            <span className="font-bold text-slate-900">{lang === 'ru' ? work.authorRu : work.authorEn}</span>
            <span className="text-slate-400 text-xs sm:text-sm">({work.authorDates})</span>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {lang === 'ru' ? work.briefSummaryRu : work.briefSummaryEn}
          </p>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center space-x-1.5 sm:space-x-2 overflow-x-auto pb-2 border-b border-slate-200 scrollbar-none">
        {[
          { id: 'plot', labelRu: 'Сюжет и темы', labelEn: 'Plot & Themes', icon: BookOpen },
          { id: 'analysis', labelRu: 'Глубокий разбор темы', labelEn: 'Deep Analysis', icon: Sparkles },
          { id: 'reviews', labelRu: 'YouTube-разборы', labelEn: 'YouTube Reviews', icon: Youtube, count: work.youtubeReviews?.length },
          { id: 'characters', labelRu: 'Главные герои', labelEn: 'Characters', icon: Users },
          { id: 'excerpts', labelRu: 'Золотые отрывки и аудио', labelEn: 'Excerpts & Audio', icon: Quote },
          { id: 'terms', labelRu: 'Теория литературы', labelEn: 'Literary Terms', icon: Feather },
          { id: 'exam', labelRu: 'ОГЭ / ЕГЭ & Сочинение', labelEn: 'Exam & Essays', icon: Target },
          { id: 'quiz', labelRu: 'Тест на знание текста', labelEn: 'Knowledge Quiz', icon: HelpCircle },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          const isYoutubeTab = tab.id === 'reviews';
          const isAnalysisTab = tab.id === 'analysis';
          return (
            <button
              key={tab.id}
              onClick={() => {
                handleStopSpeech();
                setActiveSubTab(tab.id as any);
              }}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                isActive
                  ? isYoutubeTab
                    ? 'bg-red-600 text-white shadow-sm shadow-red-600/20'
                    : isAnalysisTab
                    ? 'bg-amber-600 text-white shadow-sm shadow-amber-600/20'
                    : 'bg-[#0039A6] text-white shadow-sm'
                  : isYoutubeTab
                  ? 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200'
                  : isAnalysisTab
                  ? 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
              }`}
            >
              <Icon
                className={`w-4 h-4 shrink-0 ${
                  isActive
                    ? 'text-white'
                    : isYoutubeTab
                    ? 'text-red-600'
                    : isAnalysisTab
                    ? 'text-amber-600'
                    : 'text-slate-500'
                }`}
              />
              <span>{lang === 'ru' ? tab.labelRu : tab.labelEn}</span>
              {tab.count !== undefined && tab.count > 0 && (
                <span className={`px-1.5 py-0.2 text-[11px] rounded-full font-black ${
                  isActive ? 'bg-white/20 text-white' : 'bg-red-200 text-red-900'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab: Deep Academic Analysis */}
      {activeSubTab === 'analysis' && (
        <LiteratureDeepAnalysisView work={work} lang={lang} />
      )}

      {/* Tab 1: Plot & Themes */}
      {activeSubTab === 'plot' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-[#0039A6]" />
              <span>{lang === 'ru' ? 'Развёрнутое содержание и композиция' : 'Plot Architecture & Summary'}</span>
            </h2>
            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-4">
              <p>{lang === 'ru' ? work.detailedPlotRu : work.detailedPlotEn}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>{lang === 'ru' ? 'Ключевые проблематики и вечные темы' : 'Central Themes & Motifs'}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(lang === 'ru' ? work.centralThemesRu : (work.centralThemesEn || work.centralThemesRu)).map((theme, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#0039A6]" />
                    <span>{theme.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{theme.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Characters */}
      {activeSubTab === 'characters' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {work.characters.map((char, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {lang === 'ru' ? char.nameRu : char.nameEn}
                      </h3>
                      <span className="inline-block mt-0.5 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                        {lang === 'ru' ? char.roleRu : char.roleEn}
                      </span>
                    </div>
                    <span className="text-2xl">👤</span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {lang === 'ru' ? char.descriptionRu : char.descriptionEn}
                  </p>
                </div>

                {char.quoteRu && (
                  <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs italic text-amber-950 font-serif">
                    <div className="flex items-center space-x-1.5 font-sans font-bold text-[11px] uppercase tracking-wider text-amber-700 not-italic mb-1">
                      <Quote className="w-3 h-3" />
                      <span>{lang === 'ru' ? 'Характерная цитата' : 'Key Quote'}</span>
                    </div>
                    «{char.quoteRu}»
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Excerpts with Recitation Audio */}
      {activeSubTab === 'excerpts' && (
        <div className="space-y-6">
          <div className="p-4 bg-blue-50 rounded-2xl border border-blue-200 flex items-center justify-between flex-wrap gap-3 text-xs sm:text-sm text-blue-900">
            <div className="flex items-center space-x-2">
              <Volume2 className="w-5 h-5 text-[#0039A6] shrink-0" />
              <span>
                {lang === 'ru'
                  ? 'Хрестоматийные отрывки озвучиваются с помощью речевого синтезатора (скорость регулируется в верхней панели).'
                  : 'Classic excerpts can be recited aloud via speech synthesis (rate adjustable in the top navigation).'}
              </span>
            </div>
            {playingExcerptId && (
              <button
                onClick={handleStopSpeech}
                className="px-3 py-1 bg-red-600 text-white rounded-lg font-bold text-xs flex items-center space-x-1 hover:bg-red-700"
              >
                <VolumeX className="w-3.5 h-3.5" />
                <span>{lang === 'ru' ? 'Остановить чтение' : 'Stop Recitation'}</span>
              </button>
            )}
          </div>

          <div className="space-y-6">
            {work.excerpts.map((excerpt) => {
              const isPlaying = playingExcerptId === excerpt.id;
              return (
                <div
                  key={excerpt.id}
                  className={`bg-white rounded-2xl p-6 sm:p-8 border transition-all ${
                    isPlaying ? 'border-blue-500 ring-2 ring-blue-100 shadow-md' : 'border-slate-200 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {lang === 'ru' ? excerpt.titleRu : excerpt.titleEn}
                      </h3>
                      {excerpt.poeticFormRu && (
                        <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">
                          {excerpt.poeticFormRu}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => handlePlayExcerpt(excerpt.id, excerpt.textRu)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                        isPlaying
                          ? 'bg-rose-600 text-white hover:bg-rose-700'
                          : 'bg-[#0039A6] text-white hover:bg-blue-800'
                      }`}
                    >
                      {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      <span>{isPlaying ? (lang === 'ru' ? 'Пауза' : 'Pause') : (lang === 'ru' ? 'Слушать чтение' : 'Listen')}</span>
                    </button>
                  </div>

                  {/* Poetic / Prose Text Container */}
                  <div className="p-6 bg-slate-50/80 rounded-2xl border border-slate-200 text-slate-900 font-serif leading-relaxed text-sm sm:text-base whitespace-pre-line mb-4 shadow-inner">
                    {excerpt.textRu}
                  </div>

                  {/* English Translation if requested */}
                  {lang === 'en' && (
                    <div className="p-4 bg-slate-100/60 rounded-xl border border-slate-200 text-slate-700 text-xs sm:text-sm whitespace-pre-line mb-4 italic">
                      <div className="font-sans font-bold text-[11px] uppercase tracking-wider text-slate-500 mb-1">
                        English Translation:
                      </div>
                      {excerpt.textEn}
                    </div>
                  )}

                  {/* Context and Analysis */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-3 border-t border-slate-100 text-xs">
                    <div className="p-3 bg-slate-50 rounded-xl">
                      <span className="font-bold text-slate-700 block mb-1">
                        📌 {lang === 'ru' ? 'Контекст в произведении:' : 'Context in Work:'}
                      </span>
                      <span className="text-slate-600">{lang === 'ru' ? excerpt.contextRu : excerpt.contextEn}</span>
                    </div>
                    <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100/60">
                      <span className="font-bold text-blue-900 block mb-1">
                        🔍 {lang === 'ru' ? 'Литературный анализ и выразительность:' : 'Literary Analysis:'}
                      </span>
                      <span className="text-blue-950">{lang === 'ru' ? excerpt.analysisRu : excerpt.analysisEn}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 4: Literary Terms */}
      {activeSubTab === 'terms' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {work.literaryTerms.map((term, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    {lang === 'ru' ? term.termRu : term.termEn}
                  </h3>
                  <span className="text-xs px-2 py-0.5 bg-slate-100 rounded text-slate-600 font-mono">
                    {lang === 'ru' ? term.termEn : term.termRu}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  {lang === 'ru' ? term.definitionRu : term.definitionEn}
                </p>
                <div className="p-3 bg-indigo-50/70 rounded-xl border border-indigo-100 text-xs text-indigo-950">
                  <span className="font-bold text-indigo-900 block mb-0.5">
                    💡 {lang === 'ru' ? 'Пример в данном произведении:' : 'Example in this work:'}
                  </span>
                  <span>{lang === 'ru' ? term.exampleInWorkRu : term.exampleInWorkEn}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Exam & Essays */}
      {activeSubTab === 'exam' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="flex items-center space-x-3 mb-4">
              <Target className="w-6 h-6 text-rose-600" />
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  {lang === 'ru' ? 'Место в ОГЭ, ЕГЭ и Итоговом сочинении' : 'State Exam Relevance (OGE / EGE)'}
                </h2>
                <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                  {work.examFocusRu.targetExams}
                </span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 mb-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <span className="font-bold text-slate-900 block mb-1">
                📌 {lang === 'ru' ? 'Главная концептуальная идея для аргументации:' : 'Core Argument Idea:'}
              </span>
              {lang === 'ru' ? work.examFocusRu.coreIdeas : work.examFocusEn.coreIdeas}
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center space-x-2">
                <FileText className="w-4 h-4 text-[#0039A6]" />
                <span>{lang === 'ru' ? 'Типовые темы сочинений и проблемные вопросы:' : 'Typical Essay Prompts:'}</span>
              </h3>
              <div className="space-y-2.5">
                {(lang === 'ru' ? work.examFocusRu.criticalEssayPrompts : work.examFocusEn.criticalEssayPrompts).map(
                  (prompt, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-blue-300 transition-colors flex items-start space-x-3"
                    >
                      <span className="font-bold text-[#0039A6] text-sm shrink-0">#{idx + 1}</span>
                      <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">{prompt}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 6: Knowledge Quiz */}
      {activeSubTab === 'quiz' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs max-w-3xl mx-auto">
            {!quizFinished ? (
              <div>
                {/* Quiz Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                  <div className="flex items-center space-x-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <span>
                      {lang === 'ru' ? 'Вопрос' : 'Question'} {currentQuizIndex + 1} / {work.quizQuestions.length}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    +{work.quizQuestions.length * 15} XP max
                  </span>
                </div>

                {/* Question */}
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {lang === 'ru'
                      ? work.quizQuestions[currentQuizIndex].questionRu
                      : work.quizQuestions[currentQuizIndex].questionEn}
                  </h3>
                </div>

                {/* Options */}
                <div className="space-y-3 mb-6">
                  {work.quizQuestions[currentQuizIndex].options?.map((opt, idx) => {
                    const isSelected = selectedAnswer === opt;
                    const isCorrect = isAnswerSubmitted && opt === work.quizQuestions[currentQuizIndex].correctAnswer;
                    const isWrong = isAnswerSubmitted && isSelected && !isCorrect;

                    let btnStyle = 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800';
                    if (isSelected && !isAnswerSubmitted) {
                      btnStyle = 'border-[#0039A6] bg-blue-50 text-[#0039A6] font-bold ring-1 ring-blue-500';
                    } else if (isCorrect) {
                      btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold ring-2 ring-emerald-400';
                    } else if (isWrong) {
                      btnStyle = 'border-rose-500 bg-rose-50 text-rose-900 ring-2 ring-rose-400';
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(opt)}
                        disabled={isAnswerSubmitted}
                        className={`w-full p-4 rounded-xl border text-left text-sm sm:text-base transition-all flex items-center justify-between ${btnStyle}`}
                      >
                        <span>{opt}</span>
                        {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation banner if submitted */}
                {isAnswerSubmitted && (
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 animate-fadeIn">
                    <span className="font-bold text-xs uppercase tracking-wider text-slate-700 block mb-1">
                      💡 {lang === 'ru' ? 'Пояснение к ответу:' : 'Explanation:'}
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {lang === 'ru'
                        ? work.quizQuestions[currentQuizIndex].explanationRu
                        : work.quizQuestions[currentQuizIndex].explanationEn}
                    </p>
                  </div>
                )}

                {/* Submit / Next Button */}
                <div className="flex items-center justify-end">
                  {!isAnswerSubmitted ? (
                    <button
                      onClick={handleSubmitAnswer}
                      disabled={selectedAnswer === null}
                      className="px-6 py-2.5 rounded-xl font-bold text-sm bg-[#0039A6] text-white hover:bg-blue-800 disabled:opacity-50 transition-colors shadow-xs"
                    >
                      {lang === 'ru' ? 'Ответить' : 'Submit Answer'}
                    </button>
                  ) : (
                    <button
                      onClick={handleNextQuizQuestion}
                      className="px-6 py-2.5 rounded-xl font-bold text-sm bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-xs"
                    >
                      {currentQuizIndex + 1 < work.quizQuestions.length
                        ? lang === 'ru'
                          ? 'Следующий вопрос'
                          : 'Next Question'
                        : lang === 'ru'
                        ? 'Завершить тест'
                        : 'Finish Quiz'}
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* Quiz Finished Screen */
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto text-2xl border border-emerald-200 shadow-sm">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  {lang === 'ru' ? 'Тест успешно завершён!' : 'Quiz Completed!'}
                </h3>
                <p className="text-slate-600 text-sm">
                  {lang === 'ru'
                    ? `Ваш результат: ${userScore} из ${work.quizQuestions.length} правильных ответов.`
                    : `Your result: ${userScore} of ${work.quizQuestions.length} correct answers.`}
                </p>
                <div className="inline-block px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-bold text-sm">
                  +{userScore * 15} XP {lang === 'ru' ? 'начислено в прогресс!' : 'added to your XP!'}
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleRestartQuiz}
                    className="px-6 py-2.5 rounded-xl text-sm font-bold bg-[#0039A6] text-white hover:bg-blue-800 transition-colors shadow-xs"
                  >
                    {lang === 'ru' ? 'Пройти ещё раз' : 'Retake Quiz'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab: YouTube Reviews & Video Analyses */}
      {activeSubTab === 'reviews' && (
        <LiteratureYoutubeSection
          work={work}
          lang={lang}
          watchedVideos={watchedVideos}
          onRecordVideoWatched={onRecordVideoWatched}
        />
      )}
    </div>
  );
};
