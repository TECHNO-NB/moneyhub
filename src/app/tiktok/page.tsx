"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "TikTok Views",
    price: "Rs.20 / 1K",
    logo: "https://static.vecteezy.com/system/resources/previews/016/716/450/original/tiktok-icon-free-png.png", // Place logo in public folder
  },
  {
    title: "TikTok Views",
    price: "Rs.200 / 1 Lakh",

    logo: "https://static.vecteezy.com/system/resources/previews/016/716/450/original/tiktok-icon-free-png.png",
  },
  {
    title: "TikTok Views",
    price: "Rs.700 / 5 Lakh",

    logo: "https://static.vecteezy.com/system/resources/previews/016/716/450/original/tiktok-icon-free-png.png",
  },
  {
    title: "TikTok Views",
    price: "Rs.1300 / 1 M.",

    logo: "https://static.vecteezy.com/system/resources/previews/016/716/450/original/tiktok-icon-free-png.png",
  },

  {
    title: "TikTok Likes",
    price: "Rs.100 / 1K",
    logo: "https://static.vecteezy.com/system/resources/previews/016/716/450/original/tiktok-icon-free-png.png", // Place logo in public folder
  },
  {
    title: "TikTok Likes",
    price: "Rs.270 / 5k",

    logo: "https://static.vecteezy.com/system/resources/previews/016/716/450/original/tiktok-icon-free-png.png",
  },
  {
    title: "TikTok Likes",
    price: "Rs.500 / 10k",

    logo: "https://static.vecteezy.com/system/resources/previews/016/716/450/original/tiktok-icon-free-png.png",
  },
  {
    title: "TikTok Likes",
    price: "Rs.1k / 20k",

    logo: "https://static.vecteezy.com/system/resources/previews/016/716/450/original/tiktok-icon-free-png.png",
  },

  {
    title: "TikTok Followers",
    price: "Rs.850 / 1K",
    logo: "https://static.vecteezy.com/system/resources/previews/016/716/450/original/tiktok-icon-free-png.png", // Place logo in public folder
  },
  {
    title: "TikTok Followers",
    price: "Rs.1650 / 2k",

    logo: "https://static.vecteezy.com/system/resources/previews/016/716/450/original/tiktok-icon-free-png.png",
  },
];

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center mb-12"
      >
        <Image
          src="https://static.vecteezy.com/system/resources/previews/016/716/450/original/tiktok-icon-free-png.png"
          alt="TikTok Logo"
          width={90}
          height={90}
          className="mb-4 animate-pulse"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Grow Your TikTok 🚀
        </h1>
        <p className="text-center max-w-xl mt-4 text-gray-300">
          Buy real TikTok views, likes, and followers to boost your accounts
          growth and engagement. Fast delivery and affordable pricing!
        </p>
      </motion.div>

      {/* Services */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur-sm shadow-xl hover:scale-105 transition-all flex flex-col items-center text-center"
          >
            <Image
              src={service.logo}
              alt={`${service.title} Logo`}
              width={50}
              height={50}
              className="mb-3"
            />
            <h2 className="text-[1em] font-semibold text-white mb-2">
              {service.title}
            </h2>
            <p className="text-[1em] text-emerald-400 font-bold mb-2">
              {service.price}
            </p>
          </motion.div>
        ))}
      </div>

      {/* WhatsApp Group Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 flex justify-center"
      >
        <a
          // href="https://chat.whatsapp.com/Fl02NOd4JVgKnoYECvSi2l"
           href={`https://wa.me/9779869436906?text=Hello%2C%20I'm%20interested%20in%20your%20services`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-lg transition"
        >
          Join WhatsApp Group
        </a>
      </motion.div>
    </div>
  );
};

export default page;
