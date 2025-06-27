"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import StakeEarningsPics from "@/components/StakeEarningPics";
import WarningModal from "@/components/WarningModal";

const page = () => {
  return (
    <main className="min-h-screen bg-white px-4">
      <WarningModal/>
      <section className="max-w-4xl mx-auto pt-20 pb-10 text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Earn with Stake
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-600 mb-10 px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Start earning real money by referring users to Stake or investing in
          games. Monitor your earnings and get paid instantly with MoneyHub.
        </motion.p>

        {/* Stake Logo */}
        <motion.div
          className="w-full"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <motion.a href="https://stake.com/?c=keKuyKNp">
            {" "}
            <img
              src="https://logos-world.net/wp-content/uploads/2021/05/Stake-Logo.png"
              alt="Stake earnings"
              className="h-24 md:h-32 mx-auto mb-8"
            />
          </motion.a>
        </motion.div>

        {/* Main Call to Action */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.a
            href="https://stake.com/?c=keKuyKNp"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Open Stake And Start Earning
          </motion.a>
        </motion.div>

        {/* Contact Info */}
        <motion.h1
          className="text-black font-bold text-xl text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          For SignUp Help, Deposit And Withdraw <br /> Contact Us:
        </motion.h1>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4">
          {/* WhatsApp Button */}
          <motion.a
            href="https://chat.whatsapp.com/Fl02NOd4JVgKnoYECvSi2l"
            className="bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <FaWhatsapp size={20} />
            WhatsApp
          </motion.a>

          {/* Telegram Button */}
          <motion.a
            href="https://stake.com/?c=keKuyKNp"
            className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <FaTelegramPlane size={20} />
            Telegram
          </motion.a>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pb-20">
        <StakeEarningsPics />
      </section>
    </main>
  );
};

export default page;
