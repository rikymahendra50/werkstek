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
              <Checkbox titleCheckBox="Alles2" />
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
          <img src="/images/filter-icon.svg" class="w-5 h-5 my-4" />
          <p class="text-base mt-3 opacity-50">Meer filter opties</p>
        </div>
      </div>
      <div
        class="py-5 md:w-[65%] overflow-auto max-h-[400px] md:max-h-[870px] flex flex-col"
      >
        <eachLocaties
          v-for="item in eachVacaturies"
          :key="item.id"
          :link="item.detailLink"
          :image="item.image"
          :rating="item.rating"
          :type="item.type"
          :locatie="item.locatie"
          :adres="item.adres"
          :phoneNumber="item.phoneNumber"
          :pricePerMonth="item.pricePerMonth"
          :mailAdres="item.mailAdres"
          :detailLinkTitle="item.detailLinkTitle"
          :opervlakte="item.opervlakte"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      eachVacaturies: [
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
          detailLink: "/onze-vacaturies/onze-locaties-single",
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
          detailLink: "/onze-vacaturies/onze-locaties-single",
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
          detailLink: "/onze-vacaturies/onze-locaties-single",
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
