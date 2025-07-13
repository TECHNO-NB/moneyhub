
"use client";

import { useState } from "react";
import {
  Home,
  Wallet,
  ShoppingCart,
  User,
} from "lucide-react"; // You can use any icons you want

export default function BottomTab() {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { name: "Home", icon: <Home />, key: "home" },
    { name: "Wallet", icon: <Wallet />, key: "wallet" },
    { name: "Shop", icon: <ShoppingCart />, key: "shop" },
    { name: "Profile", icon: <User />, key: "profile" },
  ];

  return (
    <div className="flex flex-col z-100 ">
      {/* Main content */}
     
      {/* Bottom Tab Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t shadow-md z-50">
        <div className="flex justify-between">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex flex-col items-center justify-center flex-1 py-2 ${
                activeTab === tab.key ? "text-blue-600" : "text-white"
              }`}
            >
              {tab.icon}
              <span className="text-sm">{tab.name}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
