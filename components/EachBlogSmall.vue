<template>
  <ClientOnly>
    <div class="group hover:shadow-xl transition cursor-pointer p-1 rounded-sm">
      <NuxtLink :to="link" class="flex">
        <img
          :src="imageSrc"
          alt="image-person2"
          class="max-w-[176px] max-h-[154px] mr-2 w-full"
        />
        <div class="flex-col flex w-full justify-between">
          <h1 class="text-[14px] xl:text-[16px] font-bold line-clamp-2">
            {{ title }}
          </h1>
          <p class="text-[12px] line-clamp-2 opacity-80">
            {{ description }}
          </p>
          <div
            v-if="showButton"
            class="text-white text-[12px] md:text-[14px] md:mt-4group-hover:text-secondary group-hover:bg-secondary transition rounded-full bg-primary py-2 px-4 w-[60%] sm:w-[50%] md:w-[78%] lg:w-[80%] xl:w-[59%] max-w-[150px] text-center"
          >
            {{ titleButton }}
          </div>
        </div>
      </NuxtLink>
    </div>
  </ClientOnly>
</template>

<script>
export default {
  props: {
    titleButton: {
      type: String,
      default: "Lees verder",
    },
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
