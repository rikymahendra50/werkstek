<template>
  <section class="container-custom my-5 lg:my-10">
    <div class="relative">
      <h1
        class="text-[12px] min-[400px]:text-[16px] min-[500px]:text-[20px] sm:text-[22px] md:text-[28px] lg:text-[34px] xl:text-[40px] font-bold absolute pl-2 sm:pl-4 sm:pt-1 lg:pl-4 lg:pt-3 top-0"
      >
        {{ title1 }}
      </h1>
      <div class="relative">
        <svg
          viewBox="0 0 1280 655"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M606.856 0C586.231 0 569.511 19.5828 569.511 43.7396V59.5075C569.511 81.5989 551.603 99.5075 529.511 99.5075H37.2623C16.6372 99.5075 0 119.09 0 143.247V611.26C0 635.417 16.7199 655 37.345 655H1242.66C1263.28 655 1280 635.417 1280 611.26V43.7396C1280 19.5829 1263.28 0 1242.66 0H606.856Z"
            fill="url(#pattern0)"
          />
          <path
            d="M606.856 0C586.231 0 569.511 19.5828 569.511 43.7396V59.5075C569.511 81.5989 551.603 99.5075 529.511 99.5075H37.2623C16.6372 99.5075 0 119.09 0 143.247V611.26C0 635.417 16.7199 655 37.345 655H1242.66C1263.28 655 1280 635.417 1280 611.26V43.7396C1280 19.5829 1263.28 0 1242.66 0H606.856Z"
            fill="black"
            fill-opacity="0.4"
          />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0_57_14544"
                transform="matrix(0.000244141 0 0 0.000477099 0 -0.151718)"
              />
            </pattern>
            <image
              id="image0_57_14544"
              width="4096"
              height="2732"
              :xlink:href="image"
            ></image>
          </defs>
        </svg>
        <div
          class="absolute bottom-[30%] min-[500px]:bottom-[14%] sm:bottom-[20%] lg:bottom-[35%] xl:bottom-36 text-white ml-4 sm:ml-5"
        >
          <p
            class="text-sm min-[420px]:text-base min-[520px]:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold pb-1 md:pb-4 text-shadow"
          >
            {{ title2 }}
          </p>
          <p
            class="text-[8px] min-[420px]:text-[10px] min-[520px]:text-[13px] sm:text-sm md:text-base lg:text-[16px] leading-2 w-[80%] md:w-[60%] text-shadow"
          >
            {{ title3 }}
          </p>
        </div>
        <div
          class="bg-primary grid grid-rows-1 grid-cols-3 z-10 absolute w-[80%] sm:w-[70%] content-center justify-items-center py-2 lg:py-5 rounded-[40px] px-4 lg:px-10 bottom-[-20%] sm:bottom-[-10%] right-3 lg:right-10"
        >
          <div class="text-white">
            <p
              class="text-[20px] sm:text-[24px] lg:text-[36px] xl:text-[48px] font-semibold"
            >
              {{ count1 }} <span class="text-[#00985B]">+</span>
            </p>
            <p class="text-[12px] md:text-[16px] font-normal">{{ titleBg1 }}</p>
          </div>
          <div class="text-white">
            <p
              class="text-[20px] sm:text-[24px] lg:text-[36px] xl:text-[48px] font-semibold"
            >
              {{ count2 }} <span class="text-[#00985B]">+</span>
            </p>
            <p class="text-[12px] md:text-[16px] font-normal">{{ titleBg2 }}</p>
          </div>
          <div class="text-white">
            <p
              class="text-[20px] sm:text-[24px] lg:text-[36px] xl:text-[48px] font-semibold"
            >
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
