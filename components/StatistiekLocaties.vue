<template>
  <section
    class="bg-white min:h-[1109px] lg:py-20 relative flex items-center px-10"
    :class="classcustom"
  >
    <div class="grid md:grid-rows-1 md:grid-cols-2 z-10">
      <div class="lg:pl-14 flex items-center mt-10 lg:mt-20 justify-center">
        <div class="grid gap-2">
          <span class="text-[14px] sm:text-[22px] font-semibold">{{
            title1
          }}</span>
          <span class="text-[20px] sm:text-[40px] font-bold">{{ title2 }}</span>
          <span class="text-[12px] sm:text-[18px] mt-3 lg:w-[90%]">
            {{ title3 }}
          </span>
          <div
            class="flex mt-5 lg:mt-10 justify-end md:justify-around lg:justify-start gap-5 max-h-[46px] sm:max-h-[64px]"
            v-if="showButton"
          >
            <ButtonPrimary
              :buttonTitle="buttonTitle1"
              :buttonLink="buttonLink1"
            />
            <ButtonSM :buttonTitle="buttonTitle2" :buttonLink="buttonLink2" />
          </div>
        </div>
      </div>
      <div class="grid relative mt-5 justify-items-end">
        <div class="w-[80%] lg:w-[100%]">
          <svg
            width="100%"
            viewBox="0 0 657 745"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M657 40.053C657 17.9616 639.091 0.0529785 617 0.0529785H181C158.909 0.0529785 141 17.9616 141 40.053V57.053C141 79.1444 123.091 97.053 101 97.053H40C17.9086 97.053 0 114.962 0 137.053V704.053C0 726.144 17.9086 744.053 40 744.053H141H617C639.091 744.053 657 726.144 657 704.053V97.053V40.053Z"
              fill="url(#pattern0)"
            />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0_161_2608"
                  transform="matrix(0.000961307 0 0 0.000848896 -0.162676 0)"
                />
              </pattern>
              <image
                id="image0_161_2608"
                width="1768"
                height="1178"
                :xlink:href="image"
              />
            </defs>
          </svg>
        </div>
        <div
          class="bg-primary grid grid-rows-1 grid-cols-3 z-10 absolute bottom-10 lg:bottom-20 sm:right-10 lg:right-20 w-[100%] sm:w-[90%] md:w-[98%] content-center justify-items-center py-2 lg:py-5 rounded-[20px] lg:rounded-[40px] px-4 lg:px-10"
        >
          <div class="text-white">
            <p class="text-[20px] min-[520px]:text-[36px] font-semibold">
              {{ count1 }} <span class="text-[#00985B]">+</span>
            </p>
            <p class="text-[12px] md:text-[16px] font-normal">{{ titleBg1 }}</p>
          </div>
          <div class="text-white">
            <p class="text-[20px] min-[520px]:text-[36px] font-semibold">
              {{ count2 }} <span class="text-[#00985B]">+</span>
            </p>
            <p class="text-[12px] md:text-[16px] font-normal">{{ titleBg2 }}</p>
          </div>
          <div class="text-white">
            <p class="text-[20px] min-[520px]:text-[36px] font-semibold">
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
