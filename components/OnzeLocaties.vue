<template>
  <section class="py-20">
    <TitleHeader
      title="Onze locaties"
      secondTitle="Bekijk al onze locaties"
      description="Op deze locaties hebben we kantoorruimtes"
    />
    <div class="md:grid md:grid-cols-12 container-custom">
      <div class="md:col-span-4 w-[97%]">
        <div class="mt-5">
          <button class="flex items-center gap-3 hover:text-primary">
            <img
              src="/images/filter-icon.svg"
              class="w-5 h-5 my-4"
              alt="filter"
            />
            <p class="text-base opacity-50">Meer filter opties</p>
          </button>
        </div>
        <div>
          <span class="text-base mt-3 opacity-50">Kies een locatie</span>
          <div class="flex-col form-control max-w-[90%] mt-2">
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
                :value="item.id"
              >
                {{ item.name }}
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
                  @change="handleSoortLocatieChange(item.id)"
                  :checked="isSelectedSoort(item.id)"
                  type="checkbox"
                  name="soort"
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
            <div class="">
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
              <p class="text-base mt-3 opacity-50 pb-3">Facility</p>
              <fieldset id="facility" class="grid grid-cols-2 gap-2">
                <div
                  class="flex items-center gap-2 cursor-pointer"
                  v-for="item in functieCheckbox"
                >
                  <input
                    :id="`facility-${item.id}`"
                    :value="item.name"
                    type="checkbox"
                    @change="handlefunctieCheckbox(item.id)"
                    name="facility"
                    :checked="isSelectedFuncti(item.id)"
                  />
                  <label :for="`facility-${item.id}`" class="cursor-pointer">
                    {{ item.name }}
                  </label>
                </div>
              </fieldset>
              <!-- <Map :AllData="dataProduct?.data" /> -->
            </div>
          </div>
        </div>
      </div>

      <div class="md:col-span-8 py-5 overflow-auto">
        <div
          class="max-h-[400px] md:max-h-[870px] md:min-h-[870px] flex flex-col scrollbar-onze"
        >
          <eachLocaties
            v-if="dataProduct.data"
            v-for="(item, index) in dataProduct?.data"
            :key="item?.id"
            :name="item?.location?.name"
            :type="item?.level_type?.name"
            :latitude="item?.latitude"
            :longitude="item?.longitude"
            :link="`/onze-locaties/${item.slug}`"
            :price="item?.price"
            :email="item?.email"
            :phone="item?.phone_number"
            :image="item?.images[0]?.image"
            :rating="item?.rating"
          />
        </div>
        <Pagination
          v-model="page"
          first="Eerst"
          last="Laatst"
          prev="Vorig"
          next="Volgende"
          :total="dataProduct?.meta?.total"
          :per-page="dataProduct?.meta?.per_page"
          class="flex justify-center mt-10"
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

<script setup>
import axios from "axios";
const { axiosRequest } = useAxios();

const { loading } = useRequestHelper();
const { requestOptions } = useRequestOptions();
import { useTimeoutFn } from "@vueuse/core";
const router = useRouter();
const route = useRoute();

const page = ref(1);
// const search = ref("");
const selectedCity = ref("");
const selectedSoortLocatie = ref([]);
const selectedMinPrice = ref("");
const selectedMaxPrice = ref("");
const selectedMeterMin = ref("");
const selectedMeterMax = ref("");
const selectedFunctie = ref([]);

const { start, stop } = useTimeoutFn(() => {
  replaceWindow();
}, 1000);

watch(
  () => page.value,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      start();
    }
  }
);

