"use client";
/* eslint-disable */
import { motion } from "framer-motion";
import Image from "next/image";
import toast from "react-hot-toast";
import { Clock, Gamepad2, DoorOpen, KeyRound } from "lucide-react";

export default function MatchCard({
  match,
  isEntered,
  openJoinModal,
}: {
  match: any;
  isEntered?: boolean;
  openJoinModal?: (match: any) => void;
}) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Asia/Kathmandu",
    });
  };

  const matchDate = new Date(match.time);
  const formattedDate = formatDate(match.time);
  const now = Date.now();

  const showCredentials =
    isEntered &&
    Boolean(match?.roomId) &&
    Boolean(match?.password) &&
    now >= matchDate.getTime();

  if (showCredentials) {
    toast.success("Tournament is started");
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="relative border border-yellow-500/20 bg-white/5 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:shadow-yellow-500/30 transition duration-300"
    >
      {/* Header */}
      {showCredentials ? (
        <div
          className=" absolute top-4  font-bold text-white   bg-green-400 text-center
       right-4 px-1 py-0 rounded-3xl border-2 flex items-center"
        >
          Game Started
        </div>
      ) : null}
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
        <div className="flex items-center gap-2 bg-blue-600 px-3 py-1 rounded-lg font-medium  text-white">
          <Clock size={16} /> {formattedDate}
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
            onClick={() => openJoinModal && openJoinModal(match)}
            className="bg-red-500 cursor-pointer hover:bg-red-600 px-4 py-1 text-sm font-bold rounded-lg transition"
          >
            Join {match.cost === 0 ? "free" : match.cost}
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
        ) : now >= matchDate.getTime() ? (
          <span className="text-yellow-400 text-xs">Room not created yet</span>
        ) : (
          <span className="text-gray-400 text-xs">Wait for match time...</span>
        )}
      </div>
    </motion.div>
  );
}
