<template>
  <div class="flex">
    <img
      :src="imageSrc"
      alt="image-person2"
      class="max-w-[176px] max-h-[154px] mx-2 w-full"
    />
    <div class="flex-col flex">
      <h1 class="text-[14px] lg:text-[18px] font-bold">
        {{ title }}
      </h1>
      <p class="text-[12px] lg:text-[14px]">
        {{ description }}
      </p>
      <ButtonBlog :perBlogLink="link" v-if="showButton" class="mt-4" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showButton: {
      type: Boolean,
      default: true,
    },
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
