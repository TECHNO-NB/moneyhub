"use client";
/* eslint-disable */
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode, JwtPayload } from "jwt-decode";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addUser, userState } from "@/redux/userSlice";
import { useEffect, useState } from "react";
import LoaderSpinner from "@/components/Loader";

export default function AuthPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.user);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tab, setTab] = useState<"login" | "register">("login");

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register state
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  // Redirect if user already logged in
  useEffect(() => {
    if (userData.id) {
      router.push("/profile");
    }
  }, [userData, router]);

  const handleGoogleLogin = async (token: JwtPayload) => {
    try {
      setIsLoading(true);
      axios.defaults.withCredentials = true;
      const login = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/sign-in`,
        { token }
      );
      if (login.data.status === 200 || login.data.status === 201) {
        setIsLoading(false);
        router.push("/profile");
        toast.success("User signed in successfully");

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
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailLogin = async () => {
    try {
      setIsLoading(true);
      axios.defaults.withCredentials = true;
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/login`,
        {
          email: loginEmail,
          password: loginPassword,
        }
      );
      if (response.data.status === 200) {
        toast.success("Logged in successfully");
        router.push("/profile");
        dispatch(addUser(response.data.data));
      }
    } catch (error) {
      console.log(error);
      toast.error("Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    try {
      setIsLoading(true);
      axios.defaults.withCredentials = true;

      const formData = new FormData();
      if (avatarFile) formData.append("avatar", avatarFile);
      formData.append("fullName", fullName);
      formData.append("email", registerEmail);
      formData.append("password", registerPassword);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/register`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data.status === 201) {
        toast.success("Registered successfully! You can login now.");
        setTab("login");
        // Reset form
        setAvatarFile(null);
        setAvatarPreview(null);
        setFullName("");
        setRegisterEmail("");
        setRegisterPassword("");
      }
    } catch (error) {
      console.log(error);
      toast.error("Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="flex flex-col gap-6 -mt-28 min-h-screen justify-center items-center bg-neutral-950 px-4"
    >
      {isLoading && <LoaderSpinner />}

      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-3xl font-bold text-yellow-400"
        >
          Welcome to Moneyhub
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-2 text-xs text-neutral-400"
        >
          {tab === "login"
            ? "Sign in to start earning with Moneyhub"
            : "Register to join Moneyhub"}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full max-w-sm rounded-xl bg-[#1a1a1a] border border-white p-8 shadow-lg"
      >
        {/* Tabs */}
        <div className="flex mb-6 border-b border-gray-700">
          <button
            className={`flex-1 py-2 cursor-pointer text-white font-semibold ${
              tab === "login" ? "border-b-2 border-yellow-400" : "text-gray-400"
            }`}
            onClick={() => setTab("login")}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 cursor-pointer text-white font-semibold ${
              tab === "register"
                ? "border-b-2 border-yellow-400"
                : "text-gray-400"
            }`}
            onClick={() => setTab("register")}
          >
            Register
          </button>
        </div>

        {tab === "login" ? (
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="rounded-md border border-white bg-neutral-900 px-4 py-2 text-white focus:outline-yellow-400 focus:border-yellow-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="rounded-md border border-white bg-neutral-900 px-4 py-2 text-white focus:outline-yellow-400 focus:border-yellow-400"
            />
            <button
              onClick={handleEmailLogin}
              className="bg-yellow-400 cursor-pointer text-black py-2 rounded-md font-semibold hover:brightness-110 transition"
            >
              Login
            </button>
            <p className="text-center">Or</p>

            <div className="flex justify-center mt-2">
              <GoogleOAuthProvider
                clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}
              >
                <GoogleLogin
                  onSuccess={(credentialResponse: any) => {
                    const jwtDetails = jwtDecode(credentialResponse.credential);
                    handleGoogleLogin(jwtDetails);
                  }}
                  onError={() => console.log("Google Login Failed")}
                />
              </GoogleOAuthProvider>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 items-center">
            <div className="relative w-24 h-24 mb-2">
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="avatar"
                  className="w-24 h-24 rounded-full object-cover border-2 border-white"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-700 flex items-center justify-center border-2 border-white">
                  <span className="text-gray-400">Avatar</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer rounded-full z-10"
              />
            </div>

            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-md border border-white bg-neutral-900 px-4 py-2 text-white focus:outline-yellow-400 focus:border-yellow-400"
            />
            <input
              type="email"
              placeholder="Email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              className="w-full rounded-md border border-white bg-neutral-900 px-4 py-2 text-white focus:outline-yellow-400 focus:border-yellow-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              className="w-full rounded-md border border-white bg-neutral-900 px-4 py-2 text-white focus:outline-yellow-400 focus:border-yellow-400"
            />
            <button
              onClick={handleRegister}
              className="bg-yellow-400 cursor-pointer text-black py-2 rounded-md font-semibold hover:brightness-110 transition w-full"
            >
              Register
            </button>
          </div>
        )}

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
