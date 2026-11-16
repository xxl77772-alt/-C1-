import { CalendarStudyDay } from '../types';

export interface GoogleCalendarEvent {
  id: string;
  summary: string;
  description?: string;
  htmlLink?: string;
  start: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  status?: string;
}

export interface GoogleCalendarListResponse {
  items: GoogleCalendarEvent[];
  summary?: string;
  timeZone?: string;
}

/**
 * Format date and time to RFC3339 string (ISO format with timezone offset)
 */
export function formatCalendarDateTime(date: Date, timeStr: string): { startIso: string; endIso: string; timeZone: string } {
  const [hours, minutes] = timeStr.split(':').map(Number);
  const startDate = new Date(date);
  startDate.setHours(hours || 18, minutes || 0, 0, 0);

  // Default duration is 45 minutes
  const endDate = new Date(startDate.getTime() + 45 * 60 * 1000);

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Europe/Moscow';

  return {
    startIso: startDate.toISOString(),
    endIso: endDate.toISOString(),
    timeZone,
  };
}

/**
 * Fetch calendar events for the next 30 days
 */
export async function fetchUpcomingEvents(
  accessToken: string,
  startDate: Date = new Date(),
  days: number = 30
): Promise<GoogleCalendarEvent[]> {
  const minDate = new Date(startDate);
  minDate.setHours(0, 0, 0, 0);

  const maxDate = new Date(startDate);
  maxDate.setDate(maxDate.getDate() + days);
  maxDate.setHours(23, 59, 59, 999);

  const params = new URLSearchParams({
    timeMin: minDate.toISOString(),
    timeMax: maxDate.toISOString(),
    singleEvents: 'true',
    orderBy: 'startTime',
    maxResults: '100',
  });

  const url = `https://www.googleapis.com/calendar/v3/calendars/primary/events?${params.toString()}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message || `Ошибка получения событий календаря (${response.status})`
    );
  }

  const data: GoogleCalendarListResponse = await response.json();
  return data.items || [];
}

/**
 * Create a single study event in Google Calendar
 */
export async function createStudyCalendarEvent(
  accessToken: string,
  day: CalendarStudyDay,
  eventDate: Date,
  timeStr: string = '18:00'
): Promise<GoogleCalendarEvent> {
  const { startIso, endIso, timeZone } = formatCalendarDateTime(eventDate, timeStr);

  const descriptionLines: string[] = [
    `📚 РУСОМИР: 30-дневный интенсив по русской литературе 5–11 классов`,
    `----------------------------------------------------`,
    `📖 Произведение: ${day.workTitleRu}`,
    `✍️ Автор: ${day.authorRu}`,
    `🎯 Тема дня: ${day.focusTopicRu}`,
    `⏱ Длительность: ${day.readingMinutes} минут`,
  ];

  if (day.criticalArticleTitleRu && day.criticalArticleUrl) {
    descriptionLines.push(
      ``,
      `🔎 Критическая рецензия:`,
      `«${day.criticalArticleTitleRu}» (${day.criticalArticleCriticRu || 'Анализ'})`,
      `Ссылка: ${day.criticalArticleUrl}`
    );
  }

  if (day.youtubeReviewTitleRu && day.youtubeUrl) {
    descriptionLines.push(
      ``,
      `🎬 Видеоразбор (${day.youtubeReviewChannel || 'YouTube'}):`,
      `«${day.youtubeReviewTitleRu}»`,
      `Ссылка: ${day.youtubeUrl}`
    );
  }

  descriptionLines.push(
    ``,
    `🌟 Платформа «РУСОМИР» — подготовка к ОГЭ/ЕГЭ и итоговым сочинениям.`,
    `#День${day.dayNumber} #РусскаяЛитература #РУСОМИР`
  );

  const eventPayload = {
    summary: `РУСОМИР: День ${day.dayNumber} — ${day.authorRu.split(' ').pop() || ''} «${day.workTitleRu}»`,
    description: descriptionLines.join('\n'),
    start: {
      dateTime: startIso,
      timeZone,
    },
    end: {
      dateTime: endIso,
      timeZone,
    },
    colorId: '9', // Blueberry / Deep Blue
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'popup', minutes: 15 },
        { method: 'popup', minutes: 60 },
      ],
    },
  };

  const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(eventPayload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message || `Ошибка создания события в Google Календаре (${response.status})`
    );
  }

  const createdEvent: GoogleCalendarEvent = await response.json();
  return createdEvent;
}

/**
 * Delete a study event from Google Calendar
 */
export async function deleteCalendarEvent(
  accessToken: string,
  eventId: string
): Promise<boolean> {
  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/primary/events/${encodeURIComponent(eventId)}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok && response.status !== 404 && response.status !== 410) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message || `Ошибка удаления события из Google Календаря (${response.status})`
    );
  }

  return true;
}
