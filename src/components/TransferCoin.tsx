"use client";
/* eslint-disable */
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const TransferCoin = ({ userId }: { userId: string }) => {
  const [targetId, setTargetId] = useState("");
  const [coins, setCoins] = useState<number | "">("");
  const [loading, setLoading] = useState(false);

  const handleTransfer = async () => {
    if (!targetId || !coins) {
      toast.error("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);
      axios.defaults.withCredentials=true
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/transfer-coin${userId}`,
        {
          coin: coins,
          id: targetId,
        }
      );

      if (res.data.success) {
        toast.success(`Successfully sent ${coins} coins! 🎉`);
        setTargetId("");
        setCoins("");
      } else {
        toast.error(res.data.message || "Transfer failed.");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 md:justify-center md:items-center max-w-md mx-auto p-6 border border-gray-700 rounded-xl shadow-lg bg-gray-900 text-gray-100">
      <h2 className="text-xl font-semibold text-center text-gray-100">
        Transfer Coins
      </h2>

      {/* User ID Input */}
      <div className="w-full">
        <p className="text-sm text-gray-400 mb-1">Paste User ID</p>
        <input
          type="text"
          value={targetId}
          onChange={(e) => setTargetId(e.target.value)}
          placeholder="Paste recipient's ID..."
          className="border border-gray-700 bg-gray-800 text-gray-100 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Coin Input */}
      <div className="w-full">
        <p className="text-sm text-gray-400 mb-1">Enter Coins</p>
        <input
          type="number"
          value={coins}
          onChange={(e) => setCoins(Number(e.target.value))}
          placeholder="Enter coins to send..."
          className="border border-gray-700 bg-gray-800 text-gray-100 px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Button */}
      <button
        onClick={handleTransfer}
        disabled={loading}
        className={`w-full py-2 px-4 rounded-md text-white font-medium transition 
          ${
            loading
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
      >
        {loading ? "Transferring..." : "Transfer Coins"}
      </button>
    </div>
  );
};

export default TransferCoin;
