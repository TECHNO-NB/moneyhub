"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* 1xbet Content */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Earn with 1xbet
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Promote 1xbet, refer users, and earn commissions on their bets.
          Reliable payouts, trusted platform, and unlimited earning potential.
        </motion.p>

        <motion.img
          src="https://www.pngkey.com/png/full/872-8720526_1xbet-logo-for-light-1xbet-svg.png"
          alt="1xbet earnings"
          className="w-82 h-20 mx-auto mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        />

        <motion.a
          href="https://chat.whatsapp.com/Fl02NOd4JVgKnoYECvSi2l"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Earning with 1xbet
        </motion.a>
      </section>
    </main>
  );
};

export default page;