watch(
  [
    () => selectedCity.value,
    () => selectedSoortLocatie.value,
    () => selectedMinPrice.value,
    () => selectedMaxPrice.value,
    () => selectedMeterMin.value,
    () => selectedMeterMax.value,
    () => selectedFunctie.value,
  ],
  (
    [
      cityValue,
      soortLocatieValue,
      minPriceValue,
      maxPriceValue,
      minMeterValue,
      maxMeterValue,
      functieValue,
    ],
    [
      oldCityValue,
      oldSoortLocatieValue,
      oldMinPriceValue,
      oldMaxPriceValue,
      oldMinMeterValue,
      oldMaxMeterValue,
      oldfunctieValue,
    ]
  ) => {
    if (
      cityValue !== oldCityValue ||
      soortLocatieValue !== oldSoortLocatieValue ||
      minPriceValue !== oldMinPriceValue ||
      maxPriceValue !== oldMaxPriceValue ||
      minMeterValue !== oldMinMeterValue ||
      maxMeterValue !== oldMaxMeterValue ||
      functieValue !== oldfunctieValue
    ) {
      page.value = 1;
      start();
      replaceWindow();
    }
  }
);

// untuk mengambil nilai location pada filter
const { data: dataForFilter } = await useFetch("/products", {
  method: "get",
  ...requestOptions,
});

const { data: locations } = await useFetch("/locations", {
  method: "get",
  ...requestOptions,
});

const arrayLocation = locations?.value?.data?.map((item) => item);
let city = ref(arrayLocation);
// end location

// untuk mengelola soort locatie
const { data: type } = await useFetch("/types", {
  method: "get",
  ...requestOptions,
});
const soortLocatiesRadio = type?.value?.data;

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
// end soort locatie

// untuk mengelola slider range
const numericPrices = dataForFilter.value.data.map((item) =>
  parseFloat(item.price)
);
const highestPrice = Math.max(...numericPrices);
function handlePriceChange(priceData) {
  selectedMinPrice.value = priceData.minPrice;
  selectedMaxPrice.value = priceData.maxPrice;
}
// end untuk mengelola slider range

// untuk mengelola facility
const { data: facility } = await useFetch("/facilities", {
  method: "get",
  ...requestOptions,
});

const functieCheckbox = facility?.value?.data;
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

const selectedFacilities = computed(() => {
  if (selectedFunctie.value.length > 0) {
    return `filter[facilities]=${selectedFunctie.value.join("|")}`;
  } else {
    return "";
  }
});
// end untuk mengelola facility

function replaceWindow() {
  let filters = [];
  if (selectedCity.value) {
    filters.push(`filter[location_id]=${selectedCity.value}`);
  }
  if (selectedSoortLocatie.value.length > 0) {
    const soortLocatieFilters = selectedSoortLocatie.value.map(
      (id) => `filter[type_id]=${id}`
    );
    filters = filters.concat(soortLocatieFilters);
  }
  if (selectedMinPrice && selectedMaxPrice) {
    filters.push(`filter[min_price]=${selectedMinPrice.value}`);
    filters.push(`filter[max_price]=${selectedMaxPrice.value}`);
  }

  if (selectedMeterMin && selectedMeterMax) {
    filters.push(`filter[min_area]=${selectedMeterMin.value}`);
    filters.push(`filter[max_area]=${selectedMeterMax.value}`);
  }

  if (selectedFacilities?.value) {
    filters.push(selectedFacilities.value);
  }

  const queryString = filters.join("&");
  const url = `/onze-locaties?page=${page.value}${
    queryString ? `&${queryString}` : ""
  }`;

  router.replace(url);
  refresh();
}

const {
  data: dataProduct,
  error,
  refresh,
} = await useAsyncData("dataProduct", () =>
  $fetch(
    `/products?filter[location_id]=${selectedCity.value}&filter[type_id]=${selectedSoortLocatie.value}&filter[min_price]=${selectedMinPrice.value}&filter[max_price]=${selectedMaxPrice.value}&filter[min_area]=${selectedMeterMin.value}&filter[max_area]=${selectedMeterMax.value}&${selectedFacilities.value}`,
    {
      method: "get",
      ...requestOptions,
    }
  )
);
</script>
