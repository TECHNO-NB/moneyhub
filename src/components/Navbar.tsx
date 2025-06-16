'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/stake", label: "Stake" },
  { href: "/1xbet", label: "1xbet" },
  { href: "/ff-topup", label: "FF Topup" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.nav
      className="bg-black text-white border-b w-full sticky top-0 z-[100]"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-xl md:text-2xl font-bold text-yellow-400">
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
                      pathname === link.href ? "text-yellow-400" : "text-white"
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
    </motion.nav>
  );
};

export default Navbar;
