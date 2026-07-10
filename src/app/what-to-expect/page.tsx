import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  MapPin,
  Music4,
  Baby,
  Shirt,
  BookOpen,
  HandHeart,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "What to Expect on Your First Visit",
  description:
    "New to Highland Hills Baptist Church in Highland, MI? Here is what to expect on your first Sunday — service times, what to wear, parking, childcare, and a warm welcome. Visitors and families welcome.",
  keywords: [
    "what to expect at church",
    "first time visiting a Baptist church",
    "Baptist church near me Highland MI",
    "church for visitors Highland Michigan",
    "independent Baptist church Highland MI",
    "Sunday service Highland MI",
  ],
  alternates: { canonical: "/what-to-expect" },
  openGraph: {
    title: "What to Expect | Highland Hills Baptist Church",
    description:
      "Planning your first visit to Highland Hills Baptist Church? Here is everything you need for a comfortable, welcoming first Sunday.",
    url: "https://www.hhbcmi.com/what-to-expect",
    type: "website",
    locale: "en_US",
    siteName: "Highland Hills Baptist Church",
    images: ["/hero-poster.jpg"],
  },
};

const faqs = [
  {
    icon: Clock3,
    q: "When should I arrive?",
    a: "Sunday School begins at 10:00 AM and Morning Worship at 11:00 AM. Arriving about ten minutes early gives you time to park, be greeted, and find a seat without any rush. A friendly face will be at the door to help you find your way.",
  },
  {
    icon: Shirt,
    q: "What should I wear?",
    a: "Come as you are — you will be welcome in whatever you are comfortable wearing. You will see a range of dress on any given Sunday, from casual to Sunday best. We care far more that you are here than about what you have on.",
  },
  {
    icon: MapPin,
    q: "Where do I park and go?",
    a: "There is on-site parking at 179 Woodruff Lake Rd. Enter through the main doors, where a greeter will welcome you, answer any questions, and point you toward the sanctuary and children's areas.",
  },
  {
    icon: Baby,
    q: "What about my children?",
    a: "Families are very welcome. A nursery is available for all services, and we have a children's program on Wednesday evenings. Your kids are safe, cared for, and always welcome in the service too.",
  },
  {
    icon: Music4,
    q: "What is a service like?",
    a: "A typical service lasts about an hour and includes congregational singing, prayer, and clear, encouraging Bible preaching from the King James Version. You will never be pressured or put on the spot — you are free to simply come, sit, and listen.",
  },
  {
    icon: HandHeart,
    q: "Will I be singled out?",
    a: "No. We are glad when guests visit, but we will not embarrass you or ask you to stand up. Giving is an act of worship for our members, and guests should never feel any obligation to give.",
  },
];

const services = [
  { day: "Sunday", title: "Sunday School", time: "10:00 AM" },
  { day: "Sunday", title: "Morning Worship", time: "11:00 AM" },
  { day: "Sunday", title: "Evening Worship", time: "6:00 PM" },
  { day: "Wednesday", title: "Prayer & Bible Study", time: "7:00 PM" },
];

export default function WhatToExpectPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <section className="bg-navy-950 pb-16 pt-36 text-white">
          <div className="section-shell max-w-3xl">
            <p className="fine-label mb-4 text-sky-100">Plan Your Visit</p>
            <h1 className="font-serif text-4xl font-semibold sm:text-5xl">
              What to expect on your first visit.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/75">
              Visiting a church for the first time can feel like a big step. At
              Highland Hills Baptist Church in Highland, Michigan, we want your
              first Sunday to be easy and comfortable. Here is everything you
              need to know before you come.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              {faqs.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.q}
                    className="rounded-lg border border-sky-100 bg-white p-7 soft-shadow"
                  >
                    <span className="button-light flex h-12 w-12 items-center justify-center rounded-md bg-navy-900 text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="mt-5 font-serif text-2xl font-semibold text-navy-950">
                      {item.q}
                    </h2>
                    <p className="mt-3 leading-7 text-muted">{item.a}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white-soft py-20">
          <div className="section-shell max-w-4xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="fine-label mb-4 text-blue-700">Service Times</p>
              <h2 className="font-serif text-3xl font-semibold text-navy-950 sm:text-4xl">
                When we gather each week.
              </h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div
                  key={`${service.day}-${service.title}`}
                  className="rounded-lg border border-sky-100 bg-white p-5 text-center shadow-sm"
                >
                  <p className="text-sm font-bold text-blue-700">
                    {service.day}
                  </p>
                  <h3 className="mt-3 min-h-12 font-serif text-xl font-semibold leading-6 text-navy-950">
                    {service.title}
                  </h3>
                  <p className="mt-4 rounded-md bg-navy-900 px-4 py-3 text-base font-black text-white">
                    {service.time}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm font-semibold text-muted">
              Nursery available for all services.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell max-w-4xl">
            <div className="rounded-lg bg-navy-950 p-8 text-white sm:p-12">
              <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
                We would love to see you this Sunday.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75">
                Have a question before you come, or want someone to meet you at
                the door? Reach out any time — we are glad to help. You can also
                learn more about our beliefs and ministries below.
              </p>
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
                <Link
                  href="/what-we-believe"
                  className="lift-link inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-7 py-4 text-sm font-extrabold text-white hover:bg-white/10"
                >
                  <BookOpen className="h-4 w-4" />
                  What We Believe
                </Link>
                <Link
                  href="/ministries"
                  className="lift-link inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-7 py-4 text-sm font-extrabold text-white hover:bg-white/10"
                >
                  Our Ministries
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
