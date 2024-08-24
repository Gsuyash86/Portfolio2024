import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Copyright from "../components/Copyright";
import Head from "next/head";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suyash Gupta - Portfolio",
  description: "Explore the portfolio of Suyash Gupta, a software engineer with expertise in React, Next.js, and more.",
  keywords: "Suyash Gupta, software engineer, React developer, Next.js developer, portfolio",
  openGraph: {
    title: "Suyash Gupta - Portfolio",
    description: "Explore the portfolio of Suyash Gupta, showcasing projects, experience, and contact information.",
    url: "https://yourdomain.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suyash Gupta Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Suyash Gupta - Portfolio",
    description: "Explore the portfolio of Suyash Gupta, showcasing projects, experience, and contact information.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Head>
        <title>Suyash Gupta - Portfolio</title>
        <meta name="description" content="Welcome to the portfolio of Suyash Gupta, a software engineer with expertise in React, Next.js, and more." />
        <meta name="keywords" content="Suyash Gupta, software engineer, React developer, Next.js developer, portfolio" />
        <meta name="author" content="Suyash Gupta" />
        <meta property="og:title" content="Suyash Gupta - Portfolio" />
        <meta property="og:description" content="Explore the portfolio of Suyash Gupta, showcasing projects, experience, and contact information." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://www.suyashgupta.in" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="twitter:title" content="Suyash Gupta - Portfolio" />
        <meta name="twitter:description" content="Explore the portfolio of Suyash Gupta, showcasing projects, experience, and contact information." />
        <meta name="twitter:image" content="/images/twitter-image.jpg" />
      </Head>
      <Navbar />
      <body className={inter.className}>{children}</body>
      <Copyright />
    </html>
  );
}
