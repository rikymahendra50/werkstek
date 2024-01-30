<template>
  <NuxtLink
    :to="buttonLink"
    class="bg-primary1 max-w-[172px] h-[30px] sm:h-[40px] lg:h-[52px] px-3 lg:px-5 rounded-[14px] flex items-center justify-center cursor-pointer"
  >
    <span
      class="text-[10px] min-[400px]:text-[12px] md:text-[14px] sm:font-bold text-center text-white"
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
