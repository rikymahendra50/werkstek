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
      :class="`relative w-full h-[320px] sm:h-[420px] lg:min-h-[519px] min-[1440px]:h-[619px] z-[-999] rounded-2xl`"
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
  </section>

  <!-- <pre>
    {{ data }}
  </pre> -->
</template>

<script setup>
const { axiosRequest } = useAxios();
const config = useRuntimeConfig();

const center = ref({ lat: 52.21314997541194, lng: 5.3982948103810795 });

let googleMapsScriptLoaded = false;

const loadGoogleMapsScript = () => {
  if (!window.googleMapsScriptLoaded) {
    window.googleMapsScriptLoaded = true;
    window.initMap = setupMap;
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src = config.public.GOOGLE_API;
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
  searchCityT: {
    type: [String, Number],
    required: false,
  },
  SubmitPerform: {
    type: Boolean,
    default: false,
  },
  showSearch: {
    type: Boolean,
    default: true,
  },
});

// data
let infoWindowTimeout;

const { requestOptions } = useRequestOptions();
const { data, error } = await useFetch(`/products`, {
  method: "get",
  ...requestOptions,
});
// const { data: locationData } = await useFetch("/locations", {
//   method: "get",
//   ...requestOptions,
// });

const titleMap = ref("Waar bent u op zoek naar?");
let map = ref(null);
const markers = ref([]);
const currentInfoWindow = ref(null);

const locations = data?.value?.data;

const searchCity = ref(props.searchCityT);
const filteredData = ref();

// console.log("ini searchCityT", props.searchCityT);

watch(
  () => props.SubmitPerform,
  (newValue, oldValue) => {
    performSearch();
  }
);

// end data

// request
async function performSearch() {
  try {
    let params = {};
    params["filter[location]"] = props.searchCityT;

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

  const typeName = ref([
    // {
    //   id: 1,
    //   name: "Regular",
    //   image: "/images/regular-marker.png",
    // },
    // {
    //   id: 2,
    //   name: "Premium",
    //   image: "/images/premium-marker.png",
    // },
  ]);

  typeName.value = locations?.map((item) => {
    return {
      id: item?.level_type?.id,
      name: item?.level_type.name,
      image: item?.level_type?.image,
    };
  });

  function getIconUrl(levelType) {
    const type = typeName?.value?.find((t) => t.name === levelType);
    return type ? type?.image : null;
  }

  locations.forEach((location) => {
    const lat = parseFloat(location?.latitude);
    const lng = parseFloat(location?.longitude);
    const iconUrl = getIconUrl(location?.level_type?.name);

    const marker = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: map,
      title: location.name,
      icon: {
        url: iconUrl,
        scaledSize: new google.maps.Size(40, 40),
      },
      details: location,
    });

    const contentString = `
      <div class="relative">
        <a href="onze-locaties/${location?.slug}" class="max-w-[190px] w-full flex flex-col text-end h-full">
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
      </div>
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
        // closeBoxMargin: "10px 10px 0 0",
      });

      hoverInfoWindow.open(map, marker);
      currentHoveredMarker = marker;
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

.gm-style-iw-ch {
  position: absolute;
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
