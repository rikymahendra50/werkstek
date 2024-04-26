<template>
  <ClientOnly>
    <div
      class="overflow-hidden sm:mr-2 max-w-[366px] min-[420px]:w-[50%] hover:shadow-md transition flex flex-col group cursor-pointer relative"
    >
      <NuxtLink :to="link" class="card h-full mx-2">
        <div class="min-h-[130px] sm:min-h-[200px] md:min-h-[250px]">
          <img
            :src="imageSrc"
            alt="imageBlog"
            class="w-full object-cover h-full"
          />
        </div>
        <div class="py-2 flex flex-col h-full justify-around">
          <span
            class="text-[14px] sm:text-[18px] font-semibold line-clamp-1 sm:line-clamp-none my-1"
          >
            {{ title }}
          </span>
          <p
            class="font-normal text-[12px] sm:text-[14px] line-clamp-2 my-2 min-h-[40px] sm:min-h-[70px] text-[#383838] opacity-80"
          >
            {{ description }}
          </p>
          <div
            class="flex relative bottom-0 mt-2 sm:mt-4 border border-primary group-hover:border-secondary w-fit items-center rounded-full"
          >
            <span
              class="py-2 pl-3 pr-2 sm:py-3 sm:pl-6 sm:pr-3 text-primary group-hover:text-secondary text-[10px] sm:text-sm font-medium"
              >Lees Verder</span
            >
            <div
              class="bg-primary group-hover:bg-secondary w-[25px] h-[25px] sm:w-[37px] sm:h-[37px] rounded-full mr-1"
            >
              <img src="/images/arrow-right.svg" alt="arrow" />
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </ClientOnly>
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
