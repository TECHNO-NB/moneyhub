"use client";

import { motion } from "framer-motion";
import Review from "@/components/Reviw";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Navbar with animation */}
      <motion.nav
        className="bg-black text-white border-b-1"
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

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-10 md:py-20 gap-12">
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl text-white font-bold leading-tight mb-6">
            Get started to earn money with{" "}
            <span className="text-yellow-500">MoneyHub</span>
          </h2>
          <p className="text-white text-lg mb-6">
            Join thousands of users making daily income through Stake, 1xbet,
            and FF Topups.
          </p>
          <a
            href="#earn"
            className="inline-block bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
          >
            Start Earning
          </a>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src="https://images.unsplash.com/photo-1600586316434-29a13a4f9aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8ZWFybmluZyUyMG1vbmV5fHwwfHx8fDE2MzA0NzQxODk&ixlib=rb-1.2.1&q=80&w=1080"
            alt="Earning Illustration"
            className="w-52 md:w-full max-w-sm mx-auto rounded-full"
          />
        </motion.div>
      </section>

      {/* Earnings Logos Section */}
      <section id="earn" className="bg-gray-100 py-16">
        <h3 className="text-center text-3xl font-bold mb-10 text-yellow-500 border-yellow-400 border-2 inline-block px-4 py-2">
          Earn Through Trusted Platforms
        </h3>
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4 place-content-center items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href={"/stake"}>
            <img
              src="https://logos-world.net/wp-content/uploads/2021/05/Stake-Logo.png"
              alt="UPI"
              className="w-3xl h-20 mx-auto"
            />
          </Link>
          <Link href={"/1xbet"}>
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.Ae7CUtOJYUOCgWN3nJSYfAHaBp?rs=1&pid=ImgDetMain"
              alt="Money Bag"
              className="w-3xl h-20 mx-auto"
            />
          </Link>
          <Link href="/ff-topup">
            <img
              src="https://static.vecteezy.com/system/resources/previews/022/100/664/original/free-fire-logo-free-png.png"
              alt="Dollar"
              className="w-3xl h-52 mx-auto"
            />
          </Link>
        </motion.div>
      </section>

      {/* Reviews Section */}
      <section>
        <Review />
      </section>
    </main>
  );
}
