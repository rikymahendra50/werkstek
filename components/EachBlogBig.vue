<template>
  <div
    class="overflow-hidden mx-1 sm:mr-2 max-w-[366px] w-[50%] hover:shadow-md transition flex flex-col p-1 sm:p-4 group cursor-pointer relative"
  >
    <NuxtLink :to="link" class="card h-full">
      <img
        :src="imageSrc"
        alt="imageBlog"
        class="w-full min-h-[190px] md:max-h-[296px] object-cover"
      />
      <span
        class="text-[14px] sm:text-[18px] md:text-[20px] font-semibold line-clamp-1 sm:line-clamp-none my-1"
      >
        {{ title }}
      </span>
      <p
        class="font-normal text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] line-clamp-3 my-2"
      >
        {{ description }}
      </p>
    </NuxtLink>
    <div class="flex relative bottom-0 mt-2">
      <div class="flex h-full w-full">
        <div
          class="text-primary group-hover:text-secondary group-hover:border-secondary transition rounded-full text-[12px] sm:text-[16px] md:text-[20px] border border-primary px-2 w-full min-[420px]:w-[50%] md:w-[60%] lg:w-[60%] xl:w-[55%] text-center items-center flex justify-center"
        >
          Lees Verder
        </div>
        <NuxtLink
          :to="link"
          class="bg-primary group-hover:bg-secondary max-w-[41px] min-h-[41px] rounded-full"
        >
          <img src="/images/arrow-right.svg" alt="arrow" />
        </NuxtLink>
      </div>
    </div>
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
