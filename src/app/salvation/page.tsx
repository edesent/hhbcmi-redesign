import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Salvation",
  description:
    "How to have a personal relationship with Jesus Christ. Highland Hills Baptist Church in Highland, Michigan shares the good news of salvation through Jesus.",
  alternates: { canonical: "/salvation" },
  openGraph: {
    title: "Salvation | Highland Hills Baptist Church",
    description:
      "How to have a personal relationship with Jesus Christ — the good news of salvation, explained from Scripture.",
    url: "https://www.hhbcmi.com/salvation",
    type: "website",
    locale: "en_US",
    siteName: "Highland Hills Baptist Church",
    images: ["/hero-poster.jpg"],
  },
};

const steps = [
  {
    title: "Recognize your condition.",
    body: (
      <>
        In order to find the way to eternal life with God, I must admit I am
        lost in sin. Romans 5:12 teaches us that since Adam and Eve, the first
        man and woman on earth, a sin nature has been present in all people.
        Romans 3:23 says, &ldquo;For all have sinned, and come short of the
        glory of God.&rdquo; Sin is any act contrary to God&rsquo;s laws and
        commandments, and those sins that I have committed separate me from God.
        Whenever I have been lost, I have paid some type of penalty. I have been
        late to a special event and, on occasion, I have received a speeding
        ticket. Sin also has a penalty. Romans 6:23 says, &ldquo;For the wages
        of sin is death; but the gift of God is eternal life through Jesus
        Christ our Lord.&rdquo; The &ldquo;wage&rdquo; or payment for our sin is
        spiritual death, and eternal separation from God.
      </>
    ),
  },
  {
    title: "Religion and good works are not the answer.",
    body: (
      <>
        Religions try to create their own ways to God. Their systems may seem
        logical, but they cannot bridge the gap created by our sin. Proverbs
        14:12 says, &ldquo;There is a way which seemeth right unto a man, but
        the end thereof are the ways of death.&rdquo; In other words, our
        thoughts and ways are not what matter. God&rsquo;s Word, the Bible,
        provides true answers of grace and forgiveness. In Ephesians 2:8&ndash;9
        the Bible says, &ldquo;For by grace are ye saved through faith; and that
        not of yourselves: it is the gift of God: Not of works, lest any man
        should boast.&rdquo;
      </>
    ),
  },
  {
    title: "The good news: Jesus Christ provided the way.",
    body: (
      <>
        <p>
          Even though we were lost and separated from God, He loved us, and
          because He is love, God sent His Son to die on the Cross and rise from
          the dead three days later. John 3:16 explains &ldquo;For God so loved
          the world, that he gave his only begotten Son, that whosoever
          believeth in him should not perish, but have everlasting life.&rdquo;
        </p>
        <p className="mt-4">
          Through the death and resurrection of Jesus, He became the payment for
          our sin. He took our place as our Substitute! Now, we do not have to
          pay for our sin ourselves. By His grace, salvation is provided. In
          Romans 5:8, the Bible says, &ldquo;But God commendeth his love toward
          us, in that, while we were yet sinners, Christ died for us.&rdquo;
        </p>
      </>
    ),
  },
  {
    title:
      "Repent and believe to receive the free gift of salvation through Jesus Christ.",
    body: (
      <>
        <p>
          In order to have a relationship with God and an eternal home with Him,
          we must lay aside our own efforts to save ourselves and instead place
          our full trust in Jesus Christ alone for the forgiveness of our sin
          and eternal life. Without repentance there can be no salvation, but
          repentance is not &ldquo;us&rdquo; turning from our sin to God for
          salvation, for if it were possible for us to turn from our sin, would
          that not be a work salvation and where is the need of our Saviour?
        </p>
        <p className="mt-4">
          Repentance is a change of heart of who we are (sinners) and who He is
          (Saviour) and being sorry for our sin because we see ourselves the way
          He sees us. We then repent and choose Him and allow Him in salvation
          to change our course of life being made a new creation in Christ
          through His blood.
        </p>
        <p className="mt-4">
          Again, Repentance is not about turning over a new leaf or reforming
          your lifestyle within your own effort; it&rsquo;s about you having a
          heart change about your sin, seeing it as God sees it, and wanting
          deliverance from it. Belief means more than just agreeing with some
          facts about Jesus. Rather, it is completely relying upon Jesus and Him
          alone in forgiving your sin, satisfying the Father&rsquo;s wrath, and
          declaring you righteous before a holy God.
        </p>
        <p className="mt-4">
          In Romans 10:13 the Bible says, &ldquo;For whosoever shall call upon
          the name of the Lord shall be saved.&rdquo; That is a promise directly
          from God that if you will pray to Him with understanding that you are
          confessing that you are a sinner, asking Him to forgive your sins, and
          turn to Him alone to be your Savior, then He promises to save you and
          to give you the free gift of eternal life He purchased for you. You
          can make that decision today by calling out to God in faith.
        </p>
      </>
    ),
  },
];

