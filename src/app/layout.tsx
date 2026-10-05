import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portofolio-riska-vert.vercel.app"),

  title: {
    default: "Riskaa Oktafiani - Website Profil & Portfolio",
    template: "%s | Riskaa Oktafiani",
  },

  description:
    "Portfolio Riskaa Oktafiani, siswi Rekayasa Perangkat Lunak yang tertarik pada web development dan teknologi.",

  openGraph: {
    title: "Riskaa Oktafiani - Website Profil & Portofolio",
    description:
      "Portfolio Riskaa Oktafiani, siswi Rekayasa Perangkat Lunak yang tertarik pada web development dan teknologi.",
    type: "website",
  },
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
