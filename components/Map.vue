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
  AllData: {},
  filterData: {},
});

let googleMapsScriptLoaded = false;

// console.log(props.filterData);

let map = ref(null);
const markers = ref([]);
const currentInfoWindow = ref(null);

const locationsTest = ref(props.AllData);
const locations = locationsTest.value.data;

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
    url: iconBase + "/icon-coordinate.svg",
    scaledSize: new google.maps.Size(20, 20),
  };

  const bounds = new google.maps.LatLngBounds();

  locations.forEach((location) => {
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
</script>
