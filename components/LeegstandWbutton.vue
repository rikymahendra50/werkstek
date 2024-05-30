<template>
  <div
    class="grid md:grid-cols-2 items-center container-custom my-10 lg:gap-6 min-[1231px]:gap-0"
  >
    <div class="flex sm:order-1 w-full">
      <div class="w-[70%] md:w-full">
        <img :src="image" alt="image" class="object-contain" />
      </div>
    </div>
    <div class="flex flex-col sm:mx-5 xl:mx-16 order-1 sm:order-2 w-full">
      <h1
        class="text-xl lg:text-[36px] text-[#404040] my-2 md:my-7 mt-4 font-bold"
      >
        {{ title }}
      </h1>
      <p
        class="text-[12px] md:text-[14px] lg:text-[16px] leading-6 lg:leading-9 text-justify pr-3 sm:pr-6 md:pr-[30px] lg:pr-[40px] xl:pr-[106px]"
      >
        {{ description }}
      </p>
      <div
        class="grid min-[350px]:grid-cols-12 min-[903px]:grid-cols-12 items-center gap-4 lg:gap-0 my-5"
      >
        <ButtonPrimary
          :buttonTitle="buttonTitle1"
          :buttonLink="buttonLink1"
          class="w-fit col-span-4 lg:col-span-4"
        />
        <ButtonSM
          :buttonTitle="buttonTitle2"
          :buttonLink="buttonLink2"
          class="col-span-7 lg:col-span-7"
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
