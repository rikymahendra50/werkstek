<template>
  <section class="pb-20 overflow-hidden">
    <TitleHeader
      title="Onze locaties"
      secondTitle="Bekijk al onze vacatures"
      description="Op deze locaties hebben we kantoorruimtes"
    />
    <div class="md:grid md:grid-cols-12 container-custom">
      <div class="md:col-span-4 sm:w-[90%]">
        <div class="mt-5">
          <button
            @click="showAllData"
            class="btn w-full bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded normal-case text-md"
          >
            Al Vacatures
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
        <div v-if="showFilter">
          <div class="relative">
            <div class="text-base mt-3 opacity-50">Kies een locatie</div>
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
          <div class="flex flex-col">
            <p class="text-sm mt-3 opacity-50">Vuur</p>
            <div class="grid grid-cols-2 my-2">
              <div class="relative">
                <input
                  type="number"
                  id="MinPrice"
                  placeholder="Min"
                  min="0"
                  class="input input-bordered w-[95%] p-[10px]input-md"
                  v-model="selectedMinHours"
                /><br />
                <span class="absolute top-3 right-8">vuur</span>
              </div>
              <div class="relative">
                <input
                  type="number"
                  id="MaxPrice"
                  min="0"
                  placeholder="Max"
                  class="input input-bordered w-[95%] p-[10px] input-md"
                  v-model="selectedMaxHours"
                /><br />
                <span class="absolute top-3 right-8">vuur</span>
              </div>
            </div>
            <div class="">
              <p class="text-base mt-3 opacity-50 pb-3">Opleidings niveau</p>
              <fieldset id="facility" class="grid grid-cols-1 gap-2">
                <div
                  class="flex items-center gap-2 cursor-pointer"
                  v-for="item in soortLocatiesRadio"
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
            </div>
          </div>
        </div>
      </div>
      <div class="md:col-span-8 py-5 overflow-auto">
        <div
          class="max-h-[400px] md:max-h-[870px] flex flex-col scrollbar-onze"
        >
          <template v-if="dataProduct2?.data">
            <eachVacatures
              v-for="(item, index) in dataProduct2?.data"
              :key="item?.id"
              :image="item?.image"
              :link="`/onze-vacatures/${item?.slug}`"
              :name="item?.title"
              :hours="item?.hours"
              :category="item?.category"
              :time="item?.updated_at"
            />
          </template>
        </div>
        <Pagination
          v-if="dataProduct2?.meta"
          :includeFirstLast="false"
          v-model="page"
          first="Eerst"
          last="Laatst"
          prev="Vorig"
          next="Volgende"
          :total="dataProduct2?.meta?.total"
          :per-page="dataProduct2?.meta?.per_page"
          class="flex justify-center mt-10"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const { requestOptions } = useRequestOptions();
import { useTimeoutFn } from "@vueuse/core";
const router = useRouter();
const route = useRoute();

const page = ref(1);
const selectedCity = ref("");
const selectedMinHours = ref("");
const selectedMaxHours = ref("");
const selectedFunctie = ref([]);

const locations = ref([]);
const soortLocatiesRadio = ref([]);

const showAllData = () => {
  selectedCity.value = "";
  selectedMinHours.value = "";
  selectedMaxHours.value = "";
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

const selectedFacilities = computed(() => {
  if (selectedFunctie.value.length > 0) {
    return `filter[types]=${selectedFunctie.value.join("|")}`;
  } else {
    return "";
  }
});

const {
  data: dataProduct2,
  error,
  refresh,
} = await useAsyncData("dataProduct2", () =>
  $fetch(
    `/jobs?filter[location_id]=${selectedCity.value}&filter[min_hours]=${selectedMinHours.value}&filter[max_hours]=${selectedMaxHours.value}&${selectedFacilities.value}`,
    {
      method: "get",
      headers: {
        Accept: "application/json",
      },
      ...requestOptions,
    }
  )
);

const { start, stop } = useTimeoutFn(() => {
  replaceWindow();
}, 100);

watch(
  () => page.value,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      start();
    }
  }
);

watch(
  () => selectedMinHours.value,
  (newValue, oldValue) => {
    if (newValue !== oldValue) {
      page.value = 1;
      start();
    }
  }
);

watch(
  () => selectedMaxHours.value,
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
  if (route.query.min_hours) {
    selectedMinHours.value = parseInt(route.query.min_hours);
  }
  if (route.query.max_hours) {
    selectedMaxHours.value = parseInt(route.query.max_hours);
  }
  if (route.query.facilities) {
    const facilitiesIds = route.query.facilities?.split("|")?.map(Number);
    selectedFunctie.value = facilitiesIds;
  }
  start();
});

async function loadProperties() {
  const [locationsT, soortLocatiesRadioT] = await Promise.all([
    $fetch("/locations", {
      method: "get",
      headers: {
        Accept: "application/json",
      },
      ...requestOptions,
    }),
    $fetch("/type-jobs", {
      method: "get",
      headers: {
        Accept: "application/json",
      },
      ...requestOptions,
    }),
    $fetch("/facilities", {
      method: "get",
      headers: {
        Accept: "application/json",
      },
      ...requestOptions,
    }),
  ]);

  locations.value = locationsT?.data;
  soortLocatiesRadio.value = soortLocatiesRadioT?.data;
  // functieCheckbox.value = facilitiesT?.data;
}

const city = computed(() => {
  return locations.value.map((item) => item);
});
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
    filters.push(`location=${selectedCity.value}`);
  }
  if (selectedMaxHours.value) {
    filters.push(`max_hours=${selectedMaxHours.value}`);
  }
  if (selectedMinHours.value) {
    filters.push(`min_hours=${selectedMinHours.value}`);
  }
  if (selectedFunctie?.value) {
    const facilitiesQuery = selectedFunctie.value.join("|");
    filters.push(`facilities=${facilitiesQuery}`);
  }
  const queryString = filters.join("&");
  const url = `/onze-vacatures?page=${page.value}${
    queryString ? `&${queryString}` : ""
  }`;

  router.replace(url);
  refresh();
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
