"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function TradePage() {
  const [balance, setBalance] = useState(10000); // Real balance
  const [tradeAmount, setTradeAmount] = useState(100);
  const [position, setPosition] = useState<"UP" | "DOWN" | null>(null);
  const [entryPrice, setEntryPrice] = useState<number | null>(null);
  const [lastPrice, setLastPrice] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");

  // This holds the balance including unrealized P/L during open trade
  const [displayBalance, setDisplayBalance] = useState(balance);

  const tvRef = useRef<HTMLDivElement>(null);

  // Generate a random price between 1700 and 1900 simulating XAU/USD price
  const getRandomPrice = () => +(1700 + Math.random() * 200).toFixed(2);

  // Simulate live price update every 1 second
  useEffect(() => {
    // Initialize with a random price
    setLastPrice(getRandomPrice());

    const interval = setInterval(() => {
      setLastPrice(getRandomPrice());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Update displayBalance dynamically if trade open
  useEffect(() => {
    if (position && entryPrice !== null && lastPrice !== null) {
      const priceChange = lastPrice - entryPrice;
      const profitLoss =
        (priceChange / entryPrice) * tradeAmount * (position === "UP" ? 1 : -1);

      const clampedPL = Math.max(Math.min(profitLoss, tradeAmount), -tradeAmount);

      setDisplayBalance(Number((balance + clampedPL).toFixed(2)));
    } else {
      setDisplayBalance(balance);
    }
  }, [lastPrice, position, entryPrice, tradeAmount, balance]);

  // Embed TradingView chart once (it will show real market price, but your price is simulated)
  useEffect(() => {
    if (tvRef.current && !tvRef.current.querySelector("iframe")) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbol: "OANDA:XAUUSD",
        width: "100%",
        height: "300",
        locale: "en",
        dateRange: "1D",
        colorTheme: "dark",
        isTransparent: false,
        autosize: true,
      });
      tvRef.current.appendChild(script);
    }
  }, []);

  // User places a trade
  const handleTrade = (direction: "UP" | "DOWN") => {
    if (tradeAmount <= 0 || tradeAmount > balance) {
      alert("❌ Invalid trade amount");
      return;
    }
    if (!lastPrice) {
      alert("Price not loaded yet, please wait");
      return;
    }
    setPosition(direction);
    setEntryPrice(lastPrice);
    setMessage(`Trade opened at $${lastPrice.toFixed(2)} going ${direction}`);
  };

  // Resolve trade: commit unrealized P/L to real balance
  const resolveTrade = () => {
    if (!position || entryPrice === null || lastPrice === null) {
      alert("No active trade");
      return;
    }

    const priceChange = lastPrice - entryPrice;
    const profitLoss =
      (priceChange / entryPrice) * tradeAmount * (position === "UP" ? 1 : -1);

    const clampedPL = Math.max(Math.min(profitLoss, tradeAmount), -tradeAmount);

    const newBalance = Number((balance + clampedPL).toFixed(2));

    setBalance(newBalance);
    setDisplayBalance(newBalance);

    const wonLost = clampedPL >= 0 ? "WON" : "LOST";
    setMessage(
      `✅ You ${wonLost}! Entry: $${entryPrice.toFixed(
        2
      )}, Exit: $${lastPrice.toFixed(2)}, P/L: $${clampedPL.toFixed(2)}`
    );

    setPosition(null);
    setEntryPrice(null);
  };

  // Exit trade cancels open trade without affecting balance
  const exitTrade = () => {
    setPosition(null);
    setEntryPrice(null);
    setDisplayBalance(balance);
    setMessage("🚫 Trade exited.");
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center">
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Gold Demo Trading – XAU/USD (Simulated Prices)
      </motion.h1>

      <div className="bg-gray-900 p-6 rounded-xl w-full max-w-3xl text-center space-y-6">
        <p className="text-xl">
          Balance:{" "}
          <span className="text-green-400">${displayBalance.toLocaleString()}</span>
        </p>

        <p className="text-yellow-300 text-lg">
          Current Price: ${lastPrice?.toFixed(2) ?? "Loading..."}
        </p>

        <div>
          <label className="block mb-2">Trade Amount ($):</label>
          <input
            type="number"
            min={1}
            max={balance}
            value={tradeAmount}
            onChange={(e) => setTradeAmount(Number(e.target.value))}
            className="w-40 px-3 py-2 rounded-lg bg-gray-800 text-white text-center"
            disabled={!!position}
          />
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          <button
            onClick={() => handleTrade("UP")}
            disabled={!!position}
            className="bg-green-600 hover:bg-green-700 disabled:opacity-50 px-8 py-3 rounded-xl font-semibold"
          >
            Trade UP
          </button>
          <button
            onClick={() => handleTrade("DOWN")}
            disabled={!!position}
            className="bg-red-600 hover:bg-red-700 disabled:opacity-50 px-8 py-3 rounded-xl font-semibold"
          >
            Trade DOWN
          </button>
        </div>

        {position !== null && (
          <>
            <p className="text-yellow-400 font-medium">
              Trade Open: {position} at ${entryPrice?.toFixed(2)}
            </p>

            <div className="flex justify-center gap-6">
              <button
                onClick={resolveTrade}
                className="bg-white text-black px-6 py-2 rounded-xl font-semibold"
              >
                Resolve Trade
              </button>
              <button
                onClick={exitTrade}
                className="bg-gray-600 px-6 py-2 rounded-xl font-semibold"
              >
                Exit Trade
              </button>
            </div>
          </>
        )}

        {message && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-center text-lg"
          >
            {message}
          </motion.p>
        )}
      </div>

      <div className="w-full max-w-3xl mt-8" ref={tvRef} />
    </div>
  );
}
