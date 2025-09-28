"use client";
/* eslint-disable */
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import topuprate from "../../public/topup-rate.jpg";

import "swiper/css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Slider() {
  const [data,setData]=useState([])

    useEffect(() => {
    const fetchAllImages = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users/get-all-banner`
        );

        setData(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllImages();
  }, []);
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

        {data && data.map((val:any,index)=>(

          <SwiperSlide key={index}>
          <div className="w-full h-[300px]">
            <Image
              src={val.image}
              alt="Free Fire"
              fill
              className="object-fit rounded-2xl border-2 border-yellow-400"
              />
          </div>
        </SwiperSlide>
            ))}

        {/* <SwiperSlide>
          <div className="w-full h-[300px] border-2 border-yellow-400">
            <Image
              src={topuprate}
              alt="Gaming"
              fill
              className="object-cover rounded-2xl border-2 border-yellow-400"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-[300px] border-2 border-yellow-400">
            <Image
              src="https://tse4.mm.bing.net/th/id/OIP.JfNdlwKPrz_pQYu9ud1pNQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Gamer Setup"
              fill
              className="object-cover rounded-2xl border-2 border-yellow-400"
            />
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
}
