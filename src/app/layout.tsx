import type { Metadata, Viewport } from "next";
import { Dancing_Script, Inter, Newsreader } from "next/font/google";
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
    "Highland Hills Baptist Church in Highland, Michigan. Join us Sundays for Sunday School, Morning Worship, Evening Worship, and Wednesday prayer and Bible study.",
  openGraph: {
    title: "Highland Hills Baptist Church | Highland, MI",
    description:
      "A welcoming Baptist church family in Highland, Michigan. Plan your visit, see service times, and stay connected.",
    url: "https://www.hhbcmi.com",
    type: "website",
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
      <body>{children}</body>
    </html>
  );
}
