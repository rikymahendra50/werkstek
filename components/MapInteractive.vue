<template>
  <section
    :class="{
      'container-custom': ShowContainerCustom,
      'relative z-20': true,
      'w-full': !containerCustom,
    }"
  >
    <div
      id="map"
      :class="`relative w-full h-[420px] lg:h-[619px] border-2 z-[-999]`"
    ></div>
    <div class="mx-2 sm:mx-10 container-custom">
      <div class="bg-tertiary box-shadow mt-[-200px] z-10 rounded-[40px]">
        <div
          class="min-h-[278px] md:grid md:grid-cols-3 items-center h-full px-10 font-semibold gap-1 md:gap-3 py-9"
        >
          <p
            class="text-[25px] font-bold lg:leading-10 lg:text-4xl text-secondary mb-4 md:mb-0"
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
            <div class="relative" v-if="category.title === 'Zoek een Locatie'">
              <div
                @click="toggleDropdown(category)"
                class="italic w-full flex items-center justify-between bg-[rgb(247,247,247)] rounded-full px-5 min-h-[50px] cursor-pointer text-quaternary sm:text-[14px] mb-2 md:mb-0"
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
                class="absolute text-[10px] lg:text-[16px] top-[100%] left-0 bg-[#F7F7F7] rounded-[5px] mt-1 w-full text-quaternary z-20"
              >
                <li
                  v-for="(option, idx) in category.options"
                  :key="idx"
                  @click="selectOption(category, option)"
                  class="pt-1 cursor-pointer hover:bg-secondary hover:text-tertiary px-5 md:pb-2"
                >
                  {{ option }}
                </li>
              </ul>
            </div>
            <div v-else-if="category.title === 'Zoek op een prijs'">
              <SliderRangeSM
                :minPrice="250"
                :maxPrice="850"
                :minRange="250"
                :maxRange="850"
                :priceGap="500"
                @price-change="updateLastSelectedPrices"
              />
            </div>
          </div>
          <div class="text-tertiary grid justify-end md:col-span-3 mt-4">
            <Button
              @click="performSearch"
              class="bg-primary rounded-full min-h-[48px] flex items-center gap-4 pl-3 pr-1"
            >
              <p class="font-semibold text-sm">Uitgebreid zoeken</p>
              <div
                class="bg-tertiary text-primary flex items-center justify-center rounded-full min-w-[40px] min-h-[40px]"
              >
                <svg
                  width="9"
                  height="15"
                  viewBox="0 0 9 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.8125 13.8749L7.99968 7.68767L1.8125 1.50049"
                    stroke="#F0912D"
                    stroke-width="1.875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </Button>
          </div>
        </div>
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
    ShowContainerCustom: {
      type: Boolean,
      default: true,
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
          name: "Tolstraat 186-188 H, Amsterdam De Pijp",
          area: "1104 m2",
          image: "/images/img-home-1.png",
          popularity: 100,
          city: "Rotterdam",
          type: "Kantoorruimte",
          price: 230,
          filtered: false,
        },
        // test
        {
          lat: -8.653840910873269,
          lng: 115.21785198506426,
          name: "Tolstraat 186-188 H, Amsterdam De Pijp",
          area: "1104 m2",
          image: "/images/img-home-1.png",
          popularity: 100,
          city: "Rotterdam",
          type: "Kantoorruimte",
          price: 750,
          filtered: false,
        },
        {
          lat: -8.62717144710956,
          lng: 115.29189271629312,
          name: "Company C",
          area: "Deskripsi C",
          image: "/images/img-home-1.png",
          popularity: 20,
          city: "Den Haag",
          type: "Andere Optie 2",
          price: 8,
          filtered: false,
        },
        {
          lat: -8.641220836289818,
          lng: 115.17259520426518,
          name: "Company D",
          area: "Deskripsi D",
          image: "/images/img-home-1.png",
          popularity: 20,
          city: "Amsterdam",
          type: "Andere Optie 1",
          price: 4,
          filtered: false,
        },
      ],
      lastSelectedPrices: {
        minPrice: 250,
        maxPrice: 850,
      },
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
    updateLastSelectedPrices(prices) {
      this.lastSelectedPrices = prices;
      console.log("Last Selected Prices:", this.lastSelectedPrices);
    },

    selectOption(category, option) {
      category.selectedOption = option;
      category.showDropdown = false;
    },

    toggleDropdown(category) {
      category.showDropdown = !category.showDropdown;
    },

    performSearch() {
      const selectedOption = this.categories;
      let selectedCityFix = selectedOption[0].selectedOption;
      let selectedPriceFix = this.lastSelectedPrices;

      const minPrice = selectedPriceFix.minPrice;
      const maxPrice = selectedPriceFix.maxPrice;

      this.locations.forEach((location) => {
        const isLocationInFilter =
          location.city === selectedCityFix &&
          location.price >= minPrice &&
          location.price <= maxPrice;

        location.filtered = isLocationInFilter;

        if (isLocationInFilter) {
          this.moveToLocation(location.lat, location.lng);
        }
      });

      this.updateMarkerIcons();

      const filteredData = this.locations.filter((location) => {
        return (
          location.city === selectedCityFix &&
          location.price >= minPrice &&
          location.price <= maxPrice
        );
      });

      if (filteredData.length > 0) {
        console.log("Matching Data:", filteredData);
        filteredData.forEach((location) => {
          this.moveToLocation(location.lat, location.lng);
        });
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
        scaledSize: new google.maps.Size(40, 40),
      };

      this.locations.forEach((location) => {
        const marker = new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: this.map,
          title: location.name,
          icon: icon,
        });

        const contentString = `
          <div class="max-w-[190px] w-full h-full flex flex-col text-end">
            <img src="${location.image}" alt="${location.name}" class="w-[200px] min-h-[100px]">
            <h2 class="text-primary mt-2">${location.name}</h2>
            <p class="text-black text-[10px] my-2">${location.area}</p>
            <p>Price: $${location.price}</p>
          </div>
        `;

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
          closeBoxMargin: "10px 10px 0 0",
        });

        marker.addListener("click", () => {
          if (this.currentInfoWindow) {
            this.currentInfoWindow.close();
          }

          infowindow.open(this.map, marker);
          this.currentInfoWindow = infowindow;
        });

        // marker.addListener("mouseover", () => {
        //   if (this.currentInfoWindow) {
        //     this.currentInfoWindow.close();
        //   }

        //   infowindow.open(this.map, marker);
        //   this.currentInfoWindow = infowindow;
        // });

        // marker.addListener("mouseout", () => {
        //   infowindow.close();
        // });

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
