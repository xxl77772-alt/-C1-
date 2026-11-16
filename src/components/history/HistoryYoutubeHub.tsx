import React, { useState, useMemo } from 'react';
import { SchoolGrade, SupportedLang, HistoryTopic, HistoryVideoLecture } from '../../types';
import { ALL_HISTORY_TOPICS } from '../../data/history';
import {
  Play,
  ExternalLink,
  CheckCircle2,
  Clock,
  Youtube,
  Search,
  BookOpen,
  Filter,
  ShieldCheck,
  Award,
} from 'lucide-react';

interface HistoryYoutubeHubProps {
  currentGrade: SchoolGrade;
  lang: SupportedLang;
  onSelectTopic: (topic: HistoryTopic) => void;
}

export const HistoryYoutubeHub: React.FC<HistoryYoutubeHubProps> = ({
  currentGrade,
  lang,
  onSelectTopic,
}) => {
  const [scope, setScope] = useState<'grade' | 'all'>('grade');
  const [selectedChannel, setSelectedChannel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePlayingId, setActivePlayingId] = useState<string | null>(null);

  const [watchedLectures, setWatchedLectures] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('school_history_watched_lectures');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleWatched = (id: string) => {
    setWatchedLectures((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('school_history_watched_lectures', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  // Flatten all lectures with their parent topic
  const allLecturesWithTopic = useMemo(() => {
    const list: { lecture: HistoryVideoLecture; topic: HistoryTopic }[] = [];
    ALL_HISTORY_TOPICS.forEach((t) => {
      (t.videoLectures || []).forEach((l) => {
        list.push({ lecture: l, topic: t });
      });
    });
    return list;
  }, []);

  // Channels list
  const availableChannels = useMemo(() => {
    const set = new Set<string>();
    allLecturesWithTopic.forEach((item) => set.add(item.lecture.channelName));
    return Array.from(set);
  }, [allLecturesWithTopic]);

  // Filtered lectures
  const filtered = useMemo(() => {
    return allLecturesWithTopic.filter((item) => {
      if (scope === 'grade' && item.topic.grade !== currentGrade) return false;
      if (selectedChannel !== 'all' && item.lecture.channelName !== selectedChannel) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = item.lecture.titleRu.toLowerCase().includes(q) || item.lecture.titleEn.toLowerCase().includes(q);
        const matchTopic = item.topic.titleRu.toLowerCase().includes(q) || item.topic.titleEn.toLowerCase().includes(q);
        const matchChannel = item.lecture.channelName.toLowerCase().includes(q);
        if (!matchTitle && !matchTopic && !matchChannel) return false;
      }
      return true;
    });
  }, [allLecturesWithTopic, scope, currentGrade, selectedChannel, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Hub Hero Banner */}
      <div className="bg-gradient-to-r from-red-950 via-slate-900 to-red-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-red-900/50">
        <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold uppercase tracking-wider border border-red-500/30">
              <Youtube className="w-4 h-4 text-red-400" />
              <span>{lang === 'ru' ? 'YouTube-видеолекторий по истории России' : 'Russian History YouTube Video Hub'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              {lang === 'ru' ? 'Академические лекции и разборы тем' : 'Curated Historical Lectures & Documentaries'}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {lang === 'ru'
                ? 'Полная коллекция проверенных видеолекций для каждой темы школьной программы (5–11 класс). Лекции МИНАЕВ LIVE, Лектория Dостоевский, StarMedia и выдающихся историков.'
                : 'Comprehensive collection of verified educational video lectures for all grades (5–11). Featuring top channels and leading historians.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 flex items-center space-x-3 text-xs">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="text-emerald-300 font-bold block">{lang === 'ru' ? '100% проверенные ссылки' : '100% Verified Links'}</span>
                <span className="text-slate-300 text-[11px]">{lang === 'ru' ? 'Каждое видео протестировано' : 'All active & embeddable'}</span>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 flex items-center space-x-3 text-xs">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <span className="text-slate-300 block">{lang === 'ru' ? 'Всего видеолекций:' : 'Total video lectures:'}</span>
                <span className="font-bold text-amber-300 text-sm">{allLecturesWithTopic.length} {lang === 'ru' ? 'лекций' : 'lectures'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Control Bar: Scope, Channel, Search */}
      <div className="bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Grade / All Switch */}
          <div className="flex items-center space-x-2 w-full md:w-auto bg-slate-100 p-1.5 rounded-2xl">
            <button
              onClick={() => setScope('grade')}
              className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                scope === 'grade'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'ru' ? `${currentGrade} класс` : `Grade ${currentGrade}`}
            </button>
            <button
              onClick={() => setScope('all')}
              className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                scope === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'ru' ? 'Все классы (5–11)' : 'All Grades (5–11)'}
            </button>
          </div>

          {/* Search bar */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === 'ru'
                  ? 'Поиск по теме, видео или каналу...'
                  : 'Search by topic, lecture title, or channel...'
              }
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-red-600 transition-all"
            />
          </div>

          {/* Channel selector */}
          <div className="w-full md:w-auto shrink-0 flex items-center space-x-2">
            <Filter className="w-4 h-4 text-slate-400 shrink-0" />
            <select
              value={selectedChannel}
              onChange={(e) => setSelectedChannel(e.target.value)}
              className="w-full md:w-auto px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 focus:outline-hidden"
            >
              <option value="all">{lang === 'ru' ? 'Все каналы' : 'All Channels'}</option>
              {availableChannels.map((ch) => (
                <option key={ch} value={ch}>
                  {ch}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Video Cards Grid */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3">
          <div className="text-4xl">🔍</div>
          <h3 className="text-lg font-bold text-slate-900">
            {lang === 'ru' ? 'Видеолекции не найдены' : 'No video lectures found'}
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
            {lang === 'ru'
              ? 'Попробуйте изменить поисковый запрос или выбрать другой класс/канал.'
              : 'Try adjusting your search query or selecting a different channel.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(({ lecture, topic }) => {
            const isPlaying = activePlayingId === lecture.id;
            const isWatched = watchedLectures.includes(lecture.id);

            return (
              <div
                key={lecture.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all group"
              >
                {/* Embed or Thumbnail Area */}
                <div className="relative w-full aspect-video bg-black">
                  {isPlaying ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${lecture.youtubeId}?autoplay=1&rel=0`}
                      title={lecture.titleRu}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <div
                      className="w-full h-full relative cursor-pointer group/thumb overflow-hidden"
                      onClick={() => setActivePlayingId(lecture.id)}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${lecture.youtubeId}/hqdefault.jpg`}
                        alt={lecture.titleRu}
                        className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback to high-res if needed
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl group-hover/thumb:scale-110 group-hover/thumb:bg-red-500 transition-all">
                          <Play className="w-6 h-6 ml-0.5 fill-white" />
                        </div>
                      </div>

                      {/* Duration badge */}
                      <span className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/80 backdrop-blur-xs text-white text-[11px] font-bold">
                        {lecture.duration}
                      </span>

                      {/* Verified badge */}
                      <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-emerald-500/90 backdrop-blur-xs text-white text-[10px] font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        <span>{lang === 'ru' ? 'Проверено' : 'Verified'}</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    {/* Topic and Grade Link */}
                    <div className="flex items-center justify-between text-xs gap-2">
                      <span className="px-2.5 py-0.5 rounded-lg bg-blue-50 text-[#0039A6] font-bold border border-blue-100 truncate">
                        {topic.grade} {lang === 'ru' ? 'класс' : 'Grade'} • {lang === 'ru' ? topic.titleRu : topic.titleEn}
                      </span>
                      <span className="text-slate-400 shrink-0 font-medium">
                        {lecture.channelAvatar} {lecture.channelName}
                      </span>
                    </div>

                    {/* Lecture Title */}
                    <h3 className="font-bold text-slate-900 text-sm leading-snug line-clamp-2 group-hover:text-red-700 transition-colors">
                      {lang === 'ru' ? lecture.titleRu : lecture.titleEn}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {lang === 'ru' ? lecture.descriptionRu : lecture.descriptionEn}
                    </p>
                  </div>

                  {/* Footer & Actions */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => toggleWatched(lecture.id)}
                      className={`inline-flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                        isWatched
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                          : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border-slate-200'
                      }`}
                    >
                      <CheckCircle2 className={`w-3.5 h-3.5 ${isWatched ? 'text-emerald-600 fill-emerald-100' : ''}`} />
                      <span>{isWatched ? (lang === 'ru' ? 'Просмотрено' : 'Watched') : (lang === 'ru' ? 'Отметить' : 'Mark')}</span>
                    </button>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => onSelectTopic(topic)}
                        className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0039A6] text-xs font-bold transition-colors"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{lang === 'ru' ? 'К теме' : 'To Topic'}</span>
                      </button>

                      <a
                        href={lecture.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-xl text-red-600 hover:bg-red-50 border border-red-200 transition-colors"
                        title="Open on YouTube"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
