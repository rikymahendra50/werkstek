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
      secondTitle="Bekijk al onze vacaturies"
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
            <p class="text-base mt-3 opacity-50 mb-2">Soort locatie</p>
            <div class="flex flex-col">
              <fieldset id="soortLocatie" class="flex flex-col gap-2">
                <div
                  class="flex justify-start items-center"
                  v-for="item in soortLocatiesRadio"
                  :key="item.id"
                >
                  <input
                    type="checkbox"
                    :id="item.id"
                    :value="item.name"
                    :name="item.name"
                    class="mr-2 pt-[0.7px]"
                    :checked="isSelectedSoort(item.id)"
                    @change="handleSoortLocatieChange(item.id)"
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
              :maxPrice="highestPrice"
              :minRange="0"
              :maxRange="highestPrice"
              :priceGap="highestPrice"
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
                        :id="'opleiding_' + item.id"
                        :value="item.id"
                        :name="'opleiding_' + item.name"
                        class="mr-2 pt-[0.7px]"
                        :checked="isSelectedFuncti(item.id)"
                        @change="handlefunctieCheckbox(item.id)"
                      />
                      <label
                        :for="'opleiding_' + item.id"
                        class="cursor-pointer"
                        >{{ item.name }}</label
                      >
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
                        :id="'opleiding_' + item.id"
                        :value="item.id"
                        :name="'opleiding_' + item.name"
                        class="mr-2 pt-[0.7px]"
                        :checked="isSelectedFuncti(item.id)"
                        @change="handlefunctieCheckbox(item.id)"
                      />
                      <label
                        :for="'opleiding_' + item.id"
                        class="cursor-pointer"
                        >{{ item.name }}</label
                      >
                    </div>
                  </fieldset>
                </div>
              </div>
              <div class="flex justify-center md:mt-4 xl:w-[80%]">
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
        class="py-5 md:col-span-8 overflow-auto max-h-[400px] md:max-h-[870px] flex flex-col scrollbar-onze"
      >
        <EachVacaturies
          v-for="(item, index) in filteredData.data"
          :key="item.id"
          :name="item.name"
          :link="item.slug"
          :price="item.price"
          :type="item.type"
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

const name = data.value.data.map((product) => product.name);
const city = ref(name);

const numericPrices = data.value.data.map((item) => parseFloat(item.price));

const highestPrice = Math.max(...numericPrices);

console.log(highestPrice);

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
    id: 2,
    name: "Functie 1",
  },
  {
    id: 3,
    name: "Functie 2",
  },
]);

const { data: facility } = await useFetch("/facilities", {
  method: "get",
  ...requestOptions,
});

const opleidings = facility.value.data;

const selectedCity = ref("");
const selectedSoortLocatie = ref([]);
const selectedFunctie = ref([]);
const selectedMinPrice = ref();
const selectedMaxPrice = ref();
const filteredData = ref([]);

const showAllData = () => {
  selectedCity.value = "Locatie";
  selectedSoortLocatie.value = "";
  selectedFunctie.value = [];
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
