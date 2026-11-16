import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  RefreshCw,
  LogOut,
  CalendarCheck,
  CalendarDays,
  Sparkles,
  PlayCircle,
  FileText,
  AlertCircle,
  Trash2,
  CalendarPlus,
  BookmarkCheck,
  Filter,
} from 'lucide-react';
import { User } from 'firebase/auth';
import { UserProgress, SupportedLang, CalendarStudyDay } from '../types';
import { STUDY_PLAN_30_DAYS } from '../data/studyPlan30Days';
import {
  googleSignIn,
  logout,
  getAccessToken,
  initAuth,
} from '../utils/googleAuth';
import {
  createStudyCalendarEvent,
  deleteCalendarEvent,
  fetchUpcomingEvents,
  GoogleCalendarEvent,
} from '../services/googleCalendarService';
import {
  recordCalendarDayCompleted,
  recordCalendarEventSynced,
  recordCalendarEventRemoved,
  recordAllCalendarEventsSynced,
  updateCalendarSettings,
} from '../utils/storage';
import { ConfirmationModal } from './ConfirmationModal';

interface CalendarViewProps {
  lang: SupportedLang;
  progress: UserProgress;
  onUpdateProgress: (updated: UserProgress) => void;
  onNavigateToLiteratureWork?: (workId: string) => void;
  onEarnXP: (xp: number) => void;
}

