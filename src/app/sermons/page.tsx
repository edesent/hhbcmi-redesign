import type { Metadata } from "next";
import { ArrowLeft, PlayCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import VideoGrid from "@/components/VideoGrid";
import { getRecentVideos } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Sermons",
  description:
    "Watch recent sermons and services from Highland Hills Baptist Church in Highland, Michigan.",
  alternates: { canonical: "/sermons" },
  openGraph: {
    title: "Sermons & Services | Highland Hills Baptist Church",
    description:
      "Watch recent sermons and livestreamed services from Highland Hills Baptist Church in Highland, Michigan.",
    url: "https://www.hhbcmi.com/sermons",
    type: "website",
    locale: "en_US",
    siteName: "Highland Hills Baptist Church",
    images: ["/hero-poster.jpg"],
  },
};

const CHANNEL_URL =
  "https://www.youtube.com/@highlandhillsbaptistchurch4533/streams";

export default async function SermonsPage() {
  const videos = await getRecentVideos();

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
              Sermons &amp; Services
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
              Watch our most recent messages and livestreams. New services are
              added automatically from our YouTube channel.
            </p>
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="button-light lift-link mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-sm font-extrabold hover:bg-sky-100"
            >
              <PlayCircle className="h-4 w-4" />
              Visit Our YouTube Channel
            </a>
          </div>
        </section>

        <section className="py-16">
          <div className="section-shell">
            <VideoGrid videos={videos} />
            <a
              href="/"
              className="lift-link mt-12 inline-flex items-center gap-2 text-sm font-extrabold text-blue-700 hover:text-navy-950"
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
