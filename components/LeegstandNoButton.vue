<template>
  <div class="py-10" :class="background">
    <div class="flex mx-2 md:mx-3 lg:mx-4 items-center sm:flex-row flex-col">
      <img
        :src="image"
        :alt="imageAlt"
        class="max-w-[600px] w-[60%] sm:w-[50%] lg:w-[100%] order-1"
        :class="imageClasses"
      />
      <div class="flex-col mx-5" :class="textClasses">
        <h1
          class="text-[18px] md:text-[29px] lg:text-[36px] text-[#404040] md:my-6"
        >
          {{ title }}
        </h1>
        <p
          class="text-[12px] md:text-[14px] lg:text-[18px] leading-6 lg:leading-9 text-justify py-4"
        >
          {{ description }}
          <br />
          <div class="mt-7">
            <span class="text-[14px] text-[#777]">{{ titledescription2 }}</span> 
            <br />
            {{ description2 }}
          </div>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      required: false,
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
