// components/JoinFfMatch.tsx
"use client";
/* eslint-disable */

import React, { useEffect, useState } from "react";
import { Loader, X } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

type Props = {
  match: any;
  onClose: () => void;
};

const JoinFfMatch = ({ match, onClose }: Props) => {
  const [time, setTime] = useState("");
  const [gameName, setGameName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state: any) => state.user);
  const router = useRouter();

  if (!match) {
    return;
  }

  const handleDate = () => {
    const date = new Date(match.time);
    const formatted = date.toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    setTime(formatted);
  };
  useEffect(() => {
    handleDate();
  }, [match.time]);

  const handleTournament = async () => {
    setIsLoading(true);
    if (!gameName) {
      toast.error("Please enter your ff game name");
      setIsLoading(false);
      return;
    }

    if (user.balance < match.cost) {
      router.push("/add-coin");
      setIsLoading(false);
      toast.error("Insufficient balance");
      return;
    }
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tournament/join-ff-tournament/${match.id}`,
        {
          cost: match.cost,
          gameName,
        }
      );
      if (res.data) {
        setIsLoading(false);
        onClose();
        toast.success("Tournament joined successfully");
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error("Unable to joined");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      {/* Modal */}
      <div className="w-full sm:w-[500px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl border border-yellow-400 shadow-xl p-6 animate-slide-up">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Image
              src="https://cdn.vectorstock.com/i/1000v/30/87/free-fire-logo-game-idea-vector-51373087.jpg"
              alt="Match"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <h2 className="text-2xl font-bold text-yellow-400">
              {match.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-red-500/20 transition cursor-pointer"
          >
            <X size={32} className="text-white hover:text-red-500" />
          </button>
        </div>

        {/* Match Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p>
              <span className="font-semibold text-gray-400">Match ID:</span>{" "}
              {match.id}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Time:</span> {time}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Game Name:</span>{" "}
              {match.owner}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Creator:</span>{" "}
              Admin
            </p>
            <p>
              <span className="font-semibold text-gray-400">Ammo:</span>{" "}
              {match.ammo === false ? "Unlimited Ammo" : "Limited Ammo"}
            </p>
            <p>
              <span className="font-semibold text-gray-400">Skill:</span>{" "}
              {match.skill ? "Character Skill On" : "Character Skill Off"}
            </p>
          </div>
          <div className="space-y-2">
            <p>
              <span className="font-semibold text-green-400">Reward:</span>{" "}
              {match.reward}
            </p>
            <p>
              <span className="font-semibold text-red-400">Join Cost:</span>{" "}
              {match.cost}
            </p>
          </div>
        </div>

        {/* Input Field */}
        <div className="relative w-full mt-6">
          <label className="absolute -top-2 left-4 bg-gradient-to-r from-gray-900 to-black px-1 text-xs text-gray-300">
            Freefire Game Name
          </label>
          <input
            onChange={(e) => setGameName(e.target.value)}
            type="text"
            placeholder="gamingx3"
            className="w-full px-5 py-3 rounded-xl border border-gray-700 bg-black/40 text-white placeholder-gray-500 
              focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 
              transition duration-300 ease-in-out"
          />
        </div>

        {/* Join Button */}
        <button
          onClick={handleTournament}
          className="mt-6 text-center flex items-center justify-center cursor-pointer w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 rounded-xl font-bold shadow-md transition transform hover:scale-[1.02]"
        >
          {isLoading ? (
            <>
              <Loader className="w-5 h-5 animate-spin " />
              <span>Processing...</span>
            </>
          ) : (
            "Confirm Join"
          )}
        </button>
      </div>
    </div>
  );
};

export default JoinFfMatch;
