<template>
  <section class="py-20">
    <TitleHeader
      title="Onze locaties"
      secondTitle="Bekijk al onze locaties"
      description="Op deze locaties hebben we kantoorruimtes"
    />
    <div class="md:grid md:grid-cols-12 container-custom gap-2">
      <div class="md:col-span-4">
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
          <span class="text-base mt-3 opacity-50">Kies een locatie</span>
          <div class="flex-col form-control max-w-xs mt-2">
            <select
              id="city"
              class="select select-bordered dropdown"
              v-model="selectedCity"
            >
              <option disabled selected>Locatie</option>
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
            <p class="text-base mt-3 opacity-50 pb-3">Soort locatie</p>
            <fieldset id="soortLocatie" class="grid grid-cols-2 gap-2">
              <div
                class="flex items-center gap-2 cursor-pointer"
                v-for="item in soortLocatiesRadio"
              >
                <input
                  :id="item.id"
                  :value="item.name"
                  type="checkbox"
                  @change="handleSoortLocatieChange(item.id)"
                  name="soort"
                  :checked="isSelectedSoort(item.id)"
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
              :maxPrice="highestPrice"
              :minRange="0"
              :maxRange="highestPrice"
              :priceGap="highestPrice"
              class="my-2"
              @price-change="handlePriceChange"
            />
            <div class="md:w-[90%]">
              <p class="text-sm mt-3 opacity-50">De opervlakte m²</p>
              <div class="flex my-2">
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
              <div class="flex justify-between gap-2 text-sm lg:text-base">
                <template
                  v-for="(column, columnIndex) in splitColumns(functieCheckbox)"
                  :key="columnIndex"
                >
                  <div class="flex flex-col">
                    <fieldset id="functie" class="flex flex-col gap-2">
                      <div
                        v-for="item in column"
                        :key="item.id"
                        class="flex justify-start items-center"
                      >
                        <input
                          :id="'functie_' + item.id"
                          :value="item.name"
                          :name="'functie_' + item.name"
                          type="checkbox"
                          class="mr-2 pt-[0.7px]"
                          :checked="isSelectedFuncti(item.id)"
                          @change="handlefunctieCheckbox(item.id)"
                        />
                        <label
                          :for="'functie_' + item.id"
                          class="cursor-pointer"
                          >{{ item.name }}</label
                        >
                      </div>
                    </fieldset>
                  </div>
                </template>
              </div>
              <Map :AllData="data" :filterData="filteredData.data" />
              <div class="flex justify-center md:mt-4">
                <button
                  @click="showAllData"
                  class="btn btn-outline btn-orange btn-sm mt-3"
                >
                  Show All Data
                </button>
              </div>
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
          :name="item.location.name"
          :latitude="item.latitude"
          :longitude="item.longitude"
          :link="`/onze-locaties/${item.slug}`"
          :price="item.price"
          :image="
            item.images.find((image, imageIndex) => imageIndex === index)?.image
          "
          :rating="item.rating"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from "axios";
const { axiosRequest } = useAxios();
const { requestOptions } = useRequestOptions();
const { data, error } = await useFetch(`/products`, {
  method: "get",
  ...requestOptions,
});

const showFilter = ref();
const toggleDetail = () => {
  showFilter.value = !showFilter.value;
};

function splitColumns(arr) {
  const midpoint = Math.ceil(arr.length / 2);
  return [arr.slice(0, midpoint), arr.slice(midpoint)];
}

onMounted(() => {
  showAllData();
  selectedCity.value = "Locatie";
  if (window.innerWidth > 768) {
    showFilter.value = true;
  } else {
    showFilter.value = false;
  }

  watch(
    () => window.innerWidth,
    (newWidth) => {
      if (newWidth > 768) {
        showFilter.value = true;
      } else {
        showFilter.value = false;
      }
    }
  );
});

const name = data.value.data.map((item) => item.location.name);

const city = ref(name);

const soortLocatiesRadio = ref([
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
]);

const { data: facility } = await useFetch("/facilities", {
  method: "get",
  ...requestOptions,
});

const functieCheckbox = facility.value.data;

const numericPrices = data.value.data.map((item) => parseFloat(item.price));

const highestPrice = Math.max(...numericPrices);

console.log(highestPrice);

const selectedCity = ref("");
const selectedSoortLocatie = ref([]);
const selectedFunctie = ref([]);
const selectedMinPrice = ref();
const selectedMaxPrice = ref();
const selectedMeterMin = ref();
const selectedMeterMax = ref();
const filteredData = ref([]);

const filteredDataComputed = computed(() => filteredData.value);

const showAllData = () => {
  selectedCity.value = "Locatie";
  selectedSoortLocatie.value = "";
  selectedFunctie.value = [];
  selectedMeterMin.value = null;
  selectedMeterMax.value = null;
  selectedMinPrice.value = null;
  selectedMaxPrice.value = null;
};

function handlePriceChange(priceData) {
  setTimeout(() => {
    selectedMinPrice.value = priceData.minPrice;
    selectedMaxPrice.value = priceData.maxPrice;
  }, 900);
}

function isSelectedSoort(id) {
  return selectedSoortLocatie.value.includes(id);
}
function handleSoortLocatieChange(id) {
  if (selectedSoortLocatie.value.includes(id)) {
    selectedSoortLocatie.value = selectedSoortLocatie.value.filter(
      (item) => item !== id
    );
  } else {
    selectedSoortLocatie.value = [...selectedSoortLocatie.value, id];
  }
}

function isSelectedFuncti(id) {
  return selectedFunctie.value.includes(id);
}
function handlefunctieCheckbox(id) {
  if (selectedFunctie.value.includes(id)) {
    selectedFunctie.value = selectedFunctie.value.filter((item) => item !== id);
  } else {
    selectedFunctie.value = [...selectedFunctie.value, id];
  }
}

watch(
  [
    selectedCity,
    selectedSoortLocatie,
    selectedFunctie,
    selectedMeterMin,
    selectedMeterMax,
    selectedMinPrice,
    selectedMaxPrice,
  ],
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    try {
      let params = {};

      params["filter[search]"] = selectedCity.value;
      params["filter[type_id]"] = selectedSoortLocatie.value;
      params["filter[productFacility.facility_id]"] = selectedFunctie.value;
      params["filter[min_price]"] = selectedMinPrice.value;
      params["filter[max_price]"] = selectedMaxPrice.value;
      params["filter[min_area]"] = selectedMeterMin.value;
      params["filter[max_area]"] = selectedMeterMax.value;

      const response = await axiosRequest.get("/products", { params: params });
      filteredData.value = response.data;
    } catch (error) {
      console.error("Failed to retrieve data from API:", error);
    }
  }
);
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
