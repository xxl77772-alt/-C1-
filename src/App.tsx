import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { AlphabetView } from './components/AlphabetView';
import { LessonsView } from './components/LessonsView';
import { FlashcardsView } from './components/FlashcardsView';
import { GrammarView } from './components/GrammarView';
import { TrainersView } from './components/TrainersView';
import { PhrasebookView } from './components/PhrasebookView';
import { AudioView } from './components/AudioView';
import { ExercisesView } from './components/ExercisesView';
import { ProgressView } from './components/ProgressView';
import { LiteratureView } from './components/LiteratureView';
import { HistoryView } from './components/HistoryView';
import { CalendarView } from './components/CalendarView';
import {
  loadProgress,
  saveProgress,
  addXP,
  recordLessonCompletion,
  recordExerciseCompletion,
  recordAudioListened,
  recordLiteratureWorkStudied,
  toggleFavoriteLiteratureWork,
  recordLiteratureQuiz,
  recordLiteratureVideoWatched,
  recordHistoryTopicStudied,
  toggleFavoriteHistoryTopic,
  recordHistoryQuizScore,
  resetProgress,
} from './utils/storage';
import { UserProgress, SupportedLang } from './types';
import { Sparkles, Trophy, BookOpen, Heart, ArrowUpRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('lessons');
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null);
  const [selectedLiteratureWorkId, setSelectedLiteratureWorkId] = useState<string | null>(null);
  const [progress, setProgress] = useState<UserProgress>(loadProgress());
  const [lang, setLang] = useState<SupportedLang>('ru');
  const [audioSpeed, setAudioSpeed] = useState<number>(1.0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync progress
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleEarnXP = (amount: number) => {
    setProgress((prev) => {
      const next = addXP(amount, prev);
      return next;
    });
    showToast(`+${amount} XP!`);
  };

  const handleCompleteLesson = (
    lessonId: string,
    earnedXP: number,
    score?: number,
    totalQuestions?: number
  ) => {
    setProgress((prev) => {
      const updated = recordLessonCompletion(lessonId, earnedXP, score, totalQuestions, prev);
      return updated;
    });
    showToast(
      lang === 'ru'
        ? `Урок пройден! +${earnedXP} XP!`
        : `Lesson completed! +${earnedXP} XP!`
    );
  };

  const handleCompleteExercise = (
    exerciseId: string,
    type: 'fill-blank' | 'case-agreement' | 'sentence-build',
    isCorrect: boolean
  ) => {
    setProgress((prev) => {
      const updated = recordExerciseCompletion(exerciseId, type, isCorrect, prev);
      return updated;
    });
    if (isCorrect) {
      showToast(lang === 'ru' ? 'Верно! +10 XP' : 'Correct! +10 XP');
    }
  };

  const handleAudioListened = (audioId: string) => {
    setProgress((prev) => {
      const updated = recordAudioListened(audioId, prev);
      return updated;
    });
    showToast(lang === 'ru' ? 'Аудио прослушано! +5 XP' : 'Audio track listened! +5 XP');
  };

  const handleRecordWorkStudied = (workId: string) => {
    setProgress((prev) => {
      const updated = recordLiteratureWorkStudied(workId, prev);
      return updated;
    });
    showToast(lang === 'ru' ? 'Произведение изучено! +25 XP' : 'Work studied! +25 XP');
  };

  const handleToggleFavoriteWork = (workId: string) => {
    setProgress((prev) => {
      const updated = toggleFavoriteLiteratureWork(workId, prev);
      return updated;
    });
    showToast(lang === 'ru' ? 'Список чтения обновлён' : 'Reading list updated');
  };

  const handleRecordQuizScore = (
    workId: string,
    workTitleRu: string,
    workTitleEn: string,
    score: number,
    total: number
  ) => {
    setProgress((prev) => {
      const updated = recordLiteratureQuiz(workId, workTitleRu, workTitleEn, score, total, prev);
      return updated;
    });
    showToast(
      lang === 'ru'
        ? `Тест по литературе сдан: ${score}/${total}! +${score * 15} XP`
        : `Literature quiz passed: ${score}/${total}! +${score * 15} XP`
    );
  };

  const handleRecordVideoWatched = (videoId: string) => {
    setProgress((prev) => {
      const updated = recordLiteratureVideoWatched(videoId, prev);
      return updated;
    });
    showToast(lang === 'ru' ? 'Видеорецензия просмотрена! +15 XP' : 'Video review watched! +15 XP');
  };

  const handleRecordHistoryTopicStudied = (topicId: string) => {
    setProgress((prev) => {
      const updated = recordHistoryTopicStudied(topicId, prev);
      return updated;
    });
    showToast(lang === 'ru' ? 'Тема по истории изучена! +25 XP' : 'History topic studied! +25 XP');
  };

  const handleToggleFavoriteHistoryTopic = (topicId: string) => {
    setProgress((prev) => {
      const updated = toggleFavoriteHistoryTopic(topicId, prev);
      return updated;
    });
    showToast(lang === 'ru' ? 'Список тем обновлён' : 'Topic bookmarks updated');
  };

  const handleRecordHistoryQuizScore = (
    topicId: string,
    topicTitleRu: string,
    topicTitleEn: string,
    score: number,
    total: number
  ) => {
    setProgress((prev) => {
      const updated = recordHistoryQuizScore(topicId, topicTitleRu, topicTitleEn, score, total, prev);
      return updated;
    });
    showToast(
      lang === 'ru'
        ? `Тест по истории сдан: ${score}/${total}! +${score * 15} XP`
        : `History quiz passed: ${score}/${total}! +${score * 15} XP`
    );
  };

  const handleResetProgress = () => {
    const fresh = resetProgress();
    setProgress(fresh);
    showToast(lang === 'ru' ? 'Прогресс успешно сброшен' : 'Progress successfully reset');
  };

  const handleNavigateToLesson = (lessonId: string) => {
    setSelectedLessonId(lessonId);
    setActiveTab('lessons');
  };

  const handleToggleMastered = (cardId: string) => {
    setProgress((prev) => {
      const isAlready = prev.masteredCards.includes(cardId);
      const next = isAlready
        ? prev.masteredCards.filter((id) => id !== cardId)
        : [...prev.masteredCards, cardId];
      const updated = { ...prev, masteredCards: next };
      saveProgress(updated);
      return updated;
    });
  };

  const handleToggleBookmark = (cardId: string) => {
    setProgress((prev) => {
      const isBookmarked = prev.bookmarkedCards.includes(cardId);
      const next = isBookmarked
        ? prev.bookmarkedCards.filter((id) => id !== cardId)
        : [...prev.bookmarkedCards, cardId];
      const updated = { ...prev, bookmarkedCards: next };
      saveProgress(updated);
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-[#EFF6FF] text-[#1E293B] flex flex-col font-sans selection:bg-blue-100 selection:text-[#0039A6]">
      {/* Floating XP Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1E293B] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center space-x-2.5 border border-slate-700 animate-bounce">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Main Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          if (tab !== 'lessons') {
            setSelectedLessonId(null);
          }
          setActiveTab(tab);
        }}
        progress={progress}
        lang={lang}
        setLang={setLang}
        audioSpeed={audioSpeed}
        setAudioSpeed={setAudioSpeed}
      />

      {/* Motivational Daily Proverb Bar */}
      <div className="bg-white/80 backdrop-blur-sm text-slate-600 text-xs py-2.5 px-4 border-b border-slate-200 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 truncate">
            <span className="font-bold text-[#D52B1E] uppercase tracking-wider text-[11px] bg-[#D52B1E]/10 px-2 py-0.5 rounded-md">
              💡 {lang === 'ru' ? 'Пословица дня' : 'Daily Proverb'}
            </span>
            <span className="italic truncate text-slate-800 font-medium">
              «Повторение — мать учения» (Repetition is the mother of learning)
            </span>
          </div>
          <div className="hidden sm:flex items-center space-x-3 text-slate-500 shrink-0 font-medium">
            <button
              onClick={() => setActiveTab('progress')}
              className="hover:text-[#0039A6] transition-colors flex items-center space-x-1.5"
            >
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>
                {lang === 'ru'
                  ? `Уроков пройдено: ${progress.completedLessons.length}`
                  : `Completed Lessons: ${progress.completedLessons.length}`}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'lessons' && (
          <LessonsView
            lang={lang}
            audioSpeed={audioSpeed}
            completedLessons={progress.completedLessons}
            initialLessonId={selectedLessonId}
            onCompleteLesson={handleCompleteLesson}
          />
        )}

        {activeTab === 'history' && (
          <HistoryView
            lang={lang}
            audioSpeed={audioSpeed}
            progress={progress}
            onRecordTopicStudied={handleRecordHistoryTopicStudied}
            onToggleFavoriteTopic={handleToggleFavoriteHistoryTopic}
            onRecordQuizScore={handleRecordHistoryQuizScore}
          />
        )}

        {activeTab === 'calendar' && (
          <CalendarView
            lang={lang}
            progress={progress}
            onUpdateProgress={(updated) => setProgress(updated)}
            onNavigateToLiteratureWork={(workId) => {
              setSelectedLiteratureWorkId(workId);
              setActiveTab('literature');
            }}
            onEarnXP={handleEarnXP}
          />
        )}

        {activeTab === 'literature' && (
          <LiteratureView
            lang={lang}
            audioSpeed={audioSpeed}
            progress={progress}
            initialWorkId={selectedLiteratureWorkId}
            onRecordWorkStudied={handleRecordWorkStudied}
            onToggleFavoriteWork={handleToggleFavoriteWork}
            onRecordQuizScore={handleRecordQuizScore}
            onRecordVideoWatched={handleRecordVideoWatched}
            onNavigateToCalendar={() => setActiveTab('calendar')}
          />
        )}

        {activeTab === 'exercises' && (
          <ExercisesView
            lang={lang}
            audioSpeed={audioSpeed}
            onCompleteExercise={handleCompleteExercise}
            completedExercises={progress.completedExercises}
          />
        )}

        {activeTab === 'audio' && (
          <AudioView
            lang={lang}
            audioSpeed={audioSpeed}
            onAudioListened={handleAudioListened}
            listenedAudios={progress.listenedAudios}
          />
        )}

        {activeTab === 'progress' && (
          <ProgressView
            progress={progress}
            lang={lang}
            onResetProgress={handleResetProgress}
            onNavigateToLesson={handleNavigateToLesson}
            onNavigateToTab={(tab) => setActiveTab(tab)}
          />
        )}

        {activeTab === 'grammar' && (
          <GrammarView lang={lang} audioSpeed={audioSpeed} onEarnXP={handleEarnXP} />
        )}

        {activeTab === 'flashcards' && (
          <FlashcardsView
            lang={lang}
            audioSpeed={audioSpeed}
            masteredCards={progress.masteredCards}
            bookmarkedCards={progress.bookmarkedCards}
            onToggleMastered={handleToggleMastered}
            onToggleBookmark={handleToggleBookmark}
            onEarnXP={handleEarnXP}
          />
        )}

        {activeTab === 'trainers' && (
          <TrainersView lang={lang} audioSpeed={audioSpeed} onEarnXP={handleEarnXP} />
        )}

        {activeTab === 'phrasebook' && (
          <PhrasebookView lang={lang} audioSpeed={audioSpeed} />
        )}

        {activeTab === 'alphabet' && (
          <AlphabetView lang={lang} audioSpeed={audioSpeed} onEarnXP={handleEarnXP} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 px-4 sm:px-6 lg:px-8 mt-12 text-xs text-slate-500 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 rounded-lg bg-[#0039A6] text-white font-bold text-sm flex items-center justify-center shadow-xs">
              Я
            </div>
            <span className="font-bold text-slate-800 text-sm">
              РУСО<span className="text-[#D52B1E]">МИР</span>
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-medium">
              {lang === 'ru' ? 'Интерактивное изучение русского языка' : 'Interactive Russian Language Platform'}
            </span>
          </div>

          <div className="flex items-center space-x-5 text-slate-600 font-medium">
            <button
              onClick={() => setActiveTab('lessons')}
              className="hover:text-[#0039A6] transition-colors"
            >
              {lang === 'ru' ? 'Уроки' : 'Lessons'}
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className="hover:text-[#0039A6] transition-colors"
            >
              {lang === 'ru' ? 'История 5-11' : 'History 5-11'}
            </button>
            <button
              onClick={() => setActiveTab('calendar')}
              className="hover:text-[#0039A6] transition-colors"
            >
              {lang === 'ru' ? 'Календарь 30 дней' : 'Calendar 30-Day'}
            </button>
            <button
              onClick={() => setActiveTab('literature')}
              className="hover:text-[#0039A6] transition-colors"
            >
              {lang === 'ru' ? 'Литература 5-11' : 'Literature 5-11'}
            </button>
            <button
              onClick={() => setActiveTab('exercises')}
              className="hover:text-[#0039A6] transition-colors"
            >
              {lang === 'ru' ? 'Упражнения' : 'Exercises'}
            </button>
            <button
              onClick={() => setActiveTab('audio')}
              className="hover:text-[#0039A6] transition-colors"
            >
              {lang === 'ru' ? 'Аудио' : 'Audio'}
            </button>
            <button
              onClick={() => setActiveTab('progress')}
              className="hover:text-[#0039A6] transition-colors"
            >
              {lang === 'ru' ? 'Прогресс' : 'Progress'}
            </button>
            <button
              onClick={() => setActiveTab('grammar')}
              className="hover:text-[#0039A6] transition-colors"
            >
              {lang === 'ru' ? 'Грамматика' : 'Grammar'}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
