"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomTab from "@/components/BottomTab";
import { usePathname } from "next/navigation";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayout = pathname.startsWith("/auth");

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <BottomTab />}
      {!hideLayout && <Footer />}
    </>
  );
}
