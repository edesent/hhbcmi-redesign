import type { Metadata } from "next";
import { HandHeart, ShieldCheck, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Give online to Highland Hills Baptist Church in Highland, MI. Support the ministry with a secure one-time or recurring gift. Your generosity helps us preach the Gospel and serve our community.",
  keywords: [
    "give to Highland Hills Baptist Church",
    "online giving Baptist church Highland MI",
    "tithe online Highland Michigan",
    "church donation Highland MI",
    "give tithes and offerings",
  ],
  alternates: { canonical: "/give" },
  openGraph: {
    title: "Give | Highland Hills Baptist Church",
    description:
      "Support the ministry of Highland Hills Baptist Church with a secure online gift.",
    url: "https://www.hhbcmi.com/give",
    type: "website",
    locale: "en_US",
    siteName: "Highland Hills Baptist Church",
    images: ["/hero-poster.jpg"],
  },
};

export default function GivePage() {
  return (
    <>
      {/* Servant Keeper giving web component */}
      <script
        type="module"
        src="https://embedded-apps.servantkeeper.com/sk-giving-app.js"
      />
      <Navbar />
      <main className="bg-cream">
        <section className="bg-navy-950 pb-16 pt-36 text-white">
          <div className="section-shell max-w-3xl text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-md bg-white text-navy-950">
              <HandHeart className="h-6 w-6" />
            </span>
            <p className="fine-label mt-6 text-sky-100">Give</p>
            <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
              Support the ministry of Highland Hills.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Your generosity helps us preach the Gospel, care for our church
              family, and reach our community and the mission field. Giving
              online is simple and secure.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="section-shell max-w-2xl">
            <div className="rounded-lg border border-sky-100 bg-white p-4 soft-shadow sm:p-8">
              {/* The form is rendered by the Servant Keeper web component. */}
              <div
                className="min-h-[520px]"
                dangerouslySetInnerHTML={{
                  __html:
                    '<sk-giving-app web-id="hhbc-8" form-id="419"></sk-giving-app>',
                }}
              />
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3 rounded-lg border border-sky-100 bg-white p-5">
                <ShieldCheck className="h-5 w-5 shrink-0 text-blue-700" />
                <p className="text-sm leading-6 text-muted">
                  Giving is processed securely through Servant Keeper. Highland
                  Hills never sees or stores your card information.
                </p>
              </div>
              <div className="flex gap-3 rounded-lg border border-sky-100 bg-white p-5">
                <Mail className="h-5 w-5 shrink-0 text-blue-700" />
                <p className="text-sm leading-6 text-muted">
                  Prefer to give in person or by mail? Gifts can be sent to 179
                  Woodruff Lake Rd, Highland, MI 48357.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
