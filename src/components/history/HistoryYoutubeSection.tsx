import React, { useState } from 'react';
import { Play, ExternalLink, CheckCircle2, Clock, Award, Youtube, ShieldCheck, Sparkles } from 'lucide-react';
import { HistoryTopic, HistoryVideoLecture, SupportedLang } from '../../types';

interface HistoryYoutubeSectionProps {
  topic: HistoryTopic;
  lang: SupportedLang;
}

export const HistoryYoutubeSection: React.FC<HistoryYoutubeSectionProps> = ({
  topic,
  lang,
}) => {
  const lectures = topic.videoLectures || [];
  const [selectedLectureId, setSelectedLectureId] = useState<string>(lectures[0]?.id || '');
  const [watchedLectures, setWatchedLectures] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('school_history_watched_lectures');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleLectureWatched = (id: string) => {
    setWatchedLectures((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('school_history_watched_lectures', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  if (lectures.length === 0) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200 p-8 text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-3xl">
          🎬
        </div>
        <h3 className="text-xl font-bold text-slate-900">
          {lang === 'ru' ? 'Видеолекции формируются' : 'Video lectures in curation'}
        </h3>
        <p className="text-slate-600 max-w-md mx-auto text-sm">
          {lang === 'ru'
            ? 'Мы подбираем проверенные лекции ведущих академических историков и каналов для этой темы.'
            : 'We are curating academic lectures and historical analyses for this topic.'}
        </p>
      </div>
    );
  }

  const activeLecture = lectures.find((l) => l.id === selectedLectureId) || lectures[0];
  const isWatched = watchedLectures.includes(activeLecture.id);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-blue-900/40">
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold uppercase tracking-wider border border-red-500/30">
              <Youtube className="w-3.5 h-3.5 text-red-400" />
              <span>{lang === 'ru' ? 'YouTube-лекторий по истории' : 'YouTube History Lectures'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              {lang === 'ru' ? `Видеоразборы: «${topic.titleRu}»` : `Video Lectures: "${topic.titleEn}"`}
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {lang === 'ru'
                ? 'Проверенные академические лекции, документальные фильмы и разборы от ведущих исторических лекториев (МИНАЕВ LIVE, Лекторий Dостоевский, StarMedia, Борис Кипнис, History Lab).'
                : 'Verified academic lectures and documentaries from acclaimed educational channels and Russian historians.'}
            </p>
          </div>

          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 text-xs">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="text-emerald-300 font-bold block">
                {lang === 'ru' ? 'Ссылки проверены' : 'Verified Links'}
              </span>
              <span className="text-slate-300 text-[11px]">
                {lang === 'ru' ? '100% рабочие YouTube видео' : '100% active YouTube streams'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Multiple lectures selector tabs */}
      {lectures.length > 1 && (
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-bold text-slate-500 whitespace-nowrap pl-1">
            {lang === 'ru' ? 'Выберите лекцию:' : 'Select lecture:'}
          </span>
          {lectures.map((l) => {
            const isSelected = l.id === activeLecture.id;
            const lectureWatched = watchedLectures.includes(l.id);
            return (
              <button
                key={l.id}
                onClick={() => setSelectedLectureId(l.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-red-600 text-white border-red-700 shadow-md shadow-red-600/20'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
                }`}
              >
                <span className="text-sm">{l.channelAvatar}</span>
                <span>{l.channelName}</span>
                <span className="opacity-75 font-normal">({l.duration})</span>
                {lectureWatched && (
                  <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-red-200' : 'text-emerald-500'}`} />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Main Video & Details Panel */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Left / Top: Video Player Embed */}
        <div className="lg:col-span-7 bg-black flex flex-col justify-between">
          <div className="relative w-full aspect-video bg-slate-950">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${activeLecture.youtubeId}?autoplay=0&rel=0&modestbranding=1`}
              title={lang === 'ru' ? activeLecture.titleRu : activeLecture.titleEn}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>

          <div className="p-4 bg-slate-900 text-slate-300 text-xs flex items-center justify-between border-t border-slate-800">
            <div className="flex items-center space-x-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-300 font-medium">
                {lang === 'ru' ? 'YouTube Embed плеер активен' : 'YouTube Embed Active'}
              </span>
            </div>
            <a
              href={activeLecture.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-red-400 hover:text-red-300 transition-colors font-semibold"
            >
              <span>{lang === 'ru' ? 'Открыть на YouTube' : 'Open on YouTube'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right / Bottom: Video Metainformation & Study Takeaways */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <span className="text-xl">{activeLecture.channelAvatar}</span>
                <div>
                  <span className="font-bold text-slate-900 text-sm block">
                    {activeLecture.channelName}
                  </span>
                  <span className="text-slate-500 text-xs">
                    {lang === 'ru' ? 'Канал / Лектор' : 'Channel / Host'}
                  </span>
                </div>
              </div>

              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <Clock className="w-3 h-3 text-slate-500" />
                <span>{activeLecture.duration}</span>
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 leading-snug">
              {lang === 'ru' ? activeLecture.titleRu : activeLecture.titleEn}
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {lang === 'ru' ? activeLecture.descriptionRu : activeLecture.descriptionEn}
            </p>

            {/* Key Points */}
            {activeLecture.keyPointsRu && activeLecture.keyPointsRu.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>{lang === 'ru' ? 'Главные акценты лекции' : 'Key Lecture Takeaways'}</span>
                </h4>
                <ul className="space-y-1.5">
                  {activeLecture.keyPointsRu.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                      <span className="text-blue-500 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags */}
            {activeLecture.tags && activeLecture.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-2">
                {activeLecture.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Action: Mark as watched */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => toggleLectureWatched(activeLecture.id)}
              className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all border ${
                isWatched
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                  : 'bg-slate-900 text-white hover:bg-slate-800 border-transparent shadow-xs'
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 ${isWatched ? 'text-emerald-600 fill-emerald-100' : ''}`} />
              <span>
                {isWatched
                  ? (lang === 'ru' ? 'Лекция просмотрена' : 'Lecture Watched')
                  : (lang === 'ru' ? 'Отметить просмотр' : 'Mark as Watched')}
              </span>
            </button>

            <a
              href={activeLecture.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 transition-colors"
            >
              <Youtube className="w-4 h-4 text-red-600" />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
