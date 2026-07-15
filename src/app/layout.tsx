import type { Metadata, Viewport } from "next";
import { Dancing_Script, Inter, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hhbcmi.com"),
  title: {
    default: "Highland Hills Baptist Church | Highland, MI",
    template: "%s | Highland Hills Baptist Church",
  },
  description:
    "Highland Hills Baptist Church is an independent Baptist church in Highland, Michigan. Join us Sundays for Sunday School, Morning Worship, and Evening Worship, and Wednesdays for prayer and Bible study. Visitors and families welcome.",
  applicationName: "Highland Hills Baptist Church",
  authors: [{ name: "Highland Hills Baptist Church" }],
  creator: "Highland Hills Baptist Church",
  publisher: "Highland Hills Baptist Church",
  category: "religion",
  keywords: [
    "Highland Hills Baptist Church",
    "Baptist church Highland MI",
    "independent Baptist church",
    "church in Highland Michigan",
    "Highland MI church",
    "Sunday worship Highland",
    "Bible study Highland MI",
    "church near me Highland Michigan",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Highland Hills Baptist Church | Highland, MI",
    description:
      "A welcoming independent Baptist church family in Highland, Michigan. Plan your visit, watch sermons, see service times, and stay connected.",
    url: "https://www.hhbcmi.com",
    type: "website",
    locale: "en_US",
    siteName: "Highland Hills Baptist Church",
    images: [
      {
        url: "/hero-poster.jpg",
        width: 1920,
        height: 1080,
        alt: "Aerial view of Highland Hills Baptist Church",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Highland Hills Baptist Church | Highland, MI",
    description:
      "A welcoming independent Baptist church family in Highland, Michigan. Plan your visit and watch sermons online.",
    images: ["/hero-poster.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6fbff" },
    { media: "(prefers-color-scheme: dark)", color: "#061a34" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} ${dancingScript.variable} antialiased`}
    >
      <body>
        {children}
        {/* WBC live chat widget — parser-inserted <script> so the widget can
            read its own data-* attributes via document.currentScript. */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          src="https://slackwebsitechat.vercel.app/widget/wbc-chat.js"
          data-api="https://slackwebsitechat.vercel.app"
          data-key="wbc_7fb8d129822c0a7c135a40815fe28762adff2d54d7e8b473"
          defer
        />
        <Analytics />
      </body>
    </html>
  );
}
