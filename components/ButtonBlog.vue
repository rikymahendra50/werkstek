<template>
  <NuxtLink
    to="/blog/riky-mahendra"
    class="text-primary1 text-[14px] sm:text-[16px] md:text-[20px] border border-primary1 py-[3px] px-4 w-[60%] sm:w-[40%] md:w-[66%] text-center rounded-[14px] mt-2"
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
