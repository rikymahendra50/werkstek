<template>
  <section class="py-20">
    <TitleHeader
      title="Onze locaties"
      secondTitle="Bekijk al onze locaties"
      description="Op deze locaties hebben we kantoorruimtes"
    />
    <div class="md:grid md:grid-cols-12 container-custom mx-2 sm:mx-0">
      <div class="md:col-span-4 sm:w-[90%]">
        <div class="sm:mt-5">
          <button
            @click="showAllData"
            class="btn w-full bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded normal-case text-md"
          >
            Al Onze Locaties
          </button>
          <button
            class="flex items-center gap-3 hover:text-primary"
            @click="toggleDetail"
          >
            <img
              src="/images/filter-icon.svg"
              class="w-5 h-5 my-4"
              alt="filter"
            />
            <p class="text-base opacity-50">Meer filter opties</p>
          </button>
        </div>
        <div v-if="showFilter" class="">
          <!--<label for="city" class="text-base mt-3 opacity-50"
            >Kies een locatie</label
          >
           <div class="flex-col form-control mt-2 relative">
            <select
              id="city"
              class="select select-bordered dropdown z-10"
              v-model="selectedCity"
            >
              <option disabled selected>Locatie</option>
              <option
                class="text-sm flex items-center p-5"
                v-for="(item, index) in city"
                :key="index"
                :value="item.id"
              >
                <img
                  src="/images/location-logo-locaties.svg"
                  alt="img-logo"
                  class="w-8 h-8"
                />
                {{ item.name }}
              </option>
            </select>
          </div> -->

          <!-- test -->
          <div class="relative">
            <label for="city" class="text-base mt-3 opacity-50"
              >Kies een locatie</label
            >
            <div
              class="w-full border py-3 rounded-lg px-2 flex justify-between items-center cursor-pointer mt-2 select-none"
              @click="variableToggleLocatieF"
            >
              <div class="flex items-center gap-2">
                <img src="/images/marker-dropdown.svg" alt="markers" />
                <p class="text-[#ADA7A7] text-base">
                  {{ selectedCityForShow }}
                </p>
              </div>
              <Icon name="ep:arrow-up-bold" class="text-[#ADA7A7] rotate-180" />
            </div>

            <div
              class="w-full absolute bg-white mt-2 z-10 select-none"
              v-if="variableToggleLocatie"
            >
              <ul
                class="flex flex-col rounded-lg border text-[#ADA7A7] max-h-[150px] overflow-y-auto"
              >
                <li
                  class="hover:bg-primary bg-white hover:text-white cursor-pointer pl-3 py-2 rounded-lg"
                  v-for="(item, index) in city"
                  :key="index"
                  @click="variableToggleLocatieT(item.id, item.name)"
                >
                  {{ item.name }}
                </li>
              </ul>
            </div>
          </div>

          <!-- end test -->
          <div class="flex flex-col">
            <span class="text-base mt-3 opacity-50 pb-3">Soort locatie</span>
            <fieldset id="soortLocatie" class="grid lg:grid-cols-2 gap-2">
              <div
                class="flex items-center cursor-pointer gap-2 md:gap-4"
                v-for="item in soortLocatiesRadio"
              >
                <input
                  :id="item.id"
                  :name="'Soort' + item.id"
                  :value="item.id"
                  v-model="selectedSoortLocatie"
                  type="radio"
                />
                <label :for="item.id" class="cursor-pointer text-sm">
                  {{ item.name }}
                </label>
              </div>
            </fieldset>
            <!-- <SliderRange
              :title="'De prijs per maand'"
              :idInputMin="'priceMin'"
              :idInputMax="'priceMax'"
              v-model:minPrice="selectedMinPrice"
              v-model:maxPrice="selectedMaxPrice"
              :minRange="0"
              :maxRange="highestPrice"
              :priceGap="highestPrice"
              class="my-2"
            /> -->
            <label for="MinPrice" class="text-sm mt-3 opacity-50">Price</label>
            <label for="MaxPrice" class="text-sm mt-3 opacity-50 hidden"
              >Price</label
            >
            <div class="grid grid-cols-2 my-2">
              <div class="relative">
                <input
                  type="number"
                  id="MinPrice"
                  placeholder="Min"
                  min="0"
                  class="input input-bordered w-[95%] p-[10px] input-md"
                  v-model="selectedMinPrice"
                /><br />
                <span class="absolute top-3 right-8">€</span>
              </div>
              <div class="relative">
                <input
                  type="number"
                  id="MaxPrice"
                  min="0"
                  placeholder="Max"
                  class="input input-bordered w-[95%] p-[10px] input-md"
                  v-model="selectedMaxPrice"
                /><br />
                <span class="absolute top-3 right-8">€</span>
              </div>
            </div>
            <div class="">
              <label for="deopervlakteMin" class="text-sm mt-3 opacity-50"
                >De opervlakte m²</label
              >
              <label
                for="deopervlakteMax"
                class="text-sm mt-3 opacity-50 hidden"
                >De opervlakte m²</label
              >
              <div class="grid grid-cols-2 my-2">
                <div class="relative">
                  <input
                    type="number"
                    id="deopervlakteMin"
                    placeholder="Min"
                    min="0"
                    class="input input-bordered w-[95%] p-[10px]input-md"
                    v-model="selectedMeterMin"
                  /><br />
                  <span class="absolute top-3 right-8">m<sup>2</sup></span>
                </div>
                <div class="relative">
                  <input
                    type="number"
                    id="deopervlakteMax"
                    min="0"
                    placeholder="Max"
                    class="input input-bordered w-[95%] p-[10px] input-md"
                    v-model="selectedMeterMax"
                  /><br />
                  <span class="absolute top-3 right-8">m<sup>2</sup></span>
                </div>
              </div>
              <p class="text-base mt-3 opacity-50 pb-3">Facility</p>
              <fieldset id="facility" class="grid lg:grid-cols-1 gap-4">
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
                  <label
                    :for="`facility-${item.id}`"
                    class="cursor-pointer text-sm"
                  >
                    {{ item.name }}
                  </label>
                </div>
              </fieldset>
              <Map :AllData="dataProduct?.data" />
            </div>
          </div>
        </div>
      </div>
      <div class="md:col-span-8 py-5 overflow-auto">
        <div
          class="max-h-[400px] md:max-h-[870px] md:min-h-[870px] flex flex-col scrollbar-onze"
        >
          <eachLocaties
            v-if="dataProduct?.data"
            v-for="(item, index) in dataProduct?.data"
            :key="item?.id"
            :name="item?.name"
            :address="item?.address"
            :category="item?.type?.name"
            :areaSize="item?.area_size"
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
          :includeFirstLast="false"
          v-if="dataProduct?.meta"
          v-model="page"
          first="Eerst"
          last="Laatst"
          prev="Vorig"
          next="Volgende"
          :total="dataProduct?.meta?.total"
          :per-page="dataProduct?.meta?.per_page"
          class="flex justify-center mt-5"
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
const { requestOptions } = useRequestOptions();
import { useTimeoutFn } from "@vueuse/core";
const router = useRouter();
const route = useRoute();

