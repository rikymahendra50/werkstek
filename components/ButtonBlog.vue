<template>
  <NuxtLink to="/blog/riky-mahendra" class="flex">
    <div
      class="text-primary hover:text-secondary transition rounded-full text-[14px] sm:text-[16px] md:text-[20px] border border-primary hover:border-secondary px-2 w-full min-[420px]:w-[50%] md:w-[60%] lg:w-[60%] xl:w-[55%] text-center items-center flex justify-center"
    >
      {{ titleButton }}
    </div>
    <div class="bg-primary max-w-[41px] min-h-[41px] rounded-full">
      <img src="/images/arrow-right.svg" alt="arrow" />
    </div>
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
