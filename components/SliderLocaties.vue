<template>
  <section class="relative flex flex-col py-10">
    <div class="grid grid-cols-1 grid-rows-1">
      <div
        class="flex pl-3 sm:pl-6 md:pl-[70px] lg:pl-[80px] xl:pl-[106px] overflow-hidden"
      >
        <swiper
          :slidesPerView="slidesPerView"
          :navigation="true"
          :modules="modules"
          :slides-per-view="slidesPerView"
          :spaceBetween="10"
          :css-mode="true"
          :watch-slides-progress="true"
          class="mySwiper"
          loop
        >
          <swiper-slide
            class="mr-2 group group-hover:scale-125 rounded-xl transition-all duration-300 group overflow-hidden min-h-[200px] max-h-[600px]"
            :style="{
              borderColor: itemSlider?.level_type?.color,
              borderWidth: '2px',
              borderStyle: 'solid',
            }"
            v-for="(itemSlider, index) in data"
            :key="itemSlider.id"
          >
            <img
              :src="
                itemSlider.images[0]?.image ||
                itemSlider.images[1]?.image ||
                itemSlider.images[2]?.image ||
                itemSlider.images[3]?.image
                  ? itemSlider.images[0].image
                  : '/images/empty-property-default.png'
              "
              :alt="`image ` + index"
              class="group-hover:scale-125 transition-all w-full duration-300 h-full object-cover hover-gradient"
            />
            <NuxtLink
              :to="`/onze-locaties/${itemSlider.slug}`"
              class="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50"
            >
              <div class="flex flex-col items-center gap-2">
                <h2 class="text-md lg:text-2xl font-semibold tracking-wider">
                  {{ itemSlider?.location?.name }}
                </h2>
                <p class="text-[14px] lg:text-sm py-1">
                  {{ itemSlider?.name }}
                </p>
              </div>
              <div class="flex flex-col justify-center items-center mt-4 gap-2">
                <h4 class="text-[16px] lg:text-lg font-semibold">
                  {{ itemSlider?.area_size }} m<sup>2</sup>
                </h4>
                <p class="text-[15px] lg:text-sm">
                  € {{ itemSlider?.price }} p/{{ itemSlider?.rent_type }}
                </p>
                <p class="text-sm pt-2">Neem een kijkje ></p>
              </div>
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
  props: {
    data: {
      type: Array,
    },
  },
  setup() {
    const slidesPerView = ref(3);

    const handleResize = () => {
      if (window.innerWidth <= 500) {
        slidesPerView.value = 1;
      } else if (window.innerWidth <= 768) {
        slidesPerView.value = 2;
      } else if (window.innerWidth <= 1028) {
        slidesPerView.value = 3;
      } else {
        slidesPerView.value = 3.2;
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
