"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Instagram Views",
    price: "Rs.20 / 1K",
    logo: "https://cdn1.iconfinder.com/data/icons/social-circle-3/32/instagram_circle-512.png", // Place logo in public folder
  },
  {
    title: "Instagram Views",
    price: "Rs.600 / 20k",
    logo: "https://cdn1.iconfinder.com/data/icons/social-circle-3/32/instagram_circle-512.png",
  },
  {
    title: "Instagram Views",
    price: "Rs.150 / 150k",
    logo: "https://cdn1.iconfinder.com/data/icons/social-circle-3/32/instagram_circle-512.png",
  },
  {
    title: "Instagram Views",
    price: "Rs.250 / 1 Lakh.",
    logo: "https://cdn1.iconfinder.com/data/icons/social-circle-3/32/instagram_circle-512.png",
  },

  {
    title: "Instagram Likes",
    price: "Rs.100 / 1K",
    logo: "https://cdn1.iconfinder.com/data/icons/social-circle-3/32/instagram_circle-512.png", // Place logo in public folder
  },
  {
    title: "Instagram Likes",
    price: "Rs.270 / 2k",

    logo: "https://cdn1.iconfinder.com/data/icons/social-circle-3/32/instagram_circle-512.png",
  },
  {
    title: "Instagram Likes",
    price: "Rs.320 / 5k",
    logo: "https://cdn1.iconfinder.com/data/icons/social-circle-3/32/instagram_circle-512.png",
  },
  {
    title: "Instagram Likes",
    price: "Rs.600 / 10k",

    logo: "https://cdn1.iconfinder.com/data/icons/social-circle-3/32/instagram_circle-512.png",
  },

  {
    title: "Instagram Followers",
    price: "Rs.550 / 1K",
    logo: "https://cdn1.iconfinder.com/data/icons/social-circle-3/32/instagram_circle-512.png", // Place logo in public folder
  },
  {
    title: "Instagram Followers",
    price: "Rs.1050 / 2k",

    logo: "https://cdn1.iconfinder.com/data/icons/social-circle-3/32/instagram_circle-512.png",
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
          src="https://cdn1.iconfinder.com/data/icons/social-circle-3/32/instagram_circle-512.png"
          alt="TikTok Logo"
          width={90}
          height={90}
          className="mb-4 animate-pulse"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Grow Your Instagram 🚀
        </h1>
        <p className="text-center max-w-xl mt-4 text-gray-300">
          Buy real InstaGram views, likes, and followers to boost your account
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
            <h2 className="text-xl font-semibold text-white mb-2">
              {service.title}
            </h2>
            <p className="text-lg text-emerald-400 font-bold mb-2">
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
          href="https://chat.whatsapp.com/Fl02NOd4JVgKnoYECvSi2l"
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
