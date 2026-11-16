import { UserProgress } from '../types';

const STORAGE_KEY = 'russian_learning_progress_v1';

const DEFAULT_PROGRESS: UserProgress = {
  xp: 180, // Initial warm XP for encouragement
  streakDays: 2,
  lastActiveDate: new Date().toISOString().slice(0, 10),
  completedLessons: ['lesson-1'],
  lessonQuizScores: {
    'lesson-1': {
      score: 2,
      total: 2,
      date: new Date().toISOString().slice(0, 10),
      percent: 100,
    },
  },
  passedTests: [
    {
      id: 'test-init-1',
      testTitleRu: 'Урок 1: Базовые приветствия и «ты/вы»',
      testTitleEn: 'Lesson 1: Essential Greetings & Formal/Informal',
      score: 2,
      total: 2,
      percent: 100,
      category: 'vocabulary',
      passedAt: new Date().toISOString().slice(0, 10),
    },
    {
      id: 'test-init-2',
      testTitleRu: 'Определение рода существительных',
      testTitleEn: 'Noun Gender Identification Drill',
      score: 5,
      total: 5,
      percent: 100,
      category: 'grammar',
      passedAt: new Date().toISOString().slice(0, 10),
    },
  ],
  completedExercises: {
    'fb-1': { type: 'fill-blank', score: 10, passedAt: new Date().toISOString().slice(0, 10) },
  },
  listenedAudios: ['dialogue-1', 'word-1'],
  bookmarkedCards: ['card-1', 'card-3'],
  masteredCards: ['card-1', 'card-2', 'card-4', 'card-7'],
  studiedLiteratureWorks: ['lit-9-pushkin-onegin'],
  favoriteLiteratureWorks: ['lit-9-pushkin-onegin'],
  literatureQuizScores: {},
  watchedLiteratureVideos: [],
  studiedHistoryTopics: ['hist-6-kievan-rus-rise'],
  favoriteHistoryTopics: ['hist-6-kievan-rus-rise'],
  historyQuizScores: {},
  watchedHistoryVideos: [],
  answeredQuizCount: 8,
  correctQuizCount: 8,
  syncedCalendarEvents: {},
  completedCalendarDays: [1],
  calendarPreferredTime: '18:00',
  calendarStartDate: new Date().toISOString().slice(0, 10),
};

export function loadProgress(): UserProgress {
  if (typeof window === 'undefined') return DEFAULT_PROGRESS;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw);

    // Calculate streak
    const today = new Date().toISOString().slice(0, 10);
    const lastDate = parsed.lastActiveDate || today;

    const diffDays = Math.round(
      (new Date(today).getTime() - new Date(lastDate).getTime()) / (1000 * 3600 * 24)
    );

    let streak = parsed.streakDays || 1;
    if (diffDays === 1) {
      streak += 1;
    } else if (diffDays > 1) {
      streak = 1;
    }

    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
      lessonQuizScores: parsed.lessonQuizScores || DEFAULT_PROGRESS.lessonQuizScores,
      passedTests: parsed.passedTests || DEFAULT_PROGRESS.passedTests,
      completedExercises: parsed.completedExercises || DEFAULT_PROGRESS.completedExercises,
      listenedAudios: parsed.listenedAudios || DEFAULT_PROGRESS.listenedAudios,
      streakDays: streak,
      lastActiveDate: today,
    };
  } catch (e) {
    console.error('Failed to load progress', e);
    return DEFAULT_PROGRESS;
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress', e);
  }
}

export function addXP(amount: number, current: UserProgress): UserProgress {
  const updated: UserProgress = {
    ...current,
    xp: current.xp + amount,
    lastActiveDate: new Date().toISOString().slice(0, 10),
  };
  saveProgress(updated);
  return updated;
}

