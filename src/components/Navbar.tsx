'use client'
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";


const Navbar = () => {
  return (
    <motion.nav
      className="bg-black text-white border-b-1 w-full sticky top-0 z-100"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-yellow-400">
          <Link href="/">MoneyHub</Link>
        </h1>
        <ul className="flex space-x-4 text-lg">
          <li>
            <Link href="/stake" className="hover:text-yellow-400 font-semibold">
              Stake
            </Link>
          </li>
          <li>
            <Link href="/1xbet" className="hover:text-yellow-400">
              1xbet
            </Link>
          </li>
          <li>
            <Link href="/ff-topup" className="hover:text-yellow-400">
              FF Topup
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
