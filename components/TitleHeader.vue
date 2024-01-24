<template>
  <div class="w-full flex items-center justify-center">
    <div class="flex flex-col justify-center items-center text-center my-5">
      <img
        src="/_nuxt/assets/images/bg-title.svg"
        alt="background-title"
        class="absolute w-[50%] lg:w-[30%]"
      />
      <p class="text-primary1 text-[14px] md:text-[18px]">{{ title }}</p>
      <p class="font-semibold text-[25px] sm:text-[40px] md:text-[50px]">
        {{ secondTitle }}
      </p>
      <p class="text-[12px] md:text-[15px] md:w-[50%]">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    secondTitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
};
</script>
