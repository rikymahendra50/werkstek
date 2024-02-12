<template>
  <section class="py-20">
    <TitleHeader
      title="Onze locaties"
      secondTitle="Bekijk al onze locaties"
      description="Op deze locaties hebben we kantoorruimtes"
    />
    <div class="container-custom grid lg:grid-cols-12 gap-2">
      <div class="w-full lg:col-span-4">
        <!-- city -->
        <form class="flex flex-col">
          <span class="text-base opacity-50">Kies een locatie</span>
          <details class="dropdown" @toggle="toggleDropdown">
            <summary
              class="m-1 btn bg-[white] normal-case font-normal w-[300px] max-w-[90%] justify-between"
            >
              <div class="flex items-center">
                <img
                  src="/images/location.svg"
                  class="pl-1 pr-3"
                  alt="location"
                />
                {{ selectedName || "Alles" }}
              </div>
              <img src="/images/arrow-down.svg" class="p-1" alt="arrow" />
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
            :maxPrice="1000"
            :minRange="0"
            :maxRange="850"
            :priceGap="100"
            class="my-2"
            @price-change="handlePriceChange"
          />
          <div class="w-full">
            <p class="text-sm mt-3 opacity-50">De opervlakte m²</p>
            <div class="flex my-2">
              <div class="w-[50%] relative">
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
              <div class="w-[50%] relative">
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
        class="lg:col-span-8 py-5 overflow-auto max-h-[400px] md:max-h-[870px] md:min-h-[870px] flex flex-col scrollbar-onze"
      >
        <!-- <div v-if="filteredData.length > 0">
          <eachLocaties
            v-for="locatie in filteredData"
            :key="locatie.id"
            :city="locatie.city"
            :link="locatie.detailLink"
            :image="locatie.image"
            :rating="locatie.rating"
            :type="locatie.type"
            :adres="locatie.adres"
            :phoneNumber="locatie.phoneNumber"
            :price="locatie.price"
            :mailAdres="locatie.mailAdres"
            :detailLinkTitle="locatie.detailLinkTitle"
            :opervlakte="locatie.opervlakte"
          />
        </div>
        <div v-else>
          <div class="flex items-center justify-center">No item selected</div>
        </div> -->
        <!-- <pre>
          {{ data }}
        </pre> -->
        <eachLocaties
          v-for="(locatie, index) in data.data"
          :key="locatie.id"
          :name="locatie.name"
          :image="locatie.image"
          :link="locatie.link"
          :rating="locatie.rating"
          :type="locatie.type"
          :adres="locatie.adres"
          :phoneNumber="locatie.phoneNumber"
          :price="locatie.price"
          :mailAdres="locatie.mailAdres"
          :detailLinkTitle="locatie.detailLinkTitle"
          :opervlakte="locatie.opervlakte"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
const { requestOptions } = useRequestOptions();
const { data, refresh } = useFetch(`/locations`, {
  method: "get",
  ...requestOptions,
});

const name = ref(["Alles", "Utrecht", "Locatie", "Example", "Amsterdam"]);

const soortLocatiesRadio = ref([
  {
    id: 1,
    name: "Alles",
  },
  {
    id: 2,
    name: "Anders",
  },
  {
    id: 3,
    name: "Kantoorruimte",
  },
]);
const functieCheckbox = ref([
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
]);
const Locaties = ref([
  {
    id: 1,
    name: "Utrecht",
    soortLocaties: "Anders",
    deopervlakte: 19,
    price: 320,
    functie: ["Wifi", "Parkeerplaats"],
    coordinate: 0,
    image: "/images/img-each-locatie-1.png",
    type: "Premium",
    adres: "Adres",
    opervlakte: "Opervlakte",
    phoneNumber: "+31302393838",
    mailAdres: "Mail adres",
    detailLinkTitle: "Neem een kijkje",
    detailLink: "/onze-locaties/rikymahendra",
    rating: 9.4,
  },
  {
    id: 2,
    name: "Locatie",
    soortLocaties: "Alles",
    price: 100,
    deopervlakte: 20,
    functie: ["Wifi", "Parkeerplaats", "Loungeplekken"],
    coordinate: 0,
    image: "/images/img-each-locatie-2.jpg",
    type: "Premium",
    adres: "Adres",
    opervlakte: "Opervlakte",
    phoneNumber: "+31302393838",
    mailAdres: "Mail adres",
    detailLinkTitle: "Neem een kijkje",
    detailLink: "/onze-locaties/rikymahendra",
    rating: 9.4,
  },
  {
    id: 3,
    name: "Example",
    soortLocaties: "Anders",
    price: 120,
    deopervlakte: 23,
    functie: [
      "Wifi",
      "Parkeerplaats",
      "Loungeplekken",
      "Loungeplekken",
      "Koffiebar",
    ],
    coordinate: 0,
    image: "/images/img-each-locatie-3.jpg",
    type: "Premium",
    adres: "Adres",
    opervlakte: "Opervlakte",
    phoneNumber: "+31302393838",
    mailAdres: "Mail adres",
    detailLinkTitle: "Neem een kijkje",
    detailLink: "/onze-locaties/rikymahendra",
    rating: 9.4,
  },
  {
    id: 4,
    name: "Amsterdam",
    soortLocaties: "Alles",
    price: 100,
    deopervlakte: 25,
    functie: ["Loungeplekken", "Loungeplekken", "Koffiebar"],
    image: "/images/img-each-locatie-1.png",
    type: "Premium",
    adres: "Adres",
    opervlakte: "Opervlakte",
    phoneNumber: "+31302393838",
    mailAdres: "Mail adres",
    detailLinkTitle: "Neem een kijkje",
    detailLink: "/onze-locaties/rikymahendra",
    rating: 9.4,
  },
]);
const isOpen = ref(false);
const selectedName = ref();
const selectedMeterMin = ref(null);
const selectedMeterMax = ref(null);
const selectedMinPrice = ref(0);
const selectedMaxPrice = ref(0);
const selectedSoortLocatie = ref("");
const selectedFunctie = ref([]);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}
function selectName(name) {
  selectedName.value = name;
  isOpen.value = false;
}
function handlePriceChange(priceData) {
  selectedMinPrice.value = priceData.minPrice;
  selectedMaxPrice.value = priceData.maxPrice;
}

const filteredData = computed(() => {
  let filteredItems = Locaties.value;

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

  // filter checkbox
  if (selectedFunctie.value.length > 0) {
    filteredItems = filteredItems.filter((item) =>
      item.functie.some((functie) => selectedFunctie.value.includes(functie))
    );
  }

  // slider range price
  if (selectedMinPrice.price >= 0 && selectedMaxPrice.value) {
    filteredItems = filteredItems.filter(
      (item) =>
        item.price >= selectedMinPrice.value &&
        item.price <= selectedMaxPrice.value
    );
  }

  // filter metermin dan metermax
  if (selectedMeterMin.value && selectedMeterMax.value) {
    filteredItems = filteredItems.filter(
      (item) => item.deopervlakte > selectedMeterMin.value
    );
  } else if (!selectedMeterMin.value && selectedMeterMax.value) {
    filteredItems = filteredItems.filter(
      (item) => item.deopervlakte <= selectedMeterMax.value
    );
  } else if (selectedMeterMin.value && selectedMeterMax.value) {
    filteredItems = filteredItems.filter(
      (item) =>
        item.deopervlakte >= selectedMeterMin.value &&
        item.deopervlakte <= selectedMeterMax.value
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
