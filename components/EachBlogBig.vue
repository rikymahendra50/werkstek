<template>
  <div
    class="mx-1 sm:mr-2 max-w-[366px] w-[50%] hover:shadow-md transition p-4 group"
  >
    <NuxtLink :to="link" class="card">
      <img :src="imageSrc" alt="imageBlog" class="w-full" />
      <span class="text-[14px] sm:text-[18px] md:text-[24px] font-semibold">
        {{ title }}
      </span>
      <span
        class="font-normal text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] py-3"
      >
        {{ description }}
      </span>
      <div class="flex">
        <div
          class="text-primary group-hover:text-secondary group-hover:border-secondary transition rounded-full text-[14px] sm:text-[16px] md:text-[20px] border border-primary px-2 w-full min-[420px]:w-[50%] md:w-[60%] lg:w-[60%] xl:w-[55%] text-center items-center flex justify-center"
        >
          Lees Verder
        </div>
        <div
          class="bg-primary group-hover:bg-secondary max-w-[41px] min-h-[41px] rounded-full"
        >
          <img src="/images/arrow-right.svg" alt="arrow" />
        </div>
      </div>
    </NuxtLink>
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
