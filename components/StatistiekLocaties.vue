<template>
  <section
    class="bg-tertiary h-[850px] sm:h-[900px] lg:h-[1109px] relative flex items-center"
    :class="classcustom"
  >
    <span
      class="bg-bgdot bg-no-repeat w-[30%] lg:top-16 h-full absolute"
    ></span>
    <div class="grid md:grid-rows-1 md:grid-cols-2 z-10">
      <div class="container-custom flex items-center">
        <div class="grid">
          <p class="text-[19px] lg:text-[24px]">{{ title1 }}</p>
          <p class="text-[35px] lg:text-[55px]">{{ title2 }}</p>
          <p class="text-[12px] lg:text-[20px]">
            {{ title3 }}
          </p>
          <div
            class="flex mt-10 w-[90%] lg:w-[80%] justify-between"
            v-if="showButton"
          >
            <a
              :href="buttonLink1"
              class="bg-primary1 py-3 px-6 rounded-[14px] drop-shadow-md text-white"
            >
              {{ buttonTitle1 }}
            </a>
            <a
              :href="buttonLink2"
              class="py-3 px-6 rounded-[14px] drop-shadow-md text-[16px] font-bold text-[#404040]"
            >
              {{ buttonTitle2 }}
            </a>
          </div>
        </div>
      </div>
      <div class="grid relative mt-5 justify-items-end">
        <img
          :src="image"
          alt="image"
          class="z-10 w-[80%] sm:w-[90%] md:w-[98%] lg:w-full"
        />
        <!-- locaties and Statics -->
        <div
          class="bg-primary1 h-[70%] grid grid-rows-1 grid-cols-3 lg:grid-cols-5 absolute bottom-[-80px] md:bottom-[-100px] right-10 md:right-[50px] w-[80%] sm:w-[90%] md:w-[98%] items-end pb-5 pl-4 lg:pl-10"
          style="border-radius: 50px 10px"
        >
          <div class="text-white">
            <p class="text-[18px] md:text-[24px] font-semibold">
              {{ count1 }} <span class="text-[#00985B]">+</span>
            </p>
            <p class="text-[12px] md:text-[16px] font-normal">{{ titleBg1 }}</p>
          </div>
          <div class="text-white">
            <p class="text-[18px] md:text-[24px] font-semibold">
              {{ count2 }} <span class="text-[#00985B]">+</span>
            </p>
            <p class="text-[12px] md:text-[16px] font-normal">{{ titleBg2 }}</p>
          </div>
          <div class="text-white">
            <p class="text-[18px] md:text-[24px] font-semibold">
              {{ count3 }} <span class="text-[#00985B]">+</span>
            </p>
            <p class="text-[12px] md:text-[16px] font-normal">{{ titleBg3 }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title1: {
      type: String,
      required: true,
    },
    title2: {
      type: String,
      required: true,
    },
    title3: {
      type: String,
      required: true,
    },
    buttonTitle1: {
      type: String,
      required: false,
    },
    buttonLink1: {
      type: String,
      required: false,
    },
    buttonTitle2: {
      type: String,
      required: false,
    },
    buttonLink2: {
      type: String,
      required: false,
    },
    titleBg1: {
      type: String,
      required: true,
    },
    titleBg2: {
      type: String,
      required: true,
    },
    titleBg3: {
      type: String,
      required: true,
    },
    count1: {
      type: Number,
      required: true,
    },
    count2: {
      type: Number,
      required: true,
    },
    count3: {
      type: Number,
      required: true,
    },
    classcustom: {
      type: String,
      required: false,
    },
    showButton: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
