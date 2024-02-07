<template>
  <section class="py-20">
    <TitleHeader
      title="Onze locaties"
      secondTitle="Bekijk al onze locaties"
      description="Op deze locaties hebben we kantoorruimtes"
    />
    <div class="container-custom flex flex-col lg:flex-row" v-if="showLocaties">
      <div class="w-full lg:w-[35%]">
        <p class="text-base opacity-50">Kies een locatie</p>
        <details class="dropdown">
          <summary
            class="m-1 btn bg-[white] normal-case font-normal w-[300px] max-w-[90%] justify-between"
          >
            <div class="flex items-center">
              <img src="/images/location.svg" class="pl-1 pr-3" />
              <span>Chose Location</span>
            </div>

            <img src="/images/arrow-down.svg" class="p-1" />
          </summary>
          <ul
            class="p-2 shadow menu dropdown-content z-[1] bg-white rounded-[8px] w-[90%]"
          >
            <li
              v-for="location in eachLocaties"
              :key="location.id"
              class="py-1 text-md"
            >
              <button @click="selectLocation(location)">
                {{ location.name }}
              </button>
            </li>
            <li class="py-1 text-md"><button>Other item..</button></li>
          </ul>
        </details>
        <div class="flex flex-col">
          <p class="text-base mt-3 opacity-50 pb-3">Soort locatie</p>
          <div class="grid grid-cols-2 grid-rows-2 gap-2">
            <Checkbox
              v-for="(soortlocati, index) in soortLocaties"
              :key="index"
              :titleCheckBox="soortlocati.name"
              v-model="soortlocati.checked"
              @click="selectSoort(soortlocati)"
            />
          </div>
          <SliderRange
            title="De prijs per maand"
            :minPrice="250"
            :maxPrice="850"
            :minRange="250"
            :maxRange="850"
            :priceGap="500"
            class="my-2"
          />
          <div class="w-[80%]">
            <p class="text-sm mt-3 opacity-50">De opervlakte m²</p>
            <div class="flex my-2">
              <div class="w-[50%] relative">
                <input
                  type="text"
                  placeholder="Min"
                  class="input input-bordered w-[90%] p-[10px] mr-2 input-md"
                />
                <span class="absolute top-3 right-9">m<sup>2</sup></span>
              </div>
              <div class="w-[50%] relative">
                <input
                  type="text"
                  placeholder="Max"
                  class="input input-bordered w-[90%] p-[10px] input-md"
                />
                <span class="absolute top-3 right-9">m<sup>2</sup></span>
              </div>
            </div>
          </div>
          <p class="my-3">-</p>
          <div class="flex justify-between">
            <div class="flex flex-col w-[33%] gap-2">
              <Checkbox titleCheckBox="Wifi" />
              <Checkbox titleCheckBox="Parkeerplaats" />
              <Checkbox titleCheckBox="Receptie" />
              <Checkbox titleCheckBox="Koffiebar" />
            </div>
            <div class="flex flex-col w-[67%] gap-2">
              <Checkbox titleCheckBox="Keuken" />
              <Checkbox titleCheckBox="Vlakbij het treinstation" />
              <Checkbox titleCheckBox="Loungeplekken" />
              <Checkbox titleCheckBox="Vergaderruimtes met videoschermen" />
            </div>
          </div>
          <div class="mt-5">
            <img src="/images/filter-icon.svg" alt="filter" class="w-8 h-8" />
            <p class="text-base mt-3 opacity-50">Meer filter opties</p>
          </div>
          <Map />
        </div>
      </div>
      <div
        class="py-5 lg:w-[65%] overflow-auto max-h-[400px] md:max-h-[870px] flex flex-col"
      >
        <div v-for="item in filteredLocations" :key="item.id">
          <NuxtLink
            :to="item.detailLink"
            class="grid grid-cols-8 grid-rows-1 mb-2 lg:mb-5 mx-2 sm:mx-0 rounded-lg group hover:shadow-md transition min-h-[150px] sm:min-h-[170px] md:min-h-[200px]"
          >
            <div
              class="grid col-span-4 md:col-span-5 md:min-h-[210px] h-full bg-no-repeat bg-cover rounded-lg relative text-white"
              :style="{
                backgroundImage: `url('${item.image}')`,
                background: `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%), url('${item.image}')`,
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }"
            >
              <div class="flex flex-col">
                <span
                  class="bg-primary absolute top-0 left-0 flex sm:py-1 px-1 sm:px-2 gap-1 md:gap-2 rounded-full ml-2 mt-2 text-[12px] sm:text-sm"
                >
                  <img
                    src="/images/icon-rating-white.svg"
                    alt="page2"
                    class="w-[14px]"
                  />
                  {{ item.rating }}
                </span>
                <span
                  class="bg-primary absolute top-[30%] md:top-[20%] left-0 flex sm:py-1 px-1 sm:px-2 rounded-full ml-2 mt-2 text-[12px] sm:text-sm font-semibold"
                >
                  {{ item.type }}
                </span>
              </div>
            </div>
            <div class="grid col-span-4 md:col-span-3 ml-5 items-center">
              <span class="text-[14px] sm:text-lg font-semibold">{{
                item.locatie
              }}</span>
              <span class="text-sm">{{ item.adres }}</span>
              <div class="flex justify-between">
                <span class="text-[12px] sm:text-base font-bold">{{
                  item.opervlakte
                }}</span>
                <span class="text-[12px] sm:text-base">{{
                  item.phoneNumber
                }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[12px] sm:text-base">{{
                  item.pricePerMonth
                }}</span>
                <span class="text-[12px] sm:text-base">{{
                  item.mailAdres
                }}</span>
              </div>
              <div class="flex justify-end w-full">
                <div class="flex mt-2 sm:mt-0">
                  <div
                    class="text-primary group-hover:text-secondary transition sm:w-[90%] text-[12px] sm:text-[14px] md:text-[18px] border border-primary group-hover:border-secondary px-1 sm:px-2 lg:px-4 text-center rounded-full items-center flex justify-center"
                  >
                    {{ item.detailLinkTitle }}
                  </div>
                  <div
                    class="bg-primary group-hover:bg-secondary max-w-[21px] min-h-[21px] sm:max-w-[31px] sm:min-h-[31px] lg:max-w-[41px] lg:min-h-[41px] rounded-full"
                  >
                    <img src="/images/arrow-right.svg" alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      soortLocaties: [
        {
          name: "Alles",
          checked: false,
        },
        {
          name: "Anders",
          checked: false,
        },
        {
          name: "Kantoorruimte",
          checked: false,
        },
      ],
      dropdownOpen: false,
      selectedLocation: null,
      eachLocaties: [
        {
          id: 1,
          name: "Utrecht",
          soortLocatie: "alles",
          image: "/images/img-each-locatie-1.png",
          type: "Regular",
          locatie: "Utrecht",
          adres: "Adres",
          opervlakte: "Opervlakte",
          pricePerMonth: "€ 495 p/maand",
          phoneNumber: "+31302393838",
          mailAdres: "Mail adres",
          detailLinkTitle: "Neem een kijkje",
          detailLink: "/onze-locaties/rikymahendra",
          rating: 9.4,
        },
        {
          id: 2,
          name: "Locatie",
          soortlocatie: "Anders",
          image: "/images/img-each-locatie-2.jpg",
          type: "Premium",
          locatie: "Locatie",
          adres: "Adres",
          opervlakte: "Opervlakte",
          pricePerMonth: "€ 495 p/maand",
          phoneNumber: "+31302393838",
          mailAdres: "Mail adres",
          detailLinkTitle: "Neem een kijkje",
          detailLink: "/onze-locaties/rikymahendra",
          rating: 9.4,
        },
        {
          id: 3,
          name: "Locatie",
          soortlocatie: "Kantoorruimte",
          image: "/images/img-each-locatie-3.jpg",
          type: "Premium",
          locatie: "Locatie",
          adres: "Adres",
          opervlakte: "Opervlakte",
          pricePerMonth: "€ 495 p/maand",
          phoneNumber: "+31302393838",
          mailAdres: "Mail adres",
          detailLinkTitle: "Neem een kijkje",
          detailLink: "/onze-locaties/rikymahendra",
          rating: 9.4,
        },
      ],
    };
  },
  computed: {
    filteredLocations() {
      if (!this.selectedLocation) return [];
      // Filter berdasarkan lokasi yang dipilih
      let filtered = this.eachLocaties.filter(
        (item) => item.locatie === this.selectedLocation.name
      );
      // Filter berdasarkan status checkbox yang dipilih
      this.soortLocaties.forEach((checkbox) => {
        if (checkbox.checked && checkbox.name !== "Alles") {
          filtered = filtered.filter(
            (item) => item.soortlocatie === checkbox.name
          );
        }
      });
      return filtered;
    },
  },
  props: {
    showLocaties: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    selectSoort(soortlocati) {
      soortlocati.checked = !soortlocati.checked;
      console.log("Selected Soort:", soortlocati.name);
    },
    selectSoort(soortlocati) {
      console.log("Selected Soort:", soortlocati.name);
    },

    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    selectLocation(location) {
      this.selectedLocation = location;
      this.locationSelected = true;
    },
    clearSelection() {
      this.selectedLocation = null;
      this.locationSelected = false;
    },
  },
};
</script>

<!-- <template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Cari..." />
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      items: [
        { id: 1, name: "Apel" },
        { id: 2, name: "Jeruk" },
        { id: 3, name: "Mangga" },
        { id: 4, name: "Pisang" },
        { id: 5, name: "Anggur" },
      ],
    };
  },
  computed: {
    filteredItems() {
      // Menggunakan fungsi filter() untuk menyaring item berdasarkan searchQuery
      return this.items.filter((item) =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
/* Styling jika diperlukan */
</style> -->
