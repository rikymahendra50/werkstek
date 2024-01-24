<template>
  <section class="md:container-custom">
    <TitleHeader
      title="Meningen"
      secondTitle="Wat vinden onze klanten"
      class="my-8"
    />
    <div class="my-8 overflow-hidden">
      <swiper
        :slidesPerView="slidesPerView"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
          dynamicBullets: true,
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>
          <div
            class="relative text-left px-5 py-5 rounded-[16px] flex flex-col box-shadow2 my-10"
          >
            <img
              src="@/assets/images/person-testimonial-1.png"
              alt="testimonial1"
              class="aspect-square w-[40%] max-w-[100px] object-cover absolute rounded-full mt-[-50px] box-shadow-testimony-img"
            />
            <p
              class="text-[14px] md:text-[16px] lg:text-[18px] leading-8 text-[#3D3D3D] pt-16 md:pt-20"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <hr
              class="border-t-[0.25pxs] border-black my-[16px] md:my-[36px] w-[90%]"
            />
            <div class="flex items-center">
              <div>
                <p class="text-[14px] md:text-[16px]">Dianne Russell</p>
                <p
                  class="font-medium text-[12px] md:text-[14px] md:leading-7 text-[#999999]"
                >
                  CEO, Let’s Connect
                </p>
              </div>
              <div class="ml-auto">
                <img
                  src="@/assets/images/star-rating-1.svg"
                  alt="star-rating"
                  class="w-[60%] md:w-full"
                />
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="relative text-left px-5 py-5 rounded-[16px] flex flex-col box-shadow2 my-10"
          >
            <img
              src="@/assets/images/person-testimonial-2.png"
              alt="testimonial1"
              class="aspect-square w-[40%] max-w-[100px] object-cover absolute rounded-full mt-[-50px] box-shadow-testimony-img"
            />
            <p
              class="text-[14px] md:text-[16px] lg:text-[18px] leading-8 text-[#3D3D3D] pt-16 md:pt-20"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <hr
              class="border-t-[0.25pxs] border-black my-[16px] md:my-[36px] w-[90%]"
            />
            <div class="flex items-center">
              <div>
                <p class="text-[14px] md:text-[16px]">Pushpa kumar arora</p>
                <p
                  class="font-medium text-[12px] md:text-[14px] md:leading-7 text-[#999999]"
                >
                  CEO, Let’s Connect
                </p>
              </div>
              <div class="ml-auto">
                <img
                  src="@/assets/images/star-rating-1.svg"
                  alt="star-rating"
                  class="w-[60%] md:w-full"
                />
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { onMounted, onBeforeUnmount, ref } from "vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slidesPerView = ref(1);

    const handleResize = () => {
      slidesPerView.value = window.innerWidth > 768 ? 2 : 1;
    };

    onMounted(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });

    return {
      slidesPerView,
      modules: [Autoplay, Pagination],
    };
  },
};
</script>
<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
