<template>
  <NuxtLink to="/blog/riky-mahendra" class="flex">
    <div
      class="text-primary hover:text-secondary text-[14px] sm:text-[16px] md:text-[20px] border border-primary hover:border-secondary py-[3px] px-4 w-[55%] sm:w-[35%] md:w-[60%] lg:w-[50%] text-center rounded-[14px] items-center flex justify-center"
    >
      {{ titleButton }}
    </div>
    <!-- <img src="images/rounded-arrow.svg" alt="rounded-arrow" /> -->
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
