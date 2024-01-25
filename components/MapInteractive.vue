<template>
  <section class="relative z-20" :class="marginCustom">
    <div id="map" class="relative w-full h-[420px] lg:h-[619px] border-2"></div>
    <div
      class="w-[95%] lg:w-[80%] md:h-[240px] lg:h-[288px] bg-[#859C81] border-radius-map box-shadow py-5 lg:py-0"
      :class="{
        'absolute bottom-[-80px]': !searchCustom,
        'absolute bottom-[-80px] md:top-[-60px]': searchCustom,
      }"
    >
      <div class="container-custom flex flex-col text-white w-[99%]">
        <p
          class="text-[17px] sm:text-[20px] md:text-[25px] font-bold pb-3 py-3 lg:py-8"
        >
          {{ titleMap }}
        </p>
        <!-- Loop category -->
        <div class="flex justify-between mb-4">
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
              <!-- Dropdown list -->
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
        </div>
        <!-- Button -->
        <div class="w-full flex justify-end">
          <ButtonSM @click="performSearch" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* style */
</style>

<script>
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
        {
          lat: -8.62717144710956,
          lng: 115.20910166137442,
          name: "Company B",
          description: "Deskripsi B",
          image: "/images/image.svg",
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
          image: "/images/image.svg",
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
          image: "/images/image.svg",
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
        {
          title: "Type",
          selectedOption: "Kantoorruimte",
          showDropdown: false,
          options: ["Kantoorruimte", "Andere Optie 1", "Andere Optie 2"],
        },
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
        console.log("Data yang cocok:", filteredData[0]);
        const foundLocation = filteredData[0];
        this.moveToLocation(foundLocation.lat, foundLocation.lng);
      } else {
        console.log("Tidak ada data yang cocok");
      }
    },

    // Move To Location when search
    moveToLocation(lat, lng) {
      if (this.map) {
        this.map.setCenter({ lat, lng });
        this.map.setZoom(20);
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
