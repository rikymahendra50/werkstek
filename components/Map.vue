<template>
  <section
    :class="{
      'relative z-20': true,
    }"
  >
    <div
      id="map"
      :class="`relative aspect-video lg:h-[219px] z-[-999] mt-5`"
    ></div>
  </section>
</template>

<script setup>
const props = defineProps({
  filterData: {},
});

let googleMapsScriptLoaded = false;

let map = ref(null);
const markers = ref([]);
const currentInfoWindow = ref(null);

const locations = ref(props.filterData.value);

console.log(locations);

onMounted(() => {
  if (!googleMapsScriptLoaded) {
    googleMapsScriptLoaded = true;
    loadGoogleMapsScript();
  } else {
    setupMap();
  }
});

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

  locations.value.forEach((location) => {
    // Mengakses nilai aktual dari locations
    const marker = new google.maps.Marker({
      position: { lat: location.latitude, lng: location.longitude },
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
</script>
