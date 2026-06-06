import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  HeartHandshake,
  MapPin,
  PlayCircle,
  UsersRound,
} from "lucide-react";
import Navbar from "@/components/Navbar";

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

const churchSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "Highland Hills Baptist Church",
  url: "https://www.hhbcmi.com",
  telephone: "+1-248-887-0698",
  address: {
    "@type": "PostalAddress",
    streetAddress: "179 Woodruff Lake Rd",
    addressLocality: "Highland",
    addressRegion: "MI",
    postalCode: "48357",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/HHBC1611/",
    "https://www.youtube.com/@highlandhillsbaptistchurch4533",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
      />
      <Navbar />
      <main id="home" className="overflow-hidden bg-cream">
        <Hero />
        <ActionBar />
        <Welcome />
        <ServiceRhythm />
        <Ministries />
        <Connect />
        <Location />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-navy-950 pb-10 pt-36 text-white sm:min-h-screen sm:pb-14">
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
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,26,52,0.92)_0%,rgba(6,26,52,0.72)_48%,rgba(6,26,52,0.34)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(0deg,#061a34_0%,rgba(6,26,52,0)_100%)]" />

      <div className="section-shell relative z-10 grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_370px]">
        <div className="w-full max-w-[calc(100vw-32px)] lg:max-w-3xl">
          <Image
            src="/place-to-call-home-blue.svg"
            alt="A place to call home"
            width={300}
            height={55}
            className="mb-7 h-auto w-64 rounded-md bg-white px-5 py-3 shadow-lg"
            priority
          />
          <p className="fine-label mb-4 text-sky-100">
            Highland, Michigan | Independent Baptist Church
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.04] text-white sm:text-6xl lg:text-7xl">
            <span className="block">A welcoming church</span>
            <span className="block">family in the heart</span>
            <span className="block">of Highland.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            Join Highland Hills Baptist Church for Christ-centered worship,
            Bible teaching, prayer, and a warm place for your family to belong.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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
        </div>

        <aside className="rounded-lg border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-md">
          <p className="fine-label text-sky-100">This Week</p>
          <div className="mt-5 space-y-4">
            {serviceTimes.slice(0, 4).map((service) => (
              <div
                key={`${service.day}-${service.title}`}
                className="flex flex-col items-start gap-2 border-b border-white/10 pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
              >
                <div>
                  <p className="text-sm font-bold text-white">{service.title}</p>
                  <p className="text-sm text-white/60">{service.day}</p>
                </div>
                <p className="button-light shrink-0 rounded-md bg-white px-3 py-2 text-sm font-extrabold">
                  {service.time}
                </p>
              </div>
            ))}
          </div>
        </aside>
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
      href: "https://maps.app.goo.gl/4PUyrLZwsXvrzKzf6",
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
          <p className="fine-label mb-4 text-blue-700">Welcome Home</p>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl">
            Clear next steps, warm people, and a Sunday rhythm that is easy to
            join.
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

function ServiceRhythm() {
  return (
    <section id="services" className="bg-white-soft py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="fine-label mb-4 text-blue-700">Weekly Service Times</p>
          <h2 className="font-serif text-4xl font-semibold text-navy-950 sm:text-5xl">
            A simple weekly rhythm for worship, prayer, and Bible study.
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

function Ministries() {
  return (
    <section id="ministries" className="bg-navy-950 py-24 text-white">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
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
              className="lift-link inline-flex items-center justify-center rounded-md bg-navy-900 px-7 py-4 text-sm font-extrabold text-white hover:bg-navy-800"
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

function Footer() {
  return (
    <footer className="bg-navy-950 py-12 text-white">
      <div className="section-shell flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-4">
          <Image
            src="/hhbc-mark.svg"
            alt=""
            width={58}
            height={58}
            className="h-14 w-14 rounded-full bg-white p-2"
          />
          <div>
            <Image
              src="/highland-hills-baptist-logo.svg"
              alt="Highland Hills Baptist Church"
              width={300}
              height={85}
              className="h-auto w-56"
            />
            <p className="mt-2 text-sm text-white/60">
              179 Woodruff Lake Rd | Highland, MI 48357 | (248) 887-0698
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <a
            href="https://www.facebook.com/HHBC1611/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/20 px-4 py-2 text-sm font-bold text-white/80 hover:bg-white/10 hover:text-white"
          >
            Facebook
          </a>
          <a
            href="https://www.youtube.com/@highlandhillsbaptistchurch4533"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-white/20 px-4 py-2 text-sm font-bold text-white/80 hover:bg-white/10 hover:text-white"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}
