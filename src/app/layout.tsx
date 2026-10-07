import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.riska-oktafiani.my.id"),

  title: {
    default: "Riskaa Oktafiani - Website Profil & Portfolio",
    template: "%s | Riskaa Oktafiani",
  },

  description:
    "Portfolio Riskaa Oktafiani, siswi Rekayasa Perangkat Lunak yang tertarik pada web development, UI/UX design, dan teknologi.",

  keywords: [
  "Riskaa Oktafiani",
  "Riskaa Oktafiani Portfolio",
  "Portofolio Riskaa Oktafiani",
  "Website Riskaa Oktafiani",
  "Portfolio Siswi RPL",
  "Rekayasa Perangkat Lunak",
  "RPL",
  "Web Development",
  "Next.js",
],

  alternates: {
    canonical: "https://www.riska-oktafiani.my.id",
  },

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
    title: "Riskaa Oktafiani - Website Profil & Portfolio",
    description:
      "Portfolio Riskaa Oktafiani, siswi Rekayasa Perangkat Lunak yang tertarik pada web development, UI/UX design, dan teknologi.",
    url: "https://www.riska-oktafiani.my.id",
    siteName: "Riskaa Oktafiani Portfolio",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Riskaa Oktafiani - Website Profil & Portfolio",
    description:
      "Portfolio Riskaa Oktafiani, siswi Rekayasa Perangkat Lunak yang tertarik pada web development, UI/UX design, dan teknologi.",
  },

  authors: [
    {
      name: "Riskaa Oktafiani",
      url: "https://www.riska-oktafiani.my.id",
    },
  ],

  creator: "Riskaa Oktafiani",
  publisher: "Riskaa Oktafiani",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}