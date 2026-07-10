import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bus, type LucideIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ministries",
  description:
    "Ministries at Highland Hills Baptist Church in Highland, MI — children's ministry and VBS, youth group for teens, men's and women's ministries, and fellowship for seniors. There is a place for your whole family.",
  keywords: [
    "church ministries Highland MI",
    "children's ministry Highland Michigan",
    "youth group Highland MI",
    "men's ministry Baptist church",
    "women's ministry Highland MI",
    "Sunday school Highland Michigan",
  ],
  alternates: { canonical: "/ministries" },
  openGraph: {
    title: "Ministries | Highland Hills Baptist Church",
    description:
      "From children to seniors, there is a ministry for every stage of life at Highland Hills Baptist Church.",
    url: "https://www.hhbcmi.com/ministries",
    type: "website",
    locale: "en_US",
    siteName: "Highland Hills Baptist Church",
    images: ["/groups/children.jpg"],
  },
};

type Ministry = {
  title: string;
  when: string;
  body: string;
  photo?: string;
  icon?: LucideIcon;
  cta?: { href: string; label: string };
};

const ministries: Ministry[] = [
  {
    title: "Children's Ministry & VBS",
    photo: "/groups/children.jpg",
    when: "Sunday School 10:00 AM · Wednesday Children's Program 7:00 PM",
    body: "From the nursery to our Wednesday children's program, we are committed to helping kids learn God's Word in a way they can understand and enjoy. Every summer we host Vacation Bible School — a highlight of the year for children across the Highland area. A safe, loving nursery is available at every service.",
    cta: { href: "/vbs", label: "Learn about VBS" },
  },
  {
    title: "Youth Ministry (Teens)",
    photo: "/groups/youth.jpg",
    when: "Weekly, alongside our Sunday and Wednesday services",
    body: "Our youth ministry gives teenagers a place to grow in their faith, ask real questions, and build genuine friendships. We want students to leave rooted in the truth of Scripture and encouraged to live for Christ in their school and community.",
  },
  {
    title: "Men's Ministry",
    photo: "/groups/men.jpg",
    when: "Fellowship and study throughout the year",
    body: "The men of Highland Hills gather for fellowship, discipleship, and service. Our aim is to encourage men to be faithful husbands, fathers, and servants of Christ — sharpening one another in the Word and standing together in the work of the church.",
  },
  {
    title: "Women's Ministry",
    photo: "/groups/women.jpg",
    when: "Bible study, fellowship, and events through the year",
    body: "Our women's ministry offers Bible study, encouragement, and friendship for women in every season of life. Whether you are a young mom, a working woman, or a grandmother, you will find a place to grow in the Lord and to be cared for by others.",
  },
  {
    title: "Senior Saints",
    photo: "/groups/seniors.jpg",
    when: "Fellowship and ministry throughout the year",
    body: "We treasure the senior members of our church family. Through fellowship, care, and ministry opportunities, our senior saints continue to be a vital, active, and honored part of the life of Highland Hills Baptist Church.",
  },
  {
    title: "Bus Ministry",
    icon: Bus,
    when: "Free rides to and from Sunday services",
    body: "Need a ride to church? Our bus ministry provides free transportation to and from our services for children and families across the Highland area. If you or your kids would like a ride, just give us a call and we will be glad to arrange a pickup.",
  },
];

export default function MinistriesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <section className="bg-navy-950 pb-16 pt-36 text-white">
          <div className="section-shell max-w-3xl">
            <p className="fine-label mb-4 text-sky-100">For Every Stage of Life</p>
            <h1 className="font-serif text-4xl font-semibold sm:text-5xl">
              Ministries at Highland Hills.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/75">
              God made us for community. Whatever season you are in, there is a
              place for you and your family at Highland Hills Baptist Church —
              from our youngest children to our senior saints.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell max-w-5xl space-y-16">
            {ministries.map((ministry, index) => {
              const Icon = ministry.icon;

              return (
              <div
                key={ministry.title}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
              >
                <div
                  className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg soft-shadow ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  } ${ministry.photo ? "" : "bg-navy-950"}`}
                >
                  {ministry.photo ? (
                    <Image
                      src={ministry.photo}
                      alt={ministry.title}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    Icon && (
                      <Icon
                        className="h-24 w-24 text-gold"
                        strokeWidth={1.25}
                      />
                    )
                  )}
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-semibold text-navy-950">
                    {ministry.title}
                  </h2>
                  <p className="mt-2 text-sm font-bold text-blue-700">
                    {ministry.when}
                  </p>
                  <p className="mt-4 text-lg leading-8 text-muted">
                    {ministry.body}
                  </p>
                  {ministry.cta && (
                    <Link
                      href={ministry.cta.href}
                      className="lift-link mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-blue-700 hover:text-navy-950"
                    >
                      {ministry.cta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
              );
            })}
          </div>
        </section>

        <section className="bg-white-soft py-20">
          <div className="section-shell max-w-3xl text-center">
            <p className="fine-label mb-4 text-blue-700">Come Be a Part</p>
            <h2 className="font-serif text-3xl font-semibold text-navy-950 sm:text-4xl">
              There is a place for you here.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              The best way to get connected is simply to visit. Come as you are
              this Sunday — we would love to meet you and your family.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/what-to-expect"
                className="button-light lift-link inline-flex items-center justify-center gap-2 rounded-md bg-navy-900 px-7 py-4 text-sm font-extrabold text-white! hover:bg-navy-800"
              >
                Plan Your Visit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
