import React, { useState } from 'react';
import { ALPHABET_DATA } from '../data/alphabetData';
import { AlphabetLetter, SupportedLang } from '../types';
import { playRussianAudio } from '../utils/audio';
import { Volume2, HelpCircle, Check, X, Sparkles, RefreshCw, Volume1 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AlphabetViewProps {
  lang: SupportedLang;
  audioSpeed: number;
  onEarnXP: (xp: number) => void;
}

export const AlphabetView: React.FC<AlphabetViewProps> = ({ lang, audioSpeed, onEarnXP }) => {
  const [filter, setFilter] = useState<'all' | 'vowel' | 'consonant' | 'sign'>('all');
  const [activeLetter, setActiveLetter] = useState<AlphabetLetter | null>(ALPHABET_DATA[0]);
  const [isPlayingId, setIsPlayingId] = useState<string | null>(null);

  // Quiz State
  const [quizMode, setQuizMode] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState<{
    targetLetter: AlphabetLetter;
    options: AlphabetLetter[];
  } | null>(null);
  const [quizFeedback, setQuizFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const filteredLetters = ALPHABET_DATA.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  const handlePlayLetter = (letter: AlphabetLetter, slow: boolean = false) => {
    setIsPlayingId(letter.upper);
    const rate = slow ? 0.6 : audioSpeed;
    playRussianAudio(letter.audioText, rate, () => {
      setIsPlayingId(null);
    });
  };

  const handleStartQuiz = () => {
    setQuizMode(true);
    setQuizScore(0);
    generateQuizQuestion();
  };

  const generateQuizQuestion = () => {
    setQuizFeedback(null);
    setSelectedOption(null);
    // Pick random target
    const target = ALPHABET_DATA[Math.floor(Math.random() * ALPHABET_DATA.length)];
    // Pick 3 random distractors
    const others = ALPHABET_DATA.filter((l) => l.upper !== target.upper);
    const shuffledOthers = [...others].sort(() => 0.5 - Math.random()).slice(0, 3);
    const options = [target, ...shuffledOthers].sort(() => 0.5 - Math.random());

    setCurrentQuizQuestion({ targetLetter: target, options });
    // Play target letter audio
    playRussianAudio(target.upper, audioSpeed);
  };

  const handleAnswerQuiz = (chosen: AlphabetLetter) => {
    if (!currentQuizQuestion || quizFeedback) return;
    setSelectedOption(chosen.upper);

    if (chosen.upper === currentQuizQuestion.targetLetter.upper) {
      setQuizFeedback('correct');
      setQuizScore((prev) => prev + 1);
      onEarnXP(5);
      confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
      setTimeout(() => {
        generateQuizQuestion();
      }, 1200);
    } else {
      setQuizFeedback('wrong');
      setTimeout(() => {
        generateQuizQuestion();
      }, 1600);
    }
  };

  return (
    <div className="space-y-6">
      {/* Intro Hero Box */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 rounded-2xl p-6 sm:p-8 text-white border border-stone-800 shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center space-x-2 text-rose-400 font-semibold text-xs uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            <span>{lang === 'ru' ? 'Основа русского языка' : 'The Foundation of Russian'}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-stone-100 tracking-tight mb-3">
            {lang === 'ru' ? 'Русский алфавит (33 буквы)' : 'The Russian Cyrillic Alphabet'}
          </h1>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
            {lang === 'ru'
              ? 'Русский алфавит состоит из 33 букв: 10 гласных, 21 согласной и 2 знаков (твёрдый и мягкий). Нажмите на любую букву, чтобы услышать аутентичное русское произношение.'
              : 'The Russian alphabet consists of 33 letters: 10 vowels, 21 consonants, and 2 signs (hard & soft). Tap any letter to listen to clear native pronunciation and explore example words.'}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                if (quizMode) {
                  setQuizMode(false);
                } else {
                  handleStartQuiz();
                }
              }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-sm font-semibold shadow-md transition-all active:scale-95"
            >
              <HelpCircle className="w-4 h-4" />
              <span>
                {quizMode
                  ? (lang === 'ru' ? 'Вернуться к сетке букв' : 'Back to Alphabet Grid')
                  : (lang === 'ru' ? 'Тренировать буквы на слух' : 'Test Your Ear (Quiz)')}
              </span>
            </button>

            <button
              onClick={() => {
                // Play greeting
                playRussianAudio('Здравствуйте! Давайте учить русский алфавит.', audioSpeed);
              }}
              className="inline-flex items-center space-x-2 px-3.5 py-2 bg-stone-800 hover:bg-stone-750 text-stone-200 border border-stone-700 rounded-xl text-sm font-medium transition-colors"
            >
              <Volume2 className="w-4 h-4 text-rose-400" />
              <span>{lang === 'ru' ? 'Слушать приветствие' : 'Listen to Welcome'}</span>
            </button>
          </div>
        </div>

        {/* Decorative Cyrillic background letters */}
        <div className="absolute right-4 -bottom-6 text-9xl font-serif font-black text-stone-800/40 select-none pointer-events-none hidden md:block">
          АБВ
        </div>
      </div>

      {/* QUIZ MODE */}
      {quizMode && currentQuizQuestion && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-md">
          <div className="max-w-xl mx-auto text-center space-y-5">
            <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-100 pb-3">
              <span className="font-semibold text-stone-700">
                {lang === 'ru' ? 'Тренажёр восприятия на слух' : 'Listening Comprehension Quiz'}
              </span>
              <span className="flex items-center space-x-1 font-bold text-rose-600">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{quizScore} {lang === 'ru' ? 'верно' : 'correct'}</span>
              </span>
            </div>

            <p className="text-stone-600 text-sm">
              {lang === 'ru' ? 'Какая буква звучит? Нажмите на кнопку, чтобы повторить звук:' : 'Which letter is spoken? Click to repeat sound:'}
            </p>

            <button
              onClick={() => playRussianAudio(currentQuizQuestion.targetLetter.upper, audioSpeed)}
              className="w-20 h-20 mx-auto rounded-full bg-rose-100 hover:bg-rose-200 text-rose-700 flex items-center justify-center shadow-md transition-transform hover:scale-105 active:scale-95"
            >
              <Volume2 className="w-10 h-10 animate-pulse" />
            </button>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {currentQuizQuestion.options.map((opt) => {
                const isSelected = selectedOption === opt.upper;
                const isTarget = opt.upper === currentQuizQuestion.targetLetter.upper;

                let btnStyle = 'bg-stone-50 border-stone-200 hover:border-rose-400 hover:bg-rose-50/50 text-stone-800';
                if (quizFeedback && isSelected) {
                  btnStyle = isTarget
                    ? 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold'
                    : 'bg-rose-100 border-rose-500 text-rose-900';
                } else if (quizFeedback && isTarget) {
                  btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-800 font-bold';
                }

                return (
                  <button
                    key={opt.upper}
                    onClick={() => handleAnswerQuiz(opt)}
                    disabled={!!quizFeedback}
                    className={`py-4 px-4 rounded-xl border-2 text-2xl font-serif font-bold transition-all ${btnStyle}`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span>{opt.letter}</span>
                      {quizFeedback && isSelected && (
                        isTarget ? <Check className="w-5 h-5 text-emerald-600" /> : <X className="w-5 h-5 text-rose-600" />
                      )}
                    </div>
                    <span className="text-xs font-sans font-normal text-stone-500 block mt-1">
                      {opt.soundEn}
                    </span>
                  </button>
                );
              })}
            </div>

            {quizFeedback && (
              <div
                className={`p-3 rounded-xl text-sm font-medium ${
                  quizFeedback === 'correct'
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                    : 'bg-rose-50 text-rose-800 border border-rose-200'
                }`}
              >
                {quizFeedback === 'correct'
                  ? (lang === 'ru' ? 'Отлично! +5 XP' : 'Correct! +5 XP earned')
                  : (lang === 'ru'
                      ? `Правильный ответ: ${currentQuizQuestion.targetLetter.letter} (${currentQuizQuestion.targetLetter.name})`
                      : `The correct letter was: ${currentQuizQuestion.targetLetter.letter} (${currentQuizQuestion.targetLetter.name})`)}
              </div>
            )}
          </div>
        </div>
      )}

      {/* FILTER BUTTONS */}
      {!quizMode && (
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-stone-200 shadow-sm">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {[
              { id: 'all', labelRu: 'Все буквы (33)', labelEn: 'All Letters (33)' },
              { id: 'vowel', labelRu: 'Гласные (10)', labelEn: 'Vowels (10)' },
              { id: 'consonant', labelRu: 'Согласные (21)', labelEn: 'Consonants (21)' },
              { id: 'sign', labelRu: 'Знаки (2)', labelEn: 'Signs (2)' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setFilter(item.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  filter === item.id
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {lang === 'ru' ? item.labelRu : item.labelEn}
              </button>
            ))}
          </div>

          <div className="text-xs text-stone-500 font-medium">
            {lang === 'ru' ? 'Кликните на карточку для подробностей' : 'Click any letter to inspect'}
          </div>
        </div>
      )}

      {/* ALPHABET GRID & INSPECTOR SPLIT */}
      {!quizMode && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Letters Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {filteredLetters.map((item) => {
                const isSelected = activeLetter?.upper === item.upper;
                const isPlaying = isPlayingId === item.upper;

                return (
                  <div
                    key={item.upper}
                    onClick={() => {
                      setActiveLetter(item);
                      handlePlayLetter(item);
                    }}
                    className={`group relative p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'bg-rose-50/70 border-rose-500 shadow-sm ring-2 ring-rose-300/50'
                        : 'bg-white border-stone-200 hover:border-rose-300 hover:shadow-sm'
                    }`}
                  >
                    {/* Badge top-right */}
                    <span
                      className={`absolute top-2 right-2 text-[9px] font-semibold px-1.5 py-0.5 rounded ${
                        item.type === 'vowel'
                          ? 'bg-amber-100 text-amber-800'
                          : item.type === 'consonant'
                          ? 'bg-sky-100 text-sky-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}
                    >
                      {item.type === 'vowel'
                        ? (lang === 'ru' ? 'глас.' : 'vow.')
                        : item.type === 'consonant'
                        ? (lang === 'ru' ? 'согл.' : 'cons.')
                        : (lang === 'ru' ? 'знак' : 'sign')}
                    </span>

                    {/* Big Letter */}
                    <div className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight group-hover:text-rose-600 transition-colors">
                      {item.letter}
                    </div>

                    {/* Letter Name & Sound */}
                    <div className="mt-1 flex items-baseline justify-between text-xs">
                      <span className="font-medium text-stone-700">[{item.name}]</span>
                      <span className="text-stone-400 text-[11px]">{item.ipa}</span>
                    </div>

                    {/* Example word */}
                    <div className="mt-2 pt-2 border-t border-stone-100 flex items-center justify-between">
                      <div className="truncate">
                        <span className="text-xs font-semibold text-stone-900 block truncate">
                          {item.exampleWord}
                        </span>
                        <span className="text-[10px] text-stone-500 block truncate">
                          {item.exampleTranslationEn}
                        </span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayLetter(item);
                        }}
                        className={`p-1.5 rounded-md transition-colors ${
                          isPlaying
                            ? 'bg-rose-600 text-white animate-pulse'
                            : 'bg-stone-100 text-stone-600 hover:bg-rose-100 hover:text-rose-700'
                        }`}
                        title={lang === 'ru' ? 'Слушать' : 'Pronounce'}
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Letter Inspector & Phonetic Guide */}
          <div className="lg:col-span-1">
            {activeLetter ? (
              <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm sticky top-28 space-y-5">
                <div className="flex items-start justify-between border-b border-stone-100 pb-4">
                  <div>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        activeLetter.type === 'vowel'
                          ? 'bg-amber-100 text-amber-800'
                          : activeLetter.type === 'consonant'
                          ? 'bg-sky-100 text-sky-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}
                    >
                      {activeLetter.type === 'vowel'
                        ? (lang === 'ru' ? 'Гласная буква' : 'Vowel')
                        : activeLetter.type === 'consonant'
                        ? (lang === 'ru' ? 'Согласная буква' : 'Consonant')
                        : (lang === 'ru' ? 'Знак' : 'Sign')}
                    </span>
                    <h3 className="font-serif text-5xl font-black text-stone-900 mt-2">
                      {activeLetter.letter}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <button
                      onClick={() => handlePlayLetter(activeLetter, false)}
                      className="p-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white shadow-sm transition-all flex items-center justify-center"
                      title={lang === 'ru' ? 'Обычная скорость' : 'Normal speed audio'}
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handlePlayLetter(activeLetter, true)}
                      className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium flex items-center justify-center space-x-1"
                      title={lang === 'ru' ? 'Замедленно' : 'Slow audio'}
                    >
                      <Volume1 className="w-3.5 h-3.5" />
                      <span>0.6x</span>
                    </button>
                  </div>
                </div>

                {/* Phonetics Box */}
                <div className="space-y-3 bg-stone-50 rounded-xl p-4 border border-stone-150">
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-500">{lang === 'ru' ? 'Название буквы:' : 'Letter Name:'}</span>
                    <span className="font-bold text-stone-800 font-serif text-sm">«{activeLetter.name}»</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-500">{lang === 'ru' ? 'Транскрипция IPA:' : 'IPA Symbol:'}</span>
                    <span className="font-mono font-semibold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded">
                      {activeLetter.ipa}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-500">{lang === 'ru' ? 'Латиница:' : 'Transliteration:'}</span>
                    <span className="font-semibold text-stone-800">{activeLetter.transliteration}</span>
                  </div>
                  <div className="text-xs pt-1 border-t border-stone-200 text-stone-600">
                    <span className="font-semibold block text-stone-700 mb-0.5">
                      {lang === 'ru' ? 'Как звучит в английском:' : 'Sound equivalent:'}
                    </span>
                    {activeLetter.soundEn}
                  </div>
                </div>

                {/* Example Word Card */}
                <div className="p-4 rounded-xl border border-rose-150 bg-gradient-to-br from-rose-50/60 to-amber-50/40">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-rose-600 tracking-wider">
                        {lang === 'ru' ? 'Пример слова' : 'Example Word'}
                      </span>
                      <div className="text-xl font-serif font-bold text-stone-900 mt-0.5">
                        {activeLetter.exampleWord}
                      </div>
                      <div className="text-xs text-stone-600 mt-0.5">
                        {activeLetter.exampleTranslationEn}
                      </div>
                    </div>
                    <button
                      onClick={() => playRussianAudio(activeLetter.exampleWord, audioSpeed)}
                      className="p-2.5 rounded-full bg-white shadow-sm border border-stone-200 hover:border-rose-300 text-rose-700 transition-transform active:scale-95"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Did you know tip */}
                <div className="text-xs text-stone-500 leading-relaxed bg-stone-100/60 p-3 rounded-lg">
                  💡 <span className="font-medium text-stone-700">{lang === 'ru' ? 'Совет:' : 'Study Tip:'}</span>{' '}
                  {activeLetter.type === 'vowel'
                    ? (lang === 'ru'
                        ? 'Гласные делятся на твёрдые (А, О, У, Ы, Э) и йотированные/мягкие (Я, Ё, Ю, И, Е).'
                        : 'Russian vowels come in pairs: hard (А, О, У, Ы, Э) and soft/jotated (Я, Ё, Ю, И, Е).')
                    : activeLetter.type === 'consonant'
                    ? (lang === 'ru'
                        ? 'Большинство русских согласных могут быть как твёрдыми, так и мягкими в зависимости от следующей гласной.'
                        : 'Most Russian consonants can be hard or soft (palatalized) depending on the following vowel or soft sign.')
                    : (lang === 'ru'
                        ? 'Твёрдый (Ъ) и мягкий (Ь) знаки не имеют собственного звука, но меняют звучание соседних букв.'
                        : 'The hard (Ъ) and soft (Ь) signs carry no sound of their own, but dramatically modify adjacent consonants.')}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};
