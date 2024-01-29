<template>
  <NuxtLink
    :to="buttonLink"
    class="bg-[#F0912D] w-[25%] md:w-[40%] max-w-[172px] h-[30px] lg:h-[52px] rounded-[14px] flex items-center justify-center cursor-pointer"
  >
    <span
      class="text-[12px] md:text-[14px] sm:font-bold text-center text-white"
    >
      {{ buttonTitle }}
    </span>
  </NuxtLink>
</template>

<style scoped>
a {
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25);
}
</style>

<script>
export default {
  props: {
    buttonTitle: {
      type: String,
      default: "Uitgebreid zoeken",
    },
    buttonLink: {
      type: String,
    },
  },
};
</script>
