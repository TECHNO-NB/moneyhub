"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    category: "Views",
    title: "TikTok Views",
    price: "Rs.15 / 1K",
    logo: "/tiktok-icon.png",
  },
  {
    category: "Views",
    title: "TikTok Views",
    price: "Rs.30 / 5K",
    logo: "/tiktok-icon.png",
  },
  {
    category: "Views",
    title: "TikTok Views",
    price: "Rs.40 / 10K",
    logo: "/tiktok-icon.png",
  },
  {
    category: "Views",
    title: "TikTok Views",
    price: "Rs.50 / 20K",
    logo: "/tiktok-icon.png",
  },
  {
    category: "Views",
    title: "TikTok Views",
    price: "Rs.80 / 40K",
    logo: "/tiktok-icon.png",
  },
  {
    category: "Views",
    title: "TikTok Views",
    price: "Rs.150 / 80K",
    logo: "/tiktok-icon.png",
  },
  {
    category: "Views",
    title: "TikTok Views",
    price: "Rs.200 / 1 Lakh",
    logo: "/tiktok-icon.png",
  },
  {
    category: "Views",
    title: "TikTok Views",
    price: "Rs.700 / 5 Lakh",
    logo: "/tiktok-icon.png",
  },
  {
    category: "Views",
    title: "TikTok Views",
    price: "Rs.1300 / 1 M.",
    logo: "/tiktok-icon.png",
  },

  {
    category: "Likes",
    title: "TikTok Likes",
    price: "Rs.80 / 1K",
    logo: "/tiktok-icon.png",
  },
  {
    category: "Likes",
    title: "TikTok Likes",
    price: "Rs.150 / 2K",
    logo: "/tiktok-icon.png",
  },
  {
    category: "Likes",
    title: "TikTok Likes",
    price: "Rs.270 / 5k",
    logo: "/tiktok-icon.png",
  },
  {
    category: "Likes",
    title: "TikTok Likes",
    price: "Rs.500 / 10k",
    logo: "/tiktok-icon.png",
  },
  {
    category: "Likes",
    title: "TikTok Likes",
    price: "Rs.1k / 20k",
    logo: "/tiktok-icon.png",
  },

  {
    category: "Followers",
    title: "TikTok Followers",
    price: "Rs.900 / 1K",
    logo: "/tiktok-icon.png",
  },
  {
    category: "Followers",
    title: "TikTok Followers",
    price: "Rs.1700 / 2k",
    logo: "/tiktok-icon.png",
  },
];

const tabs = ["Views", "Likes", "Followers"];

export default function TikTokPage() {
  const [selectedTab, setSelectedTab] = useState("Views");
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const filteredServices = services.filter((s) => s.category === selectedTab);

  const selectedService =
    selectedCard !== null ? filteredServices[selectedCard] : null;

  const whatsappMessage = selectedService
    ? `Hello, I'm interested in your ${selectedService.title} package.\nPrice: ${selectedService.price}`
    : "";

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
          {`Buy real TikTok views, likes, and followers to boost your account's growth and engagement. Fast delivery and affordable pricing!`}
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center mb-10 space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setSelectedTab(tab);
              setSelectedCard(null);
            }}
            className={`px-6 py-2 rounded-full border cursor-pointer ${
              selectedTab === tab
                ? "bg-white text-black"
                : "border-white text-white"
            } transition`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedCard(index)}
            className={`cursor-pointer bg-white/10 border ${
              selectedCard === index ? "border-green-400" : "border-white/20"
            } rounded-2xl p-6 backdrop-blur-sm shadow-xl hover:scale-105 transition-all flex flex-col items-center text-center`}
          >
            <Image
              src={
                "https://static.vecteezy.com/system/resources/previews/016/716/450/original/tiktok-icon-free-png.png"
              }
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
            {selectedCard === index && (
              <p className="text-green-400 text-sm mt-2">✓ Selected</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Buy Button */}
      {selectedService && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-col items-center space-y-4"
        >
          <p className="text-sm text-gray-300">
            Selected: <strong>{selectedService.title}</strong> —{" "}
            {selectedService.price}
          </p>
          <a
            href={`https://wa.me/9779869436906?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-lg transition"
          >
            Buy on WhatsApp
          </a>
        </motion.div>
      )}
    </div>
  );
}