export function recordLessonCompletion(
  lessonId: string,
  score: number,
  total: number,
  earnedXP: number,
  current: UserProgress
): UserProgress {
  const today = new Date().toISOString().slice(0, 10);
  const completed = current.completedLessons.includes(lessonId)
    ? current.completedLessons
    : [...current.completedLessons, lessonId];

  const currentScores = current.lessonQuizScores || {};
  const updatedScores = {
    ...currentScores,
    [lessonId]: {
      score,
      total,
      date: today,
      percent: total > 0 ? Math.round((score / total) * 100) : 100,
    },
  };

  const currentPassedTests = current.passedTests || [];
  const testId = `lesson-quiz-${lessonId}`;
  const existingTestIdx = currentPassedTests.findIndex((t) => t.id === testId);
  const newTestRecord = {
    id: testId,
    testTitleRu: `Итоговый тест: Урок ${lessonId.replace('lesson-', '')}`,
    testTitleEn: `Final Quiz: Lesson ${lessonId.replace('lesson-', '')}`,
    score,
    total,
    percent: total > 0 ? Math.round((score / total) * 100) : 100,
    category: 'grammar' as const,
    passedAt: today,
  };

  let updatedTests = [...currentPassedTests];
  if (existingTestIdx >= 0) {
    updatedTests[existingTestIdx] = newTestRecord;
  } else {
    updatedTests.unshift(newTestRecord);
  }

  const updated: UserProgress = {
    ...current,
    completedLessons: completed,
    lessonQuizScores: updatedScores,
    passedTests: updatedTests,
    answeredQuizCount: (current.answeredQuizCount || 0) + total,
    correctQuizCount: (current.correctQuizCount || 0) + score,
    xp: current.xp + earnedXP,
    lastActiveDate: today,
  };

  saveProgress(updated);
  return updated;
}

export function recordExerciseCompletion(
  exerciseId: string,
  type: 'fill-blank' | 'case-agreement' | 'sentence-build',
  isCorrect: boolean,
  current: UserProgress
): UserProgress {
  const today = new Date().toISOString().slice(0, 10);
  const currentExercises = current.completedExercises || {};
  const updatedExercises = {
    ...currentExercises,
    [exerciseId]: {
      type,
      score: isCorrect ? 10 : 0,
      passedAt: today,
    },
  };

  // Also add to test history if completed with positive result
  let updatedTests = [...(current.passedTests || [])];
  if (isCorrect) {
    const typeLabelRu =
      type === 'fill-blank'
        ? 'Заполнение пропусков'
        : type === 'case-agreement'
        ? 'Падежи существительных и прилагательных'
        : 'Составление предложений';

    const typeLabelEn =
      type === 'fill-blank'
        ? 'Fill in the blanks'
        : type === 'case-agreement'
        ? 'Noun & Adjective Agreement'
        : 'Sentence Reordering';

    const testId = `ex-${exerciseId}`;
    if (!updatedTests.some((t) => t.id === testId)) {
      updatedTests.unshift({
        id: testId,
        testTitleRu: `Упражнение: ${typeLabelRu} (#${exerciseId})`,
        testTitleEn: `Exercise: ${typeLabelEn} (#${exerciseId})`,
        score: 1,
        total: 1,
        percent: 100,
        category: 'exercises',
        passedAt: today,
      });
    }
  }

  const updated: UserProgress = {
    ...current,
    completedExercises: updatedExercises,
    passedTests: updatedTests,
    answeredQuizCount: (current.answeredQuizCount || 0) + 1,
    correctQuizCount: (current.correctQuizCount || 0) + (isCorrect ? 1 : 0),
    xp: current.xp + (isCorrect ? 10 : 0),
    lastActiveDate: today,
  };

  saveProgress(updated);
  return updated;
}

export function recordAudioListened(audioId: string, current: UserProgress): UserProgress {
  const currentAudios = current.listenedAudios || [];
  if (currentAudios.includes(audioId)) return current;

  const updated: UserProgress = {
    ...current,
    listenedAudios: [...currentAudios, audioId],
    xp: current.xp + 5, // reward for listening
  };
  saveProgress(updated);
  return updated;
}

export function recordLiteratureWorkStudied(workId: string, current: UserProgress): UserProgress {
  const list = current.studiedLiteratureWorks || [];
  if (list.includes(workId)) return current;

  const updated: UserProgress = {
    ...current,
    studiedLiteratureWorks: [...list, workId],
    xp: current.xp + 25,
  };
  saveProgress(updated);
  return updated;
}

export function toggleFavoriteLiteratureWork(workId: string, current: UserProgress): UserProgress {
  const list = current.favoriteLiteratureWorks || [];
  const exists = list.includes(workId);
  const next = exists ? list.filter((id) => id !== workId) : [...list, workId];

  const updated: UserProgress = {
    ...current,
    favoriteLiteratureWorks: next,
  };
  saveProgress(updated);
  return updated;
}

