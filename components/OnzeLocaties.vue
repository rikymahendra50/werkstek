<!-- <template>
  <section class="py-20">
    <TitleHeader
      title="Onze locaties"
      secondTitle="Bekijk al onze locaties"
      description="Op deze locaties hebben we kantoorruimtes"
    />
    <div class="container-custom flex flex-col lg:flex-row" v-if="showLocaties">
      <div class="w-full lg:w-[35%]">
        <form id="filterForm">
          <label id="city" class="text-base opacity-50">Kies een locatie</label>
          <details id="name" class="dropdown">
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
              class="shadow menu dropdown-content z-[1] bg-white rounded-[8px] w-[90%]"
            >
              <li
                v-for="location in eachLocaties"
                :key="location.id"
                class="my-1 p-2 text-md cursor-pointer hover:bg-primary hover:text-white transition rounded-md"
              >
                {{ location.name }}
              </li>
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
        </form>
      </div>
      <div
        class="py-5 lg:w-[65%] overflow-auto max-h-[400px] md:max-h-[870px] flex flex-col"
      >
        <eachLocaties
          v-for="item in eachLocaties"
          :key="item.id"
          :link="item.detailLink"
          :image="item.image"
          :rating="item.rating"
          :type="item.type"
          :locatie="item.locatie"
          :adres="item.adres"
          :phoneNumber="item.phoneNumber"
          :pricePerMonth="item.pricePerMonth"
          :mailAdres="item.mailAdres"
          :detailLinkTitle="item.detailLinkTitle"
          :opervlakte="item.opervlakte"
        />
      </div>
    </div>
  </section>
