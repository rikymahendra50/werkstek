<template>
  <div
    class="relative text-left px-5 py-5 rounded-[16px] flex flex-col box-shadow2 my-10 h-[320px] lg:h-[300px] mx-1"
  >
    <div class="flex flex-col justify-between gap-2 h-full">
      <!-- <img
        :src="imageSrc"
        alt="person-testimonial"
        class="rounded-full max-w-[80px] mt-[-30px]"
      /> -->
      <img
        src="/images/icon-werstek.svg"
        alt="icon-werkstek"
        class="max-w-[80px] mt-[-30px]"
      />
      <p
        class="text-[12px] sm:text-[14px] 2xl:text-[18px] text-[#3D3D3D] leading-normal"
      >
        {{ description }}
      </p>
      <div class="grid grid-cols-2 pt-2 border-t">
        <div class="flex flex-col text-sm gap-1 text-[10px]">
          <p class="font-bold text-[12px]">{{ testimonyName }}</p>
          <p class="text-sm">{{ position }}</p>
        </div>
        <div class="flex items-center justify-end">
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
  },
};
</script>
