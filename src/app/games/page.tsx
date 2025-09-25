"use client";
/* eslint-disable */
import React from "react";

import { motion } from "framer-motion";

import Image from "next/image";

import MatchComp from "@/components/MatchComp";

export default function page() {


  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-8"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center"
        >
          <Image
            src="https://wallpapers.com/images/hd/4k-free-fire-characters-working-together-8bh4bpve4raxr2ll.jpg"
            alt="FF Banner"
            width={1000}
            height={80}
            className="w-full rounded-xl shadow-2xl object-cover border-2 border-yellow-400"
          />
         </motion.div>
        <MatchComp/>
         </div>
    </motion.main>
  );
}
