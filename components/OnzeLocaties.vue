<template>
  <section class="py-20">
    <TitleHeader
      title="Onze locaties"
      secondTitle="Bekijk al onze locaties"
      description="Op deze locaties hebben we kantoorruimtes"
    />
    <div class="md:grid md:grid-cols-12 container-custom">
      <div class="md:col-span-4 max-w-[500px]">
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
                v-model="selectedSoortLocatie"
                name="soort"
              />
              <label :for="item.id" class="cursor-pointer">{{
                item.name
              }}</label>
            </div>
          </fieldset>
          <SliderRange
            :title="'De prijs per maand'"
            :idInputMin="'priceMin'"
            :idInputMax="'priceMax'"
            :minPrice="0"
            :maxPrice="100000"
            :minRange="0"
            :maxRange="850"
            :priceGap="1000"
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
              <img
                src="/images/filter-icon.svg"
                class="w-5 h-5 my-4"
                alt="filter"
              />
              <p class="text-base opacity-50">Meer filter opties</p>
            </div>
            <Map />
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
          :rating="item.is_saleable"
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
      city: ["Simon Stevinweg 27", "Antareslaan 65", "Computerweg 1"],
      soortLocatiesRadio: [
        {
          id: 1,
          name: "Alles",
        },
        {
          id: 2,
          name: "Stage Plaats",
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
    };
  },
  setup() {
    // Membuat data reaktif menggunakan ref
    const selectedCity = ref("");
    const selectedSoortLocatie = ref("");
    const selectedFunctie = ref("");
    const selectedMinPrice = ref(0);
    const selectedMaxPrice = ref(0);
    const selectedMeterMin = ref();
    const selectedMeterMax = ref();
    const filteredData = ref([]);

    function handlePriceChange(priceData) {
      selectedMinPrice.value = priceData.minPrice;
      selectedMaxPrice.value = priceData.maxPrice;
    }

    // Menggunakan watch untuk memantau perubahan pada properti tertentu
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
                // "filter[location_id]": selectedLocationId.value,
                // "filter[type_id]": selectedTypeId.value,
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
      selectedMeterMin,
      selectedMeterMax,
      selectedSoortLocatie,
      selectedFunctie,
      selectedMinPrice,
      selectedMaxPrice,
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