export default function SalvationPage() {
  return (
    <>
      <Navbar />
      <main className="bg-cream">
        <section className="bg-navy-950 pb-16 pt-36 text-white">
          <div className="section-shell max-w-3xl">
            <p className="fine-label mb-4 text-sky-100">The Good News</p>
            <h1 className="font-serif text-4xl font-semibold sm:text-5xl">
              Salvation
            </h1>
            <p className="mt-4 text-xl font-semibold text-sky-100">
              How to have a personal relationship with Jesus.
            </p>
            <p className="mt-6 text-lg leading-8 text-white/75">
              Did you know that the God of Heaven &mdash; the Creator of the
              universe &mdash; desires a relationship with you? He has made it
              possible through the gift of His only begotten Son, Jesus Christ.
              Follow along through the Scriptures below to see how this
              relationship can be yours today.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="section-shell max-w-3xl">
            <ol className="space-y-12">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-5 sm:gap-7">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-navy-900 font-serif text-xl font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h2 className="font-serif text-2xl font-semibold leading-snug text-navy-950 sm:text-3xl">
                      {step.title}
                    </h2>
                    <div className="mt-4 text-lg leading-8 text-muted">
                      {step.body}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-white-soft py-20">
          <div className="section-shell max-w-3xl">
            <div className="rounded-lg border border-sky-100 bg-white p-8 sm:p-10 soft-shadow">
              <p className="fine-label mb-4 text-blue-700">Let Us Know!</p>
              <h2 className="font-serif text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl">
                We would love to rejoice with you.
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted">
                If you have prayed to receive Christ as your Saviour, or if you
                have any questions regarding salvation or our beliefs, we would
                like to hear from you. Please feel free to contact us so we can
                rejoice with you, answer any questions you may have, and help
                encourage you in the next steps of your new life in Christ.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+12488870698"
                  className="button-light lift-link inline-flex items-center justify-center gap-2 rounded-md bg-navy-900 px-7 py-4 text-sm font-extrabold text-white! hover:bg-navy-800"
                >
                  <Phone className="h-4 w-4" />
                  (248) 887-0698
                </a>
                <a
                  href="https://www.facebook.com/HHBC1611/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-light lift-link inline-flex items-center justify-center gap-2 rounded-md border border-navy-900/20 bg-white px-7 py-4 text-sm font-extrabold hover:border-blue-500 hover:bg-sky-100"
                >
                  Message Us on Facebook
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <a
                href="/"
                className="lift-link inline-flex items-center gap-2 text-sm font-extrabold text-blue-700 hover:text-navy-950"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </a>
              <p className="flex items-center gap-2 text-sm text-muted">
                <MapPin className="h-4 w-4 text-blue-700" />
                179 Woodruff Lake Rd, Highland, MI 48357
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
