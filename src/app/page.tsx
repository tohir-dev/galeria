"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = dateTime.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const formattedTime = dateTime.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div className="w-screen h-screen relative">
       
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col relative bg-black overflow-hidden h-[650px] w-[300px] shadow-xl shadow-black/60 outline outline-[5px] rounded-[50px] outline-[#c0c0c0] border border-[5px] rounded-[50px] border-black">
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
            style={{ position: "absolute" }}
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
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <Image
                width={300}
                height={650}
                src="/assets/sciencesquibbles.png"
                alt="wallpaper"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <Image
                width={300}
                height={650}
                src="/assets/minimal1.png"
                alt="wallpaper"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <Image
                width={300}
                height={650}
                src="/assets/code.png"
                alt="wallpaper"
              />
            </SwiperSlide>
          </Swiper>
          <div className="z-10 flex-col w-full justify-between items-center flex">
            <div className="flex flex-col items-center ">
              <div className="h-10"></div>
              <div className="flex flex-col mx-auto text-white gap-3 text-center ">
                <p className="font-semibold ">{formattedDate}</p>
                <p className=" text-7xl">{formattedTime}</p>
              </div>
            </div>
            <div className="p-6 absolute bottom-0 w-full flex justify-between items-center gap-2">
              <Button
                variant="secondary"
                className="w-14 h-14 rounded-full bg-[#7e7e7e]/30 backdrop-blur-sm "
              >
                <p className="text-xl">👾</p>
              </Button>
              {/* <div className="h-[6px] w-[120px] rounded-full bg-[#7E7E7E]"></div> */}
              <Button
                variant="secondary"
                className="w-14 h-14 rounded-full bg-[#7e7e7e]/30 backdrop-blur-sm "
              >
                <Image
                  src="/assets/icons/download.png"
                  width={30}
                  height={30}
                  alt="download icon"
                />
              </Button>
            </div>
          </div>
      </div>
    </div>
  );
}
