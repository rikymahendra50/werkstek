<template>
  <div id="map"></div>
</template>

<style scoped>
#map {
  width: 100%;
  height: 300px;
}
</style>

<script setup>
let googleMapsScriptLoaded = false;
let map = ref(null);

const setupMap = () => {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -8.653840910873269, lng: 115.21785198506426 },
    zoom: 2,
    fullscreenControl: false,
    zoomControl: false,
    keyboardShortcuts: false,
    mapId: null,
  });

  map.addListener("click", (event) => {
    const clickedLocation = event.latLng;
    const latitude = clickedLocation.lat();
    const longitude = clickedLocation.lng();
    console.log("Latitude: " + latitude);
    console.log("Longitude: " + longitude);

    emit("latitude-update", latitude);
    emit("longitude-updated", longitude);
  });
};

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
</script>
