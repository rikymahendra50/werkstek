<template>
  <div>
    <NuxtLink
      :to="`${link}`"
      class="grid grid-cols-8 grid-rows-1 mb-2 lg:mb-5 mx-2 sm:mx-0 rounded-lg group hover:shadow-lg transition min-h-[150px] sm:min-h-[170px] md:min-h-[200px]"
      style="box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.05)"
    >
      <div
        class="grid col-span-4 md:col-span-5 md:min-h-[210px] h-full bg-no-repeat bg-cover rounded-lg relative text-white"
        :style="{
          backgroundImage: `url('${image}')`,
          background: `linear-gradient(90deg, rgba(251,249,249,0) 39%, rgba(255,255,255,1) 100%), url('${image}')`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }"
      >
        <div class="flex flex-col">
          <span
            class="bg-primary absolute top-0 left-0 flex sm:py-1 px-1 sm:px-2 gap-1 md:gap-2 rounded-full ml-2 mt-2 text-[12px] sm:text-sm"
          >
            <img
              src="/images/icon-rating-white.svg"
              alt="page2"
              class="w-[14px]"
            />
            {{ rating }}
          </span>
          <span
            class="bg-primary absolute top-[20%] sm:top-[30%] md:top-[20%] left-0 flex sm:py-1 px-1 sm:px-2 rounded-full ml-2 mt-2 text-[12px] sm:text-sm font-semibold"
          >
            Regular
          </span>
        </div>
      </div>
      <div class="grid col-span-4 md:col-span-3 ml-5 items-center">
        <span class="text-[14px] sm:text-lg font-semibold">{{ name }}</span>
        <span class="text-sm">Adres</span>
        <div class="flex justify-between">
          <span class="text-[12px] sm:text-base font-bold"> Opervlakte </span>
          <span class="text-[12px] sm:text-base">phoneNumber</span>
        </div>
        <div class="flex justify-between">
          <span class="text-[12px] sm:text-base">€ {{ price }}</span>
          <span class="text-[12px] sm:text-base">mailAdres</span>
        </div>
        <div class="flex justify-end w-full">
          <div class="flex mt-2 sm:mt-0">
            <div
              class="text-primary group-hover:text-secondary transition sm:w-[90%] text-[12px] sm:text-[14px] md:text-[18px] border border-primary group-hover:border-secondary px-1 sm:px-2 lg:px-4 text-center rounded-full items-center flex justify-center"
            >
              {{ detailLinkTitle }}
            </div>
            <div
              class="bg-primary group-hover:bg-secondary max-w-[21px] min-h-[21px] sm:max-w-[31px] sm:min-h-[31px] lg:max-w-[41px] lg:min-h-[41px] rounded-full"
            >
              <img src="/images/arrow-right.svg" alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
    },
    opervlakte: {
      type: String,
    },
    image: {
      type: String,
      default: "/images/img-each-locatie-3.jpg",
    },
    rating: {
      type: Number,
      default: "Rating",
    },
    type: {
      type: String,
    },
    name: {
      type: String,
    },
    adres: {
      type: String,
      default: "Mail Adres",
    },
    phoneNumber: {
      type: String,
      default: "+31302393838",
    },
    price: {},
    detailLinkTitle: {
      type: String,
      default: "Neem een kijkje",
    },
  },
};
</script>
