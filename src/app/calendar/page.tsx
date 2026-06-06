import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { CALENDAR_EMBED_URL } from "@/lib/calendar";

export const metadata: Metadata = {
  title: "Calendar",
  description:
    "Services, events, and special meetings at Highland Hills Baptist Church in Highland, Michigan.",
  alternates: { canonical: "/calendar" },
};

export default function CalendarPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <section className="bg-navy-950 pb-16 pt-36 text-white">
          <div className="section-shell">
            <p className="fine-label mb-4 text-sky-100">
              Highland Hills Baptist Church
            </p>
            <h1 className="font-serif text-4xl font-semibold sm:text-5xl">
              Church Calendar
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
              Our weekly services, events, and special meetings all in one
              place. You are always welcome to join us.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="section-shell">
            <div className="overflow-hidden rounded-lg border border-sky-100 bg-white soft-shadow">
              <iframe
                title="Highland Hills Baptist Church calendar"
                src={CALENDAR_EMBED_URL}
                className="h-[680px] w-full sm:h-[760px]"
                loading="lazy"
              />
            </div>
            <a
              href="/"
              className="lift-link mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-blue-700 hover:text-navy-950"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
