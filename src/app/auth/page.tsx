"use client";
/* eslint-disable */
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode, JwtPayload } from "jwt-decode";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addUser, userState } from "@/redux/userSlice";
import { useState } from "react";
import LoaderSpinner from "@/components/Loader";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleGoogleLogin = async (token: JwtPayload) => {
    try {
      setIsLoading(true);
      axios.defaults.withCredentials = true;
      const login = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/sign-in`,
        {
          token,
        }
      );
      if (login.data.status === 200 || login.data.status === 201) {
        setIsLoading(false);
        router.push("/profile");
        toast.success("User signin successfully");

        const userData: userState = {
          id: login.data.data.id,
          avatar: login.data.data.avatar,
          fullName: login.data.data.fullName,
          email: login.data.data.email,
          balance: login.data.data.balance,
          role: login.data.data.role,
        };
        dispatch(addUser(userData));
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="flex flex-col gap-6 -mt-28 min-h-screen justify-center items-center bg-neutral-950 px-4  "
    >
      {isLoading ? <LoaderSpinner /> : null}
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
          className="flex w-full items-center justify-center gap-0 rounded-lg px-9 cursor-pointer py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          {
            <GoogleOAuthProvider
              clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}
            >
              <GoogleLogin
                width={230}
                onSuccess={(credentialResponse: any) => {
                  const jwtDetails = jwtDecode(credentialResponse.credential);

                  handleGoogleLogin(jwtDetails);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              ></GoogleLogin>
            </GoogleOAuthProvider>
          }
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
