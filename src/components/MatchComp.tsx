/* eslint-disable */
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { BowArrow } from "lucide-react";
import GamesLoading from "@/components/GamesLoading";
import JoinFfMatch from "@/components/JoinFfMatch";
import MatchCard from "@/components/MatchCard";
import EnteredMatches from "@/components/EnteredMatches";

const MatchComp = () => {
  const [matches, setMatches] = useState<any[]>([]);
  const [isCardLoad, setIsCardLoad] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState<any | null>(null);
  const [activeTab, setActiveTab] = useState<"available" | "entered">(
    "available"
  );

  const openJoinModal = (match: any) => setSelectedMatch(match);
  const closeJoinModal = () => setSelectedMatch(null);

  useEffect(() => {
    setIsCardLoad(true);
    const getAllFfTournament = async () => {
      try {
        const allRes = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/get-ff-tournament`
        );
        setMatches(allRes.data.data);
      } catch (error) {
        console.error("Error fetching all matches:", error);
      } finally {
        setIsCardLoad(false);
      }
    };
    getAllFfTournament();
  }, []);

  return (
    <div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold mt-6 text-yellow-400 flex items-center justify-center gap-2">
          <BowArrow /> Matches Arena
        </h1>
        <p className="text-gray-400 text-sm mt-2">
          Enter battles, earn coins, and show your skill!
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 my-6">
        <button
          onClick={() => setActiveTab("available")}
          className={`px-4 py-2 cursor-pointer rounded-lg text-center font-bold transition ${
            activeTab === "available"
              ? "bg-yellow-500 text-black"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          Available Matches
        </button>
        <button
          onClick={() => setActiveTab("entered")}
          className={`px-4 py-2 cursor-pointer rounded-lg font-bold transition ${
            activeTab === "entered"
              ? "bg-yellow-500 text-black"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          Entered Tournaments
        </button>
      </div>

      {/* Matches Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeTab === "available" ? (
          isCardLoad ? (
            Array.from({ length: 3 }).map((_, i) => <GamesLoading key={i} />)
          ) : matches.length === 0 ? (
            <h1 className="text-center text-white text-xl col-span-2">
              No Matches Found
            </h1>
          ) : (
            matches.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
                openJoinModal={openJoinModal}
              />
            ))
          )
        ) : (
          <EnteredMatches />
        )}
      </div>

      {/* Modal */}
      {selectedMatch && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <JoinFfMatch match={selectedMatch} onClose={closeJoinModal} />
        </motion.div>
      )}
    </div>
  );
};

export default MatchComp;
