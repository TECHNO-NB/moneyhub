"use client";
/* eslint-disable */
import JoinFfMatch from "@/components/JoinFfMatch";
import axios from "axios";
import { motion } from "framer-motion";
import { BowArrow, Gamepad2, Clock } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// const matches = [
//   {
//     id: "UHDgui487594umudhf",
//     title: "Freefire Solo",
//     image:
//       "https://cdn.vectorstock.com/i/1000v/30/87/free-fire-logo-game-idea-vector-51373087.jpg",
//     time: "Aug 07 10:00 AM",
//     owner: "LG Boy",
//     creator: "Hari",
//     ammo: "Unlimited Ammo",
//     skill: "Character Skill On",
//     reward: "500 Coin",
//     cost: "32 Coin",
//   },
//   {
//     id: "JFK8392KD",
//     title: "Freefire Duo",
//     image:
//       "https://cdn.vectorstock.com/i/1000v/30/87/free-fire-logo-game-idea-vector-51373087.jpg",
//     time: "Aug 07 01:00 PM",
//     owner: "SniperX",
//     creator: "John gaming",
//     ammo: "Limited Ammo",
//     skill: "Character Skill Off",
//     reward: "1000 Coin",
//     cost: "50 Coin",
//   },
// ];

export default function page() {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [matches, setMatches] = useState([]);
  

  const openJoinModal = (match: any) => setSelectedMatch(match);
  const closeJoinModal = () => setSelectedMatch(null);

  useEffect(() => {
    const getAllFfTournament = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/get-ff-tournament`
        );
        setMatches(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllFfTournament();
  }, []);

  const handleDate=matches.map((val)=>{
    // @ts-ignore
    const date=new Date(val.time)

    const formatted=date.toLocaleString("en-US",{
      month:"short",
      day:"2-digit",
      hour:"2-digit",
      minute:"2-digit",
      hour12:true
    })
    return formatted;
  })

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

        {/* Matches Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {matches.length === 0 && (
            <div>
              <h1 className="text-center text-white text-xl">
                No Matches Found
              </h1>
            </div>
          )}
          {matches.map((match: any, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              key={match.id}
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
                  <h2 className="text-xl font-bold text-yellow-300">
                    {match.title}
                  </h2>
                  <p className="text-sm text-gray-400 break-all">{match.id}</p>
                </div>
              </div>

              {/* Time & Owner */}
              <div className="mt-4 flex justify-between items-center text-sm">
                <div className="flex items-center gap-2 bg-blue-600 px-3 py-1 rounded-lg font-medium text-white">
                  <Clock size={16} /> {handleDate}
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
                  {match.skill === true
                    ? "Character Skill On"
                    : "Character Skill Off"}
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-6">
                <span className="bg-green-500 text-white px-4 py-1 rounded-md font-bold text-sm">
                  Gain: {match.reward}
                </span>
                <button
                  onClick={() => openJoinModal(match)}
                  className="bg-red-500 cursor-pointer hover:bg-red-600 px-4 py-1 text-sm font-bold rounded-lg transition"
                >
                  Join {match.cost}
                </button>
              </div>
            </motion.div>
          ))}
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
