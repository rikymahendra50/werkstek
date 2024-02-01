<template>
  <div class="card mr-5 max-w-[366px] w-[50%]">
    <img :src="imageSrc" alt="imageBlog" class="w-full" />
    <span class="text-[14px] sm:text-[18px] md:text-[24px] font-semibold">
      {{ title }}
    </span>
    <span
      class="font-normal text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] py-3"
    >
      {{ description }}
    </span>
    <ButtonBlog :perBlogLink="link" />
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    link: {
      type: String,
    },
  },
};
</script>
