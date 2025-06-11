import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
     <main className="min-h-screen bg-white">
      {/* Navbar */}
       <nav className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold" ><Link href="/">MoneyHub</Link></h1>
          <ul className="flex space-x-4 text-lg">
            <li><Link href="/stake" className="hover:text-yellow-400 font-semibold">Stake</Link></li>
            <li><Link href="/1xbet" className="text-yellow-400">1xbet</Link></li>
            <li><Link href="/ff-topup" className="hover:text-yellow-400">FF Topup</Link></li>
          </ul>
        </div>
      </nav>

      {/* 1xbet Content */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Earn with 1xbet</h2>
        <p className="text-lg text-gray-600 mb-10">
          Promote 1xbet, refer users, and earn commissions on their bets. Reliable payouts, trusted platform, and unlimited earning potential.
        </p>
        <img
          src="https://www.pngkey.com/png/full/872-8720526_1xbet-logo-for-light-1xbet-svg.png"
          alt="1xbet earnings"
          className="w-82 h-20 mx-auto mb-8"
        />
        <a
          href="#"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition"
        >
          Start Earning with 1xbet
        </a>
      </section>
    </main>
  )
}

export default page