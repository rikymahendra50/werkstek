<template>
  <div class="py-10 px-10" :class="background">
    <div class="grid md:grid-cols-2 mx-2 md:mx-3 lg:mx-4 items-center">
      <div class="order-2 flex justify-end max-w-[600px]">
        <div class="w-[70%] md:w-[100%]">
          <svg
            width="100%"
            viewBox="0 0 657 744"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M657 40C657 17.9086 639.091 0 617 0H181C158.909 0 141 17.9086 141 40V57C141 79.0914 123.091 97 101 97H40C17.9086 97 0 114.909 0 137V704C0 726.091 17.9086 744 40 744H141H617C639.091 744 657 726.091 657 704V97V40Z"
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
                  xlink:href="#image0_86_3396"
                  transform="matrix(0.00188737 0 0 0.00166667 -0.0190259 0)"
                />
              </pattern>
              <image
                id="image0_86_3396"
                width="550"
                height="600"
                preserveAspectRatio="xMidYMid slice"
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
