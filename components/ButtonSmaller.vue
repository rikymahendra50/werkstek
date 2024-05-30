<template>
  <NuxtLink
    :to="buttonLink"
    class="rounded-full flex items-center gap-2 p-1 px-1 lg:px-4 bg-[#576855] hover:bg-primary transition"
  >
    <span class="p-1 sm:p-3 text-[12px] sm:text-sm lg:text-base">{{
      buttonTitle
    }}</span>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    buttonTitle: {
      type: String,
    },
    buttonLink: {
      type: String,
    },
  },
};
</script>
