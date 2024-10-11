export default function Slides() {
  return (
    <div>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        // centeredSlides={true}
        // slidesPerView={3}
        pagination={{ clickable: true }}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        // className="swiper"
        // style={{ position: "absolute" }}
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
    </div>
  );
}
