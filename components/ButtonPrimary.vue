<template>
  <NuxtLink
    :to="buttonLink"
    class="border bg-primary hover:bg-secondary transition text-sm rounded-full flex items-center justify-center lg:gap-2 py-2 md:py-1 px-2 sm:px-1 lg:px-2 xl:px-4 text-tertiary max-w-[184px]"
  >
    <p class="p-1 sm:p-3 font-medium text-[12px] sm:text-sm lg:text-base">
      {{ buttonTitle }}
    </p>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    buttonLink: {
      type: String,
    },
    buttonTitle: {
      type: String,
    },
  },
};
</script>
