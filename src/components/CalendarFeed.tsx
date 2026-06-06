import { ArrowRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import { CALENDAR_TZ, getUpcomingEvents } from "@/lib/calendar";

const monthFmt = new Intl.DateTimeFormat("en-US", {
  month: "short",
  timeZone: CALENDAR_TZ,
});
const dayFmt = new Intl.DateTimeFormat("en-US", {
  day: "numeric",
  timeZone: CALENDAR_TZ,
});
const dateFmt = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  timeZone: CALENDAR_TZ,
});
const timeFmt = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  timeZone: CALENDAR_TZ,
});

export default async function CalendarFeed() {
  const events = await getUpcomingEvents(5);

  return (
    <section id="calendar" className="bg-cream py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="fine-label mb-4 text-blue-700">Church Calendar</p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl">
              What&rsquo;s coming up at HHBC.
            </h2>
          </div>
          <a
            href="/calendar"
            className="button-light lift-link inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-navy-900/20 bg-white px-6 py-3 text-sm font-extrabold hover:border-blue-500 hover:bg-sky-100"
          >
            View Full Calendar
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {events.length === 0 ? (
          <div className="mt-10 flex items-center gap-4 rounded-lg border border-sky-100 bg-white p-8 soft-shadow">
            <CalendarDays className="h-6 w-6 shrink-0 text-blue-700" />
            <p className="text-base text-muted">
              See our full schedule of services and events on the church
              calendar.
            </p>
          </div>
        ) : (
          <ul className="mt-10 divide-y divide-sky-100 overflow-hidden rounded-lg border border-sky-100 bg-white soft-shadow">
            {events.map((event) => (
              <li
                key={event.id}
                className="flex items-center gap-5 p-5 sm:gap-6 sm:p-6"
              >
                <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-md bg-navy-900 text-white">
                  <span className="text-[0.65rem] font-bold uppercase tracking-wide text-sky-100">
                    {monthFmt.format(event.start)}
                  </span>
                  <span className="text-2xl font-black leading-none">
                    {dayFmt.format(event.start)}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-xl font-semibold text-navy-950">
                    {event.title}
                  </h3>
                  <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
                    <Clock3 className="h-4 w-4 shrink-0 text-blue-700" />
                    <span>
                      {dateFmt.format(event.start)}
                      {!event.allDay && ` · ${timeFmt.format(event.start)}`}
                    </span>
                  </p>
                  {event.location && (
                    <p className="mt-1 flex items-center gap-2 text-sm text-muted">
                      <MapPin className="h-4 w-4 shrink-0 text-blue-700" />
                      <span className="truncate">{event.location}</span>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
