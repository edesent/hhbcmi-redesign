import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "What We Believe",
  description:
    "The beliefs and statement of faith of Highland Hills Baptist Church, an independent Baptist church in Highland, MI — the inspired Word of God, the Trinity, salvation by grace through faith in Jesus Christ, believer's baptism, and the local church.",
  keywords: [
    "what do Baptists believe",
    "independent Baptist beliefs",
    "Baptist statement of faith",
    "KJV Baptist church",
    "fundamental Baptist church Highland MI",
    "Baptist doctrine",
  ],
  alternates: { canonical: "/what-we-believe" },
  openGraph: {
    title: "What We Believe | Highland Hills Baptist Church",
    description:
      "Our statement of faith — what Highland Hills Baptist Church of Highland, Michigan believes and teaches from the Word of God.",
    url: "https://www.hhbcmi.com/what-we-believe",
    type: "website",
    locale: "en_US",
    siteName: "Highland Hills Baptist Church",
    images: ["/hero-poster.jpg"],
  },
};

const beliefs = [
  {
    title: "The Scriptures",
    body: "We believe the Bible is the verbally inspired, inerrant Word of God, and that God has preserved His Word for us today. It is our final authority for all faith and practice. In our services and teaching we use the King James Version.",
    verse: "“All scripture is given by inspiration of God.” — 2 Timothy 3:16",
  },
  {
    title: "God",
    body: "We believe in one true and living God, eternally existing in three persons — the Father, the Son, and the Holy Spirit — equal in power and glory, the Creator and Sustainer of all things.",
    verse: "“There are three that bear record in heaven.” — 1 John 5:7",
  },
  {
    title: "Jesus Christ",
    body: "We believe in the deity of the Lord Jesus Christ, His virgin birth, His sinless life, His atoning death on the cross for our sins, His bodily resurrection, His ascension, and His personal return.",
    verse: "“Christ died for our sins according to the scriptures.” — 1 Corinthians 15:3",
  },
  {
    title: "The Holy Spirit",
    body: "We believe the Holy Spirit convicts the world of sin, indwells every believer at salvation, and empowers the Christian to live a life that honors God.",
    verse: "“Ye are the temple of God, and the Spirit of God dwelleth in you.” — 1 Corinthians 3:16",
  },
  {
    title: "Man and Sin",
    body: "We believe man was created in the image of God but fell into sin, so that all people are sinners by nature and by choice, separated from God and in need of a Saviour.",
    verse: "“For all have sinned, and come short of the glory of God.” — Romans 3:23",
  },
  {
    title: "Salvation",
    body: "We believe salvation is the free gift of God, received by grace through faith in the Lord Jesus Christ alone — not by works, baptism, or religion. All who trust in Christ are forgiven and given eternal life.",
    verse: "“For by grace are ye saved through faith.” — Ephesians 2:8",
  },
  {
    title: "Eternal Security",
    body: "We believe that all who are truly saved are kept by the power of God and are secure in Christ forever — not by their own effort, but by the finished work of the Saviour.",
    verse: "“I give unto them eternal life; and they shall never perish.” — John 10:28",
  },
  {
    title: "The Church",
    body: "We believe the local church is a body of baptized believers gathered to worship God, grow in His Word, and reach others with the Gospel. We observe two ordinances: believer's baptism by immersion and the Lord's Supper.",
    verse: "“Upon this rock I will build my church.” — Matthew 16:18",
  },
  {
    title: "The Return of Christ & Eternity",
    body: "We believe in the personal, bodily return of Jesus Christ, the resurrection of the dead, and the eternal reality of Heaven for the saved and separation from God for the lost.",
    verse: "“I will come again, and receive you unto myself.” — John 14:3",
  },
];

export default function WhatWeBelievePage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <section className="bg-navy-950 pb-16 pt-36 text-white">
          <div className="section-shell max-w-3xl">
            <p className="fine-label mb-4 text-sky-100">Our Statement of Faith</p>
            <h1 className="font-serif text-4xl font-semibold sm:text-5xl">
              What we believe.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/75">
              Highland Hills Baptist Church is an independent, fundamental
              Baptist church in Highland, Michigan. We stand on the Word of God
              and preach the Gospel of Jesus Christ. These are the core truths we
              believe and teach.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              {beliefs.map((belief) => (
                <div
                  key={belief.title}
                  className="flex flex-col rounded-lg border border-sky-100 bg-white p-7 soft-shadow"
                >
                  <h2 className="font-serif text-2xl font-semibold text-navy-950">
                    {belief.title}
                  </h2>
                  <p className="mt-3 leading-7 text-muted">{belief.body}</p>
                  <p className="mt-5 border-l-2 border-gold pl-4 text-sm font-semibold italic leading-6 text-blue-700">
                    {belief.verse}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white-soft py-20">
          <div className="section-shell max-w-3xl text-center">
            <p className="fine-label mb-4 text-blue-700">The Most Important Thing</p>
            <h2 className="font-serif text-3xl font-semibold text-navy-950 sm:text-4xl">
              Do you know Christ as your Saviour?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              More than anything, we want you to know the hope and forgiveness
              found in Jesus Christ. If you have questions about salvation, we
              would love to walk through it with you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/salvation"
                className="button-light lift-link inline-flex items-center justify-center gap-2 rounded-md bg-navy-900 px-7 py-4 text-sm font-extrabold text-white! hover:bg-navy-800"
              >
                <BookOpen className="h-4 w-4" />
                Read the Good News
              </Link>
              <Link
                href="/what-to-expect"
                className="button-light lift-link inline-flex items-center justify-center gap-2 rounded-md border border-navy-900/20 bg-white px-7 py-4 text-sm font-extrabold hover:border-blue-500 hover:bg-sky-100"
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
