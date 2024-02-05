<template>
  <div class="w-full flex items-center justify-center">
    <div class="flex flex-col justify-center items-center text-center py-10">
      <img
        src="/images/bg-title.svg"
        alt="background-title"
        class="absolute w-[50%] lg:w-[30%]"
      />
      <span class="text-primary text-[14px] md:text-[18px]">{{ title }}</span>
      <span class="font-semibold text-[25px] sm:text-[40px] md:text-[50px]">
        {{ secondTitle }}
      </span>
      <span class="text-[12px] md:text-[15px] md:w-[50%]">
        {{ description }}
      </span>
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
