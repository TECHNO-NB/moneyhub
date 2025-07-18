"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomTab from "@/components/BottomTab";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import NProgress from "nprogress";
import { useEffect } from "react";

NProgress.configure({ showSpinner: false });
export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideLayout = pathname.startsWith("/auth");

    useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [pathname]);

  return (
    <>
      <Provider store={store}>
        {!hideLayout && <Navbar />}
        {children}
        {<BottomTab />}
        {!hideLayout && <Footer />}
      </Provider>
    </>
  );
}
