import React, { useState } from 'react';
import { SupportedLang } from '../types';
import {
  FILL_BLANK_EXERCISES,
  CASE_AGREEMENT_EXERCISES,
  SENTENCE_BUILD_EXERCISES,
} from '../data/exercisesData';
import { playRussianAudio } from '../utils/audio';
import {
  CheckCircle2,
  XCircle,
  Sparkles,
  HelpCircle,
  Volume2,
  RotateCcw,
  ArrowRight,
  Check,
  MoveHorizontal,
  FileCheck,
  Layers,
  Award,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ExercisesViewProps {
  lang: SupportedLang;
  audioSpeed: number;
  onCompleteExercise: (
    exerciseId: string,
    type: 'fill-blank' | 'case-agreement' | 'sentence-build',
    isCorrect: boolean
  ) => void;
  completedExercises?: Record<string, { type: string; score: number; passedAt: string }>;
}

export const ExercisesView: React.FC<ExercisesViewProps> = ({
  lang,
  audioSpeed,
  onCompleteExercise,
  completedExercises = {},
}) => {
  const [activeExerciseType, setActiveExerciseType] = useState<
    'fill-blank' | 'case-agreement' | 'sentence-build'
  >('fill-blank');

  // Indices for each exercise type
  const [fbIndex, setFbIndex] = useState(0);
  const [caIndex, setCaIndex] = useState(0);
  const [sbIndex, setSbIndex] = useState(0);

  // States for Fill-in-the-Blank
  const [fbSelectedOption, setFbSelectedOption] = useState<string | null>(null);
  const [fbSubmitted, setFbSubmitted] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);

  // States for Case Agreement
  const [caSelectedOption, setCaSelectedOption] = useState<string | null>(null);
  const [caSubmitted, setCaSubmitted] = useState<boolean>(false);

  // States for Sentence Builder
  const [selectedWordOrder, setSelectedWordOrder] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>(
    SENTENCE_BUILD_EXERCISES[0].scrambledWords
  );
  const [sbSubmitted, setSbSubmitted] = useState<boolean>(false);
  const [sbIsCorrect, setSbIsCorrect] = useState<boolean>(false);

  // Update available words when switching sentence build questions
  const loadSentenceQuestion = (index: number) => {
    setSbIndex(index);
    const exercise = SENTENCE_BUILD_EXERCISES[index];
    setSelectedWordOrder([]);
    setAvailableWords([...exercise.scrambledWords]);
    setSbSubmitted(false);
    setSbIsCorrect(false);
  };

  // HANDLER: Fill in the Blank
  const handleCheckFb = () => {
    if (!fbSelectedOption || fbSubmitted) return;
    const current = FILL_BLANK_EXERCISES[fbIndex];
    const isCorrect = fbSelectedOption === current.correctWord;
    setFbSubmitted(true);

    if (isCorrect) {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      playRussianAudio(current.fullSentenceRu, audioSpeed);
    }
    onCompleteExercise(current.id, 'fill-blank', isCorrect);
  };

  const handleNextFb = () => {
    const nextIdx = (fbIndex + 1) % FILL_BLANK_EXERCISES.length;
    setFbIndex(nextIdx);
    setFbSelectedOption(null);
    setFbSubmitted(false);
    setShowHint(false);
  };

  // HANDLER: Case Agreement
  const handleCheckCa = () => {
    if (!caSelectedOption || caSubmitted) return;
    const current = CASE_AGREEMENT_EXERCISES[caIndex];
    const isCorrect = caSelectedOption === current.correctPhrase;
    setCaSubmitted(true);

    if (isCorrect) {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
      playRussianAudio(current.fullSentenceRu, audioSpeed);
    }
    onCompleteExercise(current.id, 'case-agreement', isCorrect);
  };

  const handleNextCa = () => {
    const nextIdx = (caIndex + 1) % CASE_AGREEMENT_EXERCISES.length;
    setCaIndex(nextIdx);
    setCaSelectedOption(null);
    setCaSubmitted(false);
  };

  // HANDLER: Sentence Builder
  const handleAddWordToSentence = (word: string, indexInAvailable: number) => {
    if (sbSubmitted) return;
    setSelectedWordOrder((prev) => [...prev, word]);
    setAvailableWords((prev) => prev.filter((_, i) => i !== indexInAvailable));
  };

  const handleRemoveWordFromSentence = (word: string, indexInSelected: number) => {
    if (sbSubmitted) return;
    setSelectedWordOrder((prev) => prev.filter((_, i) => i !== indexInSelected));
    setAvailableWords((prev) => [...prev, word]);
  };

  const handleResetSentenceWords = () => {
    const current = SENTENCE_BUILD_EXERCISES[sbIndex];
    setSelectedWordOrder([]);
    setAvailableWords([...current.scrambledWords]);
    setSbSubmitted(false);
    setSbIsCorrect(false);
  };

  const handleCheckSentence = () => {
    if (selectedWordOrder.length === 0 || sbSubmitted) return;
    const current = SENTENCE_BUILD_EXERCISES[sbIndex];
    const userBuilt = selectedWordOrder.join(' ').trim();
    const correctNormalized = current.correctSentence.trim();
    const isExact = userBuilt.toLowerCase() === correctNormalized.toLowerCase();
    const isAlt =
      current.acceptableAlternatives &&
      current.acceptableAlternatives.some(
        (alt) => alt.trim().toLowerCase() === userBuilt.toLowerCase()
      );

    const isCorrect = isExact || !!isAlt;
    setSbIsCorrect(isCorrect);
    setSbSubmitted(true);

    if (isCorrect) {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
      playRussianAudio(userBuilt, audioSpeed);
    }
    onCompleteExercise(current.id, 'sentence-build', isCorrect);
  };

  const handleNextSb = () => {
    const nextIdx = (sbIndex + 1) % SENTENCE_BUILD_EXERCISES.length;
    loadSentenceQuestion(nextIdx);
  };

  // Stats calculation
  const totalCompleted = Object.keys(completedExercises).length;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-blue-300" />
            <span>{lang === 'ru' ? 'Интерактивные упражнения C1' : 'C1 Interactive Exercises'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            {lang === 'ru' ? 'Практические задания C1: управление и синтаксис' : 'C1 Practice: Case Government & Complex Syntax'}
          </h1>
          <p className="text-sm text-slate-300">
            {lang === 'ru'
              ? 'Закрепляйте нормы уровня C1 на практике: заполняйте пропуски в предложном управлении, согласуйте академические словосочетания и конструируйте сложные предложения с деепричастными оборотами.'
              : 'Master C1 Russian in practice: fill in missing words in complex case government, match high-register noun & adjective cases, and build academic sentences with participial clauses.'}
          </p>
        </div>

        {/* Progress pill */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex items-center space-x-4 shrink-0">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 font-black text-lg">
            {totalCompleted}
          </div>
          <div>
            <span className="text-xs font-bold text-slate-300 block">
              {lang === 'ru' ? 'Выполнено заданий' : 'Exercises completed'}
            </span>
            <span className="text-xs text-emerald-400 font-semibold flex items-center space-x-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>+10 XP {lang === 'ru' ? 'за верный ответ' : 'per correct answer'}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Tabs navigation for 3 exercise modes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          onClick={() => setActiveExerciseType('fill-blank')}
          className={`p-4 rounded-2xl border text-left transition-all flex items-start space-x-3.5 ${
            activeExerciseType === 'fill-blank'
              ? 'bg-white border-[#0039A6] shadow-md ring-2 ring-blue-500/20'
              : 'bg-white/70 hover:bg-white border-slate-200'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 ${
              activeExerciseType === 'fill-blank'
                ? 'bg-[#0039A6] text-white'
                : 'bg-slate-100 text-slate-600'
            }`}
          >
            ✍️
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              {lang === 'ru' ? '1. Заполнение пропусков' : '1. Fill in the Blanks'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {lang === 'ru' ? 'Подбор пропущенного слова' : 'Select missing word in context'}
            </p>
          </div>
        </button>

        <button
          onClick={() => setActiveExerciseType('case-agreement')}
          className={`p-4 rounded-2xl border text-left transition-all flex items-start space-x-3.5 ${
            activeExerciseType === 'case-agreement'
              ? 'bg-white border-[#0039A6] shadow-md ring-2 ring-blue-500/20'
              : 'bg-white/70 hover:bg-white border-slate-200'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 ${
              activeExerciseType === 'case-agreement'
                ? 'bg-[#0039A6] text-white'
                : 'bg-slate-100 text-slate-600'
            }`}
          >
            🏛️
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              {lang === 'ru' ? '2. Падежи: сущ. + прил.' : '2. Noun & Adj Agreement'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {lang === 'ru' ? 'Согласование окончаний' : 'Case, gender & number agreement'}
            </p>
          </div>
        </button>

        <button
          onClick={() => {
            setActiveExerciseType('sentence-build');
            loadSentenceQuestion(sbIndex);
          }}
          className={`p-4 rounded-2xl border text-left transition-all flex items-start space-x-3.5 ${
            activeExerciseType === 'sentence-build'
              ? 'bg-white border-[#0039A6] shadow-md ring-2 ring-blue-500/20'
              : 'bg-white/70 hover:bg-white border-slate-200'
          }`}
        >
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 ${
              activeExerciseType === 'sentence-build'
                ? 'bg-[#0039A6] text-white'
                : 'bg-slate-100 text-slate-600'
            }`}
          >
            🧩
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              {lang === 'ru' ? '3. Сборка предложений' : '3. Sentence Builder'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {lang === 'ru' ? 'Конструктор из слов' : 'Order words correctly'}
            </p>
          </div>
        </button>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MODE 1: FILL IN THE BLANKS */}
      {/* ------------------------------------------------------------- */}
      {activeExerciseType === 'fill-blank' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          {/* Header & Step progress */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-[#0039A6] text-xs font-bold">
                {lang === 'ru' ? 'Задание' : 'Question'} {fbIndex + 1} / {FILL_BLANK_EXERCISES.length}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {FILL_BLANK_EXERCISES[fbIndex].grammarTagRu}
              </span>
            </div>

            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 text-xs font-bold transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{showHint ? (lang === 'ru' ? 'Скрыть подсказку' : 'Hide Hint') : (lang === 'ru' ? 'Подсказка' : 'Hint')}</span>
            </button>
          </div>

          {/* Hint Card */}
          {showHint && (
            <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200/60 text-xs text-amber-900 leading-relaxed animate-in fade-in duration-200">
              💡 <strong>{lang === 'ru' ? 'Грамматическая подсказка:' : 'Grammar Hint:'}</strong>{' '}
              {lang === 'ru' ? FILL_BLANK_EXERCISES[fbIndex].hintRu : FILL_BLANK_EXERCISES[fbIndex].hintEn}
            </div>
          )}

          {/* Sentence Prompt */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-3">
            <p className="text-xl sm:text-2xl font-bold text-slate-900 font-serif leading-relaxed">
              {FILL_BLANK_EXERCISES[fbIndex].sentenceWithBlank.split('______').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span
                      className={`inline-block mx-1.5 px-3 py-0.5 rounded-lg border-2 border-dashed font-bold min-w-[80px] ${
                        fbSubmitted
                          ? fbSelectedOption === FILL_BLANK_EXERCISES[fbIndex].correctWord
                            ? 'bg-emerald-100 border-emerald-500 text-emerald-800'
                            : 'bg-rose-100 border-rose-500 text-rose-800 line-through'
                          : fbSelectedOption
                          ? 'bg-blue-100 border-[#0039A6] text-[#0039A6]'
                          : 'bg-white border-slate-400 text-slate-400'
                      }`}
                    >
                      {fbSelectedOption || '______'}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </p>
            <p className="text-xs sm:text-sm text-slate-500">
              {FILL_BLANK_EXERCISES[fbIndex].translationEn}
            </p>
          </div>

          {/* Option Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {FILL_BLANK_EXERCISES[fbIndex].options.map((option) => {
              const isSelected = fbSelectedOption === option;
              const isCorrect = option === FILL_BLANK_EXERCISES[fbIndex].correctWord;

              let btnStyle = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800';
              if (fbSubmitted) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-500 text-white border-emerald-600 shadow-sm';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'bg-rose-500 text-white border-rose-600';
                } else {
                  btnStyle = 'bg-slate-100 text-slate-400 border-slate-200 opacity-60';
                }
              } else if (isSelected) {
                btnStyle = 'bg-[#0039A6] text-white border-[#0039A6] shadow-sm';
              }

              return (
                <button
                  key={option}
                  disabled={fbSubmitted}
                  onClick={() => setFbSelectedOption(option)}
                  className={`py-3.5 px-4 rounded-xl font-bold text-base border transition-all text-center ${btnStyle}`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* Verification & Detailed Feedback */}
          {fbSubmitted && (
            <div
              className={`p-5 rounded-2xl border space-y-3 ${
                fbSelectedOption === FILL_BLANK_EXERCISES[fbIndex].correctWord
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                  : 'bg-rose-50 border-rose-200 text-rose-950'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {fbSelectedOption === FILL_BLANK_EXERCISES[fbIndex].correctWord ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-600" />
                  )}
                  <span className="font-extrabold text-sm sm:text-base">
                    {fbSelectedOption === FILL_BLANK_EXERCISES[fbIndex].correctWord
                      ? lang === 'ru'
                        ? 'Отлично! Ответ верный (+10 XP)'
                        : 'Correct! Well done (+10 XP)'
                      : lang === 'ru'
                      ? 'Не совсем так. Правильный ответ: ' + FILL_BLANK_EXERCISES[fbIndex].correctWord
                      : 'Incorrect. The right word is: ' + FILL_BLANK_EXERCISES[fbIndex].correctWord}
                  </span>
                </div>

                <button
                  onClick={() =>
                    playRussianAudio(FILL_BLANK_EXERCISES[fbIndex].fullSentenceRu, audioSpeed)
                  }
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/90 hover:bg-white text-slate-800 border border-slate-200 text-xs font-bold transition-colors"
                >
                  <Volume2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{lang === 'ru' ? 'Озвучить' : 'Listen'}</span>
                </button>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                {lang === 'ru'
                  ? FILL_BLANK_EXERCISES[fbIndex].explanationRu
                  : FILL_BLANK_EXERCISES[fbIndex].explanationEn}
              </p>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-400 font-medium">
              {lang === 'ru' ? 'Выберите один вариант и нажмите «Проверить»' : 'Select an option and click "Check"'}
            </span>

            {!fbSubmitted ? (
              <button
                disabled={!fbSelectedOption}
                onClick={handleCheckFb}
                className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-[#0039A6] hover:bg-blue-800 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-sm shadow-md transition-all"
              >
                <Check className="w-4 h-4" />
                <span>{lang === 'ru' ? 'Проверить' : 'Check'}</span>
              </button>
            ) : (
              <button
                onClick={handleNextFb}
                className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>{lang === 'ru' ? 'Следующее задание' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODE 2: CASE AGREEMENT (NOUN + ADJECTIVE) */}
      {/* ------------------------------------------------------------- */}
      {activeExerciseType === 'case-agreement' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-[#0039A6] text-xs font-bold">
                {lang === 'ru' ? 'Падеж' : 'Case'} {caIndex + 1} / {CASE_AGREEMENT_EXERCISES.length}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold">
                {CASE_AGREEMENT_EXERCISES[caIndex].caseNameRu}
              </span>
            </div>
            <span className="text-xs text-slate-500 font-semibold">
              {CASE_AGREEMENT_EXERCISES[caIndex].genderAndNumber}
            </span>
          </div>

          {/* Morphological Base Card */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs text-blue-900/70 font-semibold uppercase tracking-wider block">
                {lang === 'ru' ? 'Исходная форма (Именительный падеж):' : 'Base Nominative form:'}
              </span>
              <span className="text-lg font-black text-blue-950 font-serif">
                «{CASE_AGREEMENT_EXERCISES[caIndex].targetBaseNoun}»
              </span>
            </div>
            <div className="text-xs font-medium text-slate-600 bg-white/80 px-3 py-1.5 rounded-xl border border-blue-200/50">
              🎯 {CASE_AGREEMENT_EXERCISES[caIndex].caseNameEn}
            </div>
          </div>

          {/* Sentence Prompt */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-3">
            <p className="text-xl sm:text-2xl font-bold text-slate-900 font-serif leading-relaxed">
              {CASE_AGREEMENT_EXERCISES[caIndex].sentenceWithBlank.split('______').map((part, i, arr) => (
                <React.Fragment key={i}>
                  {part}
                  {i < arr.length - 1 && (
                    <span
                      className={`inline-block mx-1.5 px-3 py-0.5 rounded-lg border-2 border-dashed font-bold min-w-[140px] ${
                        caSubmitted
                          ? caSelectedOption === CASE_AGREEMENT_EXERCISES[caIndex].correctPhrase
                            ? 'bg-emerald-100 border-emerald-500 text-emerald-800'
                            : 'bg-rose-100 border-rose-500 text-rose-800 line-through'
                          : caSelectedOption
                          ? 'bg-blue-100 border-[#0039A6] text-[#0039A6]'
                          : 'bg-white border-slate-400 text-slate-400'
                      }`}
                    >
                      {caSelectedOption || '______ ______'}
                    </span>
                  )}
                </React.Fragment>
              ))}
            </p>
            <p className="text-xs sm:text-sm text-slate-500">
              {CASE_AGREEMENT_EXERCISES[caIndex].translationEn}
            </p>
          </div>

          {/* Choices Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CASE_AGREEMENT_EXERCISES[caIndex].options.map((option) => {
              const isSelected = caSelectedOption === option;
              const isCorrect = option === CASE_AGREEMENT_EXERCISES[caIndex].correctPhrase;

              let btnStyle = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800';
              if (caSubmitted) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-500 text-white border-emerald-600 shadow-sm';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'bg-rose-500 text-white border-rose-600';
                } else {
                  btnStyle = 'bg-slate-100 text-slate-400 border-slate-200 opacity-60';
                }
              } else if (isSelected) {
                btnStyle = 'bg-[#0039A6] text-white border-[#0039A6] shadow-sm';
              }

              return (
                <button
                  key={option}
                  disabled={caSubmitted}
                  onClick={() => setCaSelectedOption(option)}
                  className={`py-3.5 px-4 rounded-xl font-bold text-sm sm:text-base border transition-all text-center ${btnStyle}`}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {/* Feedback & Morphological Rules */}
          {caSubmitted && (
            <div
              className={`p-5 rounded-2xl border space-y-3 ${
                caSelectedOption === CASE_AGREEMENT_EXERCISES[caIndex].correctPhrase
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                  : 'bg-rose-50 border-rose-200 text-rose-950'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {caSelectedOption === CASE_AGREEMENT_EXERCISES[caIndex].correctPhrase ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-600" />
                  )}
                  <span className="font-extrabold text-sm sm:text-base">
                    {caSelectedOption === CASE_AGREEMENT_EXERCISES[caIndex].correctPhrase
                      ? lang === 'ru'
                        ? 'Правильно! И существительное, и прилагательное согласованы верно (+10 XP)'
                        : 'Correct! Both noun and adjective are properly declined (+10 XP)'
                      : lang === 'ru'
                      ? 'Ошибка! Верная форма: ' + CASE_AGREEMENT_EXERCISES[caIndex].correctPhrase
                      : 'Incorrect! Correct form is: ' + CASE_AGREEMENT_EXERCISES[caIndex].correctPhrase}
                  </span>
                </div>

                <button
                  onClick={() =>
                    playRussianAudio(CASE_AGREEMENT_EXERCISES[caIndex].fullSentenceRu, audioSpeed)
                  }
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/90 hover:bg-white text-slate-800 border border-slate-200 text-xs font-bold transition-colors"
                >
                  <Volume2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{lang === 'ru' ? 'Озвучить' : 'Listen'}</span>
                </button>
              </div>

              {/* Grammar Ending Rule Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                <div className="p-3 bg-white/80 rounded-xl border border-slate-200 text-xs">
                  <span className="font-bold text-[#0039A6] block mb-1">
                    {lang === 'ru' ? 'Правило для прилагательного:' : 'Adjective Ending Rule:'}
                  </span>
                  <span>{CASE_AGREEMENT_EXERCISES[caIndex].adjectiveEndingRuleRu}</span>
                </div>
                <div className="p-3 bg-white/80 rounded-xl border border-slate-200 text-xs">
                  <span className="font-bold text-[#0039A6] block mb-1">
                    {lang === 'ru' ? 'Правило для существительного:' : 'Noun Ending Rule:'}
                  </span>
                  <span>{CASE_AGREEMENT_EXERCISES[caIndex].nounEndingRuleRu}</span>
                </div>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-400 font-medium">
              {lang === 'ru' ? 'Выберите согласованную пару' : 'Choose correctly agreed pair'}
            </span>

            {!caSubmitted ? (
              <button
                disabled={!caSelectedOption}
                onClick={handleCheckCa}
                className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-[#0039A6] hover:bg-blue-800 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-sm shadow-md transition-all"
              >
                <Check className="w-4 h-4" />
                <span>{lang === 'ru' ? 'Проверить' : 'Check'}</span>
              </button>
            ) : (
              <button
                onClick={handleNextCa}
                className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>{lang === 'ru' ? 'Следующее задание' : 'Next Question'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MODE 3: SENTENCE BUILDER (WORD SCRAMBLE) */}
      {/* ------------------------------------------------------------- */}
      {activeExerciseType === 'sentence-build' && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-[#0039A6] text-xs font-bold">
                {lang === 'ru' ? 'Предложение' : 'Sentence'} {sbIndex + 1} / {SENTENCE_BUILD_EXERCISES.length}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold uppercase">
                {SENTENCE_BUILD_EXERCISES[sbIndex].level}
              </span>
            </div>

            <button
              onClick={handleResetSentenceWords}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{lang === 'ru' ? 'Сбросить' : 'Reset'}</span>
            </button>
          </div>

          {/* Translation Objective */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-center space-y-1">
            <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">
              {lang === 'ru' ? 'Соберите русское предложение по переводу:' : 'Assemble Russian sentence matching translation:'}
            </span>
            <p className="text-lg sm:text-xl font-bold text-slate-800">
              "{SENTENCE_BUILD_EXERCISES[sbIndex].translationEn}"
            </p>
          </div>

          {/* Sentence Construction Zone (Drop/Slot Area) */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              {lang === 'ru' ? 'Ваше собранное предложение (нажимайте на слова, чтобы удалить):' : 'Your assembled sentence (tap to remove word):'}
            </span>
            <div className="min-h-[72px] p-3 sm:p-4 bg-blue-50/50 rounded-2xl border-2 border-dashed border-blue-200 flex flex-wrap gap-2 items-center">
              {selectedWordOrder.length === 0 ? (
                <span className="text-xs text-slate-400 italic">
                  {lang === 'ru'
                    ? 'Нажимайте на слова из банка ниже, чтобы составить фразу...'
                    : 'Tap words from the bank below to construct the sentence...'}
                </span>
              ) : (
                selectedWordOrder.map((word, idx) => (
                  <button
                    key={`${word}-${idx}`}
                    onClick={() => handleRemoveWordFromSentence(word, idx)}
                    disabled={sbSubmitted}
                    className="px-3.5 py-2 rounded-xl bg-[#0039A6] text-white font-bold text-sm shadow-xs hover:bg-blue-800 active:scale-95 transition-all flex items-center space-x-1.5"
                  >
                    <span>{word}</span>
                    {!sbSubmitted && <span className="text-blue-300 text-xs">×</span>}
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Available Word Bank */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              {lang === 'ru' ? 'Банк слов (нажмите для добавления):' : 'Word bank (tap to add):'}
            </span>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-wrap gap-2.5 items-center">
              {availableWords.length === 0 ? (
                <span className="text-xs text-slate-400 font-medium">
                  {lang === 'ru' ? 'Все слова расставлены! Нажмите «Проверить».' : 'All words placed! Click "Check".'}
                </span>
              ) : (
                availableWords.map((word, idx) => (
                  <button
                    key={`${word}-${idx}`}
                    disabled={sbSubmitted}
                    onClick={() => handleAddWordToSentence(word, idx)}
                    className="px-4 py-2.5 rounded-xl bg-white hover:bg-blue-50 text-slate-800 font-bold text-sm border border-slate-300 hover:border-[#0039A6] shadow-xs active:scale-95 transition-all"
                  >
                    {word}
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Feedback & Analysis */}
          {sbSubmitted && (
            <div
              className={`p-5 rounded-2xl border space-y-3 ${
                sbIsCorrect
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                  : 'bg-rose-50 border-rose-200 text-rose-950'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {sbIsCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-600" />
                  )}
                  <span className="font-extrabold text-sm sm:text-base">
                    {sbIsCorrect
                      ? lang === 'ru'
                        ? 'Великолепно! Предложение составлено верно (+10 XP)'
                        : 'Great job! Sentence constructed correctly (+10 XP)'
                      : lang === 'ru'
                      ? 'Порядок слов не совсем точен. Эталонный вариант:'
                      : 'Word order mismatch. Standard natural order:'}
                  </span>
                </div>

                <button
                  onClick={() =>
                    playRussianAudio(SENTENCE_BUILD_EXERCISES[sbIndex].correctSentence, audioSpeed)
                  }
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/90 hover:bg-white text-slate-800 border border-slate-200 text-xs font-bold transition-colors"
                >
                  <Volume2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{lang === 'ru' ? 'Озвучить' : 'Listen'}</span>
                </button>
              </div>

              {!sbIsCorrect && (
                <div className="p-3 bg-white/80 rounded-xl font-bold font-serif text-slate-900 text-base">
                  «{SENTENCE_BUILD_EXERCISES[sbIndex].correctSentence}»
                </div>
              )}

              <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                {lang === 'ru'
                  ? SENTENCE_BUILD_EXERCISES[sbIndex].grammarNoteRu
                  : SENTENCE_BUILD_EXERCISES[sbIndex].grammarNoteEn}
              </p>
            </div>
          )}

          {/* Action Footer */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-400 font-medium">
              {lang === 'ru' ? 'Соберите фразу и нажмите «Проверить»' : 'Place all tiles and tap "Check"'}
            </span>

            {!sbSubmitted ? (
              <button
                disabled={selectedWordOrder.length === 0}
                onClick={handleCheckSentence}
                className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-[#0039A6] hover:bg-blue-800 disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-sm shadow-md transition-all"
              >
                <Check className="w-4 h-4" />
                <span>{lang === 'ru' ? 'Проверить' : 'Check'}</span>
              </button>
            ) : (
              <button
                onClick={handleNextSb}
                className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>{lang === 'ru' ? 'Следующее предложение' : 'Next Sentence'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
