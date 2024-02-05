<template>
  <section class="py-20">
    <TitleHeader
      title="Onze locaties"
      secondTitle="Bekijk al onze locaties"
      description="Op deze locaties hebben we kantoorruimtes"
    />
    <div class="flex flex-col md:flex-row container-custom">
      <div class="w-full md:w-[35%]">
        <p class="text-base opacity-50">Kies een locatie</p>
        <details class="dropdown">
          <summary
            class="m-1 btn bg-[white] normal-case font-normal w-[300px] max-w-[90%] flex justify-between"
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
            <li class="py-1"><button>Utrecht</button></li>
            <li class="py-1"><button>Item 2</button></li>
          </ul>
        </details>
        <div class="flex flex-col">
          <p class="text-base mt-3 opacity-50">Soort locatie</p>
          <div class="form-control w-[90%]">
            <label class="cursor-pointer label flex justify-start">
              <Checkbox titleCheckBox="Alles" />
            </label>
            <label class="cursor-pointer label flex justify-start">
              <Checkbox titleCheckBox="Stage plaats" />
            </label>
            <label class="cursor-pointer label flex justify-start">
              <Checkbox titleCheckBox="Functie 1" />
            </label>
            <label class="cursor-pointer label flex justify-start">
              <Checkbox titleCheckBox="Functie 2" />
            </label>
          </div>

          <!-- slider -->
          <SliderRange
            title="Aantal uur per week"
            :minPrice="200"
            :maxPrice="500"
            :maxRange="100"
            :priceGap="200"
          />
          <!-- end slider -->
          <p class="text-base mt-3 opacity-50">Opleidings niveau</p>
          <div class="form-control w-[90%]">
            <label class="cursor-pointer label flex justify-start">
              <Checkbox titleCheckBox="Alles" />
            </label>
            <label class="cursor-pointer label flex justify-start">
              <Checkbox titleCheckBox="MBO" />
            </label>
            <label class="cursor-pointer label flex justify-start">
              <Checkbox titleCheckBox="HBO" />
            </label>
            <label class="cursor-pointer label flex justify-start">
              <Checkbox titleCheckBox="Universiteit" />
            </label>
          </div>
          <img src="/images/filter icon.svg" class="w-5 h-5 my-4" />
          <p class="text-base mt-3 opacity-50">Meer filter opties</p>
        </div>
      </div>
      <div
        class="py-5 md:w-[65%] overflow-auto max-h-[400px] md:max-h-[870px] flex flex-col"
      >
        <div v-for="items in eachLocaties" :key="items.id">
          <a
            :href="items.detailLink"
            class="grid grid-cols-8 grid-rows-1 mb-2 lg:mb-5 mx-2 sm:mx-0 rounded-lg transition hover:shadow-md"
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
                <NuxtLink :to="items.detailLink" class="flex mt-2 sm:mt-0">
                  <div
                    class="text-primary hover:text-secondary sm:w-[90%] text-[12px] sm:text-[14px] md:text-[18px] border transition border-primary hover:border-secondary px-1 sm:px-2 lg:px-4 text-center rounded-full items-center flex justify-center"
                  >
                    {{ items.detailLinkTitle }}
                  </div>
                  <div
                    class="bg-primary max-w-[21px] min-h-[21px] sm:max-w-[31px] sm:min-h-[31px] lg:max-w-[41px] lg:min-h-[41px] rounded-full"
                  >
                    <img src="/images/arrow-right.svg" alt="arrow" />
                  </div>
                </NuxtLink>
              </div>
            </div>
            <!-- problem -->
          </a>
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
          type: "Regular",
          image: "/images/img-each-locatie-1.png",
          locatie: "Locatie",
          adres: "Adres",
          opervlakte: "opervlakte",
          pricePerMonth: "€ 495 p/maand",
          phoneNumber: "+31302393838",
          mailAdres: "Mail adres",
          detailLinkTitle: "Neem een kijkje",
          detailLink: "/onze-locaties/onze-locaties-single",
          rating: 9.4,
        },
        {
          id: 2,
          type: "Premium",
          image: "/images/img-each-locatie-2.jpg",
          locatie: "Locatie",
          adres: "Adres",
          opervlakte: "opervlakte",
          pricePerMonth: "€ 495 p/maand",
          phoneNumber: "+31302393838",
          mailAdres: "Mail adres",
          detailLinkTitle: "Neem een kijkje",
          detailLink: "/onze-locaties/onze-locaties-single",
          rating: 9.4,
        },
        {
          id: 3,
          type: "Premium",
          image: "/images/img-each-locatie-3.jpg",
          locatie: "Locatie",
          adres: "Adres",
          opervlakte: "opervlakte",
          pricePerMonth: "€ 495 p/maand",
          phoneNumber: "+31302393838",
          mailAdres: "Mail adres",
          detailLinkTitle: "Neem een kijkje",
          detailLink: "/onze-locaties/onze-locaties-single",
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
