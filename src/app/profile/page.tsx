"use client";
/* eslint-disable */

import { useEffect, useState } from "react";
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
import { usePathname, useRouter } from "next/navigation";
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
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleLogOut = async () => {
    try {
      setIsLoading(true);
      axios.defaults.withCredentials = true;
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/log-out`
      );
      if (res.data.success) {
        setIsLoading(false);
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
        toast.success("Logout sucessfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Logout failed");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

   const protectedRoutes = ["/profile"];
   const pathname=usePathname();

  useEffect(() => {
    if (protectedRoutes.includes(pathname)) {
      if (!userData || !userData.id) {
        router.push("/auth");
      }
    }
  }, [pathname, userData]);
  

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white p-4 sm:p-8">
      {isLoading ? <LoaderSpinner /> : null}
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
                <span className="text-white">$0</span>
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
              <div className="text-gray-300 space-y-4">
                <p>
                  <strong>1. Coin System:</strong> Our platform uses a virtual
                  coin system to facilitate purchases of digital services such
                  as Free Fire top-ups, likes, views, and followers for TikTok,
                  Instagram, and other platforms. Coins do not have real-world
                  monetary value and cannot be exchanged or transferred outside
                  of our platform.
                </p>
                <p>
                  <strong>2. Coin Deposit & Purchase:</strong> To acquire coins,
                  users must first deposit real money into our designated bank
                  account. After depositing, users are required to submit a
                  valid payment screenshot for verification. Upon successful
                  manual verification, the equivalent amount of coins will be
                  credited to the user’s account.
                </p>
                <p>
                  <strong>3. Service Usage:</strong> Coins can be used only to
                  purchase services provided on our platform. Once a coin
                  transaction is completed (e.g., buying views, followers, or FF
                  diamonds), it cannot be reversed or refunded.
                </p>
                <p>
                  <strong>4. Verification & Processing Time:</strong> Payment
                  verification and coin crediting may take up to 24 hours
                  depending on transaction volume. Incomplete, fake, or unclear
                  payment proofs will be rejected.
                </p>
                <p>
                  <strong>5. Non-Refundable Policy:</strong> All purchases are
                  final. Coins, once credited, cannot be refunded, even if
                  unused. We are not responsible for user errors, such as
                  incorrect user IDs or links submitted for service.
                </p>
                <p>
                  <strong>6. Prohibited Activities:</strong> Users must not
                  engage in fraudulent activities or misuse the platform.
                  Accounts found violating our terms or involved in abuse, spam,
                  or fake transactions may be permanently suspended without
                  refund.
                </p>
                <p>
                  <strong>7. Limitation of Liability:</strong> We do not
                  guarantee the availability or uptime of third-party platforms
                  (e.g., TikTok, Instagram, Garena). Delays or service issues
                  caused by third-party systems are not within our control, and
                  no compensation will be offered.
                </p>
              </div>
            </div>
          )}

          {activeTab === "About Us" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">About Us</h2>
              <p className="text-gray-300">
                Welcome to Money Hub – your trusted destination for safe
                and affordable digital service top-ups. We provide a seamless
                way for users to top up Free Fire diamonds, and purchase likes,
                views, and followers for platforms like TikTok and Instagram,
                all through our unique coin-based system. Simply deposit funds
                to our verified bank account, and once verified, you’ll receive
                coins in your account to spend on any of our services. Our
                mission is to make digital boosting accessible, secure, and
                transparent for everyone in Nepal and beyond. We manually verify
                each payment to ensure fairness and provide reliable support
                throughout your journey with us. Whether you're a gamer looking
                to power up, or a content creator wanting to grow faster — we're
                here to help you reach your goals safely and affordably.
              </p>
            </div>
          )}

          {activeTab === "Support" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Support</h2>
              <p className="text-gray-300">Need help? Reach us anytime.</p>
              <ul className="mt-3 space-y-2 text-gray-300">
                <li>📧 Email: bhattarain538@gmail.com</li>
                <li>📞 Phone: +977 9869991666</li>
                <li>🌐 Website Chat: Available 24/7</li>
              </ul>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