const page = ref(1);
const selectedCity = ref("");
const selectedSoortLocatie = ref("");
const selectedMinPrice = ref("");
const selectedMaxPrice = ref("");
const selectedMeterMin = ref("");
const selectedMeterMax = ref("");
const selectedFunctie = ref([]);

const dataForFilter = ref([]);
const locations = ref([]);
const soortLocatiesRadio = ref([]);
const functieCheckbox = ref([]);

const showAllData = () => {
  selectedCity.value = "";
  selectedSoortLocatie.value = "";
  selectedMinPrice.value = "";
  selectedMaxPrice.value = "";
  selectedMeterMin.value = "";
  selectedMeterMax.value = "";
  selectedFunctie.value = [];
};

const variableToggleLocatie = ref();
const selectedCityForShow = ref("Locatie");

function variableToggleLocatieF() {
  variableToggleLocatie.value = !variableToggleLocatie.value;
}

function variableToggleLocatieT(item, itemName) {
  if (item) {
    selectedCity.value = item;
    selectedCityForShow.value = itemName;
  }
  variableToggleLocatie.value = false;
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

const selectedFacilities = computed(() => {
  if (selectedFunctie.value.length > 0) {
    return `filter[facilities]=${selectedFunctie.value
      .map((item) => item.toString())
      .join("|")}`;
  } else {
    return "";
  }
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
  () => selectedMinPrice.value,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      page.value = 1;
      start();
    }
  }
);

