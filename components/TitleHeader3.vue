<template>
  <div class="w-full flex items-center justify-center">
    <div
      class="flex flex-col justify-center items-center text-center py-10 gap-1"
    >
      <img
        src="/images/bg-title.svg"
        alt="background-title"
        class="absolute w-[50%] lg:w-[30%]"
      />
      <span class="text-primary text-[16px]">{{ title }}</span>
      <span
        class="font-semibold text-[25px] sm:text-[44px] md:text-[2.6rem]"
        v-html="secondTitle"
      >
      </span>
      <span
        class="px-2 text-[10px] min-[420px]:text-[13px] md:text-sm md:w-[100%] text-center"
        v-html="description"
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