export function recordLiteratureQuiz(
  workId: string,
  workTitleRu: string,
  workTitleEn: string,
  score: number,
  total: number,
  current: UserProgress
): UserProgress {
  const today = new Date().toISOString().slice(0, 10);
  const percent = total > 0 ? Math.round((score / total) * 100) : 100;
  const earnedXP = score * 15;

  const updatedScores = {
    ...(current.literatureQuizScores || {}),
    [workId]: { score, total, passedAt: today },
  };

  const updatedTests = [...(current.passedTests || [])];
  const testId = `lit-quiz-${workId}`;
  const existingIdx = updatedTests.findIndex((t) => t.id === testId);

  const testRecord = {
    id: testId,
    testTitleRu: `Тест по литературе: ${workTitleRu}`,
    testTitleEn: `Literature Quiz: ${workTitleEn}`,
    score,
    total,
    percent,
    category: 'exercises' as const,
    passedAt: today,
  };

  if (existingIdx >= 0) {
    updatedTests[existingIdx] = testRecord;
  } else {
    updatedTests.unshift(testRecord);
  }

  const studied = current.studiedLiteratureWorks || [];
  const updatedStudied = studied.includes(workId) ? studied : [...studied, workId];

  const updated: UserProgress = {
    ...current,
    literatureQuizScores: updatedScores,
    passedTests: updatedTests,
    studiedLiteratureWorks: updatedStudied,
    answeredQuizCount: (current.answeredQuizCount || 0) + total,
    correctQuizCount: (current.correctQuizCount || 0) + score,
    xp: current.xp + earnedXP,
    lastActiveDate: today,
  };

  saveProgress(updated);
  return updated;
}

export function resetProgress(): UserProgress {
  const resetObj: UserProgress = {
    ...DEFAULT_PROGRESS,
    xp: 0,
    streakDays: 1,
    completedLessons: [],
    lessonQuizScores: {},
    passedTests: [],
    completedExercises: {},
    listenedAudios: [],
    studiedLiteratureWorks: [],
    favoriteLiteratureWorks: [],
    literatureQuizScores: {},
    watchedLiteratureVideos: [],
    studiedHistoryTopics: [],
    favoriteHistoryTopics: [],
    historyQuizScores: {},
    watchedHistoryVideos: [],
    masteredCards: [],
    bookmarkedCards: [],
    answeredQuizCount: 0,
    correctQuizCount: 0,
    lastActiveDate: new Date().toISOString().slice(0, 10),
  };
  saveProgress(resetObj);
  return resetObj;
}

export function recordLiteratureVideoWatched(videoId: string, current: UserProgress): UserProgress {
  const watched = current.watchedLiteratureVideos || [];
  if (watched.includes(videoId)) return current;

  const today = new Date().toISOString().slice(0, 10);
  const updated: UserProgress = {
    ...current,
    watchedLiteratureVideos: [...watched, videoId],
    xp: current.xp + 15,
    lastActiveDate: today,
  };
  saveProgress(updated);
  return updated;
}

export function recordHistoryTopicStudied(topicId: string, current: UserProgress): UserProgress {
  const studied = current.studiedHistoryTopics || [];
  if (studied.includes(topicId)) return current;

  const today = new Date().toISOString().slice(0, 10);
  const updated: UserProgress = {
    ...current,
    studiedHistoryTopics: [...studied, topicId],
    xp: current.xp + 25,
    lastActiveDate: today,
  };
  saveProgress(updated);
  return updated;
}

export function toggleFavoriteHistoryTopic(topicId: string, current: UserProgress): UserProgress {
  const favs = current.favoriteHistoryTopics || [];
  const exists = favs.includes(topicId);
  const updatedFavs = exists ? favs.filter((id) => id !== topicId) : [...favs, topicId];

  const updated: UserProgress = {
    ...current,
    favoriteHistoryTopics: updatedFavs,
  };
  saveProgress(updated);
  return updated;
}

