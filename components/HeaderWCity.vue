<template>
  <section class="relative flex items-center">
    <div
      class="grid md:grid-rows-1 md:grid-cols-2 z-10 bg-[url('/images/bg-header-w-city.jpg')] bg-no-repeat bg-cover w-full container-custom"
    >
      <div class="flex items-center min-h-[468px]">
        <div class="w-full">
          <p class="text-[24px]">{{ title1 }}</p>
          <h1
            class="text-4xl md:text-[35px] font-semibold lg:text-[45px] text-[#231E1F] lg:leading-[64px]"
          >
            {{ title2 }}
          </h1>
          <p
            class="text-[20px] text-[#6E6E6E] leading-8 mt-3 lg:mt-4 font-medium"
          >
            {{ description }}
          </p>
        </div>
      </div>
      <div class="hidden sm:grid relative mt-5 justify-items-center items-end">
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
