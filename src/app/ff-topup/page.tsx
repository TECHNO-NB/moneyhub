import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
        <nav className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold" ><Link href="/">MoneyHub</Link></h1>
          <ul className="flex space-x-6 text-lg">
            <li><Link href="/stake" className="hover:text-yellow-400 font-semibold">Stake</Link></li>
            <li><Link href="/1xbet" className="hover:text-yellow-400">1xbet</Link></li>
            <li><Link href="/ff-topup" className="text-yellow-400">FF Topup</Link></li>
          </ul>
        </div>
      </nav>

      {/* FF TopUp Content */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">FF TopUp Earnings</h2>
        <p className="text-lg text-gray-600 mb-10">
          Top up Free Fire diamonds for users and earn profits on every transaction. Fast service, trusted by gamers, and great margins.
        </p>
        <img
          src="https://static-2.gumroad.com/res/gumroad/files/213347549644/2d72439b5dac4eb8aaaa77480a4f3675/original/free%20fire%20logo.png"
          alt="FF Topup"
          className="w-52 mx-auto mb-8"
        />
        <a
          href="#"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition"
        >
          Start Top-Up Business
        </a>
      </section>
    </main>
  )
}

export default page