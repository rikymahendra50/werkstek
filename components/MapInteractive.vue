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
      :class="`relative w-full h-[420px] lg:h-[619px] z-[-999]`"
    ></div>
    <div class="mx-2 sm:mx-10 container-custom">
      <div class="bg-tertiary box-shadow mt-[-100px] z-10 rounded-[40px]">
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
                class="absolute text-[10px] dropdownMap max-h-[200px] overflow-hidden overflow-y-auto lg:text-[16px] top-[100%] left-0 bg-[#F7F7F7] rounded-[5px] mt-1 w-full text-quaternary z-20"
              >
                <li
                  v-for="(option, idx) in category.options"
                  :key="idx"
                  @click="selectOption(category, option)"
                  class="cursor-pointer hover:bg-secondary transition hover:text-tertiary px-3 py-1"
                >
                  {{ option }}
                </li>
              </ul>
            </div>
            <div v-else-if="category.title === 'Zoek op een prijs'">
              <SliderRange
                :idInputMin="'priceMin'"
                :idInputMax="'priceMax'"
                :minPrice="0"
                :maxPrice="1000000"
                :minRange="0"
                :maxRange="1000000"
                :priceGap="1000000"
                class="my-2"
                @price-change="handlePriceChange"
              />
            </div>
          </div>
          <div class="text-tertiary grid justify-end md:col-span-3 mt-4">
            <button
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
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.dropdownMap::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
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

<script setup>
let googleMapsScriptLoaded = false;

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

const { requestOptions } = useRequestOptions();
const { data, error } = await useFetch(`/products`, {
  method: "get",
  ...requestOptions,
});

const categoryOptions = data.value.data.map((item) => item.name);
const categories = ref([
  {
    title: "Zoek een Locatie",
    selectedOption: "Utrecht",
    showDropdown: false,
    options: categoryOptions,
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
]);

const titleMap = ref("Waar bent u op zoek naar?");
let map = ref(null);
const markers = ref([]);
const currentInfoWindow = ref(null);
let locations = [
  {
    lat: -8.653840910873269,
    lng: 115.21785198506426,
    name: "Tolstraat 186-188 H, Amsterdam De Pijp",
    area: "1104 m2",
    image: "/images/img-home-1.png",
    city: "Rotterdam",
    type: "Kantoorruimte",
    price: 230,
    filtered: false,
  },
  {
    lat: -8.653840910873269,
    lng: 115.21785198506426,
    name: "Tolstraat 186-188 H, Amsterdam De Pijp",
    area: "1104 m2",
    image: "/images/img-home-1.png",
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
    city: "Rotterdam",
    type: "Andere Optie 2",
    price: 240,
    filtered: false,
  },
  {
    lat: -8.641220836289818,
    lng: 115.17259520426518,
    name: "Company D",
    area: "Deskripsi D",
    image: "/images/img-home-1.png",
    city: "Amsterdam",
    type: "Andere Optie 1",
    price: 4,
    filtered: false,
  },
  {
    lat: -8.616146108681335,
    lng: 115.17967680101556,
    name: "Company E",
    area: "Deskripsi E",
    image: "/images/img-home-1.png",
    city: "Rotterdam",
    type: "Andere Optie 1",
    price: 710,
    filtered: false,
  },
];

const selectedMinPrice = ref();
const selectedMaxPrice = ref();

function handlePriceChange(priceData) {
  selectedMinPrice.value = priceData.minPrice;
  selectedMaxPrice.value = priceData.maxPrice;
}

const selectOption = (category, option) => {
  category.selectedOption = option;
  category.showDropdown = false;
};

const toggleDropdown = (category) => {
  category.showDropdown = !category.showDropdown;
};

const performSearch = () => {
  const selectedOption = categories.value;
  let selectedCityFix = selectedOption[0].selectedOption;
  // let selectedPriceFix = lastSelectedPrices.value;

  const minPrice = selectedMinPrice.minPrice;
  const maxPrice = selectedMaxPrice.maxPrice;

  clearInfoWindows();

  let locationsFound = false;

  locations.forEach((location) => {
    const isLocationInFilter =
      location.city === selectedCityFix &&
      location.price >= minPrice &&
      location.price <= maxPrice;

    location.filtered = isLocationInFilter;

    if (isLocationInFilter) {
      locationsFound = true;
      moveToLocation(location.lat, location.lng);
      showInfoWindow(location.lat, location.lng, location);
    }
  });

  if (!locationsFound) {
    alert("Data not found, please adjust your filter");
  }
};

const showInfoWindow = (lat, lng, location) => {
  const marker = findMarkerByLatLng(lat, lng);

  if (marker) {
    clearInfoWindows();

    const contentString = buildInfoWindowContent(location);

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      closeBoxMargin: "10px 10px 0 0",
    });

    infowindow.open(map, marker);
    currentInfoWindow.value = infowindow;
  }
};

