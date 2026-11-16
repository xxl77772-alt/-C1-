import React, { useState } from 'react';
import { VOCABULARY_CARDS } from '../data/vocabularyData';
import { Flashcard, SupportedLang } from '../types';
import { playRussianAudio } from '../utils/audio';
import {
  Volume2,
  Volume1,
  RotateCw,
  Check,
  Bookmark,
  Shuffle,
  ChevronLeft,
  ChevronRight,
  Search,
  List,
  Layers,
  Sparkles,
  Info,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface FlashcardsViewProps {
  lang: SupportedLang;
  audioSpeed: number;
  masteredCards: string[];
  bookmarkedCards: string[];
  onToggleMastered: (cardId: string) => void;
  onToggleBookmark: (cardId: string) => void;
  onEarnXP: (xp: number) => void;
}

export const FlashcardsView: React.FC<FlashcardsViewProps> = ({
  lang,
  audioSpeed,
  masteredCards,
  bookmarkedCards,
  onToggleMastered,
  onToggleBookmark,
  onEarnXP,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('cards');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const categories = [
    { id: 'all', labelRu: 'Все термины C1', labelEn: 'All C1 Terms' },
    { id: 'academic', labelRu: 'Академический дискурс', labelEn: 'Academic' },
    { id: 'stylistics', labelRu: 'Стилистика и риторика', labelEn: 'Stylistics' },
    { id: 'business', labelRu: 'Деловой и правовой', labelEn: 'Business & Law' },
    { id: 'paronyms', labelRu: 'Паронимы', labelEn: 'Paronyms' },
    { id: 'verbs', labelRu: 'Книжные глаголы', labelEn: 'Literary Verbs' },
    { id: 'idioms', labelRu: 'Фразеологизмы', labelEn: 'Idioms' },
  ];

  const filteredCards = VOCABULARY_CARDS.filter((card) => {
    const matchesCategory = selectedCategory === 'all' || card.category === selectedCategory;
    const matchesSearch =
      card.wordRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.translationEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      card.transliteration.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const currentCard: Flashcard | undefined = filteredCards[currentIndex] || filteredCards[0];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const randomIndex = Math.floor(Math.random() * filteredCards.length);
    setCurrentIndex(randomIndex);
  };

  const handleMarkMastered = (card: Flashcard) => {
    const isAlready = masteredCards.includes(card.id);
    onToggleMastered(card.id);
    if (!isAlready) {
      onEarnXP(10);
      confetti({ particleCount: 25, spread: 50, origin: { y: 0.8 } });
    }
    handleNext();
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
            {lang === 'ru' ? 'Словарный запас' : 'Vocabulary Builder'}
          </span>
          <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
            {lang === 'ru' ? 'Карточки русских слов' : 'Russian Vocabulary Flashcards'}
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
            {lang === 'ru'
              ? `Изучено: ${masteredCards.length} из ${VOCABULARY_CARDS.length} слов.`
              : `Mastered: ${masteredCards.length} of ${VOCABULARY_CARDS.length} words.`}
          </p>
        </div>

        {/* Search & View Mode */}
        <div className="flex items-center space-x-2.5">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentIndex(0);
              }}
              placeholder={lang === 'ru' ? 'Поиск слова...' : 'Search word...'}
              className="pl-9 pr-3 py-1.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 w-44 sm:w-56"
            />
          </div>

          <div className="bg-stone-100 p-1 rounded-xl flex items-center space-x-1">
            <button
              onClick={() => setViewMode('cards')}
              className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
                viewMode === 'cards' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-500 hover:text-stone-800'
              }`}
              title={lang === 'ru' ? 'Режим карточек' : 'Flashcard Mode'}
            >
              <Layers className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg text-xs font-medium transition-colors ${
                viewMode === 'list' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-500 hover:text-stone-800'
              }`}
              title={lang === 'ru' ? 'Список всех слов' : 'Table View'}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                isActive
                  ? 'bg-rose-700 text-white shadow-sm font-semibold'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              {lang === 'ru' ? cat.labelRu : cat.labelEn}
            </button>
          );
        })}
      </div>

      {/* FLASHCARD MODE */}
      {viewMode === 'cards' && (
        <div className="max-w-xl mx-auto space-y-4">
          {filteredCards.length > 0 && currentCard ? (
            <div className="space-y-4">
              {/* Progress counter */}
              <div className="flex items-center justify-between text-xs text-stone-500 font-medium px-2">
                <span>
                  {lang === 'ru' ? 'Карточка' : 'Card'} {currentIndex + 1} {lang === 'ru' ? 'из' : 'of'}{' '}
                  {filteredCards.length}
                </span>
                <div className="flex items-center space-x-2">
                  {masteredCards.includes(currentCard.id) && (
                    <span className="flex items-center space-x-1 text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 text-[11px] font-semibold">
                      <Check className="w-3 h-3" />
                      <span>{lang === 'ru' ? 'Изучено' : 'Mastered'}</span>
                    </span>
                  )}
                  <button
                    onClick={() => onToggleBookmark(currentCard.id)}
                    className={`p-1 rounded-lg ${
                      bookmarkedCards.includes(currentCard.id)
                        ? 'text-amber-500'
                        : 'text-stone-400 hover:text-stone-600'
                    }`}
                  >
                    <Bookmark className="w-4 h-4 fill-current" />
                  </button>
                </div>
              </div>

              {/* The 3D Flip Card */}
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="cursor-pointer select-none bg-white rounded-3xl p-8 border-2 border-stone-200/80 shadow-md hover:border-rose-300 hover:shadow-lg transition-all min-h-[340px] flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top badges */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] uppercase font-bold text-stone-400 tracking-wider bg-stone-100 px-2 py-0.5 rounded">
                      {currentCard.partOfSpeech}
                    </span>
                    {currentCard.gender && (
                      <span className="text-[11px] font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                        {currentCard.gender === 'm'
                          ? (lang === 'ru' ? 'Мужской (Он)' : 'Masculine (Он)')
                          : currentCard.gender === 'f'
                          ? (lang === 'ru' ? 'Женский (Она)' : 'Feminine (Она)')
                          : (lang === 'ru' ? 'Средний (Оно)' : 'Neuter (Оно)')}
                      </span>
                    )}
                  </div>

                  <span className="text-xs text-stone-400 flex items-center space-x-1">
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>{lang === 'ru' ? 'Нажмите для переворота' : 'Click to flip'}</span>
                  </span>
                </div>

                {/* Card Main Content */}
                <div className="text-center py-6">
                  {!isFlipped ? (
                    // FRONT
                    <div className="space-y-3">
                      <div className="font-serif text-4xl sm:text-5xl font-black text-stone-900 tracking-tight">
                        {currentCard.stressWord}
                      </div>
                      <div className="text-sm font-medium text-stone-400 italic">
                        [{currentCard.transliteration}]
                      </div>

                      <div className="pt-4 flex items-center justify-center space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            playRussianAudio(currentCard.wordRu, audioSpeed);
                          }}
                          className="px-4 py-2 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold text-xs flex items-center space-x-1.5 transition-colors"
                        >
                          <Volume2 className="w-4 h-4" />
                          <span>{lang === 'ru' ? 'Слушать' : 'Listen'}</span>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            playRussianAudio(currentCard.wordRu, 0.65);
                          }}
                          className="px-2.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-600 font-semibold text-xs flex items-center space-x-1 transition-colors"
                        >
                          <Volume1 className="w-3.5 h-3.5" />
                          <span>0.6x</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    // BACK
                    <div className="space-y-4 animate-fadeIn">
                      <div>
                        <div className="text-xs font-bold text-rose-600 uppercase tracking-wider">
                          {lang === 'ru' ? 'Перевод' : 'Translation'}
                        </div>
                        <div className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                          {currentCard.translationEn}
                        </div>
                        <div className="text-xs text-stone-500 mt-0.5">{currentCard.translationRu}</div>
                      </div>

                      {/* Example sentence */}
                      <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70 text-left space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase text-stone-400">
                            {lang === 'ru' ? 'Пример в речи' : 'Example sentence'}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              playRussianAudio(currentCard.exampleSentenceRu, audioSpeed);
                            }}
                            className="text-stone-500 hover:text-rose-600 p-1"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="font-serif font-semibold text-stone-800 text-sm">
                          {currentCard.exampleSentenceRu}
                        </div>
                        <div className="text-xs text-stone-500">{currentCard.exampleSentenceEn}</div>
                      </div>

                      {currentCard.tip && (
                        <div className="text-xs text-stone-600 bg-amber-50/70 border border-amber-200 p-2.5 rounded-lg flex items-start space-x-2 text-left">
                          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                          <span>{currentCard.tip}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Bottom hint */}
                <div className="text-center text-[11px] text-stone-400">
                  {isFlipped
                    ? (lang === 'ru' ? 'Нажмите, чтобы вернуться к слову' : 'Tap to see Russian word')
                    : (lang === 'ru' ? 'Нажмите, чтобы увидеть перевод и пример' : 'Tap to reveal translation & example')}
                </div>
              </div>

              {/* Action Controls */}
              <div className="flex items-center justify-between gap-2 pt-2">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-xl bg-white border border-stone-200 hover:bg-stone-50 text-stone-700 shadow-sm"
                    title={lang === 'ru' ? 'Предыдущая карточка' : 'Previous'}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleShuffle}
                    className="p-3 rounded-xl bg-white border border-stone-200 hover:bg-stone-50 text-stone-700 shadow-sm"
                    title={lang === 'ru' ? 'Случайная карточка' : 'Shuffle'}
                  >
                    <Shuffle className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-xl bg-white border border-stone-200 hover:bg-stone-50 text-stone-700 shadow-sm"
                    title={lang === 'ru' ? 'Следующая карточка' : 'Next'}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleMarkMastered(currentCard)}
                    className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center space-x-1.5"
                  >
                    <Check className="w-4 h-4" />
                    <span>
                      {masteredCards.includes(currentCard.id)
                        ? (lang === 'ru' ? 'Изучено' : 'Learned')
                        : (lang === 'ru' ? 'Знаю это слово! (+10 XP)' : 'Mark Learned (+10 XP)')}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-stone-200">
              <p className="text-stone-500 text-sm">
                {lang === 'ru' ? 'Слова не найдены по данному запросу.' : 'No cards found for this filter.'}
              </p>
            </div>
          )}
        </div>
      )}

      {/* TABLE / LIST MODE */}
      {viewMode === 'list' && (
        <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-50 text-xs uppercase font-semibold text-stone-500 border-b border-stone-200">
                <tr>
                  <th className="px-4 py-3">{lang === 'ru' ? 'Русское слово' : 'Russian Word'}</th>
                  <th className="px-4 py-3">{lang === 'ru' ? 'Транскрипция' : 'Phonetic'}</th>
                  <th className="px-4 py-3">{lang === 'ru' ? 'Перевод' : 'Translation'}</th>
                  <th className="px-4 py-3">{lang === 'ru' ? 'Пример' : 'Example'}</th>
                  <th className="px-4 py-3 text-right">{lang === 'ru' ? 'Действия' : 'Actions'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {filteredCards.map((card) => {
                  const isMastered = masteredCards.includes(card.id);
                  return (
                    <tr key={card.id} className="hover:bg-stone-50/70 transition-colors">
                      <td className="px-4 py-3 font-serif font-bold text-stone-900 text-base">
                        <div className="flex items-center space-x-2">
                          <span>{card.stressWord}</span>
                          {card.gender && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-stone-100 text-stone-600">
                              {card.gender}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-xs text-stone-500 italic">
                        {card.transliteration}
                      </td>
                      <td className="px-4 py-3 font-medium text-stone-800">
                        {card.translationEn}
                      </td>
                      <td className="px-4 py-3 text-xs text-stone-600 max-w-xs">
                        <div className="font-serif">{card.exampleSentenceRu}</div>
                        <div className="text-stone-400">{card.exampleSentenceEn}</div>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <div className="flex items-center justify-end space-x-1.5">
                          <button
                            onClick={() => playRussianAudio(card.wordRu, audioSpeed)}
                            className="p-1.5 rounded-lg hover:bg-rose-50 text-stone-600 hover:text-rose-700"
                            title={lang === 'ru' ? 'Слушать' : 'Listen'}
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => onToggleMastered(card.id)}
                            className={`p-1.5 rounded-lg ${
                              isMastered ? 'bg-emerald-100 text-emerald-700' : 'hover:bg-stone-100 text-stone-400'
                            }`}
                            title={lang === 'ru' ? 'Отметить как изученное' : 'Mark learned'}
                          >
                            <Check className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
