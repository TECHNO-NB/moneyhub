"use client";
/* eslint-disable */

import { useState } from "react";
import Image from "next/image";
import {
  LogOut,
  Wallet,
  User,
  History,
  Info,
  FileText,
  Layers,
  Gift,
  ShoppingBag,
  Headphones,
} from "lucide-react";
import RedeemCoin from "@/components/RedeemCoin";
import { useDispatch, useSelector } from "react-redux";
import coin from "../../../public/moneyhublogo2.png";
import { addUser, userState } from "@/redux/userSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import LoaderSpinner from "@/components/Loader";

const tabs = [
  { label: "Personal Details", icon: User },
  { label: "History", icon: History },
  { label: "Buy Products", icon: ShoppingBag },
  { label: "Redeem Coin", icon: Gift },
  { label: "Records", icon: Layers },
  { label: "Terms & Conditions", icon: FileText },
  { label: "About Us", icon: Info },
  { label: "Support", icon: Headphones },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Personal Details");
  const userData = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const router=useRouter();
 const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleLogOut = async () => {
    try {
      setIsLoading(true);
      axios.defaults.withCredentials = true;
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/log-out`
      );
      if (res.data.success) {
        setIsLoading(false)
        const userData: userState = {
          id: "",
          avatar: "",
          fullName: "",
          email: "",
          balance: 0,
          role: "",
        };
        dispatch(addUser(userData));
        router.push("/");
        toast.success("Logout sucessfully")

      }
    } catch (error) {
      console.log(error);
      toast.error("Logout failed")
      setIsLoading(false)
    }finally{
      setIsLoading(false)
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white p-4 sm:p-8">
     {isLoading ? <LoaderSpinner/> : null}
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <section className="bg-zinc-800/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-lg border border-zinc-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <Image
                src={userData.avatar}
                alt="User Avatar"
                width={72}
                height={72}
                className="rounded-full border-2 border-white shadow-md"
              />
              <div>
                <h1 className="text-2xl font-bold">{userData.fullName}</h1>
                <p className="text-gray-400 text-sm">{userData.email}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-xl border border-zinc-700">
                <Wallet className="h-5 w-5 text-green-400" />
                <span className="text-white">$1,250</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-xl border border-zinc-700">
                <Image src={coin} height={19} alt="coin image" />
                <span className="text-white">{userData.balance} Coins</span>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <nav className="flex flex-wrap mt-8 gap-3">
          {tabs.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setActiveTab(label)}
              className={`flex items-center cursor-pointer gap-2 px-4 py-2 rounded-full text-sm transition-all duration-200
                ${
                  activeTab === label
                    ? "bg-white text-black font-semibold"
                    : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
                }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}

          <button
            onClick={handleLogOut}
            className="ml-auto cursor-pointer flex items-center gap-2 text-red-500 hover:text-red-200 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Log Out
          </button>
        </nav>

        {/* Tab Content */}
        <section className="mt-8 bg-zinc-800/50 rounded-xl p-6 sm:p-8 border border-zinc-700 shadow-md">
          {activeTab === "Personal Details" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Personal Info</h2>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <strong>full Name:</strong> {userData.fullName}
                </li>
                <li>
                  <strong>Email:</strong> {userData.email}
                </li>
                <li>
                  <strong>Role:</strong> {userData.role}
                </li>
              </ul>
            </div>
          )}

          {activeTab === "History" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Coin History</h2>
              <ul className="space-y-2 text-gray-300">
                <li>✅ Watched ad – Earned 50 coins</li>
                <li>🛒 Redeemed gift card – Spent 20 coins</li>
                <li>🎉 Referral bonus – Earned 100 coins</li>
              </ul>
            </div>
          )}

          {activeTab === "Buy Products" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Product Orders</h2>
              <ul className="space-y-4 text-gray-300">
                <li>
                  🎧 Wireless Earbuds –{" "}
                  <span className="text-green-400">✅ Delivered</span>
                </li>
                <li>
                  🧢 Custom Cap –{" "}
                  <span className="text-yellow-400">⏳ Pending</span>
                </li>
                <li>
                  🕹️ Gamepad –{" "}
                  <span className="text-green-400">✅ Delivered</span>
                </li>
              </ul>
            </div>
          )}

          {activeTab === "Redeem Coin" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Redeem Coins</h2>
              <div className="div flex  items-center justify-center">
                <RedeemCoin />
              </div>
            </div>
          )}

          {activeTab === "Records" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Redemption Records</h2>
              <p className="text-gray-300">
                You’ve redeemed 450 coins this month.
              </p>
            </div>
          )}

          {activeTab === "Terms & Conditions" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Terms & Conditions</h2>
              <p className="text-gray-300">
                Coins are non-transferable and have no real-world monetary
                value. Violating our policies may lead to account suspension.
              </p>
            </div>
          )}

          {activeTab === "About Us" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">About Us</h2>
              <p className="text-gray-300">
                We are a digital rewards platform helping users earn through
                games, surveys, and referrals. Trusted by thousands globally.
              </p>
            </div>
          )}

          {activeTab === "Support" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Support</h2>
              <p className="text-gray-300">Need help? Reach us anytime.</p>
              <ul className="mt-3 space-y-2 text-gray-300">
                <li>📧 Email: support@example.com</li>
                <li>📞 Phone: +123-456-7890</li>
                <li>🌐 Website Chat: Available 24/7</li>
              </ul>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
