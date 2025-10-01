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
import Link from "next/link";
import { LuCoins } from "react-icons/lu";
import TransferCoin from "@/components/TransferCoin";

const tabs = [
  { label: "Personal Details", icon: User },
  { label: "History", icon: History },
  { label: "Transfer Coin", icon: LuCoins },
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
  const pathname = usePathname();

  useEffect(() => {
    if (protectedRoutes.includes(pathname)) {
      if (!userData || !userData.id) {
        router.push("/auth");
      }
    }
  }, [pathname, userData]);

  const handleCopy = async (copyText: string) => {
    try {
      if (copyText) {
        await navigator.clipboard.writeText(copyText);
        toast.success("Copied Id");
      }
    } catch (error) {}
  };

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
                className=" w-20 h-20 rounded-full border-2 border-white shadow-md object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold">{userData.fullName}</h1>
                <p className="text-gray-400 text-sm">{userData.email}</p>
                <p>
                  ID:{" "}
                  <span className="text-gray-400 text-sm">{userData.id}</span>
                  <button
                    onClick={() => handleCopy(userData.id)}
                    className="ml-2 border-2  px-4 text-sm rounded-xl cursor-pointer hover:bg-white hover:text-black"
                  >
                    Copy
                  </button>
                </p>
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
             
            </div>
          )}

          {activeTab === "Transfer Coin" && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Transfer Coin</h2>
              <TransferCoin userId={userData.id}/>
             
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
                You’ve redeemed 0 coins this month.
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
                Welcome to Money Hub – your trusted destination for safe and
                affordable digital service top-ups. We provide a seamless way
                for users to top up Free Fire diamonds, and purchase likes,
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
              <h2 className="text-xl font-semibold mb-4 text-white">Support</h2>
              <p className="text-gray-300">
                Need help? Reach us anytime. (click to message and call)
              </p>
              <ul className="mt-3 space-y-4 text-gray-300">
                {/* Gmail */}
                <li className="flex items-center space-x-3">
                  <div className="bg-red-600 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
                    </svg>
                  </div>
                  <span>
                    Email:{" "}
                    <a
                      href="mailto:bhattarain538@gmail.com"
                      className="text-blue-400 hover:underline"
                    >
                      Message me on Email
                    </a>
                  </span>
                </li>

                {/* Phone */}
                <li className="flex items-center space-x-3">
                  <div className="bg-gray-700 p-2 rounded-full">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h2.586a1 1 0 01.707.293l1.414 1.414A1 1 0 0011.414 5H13a2 2 0 012 2v2a1 1 0 01-.293.707L13.293 11a1 1 0 000 1.414l3 3a1 1 0 01.293.707V19a2 2 0 01-2 2h-2c-.265 0-.52-.105-.707-.293l-1.414-1.414A1 1 0 0011 19H9a2 2 0 01-2-2v-2a1 1 0 01.293-.707l3-3A1 1 0 0010 11H8a2 2 0 01-2-2V7a1 1 0 01.293-.707L8.586 4.586A1 1 0 009.293 4H11a2 2 0 012 2v2a1 1 0 01-.293.707L11.414 9H10a1 1 0 00-.707.293l-3 3A1 1 0 006 13v2a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2Z"
                      />
                    </svg>
                  </div>
                  <span>
                    Phone:{" "}
                    <a
                      href="tel:+9779869991666"
                      className="text-blue-400 hover:underline"
                    >
                      Call me
                    </a>
                  </span>
                </li>

                {/* WhatsApp */}
                <li className="flex items-center space-x-3">
                  <div className="bg-green-500 p-2 rounded-full">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.52 3.48A11.78 11.78 0 0012 0a11.8 11.8 0 00-10 18.12L0 24l6.12-2A11.8 11.8 0 0012 24a11.79 11.79 0 008.48-20.52Zm-8.48 18A9.89 9.89 0 013.64 18l-.24-.14L2 22l3.9-1.36.13-.07A9.89 9.89 0 0112 21.48a9.86 9.86 0 000-19.72A9.86 9.86 0 003.64 18Zm5.27-7.14c-.09-.15-.34-.25-.72-.44s-2.1-1.03-2.42-1.15-.57-.18-.81.18-.93 1.15-1.14 1.39-.42.27-.78.09a6.92 6.92 0 01-2.1-1.85A7.93 7.93 0 017.1 9.6c.07-.2.02-.42-.06-.6s-.81-1.95-.92-2.13-.22-.48-.44-.48-.57 0-.87.42-.8.78-.8 1.89.82 2.2.93 2.35 1.62 2.63 3.93 3.68a13.69 13.69 0 001.43.53c.6.19 1.15.18 1.58.11s.48-.15.69-.39.66-.78.84-1.05.3-.48.18-.72Z" />
                    </svg>
                  </div>
                  <span>
                    WhatsApp:{" "}
                    <a
                      href="https://wa.me/9779869436906"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-300 hover:underline"
                    >
                      Chat on WhatsApp
                    </a>
                  </span>
                </li>

                {/* Website Chat */}
                <li className="flex items-center space-x-3">
                  <div className="bg-blue-500 p-2 rounded-full">🌐</div>
                  <Link href="/chatwithadmin">
                    <span>
                      Website Chat: Available 24/7{" "}
                      <span className=" bg-red-600 rounded-full p-2 font-bold">
                        {" "}
                        !Coming soon
                      </span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
