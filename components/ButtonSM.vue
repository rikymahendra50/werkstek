<template>
  <NuxtLink
    :to="buttonLink"
    class="border border-quaternary hover:bg-opacity-60 transition rounded-full flex items-center gap-2 p-1 lg:px-2 w-fit"
  >
    <p class="pl-[2px] py-[1px] sm:p-3 text-[12px] lg:text-sm">
      {{ buttonTitle }}
    </p>
    <div
      class="rounded-full bg-quaternary text-white flex items-center justify-center aspect-square"
    >
      <img src="/images/arrow-small-right.svg" alt="arrow" class="sm:m-1" />
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
