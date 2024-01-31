<template>
  <NuxtLink
    to="/blog/riky-mahendra"
    class="text-primary1 text-[12px] md:text-[16px] border border-primary1 py-[1px] px-4 w-[60%] sm:w-[40%] md:w-[86%] lg:w-[80%] xl:w-[66%] text-center rounded-[14px]"
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
