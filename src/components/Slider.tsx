"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import topuprate from "../../public/topup-rate.jpg";

import "swiper/css";

export default function Slider() {
  return (
    <div className="w-full max-w-5xl mx-auto mt-6">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-2xl shadow-lg"
      >
        <SwiperSlide>
          <div className="w-full h-[300px]">
            <Image
              src="https://wallpapers.com/images/hd/4k-free-fire-characters-working-together-8bh4bpve4raxr2ll.jpg"
              alt="Free Fire"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[300px]">
            <Image
              src={topuprate}
              alt="Gaming"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[300px]">
            <Image
              src="https://tse4.mm.bing.net/th/id/OIP.JfNdlwKPrz_pQYu9ud1pNQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Gamer Setup"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
