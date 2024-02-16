<template>
  <section class="py-20">
    <TitleHeader
      title="Onze locaties"
      secondTitle="Bekijk al onze locaties"
      description="Op deze locaties hebben we kantoorruimtes"
    />
    <div class="md:grid md:grid-cols-12 container-custom">
      <div class="md:col-span-4 max-w-[500px]">
        <div class="mt-5">
          <button
            @click="toggleDetail"
            class="flex items-center gap-3 hover:text-primary"
          >
            <img
              src="/images/filter-icon.svg"
              class="w-5 h-5 my-4"
              alt="filter"
            />
            <p class="text-base opacity-50">Meer filter opties</p>
          </button>
        </div>
        <div v-if="showFilter">
          <!-- city -->
          <div class="flex flex-col">
            <form id="filterForm">
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="text-base opacity-50">Kies een locatie</span>
                  <span class="label-text">Locatie</span>
                </label>
                <select class="select select-bordered" v-model="selectedCity">
                  <option
                    class="text-sm flex items-center p-5"
                    v-for="(item, index) in city"
                    :key="index"
                    :value="item"
                  >
                    {{ item }}
                  </option>
                  <img src="/images/arrow-down.svg" class="p-1" alt="arrow" />
                </select>
              </div>
            </form>
          </div>
          <!-- end city -->
          <div class="flex flex-col">
            <!-- soort Locatie -->
            <p class="text-base mt-3 opacity-50 pb-3">Soort locatie</p>
            <fieldset id="soortLocatie" class="grid grid-cols-2 gap-2">
              <div
                class="flex items-center gap-2 cursor-pointer"
                v-for="item in soortLocatiesRadio"
              >
                <input
                  :id="item.id"
                  :value="item.name"
                  type="radio"
                  @change="handleSoortLocatieChange(item.id)"
                  name="soort"
                  :checked="selectedSoortLocatie === item.id"
                />
                <label :for="item.id" class="cursor-pointer">
                  {{ item.name }}
                </label>
              </div>
            </fieldset>
            <SliderRange
              :title="'De prijs per maand'"
              :idInputMin="'priceMin'"
              :idInputMax="'priceMax'"
              :minPrice="0"
              :maxPrice="10000"
              :minRange="0"
              :maxRange="85000"
              :priceGap="10000"
              class="my-2"
              @price-change="handlePriceChange"
            />
            <div class="w-full">
              <p class="text-sm mt-3 opacity-50">De opervlakte m²</p>
              <div class="flex my-2 max-w-[300px]">
                <div class="relative">
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
                <div class="relative">
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
              <div
                class="flex justify-between gap-2 text-sm sm:text-base w-[95%]"
              >
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
                        @change="handlefunctieCheckbox(item.id)"
                      />
                      <label :for="item.name" class="cursor-pointer">
                        {{ item.name }}
                      </label>
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
                        @change="handlefunctieCheckbox(item.id)"
                      />
                      <label :for="item.name" class="cursor-pointer">{{
                        item.name
                      }}</label>
                    </div>
                  </fieldset>
                </div>
              </div>
              <Map />
            </div>
          </div>
        </div>
      </div>
      <div
        class="md:col-span-8 py-5 overflow-auto max-h-[400px] md:max-h-[870px] md:min-h-[870px] flex flex-col scrollbar-onze"
      >
        <eachLocaties
          v-for="(item, index) in filteredData.data"
          :key="item.id"
          :name="item.name"
          :link="item.slug"
          :price="item.price"
          :image="
            item.images.find((image, imageIndex) => imageIndex === index)?.image
          "
          :rating="9.4"
        />
      </div>
    </div>
  </section>
</template>
<script>
import { ref, watch } from "vue";
import axios from "axios";

export default {
  data() {
    return {
      showFilter: false,
      screenWidth: 0,
      city: ["Simon Stevinweg 27", "Antareslaan 65", "Computerweg 1"],
      soortLocatiesRadio: [
        {
          id: 1,
          name: "Alles",
        },
        {
          id: 2,
          name: "Kantoorruimte",
        },
        {
          id: 3,
          name: "Anders",
        },
      ],
      functieCheckbox: [
        {
          id: 1,
          name: "Wifi",
        },
        {
          id: 2,
          name: "Parkeerplaats",
        },
        {
          id: 3,
          name: "Receptie",
        },
        {
          id: 4,
          name: "Koffiebar",
        },
        {
          id: 5,
          name: "Keuken",
        },
        {
          id: 6,
          name: "Vlakbij het treinstation",
        },
        {
          id: 7,
          name: "Loungeplekken",
        },
        {
          id: 8,
          name: "Vergaderruimtes met videoschermen",
        },
      ],
    };
  },
  methods: {
    toggleDetail() {
      this.showFilter = !this.showFilter;
    },
  },
  mounted() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 768) {
      this.showFilter = true;
    }
  },
  updated() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.showFilter = false;
    } else {
      this.showFilter = true;
    }
  },
  setup() {
    // Membuat data reaktif menggunakan ref
    const selectedCity = ref();
    const selectedSoortLocatie = ref(null);
    const selectedFunctie = ref([]);
    const selectedMinPrice = ref();
    const selectedMaxPrice = ref();
    const selectedMeterMin = ref();
    const selectedMeterMax = ref();
    const filteredData = ref([]);

    function handlePriceChange(priceData) {
      selectedMinPrice.value = priceData.minPrice;
      selectedMaxPrice.value = priceData.maxPrice;
    }

    function handleSoortLocatieChange(id) {
      selectedSoortLocatie.value =
        selectedSoortLocatie.value === id ? null : id;
    }
    function handleLocatie(item) {
      selectedCity.value = item;
    }
    function handlefunctieCheckbox(id) {
      const index = selectedFunctie.value.indexOf(id);
      if (index !== -1) {
        selectedFunctie.value.splice(index, 1);
      } else {
        selectedFunctie.value.push(id);
      }
    }
    watch(
      [
        selectedCity,
        selectedSoortLocatie,
        selectedMeterMin,
        selectedMeterMax,
        selectedFunctie,
        selectedMinPrice,
        selectedMaxPrice,
      ],
      async () => {
        try {
          const response = await axios.get(
            "http://api-staging-werkstek.spdigitalhosting.com/api/v1/products",
            {
              params: {
                "filter[search]": selectedCity.value,
                "filter[min_price]": selectedMinPrice.value,
                "filter[max_price]": selectedMaxPrice.value,
                "filter[min_area]": selectedMeterMin.value,
                "filter[max_area]": selectedMeterMax.value,
                // // "filter[location_id]": selectedLocationId.value,
                "filter[type_id]": selectedSoortLocatie.value,
                "filter[productFacility.facility_id]": selectedFunctie.value,
              },
            }
          );
          filteredData.value = response.data;
        } catch (error) {
          console.error("Failed to retrieve data from API:", error);
        }
      }
    );
    return {
      selectedCity,
      handlePriceChange,
      handleSoortLocatieChange,
      handlefunctieCheckbox,
      handleLocatie,
      selectedMeterMin,
      selectedMeterMax,
      selectedSoortLocatie,
      selectedFunctie,
      selectedMinPrice,
      selectedMaxPrice,
      selectedSoortLocatie,
      filteredData,
    };
  },
  mounted() {
    axios
      .get("http://api-staging-werkstek.spdigitalhosting.com/api/v1/products")
      .then((response) => {
        this.filteredData = response.data;
      })
      .catch((error) => {
        console.error("Failed to retrieve data from API:", error);
      });
  },
};
</script>

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
