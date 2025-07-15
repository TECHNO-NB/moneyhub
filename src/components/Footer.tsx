import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
<footer className="bg-black text-white mt-0 md:mt-20 mb-14">
  <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div>
      <h2 className="text-2xl font-bold mb-4 text-yellow-400">MoneyHub</h2>
      <p className="text-sm text-gray-400">
        Earn money online with trusted platforms like Stake, 1xBet, and FF TopUp. Start your journey with MoneyHub today.
      </p>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-3">Navigation</h3>
      <ul className="space-y-2 text-gray-300 text-sm">
        <li><Link href="/stake" className="hover:text-yellow-400">Stake</Link></li>
        <li><Link href="/1xbet" className="hover:text-yellow-400">1xBet</Link></li>
        <li><Link href="/ff-topup" className="hover:text-yellow-400">FF TopUp</Link></li>
      </ul>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-3">Contact</h3>
      <p className="text-sm text-gray-400">Email: support@moneyhub.com</p>
      <p className="text-sm text-gray-400">WhatsApp: +91 98765 43210</p>
      <div className="flex mt-4 space-x-4">
        <a href="#" className="hover:text-yellow-400">Instagram</a>
        <a href="#" className="hover:text-yellow-400">Telegram</a>
      </div>
    </div>
  </div>

  <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-700">
    © {new Date().getFullYear()} MoneyHub. All rights reserved.
  </div>
</footer>

  )
}

export default Footer

