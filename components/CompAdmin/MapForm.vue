<template>
  <div class="">
    <!-- <input
      id="pac-input"
      class="controls"
      type="text"
      placeholder="Search Box"
    /> -->
    <div id="map"></div>
  </div>
</template>

<style scoped>
#map {
  width: 100%;
  height: 300px;
  cursor: default;
}

#pac-input {
  position: absolute;
  z-index: 2;
  top: 10px;
  left: 10px;
  padding: 10px;
  width: 300px;
}
</style>

<script setup>
let googleMapsScriptLoaded = false;
let map = ref(null);

const config = useRuntimeConfig();

const emit = defineEmits(["location-updated"]);

const setupMap = () => {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 52.083288322189745, lng: 5.37300778635175 },
    zoom: 2,
    mapId: null,
  });

  map.addListener("click", (event) => {
    const clickedLocation = event.latLng;
    const latitude = clickedLocation.lat();
    const longitude = clickedLocation.lng();

    emit("location-updated", { latitude, longitude });

    const marker = new google.maps.Marker({
      position: clickedLocation,
      map: map.value,
    });
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
</script>