export const CalendarView: React.FC<CalendarViewProps> = ({
  lang,
  progress,
  onUpdateProgress,
  onNavigateToLiteratureWork,
  onEarnXP,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isAuthChecking, setIsAuthChecking] = useState<boolean>(true);
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Settings
  const [startDateStr, setStartDateStr] = useState<string>(
    progress.calendarStartDate || new Date().toISOString().slice(0, 10)
  );
  const [preferredTime, setPreferredTime] = useState<string>(
    progress.calendarPreferredTime || '18:00'
  );

  // Filters & Tabs
  const [selectedTab, setSelectedTab] = useState<'plan' | 'google-events'>('plan');
  const [filterGrade, setFilterGrade] = useState<number | 'all'>('all');
  const [filterSyncStatus, setFilterSyncStatus] = useState<'all' | 'synced' | 'not-synced'>('all');

  // Google Calendar Live Events
  const [googleEvents, setGoogleEvents] = useState<GoogleCalendarEvent[]>([]);
  const [isLoadingGoogleEvents, setIsLoadingGoogleEvents] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Sync operations state
  const [syncingDayNumber, setSyncingDayNumber] = useState<number | null>(null);
  const [batchSyncProgress, setBatchSyncProgress] = useState<{ current: number; total: number } | null>(null);

  // Confirmation Modals State (Required by Skill)
  const [singleSyncModalDay, setSingleSyncModalDay] = useState<CalendarStudyDay | null>(null);
  const [isBatchSyncModalOpen, setIsBatchSyncModalOpen] = useState<boolean>(false);
  const [deleteModalDay, setDeleteModalDay] = useState<CalendarStudyDay | null>(null);
  const [isClearAllModalOpen, setIsClearAllModalOpen] = useState<boolean>(false);
  const [isProcessingAction, setIsProcessingAction] = useState<boolean>(false);

  // Status message
  const [bannerMessage, setBannerMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const showBanner = (text: string, type: 'success' | 'error' = 'success') => {
    setBannerMessage({ type, text });
    setTimeout(() => setBannerMessage(null), 4000);
  };

  // Auth Initialization
  useEffect(() => {
    const unsubscribe = initAuth(
      (user, token) => {
        setCurrentUser(user);
        setAccessToken(token);
        setIsAuthChecking(false);
      },
      () => {
        setCurrentUser(null);
        setAccessToken(null);
        setIsAuthChecking(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Fetch upcoming Google events if user and token are ready and tab is google-events
  useEffect(() => {
    if (currentUser && accessToken && selectedTab === 'google-events') {
      loadGoogleEvents();
    }
  }, [currentUser, accessToken, selectedTab]);

  const loadGoogleEvents = async () => {
    if (!accessToken) return;
    setIsLoadingGoogleEvents(true);
    setFetchError(null);
    try {
      const startDate = new Date(startDateStr);
      const events = await fetchUpcomingEvents(accessToken, startDate, 30);
      setGoogleEvents(events);
    } catch (err: any) {
      console.error('Failed to load Google events:', err);
      setFetchError(err.message || 'Не удалось загрузить события из Google Календаря');
    } finally {
      setIsLoadingGoogleEvents(false);
    }
  };

  const handleSignIn = async () => {
    setIsSigningIn(true);
    setAuthError(null);
    try {
      const result = await googleSignIn();
      if (result) {
        setCurrentUser(result.user);
        setAccessToken(result.accessToken);
        showBanner('Google Календарь успешно подключен!');
      }
    } catch (err: any) {
      console.error('Sign-in error:', err);
      setAuthError(err.message || 'Не удалось войти через Google');
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await logout();
      setCurrentUser(null);
      setAccessToken(null);
      setGoogleEvents([]);
      showBanner('Вы вышли из учетной записи Google');
    } catch (err: any) {
      console.error('Logout error:', err);
    }
  };

  // Helper to compute exact date for each day (day 1 = start date, day 2 = start date + 1 day, ...)
  const getDayDate = (dayNum: number): Date => {
    const base = new Date(startDateStr);
    const result = new Date(base);
    result.setDate(base.getDate() + (dayNum - 1));
    return result;
  };

  const formatDateDisplay = (date: Date): string => {
    return date.toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  // Single Day Sync (called after confirmation modal confirms)
  const executeSingleDaySync = async () => {
    if (!singleSyncModalDay) return;
    const day = singleSyncModalDay;

    let token = accessToken;
    if (!token) {
      try {
        const authRes = await googleSignIn();
        if (authRes) {
          token = authRes.accessToken;
          setCurrentUser(authRes.user);
          setAccessToken(authRes.accessToken);
        } else {
          return;
        }
      } catch (e: any) {
        showBanner(e.message || 'Требуется авторизация в Google', 'error');
        return;
      }
    }

    if (!token) return;

    setIsProcessingAction(true);
    setSyncingDayNumber(day.dayNumber);

    try {
      const eventDate = getDayDate(day.dayNumber);
      const created = await createStudyCalendarEvent(token, day, eventDate, preferredTime);

      const updated = recordCalendarEventSynced(
        day.dayNumber,
        created.id,
        created.htmlLink,
        created.summary,
        progress
      );
      onUpdateProgress(updated);
      onEarnXP(10);
      showBanner(`День ${day.dayNumber} добавлен в Google Календарь!`);
      setSingleSyncModalDay(null);
    } catch (err: any) {
      console.error('Sync single day error:', err);
      showBanner(err.message || 'Ошибка синхронизации с Google Календарём', 'error');
    } finally {
      setIsProcessingAction(false);
      setSyncingDayNumber(null);
    }
  };

  // Batch Sync All 30 Days (called after confirmation modal confirms)
  const executeBatchSync = async () => {
    let token = accessToken;
    if (!token) {
      try {
        const authRes = await googleSignIn();
        if (authRes) {
          token = authRes.accessToken;
          setCurrentUser(authRes.user);
          setAccessToken(authRes.accessToken);
        } else {
          return;
        }
      } catch (e: any) {
        showBanner(e.message || 'Требуется авторизация в Google', 'error');
        return;
      }
    }

    if (!token) return;

    setIsProcessingAction(true);
    setBatchSyncProgress({ current: 0, total: 30 });

    const syncedResults: Record<
      number,
      { eventId: string; syncedAt: string; eventUrl?: string; summary?: string }
    > = {};

    let successCount = 0;

    for (let i = 0; i < STUDY_PLAN_30_DAYS.length; i++) {
      const day = STUDY_PLAN_30_DAYS[i];
      setBatchSyncProgress({ current: i + 1, total: 30 });

      try {
        const eventDate = getDayDate(day.dayNumber);
        const created = await createStudyCalendarEvent(token, day, eventDate, preferredTime);
        syncedResults[day.dayNumber] = {
          eventId: created.id,
          syncedAt: new Date().toISOString(),
          eventUrl: created.htmlLink,
          summary: created.summary,
        };
        successCount++;
        // Small delay to be polite to Google API rate limits
        await new Promise((r) => setTimeout(r, 200));
      } catch (err) {
        console.error(`Error syncing Day ${day.dayNumber}:`, err);
      }
    }

    const updated = recordAllCalendarEventsSynced(syncedResults, progress);
    onUpdateProgress(updated);
    onEarnXP(50);

    setIsProcessingAction(false);
    setBatchSyncProgress(null);
    setIsBatchSyncModalOpen(false);

    showBanner(
      `Синхронизировано ${successCount} из 30 дней в Google Календарь! +50 XP`
    );
  };

  // Delete event from Google Calendar (called after confirmation modal confirms)
  const executeDeleteEvent = async () => {
    if (!deleteModalDay) return;
    const day = deleteModalDay;
    const existing = progress.syncedCalendarEvents?.[day.dayNumber];

    if (!existing) {
      setDeleteModalDay(null);
      return;
    }

    let token = accessToken;
    if (!token) {
      showBanner('Для удаления события требуется подключение Google аккаунта', 'error');
      setDeleteModalDay(null);
      return;
    }

    setIsProcessingAction(true);
    try {
      await deleteCalendarEvent(token, existing.eventId);
      const updated = recordCalendarEventRemoved(day.dayNumber, progress);
      onUpdateProgress(updated);
      showBanner(`Событие для Дня ${day.dayNumber} удалено из Google Календаря`);
      setDeleteModalDay(null);
    } catch (err: any) {
      console.error('Delete calendar event error:', err);
      showBanner(err.message || 'Ошибка удаления события', 'error');
    } finally {
      setIsProcessingAction(false);
    }
  };

  // Clear all synced events
  const executeClearAll = async () => {
    if (!accessToken) {
      showBanner('Требуется авторизация в Google', 'error');
      setIsClearAllModalOpen(false);
      return;
    }

    setIsProcessingAction(true);
    const synced = progress.syncedCalendarEvents || {};
    const dayNumbers = Object.keys(synced).map(Number);

    for (const d of dayNumbers) {
      const eventData = synced[d];
      if (eventData?.eventId) {
        try {
          await deleteCalendarEvent(accessToken, eventData.eventId);
        } catch (e) {
          console.warn(`Failed to delete event for day ${d}:`, e);
        }
      }
    }

    const updated: UserProgress = {
      ...progress,
      syncedCalendarEvents: {},
    };
    onUpdateProgress(updated);
    setIsProcessingAction(false);
    setIsClearAllModalOpen(false);
    showBanner('Все синхронизированные события удалены из Google Календаря');
  };

  const handleToggleDayCompleted = (dayNum: number) => {
    const updated = recordCalendarDayCompleted(dayNum, progress);
    onUpdateProgress(updated);
    const isNowDone = updated.completedCalendarDays?.includes(dayNum);
    if (isNowDone) {
      onEarnXP(20);
      showBanner(`День ${dayNum} завершён! +20 XP`);
    }
  };

  const handleStartDateChange = (val: string) => {
    setStartDateStr(val);
    const updated = updateCalendarSettings(val, preferredTime, progress);
    onUpdateProgress(updated);
  };

  const handlePreferredTimeChange = (val: string) => {
    setPreferredTime(val);
    const updated = updateCalendarSettings(startDateStr, val, progress);
    onUpdateProgress(updated);
  };

  // Stats
  const syncedCount = Object.keys(progress.syncedCalendarEvents || {}).length;
  const completedCount = (progress.completedCalendarDays || []).length;
  const syncPercentage = Math.round((syncedCount / 30) * 100);
  const completedPercentage = Math.round((completedCount / 30) * 100);

  // Filtered study days
  const filteredDays = STUDY_PLAN_30_DAYS.filter((day) => {
    if (filterGrade !== 'all' && day.grade !== filterGrade) return false;
    const isSynced = Boolean(progress.syncedCalendarEvents?.[day.dayNumber]);
    if (filterSyncStatus === 'synced' && !isSynced) return false;
    if (filterSyncStatus === 'not-synced' && isSynced) return false;
    return true;
  });

  return (
    <div className="space-y-8 animate-fadeIn pb-12">
      {/* Banner Toast Notification */}
      {bannerMessage && (
        <div
          className={`fixed top-24 right-6 z-50 px-5 py-3.5 rounded-2xl shadow-xl flex items-center space-x-3 text-sm font-semibold border transition-all animate-bounce ${
            bannerMessage.type === 'success'
              ? 'bg-emerald-600 text-white border-emerald-500 shadow-emerald-700/20'
              : 'bg-rose-600 text-white border-rose-500 shadow-rose-700/20'
          }`}
        >
          {bannerMessage.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 shrink-0" />
          )}
          <span>{bannerMessage.text}</span>
        </div>
      )}

      {/* Header Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#002D84] via-[#0039A6] to-[#1E40AF] text-white p-6 sm:p-8 lg:p-10 shadow-xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 -mb-16 w-80 h-80 bg-rose-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-semibold text-blue-100">
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>30-дневная учебная программа с Google Календарём</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              30-Дневный Интенсив по Русской Литературе
            </h1>
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed font-normal">
              Персональный план ежедневного чтения и разбора литературных шедевров 5–11 классов.
              Синхронизируйте ежедневные 45-минутные занятия в свой личный Google Календарь со ссылками на проверенные критические статьи (Белинский, Гончаров, Полка, Arzamas) и видеоразборы.
            </p>
          </div>

          {/* Google Auth Status Card */}
          <div className="w-full lg:w-auto shrink-0 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-white min-w-[280px]">
            {isAuthChecking ? (
              <div className="flex items-center space-x-3 py-3 justify-center">
                <RefreshCw className="w-5 h-5 animate-spin text-blue-200" />
                <span className="text-xs text-blue-100">Проверка Google аккаунта...</span>
              </div>
            ) : currentUser ? (
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  {currentUser.photoURL ? (
                    <img
                      src={currentUser.photoURL}
                      alt={currentUser.displayName || 'Google User'}
                      className="w-10 h-10 rounded-full border-2 border-emerald-400 object-cover shadow-sm"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                      {currentUser.displayName ? currentUser.displayName[0] : 'G'}
                    </div>
                  )}
                  <div className="truncate">
                    <div className="flex items-center space-x-1.5">
                      <span className="text-xs font-bold text-white truncate max-w-[150px]">
                        {currentUser.displayName || 'Пользователь'}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    </div>
                    <span className="text-[11px] text-blue-200 truncate block max-w-[170px]">
                      {currentUser.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/15 text-[11px]">
                  <span className="text-emerald-300 font-semibold flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Календарь подключен</span>
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="text-blue-200 hover:text-white transition-colors flex items-center space-x-1 cursor-pointer"
                    title="Выйти из аккаунта"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Выйти</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3 text-center sm:text-left">
                <div className="flex items-center space-x-2 text-xs font-bold text-amber-200">
                  <CalendarPlus className="w-4 h-4" />
                  <span>Google Календарь не подключен</span>
                </div>
                <p className="text-[11px] text-blue-100 leading-normal">
                  Войдите через Google, чтобы синхронизировать расписание на 30 дней в ваш персональный календарь.
                </p>

                {/* Official Material Google Sign-In Button as strictly requested by SKILL */}
                <button
                  type="button"
                  onClick={handleSignIn}
                  disabled={isSigningIn}
                  className="w-full bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs py-2 px-3 rounded-xl shadow-md border border-slate-200 flex items-center justify-center space-x-2.5 transition-all cursor-pointer disabled:opacity-50"
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="w-4 h-4 shrink-0"
                  >
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    ></path>
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    ></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                  </svg>
                  <span>{isSigningIn ? 'Вход через Google...' : 'Войти через Google'}</span>
                </button>

                {authError && (
                  <p className="text-[10px] text-rose-300 font-medium">{authError}</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Progress Metrics Strip */}
        <div className="mt-8 pt-6 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white/10 rounded-xl p-3.5 backdrop-blur-xs">
            <span className="text-[11px] text-blue-200 block uppercase tracking-wider font-semibold">
              Синхронизировано
            </span>
            <div className="mt-1 flex items-baseline space-x-1.5">
              <span className="text-2xl font-black text-white">{syncedCount}</span>
              <span className="text-xs text-blue-200 font-medium">/ 30 дней ({syncPercentage}%)</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-1.5 mt-2 overflow-hidden">
              <div
                className="bg-emerald-400 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${syncPercentage}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-3.5 backdrop-blur-xs">
            <span className="text-[11px] text-blue-200 block uppercase tracking-wider font-semibold">
              Изучено дней
            </span>
            <div className="mt-1 flex items-baseline space-x-1.5">
              <span className="text-2xl font-black text-white">{completedCount}</span>
              <span className="text-xs text-blue-200 font-medium">/ 30 дней ({completedPercentage}%)</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-1.5 mt-2 overflow-hidden">
              <div
                className="bg-amber-400 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${completedPercentage}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-3.5 backdrop-blur-xs">
            <span className="text-[11px] text-blue-200 block uppercase tracking-wider font-semibold">
              Ежедневное время
            </span>
            <div className="mt-1 flex items-baseline space-x-1.5">
              <span className="text-2xl font-black text-white">45</span>
              <span className="text-xs text-blue-200 font-medium">минут в день</span>
            </div>
            <span className="text-[11px] text-blue-200 block mt-1">ОГЭ / ЕГЭ фокус</span>
          </div>

          <div className="bg-white/10 rounded-xl p-3.5 backdrop-blur-xs">
            <span className="text-[11px] text-blue-200 block uppercase tracking-wider font-semibold">
              Рецензии и разборы
            </span>
            <div className="mt-1 flex items-baseline space-x-1.5">
              <span className="text-2xl font-black text-white">100%</span>
              <span className="text-xs text-blue-200 font-medium">с рабочими ссылками</span>
            </div>
            <span className="text-[11px] text-blue-200 block mt-1">Полка, Arzamas, Ilibrary</span>
          </div>
        </div>
      </div>

      {/* Control Toolbar */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Left: Schedule settings */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center space-x-2 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">
            <CalendarDays className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-semibold text-slate-600">Начало курса:</span>
            <input
              type="date"
              value={startDateStr}
              onChange={(e) => handleStartDateChange(e.target.value)}
              className="text-xs font-bold text-slate-800 bg-transparent focus:outline-hidden cursor-pointer"
            />
          </div>

          <div className="flex items-center space-x-2 bg-slate-50 px-3 py-2 rounded-xl border border-slate-200">
            <Clock className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-semibold text-slate-600">Время:</span>
            <input
              type="time"
              value={preferredTime}
              onChange={(e) => handlePreferredTimeChange(e.target.value)}
              className="text-xs font-bold text-slate-800 bg-transparent focus:outline-hidden cursor-pointer"
            />
          </div>

          <a
            href="https://calendar.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
            title="Открыть Google Календарь в новой вкладке"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Открыть Google Календарь</span>
          </a>
        </div>

        {/* Right: Batch Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {syncedCount > 0 && (
            <button
              onClick={() => setIsClearAllModalOpen(true)}
              className="px-3 py-2 rounded-xl border border-rose-200 text-rose-700 hover:bg-rose-50 text-xs font-semibold transition-colors cursor-pointer flex items-center space-x-1.5"
              title="Очистить все события курса из календаря"
            >
              <Trash2 className="w-3.5 h-3.5 text-rose-500" />
              <span className="hidden sm:inline">Очистить из календаря</span>
            </button>
          )}

          <button
            onClick={() => setIsBatchSyncModalOpen(true)}
            className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-[#0039A6] hover:bg-[#002d84] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-800/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Синхронизировать все 30 дней</span>
          </button>
        </div>
      </div>

      {/* Tabs & View Selector */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
        {/* Navigation Tabs */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setSelectedTab('plan')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 cursor-pointer ${
              selectedTab === 'plan'
                ? 'bg-white text-[#0039A6] shadow-sm border border-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>30-дневная программа ({STUDY_PLAN_30_DAYS.length} дн.)</span>
          </button>

          <button
            onClick={() => setSelectedTab('google-events')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 cursor-pointer ${
              selectedTab === 'google-events'
                ? 'bg-white text-[#0039A6] shadow-sm border border-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>События в Google Календаре</span>
            {googleEvents.length > 0 && (
              <span className="px-1.5 py-0.2 bg-blue-100 text-[#0039A6] rounded-full text-[10px] font-black">
                {googleEvents.length}
              </span>
            )}
          </button>
        </div>

        {/* Filters if on 'plan' tab */}
        {selectedTab === 'plan' && (
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 sm:pb-0">
            <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-xl text-xs">
              <span className="px-2 text-slate-500 font-semibold flex items-center space-x-1">
                <Filter className="w-3 h-3" />
                <span className="hidden md:inline">Класс:</span>
              </span>
              {[
                { label: 'Все', value: 'all' },
                { label: '5-6', value: 5 },
                { label: '7-8', value: 7 },
                { label: '9', value: 9 },
                { label: '10', value: 10 },
                { label: '11', value: 11 },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => setFilterGrade(item.value as any)}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                    filterGrade === item.value
                      ? 'bg-white text-[#0039A6] shadow-2xs font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <select
              value={filterSyncStatus}
              onChange={(e) => setFilterSyncStatus(e.target.value as any)}
              className="text-xs font-semibold bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 text-slate-700 focus:outline-hidden"
            >
              <option value="all">Все дни</option>
              <option value="synced">Только синхронизированные</option>
              <option value="not-synced">Ещё не в календаре</option>
            </select>
          </div>
        )}
      </div>

      {/* Main Tab Content */}
      {selectedTab === 'plan' && (
        <div className="space-y-4">
          {filteredDays.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
              <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800">Дни не найдены</h3>
              <p className="text-xs text-slate-500 mt-1">Попробуйте изменить выбранные фильтры.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredDays.map((day) => {
                const dayDate = getDayDate(day.dayNumber);
                const isSynced = Boolean(progress.syncedCalendarEvents?.[day.dayNumber]);
                const syncInfo = progress.syncedCalendarEvents?.[day.dayNumber];
                const isCompleted = (progress.completedCalendarDays || []).includes(day.dayNumber);
                const isSyncingThis = syncingDayNumber === day.dayNumber;

                return (
                  <div
                    key={day.dayNumber}
                    className={`bg-white rounded-2xl border transition-all p-5 shadow-xs hover:shadow-md flex flex-col justify-between ${
                      isCompleted
                        ? 'border-emerald-300 bg-emerald-50/20'
                        : isSynced
                        ? 'border-blue-200'
                        : 'border-slate-200'
                    }`}
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center space-x-2">
                          <span className="px-2.5 py-0.5 rounded-lg bg-[#0039A6] text-white text-xs font-extrabold shadow-2xs">
                            День {day.dayNumber}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-bold">
                            {day.grade} класс
                          </span>
                          <div className="flex items-center space-x-1 text-slate-500 text-xs font-medium">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{day.readingMinutes} мин</span>
                          </div>
                        </div>

                        {/* Date badge */}
                        <div className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md">
                          {formatDateDisplay(dayDate)} {preferredTime}
                        </div>
                      </div>

                      {/* Title & Author */}
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0039A6] leading-snug">
                        {day.workTitleRu}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">{day.authorRu}</p>

                      {/* Focus Topic */}
                      <div className="mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed">
                        <span className="font-bold text-[#0039A6]">Фокус дня: </span>
                        {day.focusTopicRu}
                      </div>

                      {/* Verified Critical Article & Review Link */}
                      {day.criticalArticleTitleRu && day.criticalArticleUrl && (
                        <div className="mt-3 p-2.5 rounded-xl bg-blue-50/60 border border-blue-100 flex items-start space-x-2.5">
                          <FileText className="w-4 h-4 text-[#0039A6] shrink-0 mt-0.5" />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-1.5 text-[11px] font-bold text-[#0039A6]">
                              <span>Критическая статья:</span>
                              <span className="text-slate-600 font-normal">
                                {day.criticalArticleCriticRu}
                              </span>
                            </div>
                            <a
                              href={day.criticalArticleUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-slate-800 hover:text-[#0039A6] font-semibold underline decoration-blue-300 underline-offset-2 flex items-center space-x-1 mt-0.5 group"
                            >
                              <span className="truncate">{day.criticalArticleTitleRu}</span>
                              <ExternalLink className="w-3 h-3 shrink-0 text-slate-400 group-hover:text-[#0039A6]" />
                            </a>
                          </div>
                        </div>
                      )}

                      {/* YouTube Review Link */}
                      {day.youtubeReviewTitleRu && day.youtubeUrl && (
                        <div className="mt-2 p-2.5 rounded-xl bg-red-50/50 border border-red-100 flex items-start space-x-2.5">
                          <PlayCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-1.5 text-[11px] font-bold text-red-700">
                              <span>Видеоразбор ({day.youtubeReviewChannel}):</span>
                            </div>
                            <a
                              href={day.youtubeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-slate-800 hover:text-red-700 font-semibold underline decoration-red-300 underline-offset-2 flex items-center space-x-1 mt-0.5 group"
                            >
                              <span className="truncate">{day.youtubeReviewTitleRu}</span>
                              <ExternalLink className="w-3 h-3 shrink-0 text-slate-400 group-hover:text-red-700" />
                            </a>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Actions & Status */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                      {/* Completion check */}
                      <button
                        onClick={() => handleToggleDayCompleted(day.dayNumber)}
                        className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                          isCompleted
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        <CheckCircle2
                          className={`w-4 h-4 ${
                            isCompleted ? 'text-emerald-600 fill-emerald-600' : 'text-slate-400'
                          }`}
                        />
                        <span>{isCompleted ? 'Пройдено (+20 XP)' : 'Отметить пройденным'}</span>
                      </button>

                      {/* Sync actions */}
                      <div className="flex items-center space-x-1.5">
                        {isSynced ? (
                          <div className="flex items-center space-x-1">
                            <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-xs font-bold flex items-center space-x-1">
                              <CalendarCheck className="w-3.5 h-3.5 text-emerald-600" />
                              <span>В календаре</span>
                            </span>
                            <button
                              onClick={() => setDeleteModalDay(day)}
                              className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                              title="Удалить это событие из Google Календаря"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setSingleSyncModalDay(day)}
                            disabled={isSyncingThis}
                            className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-[#0039A6] border border-blue-200 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center space-x-1.5"
                          >
                            {isSyncingThis ? (
                              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                            ) : (
                              <CalendarPlus className="w-3.5 h-3.5" />
                            )}
                            <span>Добавить в календарь</span>
                          </button>
                        )}

                        {day.workId && onNavigateToLiteratureWork && (
                          <button
                            onClick={() => onNavigateToLiteratureWork(day.workId!)}
                            className="px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-[#0039A6] hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                            title="Открыть подробный анализ произведения"
                          >
                            В анализ
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Google Live Events Tab */}
      {selectedTab === 'google-events' && (
        <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                События в вашем Google Календаре (на 30 дней)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Прямая выгрузка активных событий из вашего Google Calendar аккаунта
              </p>
            </div>
            <button
              onClick={loadGoogleEvents}
              disabled={isLoadingGoogleEvents || !accessToken}
              className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center space-x-1.5 transition-colors cursor-pointer disabled:opacity-50"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${isLoadingGoogleEvents ? 'animate-spin' : ''}`}
              />
              <span>Обновить</span>
            </button>
          </div>

          {!currentUser ? (
            <div className="py-12 text-center">
              <Calendar className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h4 className="text-sm font-bold text-slate-800">
                Подключите Google Календарь для просмотра событий
              </h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1 mb-4">
                После авторизации вы сможете видеть все запланированные занятия прямо здесь.
              </p>
              <button
                onClick={handleSignIn}
                className="px-4 py-2 bg-[#0039A6] text-white rounded-xl text-xs font-bold shadow-md shadow-blue-800/20"
              >
                Войти через Google
              </button>
            </div>
          ) : isLoadingGoogleEvents ? (
            <div className="py-12 flex flex-col items-center justify-center space-y-3">
              <RefreshCw className="w-6 h-6 animate-spin text-[#0039A6]" />
              <span className="text-xs font-semibold text-slate-600">
                Загрузка событий из Google Календаря...
              </span>
            </div>
          ) : fetchError ? (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{fetchError}</span>
            </div>
          ) : googleEvents.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-xs">
              На выбранный период в вашем Google Календаре пока нет событий. Нажмите «Синхронизировать
              все 30 дней», чтобы добавить программу занятий!
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {googleEvents.map((evt) => {
                const isRusomir = evt.summary?.includes('РУСОМИР');
                const startStr =
                  evt.start?.dateTime || evt.start?.date || '';
                const dateObj = startStr ? new Date(startStr) : null;

                return (
                  <div key={evt.id} className="py-3 flex items-start justify-between gap-4">
                    <div className="flex items-start space-x-3 min-w-0">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold ${
                          isRusomir
                            ? 'bg-blue-50 text-[#0039A6] border border-blue-200'
                            : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {isRusomir ? 'Я' : '📅'}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center space-x-2">
                          <h4 className="text-sm font-bold text-slate-900 truncate">
                            {evt.summary || 'Без названия'}
                          </h4>
                          {isRusomir && (
                            <span className="px-2 py-0.5 bg-blue-100 text-[#0039A6] rounded-md text-[10px] font-extrabold">
                              РУСОМИР
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-3 text-xs text-slate-500 mt-0.5">
                          {dateObj && (
                            <span className="font-medium">
                              {dateObj.toLocaleDateString('ru-RU', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {evt.htmlLink && (
                      <a
                        href={evt.htmlLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#0039A6] hover:underline flex items-center space-x-1 shrink-0"
                      >
                        <span>В календаре</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Confirmation Modal: Single Day Sync (Mandatory per Skill guidelines) */}
      <ConfirmationModal
        isOpen={Boolean(singleSyncModalDay)}
        title={`Добавить День ${singleSyncModalDay?.dayNumber} в Google Календарь?`}
        description={`Будет создано событие «${singleSyncModalDay?.workTitleRu}» на ${
          singleSyncModalDay ? formatDateDisplay(getDayDate(singleSyncModalDay.dayNumber)) : ''
        } в ${preferredTime} со ссылками на рецензии и учебные материалы.`}
        confirmLabel="Добавить событие"
        confirmVariant="primary"
        isLoading={isProcessingAction}
        onConfirm={executeSingleDaySync}
        onCancel={() => setSingleSyncModalDay(null)}
      />

      {/* Confirmation Modal: Batch Sync All 30 Days (Mandatory per Skill guidelines) */}
      <ConfirmationModal
        isOpen={isBatchSyncModalOpen}
        title="Синхронизировать весь 30-дневный план в Google Календарь?"
        description={`В вашем Google Календаре будет создано 30 последовательных событий (ежедневно в ${preferredTime}, начиная с ${startDateStr}). Каждое событие будет содержать фокус дня, автора, произведение и прямые ссылки на критические рецензии и видеолекции.`}
        itemCount={30}
        itemsPreview={STUDY_PLAN_30_DAYS.map(
          (d) => `День ${d.dayNumber}: ${d.authorRu.split(' ').pop()} — «${d.workTitleRu}»`
        )}
        confirmLabel="Синхронизировать 30 дней"
        confirmVariant="primary"
        isLoading={isProcessingAction}
        onConfirm={executeBatchSync}
      />

      {/* Confirmation Modal: Delete Event (Mandatory per Skill guidelines) */}
      <ConfirmationModal
        isOpen={Boolean(deleteModalDay)}
        title={`Удалить День ${deleteModalDay?.dayNumber} из Google Календаря?`}
        description={`Событие «${deleteModalDay?.workTitleRu}» будет безвозвратно удалено из вашего Google Календаря.`}
        confirmLabel="Удалить из календаря"
        confirmVariant="danger"
        isLoading={isProcessingAction}
        onConfirm={executeDeleteEvent}
        onCancel={() => setDeleteModalDay(null)}
      />

      {/* Confirmation Modal: Clear All Synced Events (Mandatory per Skill guidelines) */}
      <ConfirmationModal
        isOpen={isClearAllModalOpen}
        title="Удалить все события курса из Google Календаря?"
        description={`Будут удалены все ${syncedCount} событий курса «РУСОМИР», ранее добавленные в ваш Google Календарь.`}
        itemCount={syncedCount}
        confirmLabel="Удалить все события"
        confirmVariant="danger"
        isLoading={isProcessingAction}
        onConfirm={executeClearAll}
        onCancel={() => setIsClearAllModalOpen(false)}
      />
    </div>
  );
};
