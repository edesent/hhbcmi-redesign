import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vacation Bible School (VBS)",
  description:
    "Vacation Bible School at Highland Hills Baptist Church in Highland, MI — Emerald Crossing: An Irish Adventure Through Psalm 23. August 3–7, 6:30–8:15 PM. A free week of Bible lessons, songs, crafts, and fun for kids. All are welcome!",
  keywords: [
    "Vacation Bible School Highland MI",
    "VBS near me",
    "VBS Highland Michigan",
    "kids summer program Highland MI",
    "free VBS 2026",
    "Emerald Crossing VBS",
  ],
  alternates: { canonical: "/vbs" },
  openGraph: {
    title: "Vacation Bible School | Highland Hills Baptist Church",
    description:
      "Emerald Crossing VBS — An Irish Adventure Through Psalm 23. August 3–7 at Highland Hills Baptist Church. Free and open to all kids!",
    url: "https://www.hhbcmi.com/vbs",
    type: "website",
    locale: "en_US",
    siteName: "Highland Hills Baptist Church",
    images: ["/vbs.jpg"],
  },
};

const vbsSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Emerald Crossing VBS",
  description:
    "Vacation Bible School at Highland Hills Baptist Church — Emerald Crossing: An Irish Adventure Through Psalm 23. A week of Bible lessons, songs, crafts, and fun for kids. Free and open to all.",
  startDate: "2026-08-03T18:30",
  endDate: "2026-08-07T20:15",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  image: "https://www.hhbcmi.com/vbs.jpg",
  location: {
    "@type": "Place",
    name: "Highland Hills Baptist Church",
    address: {
      "@type": "PostalAddress",
      streetAddress: "179 Woodruff Lake Rd",
      addressLocality: "Highland",
      addressRegion: "MI",
      postalCode: "48357",
      addressCountry: "US",
    },
  },
  organizer: {
    "@type": "Church",
    name: "Highland Hills Baptist Church",
    url: "https://www.hhbcmi.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://www.hhbcmi.com/vbs",
  },
};

const details = [
  { icon: CalendarDays, label: "Dates", value: "Monday–Friday, August 3–7" },
  { icon: Clock3, label: "Nightly", value: "6:30 – 8:15 PM" },
  { icon: MapPin, label: "Location", value: "179 Woodruff Lake Rd, Highland" },
];

export default function VbsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vbsSchema) }}
      />
      <Navbar />
      <main className="bg-cream">
        <section className="bg-navy-950 pb-16 pt-36 text-white">
          <div className="section-shell grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="fine-label mb-4 text-sky-100">
                Vacation Bible School 2026
              </p>
              <h1 className="font-serif text-4xl font-semibold sm:text-5xl">
                Emerald Crossing
              </h1>
              <p className="mt-3 text-xl font-semibold text-gold">
                An Irish Adventure Through Psalm 23
              </p>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
                Bring the kids for a free, fun-filled week of Bible lessons,
                songs, crafts, games, and snacks at Highland Hills Baptist
                Church in Highland, Michigan. All children are welcome — invite
                a friend!
              </p>
              <a
                href="https://maps.app.goo.gl/4PUyrLZwsXvrzKzf6"
                target="_blank"
                rel="noopener noreferrer"
                className="button-light lift-link mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-sm font-extrabold hover:bg-sky-100"
              >
                Get Directions
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="relative aspect-[2/1] overflow-hidden rounded-lg soft-shadow lg:aspect-[4/3]">
              <Image
                src="/vbs.jpg"
                alt="Emerald Crossing VBS at Highland Hills Baptist Church"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="section-shell max-w-4xl">
            <div className="grid gap-4 sm:grid-cols-3">
              {details.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div
                    key={detail.label}
                    className="rounded-lg border border-sky-100 bg-white p-6 text-center soft-shadow"
                  >
                    <span className="button-light mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-navy-900 text-gold">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="mt-4 text-sm font-bold text-blue-700">
                      {detail.label}
                    </p>
                    <p className="mt-1 font-semibold text-navy-950">
                      {detail.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="section-shell max-w-3xl">
            <h2 className="font-serif text-3xl font-semibold text-navy-950 sm:text-4xl">
              What is VBS?
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Vacation Bible School is one of the highlights of our year — a week
              where children from all over the Highland area come together to
              learn about God through the Bible in a way that is exciting and
              memorable. This year&rsquo;s theme, <em>Emerald Crossing</em>,
              takes kids on an Irish adventure through Psalm 23 to answer a big
              question: <strong>Is there a God who cares?</strong>
            </p>
            <p className="mt-4 text-lg leading-8 text-muted">
              Each night is packed with Bible lessons, energetic singing, hands-on
              crafts, team games, and snacks. VBS is completely free, and you do
              not have to be a member — every child is welcome, so bring the
              whole family and invite the neighbors.
            </p>
            <p className="mt-6 text-base font-semibold text-navy-950">
              Questions about VBS? Call us at{" "}
              <a href="tel:+12488870698" className="text-blue-700">
                (248) 887-0698
              </a>{" "}
              or message us on{" "}
              <a
                href="https://www.facebook.com/HHBC1611/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700"
              >
                Facebook
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
