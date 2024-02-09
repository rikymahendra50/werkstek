<template>
  <section class="py-20">
    <TitleHeader
      title="Onze locaties"
      secondTitle="Bekijk al onze locaties"
      description="Op deze locaties hebben we kantoorruimtes"
    />
    <div class="flex flex-col md:flex-row container-custom">
      <div class="w-full md:w-[35%]">
        <label class="text-base opacity-50">Kies een locatie</label>
        <form id="filterForm">
          <select id="name" @change="filterVacaturies">
            <option value="" class="text-sm flex items-center p-5">All</option>
            <option
              v-for="vacaturie in Vacaturies"
              :key="vacaturie.name"
              :value="vacaturie.name"
            >
              {{ vacaturie.name }}
            </option>
          </select>
        </form>
        <div class="flex flex-col">
          <p class="text-base mt-3 opacity-50">Soort locatie</p>
          <!-- soort locatie -->
          <fieldset
            id="soortLocatie"
            class="form-control w-[90%] flex flex-col gap-2 mt-2"
          >
            <Checkbox
              v-for="soortlocati in checkbox.soortLocaties"
              :key="soortlocati.id"
              :id="soortlocati.id"
              :titleCheckBox="soortlocati.name"
              @change="filterVacaturies"
            />
          </fieldset>
          <!-- end soort locatie -->

          <!-- slider -->
          <SliderRange
            title="Aantal uur per week"
            idInputMin="priceMin"
            idInputMax="priceMax"
            :minPrice="0"
            :maxPrice="1000"
            :minRange="0"
            :maxRange="850"
            :priceGap="100"
            class="my-2"
            @input="filterVacaturies"
          />
          <!-- end slider -->

          <!-- checkbox2 -->
          <p class="text-base mt-3 opacity-50">Opleidings niveau</p>
          <!-- Opleidings niveau -->
          <div
            id="Opleidings"
            class="form-control w-[90%] flex flex-col gap-2 mt-2"
          >
            <Checkbox
              v-for="opleiding in checkbox.opleidings"
              :key="opleiding.id"
              :id="opleiding.id"
              :titleCheckBox="opleiding.name"
              @change="filterVacaturies"
            />
          </div>
          <!-- end Opleidings niveau -->
          <!-- filter options -->
          <img src="/images/filter-icon.svg" class="w-5 h-5 my-4" />
          <p class="text-base opacity-50">Meer filter opties</p>
          <!-- end filter options -->
        </div>
      </div>
      <div
        class="py-5 md:w-[65%] overflow-auto max-h-[400px] md:max-h-[870px] flex flex-col"
      >
        <eachLocaties
          v-for="item in filteredVacaturies"
          :key="item.id"
          :link="item.detailLink"
          :image="item.image"
          :rating="item.rating"
          :type="item.type"
          :name="item.name"
          :adres="item.adres"
          :phoneNumber="item.phoneNumber"
          :price="item.price"
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
      checkbox: {
        soortLocaties: [
          {
            id: 1,
            name: "Alles",
          },
          {
            id: 2,
            name: "Stage plaats",
          },
          {
            id: 3,
            name: "Functie 1",
          },
          {
            id: 4,
            name: "Functie 2",
          },
        ],
        opleidings: [
          {
            id: 1,
            name: "Alles2",
          },
          {
            id: 2,
            name: "MBO",
          },
          {
            id: 3,
            name: "HBO",
          },
          {
            id: 4,
            name: "Universiteit",
          },
        ],
      },
      Vacaturies: [
        {
          id: 1,
          type: "Regular",
          image: "/images/img-each-locatie-1.png",
          soortLocaties: ["Alles"],
          opleidings: ["Alles2", "MBO", "HBO"],
          name: "Amsterdam",
          adres: "Adres",
          opervlakte: "opervlakte",
          price: 495,
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
          soortLocaties: ["Stage plaats", "Functie 1"],
          opleidings: ["Alles2", "MBO"],
          name: "Locatie",
          adres: "Adres",
          opervlakte: "opervlakte",
          price: 495,
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
          soortLocaties: ["Stage plaats"],
          opleidings: ["Alles2", "MBO", "HBO"],
          name: "Locatie",
          adres: "Adres",
          opervlakte: "opervlakte",
          price: 680,
          phoneNumber: "+31302393838",
          mailAdres: "Mail adres",
          detailLinkTitle: "Neem een kijkje",
          detailLink: "/onze-vacaturies/onze-locaties-single",
          rating: 9.4,
        },
      ],
      filteredVacaturies: [],
    };
  },
  props: {
    showLocaties: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    filterVacaturies() {
      // query selector
      const nameValue = document.getElementById("name").value;
      const soortLocatieCheckboxes = document.querySelectorAll(
        '#soortLocatie input[type="checkbox"]'
      );
      // price
      const priceMinValue = parseFloat(
        document.getElementById("priceMin").value
      );
      const priceMaxValue = parseFloat(
        document.getElementById("priceMax").value
      );
      // end price

      const OpleidingsCheckboxes = document.querySelectorAll(
        '#Opleidings input[type="checkbox"]'
      );

      const filteredData = this.Vacaturies.filter((vacaturie) => {
        let isValid = true;

        // by Name
        if (nameValue && vacaturie.name !== nameValue) {
          isValid = false;
        }

        // by type
        soortLocatieCheckboxes.forEach((checkbox) => {
          if (
            checkbox.checked &&
            !vacaturie.soortLocaties.includes(checkbox.id)
          ) {
            isValid = false;
          }
        });

        // by price
        if (!isNaN(priceMinValue) && vacaturie.price < priceMinValue) {
          isValid = false;
        }
        if (!isNaN(priceMaxValue) && vacaturie.price > priceMaxValue) {
          isValid = false;
        }

        // opleidings
        OpleidingsCheckboxes.forEach((checkbox) => {
          if (checkbox.checked && !vacaturie.opleidings.includes(checkbox.id)) {
            isValid = false;
          }
        });

        return isValid;
      });

      this.filteredVacaturies = filteredData;
    },
  },
  mounted() {
    this.filteredVacaturies = this.Vacaturies;
  },
};
</script>
