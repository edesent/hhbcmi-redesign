import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Globe2,
  HandHeart,
  HeartHandshake,
  MapPin,
  PlayCircle,
  UsersRound,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import CalendarFeed from "@/components/CalendarFeed";
import Footer from "@/components/Footer";

const serviceTimes = [
  { day: "Sunday", title: "Sunday School", time: "10:00 AM" },
  { day: "Sunday", title: "Morning Worship", time: "11:00 AM" },
  { day: "Sunday", title: "Evening Worship", time: "6:00 PM" },
  { day: "Wednesday", title: "Prayer & Bible Study", time: "7:00 PM" },
  { day: "Wednesday", title: "Children's Program", time: "7:00 PM" },
];

const ministries = [
  {
    title: "Faithful Worship",
    text: "Services centered on Scripture, prayer, and congregational worship.",
    icon: HeartHandshake,
  },
  {
    title: "Families Welcome",
    text: "Nursery is available for all services, with a Wednesday children's program.",
    icon: UsersRound,
  },
  {
    title: "Weekly Connection",
    text: "Prayer meeting, Bible study, events, and livestreams help the church stay close.",
    icon: CalendarDays,
  },
];

const groups = [
  { label: "Kids / VBS", photo: "/groups/children.jpg" },
  { label: "Teens", photo: "/groups/youth.jpg" },
  { label: "Men", photo: "/groups/men.jpg" },
  { label: "Women", photo: "/groups/women.jpg" },
  { label: "Seniors", photo: "/groups/seniors.jpg" },
];

const churchSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  "@id": "https://www.hhbcmi.com/#church",
  name: "Highland Hills Baptist Church",
  alternateName: "HHBC",
  description:
    "An independent Baptist church in Highland, Michigan offering Sunday School, Morning and Evening Worship, and Wednesday prayer and Bible study.",
  url: "https://www.hhbcmi.com",
  telephone: "+1-248-887-0698",
  email: "highlandhillsbaptistchurch1611@gmail.com",
  image: "https://www.hhbcmi.com/hero-poster.jpg",
  logo: "https://www.hhbcmi.com/highland-hills-baptist-logo.svg",
  priceRange: "Free",
  address: {
    "@type": "PostalAddress",
    streetAddress: "179 Woodruff Lake Rd",
    addressLocality: "Highland",
    addressRegion: "MI",
    postalCode: "48357",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.6710971,
    longitude: -83.6212673,
  },
  hasMap: "https://maps.app.goo.gl/4PUyrLZwsXvrzKzf6",
  areaServed: [
    "Highland, MI",
    "Highland Township, MI",
    "White Lake, MI",
    "Milford, MI",
    "Hartland, MI",
    "Oakland County, MI",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "18:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "19:00",
      closes: "20:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/HHBC1611/",
    "https://www.youtube.com/@highlandhillsbaptistchurch4533",
  ],
};

const promisedLandSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Promised Land Experience",
  description:
    "A free one-day, jam-packed camp experience for teens ages 12 and up, with exciting games, team competitions, powerful Bible preaching, food, fellowship, and fun.",
  startDate: "2026-09-12T10:00",
  endDate: "2026-09-12T14:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  image: "https://www.hhbcmi.com/events/file-000000003ad481f6acff31faabffcef1.png",
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
    url: "https://www.hhbcmi.com/",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vbsSchema) }}
      />
      <Navbar />
      <main id="home" className="overflow-hidden bg-cream">
        <Hero />
        <ActionBar />
        <Welcome />
        <Events />
        <CalendarFeed />
        <ServiceRhythm />
        <Groups />
        <Pastor />
        <Ministries />
        <Connect />
        <Give />
        <Location />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy-950 pb-16 pt-36 text-white sm:min-h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-navy-950/60" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(0deg,#061a34_0%,rgba(6,26,52,0)_100%)]" />

      <div className="section-shell relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <h1 className="font-script text-6xl font-semibold leading-[1.05] text-white sm:text-7xl lg:text-8xl">
          A Place to Call Home
        </h1>
        <p className="fine-label mt-5 text-sky-100">
          Highland, Michigan · Independent Baptist Church
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
          Join Highland Hills Baptist Church for Christ-centered worship, Bible
          teaching, prayer, and a warm place for your family to belong.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="#visit"
            className="button-light lift-link inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-sm font-extrabold hover:bg-sky-100"
          >
            Plan Your Visit
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="https://www.youtube.com/@highlandhillsbaptistchurch4533/streams"
            target="_blank"
            rel="noopener noreferrer"
            className="lift-link inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-7 py-4 text-sm font-extrabold text-white hover:bg-white/10"
          >
            <PlayCircle className="h-4 w-4" />
            Watch Live
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {serviceTimes.slice(0, 3).map((service) => (
            <div
              key={`${service.day}-${service.title}`}
              className="flex items-center gap-2.5 rounded-md border border-white/15 bg-white/10 px-4 py-2.5 backdrop-blur-md"
            >
              <span className="text-sm font-bold text-white">
                {service.title}
              </span>
              <span className="button-light rounded bg-white px-2 py-0.5 text-xs font-extrabold">
                {service.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActionBar() {
  const actions = [
    {
      href: "#visit",
      label: "Visit",
      text: "Service times and what to expect",
      icon: Clock3,
    },
    {
      href: "#connect",
      label: "Connect",
      text: "Facebook, livestream, and updates",
      icon: HeartHandshake,
    },
    {
      href: "#location",
      label: "Find Us",
      text: "179 Woodruff Lake Rd",
      icon: MapPin,
    },
  ];

  return (
    <section id="visit" className="relative z-20 bg-navy-950 pb-10">
      <div className="section-shell grid overflow-hidden rounded-lg border border-white/10 bg-white shadow-2xl md:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;
          const isExternal = action.href.startsWith("http");

          return (
            <a
              key={action.label}
              href={action.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group flex min-h-36 items-center gap-5 border-b border-sky-100 p-6 transition-colors hover:bg-sky-100 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-navy-900 text-white">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-serif text-2xl font-semibold text-navy-950">
                  {action.label}
                </span>
                <span className="mt-1 block text-sm leading-6 text-muted">
                  {action.text}
                </span>
              </span>
              <ArrowRight className="ml-auto h-4 w-4 text-blue-700 transition-transform group-hover:translate-x-1" />
            </a>
          );
        })}
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section className="bg-cream py-24 sm:py-28">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[420px] overflow-hidden rounded-lg bg-navy-900 soft-shadow">
          <Image
            src="/hero-poster.jpg"
            alt="Aerial view of Highland Hills Baptist Church"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,26,52,0.70),rgba(6,26,52,0.05))]" />
          <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
            <p className="fine-label text-sky-100">Highland Hills Baptist</p>
            <p className="mt-2 font-serif text-3xl font-semibold">
              A steady church home in Highland, MI.
            </p>
          </div>
        </div>

        <div>
          <p className="fine-label mb-4 text-blue-700">A Place to Belong</p>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl">
            Real people, faithful preaching, and an easy first Sunday in
            Highland.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Whether you are new to church, new to the area, or looking for a
            faithful place to worship, HHBC makes the essentials simple:
            service times up front, directions one tap away, and a church family
            ready to greet you.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-sky-100 bg-white p-5">
              <p className="text-3xl font-black text-navy-950">10:00</p>
              <p className="mt-2 text-sm font-bold text-blue-700">
                Sunday School starts the day.
              </p>
            </div>
            <div className="rounded-lg border border-sky-100 bg-white p-5">
              <p className="text-3xl font-black text-navy-950">11:00</p>
              <p className="mt-2 text-sm font-bold text-blue-700">
                Morning Worship follows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Events() {
  const schedule = [
    {
      icon: CalendarDays,
      label: "Date",
      detail: "Saturday, September 12",
    },
    {
      icon: Clock3,
      label: "Time",
      detail: "10:00 AM – 2:00 PM",
    },
    {
      icon: UsersRound,
      label: "For Teens",
      detail: "Ages 12 & up",
    },
    {
      icon: MapPin,
      label: "Location",
      detail: "179 Woodruff Lake Rd, Highland, MI 48357",
    },
  ];

  return (
    <section id="events" className="bg-navy-950 py-24 text-white">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="fine-label mb-4 text-sky-100">Upcoming Event</p>
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
            Promised Land Experience
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            A free one-day camp experience for teens ages 12 and up.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-lg border border-white/10 bg-white/5 soft-shadow lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-full">
            <Image
              src="/events/file-000000003ad481f6acff31faabffcef1.png"
              alt="Promised Land Experience event flyer"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="p-8 sm:p-10">
            <span className="button-light inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-extrabold">
              <CalendarDays className="h-4 w-4" />
              Saturday, September 12
            </span>
            <h3 className="mt-6 font-serif text-3xl font-semibold">
              Camp Promised Land Presents
            </h3>
            <p className="mt-3 leading-7 text-white/70">
              Join us for a <strong className="text-white">FREE</strong>{" "}
              one-day, jam-packed camp experience with exciting games, team
              competitions, powerful Bible preaching, food, fellowship, and fun.
              Lunch is provided!
            </p>

            <div className="mt-7 space-y-4">
              {schedule.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-gold">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-white">
                        {item.label}
                      </p>
                      <p className="text-sm text-white/70">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-md border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-bold text-white">Guest Preacher</p>
              <p className="mt-1 text-lg font-semibold text-sky-100">
                Mario Chadinha Jr.
              </p>
              <p className="mt-1 text-sm text-white/60">Camp Director</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://maps.app.goo.gl/4PUyrLZwsXvrzKzf6"
                target="_blank"
                rel="noopener noreferrer"
                className="button-light lift-link inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-sm font-extrabold hover:bg-sky-100"
              >
                Get Directions
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="tel:+12488870698"
                className="lift-link inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-7 py-4 text-sm font-extrabold text-white hover:bg-white/10"
              >
                Questions? Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceRhythm() {
  return (
    <section id="services" className="bg-white-soft py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="fine-label mb-4 text-blue-700">Weekly Service Times</p>
          <h2 className="font-serif text-4xl font-semibold text-navy-950 sm:text-5xl">
            A simple weekly schedule for worship, prayer, and Bible study.
          </h2>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {serviceTimes.map((service) => (
            <div
              key={`${service.day}-${service.title}`}
              className="rounded-lg border border-sky-100 bg-white p-5 text-center shadow-sm"
            >
              <p className="text-sm font-bold text-blue-700">{service.day}</p>
              <h3 className="mt-3 min-h-12 font-serif text-2xl font-semibold leading-6 text-navy-950">
                {service.title}
              </h3>
              <p className="mt-5 rounded-md bg-navy-900 px-4 py-3 text-base font-black text-white">
                {service.time}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-base font-semibold text-muted">
          Nursery available for all services.
        </p>
      </div>
    </section>
  );
}

function Groups() {
  return (
    <section id="groups" className="bg-navy-950 py-24 text-white">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="fine-label mb-4 text-sky-100">For Every Stage of Life</p>
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
            Connect with people like you.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/70">
            God made us for community. Whatever season you are in, there is a
            place for you and your family at Highland Hills.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
          {groups.map((group) => (
            <div
              key={group.label}
              className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl soft-shadow"
            >
              <Image
                src={group.photo}
                alt={group.label}
                fill
                sizes="(min-width: 1024px) 18vw, (min-width: 768px) 30vw, 45vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/25 to-transparent" />
              <div className="relative p-5 sm:p-6">
                <h3 className="font-serif text-2xl font-semibold text-white drop-shadow">
                  {group.label}
                </h3>
                <span className="mt-2 block h-[3px] w-10 rounded bg-gold transition-all duration-300 group-hover:w-16" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/ministries"
            className="button-light lift-link inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-sm font-extrabold hover:bg-sky-100"
          >
            Explore All Ministries
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Pastor() {
  return (
    <section id="pastor" className="bg-cream py-24 sm:py-28">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <figure className="overflow-hidden rounded-lg border border-sky-100 bg-white soft-shadow">
          <div className="relative aspect-square">
            <Image
              src="/pastor-matt-and-wife.png"
              alt="Pastor Matt Leathley and his wife, Meaghan"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="px-6 py-5 text-center">
            <p className="font-serif text-2xl font-semibold text-navy-950">
              Pastor Matt Leathley
            </p>
            <p className="fine-label mt-1 text-blue-700">
              Senior Pastor · with his wife, Meaghan
            </p>
          </figcaption>
        </figure>

        <div>
          <p className="fine-label mb-4 text-blue-700">Meet Our Pastor</p>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl">
            A faithful shepherd for the church family.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Pastor Matt Leathley has served as Senior Pastor of Highland Hills
            Baptist Church since January 2024, after first ministering to the
            congregation as assistant pastor. Before coming to Highland, he
            spent a decade in missionary work across the Congo (DRC) and South
            Africa.
          </p>
          <p className="mt-4 text-lg leading-8 text-muted">
            Together with his wife, Meaghan, he leads HHBC with a heart for
            consistent Bible preaching and teaching, faithful care for the
            congregation, and a steady reach into the community and the foreign
            mission field.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-lg border border-sky-100 bg-white p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy-900 text-white">
                <BookOpen className="h-5 w-5" />
              </span>
              <p className="text-sm font-bold leading-6 text-navy-950">
                Consistent Bible preaching &amp; teaching
              </p>
            </div>
            <div className="flex items-start gap-4 rounded-lg border border-sky-100 bg-white p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy-900 text-white">
                <Globe2 className="h-5 w-5" />
              </span>
              <p className="text-sm font-bold leading-6 text-navy-950">
                Community outreach &amp; foreign missions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ministries() {
  return (
    <section
      id="ministries"
      className="relative overflow-hidden bg-navy-950 py-24 text-white"
    >
      <Image
        src="/life-together.jpg"
        alt="Highland Hills Baptist Church congregation gathered for worship"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy-950/88" />
      <div className="section-shell relative z-10 grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="fine-label mb-4 text-sky-100">Life Together</p>
          <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Built around the things a church family actually needs.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/70">
            The redesign gives first-time guests the same clear path the church
            already offers in person: worship, care for children, fellowship,
            and steady communication.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {ministries.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/10 p-6"
              >
                <span className="button-light flex h-12 w-12 items-center justify-center rounded-md bg-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Connect() {
  return (
    <section id="connect" className="bg-cream py-24">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="fine-label mb-4 text-blue-700">Stay Connected</p>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl">
            Follow what is happening at HHBC throughout the week.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            The new design turns Facebook and YouTube into clear, beautiful
            pathways for updates, livestreams, and recent services without
            making guests hunt for them.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.facebook.com/HHBC1611/"
              target="_blank"
              rel="noopener noreferrer"
              className="lift-link inline-flex items-center justify-center rounded-md bg-navy-900 px-7 py-4 text-sm font-extrabold text-white! hover:bg-navy-800"
            >
              Visit Facebook
            </a>
            <a
              href="https://www.youtube.com/@highlandhillsbaptistchurch4533"
              target="_blank"
              rel="noopener noreferrer"
              className="button-light lift-link inline-flex items-center justify-center gap-2 rounded-md border border-navy-900/20 bg-white px-7 py-4 text-sm font-extrabold hover:border-blue-500 hover:bg-sky-100"
            >
              <PlayCircle className="h-4 w-4" />
              YouTube Channel
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-x-10 bottom-4 h-16 rounded-full bg-navy-950/20 blur-2xl" />
          <Image
            src="/hhbc-iphone-mockup.png"
            alt="Highland Hills Baptist Church Facebook page on a phone"
            width={947}
            height={1300}
            className="relative h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}

function Give() {
  return (
    <section id="give" className="bg-navy-950 py-24 text-white">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <span className="button-light mx-auto flex h-14 w-14 items-center justify-center rounded-md bg-white">
            <HandHeart className="h-6 w-6" />
          </span>
          <p className="fine-label mt-6 text-sky-100">Give</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
            Support the ministry of HHBC.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Your generosity helps us preach the gospel, care for our church
            family, and reach our community and the mission field. Giving online
            is simple and secure.
          </p>
          <Link
            href="/give"
            className="button-light lift-link mt-9 inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-sm font-extrabold hover:bg-sky-100"
          >
            Give Online
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Location() {
  const mapQuery = "179 Woodruff Lake Rd, Highland, MI 48357";

  return (
    <section id="location" className="bg-white-soft py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg bg-navy-900 p-8 text-white soft-shadow">
          <p className="fine-label mb-4 text-sky-100">Location</p>
          <h2 className="font-serif text-4xl font-semibold leading-tight">
            We would love to meet you this week.
          </h2>
          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <p className="leading-7 text-white/80">
                179 Woodruff Lake Rd
                <br />
                Highland, MI 48357
              </p>
            </div>
            <div className="flex gap-4">
              <Clock3 className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <p className="leading-7 text-white/80">
                Sundays at 10:00 AM, 11:00 AM, and 6:00 PM
                <br />
                Wednesdays at 7:00 PM
              </p>
            </div>
          </div>
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

        <div className="min-h-[460px] overflow-hidden rounded-lg border border-sky-100 bg-white soft-shadow">
          <iframe
            title="Map to Highland Hills Baptist Church"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              mapQuery
            )}&output=embed`}
            className="h-full min-h-[460px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

