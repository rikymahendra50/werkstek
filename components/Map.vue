<template>
  <div>
    <h3>My Google Maps Demo.. coming soon</h3>
    <div id="map"></div>
  </div>
</template>

<!-- <script>
export default {
  mounted() {
    this.initMap();
  },
  methods: {
    async initMap() {
      // The location of Uluru
      const position = { lat: -25.344, lng: 131.031 };
      // Request needed libraries.
      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await google.maps.importLibrary(
        "marker"
      );
      // The map, centered at Uluru
      const map = new Map(document.getElementById("map"), {
        zoom: 4,
        center: position,
        apiKey:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyBhpUx1wrOB8GWCibu649AJo5Be0ocjq3U&callback=initMap&",
      });

      // The marker, positioned at Uluru
      const marker = new AdvancedMarkerElement({
        map: map,
        position: position,
        title: "Uluru",
      });
    },
  },
};
</script>
<style scoped>
#map {
  height: 200px;
}
</style> -->
