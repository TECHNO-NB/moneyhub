"use client";

import StakeEarningsPics from "@/components/StakeEarningPics";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Stake Page Content */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Earn with Stake
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Start earning real money by referring users to Stake or investing in
          games. Monitor your earnings and get paid instantly with MoneyHub.
        </motion.p>

        <motion.div
          className="w-full"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <img
            src="https://logos-world.net/wp-content/uploads/2021/05/Stake-Logo.png"
            alt="Stake earnings"
            className="w-auto h-32 mx-auto mb-8"
          />
        </motion.div>

        <motion.a
          href="https://chat.whatsapp.com/Fl02NOd4JVgKnoYECvSi2l"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Earning with Stake
        </motion.a>
      </section>

      {/* Gallery or Other Earnings Display */}
      <StakeEarningsPics />
    </main>
  );
};

export default page;
