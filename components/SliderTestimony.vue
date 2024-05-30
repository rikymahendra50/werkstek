<template>
  <section class="md:container-custom">
    <TitleHeader
      title="Meningen"
      secondTitle="Wat vinden onze klanten"
      class="my-8"
    />
    <div class="my-8 overflow-hidden relative mx-4 sm:mx-10">
      <swiper
        :slidesPerView="slidesPerViewTestimony"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
          el: '.swiper-pagination-custom',
        }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="swiper-testimony"
      >
        <swiper-slide
          v-for="(itemTestimony, index) in Testimony"
          :key="itemTestimony.id"
        >
          <EachTestimony
            :imageSrc="itemTestimony.imageSrc"
            :description="itemTestimony.description"
            :testimonyName="itemTestimony.name"
            :position="itemTestimony.position"
          />
        </swiper-slide>
        <div class="swiper-pagination-custom"></div>
      </swiper>
    </div>
  </section>
</template>

<style>
.swiper-pagination-custom {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-20%);
  display: flex;
}

.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background-color: theme("colors.primary");
  opacity: 0.5;
  transition: all 0.3s ease;
  margin-right: 5px;
}

.swiper-pagination-bullet-active {
  width: 30px;
  background-color: theme("colors.primary");
  opacity: 1;
  height: 9px;
  border-radius: 10px;
  margin-right: 5px;
}
</style>
<script>
import { onMounted, onBeforeUnmount, ref } from "vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default {
  data() {
    return {
      Testimony: [
        {
          id: 1,
          imageSrc: "/images/person-testimonial-1.png",
          imageAlt: "Dianne Russell",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
          name: "Dianne Russell",
          position: "CEO, Let’s Connect",
        },
        {
          id: 2,
          imageSrc: "/images/person-testimonial-2.png",
          imageAlt: "Pushpa kumar arora",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
          name: "Pushpa kumar arora",
          position: "CEO, Let’s Connect",
        },
        {
          id: 3,
          imageSrc: "/images/person-testimonial-1.png",
          imageAlt: "Pushpa kumar arora",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
          name: "Pushpa kumar arora",
          position: "CEO, Let’s Connect",
        },
        {
          id: 4,
          imageSrc: "/images/person-testimonial-2.png",
          imageAlt: "Pushpa kumar arora",
          description:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
          name: "Pushpa kumar arora",
          position: "CEO, Let’s Connect",
        },
      ],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slidesPerViewTestimony = ref(1);

    const handleResizeTestimony = () => {
      slidesPerViewTestimony.value = window.innerWidth > 697 ? 2 : 1;
    };

    onMounted(() => {
      handleResizeTestimony();
      window.addEventListener("resize", handleResizeTestimony);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResizeTestimony);
    });

    return {
      slidesPerViewTestimony,
      modules: [Autoplay, Pagination],
    };
  },
};
</script>
