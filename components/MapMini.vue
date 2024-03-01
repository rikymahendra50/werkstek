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
let googleMapsScriptLoaded = false;

let map = ref(null);
const markers = ref([]);
const currentInfoWindow = ref(null);

const props = defineProps({
  latitude: {},
  longitude: {},
});

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
    zoom: 4,
    fullscreenControl: false,
    zoomControl: false,
    keyboardShortcuts: false,
    mapId: null,
  });

  const iconBase = "/images";

  const icon = {
    url: iconBase + "/marker-red.svg",
    scaledSize: new google.maps.Size(20, 20),
  };

  const lat = parseFloat(props.latitude);
  const lng = parseFloat(props.longitude);

  const marker = new google.maps.Marker({
    position: { lat: lat, lng: lng },
    map: map,
    title: "test",
    icon: icon,
  });

  marker.addListener("click", () => {
    map.setCenter(marker.getPosition());
    map.setZoom(10);
  });
};
</script>
