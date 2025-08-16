/* eslint-disable */
import React, { useRef, useState } from "react";
import { Upload, FileImage, icons, Loader } from "lucide-react";
import Image from "next/image";
import { easeIn } from "framer-motion";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";

const RedeemCoin = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [preView, setPreView] = useState<string | null>("");
  const [screenshot, setScreenshot] = useState<any | null>(null);
  const [amount, setAmount] = useState<any>(0);
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state: any) => state.user);
  const handleInputQr = () => {
    fileRef.current?.click();
  };

  const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setScreenshot(file);
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setPreView(fileReader.result as string);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleRedeem = async () => {
    setIsLoading(true);
    if (!amount || amount  < 50) {
      setIsLoading(false);
      toast.error("Please enter the amount of coins to redeem");
      return;
    }
    if (!screenshot) {
      setIsLoading(false);
      toast.error("Please upload your online banking qr");
      return;
    }

    if (user.balance < amount) {
      setIsLoading(false);
      toast.error("You don't have enough coins to redeem");
    }
    const form = new FormData();
    form.append("screenshot", screenshot);
    form.append("amount", amount);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/balance/balance-exchange`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res) {
        setIsLoading(false);
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error("Failed to redeem coins");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex  flex-col gap-6 w-full md:w-[40%] items-center justify-center">
      <div className=" border-2   border-dashed border-zinc-600 rounded-lg w-full overflow-hidden">
        <div className="div flex gap-2 items-center justify-center h-60 ">
          {preView && (
            <Image
              src={preView}
              width={180}
              height={150}
              alt="qr preview"
              className=" object-fill"
            />
          )}
          {!preView && <FileImage />}
          {!preView && <p>Your QR will appear here</p>}
        </div>
      </div>
      <button
        onClick={handleInputQr}
        className=" flex gap-1 bg-red-600 hover:bg-red-700 transition-all w-full items-center cursor-pointer justify-center border-lg rounded-lg py-2 font-semibold"
      >
        {" "}
        <Upload /> Uplode QR
      </button>
      <input
        type="file"
        accept="image/*"
        ref={fileRef}
        onChange={(e) => handleImageInput(e)}
        className="hidden"
      />

      <div className=" relative w-full ">
        <p className=" absolute -top-3 bg-zinc-800/50 left-4 px-1 z-10 rounded-2xl">
          Coin
        </p>
        <input
          onChange={(e: any) => setAmount(e.target.value)}
          type="number"
          placeholder="50"
          className="rounded-lg border-2   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-zinc-600 py-2 font-bold w-full px-6 "
        />
      </div>
      <button
        onClick={handleRedeem}
        className=" flex gap-1 cursor-pointer bg-blue-600 hover:bg-blue-700 w-full items-center justify-center border-lg rounded-lg py-2 font-semibold"
      >
        {isLoading ? (
          <div className="div flex gap-1">
            <Loader className="w-6 h-6 text-white font-semibold animate-spin" />
            <p>Loading...</p>
          </div>
        ) : (
          "Redeem Coin"
        )}
      </button>
    </div>
  );
};

export default RedeemCoin;
