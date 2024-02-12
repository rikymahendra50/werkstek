<template>
  <section class="py-20">
    <TitleHeader
      title="Onze Vacaturies"
      secondTitle="Bekijk al onze Vacaturies"
      description="Op deze locaties hebben we kantoorruimtes"
    />
    <div class="lg:grid lg:grid-cols-12 container-custom">
      <div class="w-full col-span-4">
        <!-- filter -->
        <span class="text-base opacity-50">Kies een locatie</span>
        <form id="filterForm">
          <details class="dropdown" @toggle="toggleDropdown">
            <summary
              class="m-1 btn bg-[white] normal-case font-normal w-[300px] max-w-[90%] justify-between"
            >
              <div class="flex items-center">
                <img src="/images/location.svg" class="pl-1 pr-3" />
                {{ selectedName || "Alles" }}
              </div>
              <img src="/images/arrow-down.svg" class="p-1" />
            </summary>
            <ul
              class="p-2 shadow menu dropdown-content z-[1] bg-white rounded-[8px] w-[90%]"
              v-if="isOpen"
            >
              <li
                class="py-1 text-md"
                v-for="(item, index) in name"
                :key="index"
              >
                <option @click="selectName(item)">{{ item }}</option>
              </li>
            </ul>
          </details>
        </form>
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
            :maxPrice="1000"
            :minRange="0"
            :maxRange="850"
            :priceGap="100"
            class="my-2 w-[80%]"
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
                    v-for="item in opleidings"
                    :key="item.id"
                  >
                    <input
                      type="radio"
                      :id="item.id"
                      :value="item.name"
                      :name="item.name"
                      class="mr-2 pt-[0.7px]"
                      v-model="selectedFunctie"
                    />
                    <label :for="item.id" class="cursor-pointer">{{
                      item.name
                    }}</label>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
          <img src="/images/filter-icon.svg" class="w-5 h-5 my-4" />
          <p class="text-base opacity-50">Meer filter opties</p>
        </div>
      </div>
      <div
        class="py-5 col-span-8 overflow-auto max-h-[400px] md:max-h-[870px] flex flex-col scrollbar-onze"
      >
        <!-- data -->
        <eachLocaties
          v-for="(item, index) in data.data"
          :key="item.id"
          :name="item.name"
          :image="item.image"
          :price="parseFloat(item.price)"
          :link="item.slug"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const { requestOptions } = useRequestOptions();
const { data, refresh } = useFetch(`/products`, {
  method: "get",
  ...requestOptions,
});

const name = ref([
  "Alles",
  "Simon Stevinweg 27",
  "Locatie",
  "Example",
  "Amsterdam",
]);

const soortLocatiesRadio = ref([
  {
    id: 1,
    name: "Alles",
  },
  {
    id: 2,
    name: "Stage plaats",
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

const opleidings = ref([
  {
    id: 5,
    name: "Alles",
  },
  {
    id: 6,
    name: "MBO",
  },
  {
    id: 7,
    name: "HBO",
  },
  {
    id: 8,
    name: "Universiteit",
  },
]);

const isOpen = ref(false);
const selectedName = ref();
const selectedMinPrice = ref(0);
const selectedMaxPrice = ref(0);
const selectedSoortLocatie = ref("");
const selectedFunctie = ref([]);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function selectName(name) {
  selectedName.value = name;
}

function handlePriceChange(priceData) {
  selectedMinPrice.value = priceData.minPrice;
  selectedMaxPrice.value = priceData.maxPrice;
}

const filterData = computed(() => {
  let filteredItems = [];

  // filter dropdown city
  if (selectedName.value && selectedName.value !== "Alles") {
    filteredItems = filteredItems.filter(
      (item) => item.name === selectedName.value
    );
  }

  // filter radio
  if (selectedSoortLocatie.value && selectedSoortLocatie.value !== "Alles") {
    filteredItems = filteredItems.filter(
      (item) => item.soortLocaties === selectedSoortLocatie.value
    );
  }

  // filter radio
  if (selectedFunctie.value && selectedFunctie.value !== "Alles") {
    filteredItems = filteredItems.filter(
      (item) => item.opleidings === selectedFunctie.value
    );
  }

  // slider range price
  if (parseInt(selectedMinPrice) >= 0 && parseInt(selectedMaxPrice)) {
    filteredItems = filteredItems.filter(
      (item) =>
        item.price >= parseInt(selectedMinPrice) &&
        item.price <= parseInt(selectedMaxPrice)
    );
  }

  return filteredItems;
});
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
