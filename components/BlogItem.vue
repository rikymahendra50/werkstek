<template>
  <ClientOnly>
    <NuxtLink :to="link">
      <div
        class="overflow-hidden p-1.5 transition-shadow hover:shadow-md duration-500 rounded-md"
      >
        <div class="min-h-[150px] sm:min-h-[250px]">
          <img
            :src="image"
            class="object-cover h-[150px] sm:h-[250px] w-full"
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
    link: { String },
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>
