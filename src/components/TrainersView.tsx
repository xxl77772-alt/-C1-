import React, { useState, useEffect } from 'react';
import { SupportedLang } from '../types';
import { playRussianAudio } from '../utils/audio';
import {
  Volume2,
  Check,
  X,
  Sparkles,
  Zap,
  Ear,
  Target,
  Clock,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface TrainersViewProps {
  lang: SupportedLang;
  audioSpeed: number;
  onEarnXP: (xp: number) => void;
}

// 1. CASE PRACTICE QUESTIONS
const CASE_QUESTIONS = [
  {
    id: 'c1',
    sentenceWithBlank: 'Анна сейчас гуляет в ______ .',
    baseWord: 'парк',
    translationEn: 'Anna is walking in the park right now.',
    options: ['парке', 'парка', 'парку', 'парком'],
    correct: 'парке',
    caseName: 'Предложный падеж (Где?)',
    explanation: 'В предложном падеже мужской род на согласный получает окончание -е: в парке.',
  },
  {
    id: 'c2',
    sentenceWithBlank: 'У меня сегодня нет ______ .',
    baseWord: 'время',
    translationEn: 'I have no time today.',
    options: ['времени', 'время', 'временем', 'времена'],
    correct: 'времени',
    caseName: 'Родительный падеж (Нет чего?)',
    explanation: 'Слово «время» оканчивается на -мя и в родительном падеже имеет форму «времени».',
  },
  {
    id: 'c3',
    sentenceWithBlank: 'Я звоню́ ______ ка́ждый день.',
    baseWord: 'мама',
    translationEn: 'I call mom every day.',
    options: ['маме', 'маму', 'мамы', 'мамой'],
    correct: 'маме',
    caseName: 'Дательный падеж (Кому?)',
    explanation: 'Звонить (кому?) — адресат в дательном падеже: мама -> маме.',
  },
  {
    id: 'c4',
    sentenceWithBlank: 'Мы пьём горя́чий чай с ______ .',
    baseWord: 'лимон',
    translationEn: 'We drink hot tea with lemon.',
    options: ['лимоном', 'лимона', 'лимоне', 'лимону'],
    correct: 'лимоном',
    caseName: 'Творительный падеж (С чем?)',
    explanation: 'Предлог «с» требует творительного падежа: с лимоном.',
  },
  {
    id: 'c5',
    sentenceWithBlank: 'Я ви́жу краси́вую ______ .',
    baseWord: 'девушка',
    translationEn: 'I see a beautiful girl.',
    options: ['девушку', 'девушке', 'девушкой', 'девушки'],
    correct: 'девушку',
    caseName: 'Винительный падеж (Кого?)',
    explanation: 'Прямой объект женского рода на -а получает окончание -у: девушку.',
  },
];

// 2. SPRINT MATCHING PAIRS
const INITIAL_MATCH_PAIRS = [
  { id: '1', ru: 'Спасибо', en: 'Thank you' },
  { id: '2', ru: 'Здравствуйте', en: 'Hello' },
  { id: '3', ru: 'Хлеб', en: 'Bread' },
  { id: '4', ru: 'Друг', en: 'Friend' },
  { id: '5', ru: 'Город', en: 'City' },
  { id: '6', ru: 'Вода', en: 'Water' },
];

// 3. LISTENING CHALLENGES
const LISTENING_ITEMS = [
  { word: 'Пожалуйста', options: ['Пожалуйста', 'Спасибо', 'Извините', 'Здравствуйте'] },
  { word: 'До свидания', options: ['До свидания', 'Доброе утро', 'Спокойной ночи', 'Пока'] },
  { word: 'Хорошо', options: ['Хорошо', 'Плохо', 'Быстро', 'Медленно'] },
  { word: 'Москва', options: ['Москва', 'Россия', 'Питер', 'Казань'] },
  { word: 'Семья', options: ['Семья', 'Сестра', 'Брат', 'Собака'] },
];

// 4. STRESS ACCENT TRAPS
const STRESS_TRAPS = [
  {
    word: 'Замок',
    optionA: { stress: 'За́мок', meaning: 'Castle / Fortress' },
    optionB: { stress: 'Замо́к', meaning: 'Door Lock' },
    promptQuestionRu: 'Какое ударение означает «Дворец, крепость феодала»?',
    promptQuestionEn: 'Which stress accent means "Fortress / Castle"?',
    correct: 'За́мок',
    audioA: 'За́мок',
    audioB: 'Замо́к',
  },
  {
    word: 'Мука',
    optionA: { stress: 'Му́ка', meaning: 'Suffering / Torment' },
    optionB: { stress: 'Мука́', meaning: 'Flour (for baking)' },
    promptQuestionRu: 'Какое слово означает «Помол из зёрен для выпечки хлеба»?',
    promptQuestionEn: 'Which stress accent means "Flour (for baking)"?',
    correct: 'Мука́',
    audioA: 'Му́ка',
    audioB: 'Мука́',
  },
];

export const TrainersView: React.FC<TrainersViewProps> = ({ lang, audioSpeed, onEarnXP }) => {
  const [activeTrainer, setActiveTrainer] = useState<'cases' | 'match' | 'listening' | 'stress'>('cases');

  // Case practice state
  const [caseIndex, setCaseIndex] = useState<number>(0);
  const [caseSelectedOption, setCaseSelectedOption] = useState<string | null>(null);
  const [caseFeedback, setCaseFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [caseScore, setCaseScore] = useState<number>(0);

  // Match practice state
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [selectedRu, setSelectedRu] = useState<string | null>(null);
  const [selectedEn, setSelectedEn] = useState<string | null>(null);
  const [shuffledRu, setShuffledRu] = useState<typeof INITIAL_MATCH_PAIRS>([]);
  const [shuffledEn, setShuffledEn] = useState<typeof INITIAL_MATCH_PAIRS>([]);

  // Listening practice state
  const [listeningIndex, setListeningIndex] = useState<number>(0);
  const [listeningFeedback, setListeningFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [listeningScore, setListeningScore] = useState<number>(0);

  // Stress practice state
  const [stressIndex, setStressIndex] = useState<number>(0);
  const [stressFeedback, setStressFeedback] = useState<'correct' | 'wrong' | null>(null);

  // Init Match Pairs
  useEffect(() => {
    initMatchGame();
  }, []);

  const initMatchGame = () => {
    setMatchedIds([]);
    setSelectedRu(null);
    setSelectedEn(null);
    setShuffledRu([...INITIAL_MATCH_PAIRS].sort(() => 0.5 - Math.random()));
    setShuffledEn([...INITIAL_MATCH_PAIRS].sort(() => 0.5 - Math.random()));
  };

  // Handle Match Click
  const handleRuClick = (id: string, text: string) => {
    if (matchedIds.includes(id)) return;
    playRussianAudio(text, audioSpeed);
    setSelectedRu(id);

    if (selectedEn) {
      checkMatch(id, selectedEn);
    }
  };

  const handleEnClick = (id: string) => {
    if (matchedIds.includes(id)) return;
    setSelectedEn(id);

    if (selectedRu) {
      checkMatch(selectedRu, id);
    }
  };

  const checkMatch = (ruId: string, enId: string) => {
    if (ruId === enId) {
      const next = [...matchedIds, ruId];
      setMatchedIds(next);
      setSelectedRu(null);
      setSelectedEn(null);
      onEarnXP(5);

      if (next.length === INITIAL_MATCH_PAIRS.length) {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
        onEarnXP(25);
      }
    } else {
      setTimeout(() => {
        setSelectedRu(null);
        setSelectedEn(null);
      }, 400);
    }
  };

  // Handle Case Answer
  const currentCaseQ = CASE_QUESTIONS[caseIndex];
  const handleAnswerCase = (opt: string) => {
    if (caseFeedback) return;
    setCaseSelectedOption(opt);

    if (opt === currentCaseQ.correct) {
      setCaseFeedback('correct');
      setCaseScore((s) => s + 1);
      onEarnXP(10);
      confetti({ particleCount: 20, spread: 45, origin: { y: 0.8 } });
      setTimeout(() => {
        setCaseFeedback(null);
        setCaseSelectedOption(null);
        setCaseIndex((prev) => (prev + 1) % CASE_QUESTIONS.length);
      }, 1500);
    } else {
      setCaseFeedback('wrong');
      setTimeout(() => {
        setCaseFeedback(null);
        setCaseSelectedOption(null);
        setCaseIndex((prev) => (prev + 1) % CASE_QUESTIONS.length);
      }, 2200);
    }
  };

  // Handle Listening Answer
  const currentListening = LISTENING_ITEMS[listeningIndex];
  const handleAnswerListening = (chosen: string) => {
    if (listeningFeedback) return;

    if (chosen === currentListening.word) {
      setListeningFeedback('correct');
      setListeningScore((s) => s + 1);
      onEarnXP(8);
      confetti({ particleCount: 20, spread: 40, origin: { y: 0.8 } });
      setTimeout(() => {
        setListeningFeedback(null);
        setListeningIndex((prev) => (prev + 1) % LISTENING_ITEMS.length);
      }, 1200);
    } else {
      setListeningFeedback('wrong');
      setTimeout(() => {
        setListeningFeedback(null);
        setListeningIndex((prev) => (prev + 1) % LISTENING_ITEMS.length);
      }, 1600);
    }
  };

  // Handle Stress Answer
  const currentStress = STRESS_TRAPS[stressIndex];
  const handleAnswerStress = (chosen: string) => {
    if (stressFeedback) return;

    if (chosen === currentStress.correct) {
      setStressFeedback('correct');
      onEarnXP(10);
      confetti({ particleCount: 25, spread: 50, origin: { y: 0.8 } });
      setTimeout(() => {
        setStressFeedback(null);
        setStressIndex((prev) => (prev + 1) % STRESS_TRAPS.length);
      }, 1400);
    } else {
      setStressFeedback('wrong');
      setTimeout(() => {
        setStressFeedback(null);
        setStressIndex((prev) => (prev + 1) % STRESS_TRAPS.length);
      }, 1800);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Selector Bar */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
            {lang === 'ru' ? 'Практические тренажёры' : 'Interactive Drill Hub'}
          </span>
          <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
            {lang === 'ru' ? 'Закрепление навыков' : 'Practice & Mastery Drills'}
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
            {lang === 'ru'
              ? 'Выберите подходящий тренажёр для тренировки падежей, восприятия речи на слух или скорости.'
              : 'Sharpen your Russian grammar, listening comprehension, and word recall with rapid drills.'}
          </p>
        </div>

        {/* 4 Trainer Modes */}
        <div className="flex flex-wrap items-center gap-1.5 bg-stone-100 p-1.5 rounded-xl">
          {[
            { id: 'cases', labelRu: 'Падежи', labelEn: 'Cases', icon: Target },
            { id: 'match', labelRu: 'Спринт пар', labelEn: 'Match Sprint', icon: Zap },
            { id: 'listening', labelRu: 'Аудирование', labelEn: 'Listening', icon: Ear },
            { id: 'stress', labelRu: 'Ударения', labelEn: 'Stress Accents', icon: Sparkles },
          ].map((t) => {
            const Icon = t.icon;
            const isActive = activeTrainer === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTrainer(t.id as any)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-stone-900 text-white shadow-sm font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{lang === 'ru' ? t.labelRu : t.labelEn}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 1. CASE TRAINER */}
      {activeTrainer === 'cases' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-100 pb-3">
            <span className="font-semibold text-rose-600 uppercase tracking-wider">
              {currentCaseQ.caseName}
            </span>
            <span className="font-bold text-stone-700">
              {lang === 'ru' ? 'Вопрос' : 'Question'} {caseIndex + 1} / {CASE_QUESTIONS.length}
            </span>
          </div>

          <div className="text-center space-y-3 py-4">
            <div className="text-xs uppercase font-bold text-stone-400">
              {lang === 'ru' ? 'Вставьте правильную форму слова:' : 'Insert the correct case ending:'} (
              <span className="text-stone-700 font-semibold">{currentCaseQ.baseWord}</span>)
            </div>

            <div className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
              {currentCaseQ.sentenceWithBlank}
            </div>

            <div className="text-xs sm:text-sm text-stone-500 italic">
              «{currentCaseQ.translationEn}»
            </div>
          </div>

          {/* Option buttons */}
          <div className="grid grid-cols-2 gap-3">
            {currentCaseQ.options.map((opt) => {
              const isSelected = caseSelectedOption === opt;
              const isCorrect = opt === currentCaseQ.correct;

              let style = 'bg-stone-50 border-stone-200 hover:border-rose-400 text-stone-900';
              if (caseFeedback && isSelected) {
                style = isCorrect
                  ? 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold'
                  : 'bg-rose-100 border-rose-500 text-rose-900';
              } else if (caseFeedback && isCorrect) {
                style = 'bg-emerald-50 border-emerald-400 text-emerald-800 font-bold';
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleAnswerCase(opt)}
                  disabled={!!caseFeedback}
                  className={`p-4 rounded-xl border-2 font-serif text-lg font-bold transition-all ${style}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {caseFeedback && (
            <div
              className={`p-4 rounded-xl text-xs sm:text-sm leading-relaxed ${
                caseFeedback === 'correct'
                  ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                  : 'bg-rose-50 text-rose-900 border border-rose-200'
              }`}
            >
              <div className="font-bold flex items-center space-x-1 mb-1">
                {caseFeedback === 'correct' ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                <span>
                  {caseFeedback === 'correct'
                    ? (lang === 'ru' ? 'Правильно! +10 XP' : 'Spot on! +10 XP')
                    : (lang === 'ru' ? 'Не совсем верно.' : 'Incorrect choice.')}
                </span>
              </div>
              <p>{currentCaseQ.explanation}</p>
            </div>
          )}
        </div>
      )}

      {/* 2. MATCH SPRINT TRAINER */}
      {activeTrainer === 'match' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm max-w-3xl mx-auto space-y-6">
          <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-100 pb-3">
            <span className="font-semibold text-stone-700">
              {lang === 'ru'
                ? 'Нажмите на русское слово, затем на его перевод:'
                : 'Click a Russian word, then its English match:'}
            </span>
            <button
              onClick={initMatchGame}
              className="flex items-center space-x-1 text-rose-600 hover:text-rose-700 font-semibold"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{lang === 'ru' ? 'Заново' : 'Reset'}</span>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Russian Column */}
            <div className="space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-400 px-1">
                {lang === 'ru' ? 'Русские слова' : 'Russian Words'}
              </div>
              {shuffledRu.map((item) => {
                const isMatched = matchedIds.includes(item.id);
                const isSelected = selectedRu === item.id;

                return (
                  <button
                    key={item.id}
                    disabled={isMatched}
                    onClick={() => handleRuClick(item.id, item.ru)}
                    className={`w-full p-3.5 rounded-xl border text-left font-serif font-bold transition-all flex items-center justify-between ${
                      isMatched
                        ? 'opacity-30 line-through bg-stone-100 border-stone-200 text-stone-400'
                        : isSelected
                        ? 'bg-rose-600 text-white border-rose-600 shadow-sm scale-102'
                        : 'bg-stone-50 text-stone-900 border-stone-200 hover:border-rose-300'
                    }`}
                  >
                    <span>{item.ru}</span>
                    <Volume2 className="w-4 h-4 opacity-70" />
                  </button>
                );
              })}
            </div>

            {/* English Column */}
            <div className="space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-400 px-1">
                {lang === 'ru' ? 'Перевод' : 'English Translation'}
              </div>
              {shuffledEn.map((item) => {
                const isMatched = matchedIds.includes(item.id);
                const isSelected = selectedEn === item.id;

                return (
                  <button
                    key={item.id}
                    disabled={isMatched}
                    onClick={() => handleEnClick(item.id)}
                    className={`w-full p-3.5 rounded-xl border text-left font-sans font-medium text-sm transition-all ${
                      isMatched
                        ? 'opacity-30 line-through bg-stone-100 border-stone-200 text-stone-400'
                        : isSelected
                        ? 'bg-stone-900 text-white border-stone-900 shadow-sm scale-102'
                        : 'bg-stone-50 text-stone-800 border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    {item.en}
                  </button>
                );
              })}
            </div>
          </div>

          {matchedIds.length === INITIAL_MATCH_PAIRS.length && (
            <div className="p-4 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200 text-center font-bold">
              🎉 {lang === 'ru' ? 'Все пары найдены! Отличная память! +25 XP' : 'All pairs matched! Fantastic work! +25 XP'}
            </div>
          )}
        </div>
      )}

      {/* 3. LISTENING COMPREHENSION */}
      {activeTrainer === 'listening' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm max-w-xl mx-auto space-y-6 text-center">
          <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-100 pb-3">
            <span className="font-semibold text-stone-700">
              {lang === 'ru' ? 'Аудирование русской речи' : 'Russian Listening Comprehension'}
            </span>
            <span className="font-bold text-rose-600">
              {listeningScore} {lang === 'ru' ? 'верно' : 'correct'}
            </span>
          </div>

          <p className="text-sm text-stone-600">
            {lang === 'ru' ? 'Нажмите на динамик, чтобы прослушать слово, и выберите правильный вариант:' : 'Listen to the audio clip and select the correct Russian word:'}
          </p>

          <button
            onClick={() => playRussianAudio(currentListening.word, audioSpeed)}
            className="w-24 h-24 mx-auto rounded-full bg-rose-600 hover:bg-rose-500 text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform"
            title={lang === 'ru' ? 'Воспроизвести звук' : 'Play audio'}
          >
            <Volume2 className="w-12 h-12 animate-pulse" />
          </button>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {currentListening.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswerListening(opt)}
                disabled={!!listeningFeedback}
                className="p-4 rounded-xl border border-stone-200 hover:border-rose-400 bg-stone-50 hover:bg-rose-50/50 font-serif font-bold text-lg text-stone-900 transition-all"
              >
                {opt}
              </button>
            ))}
          </div>

          {listeningFeedback && (
            <div
              className={`p-3 rounded-xl text-xs sm:text-sm font-semibold ${
                listeningFeedback === 'correct'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-rose-50 text-rose-800 border border-rose-200'
              }`}
            >
              {listeningFeedback === 'correct'
                ? (lang === 'ru' ? 'Верно! Отличный слух! +8 XP' : 'Correct! Great ear! +8 XP')
                : (lang === 'ru'
                    ? `Было произнесено: «${currentListening.word}»`
                    : `The word spoken was: "${currentListening.word}"`)}
            </div>
          )}
        </div>
      )}

      {/* 4. STRESS ACCENT CHALLENGE */}
      {activeTrainer === 'stress' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm max-w-2xl mx-auto space-y-6">
          <div className="border-b border-stone-100 pb-3">
            <span className="text-xs font-bold uppercase text-rose-600 tracking-wider">
              {lang === 'ru' ? 'Ударение меняет смысл слова!' : 'Russian Stress Changes Meaning!'}
            </span>
            <h3 className="font-serif text-xl font-bold text-stone-900 mt-1">
              {lang === 'ru' ? currentStress.promptQuestionRu : currentStress.promptQuestionEn}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Option A */}
            <div className="p-5 rounded-2xl border-2 border-stone-200 hover:border-rose-400 bg-stone-50/60 transition-all space-y-3">
              <div className="flex items-center justify-between">
                <div className="font-serif text-3xl font-black text-stone-900">
                  {currentStress.optionA.stress}
                </div>
                <button
                  onClick={() => playRussianAudio(currentStress.audioA, audioSpeed)}
                  className="p-2 rounded-lg bg-white shadow-sm text-stone-700 hover:text-rose-600"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <div className="text-xs text-stone-500">{currentStress.optionA.meaning}</div>
              <button
                onClick={() => handleAnswerStress(currentStress.optionA.stress)}
                disabled={!!stressFeedback}
                className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs"
              >
                {lang === 'ru' ? 'Выбрать этот вариант' : 'Select This Option'}
              </button>
            </div>

            {/* Option B */}
            <div className="p-5 rounded-2xl border-2 border-stone-200 hover:border-rose-400 bg-stone-50/60 transition-all space-y-3">
              <div className="flex items-center justify-between">
                <div className="font-serif text-3xl font-black text-stone-900">
                  {currentStress.optionB.stress}
                </div>
                <button
                  onClick={() => playRussianAudio(currentStress.audioB, audioSpeed)}
                  className="p-2 rounded-lg bg-white shadow-sm text-stone-700 hover:text-rose-600"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
              <div className="text-xs text-stone-500">{currentStress.optionB.meaning}</div>
              <button
                onClick={() => handleAnswerStress(currentStress.optionB.stress)}
                disabled={!!stressFeedback}
                className="w-full py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs"
              >
                {lang === 'ru' ? 'Выбрать этот вариант' : 'Select This Option'}
              </button>
            </div>
          </div>

          {stressFeedback && (
            <div
              className={`p-3 rounded-xl text-xs sm:text-sm font-semibold text-center ${
                stressFeedback === 'correct'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-rose-50 text-rose-800 border border-rose-200'
              }`}
            >
              {stressFeedback === 'correct'
                ? (lang === 'ru' ? 'Абсолютно верно! +10 XP' : 'Spot on! +10 XP')
                : (lang === 'ru'
                    ? `Правильный ответ: «${currentStress.correct}»`
                    : `Correct option was: "${currentStress.correct}"`)}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
