"use client";
/* eslint-disable */
import React, { useState } from "react";
import { CircleCheck, Loader, X } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const topUpOptions = [
  { index: 0, diamonds: 50, price: 60 },
  { index: 1, diamonds: 115, price: 120 },
  { index: 2, diamonds: 240, price: 250 },
  { index: 3, diamonds: 610, price: 600 },
  { index: 4, diamonds: 1090, price: 1050 },
  { index: 5, diamonds: 1240, price: 1140 },
  { index: 6, diamonds: 2530, price: 2300 },
  { index: 7, diamonds: 5060, price: 4500 },
  { index: 8, diamonds: "All Level Up Pass", price: 600 },
  { index: 9, diamonds: "Weekly Membership", price: 250 },
  { index: 10, diamonds: "Monthly Membership", price: 1100 },
];

export default function TopUpRate() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [ffUid, setFfUid] = useState("");
  const [ffName, setFfName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userData = useSelector((state: any) => state.user);

  const router = useRouter();
  const selectedCardData = topUpOptions.find(
    (data) => data.index === selectedCard
  );

  // Message for WhatsApp (full)
  const whatsappMessage = selectedCardData
    ? `Hello, I'm interested in your FreeFire TOPUP of ${selectedCardData.diamonds} package.\nPrice: ${selectedCardData.price}\nFF UID: ${ffUid}\nIn-Game Name: ${ffName}`
    : "";

  // Open modal and reset inputs on card click
  const openModal = (index: number) => {
    setSelectedCard(index);
    setFfUid("");
    setFfName("");
    setModalOpen(true);
  };

  // Close modal helper
  const closeModal = () => {
    setModalOpen(false);
  };

  // Placeholder Buy handler inside modal
  const handleBuy = async () => {
    if (!ffUid || !ffName) return;
    try {
      setIsLoading(true);
      if (selectedCardData) {
        axios.defaults.withCredentials = true;
        if (userData.balance >= selectedCardData.price) {
          const res = await axios.post(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/fforder/buy-diamond`,
            {
              ffUid: Number(ffUid),
              ffName: ffName,
              diamondPrice: selectedCardData.price,
              diamondTitle: selectedCardData.diamonds,
            }
          );
          if (res) {
            setIsLoading(false);
            setModalOpen(false);
            router.push("/notification");
            toast.success("Diamond buy is being processed.");
          }
        } else {
          setIsLoading(false);
          router.push("/add-coin");
          toast.error("Insufficient balance");
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error("Error on topup");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-gradient-to-br from-yellow-50 to-yellow-200 p-4 items-center min-h-screen relative">
      <div className="max-w-4xl mx-auto text-center mb-6">
        <h1 className="text-4xl font-bold text-yellow-800">Top Up Free Fire</h1>
        <p className="text-gray-700 mt-2">
          100% Trusted & Legal | Process 5-10 Minutes
        </p>
        <p className="text-sm text-gray-500">Time: 06:30 - 12:30</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {topUpOptions.map(({ index, diamonds, price }) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={diamonds}
            onClick={() => openModal(index)}
            className={`bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform cursor-pointer ${
              selectedCard === index ? "border-green-600 border-2" : ""
            }`}
          >
            <div className="text-xl font-semibold text-yellow-700">
              💎 {diamonds}
            </div>
            <div className="flex justify-between">
              <div className="text-gray-600 text-sm mt-1">Rs. {price}</div>
              {selectedCard === index ? <CircleCheck color="green" /> : null}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Buy on WhatsApp button below diamonds grid */}
      <div className="max-w-4xl mx-auto mt-6 text-center">
        <a
          href={
            selectedCard !== null && ffUid && ffName
              ? `https://wa.me/9779869436906?text=${encodeURIComponent(
                  whatsappMessage
                )}`
              : "#"
          }
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transition
          ${
            selectedCard
              ? "bg-green-500 hover:bg-green-600 text-white cursor-pointer"
              : "bg-gray-400 text-gray-200 cursor-not-allowed pointer-events-none"
          }`}
        >
          Buy on WhatsApp
        </a>
      </div>

      {/* Modal */}
      {modalOpen && selectedCardData && (
        <div
          className="fixed inset-0  opacity-[1] flex items-center justify-center z-50"
          onClick={closeModal}
        >
          {/* Prevent modal content clicks from closing modal */}
          <div
            className="bg-black text-white  border-2 rounded-2xl shadow-lg max-w-md w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 cursor-pointer right-3 text-white hover:text-gray-700"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <h2 className="text-xl font-semibold text-yellow-400 mb-4 text-center">
              Selected Package
            </h2>

            <div className="text-center mb-6">
              <span className="text-3xl font-bold text-yellow-400">
                💎 {selectedCardData.diamonds}
              </span>
              <p className="text-lg mt-1">Rs. {selectedCardData.price}</p>
            </div>

            <div className="mb-4">
              <label htmlFor="ffUid" className="block mb-1 font-medium ">
                Free Fire UID
              </label>
              <input
                id="ffUid"
                type="text"
                value={ffUid}
                onChange={(e) => setFfUid(e.target.value)}
                placeholder="111111111"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="ffName" className="block mb-1 font-medium ">
                In-Game Name
              </label>
              <input
                id="ffName"
                type="text"
                value={ffName}
                onChange={(e) => setFfName(e.target.value)}
                placeholder="gamingnb"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <button
              onClick={handleBuy}
              disabled={!ffUid || !ffName}
              className={`w-full py-3 rounded-xl text-lg font-semibold shadow-lg transition flex items-center justify-center
    ${
      ffUid && ffName
        ? "bg-yellow-400 hover:bg-yellow-600 text-white cursor-pointer"
        : "bg-gray-600 text-gray-300 cursor-not-allowed"
    }`}
            >
              {isLoading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin mr-2" />
                  <span>Processing...</span>
                </>
              ) : (
                "Buy"
              )}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
