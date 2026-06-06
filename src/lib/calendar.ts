import ical from "node-ical";

// Highland Hills Baptist Church public Google Calendar (same one embedded on hhbcmi.com/calendar).
const CALENDAR_ID = "s97ca6h4uibbas4llei5gi9jv0@group.calendar.google.com";

export const CALENDAR_TZ = "America/Detroit";

export const CALENDAR_EMBED_URL = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(
  CALENDAR_ID
)}&ctz=${encodeURIComponent(CALENDAR_TZ)}`;

const ICS_URL = `https://calendar.google.com/calendar/ical/${encodeURIComponent(
  CALENDAR_ID
)}/public/basic.ics`;

export type ChurchEvent = {
  id: string;
  title: string;
  start: Date;
  end: Date | null;
  allDay: boolean;
  location: string | null;
};

/**
 * Fetches the church's public Google Calendar feed and returns the next
 * `limit` upcoming events (single + recurring, expanded). Re-fetched hourly.
 * Returns [] on any failure so the page still renders.
 */
export async function getUpcomingEvents(limit = 5): Promise<ChurchEvent[]> {
  let text: string;
  try {
    const res = await fetch(ICS_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    text = await res.text();
  } catch {
    return [];
  }

  let data: ical.CalendarResponse;
  try {
    data = ical.parseICS(text);
  } catch {
    return [];
  }

  const now = new Date();
  const horizon = new Date(now);
  horizon.setMonth(horizon.getMonth() + 6);

  const events: ChurchEvent[] = [];

  for (const key of Object.keys(data)) {
    const item = data[key];
    if (!item || item.type !== "VEVENT") continue;

    const title = String(item.summary ?? "").trim();
    const start = item.start as Date | undefined;
    if (!title || !start) continue;

    const end = (item.end as Date | undefined) ?? null;
    const allDay = item.datetype === "date";
    const location = item.location
      ? String(item.location).replace(/\\,/g, ",").trim()
      : null;
    const durationMs = end ? end.getTime() - start.getTime() : 0;

    if (item.rrule) {
      const excluded = item.exdate
        ? Object.values(item.exdate).map((d) =>
            new Date(d as unknown as string).toDateString()
          )
        : [];

      for (const occ of item.rrule.between(now, horizon, true)) {
        if (excluded.includes(occ.toDateString())) continue;
        events.push({
          id: `${key}-${occ.toISOString()}`,
          title,
          start: occ,
          end: durationMs ? new Date(occ.getTime() + durationMs) : null,
          allDay,
          location,
        });
      }
    } else {
      const compareEnd = end ?? start;
      if (compareEnd >= now && start <= horizon) {
        events.push({ id: key, title, start, end, allDay, location });
      }
    }
  }

  events.sort((a, b) => a.start.getTime() - b.start.getTime());
  return events.slice(0, limit);
}
