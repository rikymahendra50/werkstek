<!-- <template>
  <section class="bg-tertiary relative flex flex-col py-10">
    <div class="grid grid-cols-1 grid-rows-1">
      <div class="grid w-full container-custom">
        <div class="flex justify-between items-center">
          <div class="flex flex-col w-[60%] lg:w-[40%]">
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
          <ButtonSM
            buttonTitle="Bekijk alle locaties"
            buttonLink="/onze-locaties"
            class="z-10 hover:bg-secondary hover:bg-opacity-70 hover:text-tertiary"
          />
        </div>
      </div>
      <div
        class="flex pl-3 sm:pl-6 md:pl-[70px] lg:pl-[80px] xl:pl-[106px] overflow-hidden"
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
            v-for="(itemSlider, index) in data?.data"
            :key="itemSlider.id"
            :style="{
              backgroundImage: itemSlider.images[index]?.image
                ? `url('${itemSlider.images[index]?.image}')`
                : `url('/images/img-each-locatie-1.png')`,
              background: itemSlider.images[index]?.image
                ? `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${itemSlider.images[index]?.image}')`
                : `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/img-each-locatie-1.png')`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }"
          >
            <NuxtLink
              :to="`/onze-locaties/${itemSlider.slug}`"
              class="h-full flex flex-col justify-center items-center text-white"
            >
              <h2 class="text-3xl pt-20">Hoofddorp</h2>
              <p class="text-sm py-1">{{ itemSlider.name }}</p>
              <h4 class="text-lg font-semibold">Opervlakte</h4>
              <p class="text-sm py-1">€ {{ itemSlider.price }} p/maand</p>
              <p class="text-sm">Neem een kijkje ></p>
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
  border-radius: 10px;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: theme("colors.secondary");
}

.swiper-button-prev {
  background-image: url("/images/arrow-left.svg");
  left: 5px;
}

.swiper-button-next {
  background-image: url("/images/arrow-right.svg");
}

.swiper-button-next::after,
.swiper-button-prev::after {
  content: "";
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

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const { requestOptions } = useRequestOptions();
const { data, error } = await useFetch(`/products`, {
  method: "get",
  ...requestOptions,
});

const slidesPerView = ref(3);

const handleResize = () => {
  if (window.innerWidth <= 468) {
    slidesPerView.value = 2;
  } else if (window.innerWidth <= 768) {
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

const modules = [Autoplay, Pagination, Navigation];
</script> -->

<!-- code sementara jika data di database sudah banyak baru pakai code diatas -->
<template>
  <section class="bg-tertiary relative flex flex-col py-10">
    <div class="grid grid-cols-1 grid-rows-1">
      <div class="grid w-full container-custom">
        <div class="flex justify-between items-center mb-5">
          <div class="flex flex-col w-[60%] lg:w-[40%]">
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
          <ButtonSM
            buttonTitle="Bekijk alle locaties"
            buttonLink="/onze-locaties"
            class="z-10 hover:bg-secondary hover:bg-opacity-70 hover:text-tertiary"
          />
        </div>
      </div>
      <div
        class="flex pl-3 sm:pl-6 md:pl-[70px] lg:pl-[80px] xl:pl-[106px] overflow-hidden border-2"
      >
        <swiper
          :slidesPerView="slidesPerView"
          :navigation="true"
          :modules="modules"
          class="mySwiper h-[458px]"
          loop
        >
          <swiper-slide
            class="mr-2 group"
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
              class="h-full flex-col justify-center items-center text-white hidden group-hover:flex transition ease-in-out delay-150"
            >
              <h2 class="text-3xl pt-20">Hoofddorp</h2>
              <p class="text-sm py-1">Simon Stevinweg 27</p>
              <h4 class="text-lg font-semibold">Opervlakte</h4>
              <p class="text-sm py-1">€ 495 p/maand</p>
              <p class="text-sm">Neem een kijkje ></p>
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
  border-radius: 10px;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: theme("colors.secondary");
}

.swiper-button-prev {
  background-image: url("/images/arrow-left.svg");
  left: 5px;
}

.swiper-button-next {
  background-image: url("/images/arrow-right.svg");
}

.swiper-button-next::after,
.swiper-button-prev::after {
  content: "";
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
import { ref } from "vue";
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
          link: "/onze-locaties/antareslaan-65",
          backgroundImage: "/images/img-slider-home-1.png",
        },
        {
          id: 2,
          link: "/onze-locaties/antareslaan-65",
          backgroundImage: "/images/img-slider-home-2.png",
        },
        {
          id: 3,
          link: "/onze-locaties/antareslaan-65",
          backgroundImage: "/images/img-slider-home-3.png",
        },
        {
          id: 4,
          link: "/onze-locaties/antareslaan-65",
          backgroundImage: "/images/img-slider-home-2.png",
        },
      ],
    };
  },
  setup() {
    const slidesPerView = ref(3);

    const handleResize = () => {
      if (window.innerWidth <= 768) {
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
