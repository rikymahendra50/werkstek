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
<template>
  <section class="py-20">
    <TitleHeader
      title="Onze locaties"
      secondTitle="Bekijk al onze locaties"
      description="Op deze locaties hebben we kantoorruimtes"
    />
    <div class="md:grid md:grid-cols-12 container-custom">
      <div class="md:col-span-4">
        <button @click="toggleDetail" class="flex items-center gap-2">
          <img src="/images/filter-icon.svg" class="w-5 h-5 my-4" />
          <p class="text-base opacity-50">Meer filter opties</p>
        </button>
        <div v-if="showFilter">
          <span class="text-base mt-3 opacity-50">Kies een locatie</span>
          <div class="flex-col form-control max-w-xs mt-2">
            <select
              id="city"
              class="select select-bordered dropdown"
              v-model="selectedCity"
            >
              <option disabled selected>Alles</option>
              <option
                class="text-sm flex items-center p-5"
                v-for="(item, index) in city"
                :key="index"
                :value="item"
              >
                {{ item }}
              </option>
            </select>
          </div>
          <div class="flex flex-col">
            <p class="text-base mt-3 opacity-50 mb-2">Soort locatie</p>
            <div class="flex flex-col">
              <fieldset id="soortLocatie" class="flex flex-col gap-2">
                <div
                  class="flex justify-start items-center"
                  v-for="item in soortLocatiesRadio"
                  :key="item.id"
                >
                  <input
                    type="radio"
                    :id="item.id"
                    :value="item.name"
                    :name="item.name"
                    class="mr-2 pt-[0.7px]"
                    v-model="selectedSoortLocatie"
                  />
                  <label :for="item.id" class="cursor-pointer">{{
                    item.name
                  }}</label>
                </div>
              </fieldset>
            </div>
            <SliderRange
              :title="'De prijs per maand'"
              :idInputMin="'priceMin'"
              :idInputMax="'priceMax'"
              :minPrice="0"
              :maxPrice="100000"
              :minRange="0"
              :maxRange="85000"
              :priceGap="100000"
              class="my-2"
              @price-change="handlePriceChange"
            />
            <p class="text-base mt-3 opacity-50 mb-2">Opleidings niveau</p>
            <div
              id="Opleidings"
              class="form-control w-[90%] flex flex-col gap-2 mt-2"
            >
              <div
                class="flex justify-between gap-2 text-sm sm:text-base w-[95%]"
              >
                <div class="flex flex-col">
                  <fieldset id="functie" class="flex flex-col gap-2">
                    <div
                      class="flex justify-start items-center"
                      v-for="item in opleidings.slice(0, 4)"
                      :key="item.id"
                    >
                      <input
                        type="checkbox"
                        :id="item.id"
                        :value="item.id"
                        :name="item.name"
                        class="mr-2 pt-[0.7px]"
                        @change="handlefunctieCheckbox(item.id)"
                      />
                      <label :for="item.id" class="cursor-pointer">{{
                        item.name
                      }}</label>
                    </div>
                  </fieldset>
                </div>
                <div class="flex flex-col">
                  <fieldset id="functie" class="flex flex-col gap-2">
                    <div
                      class="flex justify-start items-center"
                      v-for="item in opleidings.slice(4, 8)"
                      :key="item.id"
                    >
                      <input
                        type="checkbox"
                        :id="item.id"
                        :value="item.id"
                        :name="item.name"
                        class="mr-2 pt-[0.7px]"
                        @change="handlefunctieCheckbox(item.id)"
                      />
                      <label :for="item.id" class="cursor-pointer">{{
                        item.name
                      }}</label>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="py-5 md:col-span-8 overflow-auto max-h-[400px] md:max-h-[870px] flex flex-col scrollbar-onze"
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
      showFilter: false,
      screenWidth: 0,
      city: ["Alles", "Simon Stevinweg 27", "Antareslaan 65", "Computerweg 1"],
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
      opleidings: [
        {
          id: 5,
          name: "Wifi",
        },
        {
          id: 6,
          name: "Parkeerplaats",
        },
        {
          id: 7,
          name: "Receptie",
        },
        {
          id: 8,
          name: "Koffiebar",
        },
        {
          id: 9,
          name: "Keuken",
        },
        {
          id: 10,
          name: "Vlakbij het treinstation",
        },
        {
          id: 11,
          name: "Loungeplekken",
        },
        {
          id: 12,
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
    const selectedCity = ref();
    const selectedSoortLocatie = ref();
    const selectedFunctie = ref([]);
    const selectedMinPrice = ref(0);
    const selectedMaxPrice = ref(0);
    const selectedMeterMin = ref();
    const selectedMeterMax = ref();
    const filteredData = ref([]);

    function handlePriceChange(priceData) {
      selectedMinPrice.value = priceData.minPrice;
      selectedMaxPrice.value = priceData.maxPrice;
    }

    function handlefunctieCheckbox(id) {
      selectedFunctie.value = id;
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
        await new Promise((resolve) => setTimeout(resolve, 900));
        try {
          let params = {};

          // Filter berdasarkan kota hanya jika bukan "Alles"
          if (selectedCity.value !== "Alles") {
            params["filter[search]"] = selectedCity.value;
          }

          // Filter berdasarkan soortlocatie hanya jika bukan "Alles"
          if (selectedSoortLocatie.value !== "Alles") {
            params["filter[type_id]"] = selectedSoortLocatie.value;
          }

          params["filter[productFacility.facility_id]"] = selectedFunctie.value;

          // params["filter[min_price]"] = selectedMinPrice.value;
          // params["filter[max_price]"] = selectedMaxPrice.value;

          paramsfilter[productFacility.facility_id] = selectedFunctie.value;

          const response = await axios.get(
            "http://api-staging-werkstek.spdigitalhosting.com/api/v1/products",
            { params: params }
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
      handlefunctieCheckbox,
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
