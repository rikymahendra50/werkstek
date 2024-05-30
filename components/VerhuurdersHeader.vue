<template>
  <div class="py-10 relative flex items-center">
    <div
      class="grid md:grid-rows-1 md:grid-cols-2 z-10 px-3 sm:px-6 md:px-[70px] lg:px-[80px]"
    >
      <div class="mx-auto flex items-center">
        <div class="grid gap-2">
          <div class="pr-4 lg:pr-10 grid gap-4">
            <p class="text-[16px] lg:text-[20px] text-[#1c1c1c]">
              {{ title1 }}
            </p>
            <p class="text-[30px] lg:text-[40px] text-[#231E1F] font-bold">
              {{ title2 }}
            </p>
            <p class="text-[12px] lg:text-[16px] text-[#1C1C1C] w-[90%] mt-2">
              {{ description1 }} <br />
              <br />
              {{ description2 }}
            </p>
          </div>

          <div
            class="flex md:grid lg:flex mt-5 lg:mt-10 gap-4 w-full min-[420px]:w-[70%] sm:w-[60%] md:w-[98%] lg:w-[90%]"
          >
            <ButtonPrimary
              :buttonLink="buttonLink1"
              :buttonTitle="buttonTitle1"
              class="w-fit"
            />
            <template v-if="useButton2">
              <ButtonSM :buttonTitle="buttonTitle2" :buttonLink="buttonLink2" />
            </template>
          </div>
        </div>
      </div>
      <div class="grid relative mt-5 justify-items-end md:justify-items-center">
        <div class="z-10 w-[90%] min-[500px]:w-[80%] md:w-[100%]">
          <img :src="image" alt="image" />
        </div>
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
    buttonTitle1: {
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
    useButton2: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
