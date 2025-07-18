/* eslint-disable */
"use client";

import { useState } from "react";
import { Home, Wallet, ShoppingCart, User } from "lucide-react"; // You can use any icons you want
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function BottomTab() {
  const [activeTab, setActiveTab] = useState("/");
  const router = useRouter();
  const userData = useSelector((state: any) => state.user);

  const tabs = [
    { name: "Home", icon: <Home />, key: "/" },
    { name: "Wallet", icon: <Wallet />, key: "wallet" },
    { name: "Shop", icon: <ShoppingCart />, key: "shop" },
    {
      name: userData?.id ? "Profile" : "Login",
      icon: <User />,
      key: userData?.id ? "profile" : "auth",
    },
  ];

  const handleTabClick = (tab: any) => {
    setActiveTab(tab.key);
    router.push(`/${tab.key}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col z-100 "
    >
      {/* Bottom Tab Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t shadow-md z-50 md:w-[40%] md:items-center md:justify-center md:left-[30%] md:rounded-4xl">
        <div className="flex justify-between">
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.key}
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: (index + 0.1) * 0.1 }}
              onClick={() => handleTabClick(tab)}
              className={`flex flex-col items-center justify-center cursor-pointer  flex-1 py-2 ${
                activeTab === tab.key ? "text-yellow-400" : "text-white"
              }`}
            >
              {tab.key === "profile" && userData?.avatar ? (
                <Image
                  src={userData.avatar}
                  alt="user avatar"
                  height={23}
                  width={23}
                  className="rounded-full"
                />
              ) : (
                tab.icon
              )}
              <span className="text-sm">{tab.name}</span>
            </motion.button>
          ))}
        </div>
      </nav>
    </motion.div>
  );
}
