"use client";
/* eslint-disable */
import GamesLoading from "@/components/GamesLoading";
import JoinFfMatch from "@/components/JoinFfMatch";
import axios from "axios";
import { motion } from "framer-motion";
import { BowArrow, Gamepad2, Clock, KeyRound, DoorOpen } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Page() {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [matches, setMatches] = useState([]);
  const [enteredMatches, setEnteredMatches] = useState([]);
  const [isCardLoad, setIsCardLoad] = useState(false);
  const [activeTab, setActiveTab] = useState<"available" | "entered">("available");

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

      try {
        axios.defaults.withCredentials = true;
        const enteredRes = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tournament/get-entered-tournament`
        );
        setEnteredMatches(enteredRes.data.data);
      } catch (error) {
        console.warn("No entered tournaments found or endpoint missing:", error);
        setEnteredMatches([]);
      }
    };

    getAllFfTournament();
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const MatchCard = ({ match, isEntered }: { match: any; isEntered?: boolean }) => {
    const matchTime = new Date(match.time).getTime();
    const now = Date.now();
    const showCredentials =
      isEntered &&
      Boolean(match?.roomId) &&
      Boolean(match?.password) &&
      now >= matchTime;

    if (showCredentials) {
      toast.success("Tournament is started");
    }

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="relative border border-yellow-500/20 bg-white/5 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:shadow-yellow-500/30 transition duration-300"
      >
        {/* Header */}
        <div className="flex items-center gap-4">
          <Image
            src="https://cdn.vectorstock.com/i/1000v/30/87/free-fire-logo-game-idea-vector-51373087.jpg"
            alt="match banner"
            width={30}
            height={30}
            className="rounded-full border-2 border-yellow-400 object-cover"
          />
          <div>
            <h2 className="text-xl font-bold text-yellow-300">{match.title}</h2>
            <p className="text-sm text-gray-400 break-all">{match.id}</p>
          </div>
        </div>

        {/* Time & Owner */}
        <div className="mt-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2 bg-blue-600 px-3 py-1 rounded-lg font-medium text-white">
            <Clock size={16} /> {formatDate(match.time)}
          </div>
          <div className="flex items-center gap-2 text-red-400 font-medium">
            <Gamepad2 size={16} /> {match.owner}
          </div>
        </div>

        {/* Features */}
        <div className="mt-4 space-y-2 text-sm">
          <div className="flex flex-wrap justify-between gap-3">
            <span className="bg-blue-500/80 text-white px-3 py-1 rounded-md">
              {match.ammo === false ? "UnLimited Ammo" : "Limited Ammo"}
            </span>
            <span className="text-gray-300">Created by : Admin</span>
          </div>
          <div className="inline-block bg-purple-600 px-3 py-1 rounded-md text-white">
            {match.skill === true ? "Character Skill On" : "Character Skill Off"}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6">
          <span className="bg-green-500 text-white px-4 py-1 rounded-md font-bold text-sm">
            Gain: {match.reward}
          </span>

          {!isEntered ? (
            <button
              onClick={() => openJoinModal(match)}
              className="bg-red-500 cursor-pointer hover:bg-red-600 px-4 py-1 text-sm font-bold rounded-lg transition"
            >
              Join {match.cost}
            </button>
          ) : showCredentials ? (
            <div className="text-sm text-white space-y-1">
              <div className="flex items-center gap-1">
                <DoorOpen size={16} /> Room: {match.roomId}
              </div>
              <div className="flex items-center gap-1">
                <KeyRound size={16} /> Pass: {match.password}
              </div>
            </div>
          ) : now >= matchTime ? (
            <span className="text-yellow-400 text-xs">Room not created yet</span>
          ) : (
            <span className="text-gray-400 text-xs">Wait for match time...</span>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-8"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center"
        >
          <Image
            src="https://wallpapers.com/images/hd/4k-free-fire-characters-working-together-8bh4bpve4raxr2ll.jpg"
            alt="FF Banner"
            width={1000}
            height={300}
            className="w-full rounded-xl shadow-2xl object-cover border-2 border-yellow-400"
          />
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 text-yellow-400 flex items-center justify-center gap-2">
            <BowArrow /> Matches Arena
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Enter battles, earn coins, and show your skill!
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => setActiveTab("available")}
            className={`px-4 py-2 cursor-pointer rounded-lg font-bold ${
              activeTab === "available"
                ? "bg-yellow-500 text-black"
                : "bg-gray-800 text-gray-300"
            }`}
          >
            Available Matches
          </button>
          <button
            onClick={() => setActiveTab("entered")}
            className={`px-4 py-2 cursor-pointer rounded-lg font-bold ${
              activeTab === "entered"
                ? "bg-yellow-500 text-black"
                : "bg-gray-800 text-gray-300"
            }`}
          >
            Entered Tournaments
          </button>
        </div>

        {/* Matches Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {isCardLoad ? (
            Array.from({ length: 4 }).map((_, i) => <GamesLoading key={i} />)
          ) : activeTab === "available" ? (
            matches.length === 0 ? (
              <h1 className="text-center text-white text-xl col-span-2">
                No Matches Found
              </h1>
            ) : (
              matches.map((match: any) => <MatchCard key={match.id} match={match} />)
            )
          ) : enteredMatches.length === 0 ? (
            <h1 className="text-center text-white text-xl col-span-2">
              No Entered Tournaments
            </h1>
          ) : (
            enteredMatches.map((match: any) => (
              <MatchCard key={match.id} match={match} isEntered />
            ))
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedMatch && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <JoinFfMatch match={selectedMatch} onClose={closeJoinModal} />
        </motion.div>
      )}
    </motion.main>
  );
}
