<template>
  <div
    class="relative text-left px-5 py-5 rounded-[16px] flex flex-col box-shadow2 my-10"
  >
    <img
      :src="imageSrc"
      alt="testimonial1"
      class="aspect-square max-w-[100px] object-cover absolute rounded-full mt-[-50px] box-shadow-testimony-img"
    />
    <p
      class="text-[14px] md:text-[16px] leading-6 md:leading-8 text-[#3D3D3D] pt-16 md:pt-20"
    >
      {{ description }}
    </p>
    <hr
      class="border-t-[0.25pxs] border-quaternary my-[16px] md:my-[36px] w-[90%]"
    />
    <div class="flex items-center">
      <div>
        <p class="text-[14px] md:text-[16px]">
          {{ testimonyName }}
        </p>
        <p
          class="font-medium text-[12px] md:text-[14px] md:leading-7 text-[#999999]"
        >
          {{ position }}
        </p>
      </div>
      <div class="ml-auto">
        <img
          src="/images/star-rating-1.svg"
          alt="star-rating"
          class="w-[60%] md:w-full"
        />
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
