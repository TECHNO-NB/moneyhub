"use client";
/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "axios";
import GamesLoading from "@/components/GamesLoading";
import MatchCard from "@/components/MatchCard";

export default function EnteredMatches() {
  const [enteredMatches, setEnteredMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getEnteredTournaments = async () => {
      try {
        axios.defaults.withCredentials = true;
        const enteredRes = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/tournament/get-entered-tournament`
        );
        setEnteredMatches(enteredRes.data.data);
      } catch (error) {
        console.warn("No entered tournaments found or endpoint missing:", error);
      } finally {
        setLoading(false);
      }
    };

    getEnteredTournaments();
  }, []);

  if (loading) {
    return Array.from({ length: 1 }).map((_, i) => <GamesLoading key={i} />);
  }

  if (enteredMatches.length === 0) {
    return (
      <h1 className="text-center text-white text-xl col-span-2">
        No Entered Tournaments
      </h1>
    );
  }

  return enteredMatches.map((match: any) => (
    <MatchCard key={match.id} match={match} isEntered />
  ));
}
