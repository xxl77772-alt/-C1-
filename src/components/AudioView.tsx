import React, { useState, useEffect, useRef } from 'react';
import { SupportedLang, AudioDialogue, AudioWord, AudioPhrase } from '../types';
import { AUDIO_DIALOGUES, AUDIO_WORDS, AUDIO_PHRASES } from '../data/audioMaterialsData';
import { playRussianAudio, stopSpeaking } from '../utils/audio';
import {
  Volume2,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Search,
  BookOpen,
  Sliders,
  MessageSquare,
  Type,
  Flame,
  CheckCircle2,
  Info,
  ChevronRight,
} from 'lucide-react';

interface AudioViewProps {
  lang: SupportedLang;
  audioSpeed: number;
  setAudioSpeed: (speed: number) => void;
  onAudioListened: (audioId: string) => void;
  listenedAudios?: string[];
}

export const AudioView: React.FC<AudioViewProps> = ({
  lang,
  audioSpeed,
  setAudioSpeed,
  onAudioListened,
  listenedAudios = [],
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'dialogues' | 'words' | 'phrases'>('dialogues');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Active playing state
  const [currentlyPlayingId, setCurrentlyPlayingId] = useState<string | null>(null);
  const [activeDialogueId, setActiveDialogueId] = useState<string>(AUDIO_DIALOGUES[0].id);
  const [activeLineIndex, setActiveLineIndex] = useState<number | null>(null);
  const [isContinuousPlaying, setIsContinuousPlaying] = useState<boolean>(false);
  const [showTransliteration, setShowTransliteration] = useState<boolean>(true);
  const [showTranslations, setShowTranslations] = useState<boolean>(true);

  // Local playback speed control
  const [localSpeed, setLocalSpeed] = useState<number>(audioSpeed || 0.9);

  // Sync with global audioSpeed
  useEffect(() => {
    if (audioSpeed) setLocalSpeed(audioSpeed);
  }, [audioSpeed]);

  // Clean up speech on unmount
  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  const speeds = [0.5, 0.75, 1.0, 1.25];

  const handlePlaySingle = (id: string, text: string, rate: number = localSpeed) => {
    setIsContinuousPlaying(false);
    if (currentlyPlayingId === id) {
      stopSpeaking();
      setCurrentlyPlayingId(null);
      return;
    }
    setCurrentlyPlayingId(id);
    playRussianAudio(text, rate, () => {
      setCurrentlyPlayingId(null);
      onAudioListened(id);
    });
  };

  const activeDialogue = AUDIO_DIALOGUES.find((d) => d.id === activeDialogueId) || AUDIO_DIALOGUES[0];

  // Play full dialogue sequentially
  const playDialogueSequence = (dialogue: AudioDialogue, startIndex: number = 0) => {
    if (startIndex >= dialogue.lines.length) {
      setIsContinuousPlaying(false);
      setActiveLineIndex(null);
      setCurrentlyPlayingId(null);
      onAudioListened(dialogue.id);
      return;
    }

    setIsContinuousPlaying(true);
    setActiveLineIndex(startIndex);
    const line = dialogue.lines[startIndex];
    setCurrentlyPlayingId(line.id);

    playRussianAudio(line.audioText, localSpeed, () => {
      // Pause slightly between turns for natural conversation flow
      setTimeout(() => {
        playDialogueSequence(dialogue, startIndex + 1);
      }, 700);
    });
  };

  const handleStopAll = () => {
    stopSpeaking();
    setCurrentlyPlayingId(null);
    setIsContinuousPlaying(false);
    setActiveLineIndex(null);
  };

  // Filtered lists
  const filteredDialogues = AUDIO_DIALOGUES.filter((d) => {
    const matchesSearch =
      d.titleRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.situationRu.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'all' || d.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const filteredWords = AUDIO_WORDS.filter((w) => {
    const matchesSearch =
      w.wordRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.translationEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.exampleSentenceRu.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'all' || w.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const filteredPhrases = AUDIO_PHRASES.filter((p) => {
    const matchesSearch =
      p.phraseRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.translationEn.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-800/40 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold uppercase tracking-wider">
              <Volume2 className="w-3.5 h-3.5 text-blue-300" />
              <span>{lang === 'ru' ? 'Аудиоматериалы и произношение' : 'Audio Hub & Pronunciation'}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              {lang === 'ru' ? 'Раздел с аудиоматериалами' : 'Russian Audio Materials'}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {lang === 'ru'
                ? 'Слушайте живую русскую речь: короткие диалоги по ролям, сложные слова со стечением согласных и контрастными ударениями, а также скороговорки с регулируемой скоростью воспроизведения.'
                : 'Listen to native Russian audio: situational roleplay dialogues, difficult words with consonant clusters & stress pairs, and phonetic tongue twisters with variable playback speeds.'}
            </p>
          </div>

          {/* Master Speed Controller & Stats */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex flex-col space-y-3 min-w-[240px]">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-200">
              <span className="flex items-center space-x-1.5">
                <Sliders className="w-3.5 h-3.5 text-blue-300" />
                <span>{lang === 'ru' ? 'Темп речи' : 'Speech rate'}</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-blue-500/30 text-blue-200 font-mono text-xs">
                {localSpeed}x
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {speeds.map((rate) => (
                <button
                  key={rate}
                  onClick={() => {
                    setLocalSpeed(rate);
                    setAudioSpeed(rate);
                  }}
                  className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                    localSpeed === rate
                      ? 'bg-blue-500 text-white shadow-md shadow-blue-500/40'
                      : 'bg-white/10 hover:bg-white/20 text-slate-300'
                  }`}
                >
                  {rate}x
                </button>
              ))}
            </div>
            <div className="text-[11px] text-slate-300/80 pt-1 border-t border-white/10 flex items-center justify-between">
              <span>{lang === 'ru' ? 'Прослушано материалов:' : 'Audios listened:'}</span>
              <span className="font-bold text-emerald-300">{listenedAudios.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-tabs Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0">
          <button
            onClick={() => {
              setActiveSubTab('dialogues');
              setSelectedCategory('all');
            }}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeSubTab === 'dialogues'
                ? 'bg-[#0039A6] text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>{lang === 'ru' ? 'Короткие диалоги' : 'Short Dialogues'}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${activeSubTab === 'dialogues' ? 'bg-blue-700' : 'bg-slate-100 text-slate-600'}`}>
              {AUDIO_DIALOGUES.length}
            </span>
          </button>

          <button
            onClick={() => {
              setActiveSubTab('words');
              setSelectedCategory('all');
            }}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeSubTab === 'words'
                ? 'bg-[#0039A6] text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Type className="w-4 h-4" />
            <span>{lang === 'ru' ? 'Отдельные слова' : 'Individual Words'}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${activeSubTab === 'words' ? 'bg-blue-700' : 'bg-slate-100 text-slate-600'}`}>
              {AUDIO_WORDS.length}
            </span>
          </button>

          <button
            onClick={() => {
              setActiveSubTab('phrases');
              setSelectedCategory('all');
            }}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
              activeSubTab === 'phrases'
                ? 'bg-[#0039A6] text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Flame className="w-4 h-4 text-amber-500" />
            <span>{lang === 'ru' ? 'Фразы и скороговорки' : 'Phrases & Tongue Twisters'}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${activeSubTab === 'phrases' ? 'bg-blue-700' : 'bg-slate-100 text-slate-600'}`}>
              {AUDIO_PHRASES.length}
            </span>
          </button>
        </div>

        {/* Global Helpers */}
        <div className="flex items-center space-x-3 text-xs">
          <label className="flex items-center space-x-1.5 text-slate-600 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={showTransliteration}
              onChange={(e) => setShowTransliteration(e.target.checked)}
              className="rounded text-[#0039A6] focus:ring-blue-500"
            />
            <span>{lang === 'ru' ? 'Транслитерация' : 'Transliteration'}</span>
          </label>
          <label className="flex items-center space-x-1.5 text-slate-600 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={showTranslations}
              onChange={(e) => setShowTranslations(e.target.checked)}
              className="rounded text-[#0039A6] focus:ring-blue-500"
            />
            <span>{lang === 'ru' ? 'Перевод' : 'Translations'}</span>
          </label>
        </div>
      </div>

      {/* SUB-TAB 1: SHORT DIALOGUES */}
      {activeSubTab === 'dialogues' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Dialogue selector column */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
              {lang === 'ru' ? 'Выберите тему диалога' : 'Select Dialogue Topic'}
            </h3>
            <div className="space-y-2">
              {AUDIO_DIALOGUES.map((dlg) => {
                const isSelected = dlg.id === activeDialogue.id;
                const isListened = listenedAudios.includes(dlg.id);
                return (
                  <button
                    key={dlg.id}
                    onClick={() => {
                      handleStopAll();
                      setActiveDialogueId(dlg.id);
                    }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all ${
                      isSelected
                        ? 'bg-blue-50/80 border-[#0039A6] shadow-sm'
                        : 'bg-white hover:bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-extrabold px-2 py-0.5 rounded bg-blue-100 text-[#0039A6]">
                            {dlg.level}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">
                            {dlg.lines.length} {lang === 'ru' ? 'реплик' : 'lines'}
                          </span>
                          {isListened && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          )}
                        </div>
                        <h4 className="font-bold text-sm text-slate-800 line-clamp-1">
                          {dlg.titleRu}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          {lang === 'ru' ? dlg.situationRu : dlg.situationEn}
                        </p>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 mt-1 transition-transform ${
                          isSelected ? 'text-[#0039A6] translate-x-1' : 'text-slate-400'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Dialogue Player */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            {/* Player Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
              <div>
                <div className="flex items-center space-x-2.5 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0039A6] font-bold text-xs uppercase">
                    {activeDialogue.level}
                  </span>
                  <span className="text-xs text-slate-500">
                    {activeDialogue.lines.length} {lang === 'ru' ? 'реплик носителей языка' : 'native speech lines'}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  {activeDialogue.titleRu}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  {lang === 'ru' ? activeDialogue.situationRu : activeDialogue.situationEn}
                </p>
              </div>

              {/* Master Dialogue Control Buttons */}
              <div className="flex items-center space-x-2">
                {isContinuousPlaying ? (
                  <button
                    onClick={handleStopAll}
                    className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition-all"
                  >
                    <Pause className="w-4 h-4" />
                    <span>{lang === 'ru' ? 'Пауза' : 'Pause'}</span>
                  </button>
                ) : (
                  <button
                    onClick={() => playDialogueSequence(activeDialogue, 0)}
                    className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-[#0039A6] hover:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-800/20 transition-all"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>{lang === 'ru' ? 'Слушать весь диалог' : 'Play Full Dialogue'}</span>
                  </button>
                )}

                <button
                  onClick={handleStopAll}
                  className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  title={lang === 'ru' ? 'Сброс' : 'Reset'}
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Dialogue Turns */}
            <div className="space-y-4">
              {activeDialogue.lines.map((line, idx) => {
                const isPlaying = currentlyPlayingId === line.id;
                const isCurrentInSequence = activeLineIndex === idx;

                return (
                  <div
                    key={line.id}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                      isCurrentInSequence || isPlaying
                        ? 'bg-blue-50/90 border-blue-400 shadow-md ring-2 ring-blue-400/20'
                        : 'bg-[#F8FAFC] border-slate-200 hover:bg-slate-100/70'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      {/* Speaker Identity */}
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center text-xl shrink-0">
                          {line.avatar}
                        </div>
                        <div>
                          <span className="text-xs font-bold text-slate-900 block">
                            {line.speaker}
                          </span>
                          <span className="text-[11px] text-slate-500 font-medium block">
                            {lang === 'ru' ? line.speakerRoleRu : line.speakerRoleEn}
                          </span>
                        </div>
                      </div>

                      {/* Line Audio Playback controls with tempo */}
                      <div className="flex items-center space-x-2 shrink-0">
                        {speeds.map((rate) => (
                          <button
                            key={rate}
                            onClick={() => handlePlaySingle(line.id, line.audioText, rate)}
                            className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all ${
                              isPlaying && localSpeed === rate
                                ? 'bg-[#0039A6] text-white shadow-xs'
                                : 'bg-white hover:bg-blue-50 text-slate-600 border border-slate-200'
                            }`}
                            title={`${lang === 'ru' ? 'Прослушать с темпом' : 'Play at'} ${rate}x`}
                          >
                            {rate}x
                          </button>
                        ))}

                        <button
                          onClick={() => handlePlaySingle(line.id, line.audioText, localSpeed)}
                          className={`p-2 rounded-xl transition-all ${
                            isPlaying
                              ? 'bg-[#0039A6] text-white animate-pulse'
                              : 'bg-white hover:bg-blue-50 text-[#0039A6] border border-slate-200 shadow-xs'
                          }`}
                          title={lang === 'ru' ? 'Озвучить реплику' : 'Speak line'}
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Speech Text Content */}
                    <div className="mt-3.5 space-y-1.5 pl-1">
                      <p className="text-base sm:text-lg font-bold text-slate-900 tracking-wide font-serif">
                        {line.stressRu}
                      </p>

                      {showTransliteration && (
                        <p className="text-xs font-medium text-blue-700/80 italic font-mono">
                          {line.transliteration}
                        </p>
                      )}

                      {showTranslations && (
                        <p className="text-xs sm:text-sm text-slate-600">
                          {line.textEn}
                        </p>
                      )}

                      {line.note && (
                        <div className="inline-flex items-center space-x-1.5 mt-1 px-2.5 py-1 bg-amber-50 rounded-lg text-[11px] text-amber-800 border border-amber-200/60 font-medium">
                          <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{line.note}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 2: INDIVIDUAL WORDS */}
      {activeSubTab === 'words' && (
        <div className="space-y-6">
          {/* Category filter bar */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', labelRu: 'Все слова C1', labelEn: 'All C1 Words' },
              { id: 'orthoepy', labelRu: 'Орфоэпия и ударения', labelEn: 'Orthoepy & Stress' },
              { id: 'academic', labelRu: 'Академическая лексика', labelEn: 'Academic Discourse' },
              { id: 'paronyms', labelRu: 'Паронимы на слух', labelEn: 'Paronyms Contrast' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#0039A6] text-white shadow-xs'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                {lang === 'ru' ? cat.labelRu : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Words Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredWords.map((word) => {
              const isPlaying = currentlyPlayingId === word.id;
              const isListened = listenedAudios.includes(word.id);

              return (
                <div
                  key={word.id}
                  className={`bg-white rounded-2xl p-5 border transition-all ${
                    isPlaying
                      ? 'border-[#0039A6] ring-2 ring-blue-500/20 shadow-md'
                      : 'border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl sm:text-2xl font-black text-slate-900 font-serif tracking-wide">
                          {word.stressRu}
                        </span>
                        {isListened && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        )}
                      </div>

                      {showTransliteration && (
                        <p className="text-xs font-mono text-blue-700 font-semibold">
                          {word.transliteration}
                        </p>
                      )}

                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {word.partOfSpeech}
                      </p>
                    </div>

                    {/* Speed play pills */}
                    <div className="flex items-center space-x-1">
                      {speeds.map((rate) => (
                        <button
                          key={rate}
                          onClick={() => handlePlaySingle(word.id, word.wordRu, rate)}
                          className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all ${
                            isPlaying && localSpeed === rate
                              ? 'bg-[#0039A6] text-white'
                              : 'bg-slate-100 hover:bg-blue-50 text-slate-700'
                          }`}
                          title={`${lang === 'ru' ? 'Темп' : 'Speed'} ${rate}x`}
                        >
                          {rate}x
                        </button>
                      ))}
                      <button
                        onClick={() => handlePlaySingle(word.id, word.wordRu, localSpeed)}
                        className={`p-2 rounded-xl transition-all ${
                          isPlaying
                            ? 'bg-[#0039A6] text-white animate-pulse'
                            : 'bg-blue-50 hover:bg-blue-100 text-[#0039A6]'
                        }`}
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Meaning & Tip */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                    <p className="text-xs sm:text-sm font-semibold text-slate-700">
                      {word.translationEn}
                    </p>

                    <div className="bg-amber-50/70 rounded-xl p-3 border border-amber-200/50">
                      <p className="text-xs text-amber-900 font-medium">
                        💡 {lang === 'ru' ? word.phoneticTipRu : word.phoneticTipEn}
                      </p>
                    </div>

                    {/* Example sentence */}
                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex items-center justify-between gap-2">
                      <div className="space-y-0.5">
                        <p className="text-xs font-bold text-slate-800">
                          {word.exampleSentenceRu}
                        </p>
                        {showTranslations && (
                          <p className="text-[11px] text-slate-500">
                            {word.exampleSentenceEn}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => handlePlaySingle(`ex-${word.id}`, word.exampleSentenceRu, localSpeed)}
                        className="p-1.5 rounded-lg bg-white hover:bg-slate-200 text-slate-700 border border-slate-200 shrink-0"
                        title={lang === 'ru' ? 'Озвучить пример' : 'Play example'}
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SUB-TAB 3: PHRASES & TONGUE TWISTERS */}
      {activeSubTab === 'phrases' && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', labelRu: 'Все фразы', labelEn: 'All Items' },
              { id: 'twisters', labelRu: 'Скороговорки', labelEn: 'Tongue Twisters' },
              { id: 'idioms', labelRu: 'Идиомы и культура', labelEn: 'Idioms & Culture' },
              { id: 'politeness', labelRu: 'Вежливость', labelEn: 'Polite Expressions' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#0039A6] text-white shadow-xs'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                }`}
              >
                {lang === 'ru' ? cat.labelRu : cat.labelEn}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPhrases.map((phrase) => {
              const isPlaying = currentlyPlayingId === phrase.id;
              const isTwister = phrase.category === 'twisters';
              const isListened = listenedAudios.includes(phrase.id);

              return (
                <div
                  key={phrase.id}
                  className={`bg-white rounded-2xl p-5 border transition-all ${
                    isPlaying
                      ? 'border-[#0039A6] ring-2 ring-blue-500/20 shadow-md'
                      : 'border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            isTwister
                              ? 'bg-amber-100 text-amber-800'
                              : 'bg-indigo-100 text-indigo-800'
                          }`}
                        >
                          {isTwister
                            ? lang === 'ru'
                              ? 'Скороговорка'
                              : 'Tongue Twister'
                            : lang === 'ru'
                            ? 'Выражение'
                            : 'Expression'}
                        </span>
                        {isListened && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        )}
                      </div>
                      <h3 className="text-lg font-black text-slate-900 font-serif leading-snug">
                        {phrase.stressRu}
                      </h3>
                      {showTransliteration && (
                        <p className="text-xs font-mono text-blue-700 font-medium">
                          {phrase.transliteration}
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => handlePlaySingle(phrase.id, phrase.phraseRu, localSpeed)}
                      className={`p-3 rounded-2xl transition-all shrink-0 ${
                        isPlaying
                          ? 'bg-[#0039A6] text-white shadow-md'
                          : 'bg-blue-50 hover:bg-blue-100 text-[#0039A6]'
                      }`}
                    >
                      <Volume2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Playback speed buttons */}
                  <div className="mt-4 flex items-center space-x-2 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-500">
                      {lang === 'ru' ? 'Режимы скорости:' : 'Speed modes:'}
                    </span>
                    <button
                      onClick={() => handlePlaySingle(phrase.id, phrase.phraseRu, 0.6)}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                    >
                      🐢 0.6x ({lang === 'ru' ? 'Медленно' : 'Slow'})
                    </button>
                    <button
                      onClick={() => handlePlaySingle(phrase.id, phrase.phraseRu, 1.0)}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                    >
                      🗣️ 1.0x ({lang === 'ru' ? 'Норма' : 'Normal'})
                    </button>
                    {isTwister && (
                      <button
                        onClick={() => handlePlaySingle(phrase.id, phrase.phraseRu, 1.25)}
                        className="px-2.5 py-1 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 text-xs font-bold transition-colors"
                      >
                        ⚡ 1.25x ({lang === 'ru' ? 'Быстро' : 'Fast'})
                      </button>
                    )}
                  </div>

                  {/* Cultural note / translation */}
                  <div className="mt-3 space-y-2">
                    <p className="text-xs sm:text-sm font-semibold text-slate-700">
                      {phrase.translationEn}
                    </p>
                    {phrase.culturalNoteRu && (
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
                        {lang === 'ru' ? phrase.culturalNoteRu : phrase.culturalNoteEn}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
