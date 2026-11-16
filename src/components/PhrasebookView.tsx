import React, { useState } from 'react';
import { PHRASEBOOK_DATA } from '../data/phrasebookData';
import { PhraseItem, SupportedLang } from '../types';
import { playRussianAudio } from '../utils/audio';
import { Volume2, Volume1, Copy, Check, Search, MessageCircle } from 'lucide-react';

interface PhrasebookViewProps {
  lang: SupportedLang;
  audioSpeed: number;
}

export const PhrasebookView: React.FC<PhrasebookViewProps> = ({ lang, audioSpeed }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', labelRu: 'Все ситуации', labelEn: 'All Situations' },
    { id: 'greetings', labelRu: 'Приветствия', labelEn: 'Greetings' },
    { id: 'courtesy', labelRu: 'Вежливость', labelEn: 'Courtesy' },
    { id: 'cafe', labelRu: 'Кафе и ресторан', labelEn: 'Cafe & Dining' },
    { id: 'directions', labelRu: 'Ориентация в городе', labelEn: 'Directions' },
    { id: 'shopping', labelRu: 'Покупки', labelEn: 'Shopping' },
    { id: 'emergency', labelRu: 'Помощь и экстренно', labelEn: 'Emergency' },
  ];

  const filteredPhrases = PHRASEBOOK_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.phraseRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.translationEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.transliteration.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (phrase: PhraseItem) => {
    navigator.clipboard.writeText(phrase.phraseRu);
    setCopiedId(phrase.id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
            {lang === 'ru' ? 'Живая русская речь' : 'Everyday Spoken Russian'}
          </span>
          <h2 className="text-2xl font-serif font-bold text-stone-900 mt-1">
            {lang === 'ru' ? 'Практический разговорник' : 'Situational Russian Phrasebook'}
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm mt-0.5">
            {lang === 'ru'
              ? 'Готовые фразы для путешествий, общения и повседневной жизни с правильным ударением и озвучкой.'
              : 'Essential real-world phrases with accent marks, phonetic transliteration, and native pronunciation.'}
          </p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === 'ru' ? 'Поиск фразы...' : 'Search phrase...'}
            className="pl-9 pr-3 py-2 rounded-xl border border-stone-200 text-xs sm:text-sm focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 w-full sm:w-64"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
              selectedCategory === cat.id
                ? 'bg-rose-700 text-white shadow-sm font-semibold'
                : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
            }`}
          >
            {lang === 'ru' ? cat.labelRu : cat.labelEn}
          </button>
        ))}
      </div>

      {/* Phrases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filteredPhrases.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-5 border border-stone-200 hover:border-rose-300 hover:shadow-sm transition-all flex flex-col justify-between space-y-3"
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <div className="font-serif text-lg font-bold text-stone-900 tracking-wide">
                  {item.stressRu}
                </div>

                <div className="flex items-center space-x-1 shrink-0">
                  <button
                    onClick={() => playRussianAudio(item.phraseRu, audioSpeed)}
                    className="p-1.5 rounded-lg bg-stone-100 hover:bg-rose-100 text-stone-700 hover:text-rose-700 transition-colors"
                    title={lang === 'ru' ? 'Слушать' : 'Listen'}
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => playRussianAudio(item.phraseRu, 0.65)}
                    className="p-1.5 rounded-lg bg-stone-50 hover:bg-stone-100 text-stone-500 text-[10px] font-mono"
                    title={lang === 'ru' ? 'Медленно' : 'Slow audio'}
                  >
                    0.6x
                  </button>
                  <button
                    onClick={() => handleCopy(item)}
                    className="p-1.5 rounded-lg bg-stone-50 hover:bg-stone-100 text-stone-500 transition-colors"
                    title={lang === 'ru' ? 'Скопировать' : 'Copy'}
                  >
                    {copiedId === item.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="text-xs font-sans text-stone-400 italic mt-0.5">
                [{item.transliteration}]
              </div>

              <div className="text-sm font-medium text-stone-700 mt-2">
                {item.translationEn}
              </div>
            </div>

            {item.contextNote && (
              <div className="pt-2 border-t border-stone-100 text-[11px] text-stone-500 flex items-center space-x-1">
                <MessageCircle className="w-3.5 h-3.5 text-rose-500" />
                <span>{item.contextNote}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
