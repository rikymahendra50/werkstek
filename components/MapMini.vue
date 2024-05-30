<template>
  <GMapMap
    :center="center"
    :zoom="14"
    map-type-id="terrain"
    style="width: 100%; height: 250px"
    :options="{
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: true,
      rotateControl: false,
      fullscreenControl: false,
    }"
  >
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :icon="getMarkerIcon(levelType)"
      :clickable="true"
      @click="center = m.position"
    >
    </GMapMarker>
  </GMapMap>
</template>

<script setup>
const props = defineProps({
  latitude: {},
  longitude: {},
  levelType: {},
});

console.log(props.levelType?.image);

const center = ref({
  lat: parseFloat(props.latitude),
  lng: parseFloat(props.longitude),
});

const markers = ref([
  {
    position: {
      lat: parseFloat(props.latitude),
      lng: parseFloat(props.longitude),
    },
  },
]);

function getMarkerIcon(levelTypeName) {
  return {
    url: levelTypeName?.image,
    scaledSize: { width: 50, height: 50 },
  };
}
</script>
