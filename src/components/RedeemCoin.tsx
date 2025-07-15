import React, { useRef, useState } from "react";
import { Upload,FileImage  } from "lucide-react";
import Image from "next/image";

const RedeemCoin = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [preView, setPreView] = useState<string | null>("");
  const handleInputQr = () => {
    fileRef.current?.click();
  };

  const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setPreView(fileReader.result as string);
      };
      fileReader.readAsDataURL(file);
    }
  };
  return (
    <div className="flex  flex-col gap-6 w-full md:w-[40%] items-center justify-center">
      <div className=" border-2   border-dashed border-zinc-600 rounded-lg w-full overflow-hidden">
        <div className="div flex gap-2 items-center justify-center h-60 ">
          {preView && (
              <Image src={preView} width={180} height={150} alt="qr preview" className=" object-fill" />
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
      <input type="file" accept="image/*" ref={fileRef} onChange={(e)=>handleImageInput(e)} className="hidden" />

      <div className=" relative w-full ">
        <p className=" absolute -top-3 bg-zinc-800/50 left-4 px-1 z-10 rounded-2xl">
          Coin
        </p>
        <input
          type="number"
          placeholder="50"
          className="rounded-lg border-2   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-zinc-600 py-2 font-bold w-full px-6 "
        />
      </div>
      <button className=" flex gap-1 cursor-pointer bg-blue-600 hover:bg-blue-700 w-full items-center justify-center border-lg rounded-lg py-2 font-semibold">
        Redeem Coin
      </button>
    </div>
  );
};

export default RedeemCoin;
