<template>
  <NuxtLink
    :to="buttonLink"
    class="bg-primary w-full sm:w-[49%] py-2 rounded-full text-center max-h-[50px] text-[12px] md:text-[16px]"
  >
    <p class="text-[18px] text-center text-white font-thin">
      {{ buttonTitle }}
    </p>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    buttonTitle: {
      type: String,
      required: true,
    },
    buttonLink: {
      type: String,
      required: true,
    },
  },
};
</script>
