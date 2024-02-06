<template>
  <section class="py-20">
    <TitleHeader
      title="Onze locaties"
      secondTitle="Bekijk al onze locaties"
      description="Op deze locaties hebben we kantoorruimtes"
    />
    <div class="container-custom flex flex-col lg:flex-row" v-if="showLocaties">
      <div class="w-full lg:w-[35%]">
        <p class="text-base opacity-50">Kies een locatie</p>
        <details class="dropdown">
          <summary
            class="m-1 btn bg-[white] normal-case font-normal w-[300px] max-w-[90%] justify-between"
          >
            <div class="flex items-center">
              <img src="/images/location.svg" class="pl-1 pr-3" />
              Utrecht
            </div>

            <img src="/images/arrow-down.svg" class="p-1" />
          </summary>
          <ul
            class="p-2 shadow menu dropdown-content z-[1] bg-white rounded-[8px] w-[90%]"
          >
            <li class="py-1 text-md"><button>Utrecht</button></li>
            <li class="py-1 text-md"><button>Other item..</button></li>
          </ul>
        </details>
        <div class="flex flex-col">
          <p class="text-base mt-3 opacity-50 pb-3">Soort locatie</p>
          <div class="grid grid-cols-2 grid-rows-2 gap-2">
            <Checkbox titleCheckBox="Alles" />
            <Checkbox titleCheckBox="Flex plek" />
            <Checkbox titleCheckBox="Kantoorruimte" />
            <Checkbox titleCheckBox="Anders" />
          </div>
          <SliderRange
            title="De prijs per maand"
            :minPrice="250"
            :maxPrice="850"
            :minRange="250"
            :maxRange="850"
            :priceGap="500"
            class="my-2"
          />
          <div class="w-[80%]">
            <p class="text-sm mt-3 opacity-50">De opervlakte m²</p>
            <div class="flex my-2">
              <div class="w-[50%] relative">
                <input
                  type="text"
                  placeholder="Min"
                  class="input input-bordered w-[90%] p-[10px] mr-2 input-md"
                />
                <span class="absolute top-3 right-6">m<sup>2</sup></span>
              </div>
              <div class="w-[50%] relative">
                <input
                  type="text"
                  placeholder="Max"
                  class="input input-bordered w-[90%] p-[10px] input-md"
                />
                <span class="absolute top-3 right-6">m<sup>2</sup></span>
              </div>
            </div>
          </div>
          <p class="my-3">-</p>
          <div class="flex justify-between">
            <div class="flex flex-col w-[33%] gap-2">
              <Checkbox titleCheckBox="Wifi" />
              <Checkbox titleCheckBox="Parkeerplaats" />
              <Checkbox titleCheckBox="Receptie" />
              <Checkbox titleCheckBox="Koffiebar" />
            </div>
            <div class="flex flex-col w-[67%] gap-2">
              <Checkbox titleCheckBox="Keuken" />
              <Checkbox titleCheckBox="Vlakbij het treinstation" />
              <Checkbox titleCheckBox="Loungeplekken" />
              <Checkbox titleCheckBox="Vergaderruimtes met videoschermen" />
            </div>
          </div>
          <img
            src="/images/Filter Icon.svg"
            alt="filter"
            class="w-8 h-8 mt-3"
          />
          <p class="text-base mt-3 opacity-50">Meer filter opties</p>
        </div>
      </div>
      <div
        class="py-5 lg:w-[65%] overflow-auto max-h-[400px] md:max-h-[870px] flex flex-col"
      >
        <div v-for="items in eachLocaties" :key="items.id">
          <NuxtLink
            :to="items.detailLink"
            class="grid grid-cols-8 grid-rows-1 mb-2 lg:mb-5 mx-2 sm:mx-0 rounded-lg shadow-md"
          >
            <div
              class="grid col-span-4 md:col-span-5 h-[100px] md:min-h-[210px] bg-no-repeat bg-cover rounded-lg relative text-white"
              :style="{
                backgroundImage: `url('${items.image}')`,
                background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%), url('${items.image}')`,
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
                  {{ items.rating }}
                </span>
                <span
                  class="bg-primary absolute top-[30%] md:top-[20%] left-0 flex sm:py-1 px-1 sm:px-2 rounded-full ml-2 mt-2 text-[12px] sm:text-sm font-semibold"
                >
                  {{ items.type }}
                </span>
              </div>
            </div>
            <!-- problem -->
            <div class="grid col-span-4 md:col-span-3 ml-5 items-center">
              <span class="text-[14px] sm:text-lg font-semibold">{{
                items.locatie
              }}</span>
              <span class="text-sm">{{ items.adres }}</span>
              <div class="flex justify-between">
                <span class="text-[12px] sm:text-base font-bold">{{
                  items.opervlakte
                }}</span>
                <span class="text-[12px] sm:text-base">{{
                  items.phoneNumber
                }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[12px] sm:text-base">{{
                  items.pricePerMonth
                }}</span>
                <span class="text-[12px] sm:text-base">{{
                  items.mailAdres
                }}</span>
              </div>
              <div class="flex justify-end w-full">
                <div class="flex mt-2 sm:mt-0">
                  <div
                    class="text-primary hover:text-secondary transition sm:w-[90%] text-[12px] sm:text-[14px] md:text-[18px] border border-primary hover:border-secondary px-1 sm:px-2 lg:px-4 text-center rounded-full items-center flex justify-center"
                  >
                    {{ items.detailLinkTitle }}
                  </div>
                  <div
                    class="bg-primary max-w-[21px] min-h-[21px] sm:max-w-[31px] sm:min-h-[31px] lg:max-w-[41px] lg:min-h-[41px] rounded-full"
                  >
                    <img src="/images/arrow-right.svg" alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
            <!-- problem -->
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      eachLocaties: [
        {
          id: 1,
          image: "/images/img-each-locatie-1.png",
          type: "Regular",
          locatie: "Locatie",
          adres: "Adres",
          opervlakte: "Opervlakte",
          pricePerMonth: "€ 495 p/maand",
          phoneNumber: "+31302393838",
          mailAdres: "Mail adres",
          detailLinkTitle: "Neem een kijkje",
          detailLink: "/onze-locaties/rikymahendra",
          rating: 9.4,
        },
        {
          id: 2,
          image: "/images/img-each-locatie-2.jpg",
          type: "Premium",
          locatie: "Locatie",
          adres: "Adres",
          opervlakte: "Opervlakte",
          pricePerMonth: "€ 495 p/maand",
          phoneNumber: "+31302393838",
          mailAdres: "Mail adres",
          detailLinkTitle: "Neem een kijkje",
          detailLink: "/onze-locaties/rikymahendra",
          rating: 9.4,
        },
        {
          id: 3,
          image: "/images/img-each-locatie-3.jpg",
          type: "Premium",
          locatie: "Locatie",
          adres: "Adres",
          opervlakte: "Opervlakte",
          pricePerMonth: "€ 495 p/maand",
          phoneNumber: "+31302393838",
          mailAdres: "Mail adres",
          detailLinkTitle: "Neem een kijkje",
          detailLink: "/onze-locaties/rikymahendra",
          rating: 9.4,
        },
      ],
    };
  },
  props: {
    showLocaties: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
