<template>
  <section class="relative z-20">
    <div id="map" class="relative w-full h-[420px] lg:h-[490px] border-2"></div>
    <div
      class="w-[95%] lg:w-[80%] md:h-[240px] lg:h-[288px] bg-[#859C81] border-radius-map box-shadow absolute top-[300px] py-5 lg:py-0"
    >
      <div class="container-custom flex flex-col text-white w-[99%]">
        <p
          class="text-[17px] sm:text-[20px] md:text-[25px] font-bold pb-3 py-3 lg:py-8"
        >
          Waar bent u op zoek naar?
        </p>

        <!-- Loop for categories -->
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

        <div class="w-full flex justify-end">
          <div
            class="bg-[#F0912D] flex justify-center rounded-md py-2 px-3 sm:py-3 sm:px-4 lg:w-[172px] lg:h-[52px] items-center lg:rounded-[14px]"
          >
            <p class="text-[10px] sm:text-[14px] font-bold">
              Uitgebreid zoeken
            </p>
          </div>
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
  data() {
    return {
      map: null,
      markers: [],
      currentInfoWindow: null,
      locations: [
        {
          lat: -8.653840910873269,
          lng: 115.21785198506426,
          name: "Company 1",
          description: "Deskripsion A",
          price: 4,
          image: "/_nuxt/assets/images/img-home-1.png",
          popularity: 100,
        },
        {
          lat: -8.62717144710956,
          lng: 115.20910166137442,
          name: "Company B",
          description: "Deskripsi B",
          price: 5,
          image: "/_nuxt/assets/images/image.svg",
          popularity: 20,
        },
        {
          lat: -8.62717144710956,
          lng: 115.29189271629312,
          name: "Company C",
          description: "Deskripsi C",
          price: 5,
          image: "/_nuxt/assets/images/image.svg",
          popularity: 20,
        },
        {
          lat: -8.641220836289818,
          lng: 115.17259520426518,
          name: "Company D",
          description: "Deskripsi D",
          price: 5,
          image: "/_nuxt/assets/images/image.svg",
          popularity: 20,
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
          selectedOption: "Vanaf € 50",
          showDropdown: false,
          options: ["Vanaf € 50", "Andere Prijs 1", "Andere Prijs 2"],
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
    toggleDropdown(category) {
      category.showDropdown = !category.showDropdown;
    },
    selectOption(category, option) {
      category.selectedOption = option;
      category.showDropdown = false;
      console.log("Selected option in", category.title + ":", option);
    },
    loadGoogleMapsScript() {
      window.initMap = this.setupMap;
      const googleMapsScript = document.createElement("script");
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBhpUx1wrOB8GWCibu649AJo5Be0ocjq3U&callback=initMap`;
      googleMapsScript.defer = true;
      googleMapsScript.async = true;
      googleMapsScript.onload = () => {
        this.googleMapsScriptLoaded = true;
      };
      document.head.appendChild(googleMapsScript);
    },
    setupMap() {
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -8.653840910873269, lng: 115.21785198506426 },
        zoom: 13,
      });

      const iconBase = "http://maps.google.com/mapfiles/ms/icons/";

      this.locations.forEach((location) => {
        const marker = new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: this.map,
          title: location.name,
          icon: iconBase + "red-dot.png",
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

          // Menampilkan kembali semua marker
          this.markers.forEach((m) => {
            m.setVisible(true);
          });

          marker.setVisible(true);
          // this.map.panTo(marker.getPosition(), 500);
        });

        marker.addListener("mouseout", () => {
          infowindow.close();
        });

        this.markers.push(marker);
      });

      this.setBoundsForMarkers();
    },
    setBoundsForMarkers() {
      const bounds = new google.maps.LatLngBounds();
      this.markers.forEach((marker) => {
        bounds.extend(marker.getPosition());
      });
      this.map.fitBounds(bounds);
    },
  },
};
</script>
