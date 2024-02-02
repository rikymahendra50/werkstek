<template>
  <section class="container-custom relative z-20 py-10" :class="marginCustom">
    <div
      id="map"
      class="relative w-full h-[420px] lg:h-[619px] border-2 z-[-999]"
    ></div>
    <div class="mx-10">
      <div class="bg-tertiary box-shadow mt-[-200px] z-10 rounded-[40px]">
        <div
          class="min-h-[278px] md:grid md:grid-cols-3 items-center h-full px-10 font-semibold gap-1 md:gap-3 py-9"
        >
          <p
            class="text-[20px] md:text-[25px] font-bold lg:leading-10 lg:text-4xl text-secondary"
          >
            {{ titleMap }}
          </p>
          <div
            v-for="(category, index) in categories"
            :key="index"
            class="flex flex-col"
          >
            <p class="text-lg sm:text-[16px] lg:pl-3 lg:pb-2 pt-2">
              {{ category.title }}
            </p>
            <div class="relative">
              <div
                @click="toggleDropdown(category)"
                class="w-full flex items-center justify-between bg-[#F7F7F7] rounded-full px-5 min-h-[50px] cursor-pointer text-quaternary sm:text-[14px] mb-2 md:mb-0"
              >
                {{ category.selectedOption }}

                <div
                  class="max-w-[30px] min-h-[30px] bg-quaternary rounded-full flex items-center justify-center"
                >
                  <img
                    src="/images/arrow-right.svg"
                    alt="arrow"
                    class="rotate-90"
                  />
                </div>
              </div>
              <ul
                v-if="category.showDropdown"
                class="absolute text-[10px] lg:text-[16px] top-[100%] left-0 bg-white rounded-[5px] mt-1 w-full text-black z-20"
              >
                <li
                  v-for="(option, idx) in category.options"
                  :key="idx"
                  @click="selectOption(category, option)"
                  class="pt-1 cursor-pointer hover:bg-secondary px-5"
                >
                  {{ option }}
                </li>
              </ul>
            </div>
          </div>
          <div class="text-tertiary grid justify-end md:col-span-3 mt-4">
            <Button
              to="/"
              class="bg-primary rounded-full min-h-[48px] flex items-center gap-4 pl-3 pr-1"
            >
              <p class="font-semibold text-sm">Uitgebreid zoeken</p>
              <div
                class="bg-tertiary text-primary flex items-center justify-center rounded-full min-w-[40px] min-h-[40px]"
              >
                >
              </div>
            </Button>
          </div>
        </div>

        <!-- <div class="flex justify-between mb-4">
            <div
              v-for="(category, index) in categories"
              :key="index"
              class="flex flex-col w-[40%]"
            >
              <p class="text-[11px] sm:text-[16px] pb-2">
                {{ category.title }}
              </p>
              <div class="relative">
                <div
                  @click="toggleDropdown(category)"
                  class="search-map-category text-[10px] text-[#676767] sm:text-[14px]"
                >
                  {{ category.selectedOption }}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="8"
                    viewBox="0 0 12 11"
                    fill="none"
                  >
                    <path
                      d="M6 10.2579L0.803848 0.724833H11.1962L6 10.2579Z"
                      fill="#859C81"
                    />
                  </svg>
                </div>
                <ul
                  v-if="category.showDropdown"
                  class="absolute text-[10px] lg:text-[16px] top-[100%] left-0 bg-white border border-gray-300 rounded-[5px] mt-1 w-[97%] text-[#676767] lg:px-8 z-20"
                >
                  <li
                    v-for="(option, idx) in category.options"
                    :key="idx"
                    @click="selectOption(category, option)"
                    class="px-2 pt-1 cursor-pointer"
                  >
                    {{ option }}
                  </li>
                </ul>
              </div>
            </div>
          </div> -->
        <!-- Button -->
        <!-- <div class="w-full flex justify-end">
          <ButtonSM @click="performSearch" />
        </div> -->
      </div>
    </div>
  </section>
</template>

<style>
/* style */
</style>

