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
          <SliderRange titleSliderRange="Aantal uur per week" />
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
        <div v-for="items in eachLocaties">
          <NuxtLink to="/onze-locaties/onze-locaties-single">
            <div
              class="bg-[#859C8142] bg-opacity-20 rounded-md shadow-xl w-full max-w-[786.406px] flex mb-3"
            >
              <img
                :src="items.image"
                alt="page2"
                class="max-w-[256px] w-[50%] lg:w-full"
              />
              <div class="flex flex-col min-[400px]:flex-row ml-4 w-full">
                <div class="flex flex-col justify-center w-[90%]">
                  <p class="text-[#404040] text-sm lg:text-base mt-1">
                    {{ items.locatie }}
                  </p>
                  <p class="text-[#777] lg:text-sm mt-1">{{ items.adres }}</p>
                  <p class="text-xs lg:text-sm font-semibold mt-1 text-[#777]">
                    {{ items.opervlakte }}
                  </p>
                  <p class="text-xs lg:text-sm mt-1">
                    {{ items.pricePerMonth }}
                  </p>
                  <p class="text-xs lg:text-[13px] text-secondary mt-1">
                    {{ items.phoneNumber }}
                  </p>
                  <p class="text-[10px] lg:text-[13px] text-secondary mt-1">
                    {{ items.mailAdres }}
                  </p>
                  <NuxtLink
                    :to="eachLocaties.detailLink"
                    class="text-[10px] lg:text-[12px]"
                    >{{ items.detailLinkTitle }}></NuxtLink
                  >
                </div>
                <div class="items-end flex mr-3 mb-2">
                  <div
                    class="bg-primary max-w-[61px] flex justify-center items-center gap-2 text-white rounded-full lg:py-1 px-6 mb-2 mr-2"
                  >
                    <img
                      src="/images/icon-rating-white.svg"
                      alt="page2"
                      class="w-[14px]"
                    />
                    <p class="text-sm">{{ items.rating }}</p>
                  </div>
                </div>
              </div>
            </div>
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
