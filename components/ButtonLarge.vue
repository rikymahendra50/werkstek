<template>
  <NuxtLink
    :to="buttonLink"
    class="bg-primary1 w-full sm:w-[49%] py-2 text-center max-h-[40px] text-[12px] md:text-[16px] rounded-[8px] md:rounded-[10px]"
  >
    <p class="white text-[18px] text-center text-white">
      {{ buttonTitle }}
    </p>
  </NuxtLink>
</template>

<style scoped>
/* button {
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25);
  padding: 20px, 40px, 20px, 40px;
} */
</style>

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
