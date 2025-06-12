// app/page.tsx
import React from "react";

const topUpOptions = [
  { diamonds: 50, price: 60 },
  { diamonds: 115, price: 120 },
  { diamonds: 240, price: 250 },
  { diamonds: 610, price: 600 },
  { diamonds: 1240, price: 1140 },
  { diamonds: 2530, price: 2300 },
  { diamonds: 260, price: 35500 },
  { diamonds: 'Level Up Pass', price: 250 },
  { diamonds: 'Weekly Membeship', price: 240 },
  { diamonds: 'Monthly Membership', price: 1110 },
  // { diamonds: 635, price: 85000 },
  // { diamonds: 720, price: 94000 },
  // { diamonds: 860, price: 113000 },
  // { diamonds: 1075, price: 141000 },
  // { diamonds: 1440, price: 188000 },
  // { diamonds: 2000, price: 257000 },
  // { diamonds: 2720, price: 351000 },
  // { diamonds: 3440, price: 445000 },
  // { diamonds: 4000, price: 514000 },
  // { diamonds: 5075, price: 655000 },
  // { diamonds: 6000, price: 771000 },
  // { diamonds: 7290, price: 940000 },
];

export default function TopUpRate() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-200 p-4">
      <div className="max-w-4xl mx-auto text-center mb-6">
        <h1 className="text-4xl font-bold text-yellow-800">Top Up Free Fire</h1>
        <p className="text-gray-700 mt-2">100% Trusted & Legal | Process 5-10 Minutes</p>
        <p className="text-sm text-gray-500">Time: 06:30 - 12:30</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {topUpOptions.map(({ diamonds, price }) => (
          <div
            key={diamonds}
            className="bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transition-transform"
          >
            <div className="text-xl font-semibold text-yellow-700">
              💎 {diamonds}
            </div>
            <div className="text-gray-600 text-sm mt-1">
              Rs. {price}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-gray-600">
      
      </div>
    </main>
  );
}
