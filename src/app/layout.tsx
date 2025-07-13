import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BottomTab from "@/components/BottomTab";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MoneyHub – Free Fire Top-Up, TikTok Followers, 1xBet Deposit in Nepal",
  description:
    "MoneyHub.store is Nepal's #1 platform to top-up Free Fire diamonds, buy TikTok & Instagram followers, and deposit in Stake/1xBet using eSewa, Khalti, or IME Pay.",
  keywords: [
    "Free Fire Top Up Nepal",
    "Buy TikTok followers Nepal",
    "1xBet deposit Nepal",
    "Stake deposit Nepal",
    "Instagram likes",
    "TikTok likes",
    "MoneyHub store",
    "eSewa Free Fire",
    "Khalti Topup",
    "money hub",
    "moneyhub store",
    "ff topup",
    "freefire topup nepal",
    "freefire topup",
    "earning app"
  ],
  authors: [{ name: "MoneyHub Team" }],
  metadataBase: new URL("https://moneyhub.store"),
  openGraph: {
    title: "MoneyHub – Nepal's Best Top-Up Store",
    description:
      "Buy Free Fire diamonds, TikTok/Instagram followers, and 1xBet/Stake deposits with secure payment via eSewa, Khalti, IME Pay.",
    url: "https://moneyhub.store",
    siteName: "MoneyHub",
    locale: "en_NP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoneyHub – Nepal's Trusted Game Top-Up & Social Boost",
    description:
      "Get Free Fire diamonds, TikTok likes, Instagram followers, and deposit into Stake/1xBet with eSewa or Khalti.",
    creator: "@moneyhubstore", // Replace with your Twitter handle
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <BottomTab/>
        <Footer />
      </body>
    </html>
  );
}
