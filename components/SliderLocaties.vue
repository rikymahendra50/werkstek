<template>
  <section class="bg-tertiary relative flex flex-col">
    <!-- <span
      class="bg-bgdot2 bg-no-repeat w-[30%] h-full absolute right-0 rotate-180"
    ></span> -->
    <div class="grid grid-cols-1 grid-rows-1">
      <div class="grid w-full container-custom">
        <div class="flex justify-between items-center mb-5">
          <div class="flex flex-col w-[60%] lg:w-[50%]">
            <p class="text-[12px] md:text-lg lg:text-[18px] font-bold">
              Locaties
            </p>
            <p
              class="text-[20px] md:text-[30px] lg:text-[48px] text-[#231E1F] font-semibold"
            >
              Bekijk onze locaties.
            </p>
            <p
              class="text-[10px] md:text-lg lg:text-[16px] text-[#777] font-normal"
            >
              Een gezellige werkplek huren in een leuke omgeving?Op deze
              locaties hebben wij kantoorruimtes
            </p>
          </div>
          <div class="flex bg-primary1 rounded-[14px] box-shadow">
            <a
              href=""
              class="flex justify-center items-center text-[10px] md:text-[16px] lg:text-[18px] text-white lg:w-[235px] px-4 py-2"
              >Bekijk alle locaties</a
            >
          </div>
        </div>
      </div>
      <div
        class="flex pl-3 sm:pl-6 md:pl-[70px] lg:pl-[80px] xl:pl-[106px] overflow-hidden"
      >
        <swiper
          :slidesPerView="4"
          :navigation="true"
          :modules="modules"
          class="mySwiper"
          loop
        >
          <swiper-slide>
            <img
              src="@/assets/images/img-slider-home-1.png"
              alt="imgslider1"
              class="mr-2 max-w-[350px]"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="@/assets/images/img-slider-home-2.png"
              alt="imgslider1"
              class="mr-2 max-w-[350px]"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="@/assets/images/img-slider-home-3.png"
              alt="imgslider1"
              class="mr-2 max-w-[350px]"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="@/assets/images/img-slider-home-1.png"
              alt="imgslider1"
              class="mr-2 max-w-[350px]"
            />
          </swiper-slide>
          <swiper-slide>
            <img
              src="@/assets/images/img-slider-home-1.png"
              alt="imgslider1"
              class="mr-2 max-w-[350px]"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style>
.mySwiper .swiper-button-next {
  right: 280px;
}
</style>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
