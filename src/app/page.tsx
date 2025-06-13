"use client";

import { easeInOut, motion } from "framer-motion";
import Review from "@/components/Reviw";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" relative min-h-screen bg-black">
      <motion.div
        initial={{ y: -100, z: -100, opacity: 0 }}
        animate={{ y: -0, z: 0, opacity: 1 }}
        transition={{ duration: 2, ease: easeInOut }}
        className="gradinet absolute w-16 h-68 -rotate-42 rounded-full bg-blue-600 top-36  blur-2xl shadow-2xl bg-gradient-to-b left-22"
      ></motion.div>
      {/* Navbar with animation */}

     

      {/* Hero Section */}
      <section className=" relative z-50 flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-4 md:py-20 gap-12">
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl z-50 text-white font-bold leading-tight mb-2">
            Get started to earn money with{" "}
            <span className="text-yellow-500 z-50">MoneyHub</span>
          </h2>
          <p className="text-white text-[] mb-6">
            Join thousands of users making daily income through Stake, 1xbet
            Also Availabe FF TopUp, Tiktok Coin,Facebook,TikTok Like Views And
            Followers, CapCut, Remini, PicArts, Youtube And Netflix Preimun.
          </p>

          <a
            href="#earn"
            className="inline-block bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition mb-4"
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
            className="w-52 md:w-full max-w-sm mx-auto rounded-full pt-4"
          />
        </motion.div>
      </section>

      {/* Earnings Logos Section */}
           <section
        id="earn"
        className="relative bg-white py-20 overflow-hidden"
      >
        {/* Decorative texture background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10 pointer-events-none" />

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold mb-12 text-yellow-400 border-yellow-400 border-2 inline-block px-6 py-3 rounded-xl shadow-md">
            Earn Through Trusted Platforms
          </h3>

          <motion.div
            className="grid grid-cols-2  md:grid-cols-1 lg:grid-cols-3 gap-10 items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/stake">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 flex justify-center items-center h-40">
                <img
                  src="https://logos-world.net/wp-content/uploads/2021/05/Stake-Logo.png"
                  alt="Stake"
                  className="h-16 object-contain"
                />
              </div>
            </Link>

            <Link href="/1xbet">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 flex justify-center items-center h-40">
                <img
                  src="https://tse2.mm.bing.net/th/id/OIP.Ae7CUtOJYUOCgWN3nJSYfAHaBp?rs=1&pid=ImgDetMain"
                  alt="1xBet"
                  className="h-16 object-contain"
                />
              </div>
            </Link>

            <Link href="/ff-topup">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 flex justify-center items-center h-52">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/022/100/664/original/free-fire-logo-free-png.png"
                  alt="Free Fire Top-up"
                  className="h-full object-contain"
                />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* Reviews Section */}
      <section>
        <Review />
      </section>
    </main>
  );
}
