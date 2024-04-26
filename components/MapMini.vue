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
      :icon="{
        url: '/images/icon-markers-red.png',
        scaledSize: { width: 50, height: 50 },
      }"
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
});

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
</script>
