<template>
  <div class="py-10 px-10" :class="background">
    <div class="grid md:grid-cols-2 mx-2 md:mx-3 lg:mx-4 items-center">
      <div class="order-2 flex justify-end max-w-[600px]">
        <div class="w-[70%] md:w-[100%]">
          <svg
            viewBox="0 0 597 632"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M597 40C597 17.9086 579.091 0 557 0H145C122.909 0 105 17.9086 105 40V41.9942C105 64.0856 87.0914 81.9942 65 81.9942H40C17.9086 81.9942 0 99.9028 0 121.994V592C0 614.091 17.9086 632 40 632H105H557C579.091 632 597 614.091 597 592V81.9942V40Z"
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
                  xlink:href="#image0_86_3523"
                  transform="matrix(0.00176144 0 0 0.00166389 -0.0284325 0)"
                />
              </pattern>
              <image
                id="image0_86_3523"
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
