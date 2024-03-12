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
              <Map :AllData="dataProduct.data" />
              <!--  <div class="flex justify-center md:mt-4">
                <button
                  @click="showAllData"
                  class="btn btn-outline btn-orange btn-sm mt-3"
                >
                  Show All Data
                </button>
              </div> -->
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
            v-for="(item, index) in dataProduct.data"
            :key="item?.id"
            :name="item?.location?.name"
            :type="item?.level_type?.name"
            :latitude="item?.latitude"
            :longitude="item?.longitude"
            :link="`/onze-locaties/${item.slug}`"
            :price="item?.price"
            :image="item?.images[0]?.image"
            :rating="item?.rating"
          />
        </div>
        <Pagination
          v-model="page"
          :total="dataProduct?.meta?.total"
          :per-page="dataProduct?.meta?.per_page"
          class="flex justify-center mt-10"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from "axios";
const { axiosRequest } = useAxios();

const { loading } = useRequestHelper();
const { requestOptions } = useRequestOptions();
import { useTimeoutFn } from "@vueuse/core";
const router = useRouter();
const route = useRoute();

const page = ref(1);
const search = ref("");

const { data: dataForFilter } = await useFetch("/products", {
  method: "get",
  ...requestOptions,
});

const { data: type } = await useFetch("/types", {
  method: "get",
  ...requestOptions,
});

const { data: facility } = await useFetch("/facilities", {
  method: "get",
  ...requestOptions,
});

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
  () => search.value,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      page.value = 1;
      start();
    }
  }
);

const {
  data: dataProduct,
  error,
  refresh,
} = await useAsyncData("dataProduct", () =>
  $fetch(`/products?page=${page.value}&filter[search]=${search.value}`, {
    method: "get",
    ...requestOptions,
  })
);

function replaceWindow() {
  router.replace(`/onze-locaties?page=${page.value}&search=${search.value}`);
  refresh();
}

const showFilter = ref();
const toggleDetail = () => {
  showFilter.value = !showFilter.value;
};

onMounted(() => {
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

function splitColumns(arr) {
  const midpoint = Math.ceil(arr.length / 2);
  return [arr.slice(0, midpoint), arr.slice(midpoint)];
}

const arrayLocation = dataProduct?.value?.data?.map((item) => item.location);

let city = ref([]);
let citySet = {};

arrayLocation.forEach((element) => {
  const cityName = element.name;
  const cityId = element.id;
  if (!citySet[cityName]) {
    // console.log(cityName, cityId);
    citySet[cityName] = cityId;
    city.value.push({ name: cityName, id: cityId });
  }
});

const soortLocatiesRadio = type.value.data;
const functieCheckbox = facility.value.data;
const numericPrices = dataForFilter.value.data.map((item) =>
  parseFloat(item.price)
);
const highestPrice = Math.max(...numericPrices);

function isSelectedSoort(id) {
  return selectedSoortLocatie.value.includes(id);
}

function isSelectedFuncti(id) {
  return selectedFunctie.value.includes(id);
}

function handlePriceChange(priceData) {
  setTimeout(() => {
    selectedMinPrice.value = priceData.minPrice;
    selectedMaxPrice.value = priceData.maxPrice;
  }, 900);
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

function handlefunctieCheckbox(id) {
  if (selectedFunctie.value.includes(id)) {
    selectedFunctie.value = selectedFunctie.value.filter((item) => item !== id);
  } else {
    selectedFunctie.value = [...selectedFunctie.value, id];
  }
}

const selectedCity = ref();
const selectedSoortLocatie = ref([]);
const selectedFunctie = ref([]);
const selectedMinPrice = ref();
const selectedMaxPrice = ref();
const selectedMeterMin = ref();
const selectedMeterMax = ref();

// selectedCity.value = "Locatie";

watchEffect(() => {
  fetchData();
});

async function fetchData() {
  const response = await axiosRequest.get(`/products`, {
    params: {
      "filter[min_price]": selectedMinPrice.value,
      "filter[max_price]": selectedMaxPrice.value,
      "filter[min_area]": selectedMeterMin.value,
      "filter[max_area]": selectedMeterMax.value,
      "filter[type_id]": selectedSoortLocatie.value,
      "filter[location_id]": selectedCity.value,
      "filter[productFacility.facility_id]": selectedFunctie.value,
    },
  });
  dataProduct.value = response.data;
}
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
