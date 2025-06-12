'use client';
import Image from 'next/image';
import dimond from "@/dimond.jpg"
import earm from "@/earm.jpg"
import earn from "@/earn.png"
import stake from "@/stake.jpg"

const screenshots = [
  {
    src: dimond,
    alt: 'Dashboard View',
  },
  {
    src: earm,
    alt: 'Earnings Report',
  },
  {
    src: earn,
    alt: 'Daily Tracker',
  },
  {
    src: stake,
    alt: 'Goal Overview',
  },
];

export default function StakeEarningsPics() {
  return (
    <main className="min-h-screen bg-gray-100 py-16 px-4">
      <section className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Lucky Users
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {screenshots.map((screenshot, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden group shadow-lg transition transform hover:scale-[1.03] hover:shadow-2xl"
            >
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-rgb-glow transition-all duration-500" />

              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