const buildInfoWindowContent = (location) => {
  return `
    <div class="max-w-[190px] w-full h-full flex flex-col text-end">
      <img src="${location.image}" alt="${location.name}" class="w-[200px] min-h-[100px]">
      <h2 class="text-primary mt-2">${location.name}</h2>
      <p class="text-black text-[10px] my-2">${location.area}</p>
      <p>Price: $${location.price}</p>
    </div>
  `;
};

const clearInfoWindows = () => {
  if (currentInfoWindow.value) {
    currentInfoWindow.value.close();
  }
};

const findMarkerByLatLng = (lat, lng) => {
  return markers.value.find((marker) => {
    const position = marker.getPosition();
    return position.lat() === lat && position.lng() === lng;
  });
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

    const maxZoom = 12;
    const minZoom = 10;
    const currentZoom = map.getZoom();
    map.setZoom(Math.min(Math.max(currentZoom, minZoom), maxZoom));

    const matchingMarker = markers.value.find((marker) =>
      marker.getPosition().equals(new google.maps.LatLng(lat, lng))
    );

    if (matchingMarker) {
      matchingMarker.details.filtered = true;

      const infowindow = new google.maps.InfoWindow({
        content: `
          <div class="max-w-[190px] w-full h-full flex flex-col text-end">
            <div class="relative">
              <img src="${matchingMarker.details.image}" alt="${matchingMarker.details.name}" class="w-full min-h-[100px]">
              <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white"></div>
            </div>
            <div class="px-2 pb-4">
              <h2 class="text-primary mt-2">${matchingMarker.details.name}</h2>
              <p class="text-black text-[10px] my-2">${matchingMarker.details.area}</p>
              <p>Price: $${matchingMarker.details.price}</p>
            </div>
          </div>
        `,
      });

      infowindow.open(map, matchingMarker);
      currentInfoWindow.value = infowindow;
    }
  }
};

const loadGoogleMapsScript = () => {
  if (!window.googleMapsScriptLoaded) {
    window.googleMapsScriptLoaded = true;
    window.initMap = setupMap;
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBhpUx1wrOB8GWCibu649AJo5Be0ocjq3U&callback=initMap&`;
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

const setupMap = () => {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -8.653840910873269, lng: 115.21785198506426 },
    zoom: 13,
    fullscreenControl: false,
    zoomControl: false,
    keyboardShortcuts: false,
    mapId: null,
  });

  const iconBase = "/images";

  const icon = {
    url: iconBase + "/icon-flag.png",
    scaledSize: new google.maps.Size(40, 40),
  };

  locations.forEach((location) => {
    const marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: map,
      title: location.name,
      icon: icon,
      details: location,
    });

    const contentString = `
      <div class="max-w-[190px] w-full h-full flex flex-col text-end border-2">
        <div class="relative">
          <img src="${location.image}" alt="${location.name}" class="w-full min-h-[100px]">
          <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white"></div>
        </div>
        <div class="px-2 pb-4">
          <h2 class="text-primary mt-2">${location.name}</h2>
          <p class="text-black text-[10px] my-2">${location.area}</p>
          <p>Price: $${location.price}</p>
        </div>
      </div>
    `;

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      closeBoxMargin: "10px 10px 0 0",
    });

    marker.addListener("click", () => {
      if (currentInfoWindow.value) {
        currentInfoWindow.value.close();
      }

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
