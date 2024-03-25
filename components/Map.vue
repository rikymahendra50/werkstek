<template>
  <section
    :class="{
      'relative z-20': true,
    }"
  >
    <div
      id="map"
      :class="`relative aspect-video lg:h-[219px] z-[-999] mt-5 w-full`"
    ></div>
  </section>
</template>
<script setup>
const props = defineProps({
  AllData: {},
});

let googleMapsScriptLoaded = false;

let map = ref(null);
const markers = ref([]);
const currentInfoWindow = ref(null);
const AllData = ref(props.AllData);

watch(
  () => props.AllData,
  (newValue) => {
    clearMarkers();
    AllData.value = newValue;
    setupMap();
  }
);

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
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDlXDm2XgaaHSltV5byiQHe9P4HFWtZgOo`;
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
  clearMarkers();
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 52.21314997541194, lng: 5.3982948103810795 },
    zoom: 6,
    fullscreenControl: false,
    zoomControl: false,
    keyboardShortcuts: false,
    mapTypeControl: false,
    streetViewControl: false,
    mapId: null,
  });

  const iconBase = "/images";

  const icon = {
    url: iconBase + "/dot-map.svg",
    scaledSize: new google.maps.Size(30, 30),
  };

  const bounds = new google.maps.LatLngBounds();

  AllData?.value?.forEach((location) => {
    const lat = parseFloat(location.latitude);
    const lng = parseFloat(location.longitude);

    const marker = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: map,
      title: location.name,
      icon: icon,
      details: location,
    });

    bounds.extend(new google.maps.LatLng(location.lat, location.longitude));

    const contentString = `
      <div class="max-w-[120px] w-full h-full flex flex-col text-end border-2">
        <div class="relative">
          <img src="${location?.location?.image}" alt="${location?.location?.name}" class="w-full min-h-[80px] rounded-md">
          <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white"></div>
        </div>
        <div class="px-2 pb-4">
          <h2 class="text-primary mt-2">${location?.name}</h2>
          <p class="text-black text-[10px]">${location?.area_size}</p>
          <p class="text-black text-[10px]">Price: $${location.price}</p>
        </div>
      </div>
    `;

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      closeBoxMargin: "10px 10px 0 0",
    });

    marker.addListener("click", () => {
      map.setCenter(marker.getPosition());
      map.setZoom(10);

      if (currentInfoWindow.value) {
        currentInfoWindow.value.close();
      }

      infowindow.open(map, marker);
      currentInfoWindow.value = infowindow;
    });

    markers.value.push(marker);
  });
};

const clearMarkers = () => {
  markers.value.forEach((marker) => {
    marker.setMap(null);
  });
  markers.value = [];
};
</script>
