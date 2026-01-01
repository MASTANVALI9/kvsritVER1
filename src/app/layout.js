import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "KVSRIT - Dr. K.V. Subba Reddy Institute of Technology",
    template: "%s | KVSRIT"
  },
  description: "Dr. K.V. Subba Reddy Institute of Technology (KVSRIT) offers world-class engineering and management education. Affiliated to JNTUA & Approved by AICTE. Located in Kurnool, Andhra Pradesh.",
  keywords: ["KVSRIT", "Dr. K.V. Subba Reddy Institute of Technology", "Engineering College", "Kurnool", "JNTUA", "B.Tech", "M.Tech", "MBA", "MCA", "Best Engineering College Andhra Pradesh"],
  authors: [{ name: "KVSRIT" }],
  creator: "KVSRIT",
  publisher: "Dr. K.V. Subba Reddy Institute of Technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.drkvsrit.ac.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.drkvsrit.ac.in",
    siteName: "KVSRIT",
    title: "KVSRIT - Dr. K.V. Subba Reddy Institute of Technology",
    description: "Dr. K.V. Subba Reddy Institute of Technology offers world-class engineering and management education in Kurnool, Andhra Pradesh.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KVSRIT Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KVSRIT - Dr. K.V. Subba Reddy Institute of Technology",
    description: "World-class engineering and management education in Kurnool, Andhra Pradesh.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e3a8a" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
