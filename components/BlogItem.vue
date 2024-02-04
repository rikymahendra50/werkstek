<template>
  <ClientOnly>
    <NuxtLink to="/blog/example">
      <div
        class="overflow-hidden p-1.5 transition-shadow hover:shadow-md duration-500 rounded-md"
      >
        <div class="h-[250px] w-full">
          <img
            :src="image"
            class="object-cover w-[400px] h-[250px]"
            alt="image-page8-1"
          />
        </div>

        <h4 class="text-[#404040] text-[14px] md:text-[16px] py-2 md:py-5">
          {{ title }}
        </h4>
        <p
          class="text-[#777] text-[14px] md:text-[16px] md:leading-9 line-clamp-3"
        >
          {{ description }}
        </p>
      </div>
    </NuxtLink>
  </ClientOnly>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
