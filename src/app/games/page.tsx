// app/page.tsx
'use client'
/* eslint-disable */
import JoinFfMatch from "@/components/JoinFfMatch";
import { BowArrow, Gamepad2, Clock } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const matches = [
  {
    id: "UHDgui487594umudhf",
    title: "Freefire Solo",
    image:
      "https://cdn.vectorstock.com/i/1000v/30/87/free-fire-logo-game-idea-vector-51373087.jpg",
    time: "Aug 07 10:00 AM",
    owner: "LG Boy",
    creator: "Hari",
    ammo: "Unlimited Ammo",
    skill: "Character Skill On",
    reward: "500 Coin",
    cost: "32 Coin",
  },
  {
    id: "JFK8392KD",
    title: "Freefire Duo",
    image:
      "https://cdn.vectorstock.com/i/1000v/30/87/free-fire-logo-game-idea-vector-51373087.jpg",
    time: "Aug 07 01:00 PM",
    owner: "SniperX",
    creator: "John",
    ammo: "Limited Ammo",
    skill: "Character Skill Off",
    reward: "1000 Coin",
    cost: "50 Coin",
  },
];

export default function Page() {
  const [selectedMatch, setSelectedMatch] = useState(null);

  const openJoinModal = (match: any) => setSelectedMatch(match);
  const closeJoinModal = () => setSelectedMatch(null);
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <Image
            src="https://th.bing.com/th/id/OIP.Nk8Ek6VjOGamUdhPzEgNNwHaD5"
            alt="FF Banner"
            width={1000}
            height={300}
            className="w-full rounded-xl shadow-2xl object-cover"
          />
          <h1 className="text-3xl md:text-5xl font-extrabold mt-6 text-yellow-400 flex items-center justify-center gap-2">
            <BowArrow /> Matches Arena
          </h1>
          <p className="text-gray-400 text-sm mt-2">Enter battles, earn coins, and show your skill!</p>
        </div>

        {/* Matches Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {!matches && (
            <div className="div">
              <h1>No Matches</h1>
            </div>
          )}
          {matches && matches.map((match) => (
            <div
              key={match.id}
              className="relative border border-yellow-500/20 bg-white/5 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:shadow-yellow-500/30 transition duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <Image
                  src={match.image}
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
                  <Clock size={16} /> {match.time}
                </div>
                <div className="flex items-center gap-2 text-red-400 font-medium">
                  <Gamepad2 size={16} /> {match.owner}
                </div>
              </div>

              {/* Features */}
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex flex-wrap justify-between gap-3">
                  <span className="bg-blue-500/80 text-white px-3 py-1 rounded-md">
                    {match.ammo}
                  </span>
                  <span className="text-gray-300">Created by {match.creator}</span>
                </div>
                <div className="inline-block bg-purple-600 px-3 py-1 rounded-md text-white">
                  {match.skill}
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center mt-6">
                <span className="bg-green-500 text-white px-4 py-1 rounded-md font-bold text-sm">
                  Gain: {match.reward}
                </span>
                <button onClick={() => openJoinModal(match)} className="bg-red-500 hover:bg-red-600 px-4 py-1 text-sm font-bold rounded-lg transition">
                  Join {match.cost}
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
        {/* Modal */}
      {selectedMatch && (
        <JoinFfMatch match={selectedMatch} onClose={closeJoinModal} />
      )}
      
    </main>
  );
}
