<template>
  <section
    class="bg-white h-[850px] sm:h-[900px] lg:h-[1109px] relative flex items-center"
    :class="classcustom"
  >
    <!-- <span
      class="bg-bgdot bg-no-repeat w-[20%] md:w-[30%] lg:top-16 h-full absolute"
    ></span> -->
    <div class="grid sm:grid-rows-1 sm:grid-cols-2 z-10">
      <div class="container-custom flex items-start mt-20">
        <div class="grid">
          <span class="text-[19px] lg:text-[24px]">{{ title1 }}</span>
          <span class="text-[35px] lg:text-[60px]">{{ title2 }}</span>
          <span class="text-[12px] lg:text-[20px]">
            {{ title3 }}
          </span>
          <div
            class="flex mt-10 w-[100%] md:justify-between lg:w-[80%]"
            v-if="showButton"
          >
            <NuxtLink
              :to="buttonLink1"
              class="bg-primary py-3 px-2 lg:px-6 rounded-[14px] text-center drop-shadow-md text-white md:mr-5"
            >
              {{ buttonTitle1 }}
            </NuxtLink>
            <NuxtLink
              :to="buttonLink2"
              class="py-3 px-6 rounded-[14px] drop-shadow-md text-[16px] font-bold text-[#404040]"
            >
              {{ buttonTitle2 }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="grid relative mt-5 justify-items-end">
        <!-- <img
          :src="image"
          alt="image"
          class="z-10 w-[80%] sm:w-[90%] md:w-[98%] lg:w-full"
        /> -->
        <div class="w-[70%] lg:w-[100%]">
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
        <!-- <div class="z-10 border-2 border-red-500">
          <svg
            width="70%"
            height="665"
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
        </div> -->

        <!-- locaties and Statics -->
        <!-- <div
          class="bg-primary h-[70%] grid grid-rows-1 grid-cols-3 lg:grid-cols-5 absolute bottom-[-80px] md:bottom-[-100px] lg:bottom-[-120px] right-10 md:right-[50px] w-[80%] sm:w-[90%] md:w-[98%] items-end pb-5 pl-4 lg:pl-10"
          style="border-radius: 50px 10px"
        >
          <div class="text-white">
            <p class="text-[18px] md:text-[24px] lg:text-[36px] font-semibold">
              {{ count1 }} <span class="text-[#00985B]">+</span>
            </p>
            <p class="text-[12px] md:text-[16px] font-normal">{{ titleBg1 }}</p>
          </div>
          <div class="text-white">
            <p class="text-[18px] md:text-[24px] lg:text-[36px] font-semibold">
              {{ count2 }} <span class="text-[#00985B]">+</span>
            </p>
            <p class="text-[12px] md:text-[16px] font-normal">{{ titleBg2 }}</p>
          </div>
          <div class="text-white">
            <p class="text-[18px] md:text-[24px] lg:text-[36px] font-semibold">
              {{ count3 }} <span class="text-[#00985B]">+</span>
            </p>
            <p class="text-[12px] md:text-[16px] font-normal">{{ titleBg3 }}</p>
          </div>
        </div> -->
        <div
          class="bg-primary grid grid-rows-1 grid-cols-3 z-10 absolute bottom-10 lg:bottom-20 right-20 md:right-30 w-[80%] sm:w-[90%] md:w-[98%] content-center justify-items-center py-2 lg:py-5 rounded-[40px] lg:px-10"
        >
          <div class="text-white">
            <p class="text-[24px] lg:text-[36px] xl:text-[48px] font-semibold">
              {{ count1 }} <span class="text-[#00985B]">+</span>
            </p>
            <p class="text-[12px] md:text-[16px] font-normal">{{ titleBg1 }}</p>
          </div>
          <div class="text-white">
            <p class="text-[24px] lg:text-[36px] xl:text-[48px] font-semibold">
              {{ count2 }} <span class="text-[#00985B]">+</span>
            </p>
            <p class="text-[12px] md:text-[16px] font-normal">{{ titleBg2 }}</p>
          </div>
          <div class="text-white">
            <p class="text-[24px] lg:text-[36px] xl:text-[48px] font-semibold">
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
