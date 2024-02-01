<template>
  <NuxtLink
    to="/blog/riky-mahendra"
    class="text-white text-[12px] md:text-[16px] border bg-primary py-2 px-4 w-[60%] sm:w-[40%] md:w-[86%] lg:w-[78%] xl:w-[59%] text-center rounded-[14px]"
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
