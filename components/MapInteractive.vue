<template>
  <section
    :class="{
      'container-custom': ShowContainerCustom,
      'relative z-20': true,
      'w-full': !ShowContainerCustom,
    }"
  >
    <div
      id="map"
      :class="`relative w-full h-[420px] lg:h-[619px] z-[-999] rounded-2xl`"
    ></div>
    <div class="sm:mx-10 hidden">
      <div
        class="bg-tertiary box-shadow mt-[-100px] z-10 rounded-[20px] lg:rounded-[30px]"
      >
        <div
          class="min-h-[278px] md:grid md:grid-cols-3 items-center h-full px-6 sm:px-10 font-semibold gap-1 md:gap-3 py-5 sm:py-9"
        >
          <p
            class="text-[25px] font-bold lg:leading-10 lg:text-3xl text-secondary mb-4 md:mb-0"
          >
            {{ titleMap }}
          </p>
          <div
            v-for="(category, index) in categories"
            :key="index"
            class="flex flex-col"
          >
            <p class="text-[14px] pb-3 pl-2 lg:pl-3 lg:pb-2 mt-2">
              {{ category.title }}
            </p>
            <div class="relative" v-if="category.title === 'Zoek een Locatie'">
              <div
                @click="toggleDropdown(category)"
                class="italic w-full flex items-center justify-between bg-[rgb(247,247,247)] rounded-full px-2 pl-4 min-h-[40px] sm:min-h-[50px] cursor-pointer text-quaternary sm:text-[14px] mb-5 md:mb-0"
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
                class="absolute text-[10px] dropdownMap max-h-[200px] overflow-hidden overflow-y-auto lg:text-[14px] top-[100%] left-0 bg-[#F7F7F7] rounded-[5px] mt-1 w-full text-quaternary z-20"
              >
                <li
                  v-for="(item, index) in city"
                  :key="index"
                  @click="selectOption(category, item.name, item.id)"
                  class="cursor-pointer hover:bg-secondary transition hover:text-tertiary px-3 py-2"
                >
                  {{ item.name }}
                </li>
              </ul>
            </div>
            <div v-else-if="category.title === 'Zoek op een prijs'">
              <!-- <SliderRangeMap
                :idInputMin="'priceMin'"
                :idInputMax="'priceMax'"
                :minPrice="0"
                :maxPrice="highestPrice"
                :minRange="0"
                :maxRange="highestPrice"
                :priceGap="highestPrice"
                class="my-2"
                @price-change="handlePriceChange"
              /> -->
            </div>
          </div>
          <div class="text-tertiary grid justify-end md:col-span-3 mt-4">
            <button
              @click="performSearch"
              class="bg-primary hover:bg-secondary transition-all rounded-full min-h-[48px] flex items-center gap-4 pl-3 pr-1"
            >
              <p class="font-semibold text-sm pl-2">Uitgebreid zoeken</p>
              <div
                class="bg-tertiary flex items-center justify-center rounded-full min-w-[40px] min-h-[40px]"
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
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- test -->
    <div
      class="bg-tertiary box-shadow mt-[-100px] md:mt-[-200px] z-10 rounded-[20px] lg:rounded-[30px] md:h-[188px] mx-3 px-5 grid md:grid-cols-12 items-center gap-4 pt-6 md:pt-0"
    >
      <!-- col1 -->
      <div class="md:col-span-4 flex md:justify-center items-center">
        <img
          src="/images/building-map-interactive.png"
          alt="building-icon"
          class=""
        />
        <p
          class="text-secondary text-2xl lg:text-3xl font-medium z-10 ml-[-40px]"
        >
          Waar bent u <br />
          naar op zoek?
        </p>
      </div>
      <!-- col2 -->
      <div class="grid md:grid-cols-12 md:col-span-6 items-center">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="col-span-6"
        >
          <p class="text-[14px] pb-3 pl-2 lg:pl-3 lg:pb-2 mt-2">
            {{ category.title }}
          </p>
          <div
            class="relative mr-5"
            v-if="category.title === 'Zoek een Locatie'"
          >
            <div
              @click="toggleDropdown(category)"
              class="italic w-full flex items-center justify-between bg-[rgb(247,247,247)] rounded-full px-2 pl-4 min-h-[40px] sm:min-h-[50px] cursor-pointer sm:text-[14px] mb-5 md:mb-0 text-[#676767]"
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
              class="absolute text-[10px] dropdownMap max-h-[200px] overflow-hidden overflow-y-auto lg:text-[14px] top-[100%] left-0 bg-[#F7F7F7] rounded-[5px] mt-1 w-full text-quaternary z-20"
            >
              <li
                v-for="(item, index) in city"
                :key="index"
                @click="selectOptionCity(category, item.name, item.id)"
                class="cursor-pointer hover:bg-secondary transition hover:text-tertiary px-3 py-2"
              >
                {{ item.name }}
              </li>
            </ul>
          </div>
          <div
            class="relative mr-5"
            v-if="category.title === 'Zoek op een prijs'"
          >
            <div
              @click="toggleDropdown(category)"
              class="italic w-full flex items-center justify-between bg-[rgb(247,247,247)] rounded-full px-2 pl-4 min-h-[40px] sm:min-h-[50px] cursor-pointer sm:text-[14px] mb-5 md:mb-0 text-[#676767]"
            >
              € {{ category.selectedOption }}
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
              class="absolute text-[10px] dropdownMap max-h-[200px] overflow-hidden overflow-y-auto lg:text-[14px] top-[100%] left-0 bg-[#F7F7F7] rounded-[5px] mt-1 w-full text-quaternary z-20"
            >
              <li
                v-for="(item, index) in numericPricesT"
                :key="index"
                @click="selectOptionPrice(category, item, item)"
                class="cursor-pointer hover:bg-secondary transition hover:text-tertiary px-3 py-2"
              >
                € {{ item }}
              </li>
            </ul>
          </div>
          <!-- col3 -->
        </div>
      </div>
      <!-- col3 -->
      <div class="flex justify-self-end mb-5">
        <div
          class="btn bg-primary text-white md:mt-5 hover:bg-primary w-[65px] h-[60px] lg:w-[76px] lg:h-[76px] rounded-[20px]"
          @click="performSearch"
        >
          <Icon name="iconamoon:search-thin" class="text-white w-10 h-10" />
        </div>
      </div>
    </div>
    <!-- test2 -->
  </section>
