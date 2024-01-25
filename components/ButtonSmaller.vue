<template>
  <NuxtLink
    :to="buttonLink"
    class="rounded-[14px] drop-shadow-md text-[#404040]"
  >
    {{ buttonTitle }}
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
