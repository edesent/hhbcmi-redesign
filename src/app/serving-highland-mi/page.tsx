import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Navigation } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "A Baptist Church Near You in the Highland, MI Area",
  description:
    "Looking for a Baptist church near you? Highland Hills Baptist Church welcomes families from Highland, Milford, White Lake, Commerce, Hartland, Waterford, Wixom, Holly, and Clarkston, Michigan. Come visit this Sunday.",
  keywords: [
    "Baptist church near me",
    "church near Milford MI",
    "church near White Lake MI",
    "Baptist church Commerce Township",
    "church near Hartland MI",
    "independent Baptist church Oakland County",
    "church near Waterford MI",
    "church near Highland Michigan",
  ],
  alternates: { canonical: "/serving-highland-mi" },
  openGraph: {
    title: "A Baptist Church Near You | Highland Hills Baptist Church",
    description:
      "Serving Highland and the surrounding communities of Oakland and Livingston County, Michigan. Come as you are this Sunday.",
    url: "https://www.hhbcmi.com/serving-highland-mi",
    type: "website",
    locale: "en_US",
    siteName: "Highland Hills Baptist Church",
    images: ["/hero-poster.jpg"],
  },
};

const communities = [
  {
    town: "Highland",
    note: "Our home community — right on Woodruff Lake Rd, just off M-59 (Highland Rd).",
  },
  {
    town: "Milford",
    note: "A short drive east — many of our church family call the Milford area home.",
  },
  {
    town: "White Lake",
    note: "Just minutes away for families looking for a Bible-preaching church nearby.",
  },
  {
    town: "Commerce Township",
    note: "An easy trip up for Sunday worship and Wednesday Bible study.",
  },
  {
    town: "Hartland",
    note: "Right over the Livingston County line — you are always welcome here.",
  },
  {
    town: "Waterford",
    note: "A convenient drive west on M-59 to join us for worship.",
  },
  {
    town: "Wixom",
    note: "Come north to a warm church family and faithful Bible preaching.",
  },
  {
    town: "Holly & Clarkston",
    note: "A bit farther out, but well worth the drive for a church that feels like home.",
  },
];

export default function ServingHighlandPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <section className="bg-navy-950 pb-16 pt-36 text-white">
          <div className="section-shell max-w-3xl">
            <p className="fine-label mb-4 text-sky-100">Our Community</p>
            <h1 className="font-serif text-4xl font-semibold sm:text-5xl">
              A Baptist church near you in the Highland area.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/75">
              If you have been searching for a Baptist church near you, we would
              love to meet you. Highland Hills Baptist Church sits in the heart
              of Highland, Michigan, and welcomes families from across Oakland
              and Livingston County. Wherever you are coming from, there is a
              seat and a warm welcome waiting.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell max-w-4xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="fine-label mb-4 text-blue-700">
                Serving the Surrounding Towns
              </p>
              <h2 className="font-serif text-3xl font-semibold text-navy-950 sm:text-4xl">
                Communities we are glad to serve.
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {communities.map((community) => (
                <div
                  key={community.town}
                  className="flex gap-4 rounded-lg border border-sky-100 bg-white p-6 soft-shadow"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy-900 text-gold">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-navy-950">
                      {community.town}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      {community.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white-soft py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="fine-label mb-4 text-blue-700">Finding Us</p>
              <h2 className="font-serif text-3xl font-semibold text-navy-950 sm:text-4xl">
                Easy to reach from M-59.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                Highland Hills Baptist Church is located at{" "}
                <strong>179 Woodruff Lake Rd, Highland, MI 48357</strong>, just
                off M-59 (Highland Road). There is plenty of on-site parking, and
                a greeter will be glad to help you find your way when you arrive.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://maps.app.goo.gl/4PUyrLZwsXvrzKzf6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-light lift-link inline-flex items-center justify-center gap-2 rounded-md bg-navy-900 px-7 py-4 text-sm font-extrabold text-white! hover:bg-navy-800"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
                <Link
                  href="/what-to-expect"
                  className="button-light lift-link inline-flex items-center justify-center gap-2 rounded-md border border-navy-900/20 bg-white px-7 py-4 text-sm font-extrabold hover:border-blue-500 hover:bg-sky-100"
                >
                  What to Expect
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg border border-sky-100 soft-shadow">
              <iframe
                title="Map to Highland Hills Baptist Church"
                src="https://www.google.com/maps?q=179+Woodruff+Lake+Rd,+Highland,+MI+48357&output=embed"
                width="100%"
                height="360"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
