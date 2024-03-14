<template>
  <ClientOnly>
    <div
      class="overflow-hidden sm:mr-2 max-w-[366px] min-[420px]:w-[50%] hover:shadow-md transition flex flex-col group cursor-pointer relative"
    >
      <NuxtLink :to="link" class="card h-full mx-2">
        <div class="min-h-[170px] sm:min-h-[200px] md:min-h-[290px]">
          <img
            :src="imageSrc"
            alt="imageBlog"
            class="w-full object-cover h-full"
          />
        </div>
        <div class="p-4 flex flex-col">
          <span
            class="text-[14px] sm:text-[18px] md:text-[20px] font-semibold line-clamp-1 sm:line-clamp-none my-1"
          >
            {{ title }}
          </span>
          <p
            class="font-normal text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] line-clamp-3 my-2 min-h-[40px] sm:min-h-[70px]"
          >
            {{ description }}
          </p>
          <div class="flex relative bottom-0 mt-2 sm:mt-4">
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