</template>
<-- <script>
export default {
  data() {
    return {
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
  props: {
    showLocaties: {
      type: Boolean,
      default: true,
    },
  },
};
</script> -->

<template>
  <section class="py-20">
    <TitleHeader
      title="Onze locaties"
      secondTitle="Bekijk al onze locaties"
      description="Op deze locaties hebben we kantoorruimtes"
    />
    <div class="container-custom flex flex-col lg:flex-row" v-if="showLocaties">
      <div class="w-full lg:w-[35%]">
        <!-- city -->
        <label class="text-base opacity-50">Kies een locatie</label>
        <select id="name" @change="filterLocaties">
          <option value="" class="text-sm flex items-center p-5">All</option>
          <option
            v-for="locatie in Locaties"
            :key="locatie.name"
            :value="locatie.name"
          >
            {{ locatie.name }}
          </option>
        </select>
        <br />
        <!-- end city -->
        <div class="flex flex-col">
          <!-- soort Locatie -->
          <p class="text-base mt-3 opacity-50 pb-3">Soort locatie</p>
          <fieldset
            id="soortLocatie"
            class="grid grid-cols-2 grid-rows-2 gap-2"
          >
            <Checkbox
              v-for="soortlocati in checkbox.soortLocaties"
              :key="soortlocati.id"
              :id="soortlocati.id"
              :titleCheckBox="soortlocati.name"
              @change="filterLocaties"
            />
          </fieldset>
          <SliderRange
            title="De prijs per maand"
            idInputMin="priceMin"
            idInputMax="priceMax"
            :minPrice="0"
            :maxPrice="1000"
            :minRange="0"
            :maxRange="850"
            :priceGap="100"
            class="my-2"
            @input="filterLocaties"
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
                  @input="filterLocaties"
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
                  @input="filterLocaties"
                /><br />
                <span class="absolute top-3 right-14">m<sup>2</sup></span>
              </div>
            </div>
            <p class="my-3">-</p>
            <div class="flex justify-between gap-2 text-sm sm:text-base">
              <div class="flex flex-col">
                <fieldset id="functie">
                  <Checkbox
                    v-for="soortlocati in checkbox.functie.slice(0, 4)"
                    :key="soortlocati.id"
                    :id="soortlocati.id"
                    :titleCheckBox="soortlocati.name"
                    @change="filterLocaties"
                    class="mt-2"
                  />
                </fieldset>
              </div>
              <div class="flex flex-col">
                <Checkbox
                  v-for="soortlocati in checkbox.functie.slice(4, 8)"
                  :key="soortlocati.id"
                  :id="soortlocati.id"
                  :titleCheckBox="soortlocati.name"
                  @change="filterLocaties"
                  class="mt-2"
                />
              </div>
            </div>
            <div class="mt-5">
              <img src="/images/filter-icon.svg" alt="filter" class="w-8 h-8" />
              <p class="text-base mt-3 opacity-50">Meer filter opties</p>
            </div>
            <Map />
          </div>
        </div>
      </div>
      <div
        id="locatieList"
        class="py-5 lg:w-[65%] overflow-auto max-h-[400px] md:max-h-[870px] md:min-h-[870px] flex flex-col scrollbar-onze"
      >
        <eachLocaties
          v-for="locatie in filteredLocaties"
          :key="locatie.id"
          :name="locatie.name"
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

<script>
export default {
  data() {
    return {
      checkbox: {
        soortLocaties: [
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
        ],
        functie: [
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
        ],
      },
      Locaties: [
        {
          id: 1,
          name: "Utrecht",
          soortLocaties: ["Alles", "Anders"],
          deopervlakte: 19,
          price: 320,
          functie: ["Wifi", "Parkeerplaats"],
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
          id: 2,
          name: "Locatie",
          soortLocaties: ["Anders", "Alles"],
          price: 100,
          deopervlakte: 20,
          functie: ["Wifi", "Parkeerplaats", "Loungeplekken"],
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
          id: 3,
          name: "Locatie",
          soortLocaties: ["Anders"],
          price: 120,
          deopervlakte: 23,
          functie: [
            "Wifi",
            "Parkeerplaats",
            "Loungeplekken",
            "Loungeplekken",
            "Koffiebar",
          ],
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
          soortLocaties: ["Alles"],
          price: 100,
          deopervlakte: 25,
          functie: ["Loungeplekken", "Loungeplekken", "Koffiebar"],
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
      ],
      filteredLocaties: [],
    };
  },
  props: {
    showLocaties: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    filterLocaties() {
      // query selector
      const nameValue = document.getElementById("name").value;
      const priceMinValue = parseFloat(
        document.getElementById("priceMin").value
      );
      const priceMaxValue = parseFloat(
        document.getElementById("priceMax").value
      );
      const deopervlakteMinValue = parseFloat(
        document.getElementById("deopervlakteMin").value
      );
      const deopervlakteMaxValue = parseFloat(
        document.getElementById("deopervlakteMax").value
      );
      const soortLocatieCheckboxes = document.querySelectorAll(
        '#soortLocatie input[type="checkbox"]'
      );
      const functieCheckboxes = document.querySelectorAll(
        '#functie input[type="checkbox"]'
      );

      // function filter data
      const filteredData = this.Locaties.filter((locatie) => {
        let isValid = true;

        // by Name
        if (nameValue && locatie.name !== nameValue) {
          isValid = false;
        }

        // by price
        if (!isNaN(priceMinValue) && locatie.price < priceMinValue) {
          isValid = false;
        }
        if (!isNaN(priceMaxValue) && locatie.price > priceMaxValue) {
          isValid = false;
        }

        // by deopervlakte
        if (
          !isNaN(deopervlakteMinValue) &&
          locatie.deopervlakte < deopervlakteMinValue
        ) {
          isValid = false;
        }
        if (
          !isNaN(deopervlakteMaxValue) &&
          locatie.deopervlakte > deopervlakteMaxValue
        ) {
          isValid = false;
        }

        // by type
        soortLocatieCheckboxes.forEach((checkbox) => {
          if (
            checkbox.checked &&
            !locatie.soortLocaties.includes(checkbox.id)
          ) {
            isValid = false;
          }
        });

        // by functi
        functieCheckboxes.forEach((checkbox) => {
          if (checkbox.checked && !locatie.functie.includes(checkbox.id)) {
            isValid = false;
          }
        });

        return isValid;
      });

      this.filteredLocaties = filteredData;
    },
  },
  mounted() {
    this.filteredLocaties = this.Locaties;
  },
};
</script>
