"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const handleGoogleLogin = () => {
   
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="flex flex-col gap-6 -mt-28 min-h-screen justify-center items-center bg-neutral-950 px-4  "
    >
      <div className="div ">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className=" text-center text-3xl font-bold text-yellow-400"
        >
          Welcome to Moneyhub
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-2 text-center text-xs text-neutral-400"
        >
          Sign in to start earning with moneyhub
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full max-w-sm max-h-fit rounded-xl bg-[#1a1a1a] border-gray-600 border-1  p-8 shadow-lg"
      >
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Sign in
        </h1>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleGoogleLogin}
          className="flex w-full items-center justify-center gap-0 rounded-lg bg-black px-9 cursor-pointer py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          <Image
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
            alt="Google"
            width={20}
            height={20}
            className="h-5 w-5"
          />
          <span className="flex-1 text-center">Continue with Google</span>
          <ArrowRight className="h-4 w-4 text-white" />
        </motion.button>

        <p className="mt-6 text-center text-xs text-neutral-400">
          By continuing, you agree to our{" "}
          <span className="underline cursor-pointer hover:text-white">
            Terms
          </span>{" "}
          and{" "}
          <span className="underline cursor-pointer hover:text-white">
            Privacy Policy
          </span>
          .
        </p>
      </motion.div>
    </motion.div>
  );
}
