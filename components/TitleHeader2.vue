<template>
  <div class="flex mt-5 mb-5 py-8 items-center w-[50%] relative">
    <div class="flex flex-col">
      <h3 class="text-primary1 font-bold text-[18px]">{{ title1 }}</h3>
      <h1 class="text-[40px] text-[#363636]">{{ title2 }}</h1>
      <p class="text-[#4A4A4A] text-[16px]">{{ title3 }}</p>
    </div>
    <img
      src="/images/bg-title.svg"
      alt="background-title"
      class="absolute w-[50%] lg:w-[60%] right-20"
    />
  </div>
</template>
<script>
export default {
  props: {
    title1: {
      type: String,
      required: false,
    },
    title2: {
      type: String,
      required: false,
    },
    title3: {
      type: String,
      required: false,
    },
  },
};
</script>
