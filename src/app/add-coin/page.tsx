"use client";
/* eslint-disable */

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Download, ImagePlus, Loader, TriangleAlert } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import esewaqr from "../../../public/esewa-qr.jpg"

const Page: React.FC = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  //   const [setFile] = useState<File | null>(null);
  const router= useRouter();
  const [preview, setPreview] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [amount, setAmount] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    fileRef.current?.click();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const loadBalance = async () => {
    try {
      setIsLoading(true);
      if (!amount) {
        setErrorMsg("Please enter coin");
        return;
      }
      if (!file || file === null) {
        setErrorMsg("Please upload payment screenshot");
        return;
      }

      const form = new FormData();
      form.append("amount", amount.toString());
      form.append("paymentImage", file);
      axios.defaults.withCredentials = true;
      const loadAmount = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/balance/load-balance`,

        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (loadAmount.data.success) {
        router.push("/profile")
        toast.success("Send to payment verfications");

      }
      setIsLoading(false);
    } catch (error) {
      console.log("error on loadBalance", error);
      setIsLoading(false);
      toast.error("LoadBalance failed");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (file && amount) {
      setErrorMsg("");
    }
  }, [file, amount]);

   const handleDownload = () => {
    const link = document.createElement("a");
    link.href = esewaqr.src; 
    link.download = "esewaqr.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen w-full bg-[#0e0e0e] text-white flex flex-col items-center justify-center p-4 md:p-10 gap-6">
      {/* QR Instructions */}
      {!!errorMsg && (
        <div className=" fixed top-24 md:top-16  mt-4 flex gap-4 border border-gray-700 bg-[#1a1a1a] px-4 py-1  rounded-2xl">
          <TriangleAlert color="red" size={20} />
          <h1 className="text-red-500">{errorMsg}</h1>
        </div>
      )}
      <div className="w-full md:w-[40%] border border-gray-700 bg-[#1a1a1a] rounded-2xl p-5 shadow-md">
        <h1 className="font-semibold text-yellow-400 text-lg mb-2">
          Load Coin Using This QR
        </h1>
        <div className="flex gap-3 items-center text-sm text-gray-300">
          <TriangleAlert color="red" size={20} />
          <p className="text-sm">
            Make sure the coin amount is not less than 50.
          </p>
        </div>
      </div>

      {/* QR Image */}
      <div className="w-full md:w-[40%] bg-[#1a1a1a] border border-gray-700 rounded-2xl p-4 flex justify-center shadow-md">
        <Image
          alt="QR Code"
          src={esewaqr}
          height={200}
          width={200}
          className="rounded-lg"
        />
      </div>

      {/* Download QR Button */}
      <button onClick={handleDownload} className="w-full md:w-[40%] bg-red-600 hover:bg-red-700 transition-all py-3 rounded-xl flex items-center justify-center gap-2 font-semibold text-white shadow">
        <Download size={20} /> Download QR
      </button>

      {/* Coin Input & Screenshot Upload */}
      <div className="w-full md:w-[40%] bg-[#1a1a1a] border border-gray-700 rounded-2xl p-6 flex flex-col gap-5 shadow-md">
        {/* Coin Input */}
        <div className="relative w-full">
          <label className="absolute -top-3.5 left-4 bg-[#1a1a1a] px-1 text-sm text-gray-300">
            Coin
          </label>
          <input
            type="number"
            onChange={(e: any) => setAmount(e.target.value)}
            placeholder="50"
            className="w-full px-5 py-3 rounded-xl border-2 border-gray-700 bg-transparent text-white placeholder-gray-500 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
              transition duration-300 ease-in-out"
          />
        </div>

        {/* Screenshot Upload */}
        <div
          onClick={handleClick}
          className="cursor-pointer w-full border-2 border-dashed border-gray-600 rounded-xl p-6 flex flex-col items-center justify-center text-gray-400 hover:border-blue-500 hover:text-blue-400 transition"
        >
          {preview && (
            <div className="mt-4 w-full">
              <Image
                src={preview}
                alt="Screenshot Preview"
                width={400}
                height={400}
                className="rounded-lg border border-gray-700 object-contain"
              />
            </div>
          )}
          {!preview && (
            <>
              <ImagePlus className="w-8 h-8 mb-2" />
              <p className="text-sm">Click to upload Payment Screenshot</p>
            </>
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileRef}
            className="hidden"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(e)
            }
          />
        </div>

        {/* Load Wallet Button */}

        <button
          onClick={loadBalance}
          className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 transition-all py-3 rounded-xl flex items-center justify-center gap-2 font-semibold text-white shadow"
        >
          {isLoading ? (
            <div className="div flex gap-1">
              <Loader className="w-6 h-6 text-white font-semibold animate-spin" />
              <p>Loading...</p>
            </div>
          ) : (
            "  Load Wallet"
          )}
        </button>
      </div>
    </div>
  );
};

export default Page;
