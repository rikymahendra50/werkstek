<template>
  <NuxtLink
    :to="buttonLink"
    class="border border-quaternary hover:border-secondary hover:text-secondary rounded-full flex items-center gap-2 p-1 px-1 lg:px-2"
  >
    <p class="p-1 sm:p-3 text-sm lg:text-base">{{ buttonTitle }}</p>
    <div
      class="rounded-full bg-quaternary hover:bg-secondary text-white flex items-center justify-center aspect-square"
    >
      <img src="/images/arrow-small-right.svg" alt="arrow" class="m-1" />
    </div>
  </NuxtLink>
</template>

<style scoped>
NuxtLink {
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
