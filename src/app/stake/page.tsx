import StakeEarningsPics from '@/components/StakeEarningPics'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
       <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold" ><Link href="/">MoneyHub</Link></h1>
          <ul className="flex space-x-4 text-lg">
            <li><Link href="/stake" className="text-yellow-400 font-semibold">Stake</Link></li>
            <li><Link href="/1xbet" className="hover:text-yellow-400">1xbet</Link></li>
            <li><Link href="/ff-topup" className="hover:text-yellow-400">FF Topup</Link></li>
          </ul>
        </div>
      </nav>

      {/* Stake Page Content */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Earn with Stake</h2>
        <p className="text-lg text-gray-600 mb-10">
          Start earning real money by referring users to Stake or investing in games. Monitor your earnings and get paid instantly with MoneyHub.
        </p>
        <div className='w-full '>

        <img
          src="https://logos-world.net/wp-content/uploads/2021/05/Stake-Logo.png"
          alt="Stake earnings"
          className=" w-fit h-42 mx-auto mb-8"
          />
          </div>
        <a
          href="#"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition"
        >
          Start Earning with Stake
        </a>
      </section>
    <StakeEarningsPics/>
    </main>
    </div>
  )
}

export default page