export function recordHistoryQuizScore(
  topicId: string,
  topicTitleRu: string,
  topicTitleEn: string,
  score: number,
  total: number,
  current: UserProgress
): UserProgress {
  const today = new Date().toISOString().slice(0, 10);
  const percent = total > 0 ? Math.round((score / total) * 100) : 100;
  const earnedXP = score * 15;

  const updatedScores = {
    ...(current.historyQuizScores || {}),
    [topicId]: { score, total, passedAt: today },
  };

  const updatedTests = [...(current.passedTests || [])];
  const testId = `hist-quiz-${topicId}`;
  const existingIdx = updatedTests.findIndex((t) => t.id === testId);

  const testRecord = {
    id: testId,
    testTitleRu: `Тест по истории: ${topicTitleRu}`,
    testTitleEn: `History Quiz: ${topicTitleEn}`,
    score,
    total,
    percent,
    category: 'exercises' as const,
    passedAt: today,
  };

  if (existingIdx >= 0) {
    updatedTests[existingIdx] = testRecord;
  } else {
    updatedTests.unshift(testRecord);
  }

  const studied = current.studiedHistoryTopics || [];
  const updatedStudied = studied.includes(topicId) ? studied : [...studied, topicId];

  const updated: UserProgress = {
    ...current,
    historyQuizScores: updatedScores,
    passedTests: updatedTests,
    studiedHistoryTopics: updatedStudied,
    answeredQuizCount: (current.answeredQuizCount || 0) + total,
    correctQuizCount: (current.correctQuizCount || 0) + score,
    xp: current.xp + earnedXP,
    lastActiveDate: today,
  };

  saveProgress(updated);
  return updated;
}

export function recordHistoryVideoWatched(videoId: string, current: UserProgress): UserProgress {
  const watched = current.watchedHistoryVideos || [];
  if (watched.includes(videoId)) return current;

  const today = new Date().toISOString().slice(0, 10);
  const updated: UserProgress = {
    ...current,
    watchedHistoryVideos: [...watched, videoId],
    xp: current.xp + 15,
    lastActiveDate: today,
  };
  saveProgress(updated);
  return updated;
}

export function recordCalendarDayCompleted(day: number, current: UserProgress): UserProgress {
  const completed = current.completedCalendarDays || [];
  const isAlready = completed.includes(day);
  const nextCompleted = isAlready ? completed.filter((d) => d !== day) : [...completed, day];

  const earnedXP = !isAlready ? 20 : 0;
  const updated: UserProgress = {
    ...current,
    completedCalendarDays: nextCompleted,
    xp: current.xp + earnedXP,
    lastActiveDate: new Date().toISOString().slice(0, 10),
  };
  saveProgress(updated);
  return updated;
}

export function recordCalendarEventSynced(
  day: number,
  eventId: string,
  eventUrl: string | undefined,
  summary: string,
  current: UserProgress
): UserProgress {
  const existingMap = current.syncedCalendarEvents || {};
  const updatedMap = {
    ...existingMap,
    [day]: {
      eventId,
      syncedAt: new Date().toISOString(),
      eventUrl,
      summary,
    },
  };
  const updated: UserProgress = {
    ...current,
    syncedCalendarEvents: updatedMap,
    xp: current.xp + 10,
  };
  saveProgress(updated);
  return updated;
}

export function recordCalendarEventRemoved(day: number, current: UserProgress): UserProgress {
  const existingMap = { ...(current.syncedCalendarEvents || {}) };
  delete existingMap[day];

  const updated: UserProgress = {
    ...current,
    syncedCalendarEvents: existingMap,
  };
  saveProgress(updated);
  return updated;
}

export function recordAllCalendarEventsSynced(
  syncedMap: Record<number, { eventId: string; syncedAt: string; eventUrl?: string; summary?: string }>,
  current: UserProgress
): UserProgress {
  const updated: UserProgress = {
    ...current,
    syncedCalendarEvents: {
      ...(current.syncedCalendarEvents || {}),
      ...syncedMap,
    },
    xp: current.xp + 50,
  };
  saveProgress(updated);
  return updated;
}

export function updateCalendarSettings(
  startDate: string,
  preferredTime: string,
  current: UserProgress
): UserProgress {
  const updated: UserProgress = {
    ...current,
    calendarStartDate: startDate,
    calendarPreferredTime: preferredTime,
  };
  saveProgress(updated);
  return updated;
}
