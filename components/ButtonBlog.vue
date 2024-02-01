<template>
  <NuxtLink to="/blog/riky-mahendra" class="flex">
    <NuxtLink
      to="/blog/riky-mahendra"
      class="text-primary text-[14px] sm:text-[16px] md:text-[20px] border border-primary py-[3px] px-4 w-[55%] sm:w-[35%] md:w-[60%] lg:w-[50%] text-center rounded-[14px] items-center flex justify-center"
      >{{ titleButton }}</NuxtLink
    >
    <img src="images/rounded-arrow.svg" alt="rounded-arrow" />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    perBlogLink: {
      type: String,
      default: "#",
    },
    titleButton: {
      type: String,
      default: "Lees verder",
    },
  },
};
</script>
