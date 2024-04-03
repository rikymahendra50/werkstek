<template>
  <div class="py-10 px-3 md:container-custom" :class="background">
    <div class="grid md:grid-cols-2 mx-2 md:mx-3 lg:mx-4 items-center">
      <div class="order-2 flex justify-end max-w-[600px]">
        <div class="w-[70%] md:w-[100%]">
          <img :src="image" alt="image" />
        </div>
      </div>

      <div class="flex-col mx-5" :class="textClasses">
        <h1
          class="text-[18px] md:text-[26px] lg:text-[30px] text-[#404040] mb-3 md:my-6 font-bold"
        >
          {{ title }}
        </h1>
        <span
          class="text-[12px] md:text-[14px] lg:text-[16px] leading-6 lg:leading-9 text-justify py-4"
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
