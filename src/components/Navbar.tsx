import React from 'react';
import { UserProgress, SupportedLang } from '../types';
import { Flame, Sparkles, Volume2, Globe } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  progress: UserProgress;
  lang: SupportedLang;
  setLang: (lang: SupportedLang) => void;
  audioSpeed: number;
  setAudioSpeed: (speed: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  progress,
  lang,
  setLang,
  audioSpeed,
  setAudioSpeed,
}) => {
  const tabs = [
    { id: 'lessons', labelRu: 'Уроки', labelEn: 'Lessons', icon: '📖' },
    { id: 'calendar', labelRu: 'Календарь 30 дней', labelEn: '30-Day Calendar', icon: '📅' },
    { id: 'literature', labelRu: 'Литература 5-11', labelEn: 'Literature 5-11', icon: '📚' },
    { id: 'history', labelRu: 'История 5-11', labelEn: 'History 5-11', icon: '🏛️' },
    { id: 'exercises', labelRu: 'Упражнения', labelEn: 'Exercises', icon: '✍️' },
    { id: 'audio', labelRu: 'Аудиоматериалы', labelEn: 'Audio Hub', icon: '🎧' },
    { id: 'progress', labelRu: 'Мой прогресс', labelEn: 'Progress', icon: '📊' },
    { id: 'grammar', labelRu: 'Грамматика', labelEn: 'Grammar', icon: '🏛️' },
    { id: 'flashcards', labelRu: 'Карточки', labelEn: 'Flashcards', icon: '🃏' },
    { id: 'trainers', labelRu: 'Тренажёры', labelEn: 'Practice', icon: '🎯' },
    { id: 'phrasebook', labelRu: 'Разговорник', labelEn: 'Phrases', icon: '💬' },
    { id: 'alphabet', labelRu: 'Алфавит', labelEn: 'Alphabet', icon: '🔤' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white text-[#1E293B] border-b border-slate-200 shadow-sm">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3.5 cursor-pointer" onClick={() => setActiveTab('lessons')}>
            <div className="w-10 h-10 bg-[#0039A6] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-md shadow-blue-800/20">
              Я
            </div>
            <div>
              <div className="flex items-center space-x-2.5">
                <span className="text-2xl font-black tracking-tight text-[#0039A6]">
                  РУСО<span className="text-[#D52B1E]">МИР</span>
                </span>
                <span className="px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider bg-[#0039A6]/10 text-[#0039A6] border border-[#0039A6]/20 rounded-full">
                  Уровень C1
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block font-medium">
                {lang === 'ru' ? 'Академический и профессиональный русский язык (ТРКИ-III)' : 'Advanced C1 Russian (TORFL-3 / Professional)'}
              </p>
            </div>
          </div>

          {/* User Progress Stats & Settings */}
          <div className="flex items-center space-x-2 sm:space-x-3.5">
            {/* Streak */}
            <div
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-amber-50 rounded-full border border-amber-200 text-xs font-bold text-amber-700 shadow-xs"
              title={lang === 'ru' ? 'Дней подряд' : 'Daily streak'}
            >
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
              <span>{progress.streakDays} {lang === 'ru' ? 'дней' : 'days'}</span>
            </div>

            {/* XP Badge */}
            <button
              onClick={() => setActiveTab('progress')}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 cursor-pointer rounded-full border border-emerald-200 text-xs font-bold text-emerald-700 shadow-xs transition-colors"
              title={lang === 'ru' ? 'Открыть статистику прогресса' : 'View progress & statistics'}
            >
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span>{progress.xp} XP</span>
            </button>

            {/* Audio Speed Toggle */}
            <button
              onClick={() => setAudioSpeed(audioSpeed === 1.0 ? 0.75 : 1.0)}
              className="flex items-center space-x-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-full border border-slate-200 text-xs font-semibold text-slate-700 transition-colors"
              title={lang === 'ru' ? 'Скорость озвучки' : 'Speech rate'}
            >
              <Volume2 className="w-3.5 h-3.5 text-slate-500" />
              <span>{audioSpeed}x</span>
            </button>

            {/* Language switch */}
            <button
              onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-[#0039A6] border border-blue-200 rounded-full text-xs font-bold transition-colors"
              title={lang === 'ru' ? 'Переключить язык пояснений' : 'Toggle explanation language'}
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="uppercase">{lang}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Sub-bar */}
      <nav className="bg-[#F8FAFC] border-t border-slate-200 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-1 sm:space-x-2 py-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'text-[#0039A6] bg-white border-b-2 border-[#0039A6] shadow-sm'
                    : 'text-slate-600 hover:text-[#0039A6] hover:bg-white/70'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{lang === 'ru' ? tab.labelRu : tab.labelEn}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
