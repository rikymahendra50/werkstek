<template>
  <div
    :to="perBlogLink"
    class="text-white text-[12px] md:text-[16px] border rounded-full bg-primary py-2 px-4 w-[60%] sm:w-[50%] md:w-[78%] lg:w-[80%] xl:w-[59%] max-w-[150px] text-center"
  >
    {{ titleButton }}
  </div>
</template>

<script>
export default {
  props: {
    titleButton: {
      type: String,
      default: "Lees verder",
    },
  },
};
</script>
