<template>
  <div
    class="relative text-left px-5 py-5 rounded-[16px] flex flex-col box-shadow2 my-10 h-[320px] xl:h-[380px] mx-1"
  >
    <div class="flex flex-col justify-between gap-2 h-full">
      <!-- /images/icon-werstek.svg -->
      <img
        :src="imageSrc"
        :alt="imageAlt"
        class="w-[80px] min-[1300px]:w-[90px] aspect-square min-w-[1300px]:h-[90px] mt-[-30px] rounded-full border"
      />
      <p
        class="text-[12px] sm:text-[14px] 2xl:text-[18px] text-[#3D3D3D] leading-normal overflow-y-auto max-h-[100px] lg:max-h-[150px] xl:max-h-[240px]"
        v-html="description"
      ></p>
      <div class="grid grid-cols-12 pt-2 border-t">
        <div class="flex flex-col text-sm gap-1 text-[10px] col-span-8">
          <p class="font-bold text-[12px] xl:text-sm">{{ testimonyName }}</p>
          <p class="text-sm xl:text-base">{{ position }}</p>
        </div>
        <div class="flex items-center justify-end col-span-4">
          <Icon
            name="ic:round-star"
            class="text-[#da9a3b] w-4"
            v-for="index in 4"
          />
        </div>
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
    description: {
      type: String,
    },
    testimonyName: {
      type: String,
    },
    position: {
      type: String,
    },
    imageAlt: {
      type: String,
    },
  },
};
</script>
