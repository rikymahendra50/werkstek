<template>
  <div class="grid md:grid-cols-2 mx-2 md:mx-3 lg:mx-4 items-center">
    <div class="flex sm:order-1 max-w-[600px]">
      <div class="w-[70%] md:w-full">
        <!-- <svg
          viewBox="0 0 598 632"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M492 40C492 17.9086 474.091 0 452 0H40C17.9086 0 0 17.9086 0 40V631C0 631.552 0.447715 632 1 632H492H558C580.091 632 598 614.091 598 592V121.994C598 99.9028 580.091 81.9942 558 81.9942H532C509.909 81.9942 492 64.0855 492 41.9942V40Z"
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
                xlink:href="#image0_86_3492"
                transform="matrix(0.0017585 0 0 0.00166389 -0.0275488 0)"
              />
            </pattern>
            <image
              id="image0_86_3492"
              width="600"
              height="601"
              :xlink:href="image"
            ></image>
          </defs>
        </svg> -->
        <svg
          width="598"
          height="632"
          viewBox="0 0 598 632"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M492 40C492 17.9086 474.091 0 452 0H40C17.9086 0 0 17.9086 0 40V631C0 631.552 0.447715 632 1 632H492H558C580.091 632 598 614.091 598 592V121.994C598 99.9028 580.091 81.9942 558 81.9942H532C509.909 81.9942 492 64.0855 492 41.9942V40Z"
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
                xlink:href="#image0_86_3718"
                transform="matrix(0.0017585 0 0 0.00166389 -0.0275488 0)"
              />
            </pattern>
            <image
              id="image0_86_3718"
              width="600"
              height="601"
              :xlink:href="image"
            />
          </defs>
        </svg>
      </div>
    </div>
    <div class="flex flex-col mx-3 sm:mx-5 xl:mx-16 order-1 sm:order-2">
      <h1
        class="text-xl lg:text-[36px] text-[#404040] my-2 md:my-7 mt-4 font-bold"
      >
        {{ title }}
      </h1>
      <p class="text-[12px] md:text-[16px] leading-6 lg:leading-9 text-justify">
        {{ description }}
      </p>
      <div class="flex items-center my-5 gap-5">
        <ButtonPrimary :buttonTitle="buttonTitle1" :buttonLink="buttonLink1" />
        <ButtonSM :buttonTitle="buttonTitle2" :buttonLink="buttonLink2" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
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
  },
};
</script>
