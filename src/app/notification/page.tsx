"use client";
/* eslint-disable */
import React, { useEffect, useState } from "react";
import coin from "../../../public/moneyhublogo2.png";
import Image from "next/image";
import axios from "axios";
import { usePathname } from "next/navigation";
import { RefreshCw } from "lucide-react";


type Notification = {
  message: string;
  status: "pending" | "approved" | "rejected" | "delivered";
  createdAt: string;
};

const Page = () => {
  const [data, setData] = useState<Notification[]>([]);
  const path = usePathname();
  const [loading, setLoading] = useState(false);

  const fetchNotification = async () => {
    setLoading(true);
    try {
      // ✅ Call new merged endpoint
      axios.defaults.withCredentials=true;
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/balance/balance-status`
      );

      // ✅ Extract loadBalance + ffOrder into one flat array
   
      const loadNotifications: Notification[] =(res.data.data.loadBalance || [] ).map(
        (item: any) => ({
          message: item.message || "Load Balance update",
          status: item.status,
          createdAt: item.updatedAt,
        })
      );
 
      const ffNotifications: Notification[] =(res.data.data.ffOrders ||  []).map(
        (item: any) => ({
          message: item.message || "Free Fire order update",
          status: item.status,
          createdAt: item.updatedAt,
        })
      );
      const tournamentEnterNotications: Notification[] =(res.data.data.tournament ||  []).map(
        (item: any) => ({
          message: item.message || "Free Fire tourament update",
          status: item.status,
          createdAt: item.updatedAt,
        })
      );

      const merged = [...loadNotifications, ...ffNotifications,...tournamentEnterNotications].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      setData(merged);
      console.log("merged",loadNotifications)
    } catch (error) {
      console.error("Failed to fetch notifications", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (path === "/notification") {
      fetchNotification();
      console.log(data)
    }
  }, [path]);

  const formatTime = (iso: string) =>
    new Date(iso).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "approved":
      case "delivered":
        return "text-green-500 bg-green-800/30 border-green-600";
      case "pending":
        return "text-yellow-400 bg-yellow-800/20 border-yellow-500";
      case "rejected":
        return "text-red-500 bg-red-800/20 border-red-600";
      default:
        return "text-white bg-gray-700 border-gray-500";
    }
  };

  return (
    <div className="max-w-screen min-h-svh bg-gradient-to-b from-gray-900 via-gray-800 to-black px-6 py-6 md:p-6 md:mt-0">
      <div className="  border border-gray-700 px-4 py-3 rounded-2xl shadow-lg flex items-center justify-between">
        <h1 className="text-yellow-400 text-2xl font-bold tracking-wide">
          Notifications
        </h1>
        <button
          onClick={fetchNotification}
          disabled={loading}
          aria-label="Refresh notifications"
          className="text-yellow-400 cursor-pointer hover:text-yellow-300 disabled:opacity-50 transition-colors"
        >
          <RefreshCw className={`w-6 h-6 ${loading ? "animate-spin" : ""}`} />
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {data && data?.map((item, index) => (
          <div
            key={index}
            className="flex items-start sm:items-center bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 shadow-md hover:shadow-lg transition-all gap-4"
          >
            <Image
              src={coin}
              height={40}
              width={40}
              alt="coin logo"
              className="rounded-full mt-1 sm:mt-0"
            />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full">
              <div>
                <p className="text-white text-sm sm:text-base font-medium">
                  {item.message}
                </p>
                <span className="text-gray-400 text-xs mt-1 block">
                  {formatTime(item.createdAt)}
                </span>
              </div>
              <span
                className={`mt-2 sm:mt-0 sm:ml-auto w-20 border text-xs px-3 py-1 rounded-sm font-medium ${getStatusStyle(
                  item.status
                )}`}
              >
                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
