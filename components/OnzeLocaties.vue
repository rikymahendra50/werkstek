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
        <form class="flex flex-col">
          <label class="text-base opacity-50">Kies een locatie</label>
          <select id="kota" v-model="selectedCity" class="dropdown">
            <option value="">Alles</option>
            <option
              class="text-sm flex items-center p-5"
              v-for="(item, index) in city"
              :key="index"
            >
              {{ item }}
            </option>
          </select>
        </form>
        <!-- end city -->
        <div class="flex flex-col">
          <!-- soort Locatie -->
          <p class="text-base mt-3 opacity-50 pb-3">Soort locatie</p>
          <fieldset id="soortLocatie" class="grid grid-cols-2 gap-2">
            <div class="flex items-center gap-2 cursor-pointer">
              <input
                id="Alles"
                value="Alles"
                type="radio"
                v-model="selectedSoortLocatie"
                name="soort"
              />
              <label for="Alles" class="cursor-pointer">Alles</label>
            </div>
            <div class="flex items-center gap-2 cursor-pointer">
              <input
                id="Anders"
                type="radio"
                value="Anders"
                v-model="selectedSoortLocatie"
                name="soort"
              />
              <label for="Anders" class="cursor-pointer">Anders</label>
            </div>
            <div class="flex items-center gap-2 cursor-pointer">
              <input
                id="Kantoorruimte"
                type="radio"
                value="Kantoorruimte"
                v-model="selectedSoortLocatie"
                name="soort"
              />
              <label for="Kantoorruimte" class="cursor-pointer"
                >Kantoorruimte</label
              >
            </div>
          </fieldset>
          <SliderRange
            :title="'De prijs per maand'"
            :idInputMin="'priceMin'"
            :idInputMax="'priceMax'"
            :minPrice="0"
            :maxPrice="1000"
            :minRange="0"
            :maxRange="850"
            :priceGap="100"
            class="my-2"
            @price-change="handlePriceChange"
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
                  v-model="selectedMeterMin"
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
                  v-model="selectedMeterMax"
                /><br />
                <span class="absolute top-3 right-14">m<sup>2</sup></span>
              </div>
            </div>
            <p class="my-3">-</p>
            <div class="flex justify-between gap-2 text-sm sm:text-base">
              <div class="flex flex-col">
                <fieldset id="functie" class="flex flex-col gap-2">
                  <div
                    class="flex justify-start items-center"
                    v-for="item in functieCheckbox.slice(0, 4)"
                    :key="item.id"
                  >
                    <input
                      type="checkbox"
                      :id="item.name"
                      :value="item.name"
                      class="mr-2 pt-[0.7px]"
                      v-model="selectedFunctie"
                    />
                    <label :for="item.name" class="cursor-pointer">{{
                      item.name
                    }}</label>
                  </div>
                </fieldset>
              </div>
              <div class="flex flex-col">
                <fieldset id="functie" class="flex flex-col gap-2">
                  <div
                    class="flex justify-start items-center"
                    v-for="item in functieCheckbox.slice(4, 8)"
                    :key="item.id"
                  >
                    <input
                      type="checkbox"
                      :id="item.name"
                      :value="item.name"
                      class="mr-2 pt-[0.7px]"
                      v-model="selectedFunctie"
                    />
                    <label :for="item.name" class="cursor-pointer">{{
                      item.name
                    }}</label>
                  </div>
                </fieldset>
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
          v-for="locatie in filteredData"
          :key="locatie.id"
          :city="locatie.city"
          :link="locatie.detailLink"
          :image="locatie.image"
          :rating="locatie.rating"
          :type="locatie.type"
          :adres="locatie.adres"
          :phoneNumber="locatie.phoneNumber"
          :price="locatie.price"
          :mailAdres="locatie.mailAdres"
          :detailLinkTitle="locatie.detailLinkTitle"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
input[type="radio"] {
  appearance: none;
  min-width: 24px;
  height: 24px;
  display: flex;
  border: 1px solid theme("colors.primary");
  border-radius: 0.5em;
  cursor: pointer;
  outline: none;
  cursor: pointer;
  justify-content: center;
}

input[type="radio"]:after {
  content: url("/images/tick.svg");
  color: white;
  display: none;
  font-weight: white;
}

