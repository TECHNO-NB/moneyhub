// components/JoinFfMatch.tsx
"use client";
/* eslint-disable */

import React from "react";
import { X } from "lucide-react";
import Image from "next/image";

type Props = {
  match: any;
  onClose: () => void;
};

const JoinFfMatch = ({ match, onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 ">
      <div className="w-full sm:w-[500px] max-h-fit bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-t-2xl p-6 animate-slide-up overflow-y-auto border-2 border-yellow-400">
        {/* Close Button */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl flex gap-2 *:font-bold text-yellow-400">
            {/* Match Image */}
            <Image
              src={match.image}
              alt="Match"
              width={30}
              height={30}
              className="rounded-lg mb-6  "
            />
            {match.title}
          </h2>
          <button className=" cursor-pointer" onClick={onClose}>
            <X size={40} className="text-white hover:text-red-500" />
          </button>
        </div>

        {/* Match Details */}
        <p>
          <span className="font-bold  text-gray-400">Match ID:</span> {match.id}
        </p>
        <div className="space-y-3 mt-4 flex justify-between text-sm text-white">
          <div className="div">
            <p>
              <span className="font-bold text-gray-400">Time:</span>{" "}
              {match.time}
            </p>
            <p>
              <span className="font-bold text-gray-400">Owner:</span>{" "}
              {match.owner}
            </p>
            <p>
              <span className="font-bold text-gray-400">Creator:</span>{" "}
              {match.creator}
            </p>
            <p>
              <span className="font-bold text-gray-400">Ammo:</span>{" "}
              {match.ammo}
            </p>
            <p>
              <span className="font-bold text-gray-400">Skill:</span>{" "}
              {match.skill}
            </p>
          </div>
          <div className="div">
            <p>
              <span className="font-bold text-green-400">Reward:</span>{" "}
              {match.reward}
            </p>
            <p>
              <span className="font-bold text-red-400">Join Cost:</span>{" "}
              {match.cost}
            </p>
          </div>
        </div>

        <div className="relative w-full mt-2 mb-2">
          <label className="absolute -top-2 left-4 bg-[#1a1a1a] px-1 text-sm text-gray-300">
            Freefire Game Name
          </label>
          <input
            type="text"
            placeholder="gamingx3"
            className="w-full px-5 py-3 rounded-xl border-2 border-gray-700 bg-transparent text-white placeholder-gray-500 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
              transition duration-300 ease-in-out"
          />
        </div>
        {/* Join Button */}

        <button className="mt-2 cursor-pointer mb-12 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-bold">
          Confirm Join
        </button>
      </div>
    </div>
  );
};

export default JoinFfMatch;
