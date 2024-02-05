<template>
  <div class="transition hover:shadow-xl p-2">
    <NuxtLink :to="link" class="flex">
      <img
        :src="imageSrc"
        alt="image-person2"
        class="max-w-[176px] max-h-[154px] mx-2 w-full"
      />
      <div class="flex-col flex">
        <h1 class="text-[14px] xl:text-[18px] font-bold">
          {{ title }}
        </h1>
        <p class="text-[12px] xl:text-[14px] line-clamp-3">
          {{ description }}
        </p>
        <ButtonBlogSmall
          :perBlogLink="link"
          v-if="showButton"
          class="md:mt-4 hover:bg-secondary"
        />
      </div>
    </NuxtLink>
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
