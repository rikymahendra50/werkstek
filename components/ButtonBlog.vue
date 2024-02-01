<template>
  <NuxtLink
    to="/blog/riky-mahendra"
    class="text-primary text-[14px] sm:text-[16px] md:text-[20px] border border-primary py-[3px] px-4 w-[60%] sm:w-[40%] md:w-[66%] lg:w-[65%] text-center rounded-[14px]"
    >{{ titleButton }}</NuxtLink
  >
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
