"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

export default function Home() {
  return (
    <div className="w-screen h-screen flex relative items-center justify-center  p-2 gap-2">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col relative bg-black overflow-hidden h-[650px] w-[300px] outline outline-[8px] rounded-[50px] outline-black/50">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            pagination={{ clickable: true }}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper"
            style={{position:"absolute"}}
          >
            <SwiperSlide className="swiper-slide">
              <Image
                width={300}
                height={650}
                src="/assets/punisher.png"
                alt="wallpaper"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <Image
                width={300}
                height={650}
                src="/assets/matrix.png"
                alt="wallpaper"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <Image
                width={300}
                height={650}
                src="/assets/wave.png"
                alt="wallpaper"
              />
            </SwiperSlide>{" "}
            <SwiperSlide className="swiper-slide">
              <Image
                width={300}
                height={650}
                src="/assets/sciencesquibbles.png"
                alt="wallpaper"
              />
            </SwiperSlide>{" "}
            <SwiperSlide className="swiper-slide">
              <Image
                width={300}
                height={650}
                src="/assets/minimal1.png"
                alt="wallpaper"
              />
            </SwiperSlide>{" "}
            <SwiperSlide className="swiper-slide">
              <Image
                width={300}
                height={650}
                src="/assets/code.png"
                alt="wallpaper"
              />
            </SwiperSlide>
          </Swiper>
          <div className="z-10 flex-col justify-between items-center flex">
            <div className="flex flex-col items-center ">
              <div className="h-10"></div>
              <div className="flex flex-col mx-auto text-white gap-3 text-center ">
                <p className="font-semibold ">Friday 05 July</p>
                <p className=" text-7xl">12:41</p>
              </div>
            </div>
            {/* <div className="p-3">
              <div className="h-[6px] w-[120px] rounded-full bg-[#7E7E7E]"></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
