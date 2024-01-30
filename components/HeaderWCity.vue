<template>
  <section class="bg-tertiary relative flex items-center">
    <div class="grid md:grid-rows-1 md:grid-cols-2 z-10">
      <div class="container-custom flex items-center py-24">
        <div class="grid lg:ml-10">
          <p class="text-[19px] lg:text-[24px]">{{ title1 }}</p>
          <h1
            class="text-[35px] lg:text-[55px] text-[#231E1F] lg:leading-[74px]"
          >
            {{ title2 }}
          </h1>
          <p
            class="text-[14px] lg:text-[20px] text-[#6E6E6E] leading-8 lg:mt-5"
          >
            {{ description }}
          </p>
        </div>
      </div>
      <div class="hidden md:grid relative mt-5 justify-items-center items-end">
        <img alt="image" class="z-10 max-w-[532px] w-[90%]" :src="imageSrc" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title1: {
      type: String,
      required: true,
    },
    title2: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: false,
      default: "/images/bg-title.svg",
    },
  },
};
</script>
