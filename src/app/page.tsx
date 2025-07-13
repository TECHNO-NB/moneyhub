"use client";

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
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Top Gradient Blob */}
      {/* <WarningModal/> */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: easeInOut }}
        className="absolute w-96 h-96 md:w-26 md:h-96 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full blur-3xl opacity-30 md:rotate-12 top-16 md:top-4 left-10 md:left-56 z-0"
      ></motion.div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-1 md:py-20 gap-12">
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl text-white font-bold leading-tight -mt-6">
            Get started to earn money with{" "}
            <span className="text-yellow-500">MoneyHub</span>
          </h2>
          <p className="text-white mb-6">
            Join thousands of users earning daily income with MoneyHub. 
            We also offer a variety of other services.
          </p>
          <a
            href="#earn"
            className="inline-block bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition mb-8"
          >
            Start Earning
          </a>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1600586316434-29a13a4f9aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8ZWFybmluZyUyMG1vbmV5fHwwfHx8fDE2MzA0NzQxODk&ixlib=rb-1.2.1&q=80&w=1080"
            alt="Earning Illustration"
            width={400}
            height={400}
            className="w-52 md:w-full max-w-sm mx-auto rounded-full pt-4"
          />
        </motion.div>
      </section>

      {/* Earning platforms  */}
      <PlatForms />

      {/* Reviews Section */}
      <section className="relative z-10">
        <Review />
      </section>
    </main>
  );
}
