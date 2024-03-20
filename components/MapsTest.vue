<!-- <template>
  <div class="rounded-lg overflow-hidden relative">
    <GMapMap
      :center="center"
      :zoom="12"
      map-type-id="terrain"
      style="width: 100%; height: 450px"
      :options="{
        disableDefaultUi: true,
      }"
    >
      <div class="my-5 px-2">
        <GMapAutocomplete
          class="input input-bordered w-full"
          placeholder="Search Map"
          @place_changed="setPlace"
        >
        </GMapAutocomplete>
      </div>
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :icon="{
          url: '/images/marker-red.svg',
          scaledSize: { width: 50, height: 50 },
        }"
        :clickable="true"
        @click="center = m.position"
      >
      </GMapMarker>
    </GMapMap>
  </div>
</template>
<script setup>
const props = defineProps({
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
});

const emit = defineEmits(["update:longitude", "update:latitude"]);

const center = ref({
  lat: parseFloat(props.latitude) || 52.21314997541194,
  lng: parseFloat(props.longitude) || 5.3982948103810795,
});
const markers = ref([
  {
    position: {
      lat: parseFloat(props.latitude) || 52.21314997541194,
      lng: parseFloat(props.longitude) || 5.3982948103810795,
    },
  },
]);

onMounted(() => {
  if (props.latitude && props.longitude) {
    updateValue(props.latitude, props.longitude);
  } else {
    updateValue(52.21314997541194, 5.3982948103810795);
  }
});

function setPlace(ctx) {
  console.log(ctx);
  const latitude = ctx.geometry?.location?.lat();
  const longitude = ctx.geometry?.location?.lng();

  markers.value[0].position.lat = latitude;
  markers.value[0].position.lng = longitude;
  center.value.lat = latitude;
  center.value.lng = longitude;

  updateValue(latitude, longitude);
}

function updateValue(latitude, longitude) {
  emit("update:longitude", longitude.toString());
  emit("update:latitude", latitude.toString());
}
</script> -->

<template>
  <div class="rounded-lg overflow-hidden relative">
    <GMapMap
      :center="center"
      :zoom="12"
      map-type-id="terrain"
      style="width: 100%; height: 450px"
      :options="{
        disableDefaultUi: true,
        draggableCursor: 'pointer',
      }"
      @click="handleMapClick"
    >
      <div class="my-5 px-2">
        <GMapAutocomplete
          class="input input-bordered w-full"
          placeholder="Search Location"
          @place_changed="setPlace"
        >
        </GMapAutocomplete>
      </div>
      <GMapMarker
        :key="'current'"
        :position="currentMarkerPosition"
        :icon="{
          url: '/images/marker-red.svg',
          scaledSize: { width: 50, height: 50 },
        }"
        :clickable="true"
      >
      </GMapMarker>
    </GMapMap>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, onMounted } from "vue";

const props = defineProps({
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
});

const emit = defineEmits(["update:longitude", "update:latitude"]);

const center = ref({
  lat: parseFloat(props.latitude) || 52.21314997541194,
  lng: parseFloat(props.longitude) || 5.3982948103810795,
});

const currentMarkerPosition = ref({
  lat: parseFloat(props.latitude) || 52.21314997541194,
  lng: parseFloat(props.longitude) || 5.3982948103810795,
});

onMounted(() => {
  if (props.latitude && props.longitude) {
    updateValue(props.latitude, props.longitude);
  } else {
    updateValue(52.21314997541194, 5.3982948103810795);
  }
});

function setPlace(ctx) {
  const latitude = ctx.geometry?.location?.lat();
  const longitude = ctx.geometry?.location?.lng();

  currentMarkerPosition.value = { lat: latitude, lng: longitude };
  center.value = { lat: latitude, lng: longitude };

  updateValue(latitude, longitude);
}

function updateValue(latitude, longitude) {
  emit("update:longitude", longitude.toString());
  emit("update:latitude", latitude.toString());
}

function handleMapClick(event) {
  const latitude = event.latLng.lat();
  const longitude = event.latLng.lng();

  currentMarkerPosition.value = { lat: latitude, lng: longitude };

  updateValue(latitude, longitude);
}
</script>
