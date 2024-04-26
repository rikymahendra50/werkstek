<template>
  <div>
    <NuxtLink
      :to="link"
      class="grid grid-cols-8 grid-rows-1 mb-2 lg:mb-5 ounded-lg group hover:shadow-lg transition min-h-[150px] sm:min-h-[170px] md:min-h-[200px]"
      style="box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.05)"
    >
      <div
        class="grid col-span-4 md:col-span-4 md:min-h-[210px] h-full bg-no-repeat bg-cover rounded-lg relative text-white"
        :style="{
          backgroundImage: `url('${image}')`,
          background: `linear-gradient(90deg, rgba(251,249,249,0) 39%, rgba(255,255,255,1) 100%), url('${image}')`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }"
      >
        <div class="flex flex-col">
          <div
            class="bg-primary absolute flex items-center sm:py-1 px-1 sm:px-2 gap-1 md:gap-2 rounded-full ml-2 mt-2 text-[12px] sm:text-sm"
          >
            <div class="flex items-center gap-1 px-1">
              <img
                src="/images/icon-rating-white.svg"
                alt="page2"
                class="w-[14px]"
              />
              <span class="pt-[2px] text-[12px]">{{ rating }}</span>
            </div>
          </div>
          <span
            class="bg-primary absolute top-[20%] sm:top-[30%] md:top-[20%] left-0 flex sm:py-1 px-1 sm:px-2 rounded-full ml-2 mt-2 text-[12px] font-semibold"
          >
            <span>{{ type }}</span>
          </span>
        </div>
      </div>
      <div
        class="grid col-span-4 md:col-span-4 ml-3 sm:ml-4 md:ml-5 items-center md:pr-4 py-1"
      >
        <span class="text-[11px] sm:text-sm lg:text-base font-semibold">{{
          name
        }}</span>
        <span
          class="text-[10px] sm:text-sm text-ellipsis"
          v-if="address == null"
          >Address</span
        >
        <span
          class="text-[10px] sm:text-[12px] text-ellipsis line-clamp-1 lg:line-clamp-2 opacity-90"
          v-else
          >{{ address }}</span
        >
        <div class="flex justify-between">
          <span class="text-[10px] sm:text-sm font-bold">
            <span>{{ areaSize }} m<sup>2</sup></span>
          </span>
          <span class="text-[10px] sm:text-sm">+{{ phone }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-[10px] sm:text-sm">{{ price }} €</span>
          <span class="text-[10px] sm:text-sm">{{ email }}</span>
        </div>
        <div class="flex justify-end w-full">
          <div class="flex mt-2 sm:mt-0">
            <!-- <div
              class="text-primary group-hover:text-secondary transition sm:w-[90%] text-[12px] sm:text-[14px] md:text-[18px] border border-primary group-hover:border-secondary px-1 sm:px-2 lg:px-4 text-center rounded-full items-center flex justify-center"
            >
              {{ detailLinkTitle }}
            </div>
            <div
              class="bg-primary group-hover:bg-secondary max-w-[21px] min-h-[21px] sm:max-w-[31px] sm:min-h-[31px] lg:max-w-[41px] lg:min-h-[41px] rounded-full"
            >
              <img src="/images/arrow-right.svg" alt="arrow" />
            </div> -->
            <div
              class="flex relative bottom-0 mt-2 sm:mt-4 border border-primary group-hover:border-secondary w-fit items-center rounded-full"
            >
              <span
                class="py-2 pl-3 pr-2 sm:py-3 sm:pl-4 sm:pr-3 text-primary group-hover:text-secondary text-[10px] sm:text-sm font-medium"
                >{{ detailLinkTitle }}</span
              >
              <div
                class="bg-primary group-hover:bg-secondary w-[25px] h-[25px] sm:w-[37px] sm:h-[37px] rounded-full mr-1"
              >
                <img src="/images/arrow-right.svg" alt="arrow" />
              </div>
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
    areaSize: {
      type: [String, Number],
      default: "Opervlakte",
    },
    address: {
      type: [String, Number],
      default: "address",
    },
    latitude: {},
    longitude: {},
    image: {
      type: String,
      default: "/images/image-not-found.png",
    },
    rating: {
      default: "Rating",
    },
    type: {
      default: "Level type",
    },
    name: {},
    email: {
      type: String,
      default: "Mail Adres",
    },
    phone: {
      default: 31302393838,
    },
    price: {},
    detailLinkTitle: {
      type: String,
      default: "Neem een kijkje",
    },
  },
};
</script>
