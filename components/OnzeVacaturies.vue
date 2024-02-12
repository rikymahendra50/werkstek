<template>
  <section class="py-20">
    <TitleHeader
      title="Onze locaties"
      secondTitle="Bekijk al onze locaties"
      description="Op deze locaties hebben we kantoorruimtes"
    />
    <div class="flex flex-col md:flex-row container-custom">
      <div class="w-full md:w-[35%]">
        <span class="text-base opacity-50">Kies een locatie</span>
        <form id="filterForm">
          <select id="kota" v-model="selectedCity" class="dropdown">
            <option value="">Alles</option>
            <option
              class="text-sm flex items-center p-5"
              v-for="(item, index) in city"
              :key="index"
            >
              {{ item }}
            </option>
          </select>
        </form>
        <div class="flex flex-col">
          <p class="text-base mt-3 opacity-50 mb-2">Soort locatie</p>
          <div class="flex flex-col">
            <fieldset id="soortLocatie" class="flex flex-col gap-2">
              <div
                class="flex justify-start items-center"
                v-for="item in soortLocaties"
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
        class="py-5 md:w-[65%] overflow-auto max-h-[400px] md:max-h-[870px] flex flex-col"
      >
        <div v-if="filteredData.length > 0">
          <eachLocaties
            v-for="item in filteredData"
            :key="item.id"
            :link="item.detailLink"
            :image="item.image"
            :rating="item.rating"
            :type="item.type"
            :city="item.city"
            :adres="item.adres"
            :phoneNumber="item.phoneNumber"
            :price="item.price"
            :mailAdres="item.mailAdres"
            :detailLinkTitle="item.detailLinkTitle"
            :opervlakte="item.opervlakte"
          />
        </div>
        <div v-else>
          <div class="flex items-center justify-center">No item selected</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      city: ["Utrecht", "Locatie", "Example", "Amsterdam"],
      soortLocaties: [
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
      ],
      opleidings: [
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
      ],
      Vacaturies: [
        {
          id: 1,
          type: "Regular",
          image: "/images/img-each-locatie-1.png",
          soortLocaties: "Alles",
          opleidings: "MBO",
          city: "Amsterdam",
          adres: "Adres",
          opervlakte: "opervlakte",
          price: 495,
          phoneNumber: "+31302393838",
          mailAdres: "Mail adres",
          detailLinkTitle: "Neem een kijkje",
          detailLink: "/onze-vacaturies/onze-locaties-single",
          rating: 9.4,
        },
        {
          id: 2,
          type: "Premium",
          image: "/images/img-each-locatie-2.jpg",
          soortLocaties: "Stage plaats",
          opleidings: "MBO",
          city: "Locatie",
          adres: "Adres",
          opervlakte: "opervlakte",
          price: 495,
          phoneNumber: "+31302393838",
          mailAdres: "Mail adres",
          detailLinkTitle: "Neem een kijkje",
          detailLink: "/onze-vacaturies/onze-locaties-single",
          rating: 9.4,
        },
        {
          id: 3,
          type: "Premium",
          image: "/images/img-each-locatie-3.jpg",
          soortLocaties: "Stage plaats",
          opleidings: "HBO",
          city: "Locatie",
          adres: "Adres",
          opervlakte: "opervlakte",
          price: 680,
          phoneNumber: "+31302393838",
          mailAdres: "Mail adres",
          detailLinkTitle: "Neem een kijkje",
          detailLink: "/onze-vacaturies/onze-locaties-single",
          rating: 9.4,
        },
      ],
      selectedCity: "",
      selectedMinPrice: 0,
      selectedMaxPrice: 0,
      selectedSoortLocatie: "",
      selectedFunctie: "",
    };
  },
  props: {
    showLocaties: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    handlePriceChange(priceData) {
      this.selectedMinPrice = priceData.minPrice;
      this.selectedMaxPrice = priceData.maxPrice;
    },
  },
  computed: {
    filteredData() {
      let filteredItems = this.Vacaturies;

      // filter dropdown city
      if (this.selectedCity && this.selectedCity !== "Alles") {
        filteredItems = filteredItems.filter(
          (item) => item.city === this.selectedCity
        );
      }

      // filter radio
      if (this.selectedSoortLocatie && this.selectedSoortLocatie !== "Alles") {
        filteredItems = filteredItems.filter(
          (item) => item.soortLocaties === this.selectedSoortLocatie
        );
      }

      // filter radio
      if (this.selectedFunctie && this.selectedFunctie !== "Alles") {
        filteredItems = filteredItems.filter(
          (item) => item.opleidings === this.selectedFunctie
        );
      }

      // slider range price
      if (this.selectedMinPrice >= 0 && this.selectedMaxPrice) {
        filteredItems = filteredItems.filter(
          (item) =>
            item.price >= this.selectedMinPrice &&
            item.price <= this.selectedMaxPrice
        );
      }

      return filteredItems;
    },
  },
};
</script>

<!-- <script>
export default {
  setup() {
    // Membuat data reaktif menggunakan ref
    const selectedCity = ref("");
    const selectedSoortLocatie = ref("");
    const selectedFunctie = ref("");
    const selectedMinPrice = ref(0);
    const selectedMaxPrice = ref(0);
    const filteredData = ref([]);

    // Menggunakan watch untuk memantau perubahan pada properti tertentu
    watch(
      [
        selectedCity,
        selectedSoortLocatie,
        selectedFunctie,
        selectedMinPrice,
        selectedMaxPrice,
      ],
      async () => {
        // Melakukan permintaan data ke API ketika properti terpilih berubah
        try {
          const response = await axios.get(
            "url_api",
            {
              params: {
                city: selectedCity.value,
                soortLocatie: selectedSoortLocatie.value,
                functie: selectedFunctie.value,
                minPrice: selectedMinPrice.value,
                maxPrice: selectedMaxPrice.value,
              },
            }
          );
          // Memperbarui data yang difilter dengan hasil respons dari API
          filteredData.value = response.data;
        } catch (error) {
          console.error("Gagal mengambil data dari API:", error);
        }
      }
    );

    // Mengembalikan data dan metode yang diperlukan ke dalam template
    return {
      selectedCity,
      selectedSoortLocatie,
      selectedFunctie,
      selectedMinPrice,
      selectedMaxPrice,
      filteredData,
    };
  },
};
</script> -->
