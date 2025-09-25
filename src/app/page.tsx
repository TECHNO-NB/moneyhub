"use client";
/* eslint-disable */
import { easeInOut, motion } from "framer-motion";
import Review from "@/components/Reviw";
import Image from "next/image";
import PlatForms from "@/components/PlatForms";
import { useEffect } from "react";
import sliderImage1 from "../../public/moneyhublogo2.png"
import Slider from "@/components/Slider";
import MatchCard from "@/components/MatchCard";
import MatchComp from "@/components/MatchComp";

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
          className="w-full  text-center flex flex-col justify-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight -mt-6 text-center">
           
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-center text-transparent">
              MoneyHub
            </span>
          </h2>

          <div className="slider">
          <Slider/>
          </div>
        
        
        </motion.div>
      </section>
      {/* Matches Section */}
     <section className="px-4">
      <MatchComp/>

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
