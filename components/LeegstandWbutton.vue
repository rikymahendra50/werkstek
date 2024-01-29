<template>
  <div class="flex mx-2 md:mx-3 lg:mx-4 items-center sm:flex-row flex-col">
    <img
      :src="image"
      :alt="imageAlt"
      class="max-w-[600px] w-[90%] sm:w-[50%] lg:w-[100%] order-2 sm:order-1"
    />
    <div class="flex flex-col mx-5 xl:mx-20 order-1 sm:order-2">
      <h1 class="text-[18px] lg:text-[36px] text-[#404040] md:my-10 mt-4">
        {{ title }}
      </h1>
      <p class="text-[12px] md:text-[16px] leading-6 lg:leading-9 text-justify">
        {{ description }}
      </p>
      <div class="flex items-center my-5 w-[90%] gap-5">
        <NuxtLink
          :to="buttonLink1"
          class="text-[14px] bg-primary1 px-4 rounded-[14px] drop-shadow-md text-white lg:w-[100%] py-2 max-w-[172px] max-h-[52px] flex justify-center items-center"
        >
          {{ buttonTitle1 }}
        </NuxtLink>
        <NuxtLink :to="buttonLink2" class="rounded-[14px] drop-shadow-md">
          {{ buttonTitle2 }}
        </NuxtLink>
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
    imageAlt: {
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
