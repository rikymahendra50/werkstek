<template>
  <div class="w-full flex items-center justify-center relative">
    <div class="flex flex-col justify-center items-center text-center py-10">
      <img
        src="/images/bg-title.svg"
        alt="background-title"
        class="absolute w-[50%] lg:w-[30%] lg:bottom-10"
      />
      <span class="text-primary text-[16px]">{{ title }}</span>
      <span
        class="font-semibold text-[25px] sm:text-[44px]"
        v-html="secondTitle"
      >
      </span>
      <span
        class="text-sm md:w-[100%] text-center"
        v-html="description"
        v-if="description"
      ></span>
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
