'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const PlatForms = () => {
  return (
    <motion.section
      id="earn"
      className="relative bg-black py-14 overflow-hidden z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Texture Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10 pointer-events-none" />

      {/* Gradient Blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full blur-3xl opacity-30 left-1/2 -translate-x-1/2 top-20 z-0"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />

      <div className="relative z-10 text-center max-w-6xl mx-auto px-2">
        <h3 className="text-4xl font-bold mb-12 text-yellow-400 border-yellow-400 inline-block px-6 py-3 rounded-xl shadow-md">
          Earn Through Trusted Platforms
        </h3>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-10 items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/stake">
            <div className="bg-white border-4 border-yellow-400 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 flex justify-center items-center h-40">
              <Image
                src="https://logos-world.net/wp-content/uploads/2021/05/Stake-Logo.png"
                alt="Stake"
                width={120}
                height={64}
                className="h-16 object-contain"
              />
            </div>
          </Link>

          <Link href="/1xbet">
            <div className="bg-white border-4 border-yellow-400 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 flex justify-center items-center h-40">
              <Image
                src="https://tse2.mm.bing.net/th/id/OIP.Ae7CUtOJYUOCgWN3nJSYfAHaBp?rs=1&pid=ImgDetMain"
                alt="1xBet"
                width={120}
                height={64}
                className="h-16 object-contain"
              />
            </div>
          </Link>

          <Link href="/ff-topup">
            <div className="bg-white border-4 border-yellow-400 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 flex justify-center items-center h-40">
              <Image
                src="https://static.vecteezy.com/system/resources/previews/022/100/664/original/free-fire-logo-free-png.png"
                alt="Free Fire Top-up"
                width={120}
                height={64}
                className="h-full object-contain"
              />
            </div>
          </Link>

          <Link href="/tiktok">
            <div className="bg-white border-4 border-yellow-400 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 flex justify-center items-center h-40">
              <Image
                src="https://pngimg.com/d/tiktok_PNG20.png"
                alt="TikTok Coins"
                width={120}
                height={64}
                className="h-full object-contain"
              />
            </div>
          </Link>

          <Link href="/capcut">
            <div className="bg-white border-4 border-yellow-400 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 flex justify-center items-center h-40">
              <Image
                src="https://th.bing.com/th/id/R.b0559160300937f618a832e95fdd5b9c?rik=hLiOXIpYOXMpDg&pid=ImgRaw&r=0"
                alt="CapCut Pro"
                width={120}
                height={64}
                className="h-full object-contain"
              />
            </div>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PlatForms;
