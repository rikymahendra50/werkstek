<template>
  <div class="py-10 px-5 md:container-custom" :class="background">
    <div class="grid md:grid-cols-2 mx-2 md:mx-3 lg:mx-4 items-center">
      <div class="order-2 flex justify-end max-w-[600px]">
        <div class="w-[70%] md:w-[100%]">
          <svg
            width="100%"
            viewBox="0 0 598 632"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M492 40C492 17.9086 474.091 0 452 0H40C17.9086 0 0 17.9086 0 40V631C0 631.552 0.447715 632 1 632H492H558C580.091 632 598 614.091 598 592V121.994C598 99.9028 580.091 81.9942 558 81.9942H532C509.909 81.9942 492 64.0855 492 41.9942V40Z"
              :fill="'url(#pattern1-' + uniqueId + ')'"
            />
            <defs>
              <pattern
                :id="'pattern1-' + uniqueId"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  :xlink:href="'#image0_' + uniqueId"
                  :transform="'matrix(0.0017585 0 0 0.00166389 -0.0275488 0)'"
                />
              </pattern>
              <image
                :id="'image0_' + uniqueId"
                width="600"
                height="601"
                :xlink:href="image"
              />
            </defs>
          </svg>
        </div>
      </div>

      <div class="flex-col mx-5" :class="textClasses">
        <h1
          class="text-[20px] md:text-[29px] lg:text-[36px] text-[#404040] mb-3 md:my-6 font-bold"
        >
          {{ title }}
        </h1>
        <span
          class="text-[12px] md:text-[14px] lg:text-[18px] leading-6 lg:leading-9 text-justify py-4"
        >
          {{ description }}
          <br />
          <div class="mt-7">
            <span class="text-[14px] text-[#777]">{{ titledescription2 }}</span>
            <br />
            {{ description2 }}
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    uniqueIdProp: {
      type: Number,
      required: true,
    },
    background: {
      type: String,
      default: "bg-white",
    },
    image: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: false,
      default: "image",
    },
    title: {
      type: String,
      required: true,
    },
    titledescription2: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    description2: {
      type: String,
      required: false,
    },
    leftToRight: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      uniqueId: `component-${Math.floor(Math.random() * 10000)}`,
    };
  },

  computed: {
    imageClasses() {
      return {
        "sm:order-1": this.leftToRight,
        "sm:order-2": !this.leftToRight,
        "order-2": this.leftToRight,
      };
    },
    textClasses() {
      return {
        "sm:order-2": this.leftToRight,
        "sm:order-1": !this.leftToRight,
        "order-1": this.leftToRight,
        "sm:mr-20": !this.leftToRight,
        "sm:ml-20": this.leftToRight,
      };
    },
  },
};
</script>
