import React, { useState } from 'react';
import { LESSONS_DATA } from '../data/lessonsData';
import { Lesson, SupportedLang, QuizQuestion } from '../types';
import { playRussianAudio } from '../utils/audio';
import {
  CheckCircle,
  Clock,
  BookOpen,
  MessageSquare,
  Award,
  ChevronRight,
  ArrowLeft,
  Volume2,
  Volume1,
  Check,
  X,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface LessonsViewProps {
  lang: SupportedLang;
  audioSpeed: number;
  completedLessons: string[];
  initialLessonId?: string | null;
  onCompleteLesson: (lessonId: string, earnedXP: number, score?: number, totalQuestions?: number) => void;
}

export const LessonsView: React.FC<LessonsViewProps> = ({
  lang,
  audioSpeed,
  completedLessons,
  initialLessonId,
  onCompleteLesson,
}) => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(() => {
    if (initialLessonId) {
      return LESSONS_DATA.find((l) => l.id === initialLessonId) || null;
    }
    return null;
  });
  const [activeTab, setActiveTab] = useState<'dialogue' | 'theory' | 'vocabulary' | 'quiz'>('dialogue');

  // Quiz interactive state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);

  const handleOpenLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setActiveTab(lesson.dialogue ? 'dialogue' : 'theory');
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setQuizSubmitted(false);
    setQuizScore(0);
  };

  const handleSelectQuizAnswer = (qId: string, answer: string) => {
    if (quizSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [qId]: answer }));
  };

  const handleSubmitQuiz = (lesson: Lesson) => {
    let score = 0;
    lesson.questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        score++;
      }
    });

    setQuizScore(score);
    setQuizSubmitted(true);

    const xpToAward = score * 10 + 20;
    onCompleteLesson(lesson.id, xpToAward, score, lesson.questions.length);

    if (score >= Math.ceil(lesson.questions.length * 0.6)) {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    }
  };

  return (
    <div className="space-y-6">
      {!selectedLesson ? (
        // LESSONS LIST
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0039A6] bg-[#0039A6]/10 px-3 py-1 rounded-full border border-[#0039A6]/20">
                {lang === 'ru' ? 'Академический курс C1' : 'Advanced C1 Curriculum'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 mb-2">
                {lang === 'ru' ? 'Академические и профессиональные уроки (Уровень C1)' : 'Academic & Professional Russian Lessons (Level C1)'}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {lang === 'ru'
                  ? 'Каждый модуль включает аутентичные дискурсивные тексты и диалоги высокого регистра с озвучкой, глубокий разбор синтаксиса и падежного управления, терминологический глоссарий и проверочный тест ТРКИ-III с начислением XP.'
                  : 'Each module includes authentic high-register discourse and dialogues with audio, comprehensive syntax and case government breakdowns, terminology glossaries, and TORFL-3 practice quizzes.'}
              </p>
            </div>
          </div>

          {/* Lessons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {LESSONS_DATA.map((lesson) => {
              const isCompleted = completedLessons.includes(lesson.id);

              return (
                <div
                  key={lesson.id}
                  onClick={() => handleOpenLesson(lesson)}
                  className={`p-6 rounded-3xl border transition-all cursor-pointer group flex flex-col justify-between ${
                    isCompleted
                      ? 'bg-emerald-50/40 border-2 border-emerald-300 hover:border-emerald-500 hover:shadow-lg'
                      : 'bg-white border-slate-200 hover:border-[#0039A6] hover:shadow-xl'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center space-x-2.5">
                        <span className="px-3 py-1 rounded-lg text-xs font-bold bg-[#0039A6] text-white shadow-xs">
                          {lesson.level}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          {lang === 'ru' ? `Урок ${lesson.order}` : `Lesson ${lesson.order}`}
                        </span>
                      </div>

                      {isCompleted ? (
                        <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-200">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>{lang === 'ru' ? 'Пройден' : 'Completed'}</span>
                        </span>
                      ) : (
                        <div className="flex items-center space-x-1 text-xs text-slate-400 font-medium">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{lesson.estimatedMinutes} {lang === 'ru' ? 'мин' : 'min'}</span>
                        </div>
                      )}
                    </div>

                    <h3 className="font-serif text-xl font-black text-slate-900 group-hover:text-[#0039A6] transition-colors">
                      {lang === 'ru' ? lesson.titleRu : lesson.titleEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed font-normal">
                      {lang === 'ru' ? lesson.descriptionRu : lesson.descriptionEn}
                    </p>

                    <div className="mt-3.5 inline-block text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                      🎯 {lesson.grammarFocus}
                    </div>
                  </div>

                  <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0039A6]">
                    <span>
                      {isCompleted
                        ? (lang === 'ru' ? 'Повторить урок' : 'Review Lesson')
                        : (lang === 'ru' ? 'Начать урок' : 'Start Lesson')}
                    </span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        // ACTIVE LESSON VIEWER
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Header */}
          <div className="p-5 sm:p-6 bg-gradient-to-r from-[#0039A6] via-[#1E40AF] to-[#1E293B] text-white flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3.5">
              <button
                onClick={() => setSelectedLesson(null)}
                className="p-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer border border-white/20"
                title={lang === 'ru' ? 'Назад к списку уроков' : 'Back to Lessons'}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#D52B1E] text-white">
                    {selectedLesson.level}
                  </span>
                  <span className="text-xs text-blue-200 font-medium">
                    {lang === 'ru' ? `Урок ${selectedLesson.order}` : `Lesson ${selectedLesson.order}`}
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-black text-white mt-0.5">
                  {lang === 'ru' ? selectedLesson.titleRu : selectedLesson.titleEn}
                </h2>
              </div>
            </div>

            {/* Sub Tabs */}
            <div className="flex items-center space-x-1 bg-black/20 p-1.5 rounded-2xl border border-white/10">
              {selectedLesson.dialogue && (
                <button
                  onClick={() => setActiveTab('dialogue')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'dialogue' ? 'bg-white text-[#0039A6] shadow-sm' : 'text-blue-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="flex items-center space-x-1.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{lang === 'ru' ? 'Диалог' : 'Dialogue'}</span>
                  </span>
                </button>
              )}

              <button
                onClick={() => setActiveTab('theory')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'theory' ? 'bg-white text-[#0039A6] shadow-sm' : 'text-blue-100 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="flex items-center space-x-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{lang === 'ru' ? 'Теория' : 'Theory'}</span>
                </span>
              </button>

              <button
                onClick={() => setActiveTab('vocabulary')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'vocabulary' ? 'bg-white text-[#0039A6] shadow-sm' : 'text-blue-100 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{lang === 'ru' ? 'Словарь' : 'Words'}</span>
                </span>
              </button>

              <button
                onClick={() => setActiveTab('quiz')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'quiz' ? 'bg-white text-[#0039A6] shadow-sm' : 'text-blue-100 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="flex items-center space-x-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>{lang === 'ru' ? 'Тест' : 'Quiz'}</span>
                </span>
              </button>
            </div>
          </div>

          {/* TAB 1: DIALOGUE */}
          {activeTab === 'dialogue' && selectedLesson.dialogue && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="bg-stone-50 rounded-xl p-4 border border-stone-200 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-stone-800 text-sm">
                    {lang === 'ru' ? 'Аудио-диалог ситуации' : 'Spoken Dialogue'}
                  </h4>
                  <p className="text-xs text-stone-500">
                    {lang === 'ru'
                      ? 'Нажимайте на значок динамика для прослушивания каждой реплики с правильным ударением.'
                      : 'Click the speaker icon next to each line to hear authentic speech with accent marks.'}
                  </p>
                </div>
                <button
                  onClick={() => {
                    const fullDialogue = selectedLesson.dialogue?.map((d) => d.textRu).join(' ');
                    if (fullDialogue) playRussianAudio(fullDialogue, audioSpeed);
                  }}
                  className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold rounded-lg shadow-sm flex items-center space-x-1.5"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{lang === 'ru' ? 'Воспроизвести весь диалог' : 'Play Full Dialogue'}</span>
                </button>
              </div>

              <div className="space-y-4">
                {selectedLesson.dialogue.map((line, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-stone-200 bg-white hover:border-rose-200 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{line.avatar}</span>
                        <div>
                          <span className="font-semibold text-stone-900 text-sm">{line.speaker}</span>
                          <span className="text-[11px] text-stone-400 ml-2">
                            ({lang === 'ru' ? line.speakerRoleRu : line.speakerRoleEn})
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => playRussianAudio(line.textRu, audioSpeed)}
                          className="p-2 rounded-lg bg-stone-100 hover:bg-rose-100 hover:text-rose-700 text-stone-700 transition-colors"
                          title={lang === 'ru' ? 'Озвучить' : 'Play audio'}
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => playRussianAudio(line.textRu, 0.65)}
                          className="p-1.5 rounded-lg bg-stone-50 hover:bg-stone-100 text-stone-500 text-[11px] font-medium"
                          title={lang === 'ru' ? 'Медленно' : 'Slow audio'}
                        >
                          0.6x
                        </button>
                      </div>
                    </div>

                    <div className="mt-2 pl-9">
                      <div className="font-serif text-lg font-bold text-stone-900 tracking-wide">
                        {line.stressMarks}
                      </div>
                      <div className="text-xs text-stone-500 mt-0.5">{line.textEn}</div>
                      {line.notes && (
                        <div className="mt-2 text-xs text-rose-700 bg-rose-50/70 p-2 rounded-lg border border-rose-200">
                          💡 {line.notes}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-4">
                <button
                  onClick={() => setActiveTab('theory')}
                  className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-sm font-semibold flex items-center space-x-2"
                >
                  <span>{lang === 'ru' ? 'Перейти к теории' : 'Proceed to Theory'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: THEORY */}
          {activeTab === 'theory' && (
            <div className="p-6 sm:p-8 space-y-6">
              {selectedLesson.theoryPoints.map((tp, idx) => (
                <div key={idx} className="bg-stone-50/70 rounded-2xl p-6 border border-stone-200 space-y-4">
                  <h3 className="font-serif text-xl font-bold text-stone-900">
                    {lang === 'ru' ? tp.headingRu : tp.headingEn}
                  </h3>
                  <p className="text-sm text-stone-700 whitespace-pre-line leading-relaxed">
                    {lang === 'ru' ? tp.contentRu : tp.contentEn}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                      {lang === 'ru' ? 'Примеры использования:' : 'Examples in Context:'}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {tp.examples.map((ex, exIdx) => (
                        <div
                          key={exIdx}
                          className="bg-white p-3 rounded-xl border border-stone-200 flex items-center justify-between"
                        >
                          <div>
                            <div className="font-serif font-bold text-stone-900 text-sm">
                              {ex.stress}
                            </div>
                            <div className="text-xs text-stone-500">{ex.en}</div>
                          </div>
                          <button
                            onClick={() => playRussianAudio(ex.ru, audioSpeed)}
                            className="p-1.5 rounded-md hover:bg-rose-100 text-stone-600 hover:text-rose-700 transition-colors"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setActiveTab(selectedLesson.dialogue ? 'dialogue' : 'vocabulary')}
                  className="px-4 py-2 border border-stone-300 text-stone-700 hover:bg-stone-100 rounded-xl text-sm font-medium"
                >
                  {lang === 'ru' ? 'Назад' : 'Back'}
                </button>
                <button
                  onClick={() => setActiveTab('vocabulary')}
                  className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-sm font-semibold flex items-center space-x-2"
                >
                  <span>{lang === 'ru' ? 'Перейти к словарю' : 'Lesson Vocabulary'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: VOCABULARY */}
          {activeTab === 'vocabulary' && (
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {selectedLesson.vocabulary.map((w, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-stone-200 bg-white hover:border-rose-300 transition-all flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[10px] uppercase font-bold text-stone-400">
                        {w.partOfSpeech}
                      </span>
                      <div className="font-serif text-lg font-bold text-stone-900 mt-0.5">
                        {w.stress}
                      </div>
                      <div className="text-xs text-stone-600">{w.en}</div>
                    </div>
                    <button
                      onClick={() => playRussianAudio(w.ru, audioSpeed)}
                      className="p-2 rounded-lg bg-stone-100 hover:bg-rose-100 text-stone-700 hover:text-rose-700 transition-colors"
                      title={lang === 'ru' ? 'Озвучить' : 'Listen'}
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex justify-between pt-4">
                <button
                  onClick={() => setActiveTab('theory')}
                  className="px-4 py-2 border border-stone-300 text-stone-700 hover:bg-stone-100 rounded-xl text-sm font-medium"
                >
                  {lang === 'ru' ? 'Назад' : 'Back'}
                </button>
                <button
                  onClick={() => setActiveTab('quiz')}
                  className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-sm font-semibold flex items-center space-x-2 shadow-sm"
                >
                  <Award className="w-4 h-4" />
                  <span>{lang === 'ru' ? 'Пройти тест и получить XP' : 'Take Quiz & Earn XP'}</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: QUIZ */}
          {activeTab === 'quiz' && (
            <div className="p-6 sm:p-8 space-y-6 max-w-3xl mx-auto">
              {!quizSubmitted ? (
                <div className="space-y-6">
                  <div className="border-b border-stone-200 pb-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-stone-900">
                        {lang === 'ru' ? 'Проверочный тест к уроку' : 'Lesson Comprehension Quiz'}
                      </h3>
                      <p className="text-xs text-stone-500">
                        {lang === 'ru'
                          ? `Вопросов: ${selectedLesson.questions.length}. За каждый правильный ответ начисляется XP.`
                          : `Total questions: ${selectedLesson.questions.length}. Earn XP for each correct answer.`}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {selectedLesson.questions.map((q, idx) => {
                      const userChoice = userAnswers[q.id];

                      return (
                        <div
                          key={q.id}
                          className="bg-stone-50/70 p-5 rounded-2xl border border-stone-200 space-y-3"
                        >
                          <div className="flex items-start justify-between">
                            <span className="text-xs font-bold px-2 py-0.5 rounded bg-stone-200 text-stone-700">
                              #{idx + 1}
                            </span>
                            {q.audioPrompt && (
                              <button
                                onClick={() => playRussianAudio(q.audioPrompt || '', audioSpeed)}
                                className="inline-flex items-center space-x-1.5 px-3 py-1 bg-rose-100 hover:bg-rose-200 text-rose-800 rounded-lg text-xs font-semibold"
                              >
                                <Volume2 className="w-3.5 h-3.5" />
                                <span>{lang === 'ru' ? 'Слушать аудио' : 'Play Audio'}</span>
                              </button>
                            )}
                          </div>

                          <h4 className="font-medium text-stone-900 text-base">
                            {lang === 'ru' ? q.questionRu : q.questionEn}
                          </h4>

                          {q.options && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                              {q.options.map((opt) => {
                                const isSelected = userChoice === opt;
                                return (
                                  <button
                                    key={opt}
                                    onClick={() => handleSelectQuizAnswer(q.id, opt)}
                                    className={`p-3 rounded-xl border text-left text-sm font-medium transition-all ${
                                      isSelected
                                        ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
                                        : 'bg-white text-stone-800 border-stone-200 hover:border-rose-300'
                                    }`}
                                  >
                                    {opt}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => handleSubmitQuiz(selectedLesson)}
                      disabled={Object.keys(userAnswers).length < selectedLesson.questions.length}
                      className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-500 disabled:opacity-50 text-white font-semibold text-sm shadow-md transition-all flex items-center space-x-2"
                    >
                      <Check className="w-4 h-4" />
                      <span>{lang === 'ru' ? 'Проверить ответы' : 'Submit Answers'}</span>
                    </button>
                  </div>
                </div>
              ) : (
                // QUIZ RESULTS
                <div className="text-center space-y-6 py-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-md">
                    <Sparkles className="w-10 h-10" />
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-stone-900">
                      {quizScore === selectedLesson.questions.length
                        ? (lang === 'ru' ? 'Превосходно! Отличный результат!' : 'Perfect Score!')
                        : (lang === 'ru' ? 'Урок успешно пройден!' : 'Lesson Completed!')}
                    </h3>
                    <p className="text-stone-600 text-sm mt-1">
                      {lang === 'ru'
                        ? `Вы правильно ответили на ${quizScore} из ${selectedLesson.questions.length} вопросов и получили +${quizScore * 10 + 20} XP!`
                        : `You answered ${quizScore} out of ${selectedLesson.questions.length} questions correctly and earned +${quizScore * 10 + 20} XP!`}
                    </p>
                  </div>

                  {/* Review Questions */}
                  <div className="text-left space-y-4 max-w-2xl mx-auto pt-2">
                    {selectedLesson.questions.map((q, idx) => {
                      const userChoice = userAnswers[q.id];
                      const isCorrect = userChoice === q.correctAnswer;

                      return (
                        <div
                          key={q.id}
                          className={`p-4 rounded-xl border ${
                            isCorrect ? 'bg-emerald-50/60 border-emerald-200' : 'bg-rose-50/60 border-rose-200'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            {isCorrect ? (
                              <Check className="w-4 h-4 text-emerald-600" />
                            ) : (
                              <X className="w-4 h-4 text-rose-600" />
                            )}
                            <span className="text-xs font-bold text-stone-700">
                              {lang === 'ru' ? `Вопрос ${idx + 1}:` : `Question ${idx + 1}:`}
                            </span>
                          </div>

                          <div className="text-sm font-medium text-stone-900 mt-1">
                            {lang === 'ru' ? q.questionRu : q.questionEn}
                          </div>

                          <div className="text-xs text-stone-600 mt-2">
                            {lang === 'ru' ? 'Ваш ответ: ' : 'Your answer: '}
                            <span className={isCorrect ? 'font-bold text-emerald-700' : 'font-bold text-rose-700'}>
                              {userChoice}
                            </span>
                            {!isCorrect && (
                              <span className="ml-2 text-stone-500">
                                ({lang === 'ru' ? 'Правильно: ' : 'Correct: '}{q.correctAnswer})
                              </span>
                            )}
                          </div>

                          <div className="text-xs text-stone-500 mt-1.5 pt-1.5 border-t border-stone-200/60">
                            💡 {lang === 'ru' ? q.explanationRu : q.explanationEn}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-4 flex justify-center space-x-3">
                    <button
                      onClick={() => {
                        setQuizSubmitted(false);
                        setUserAnswers({});
                      }}
                      className="px-4 py-2 border border-stone-300 text-stone-700 hover:bg-stone-100 rounded-xl text-sm font-medium"
                    >
                      {lang === 'ru' ? 'Повторить тест' : 'Retake Quiz'}
                    </button>
                    <button
                      onClick={() => setSelectedLesson(null)}
                      className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-sm font-semibold"
                    >
                      {lang === 'ru' ? 'Вернуться к списку уроков' : 'Back to Lessons'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
