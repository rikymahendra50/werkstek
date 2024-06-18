<template>
  <div class="flex mt-5 mb-5 py-8 items-center lg:w-[50%] relative">
    <div class="flex flex-col gap-2">
      <h3 class="text-primary font-bold text-[18px]">
        {{ title1 }}
      </h3>
      <h1 class="text-[22px] sm:text-[30px] font-medium text-[#363636]">
        {{ title2 }}
      </h1>
      <p class="text-[#4A4A4A] text-[16px]">{{ title3 }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title1: {
      type: String,
      default: "locatie",
    },
    title2: {
      type: String,
    },
    title3: {
      type: String,
      default: "Categorie",
    },
  },
};
</script>
