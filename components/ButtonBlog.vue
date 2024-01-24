<template>
  <a
    :href="perBlogLink"
    class="text-primary1 text-[14px] sm:ext-[16px] md:text-[20px] border border-primary1 py-1 px-4 md:w-[66%] text-center rounded-[14px] sm:w-[40%] mt-2"
    >{{ titleButton }}</a
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
