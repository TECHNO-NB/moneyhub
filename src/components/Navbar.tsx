"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import coin from "../../public/coin.webp";
import Image from "next/image";
import { Plus } from "lucide-react";

const navLinks = [
  { href: "/stake", label: "Stake" },
  { href: "/1xbet", label: "1xbet" },
  { href: "/ff-topup", label: "FF Topup" },
  { href: "/tiktok", label: "TikTok" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [sikka, setSikka] = useState<number>(100);

  return (
    <>
      <motion.nav
        className=" text-white  w-full sticky top-0 z-[100]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className=" w-full mx-auto bg-black  border-b px-4 md:px-[10rem] py-4 flex justify-between items-center ">
          {/* Brand */}
          <h1
            className="text-xl md:text-2xl font-bold text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            <Link href="/">MoneyHub</Link>
          </h1>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-6 text-lg">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-semibold hover:text-yellow-400 ${
                    pathname === link.href ? "text-yellow-400" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <motion.div className="hidden md:block sticky left-[100%] bg-black max-w-fit items-center border-2 justify-center text-center  p-2 rounded-[8px]">
            <div className="div flex gap-1">
              <Image src={coin} alt="coin" height={5} width={25} />

              <p className=" text-yellow-300 ml-1   font-bold ">0</p>
              <Plus className=" font-bold" width={30} />
            </div>
          </motion.div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>

        {/* Mobile Full-Screen Sidebar */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 right-0 w-64 h-screen bg-black z-[200] px-6 py-4 shadow-lg"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-yellow-400">Menu</h2>
                <button onClick={() => setIsOpen(false)}>
                  <X size={28} />
                </button>
              </div>
              <ul className="flex flex-col space-y-6 text-lg">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block font-semibold ${
                        pathname === link.href
                          ? "text-yellow-400"
                          : "text-white"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        {/* mobile show conin */}
        {/* mobile show coin */}
        <motion.div
          className="md:hidden fixed top-17 right-3 z-[90] bg-black max-w-fit flex items-center border-2 border-t-0 rounded-[8px] shadow-lg p-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex gap-1 items-center">
            <Image src={coin} alt="coin" height={20} width={25} />
            <p className="text-yellow-300 ml-1 font-bold">{sikka}</p>
            <Plus className="text-white" width={20} />
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
