<template>
  <section class="bg-tertiary relative flex flex-col py-10">
    <!-- <span
      class="bg-bgdot bg-no-repeat w-[20%] lg:w-[15%] top-0 h-full right-0 absolute bg-cover z-1 rotate-180"
    ></span> -->
    <div class="grid grid-cols-1 grid-rows-1">
      <div class="grid w-full container-custom">
        <div class="flex justify-between items-center mb-5">
          <div class="flex flex-col w-[60%] lg:w-[40%]">
            <p
              class="text-[12px] md:text-lg lg:text-2xl font-bold text-secondary tracking-widest"
            >
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
          <NuxtLink
            to="/"
            class="border border-quaternary rounded-full flex items-center z-10 justify-between gap-2"
          >
            <p
              class="text-[12px] sm:text-[14px] lg:text-lg ml-1 sm:ml-2 lg:ml-3 w-full"
            >
              Bekijk alle locaties
            </p>
            <div
              class="rounded-full bg-quaternary text-white flex items-center justify-center max-w-[55px] max-h-[55px] m-1 sm:p-2 lg:p-3"
            >
              <img
                src="/images/arrow-small-right.svg"
                alt="arrow"
                class="mr-[1px] sm:mr-[2px]"
              />
            </div>
          </NuxtLink>
          <!-- <ButtonSM
            buttonTitle="Bekijk alle locaties"
            buttonLink="/onze-locaties"
            class="z-10"
          /> -->
        </div>
      </div>
      <div
        class="flex pl-3 sm:pl-6 md:pl-[70px] lg:pl-[80px] xl:pl-[106px] min-w-[100px] min-h-[300px]"
      >
        <swiper
          :slidesPerView="slidesPerView"
          :navigation="true"
          :modules="modules"
          class="mySwiper h-[458px]"
          loop
        >
          <swiper-slide
            class="mr-2"
            v-for="(itemSlider, index) in SliderLocaties"
            :key="itemSlider.id"
            :style="{
              backgroundImage: `url('${itemSlider.backgroundImage}')`,
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${itemSlider.backgroundImage}')`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }"
          >
            <NuxtLink
              :to="itemSlider.link"
              class="h-full flex flex-col justify-center items-center text-white"
            >
              <h2 class="text-xl sm:text-3xl pt-20 font-semibold">Hoofddorp</h2>
              <p class="text-[14px] sm:text-sm py-1">Simon Stevinweg 27</p>
              <h4 class="text-[14px] sm:text-lg font-semibold">Opervlakte</h4>
              <p class="text-[12px] sm:text-sm py-1">€ 495 p/maand</p>
              <p class="text-[12px] sm:text-sm">Neem een kijkje ></p>
            </NuxtLink>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style>
.swiper-button-next,
.swiper-button-prev {
  background-position: center;
  background-size: 40px;
  background-repeat: no-repeat;
  background-color: theme("colors.primary");
  width: 40px;
  border-radius: 12px;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: theme("colors.secondary");
}

.swiper-button-prev {
  background-image: url("/images/arrow-left.svg");
  left: 0;
}

.swiper-button-next {
  background-image: url("/images/arrow-right.svg");
}

.swiper-button-next::after,
.swiper-button-prev::after {
  content: "";
}

@media (max-width: 420px) {
  .swiper-button-next,
  .swiper-button-prev {
    opacity: 0.6;
    width: 30px;
  }
}

@media (max-width: 1028px) {
  .swiper-button-next,
  .swiper-button-prev {
    opacity: 0.6;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev {
    right: 0;
  }
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
  data() {
    return {
      SliderLocaties: [
        {
          id: 1,
          link: "/",
          backgroundImage: "/images/img-slider-home-1.png",
          link: "/onze-locaties",
        },
        {
          id: 2,
          link: "/",
          backgroundImage: "/images/img-slider-home-2.png",
        },
        {
          id: 3,
          link: "/",
          backgroundImage: "/images/img-slider-home-3.png",
        },
        {
          id: 4,
          link: "/",
          backgroundImage: "/images/img-slider-home-2.png",
        },
      ],
    };
  },
  setup() {
    const slidesPerView = ref(3);

    const handleResize = () => {
      if (window.innerWidth <= 520) {
        slidesPerView.value = 1;
      } else if (window.innerWidth <= 720) {
        slidesPerView.value = 2;
      } else if (window.innerWidth <= 1028) {
        slidesPerView.value = 3;
      } else {
        slidesPerView.value = 3.3;
      }
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
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>