input[type="radio"]:checked {
  background-color: theme("colors.primary");
}
input[type="radio"]:checked:after {
  display: block;
}

input[type="checkbox"] {
  appearance: none;
  min-width: 24px;
  height: 24px;
  display: flex;
  border: 1px solid theme("colors.primary");
  border-radius: 0.5em;
  cursor: pointer;
  outline: none;
  cursor: pointer;
  justify-content: center;
}

input[type="checkbox"]:after {
  content: url("/images/tick.svg");
  color: white;
  display: none;
  font-weight: white;
}

input[type="checkbox"]:checked {
  background-color: theme("colors.primary");
}
input[type="checkbox"]:checked:after {
  display: block;
}

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
      city: ["Utrecht", "Locatie", "Example", "Amsterdam"],
      soortLocatiesRadio: [
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
      functieCheckbox: [
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
      Locaties: [
        {
          id: 1,
          city: "Utrecht",
          soortLocaties: "Anders",
          deopervlakte: 19,
          price: 320,
          functie: ["Wifi", "Parkeerplaats"],
          coordinate: 0,
          image: "/images/img-each-locatie-1.png",
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
          city: "Locatie",
          soortLocaties: "Alles",
          price: 100,
          deopervlakte: 20,
          functie: ["Wifi", "Parkeerplaats", "Loungeplekken"],
          coordinate: 0,
          image: "/images/img-each-locatie-2.jpg",
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
          city: "Example",
          soortLocaties: "Anders",
          price: 120,
          deopervlakte: 23,
          functie: [
            "Wifi",
            "Parkeerplaats",
            "Loungeplekken",
            "Loungeplekken",
            "Koffiebar",
          ],
          coordinate: 0,
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
          city: "Amsterdam",
          soortLocaties: "Alles",
          price: 100,
          deopervlakte: 25,
          functie: ["Loungeplekken", "Loungeplekken", "Koffiebar"],
          image: "/images/img-each-locatie-1.png",
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
      selectedCity: "",
      selectedMeterMin: null,
      selectedMeterMax: null,
      selectedMinPrice: 0,
      selectedMaxPrice: 0,
      selectedSoortLocatie: "",
      selectedFunctie: [],
      selectedPrice: 0,
    };
  },
  methods: {
    handlePriceChange(priceData) {
      this.selectedMinPrice = priceData.minPrice;
      this.selectedMaxPrice = priceData.maxPrice;
    },
  },
  computed: {
    filteredData() {
      let filteredItems = this.Locaties;

      // filter dropdown city
      if (this.selectedCity && this.selectedCity !== "Alles") {
        filteredItems = filteredItems.filter(
          (item) => item.city === this.selectedCity
        );
      }

      // filter radio
      if (this.selectedSoortLocatie && this.selectedSoortLocatie !== "Alles") {
        filteredItems = filteredItems.filter(
          (item) => item.soortLocaties === this.selectedSoortLocatie
        );
      }

      // filter checkbox
      if (this.selectedFunctie.length > 0) {
        filteredItems = filteredItems.filter((item) =>
          item.functie.some((functie) => this.selectedFunctie.includes(functie))
        );
      }

      // slider range price
      if (this.selectedMinPrice >= 0 && this.selectedMaxPrice) {
        filteredItems = filteredItems.filter(
          (item) =>
            item.price >= this.selectedMinPrice &&
            item.price <= this.selectedMaxPrice
        );
      }

      // filter metermin dan metermax
      if (this.selectedMeterMin && !this.selectedMeterMax) {
        filteredItems = filteredItems.filter(
          (item) => item.deopervlakte > this.selectedMeterMin
        );
      } else if (!this.selectedMeterMin && this.selectedMeterMax) {
        filteredItems = filteredItems.filter(
          (item) => item.deopervlakte <= this.selectedMeterMax
        );
      } else if (this.selectedMeterMin && this.selectedMeterMax) {
        filteredItems = filteredItems.filter(
          (item) =>
            item.deopervlakte >= this.selectedMeterMin &&
            item.deopervlakte <= this.selectedMeterMax
        );
      }

      return filteredItems;
    },
  },
  props: {
    showLocaties: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
