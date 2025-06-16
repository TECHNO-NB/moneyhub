'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import Image from 'next/image';

type Review = {
  name: string;
  role: string;
  image: string;
  message: string;
};

const reviews: Review[] = [
  {
    name: 'Manjil shrestha',
    role: 'App User',
    image: 'https://i.pinimg.com/originals/82/30/b3/8230b3e601bd66e593423e8004058d84.jpg',
    message:
      'This app made it so easy to track my income and goals. Highly recommended for anyone trying to grow financially!',
  },
  {
    name: 'Priya Sen',
    role: 'Freelancer',
    image: 'https://tse1.mm.bing.net/th/id/OIP.hGVGX2jNoIiTRqjdoqC5aQHaHa?rs=1&pid=ImgDetMain',
    message:
      'Super intuitive and visually pleasing. Helped me save over ₹10,000 in 3 months.',
  },
  {
    name: 'Rohan Adhikari',
    role: 'Startup Owner',
    image: 'https://th.bing.com/th/id/OIP.U6rm5wta2mibBpipMjcglQHaLG?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    message:
      'Finally an earning app that feels professional and easy to use. Love the analytics features!',
  },
];

export default function Review() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % reviews.length);
  const prev = () => setIndex((index - 1 + reviews.length) % reviews.length);

  return (
    <main className=" max-h-fit bg-black flex items-center justify-center px-8 py-6 ">
      <div className="w-full max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-10 text-yellow-400">
           What Our Users Say
        </h2>
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-4 border-yellow-400">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
               viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <Image
                src={reviews[index].image}
                alt={reviews[index].name}
                width={100}
                height={100}
                className="w-24 h-24 rounded-full object-cover border-4 border-indigo-500 shadow-md"
              />
              <p className="text-gray-600 text-lg italic">“{reviews[index].message}”</p>
              <div>
                <h4 className="text-xl font-semibold text-indigo-600">{reviews[index].name}</h4>
                <p className="text-sm text-gray-500">{reviews[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
            <button
              onClick={prev}
              className="text-yellow-400 hover:text-indigo-700 bg-white rounded-full transition-transform transform hover:scale-110"
              aria-label="Previous review"
            >
              <ArrowLeftCircle size={40} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-6  transform -translate-y-1/2">
            <button
              onClick={next}
              className="text-yellow-400 bg-white rounded-full hover:text-indigo-700 transition-transform transform hover:scale-110"
              aria-label="Next review"
            >
              <ArrowRightCircle size={40} />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
