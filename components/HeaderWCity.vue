<template>
  <section class="relative flex items-center">
    <div
      class="grid md:grid-rows-1 md:grid-cols-2 z-10 bg-[url('/images/bg-header-w-city.jpg')] bg-no-repeat bg-cover w-full container-custom"
    >
      <div class="flex items-center min-h-[340px] sm:min-h-[468px]">
        <div class="w-full grid gap-3">
          <p class="text-[20px]">{{ title1 }}</p>
          <h1
            class="text-2xl md:text-[28px] font-semibold lg:text-[38px] text-[#231E1F] lg:leading-[64px]"
          >
            {{ title2 }}
          </h1>
          <p
            class="text-[12px] sm:text-[14px] text-[#6E6E6E] leading-8 font-medium"
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
