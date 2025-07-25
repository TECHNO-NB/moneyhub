// app/not-found.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import logo from "../../public/moneyhublogo2.png";

export default function NotFound() {
  return (
    <div className="flex min-h-fit mt-10 flex-col items-center justify-center bg-black px-4 text-center">
      {/* Logo */}
      <Image
        src={logo} // 🔁 Replace with your logo file name
        alt="Logo"
        width={100}
        height={100}
        className="mb-4 border-2 border-white rounded-full"
      />

      <h1 className="text-5xl font-bold text-white mb-2">404</h1>
      <p className="text-xl text-white mb-6">Oops! Page not found.</p>

      <p className="text-white mb-8 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700 transition"
      >
        <ArrowLeft className="w-4 h-4 cursor-pointer " />
        Go back home
      </Link>
    </div>
  );
}
