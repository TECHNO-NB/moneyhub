import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutShell from "@/components/LayoutShell";
import { Toaster } from "react-hot-toast";
import VerifyUser from "@/components/UserVerify";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "MoneyHub – Free Fire Top-Up.",

  description:
    "MoneyHub.store is Nepal's #1 platform to top-up Free Fire diamonds.",
  keywords: [
    "Free Fire Top Up Nepal",
   
    "MoneyHub store",
    "eSewa Free Fire",
    "Khalti Topup",
    "money hub",
    "moneyhub",
    "MoneyHub",
    "MONEYHUB",
    "moneyhub store",
    "ff topup",
    "freefire topup nepal",
    "freefire topup",
    "earning app",
   
  ],
  authors: [{ name: "MoneyHub Team" }],
  metadataBase: new URL("https://moneyhub.store"),
  openGraph: {
    title: "MoneyHub – Nepal's Best Top-Up Store",
    description:
      "Buy Free Fire diamonds.",
    url: "https://moneyhub.store",
    siteName: "MoneyHub",
    locale: "en_NP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoneyHub – Nepal's Trusted Game Top-Up",
    description:
      "Get Free Fire diamonds",
    creator: "@moneyhubstore", // Replace with your Twitter handle
  },
  icons: {
    icon: "/android-chrome-512x512.png",
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
        
          <LayoutShell>
          <VerifyUser/>
            {children}
            <Toaster />
          </LayoutShell>
      
      </body>
    </html>
  );
}
