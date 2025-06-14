import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/ui/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "The Eagle Eye | Award Winning Branding & Marketing Agency",
  description:
    "The Eagle Eye is a creative-driven digital marketing agency based out of Chennai empowering brands with strategic storytelling, performance marketing, and cutting-edge content. Precision-led, growth-focused.",
  keywords: [
    "digital marketing",
    "branding",
    "marketing agency",
    "Chennai",
    "performance marketing",
    "content creation",
    "social media marketing",
  ],
  authors: [{ name: "The Eagle Eye" }],
  creator: "The Eagle Eye",
  publisher: "The Eagle Eye",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://theeagleseye.in"), // Replace with your actual domain
  openGraph: {
    title: "The Eagle Eye | Award Winning Branding & Marketing Agency",
    description:
      "The Eagle Eye is a creative-driven digital marketing agency based out of Chennai empowering brands with strategic storytelling, performance marketing, and cutting-edge content. Precision-led, growth-focused.",
    url: "https://theeagleseye.in", // Replace with your actual domain
    siteName: "The Eagle Eye",
    images: [
      {
        url: "/logo/2.png", // Alternative logo
        width: 1200,
        height: 630,
        alt: "The Eagle Eye Logo",
      },
    ],
    locale: "en_US",
    type: "website",
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
    // google: "your-google-verification-code", // Add when you have Google Search Console
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  category: "business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfairDisplay.variable} bg-[#f1f1f1] antialiased`}
      >
        <div className="w-full h-full flex flex-col items-center">
          <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
