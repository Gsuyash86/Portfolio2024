import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Copyright from "../components/Copyright";
import ScrollProgress from "../components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.suyashgupta.in'),
  title: "Suyash Gupta - Senior Software Engineer",
  description: "Portfolio of Suyash Gupta, a Senior Software Engineer with 6+ years of experience in React, Next.js, Node.js, and modern web technologies. Specialized in building high-performance web applications.",
  keywords: "Suyash Gupta, Senior Software Engineer, React developer, Next.js developer, Node.js, Full Stack Developer, Times Network, portfolio",
  authors: [{ name: "Suyash Gupta" }],
  openGraph: {
    title: "Suyash Gupta - Senior Software Engineer",
    description: "Portfolio showcasing projects, experience, and technical expertise in modern web development.",
    url: "https://www.suyashgupta.in",
    siteName: "Suyash Gupta Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suyash Gupta Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suyash Gupta - Senior Software Engineer",
    description: "Portfolio showcasing projects, experience, and technical expertise in modern web development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ScrollProgress />
        {children}
        <Copyright />
      </body>
    </html>
  );
}
