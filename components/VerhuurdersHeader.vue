<template>
  <div
    class="bg-tertiary h-[850px] sm:h-[900px] lg:h-[1109px] relative flex items-center"
  >
    <span
      class="bg-bgdotSmall md:bg-bgdot bg-no-repeat bg-cover md:bg-auto w-[30%] lg:top-[-90px] h-full absolute lg:rotate-180 lg:right-0"
    ></span>
    <div class="grid md:grid-rows-1 md:grid-cols-2 z-10 px-5 md:px-0">
      <div class="container-custom flex items-center">
        <div class="grid">
          <p class="text-[19px] lg:text-[24px] text-[#1c1c1c]">{{ title1 }}</p>
          <p class="text-[35px] lg:text-[55px] text-[#231E1F] font-bold">
            {{ title2 }}
          </p>
          <p class="text-[12px] lg:text-[20px] text-[#1C1C1C]">
            {{ description1 }} <br />
            <br />
            {{ description2 }}
          </p>
          <div class="flex mt-5 w-[90%] lg:w-[80%] justify-between">
            <NuxtLink
              :to="buttonLink1"
              class="bg-primary1 py-3 px-6 rounded-[14px] drop-shadow-md text-white"
            >
              {{ buttonTitle }}
            </NuxtLink>
            <NuxtLink
              :to="buttonLink2"
              class="py-3 px-6 rounded-[14px] drop-shadow-md text-[16px] font-bold text-[#404040]"
            >
              {{ buttonTitle2 }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="grid relative mt-5 justify-items-end md:justify-items-center">
        <img
          :src="image"
          alt="image"
          class="z-10 w-[80%] sm:w-[60%] md:w-[70%] lg:w-[80%]"
        />
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
      required: false,
    },
    title1: {
      type: String,
      required: true,
    },
    title2: {
      type: String,
      required: true,
    },
    description1: {
      type: String,
      required: true,
    },
    description2: {
      type: String,
      required: true,
    },
    buttonTitle: {
      type: String,
      required: true,
    },
    buttonLink1: {
      type: String,
      required: true,
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
