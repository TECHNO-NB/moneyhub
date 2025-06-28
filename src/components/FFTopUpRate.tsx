// app/page.tsx
import React, { useState } from "react";
import { CircleCheck } from 'lucide-react';

const topUpOptions = [
  {index:0, diamonds: 50, price: 60 },
  { index:1,diamonds: 115, price: 120 },
  {index:2, diamonds: 240, price: 250 },
  {index:3, diamonds: 610, price: 600 },
  {index:4, diamonds: 1090, price: 1050 },
  { index:5,diamonds: 1240, price: 1140 },
  { index:6,diamonds: 2530, price: 2300 },
  { index:7,diamonds: 5060, price: 4500 },
  { index:8,diamonds: "All Level Up Pass", price: 600 },
  {index:9, diamonds: "Weekly Membeship", price: 240 },
  {index:10, diamonds: "Monthly Membership", price: 1100 },
];

export default function TopUpRate() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const selectedCardData=topUpOptions.find((data) => data.index===selectedCard);
  
  const whatsappMessage = selectedCardData
    ? `Hello, I'm interested in your ${selectedCardData.diamonds} package.\nPrice: ${selectedCardData.price}`
    : "";
  return (
    <main className=" bg-gradient-to-br from-yellow-50 to-yellow-200 p-4 items-center">
      <div className="max-w-4xl mx-auto text-center mb-6">
        <h1 className="text-4xl font-bold text-yellow-800">Top Up Free Fire</h1>
        <p className="text-gray-700 mt-2">
          100% Trusted & Legal | Process 5-10 Minutes
        </p>
        <p className="text-sm text-gray-500">Time: 06:30 - 12:30</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {topUpOptions.map(({index, diamonds, price }) => (
          <div
            key={diamonds}
            onClick={()=> setSelectedCard(index)}
            className={`bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform ${selectedCard==index ? "border-green-600 border-2":null}`}
          >
            <div className="text-xl font-semibold text-yellow-700">
              💎 {diamonds}
            </div>
            <div className="flex justify-between">
            <div className="text-gray-600 text-sm mt-1">Rs. {price}</div>
             {selectedCard ===index ? <CircleCheck color="green"/> : null}
            </div>
          </div>
        ))}
      </div>
   
      <div className="mt-4 py-2 text-center text-sm text-gray-600">
        <p className="text-sm text-green-600 py-4">
            Selected: <strong>{selectedCardData?.diamonds}</strong> —{" "}
            {selectedCardData?.price}
          </p>
        <a
            href={`https://wa.me/9779869436906?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-lg transition"
            >
            Buy on WhatsApp
          </a>
            </div>
    </main>
  );
}
