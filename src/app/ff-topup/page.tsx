"use client";
/* eslint-disable */

import TopUpRate from "@/components/FFTopUpRate";



import React from "react";

const page = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* FF TopUp Content */}
      {/* <section className="max-w-4xl mx-auto px-4 py-10 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          FF TopUp Earnings
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Top up Free Fire diamonds for users and earn profits on every
          transaction. Fast service, trusted by gamers, and great margins.
        </motion.p>

        <motion.img
          src="https://static-2.gumroad.com/res/gumroad/files/213347549644/2d72439b5dac4eb8aaaa77480a4f3675/original/free%20fire%20logo.png"
          alt="FF Topup"
          className="w-52 mx-auto mb-8"
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
          Start Top-Up Now
        </motion.a>
      </section> */}

      <section>
        <TopUpRate />
      </section>
    </main>
  );
};

export default page;