watch(
  () => selectedMaxPrice.value,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      page.value = 1;
      start();
    }
  }
);

watch(
  () => selectedCity.value,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      page.value = 1;
      start();
    }
  }
);

watch(
  () => selectedSoortLocatie.value,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      page.value = 1;
      start();
    }
  }
);

watch(
  () => selectedMeterMin.value,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      page.value = 1;
      start();
    }
  }
);

watch(
  () => selectedMeterMax.value,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      page.value = 1;
      start();
    }
  }
);

watch(
  () => selectedFunctie.value,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      page.value = 1;
      start();
    }
  }
);

const showFilter = ref();
const toggleDetail = () => {
  showFilter.value = !showFilter.value;
};

onMounted(() => {
  stop();
  loadProperties();
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

  if (route.query.page) {
    page.value = route.query.page;
  }
  if (route.query.location_id) {
    selectedCity.value = route.query.location_id;
  }
  if (route.query.type_id) {
    // const typeIds = route.query.type_id?.split(",")?.map(Number);
    // selectedSoortLocatie.value = typeIds;
    selectedSoortLocatie.value = route.query.type_id;
  }

  if (route.query.min_price) {
    selectedMinPrice.value = parseInt(route.query.min_price);
  }
  if (route.query.max_price) {
    selectedMaxPrice.value = parseInt(route.query.max_price);
  }
  if (route.query.min_area) {
    selectedMeterMin.value = route.query.min_area;
  }
  if (route.query.max_area) {
    selectedMeterMax.value = route.query.max_area;
  }
  if (route.query.facilities) {
    const facilitiesIds = route.query.facilities?.split("|")?.map(Number);
    selectedFunctie.value = facilitiesIds;
  }

  start();
});

async function loadProperties() {
  const [dataForFilterT, locationsT, soortLocatiesRadioT, facilitiesT] =
    await Promise.all([
      $fetch("/products", {
        method: "get",
        ...requestOptions,
      }),
      $fetch("/locations", {
        method: "get",
        ...requestOptions,
      }),
      $fetch("/types", {
        method: "get",
        ...requestOptions,
      }),
      $fetch("/facilities", {
        method: "get",
        ...requestOptions,
      }),
    ]);

  dataForFilter.value = dataForFilterT?.data;
  locations.value = locationsT?.data;
  soortLocatiesRadio.value = soortLocatiesRadioT?.data;
  functieCheckbox.value = facilitiesT?.data;
}

const city = computed(() => {
  return locations.value.map((item) => item);
});

const highestPrice = computed(() => {
  const numericPrices = dataForFilter.value.map((item) =>
    parseFloat(item.price)
  );

  if (numericPrices.length === 0) {
    return 0;
  }

  const highestPrice2 = Math.max(...numericPrices);

  return highestPrice2;
});

// function isSelectedSoort(id) {
//   selectedSoortLocatie.value = id;
// }
// function handleSoortLocatieChange(id) {
// if (selectedSoortLocatie.value.includes(id)) {
//   selectedSoortLocatie.value = selectedSoortLocatie.value.filter(
//     (item) => item !== id
//   );
// } else {
//   selectedSoortLocatie.value = [...selectedSoortLocatie.value, id];
// }
// }

// end soort locatie

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
// end untuk mengelola facility

function replaceWindow() {
  let filters = [];
  if (selectedCity.value) {
    filters.push(`location_id=${selectedCity.value}`);
  }
  if (selectedSoortLocatie.value) {
    filters.push(`type_id=${selectedSoortLocatie.value}`);
  }
  if (selectedMaxPrice.value) {
    filters.push(`min_price=${selectedMinPrice.value}`);
    filters.push(`max_price=${selectedMaxPrice.value}`);
  }

  if (selectedMeterMin && selectedMeterMax) {
    filters.push(`filter[min_area]=${selectedMeterMin.value}`);
    filters.push(`filter[max_area]=${selectedMeterMax.value}`);
  }

  if (selectedFunctie?.value) {
    const facilitiesQuery = selectedFunctie.value.join("|");
    filters.push(`facilities=${facilitiesQuery}`);
  }
  const queryString = filters.join("&");
  const url = `/onze-locaties?page=${page.value}${
    queryString ? `&${queryString}` : ""
  }`;

  router.replace(url);
  refresh();
}
</script>
