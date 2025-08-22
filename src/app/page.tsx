"use client";
/* eslint-disable */
import { easeInOut, motion } from "framer-motion";
import Review from "@/components/Reviw";
import Image from "next/image";
import PlatForms from "@/components/PlatForms";
import { useEffect } from "react";

// import WarningModal from "@/components/WarningModal";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-[90svh] bg-gradient-to-b from-[#08090b] via-[#0b0e12] to-[#0c0f14] text-gray-100 overflow-hidden">
      {/* Top Gradient Blob */}
      {/* <WarningModal/> */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: easeInOut }}
        className="absolute w-96 h-96 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full blur-3xl opacity-30 md:rotate-12 top-16 md:top-4 left-10 md:left-56 z-0"
      />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-10 md:py-24 gap-12">
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight -mt-6">
            <span className="text-white">Get started to earn money with </span>
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              MoneyHub
            </span>
          </h2>
          <p className="text-gray-300 mt-4 mb-6 md:text-lg">
            Join thousands of users earning daily income with MoneyHub. <br className="hidden md:block" />
            We also offer a variety of other services.
          </p>
          <a
            href="#earn"
            className="inline-block bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition mb-8 md:mb-0 shadow-lg md:shadow-yellow-500/30"
          >
            Start Earning
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-1/2 relative flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Glow only in desktop */}
          <div className="hidden md:block absolute inset-0  justify-center items-center">
            <div className="w-96 h-96 rounded-full bg-gradient-to-br from-yellow-500/30 to-orange-500/20 blur-3xl animate-pulse" />
          </div>

          <Image
            src="https://images.unsplash.com/photo-1600586316434-29a13a4f9aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8ZWFybmluZyUyMG1vbmV5fHwwfHx8fDE2MzA0NzQxODk&ixlib=rb-1.2.1&q=80&w=1080"
            alt="Earning Illustration"
            width={420}
            height={420}
            className="w-52 md:w-[420px] max-w-sm mx-auto rounded-full relative z-10"
          />
        </motion.div>
      </section>

      {/* Earning platforms */}
      <PlatForms />

      {/* Reviews Section */}
      <section className="relative z-10">
        <Review />
      </section>
    </main>
  );
}
