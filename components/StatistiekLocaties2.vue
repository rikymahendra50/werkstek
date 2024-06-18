<template>
  <section class="container-custom my-5">
    <div class="relative hidden md:block">
      <div class="relative">
        <h1
          class="text-[12px] min-[400px]:text-[16px] min-[500px]:text-[20px] sm:text-[22px] md:text-[28px] lg:text-[34px] xl:text-[40px] font-bold absolute pl-2 sm:pl-4 sm:pt-1 lg:pl-4 lg:pt-3 top-[-10px]"
          v-html="title1"
        ></h1>
        <svg
          viewBox="0 0 1280 504"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            d="M606.856 0C586.231 0 569.511 15.0683 569.511 33.6561V36.5676C569.511 58.659 551.603 76.5676 529.511 76.5676H37.2623C16.6372 76.5676 0 91.6359 0 110.224V470.344C0 488.932 16.7199 504 37.345 504H1242.66C1263.28 504 1280 488.932 1280 470.344V33.6561C1280 15.0684 1263.28 0 1242.66 0H606.856Z"
            fill="url(#pattern0_57_14544)"
          />
          <path
            d="M606.856 0C586.231 0 569.511 15.0683 569.511 33.6561V36.5676C569.511 58.659 551.603 76.5676 529.511 76.5676H37.2623C16.6372 76.5676 0 91.6359 0 110.224V470.344C0 488.932 16.7199 504 37.345 504H1242.66C1263.28 504 1280 488.932 1280 470.344V33.6561C1280 15.0684 1263.28 0 1242.66 0H606.856Z"
            fill="black"
            fill-opacity="0.4"
          />
          <defs>
            <pattern
              id="pattern0_57_14544"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlink:href="#image0_57_14544"
                transform="matrix(0.000244141 0 0 0.00062004 0 -0.346974)"
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
          class="absolute bottom-[30%] min-[500px]:bottom-[20%] sm:bottom-[20%] lg:bottom-[22%] text-white ml-4 sm:ml-10"
        >
          <p
            v-if="!useTitle2"
            class="text-sm min-[420px]:text-base min-[520px]:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold pb-1 md:pb-4 drop-shadow-2xl xl:leading-snug tracking-widest"
            v-html="title2"
          ></p>
          <p
            v-else-if="useTitle2"
            class="text-sm min-[420px]:text-base min-[520px]:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold pb-1 md:pb-4 drop-shadow-2xl xl:leading-snug tracking-widest"
            v-html="title22"
          ></p>
          <p
            class="text-[8px] min-[420px]:text-[10px] min-[520px]:text-[13px] sm:text-sm md:text-base lg:text-[14px] leading-2 w-[80%] md:w-[60%] drop-shadow-2xl"
            v-html="title3"
          ></p>
        </div>
        <!-- maybe update nanti -->
        <!-- <div
          class="bg-primary grid grid-rows-1 grid-cols-3 z-10 absolute w-[80%] sm:w-[60%] content-center justify-items-center py-2 lg:py-5 rounded-lg lg:rounded-[40px] px-2 lg:px-10 bottom-[-20%] min-[620px]:bottom-[-10%] sm:bottom-[-10%] right-3 lg:right-10"
        >
          <div class="text-white">
            <p
              class="text-[20px] min-[620px]:text-[24px] lg:text-[36px] xl:text-[48px] font-semibold"
            >
              {{ count1 }} <span class="text-[#00985B]">+</span>
            </p>
            <p
              class="text-[10px] min-[620px]:text-[14px] md:text-[16px] font-normal"
            >
              {{ titleBg1 }}
            </p>
          </div>
          <div class="text-white">
            <p
              class="text-[20px] min-[620px]:text-[24px] lg:text-[36px] xl:text-[48px] font-semibold"
            >
              {{ count2 }} <span class="text-[#00985B]">+</span>
            </p>
            <p
              class="text-[10px] min-[620px]:text-[14px] md:text-[16px] font-normal"
            >
              {{ titleBg2 }}
            </p>
          </div>
          <div class="text-white">
            <p
              class="text-[20px] sm:text-[24px] lg:text-[36px] xl:text-[48px] font-semibold"
            >
              {{ count3 }} <span class="text-[#00985B]">+</span>
            </p>
            <p class="text-[10px] sm:text-[14px] md:text-[16px] font-normal">
              {{ titleBg3 }}
            </p>
          </div>
        </div> -->
      </div>
    </div>

    <div class="relative md:hidden">
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
          class="absolute bottom-[30%] min-[500px]:bottom-[20%] sm:bottom-[20%] lg:bottom-[35%] xl:bottom-36 text-white ml-4 sm:ml-10"
        >
          <p
            v-if="!useTitle2"
            class="text-sm min-[420px]:text-base min-[520px]:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold pb-1 md:pb-4 text-shadow xl:leading-snug tracking-widest"
          >
            De Werkstek locaties
          </p>
          <p
            v-else-if="useTitle2"
            class="text-sm min-[420px]:text-base min-[520px]:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold pb-1 md:pb-4 text-shadow xl:leading-snug tracking-widest"
            v-html="title22"
          ></p>
          <p
            class="text-[8px] min-[420px]:text-[10px] min-[520px]:text-[13px] sm:text-sm md:text-base lg:text-[16px] leading-2 w-[80%] md:w-[60%] text-shadow"
            v-html="title3"
          ></p>
        </div>
        <div
          class="bg-primary grid grid-rows-1 grid-cols-3 z-10 absolute w-[80%] sm:w-[70%] content-center justify-items-center py-2 lg:py-5 rounded-lg lg:rounded-[40px] px-2 lg:px-10 bottom-[-20%] min-[620px]:bottom-[-10%] sm:bottom-[-10%] right-3 lg:right-10"
        >
          <div class="text-white">
            <p
              class="text-[20px] min-[620px]:text-[24px] lg:text-[36px] xl:text-[48px] font-semibold"
            >
              {{ count1 }} <span class="text-[#00985B]">+</span>
            </p>
            <p
              class="text-[10px] min-[620px]:text-[14px] md:text-[16px] font-normal"
            >
              {{ titleBg1 }}
            </p>
          </div>
          <div class="text-white">
            <p
              class="text-[20px] min-[620px]:text-[24px] lg:text-[36px] xl:text-[48px] font-semibold"
            >
              {{ count2 }} <span class="text-[#00985B]">+</span>
            </p>
            <p
              class="text-[10px] min-[620px]:text-[14px] md:text-[16px] font-normal"
            >
              {{ titleBg2 }}
            </p>
          </div>
          <div class="text-white">
            <p
              class="text-[20px] sm:text-[24px] lg:text-[36px] xl:text-[48px] font-semibold"
            >
              {{ count3 }} <span class="text-[#00985B]">+</span>
            </p>
            <p class="text-[10px] sm:text-[14px] md:text-[16px] font-normal">
              {{ titleBg3 }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    useTitle2: {
      type: Boolean,
      default: true,
    },
    title22: {
      type: String,
    },
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
