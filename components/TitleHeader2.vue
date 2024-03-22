<template>
  <div class="flex mt-5 mb-5 py-8 items-center w-[50%] relative">
    <div class="flex flex-col">
      <h3 class="text-primary font-bold text-[18px] xl:text-[22px]">
        {{ title1 }}
      </h3>
      <h1 class="text-[30px] lg:text-[40px] text-[#363636]">{{ title2 }}</h1>
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