<script scoped>
let googleMapsScriptLoaded = false;
export default {
  props: {
    marginCustom: {
      type: String,
      required: false,
    },
    searchCustom: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      titleMap: "Waar bent u op zoek naar?",
      map: null,
      markers: [],
      currentInfoWindow: null,
      locations: [
        {
          lat: -8.653840910873269,
          lng: 115.21785198506426,
          name: "Company 1",
          description: "Deskripsion A",
          image: "/images/img-home-1.png",
          popularity: 100,
          city: "Rotterdam",
          type: "Kantoorruimte",
          price: 4,
        },
        // test
        {
          lat: -8.607897,
          lng: 115.243932,
          name: "Company e",
          description: "Deskripsion e",
          image: "/images/img-home-1.png",
          popularity: 100,
          city: "Rotterdam",
          type: "Kantoorruimte",
          price: 4,
        },
        {
          lat: -8.62717144710956,
          lng: 115.20910166137442,
          name: "Company B",
          description: "Deskripsi B",
          image: "/images/img-home-1.png",
          popularity: 20,
          city: "Utrecht",
          type: "Kantoorruimte",
          price: 4,
        },
        {
          lat: -8.62717144710956,
          lng: 115.29189271629312,
          name: "Company C",
          description: "Deskripsi C",
          image: "/images/img-home-1.png",
          popularity: 20,
          city: "Den Haag",
          type: "Andere Optie 2",
          price: 8,
        },
        {
          lat: -8.641220836289818,
          lng: 115.17259520426518,
          name: "Company D",
          description: "Deskripsi D",
          image: "/images/img-home-1.png",
          popularity: 20,
          city: "Amsterdam",
          type: "Andere Optie 1",
          price: 4,
        },
      ],
      categories: [
        {
          title: "Zoek een Locatie",
          selectedOption: "Utrecht",
          showDropdown: false,
          options: ["Utrecht", "Amsterdam", "Rotterdam", "Den Haag"],
        },
        // {
        //   title: "Type",
        //   selectedOption: "Kantoorruimte",
        //   showDropdown: false,
        //   options: ["Kantoorruimte", "Andere Optie 1", "Andere Optie 2"],
        // },
        {
          title: "Zoek op een prijs",
          selectedOption: 4,
          showDropdown: false,
          options: [4, 8, 4],
        },
      ],
    };
  },
  mounted() {
    if (!googleMapsScriptLoaded) {
      googleMapsScriptLoaded = true;
      this.loadGoogleMapsScript();
    } else {
      this.setupMap();
    }
  },
  methods: {
    selectOption(category, option) {
      // let selectedCity;
      // let selectedType;
      // let selectedPrice;

      // if (category.title === "Zoek een Locatie") {
      //   this.selectedOption = option;
      // } else if (category.title === "Type") {
      //   this.selectedOption = option;
      // } else if (category.title === "Zoek op een prijs") {
      //   this.selectedOption = option;
      // }

      category.selectedOption = option;
      category.showDropdown = false;
    },

    toggleDropdown(category) {
      category.showDropdown = !category.showDropdown;
    },

    performSearch() {
      const selectedOption = this.categories;
      // console.log(selectedOption);
      const allCities = this.locations.map((location) => location.city);

      let selectedCityFix = selectedOption[0].selectedOption;
      let selectedTypeFix = selectedOption[1].selectedOption;
      let selectedPriceFix = selectedOption[2].selectedOption;

      // console.log(selectedCityFix);
      // console.log(selectedTypeFix);
      // console.log(selectedPriceFix);

      const selectedOptionByUser = [
        selectedCityFix,
        selectedTypeFix,
        selectedPriceFix,
      ];

      const filteredData = this.locations.filter((location) => {
        return (
          location.city === selectedOptionByUser[0] &&
          location.type === selectedOptionByUser[1] &&
          location.price === parseInt(selectedOptionByUser[2])
        );
      });

      if (filteredData.length > 0) {
        // console.log("Matching Data:", filteredData[0]);
        const foundLocation = filteredData[0];
        this.moveToLocation(foundLocation.lat, foundLocation.lng);
      } else {
        console.log("Sorry not found, Please Adjust your filter");
        alert("Sorry not found, Please Adjust your filter");
      }
    },

    // Move To Location when search
    moveToLocation(lat, lng) {
      if (this.map) {
        this.map.setCenter({ lat, lng });
        this.map.setZoom(30);
      }
    },

    // Map Function
    loadGoogleMapsScript() {
      if (!window.googleMapsScriptLoaded) {
        window.googleMapsScriptLoaded = true;
        window.initMap = this.setupMap;
        const googleMapsScript = document.createElement("script");
        googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBhpUx1wrOB8GWCibu649AJo5Be0ocjq3U&callback=initMap`;
        googleMapsScript.defer = true;
        googleMapsScript.async = true;
        googleMapsScript.onload = () => {
          this.googleMapsScriptLoaded = true;
        };
        document.head.appendChild(googleMapsScript);
      } else {
        this.setupMap();
      }
    },
    setupMap() {
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -8.653840910873269, lng: 115.21785198506426 },
        zoom: 13,
      });

      const iconBase = "http://maps.google.com/mapfiles/ms/icons/";

      const icon = {
        url: iconBase + "red-dot.png",
        scaledSize: new google.maps.Size(30, 30),
      };

      this.locations.forEach((location) => {
        const marker = new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: this.map,
          title: location.name,
          icon: icon,
        });

        const contentString = `
          <div>
            <h2>${location.name}</h2>
            <img src="${location.image}" alt="${location.name}" style="width:200px;height:100px;">
            <p>${location.description}</p>
            <p>Price: $${location.price}</p>
          </div>
        `;

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
        });

        marker.addListener("mouseover", () => {
          if (this.currentInfoWindow) {
            this.currentInfoWindow.close();
          }

          infowindow.open(this.map, marker);
          this.currentInfoWindow = infowindow;
        });

        marker.addListener("mouseout", () => {
          infowindow.close();
        });

        this.markers.push(marker);
      });
    },
  },
  setBoundsForMarkers() {
    const bounds = new google.maps.LatLngBounds();
    this.markers.forEach((marker) => {
      bounds.extend(marker.getPosition());
    });
    this.map.fitBounds(bounds);
  },
};
</script>
