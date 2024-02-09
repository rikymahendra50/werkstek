<template>
  <section class="py-20">
    <TitleHeader
      title="Onze locaties"
      secondTitle="Bekijk al onze locaties"
      description="Op deze locaties hebben we kantoorruimtes"
    />
    <div class="container-custom grid lg:grid-cols-12" v-if="showLocaties">
      <div class="w-full lg:col-span-4">
        <!-- city -->
        <label class="text-base opacity-50">Kies een locatie</label>
        <select id="name" @change="filterLocaties">
          <option value="" class="text-sm flex items-center p-5">All</option>
          <option
            v-for="locatie in Locaties"
            :key="locatie.name"
            :value="locatie.name"
          >
            {{ locatie.name }}
          </option>
        </select>
        <br />
        <!-- end city -->
        <div class="flex flex-col">
          <!-- soort Locatie -->
          <p class="text-base mt-3 opacity-50 pb-3">Soort locatie</p>
          <fieldset
            id="soortLocatie"
            class="grid grid-cols-2 grid-rows-2 gap-2"
          >
            <Checkbox
              v-for="soortlocati in checkbox.soortLocaties"
              :key="soortlocati.id"
              :id="soortlocati.id"
              :titleCheckBox="soortlocati.name"
              @change="filterLocaties"
            />
          </fieldset>
          <SliderRange
            title="De prijs per maand"
            idInputMin="priceMin"
            idInputMax="priceMax"
            :minPrice="0"
            :maxPrice="1000"
            :minRange="0"
            :maxRange="850"
            :priceGap="100"
            class="my-2"
            @input="filterLocaties"
          />
          <div class="w-full">
            <p class="text-sm mt-3 opacity-50">De opervlakte m²</p>
            <div class="flex my-2">
              <div class="w-[50%] relative">
                <input
                  type="number"
                  id="deopervlakteMin"
                  placeholder="Min"
                  min="0"
                  class="input input-bordered w-[90%] p-[10px] mr-2 input-md"
                  @input="filterLocaties"
                /><br />
                <span class="absolute top-3 right-14">m<sup>2</sup></span>
              </div>
              <div class="w-[50%] relative">
                <input
                  type="number"
                  id="deopervlakteMax"
                  min="0"
                  placeholder="Max"
                  class="input input-bordered w-[90%] p-[10px] mr-2 input-md"
                  @input="filterLocaties"
                /><br />
                <span class="absolute top-3 right-14">m<sup>2</sup></span>
              </div>
            </div>
            <p class="my-3">-</p>
            <div class="flex justify-between gap-2 text-sm sm:text-base">
              <div class="flex flex-col">
                <fieldset id="functie">
                  <Checkbox
                    v-for="soortlocati in checkbox.functie.slice(0, 4)"
                    :key="soortlocati.id"
                    :id="soortlocati.id"
                    :titleCheckBox="soortlocati.name"
                    @change="filterLocaties"
                    class="mt-2"
                  />
                </fieldset>
              </div>
              <div class="flex flex-col">
                <Checkbox
                  v-for="soortlocati in checkbox.functie.slice(4, 8)"
                  :key="soortlocati.id"
                  :id="soortlocati.id"
                  :titleCheckBox="soortlocati.name"
                  @change="filterLocaties"
                  class="mt-2"
                />
              </div>
            </div>
            <div class="mt-5">
              <img src="/images/filter-icon.svg" alt="filter" class="w-8 h-8" />
              <p class="text-base mt-3 opacity-50">Meer filter opties</p>
            </div>
            <Map />
          </div>
        </div>
      </div>
      <div
        id="locatieList"
        class="lg:col-span-8 py-5 overflow-auto max-h-[400px] md:max-h-[870px] md:min-h-[870px] flex flex-col scrollbar-onze"
      >
        <eachLocaties
          v-for="locatie in filteredLocaties"
          :key="locatie.id"
          :name="locatie.name"
          :link="locatie.detailLink"
          :image="locatie.image"
          :rating="locatie.rating"
          :type="locatie.type"
          :adres="locatie.adres"
          :phoneNumber="locatie.phoneNumber"
          :price="locatie.price"
          :mailAdres="locatie.mailAdres"
          :detailLinkTitle="locatie.detailLinkTitle"
          :opervlakte="locatie.opervlakte"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-onze {
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.scrollbar-onze::-webkit-scrollbar {
  display: none;
}
</style>

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
            name: "Anders",
          },
          {
            id: 3,
            name: "Kantoorruimte",
          },
        ],
        functie: [
          {
            id: 9,
            name: "Wifi",
          },
          {
            id: 10,
            name: "Parkeerplaats",
          },
          {
            id: 11,
            name: "Receptie",
          },
          {
            id: 12,
            name: "Koffiebar",
          },
          {
            id: 13,
            name: "Keuken",
          },
          {
            id: 14,
            name: "Vlakbij het treinstation",
          },
          {
            id: 15,
            name: "Loungeplekken",
          },
          {
            id: 16,
            name: "Vergaderruimtes met videoschermen",
          },
        ],
      },
      Locaties: [
        {
          id: 1,
          name: "Utrecht",
          soortLocaties: ["Alles", "Anders"],
          deopervlakte: 19,
          price: 320,
          functie: ["Wifi", "Parkeerplaats"],
          image: "/images/img-each-locatie-3.jpg",
          type: "Premium",
          adres: "Adres",
          opervlakte: "Opervlakte",
          phoneNumber: "+31302393838",
          mailAdres: "Mail adres",
          detailLinkTitle: "Neem een kijkje",
          detailLink: "/onze-locaties/rikymahendra",
          rating: 9.4,
        },
        {
          id: 2,
          name: "Locatie",
          soortLocaties: ["Anders", "Alles"],
          price: 100,
          deopervlakte: 20,
          functie: ["Wifi", "Parkeerplaats", "Loungeplekken"],
          image: "/images/img-each-locatie-3.jpg",
          type: "Premium",
          adres: "Adres",
          opervlakte: "Opervlakte",
          phoneNumber: "+31302393838",
          mailAdres: "Mail adres",
          detailLinkTitle: "Neem een kijkje",
          detailLink: "/onze-locaties/rikymahendra",
          rating: 9.4,
        },
        {
          id: 3,
          name: "Locatie",
          soortLocaties: ["Anders"],
          price: 120,
          deopervlakte: 23,
          functie: [
            "Wifi",
            "Parkeerplaats",
            "Loungeplekken",
            "Loungeplekken",
            "Koffiebar",
          ],
          image: "/images/img-each-locatie-3.jpg",
          type: "Premium",
          adres: "Adres",
          opervlakte: "Opervlakte",
          phoneNumber: "+31302393838",
          mailAdres: "Mail adres",
          detailLinkTitle: "Neem een kijkje",
          detailLink: "/onze-locaties/rikymahendra",
          rating: 9.4,
        },
        {
          id: 4,
          name: "Amsterdam",
          soortLocaties: ["Alles"],
          price: 100,
          deopervlakte: 25,
          functie: ["Loungeplekken", "Loungeplekken", "Koffiebar"],
          image: "/images/img-each-locatie-3.jpg",
          type: "Premium",
          adres: "Adres",
          opervlakte: "Opervlakte",
          phoneNumber: "+31302393838",
          mailAdres: "Mail adres",
          detailLinkTitle: "Neem een kijkje",
          detailLink: "/onze-locaties/rikymahendra",
          rating: 9.4,
        },
      ],
      filteredLocaties: [],
    };
  },
  props: {
    showLocaties: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    filterLocaties() {
      // query selector
      const nameValue = document.getElementById("name").value;
      const priceMinValue = parseFloat(
        document.getElementById("priceMin").value
      );
      const priceMaxValue = parseFloat(
        document.getElementById("priceMax").value
      );
      const deopervlakteMinValue = parseFloat(
        document.getElementById("deopervlakteMin").value
      );
      const deopervlakteMaxValue = parseFloat(
        document.getElementById("deopervlakteMax").value
      );
      const soortLocatieCheckboxes = document.querySelectorAll(
        '#soortLocatie input[type="checkbox"]'
      );
      const functieCheckboxes = document.querySelectorAll(
        '#functie input[type="checkbox"]'
      );

      // function filter data
      const filteredData = this.Locaties.filter((locatie) => {
        let isValid = true;

        // by Name
        if (nameValue && locatie.name !== nameValue) {
          isValid = false;
        }

        // by price
        if (!isNaN(priceMinValue) && locatie.price < priceMinValue) {
          isValid = false;
        }
        if (!isNaN(priceMaxValue) && locatie.price > priceMaxValue) {
          isValid = false;
        }

        // by deopervlakte
        if (
          !isNaN(deopervlakteMinValue) &&
          locatie.deopervlakte < deopervlakteMinValue
        ) {
          isValid = false;
        }
        if (
          !isNaN(deopervlakteMaxValue) &&
          locatie.deopervlakte > deopervlakteMaxValue
        ) {
          isValid = false;
        }

        // by type
        soortLocatieCheckboxes.forEach((checkbox) => {
          if (
            checkbox.checked &&
            !locatie.soortLocaties.includes(checkbox.id)
          ) {
            isValid = false;
          }
        });

        // by functi
        functieCheckboxes.forEach((checkbox) => {
          if (checkbox.checked && !locatie.functie.includes(checkbox.id)) {
            isValid = false;
          }
        });

        return isValid;
      });

      this.filteredLocaties = filteredData;
    },
  },
  mounted() {
    this.filteredLocaties = this.Locaties;
  },
};
</script>