</template>

<script setup>
import axios from "axios";
const { axiosRequest } = useAxios();

const center = ref({ lat: 52.21314997541194, lng: 5.3982948103810795 });

let googleMapsScriptLoaded = false;

const loadGoogleMapsScript = () => {
  if (!window.googleMapsScriptLoaded) {
    window.googleMapsScriptLoaded = true;
    window.initMap = setupMap;
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDlXDm2XgaaHSltV5byiQHe9P4HFWtZgOo&callback=initMap&`;
    googleMapsScript.defer = true;
    googleMapsScript.async = true;
    googleMapsScript.onload = () => {
      googleMapsScriptLoaded = true;
    };
    document.head.appendChild(googleMapsScript);
  } else {
    setupMap();
  }
};

onMounted(() => {
  if (!googleMapsScriptLoaded) {
    googleMapsScriptLoaded = true;
    loadGoogleMapsScript();
  } else {
    setupMap();
  }
});

const props = defineProps({
  ShowContainerCustom: {
    type: Boolean,
    default: true,
    required: false,
  },
  searchCustom: {
    type: Boolean,
    required: false,
    default: false,
  },
});

// data
const { requestOptions } = useRequestOptions();
const { data, error } = await useFetch(`/products`, {
  method: "get",
  ...requestOptions,
});
const { data: locationData } = await useFetch("/locations", {
  method: "get",
  ...requestOptions,
});

const numericPrices = data.value.data.map((item) => parseFloat(item.price));
const uniqueNumericPrices = [];
numericPrices.forEach((price) => {
  if (!uniqueNumericPrices.includes(price)) {
    uniqueNumericPrices.push(price);
  }
});
let numericPricesT = ref(uniqueNumericPrices);
const highestPrice = Math.max(...numericPrices);
let minestPrice = Math.min(...numericPrices);

let infoWindowTimeout;

const arrayLocation = locationData?.value?.data?.map((item) => item);
let city = ref(arrayLocation);
let firstLocation = ref(arrayLocation[0]?.name);

const categories = ref([
  {
    title: "Zoek een Locatie",
    selectedOption: firstLocation,
    showDropdown: false,
    options: city,
  },
  {
    title: "Zoek op een prijs",
    selectedOption: minestPrice,
    showDropdown: false,
    options: numericPricesT,
  },
]);

const titleMap = ref("Waar bent u op zoek naar?");
let map = ref(null);
const markers = ref([]);
const currentInfoWindow = ref(null);

const locations = data.value.data;

const selectedCity = ref(1);
const selectedMinPrice = ref(minestPrice);
const selectedMaxPrice = ref();
const filteredData = ref();

// function handlePriceChange(priceData) {
//   selectedMinPrice.value = priceData.minPrice;
//   selectedMaxPrice.value = priceData.maxPrice;
// }

const selectOptionCity = (category, option, id) => {
  category.selectedOption = option;
  category.showDropdown = false;
  selectedCity.value = id;
};

const selectOptionPrice = (category, option, id) => {
  category.selectedOption = option;
  category.showDropdown = false;
  selectedMinPrice.value = id;
};

const toggleDropdown = (category) => {
  category.showDropdown = !category.showDropdown;
};
// end data

// request
async function performSearch() {
  try {
    let params = {};
    params["filter[location_id]"] = selectedCity.value;
    params["filter[min_price]"] = selectedMinPrice.value;
    params["filter[max_price]"] = selectedMaxPrice.value;

    const response = await axiosRequest.get("/products", { params: params });
    filteredData.value = response.data;
    findMap(filteredData.value);
    recenterMap(filteredData.value);
  } catch (error) {
    console.error("Failed to retrieve data from API:", error);
  }
}

const recenterMap = (filteredData) => {
  if (filteredData && filteredData.data && filteredData.data.length > 0) {
    const bounds = new google.maps.LatLngBounds();
    filteredData.data.forEach((item) => {
      bounds.extend(
        new google.maps.LatLng(
          parseFloat(item.latitude),
          parseFloat(item.longitude)
        )
      );
    });
    map.fitBounds(bounds);
  }
};

function findMap(dataFilter) {
  if (!dataFilter || !dataFilter.data || dataFilter.data.length === 0) {
    alert("Location Not Found. Please adjust your filter");
    return;
  }

  clearInfoWindows();

  const locations = dataFilter?.data.map((item) => {
    return {
      latitude: parseFloat(item.latitude),
      longitude: parseFloat(item.longitude),
    };
  });

  locations.forEach((location) => {
    moveToLocation(location.latitude, location.longitude);
  });
}

const clearInfoWindows = () => {
  if (currentInfoWindow.value) {
    currentInfoWindow.value.close();
  }
};

const moveToLocation = (lat, lng) => {
  if (map) {
    map.setCenter({ lat, lng });

    const filteredMarkers = markers.value.filter(
      (marker) => marker.details.filtered
    );

    const bounds = new google.maps.LatLngBounds();
    filteredMarkers.forEach((marker) => {
      bounds.extend(marker.getPosition());
    });

    map.fitBounds(bounds);

    const matchingMarker = markers.value.find((marker) =>
      marker.getPosition().equals(new google.maps.LatLng(lat, lng))
    );

    if (matchingMarker) {
      matchingMarker.details.filtered = true;

      matchingMarker.setAnimation(google.maps.Animation.BOUNCE);
      setTimeout(() => {
        matchingMarker.setAnimation(null);
      }, 70000);
    }
  }
};

let currentHoveredMarker = null;
let hoverInfoWindow = null;

const setupMap = () => {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 52.29214034154223, lng: 4.945034078830406 },
    zoom: 10,
    fullscreenControl: false,
    zoomControl: false,
    keyboardShortcuts: false,
    mapId: null,
  });

  const iconBase = "/images";

  const icon = {
    url: iconBase + "/icon-marker-regular.png",
    scaledSize: new google.maps.Size(40, 40),
  };

  const icon2 = {
    url: iconBase + "/icon-marker-premium.png",
    scaledSize: new google.maps.Size(40, 40),
  };

  locations.forEach((location) => {
    const lat = parseFloat(location.latitude);
    const lng = parseFloat(location.longitude);

    // console.log(location.level_type.name);

    let selectedIcon = location.level_type.name === "Regular" ? icon : icon2;

    const marker = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: map,
      title: location.name,
      icon: selectedIcon,
      details: location,
    });

    const contentString = `
      <a href="onze-locaties/${location?.slug}" class="max-w-[190px] w-full flex flex-col text-end">
        <div class="relative">
          <img src="${location?.location?.image}" alt="${location?.name}" class="w-full min-h-[140px]">
          <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white"></div>
        </div>
        <div class="pr-5 py-5 pb-4 relative">
          <h2 class="text-primary mt-4">${location?.name}</h2>
          <p class="text-black text-[10px] my-2">Prijs: $${location?.price}</p>
          <p>${location?.area_size}&nbsp<span>m<sup>2</sup></span></p>
          <img src="/images/icon-werstek.svg" alt="icon-werstek" class="absolute right-5 top-[-5px]" />
        </div>
      </a>
    `;

    marker.addListener("click", () => {
      clearTimeout(infoWindowTimeout);

      if (currentInfoWindow.value) {
        currentInfoWindow.value.close();
      }

      if (currentHoveredMarker && currentHoveredMarker !== marker) {
        hoverInfoWindow.close();
      }

      hoverInfoWindow = new google.maps.InfoWindow({
        content: contentString,
        closeBoxMargin: "10px 10px 0 0",
      });

      hoverInfoWindow.open(map, marker);
      currentHoveredMarker = marker;
      infowindow.open(map, marker);
      currentInfoWindow.value = infowindow;
    });

    markers.value.push(marker);
  });
};

const setBoundsForMarkers = () => {
  const bounds = new google.maps.LatLngBounds();
  markers.value.forEach((marker) => {
    bounds.extend(marker.getPosition());
  });
  map.fitBounds(bounds);
};
</script>

<style>
.dropdownMap::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}

.custom-marker {
  transition: transform 0.3s ease;
}

.custom-marker:hover {
  transform: scale(1.2);
}

.gm-style-iw {
  transition: opacity 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.gm-style-iw.fade-in {
  animation: fadeIn 0.3s ease-in-out forwards;
}

.gm-style-iw.fade-out {
  animation: fadeOut 0.3s ease-in-out forwards;
}

.gm-style-iw-tc {
  display: none !important;
}

.gm-style-cc {
  display: none !important;
}

.gm-style-iw-d {
  overflow-y: auto !important;
  scrollbar-width: none !important;
  -ms-overflow-style: none !important;
}

.gm-ui-hover-effect {
  background-color: white !important;
  position: absolute !important;
  border-radius: 50%;
  top: 5px !important;
  right: 5px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.gm-ui-hover-effect:span {
  width: 200px;
  background-repeat: no-repeat;
  background-position: center;
}

.gm-style-iw-c {
  padding: 0 !important;
}

.gm-style-cc a {
  display: none !important;
}
</style>
