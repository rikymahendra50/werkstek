<!-- <template>
  <div
    id="map"
    class="relative max-w-[500px] h-[420px] lg:h-[619px] border-2"
  ></div>
</template>

<style>
/* style */
</style>

<script scoped>
let googleMapsScriptLoaded = false;
export default {
  props: {
    marginCustom: {
      type: String,
      required: false,
    },
    searchCustom: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      titleMap: "Waar bent u op zoek naar?",
      map: null,
      markers: [],
      currentInfoWindow: null,
      locations: [
        {
          lat: -8.653840910873269,
          lng: 115.21785198506426,
          name: "Company 1",
          description: "Deskripsion A",
          image: "/images/img-home-1.png",
          popularity: 100,
          city: "Rotterdam",
          type: "Kantoorruimte",
          price: 4,
        },
        {
          lat: 4.898119435986263,
          lng: 52.40792434130093,
          name: "Company e",
          description: "Deskripsion e",
          image: "/images/img-home-1.png",
          popularity: 100,
          city: "Rotterdam",
          type: "Kantoorruimte",
          price: 4,
        },
      ],
      categories: [
        {
          title: "Zoek een Locatie",
          selectedOption: "Utrecht",
          showDropdown: false,
          options: ["Utrecht", "Amsterdam", "Rotterdam", "Den Haag"],
        },
        {
          title: "Type",
          selectedOption: "Kantoorruimte",
          showDropdown: false,
          options: ["Kantoorruimte", "Andere Optie 1", "Andere Optie 2"],
        },
        {
          title: "Zoek op een prijs",
          selectedOption: 4,
          showDropdown: false,
          options: [4, 8, 4],
        },
      ],
    };
  },
  mounted() {
    if (!googleMapsScriptLoaded) {
      googleMapsScriptLoaded = true;
      this.loadGoogleMapsScript();
    } else {
      this.setupMap();
    }
  },
  methods: {
    // Map Function
    loadGoogleMapsScript() {
      if (!window.googleMapsScriptLoaded) {
        window.googleMapsScriptLoaded = true;
        window.initMap = this.setupMap;
        const googleMapsScript = document.createElement("script");
        googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBhpUx1wrOB8GWCibu649AJo5Be0ocjq3U&callback=initMap`;
        googleMapsScript.defer = true;
        googleMapsScript.async = true;
        googleMapsScript.onload = () => {
          this.googleMapsScriptLoaded = true;
        };
        document.head.appendChild(googleMapsScript);
      } else {
        this.setupMap();
      }
    },
    setupMap() {
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -8.653840910873269, lng: 115.21785198506426 },
        zoom: 3,
      });

      const iconBase = "http://maps.google.com/mapfiles/ms/icons/";

      const icon = {
        url: iconBase + "red-dot.png",
        scaledSize: new google.maps.Size(30, 30),
      };

      this.locations.forEach((location) => {
        const marker = new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: this.map,
          title: location.name,
          icon: icon,
        });

        this.markers.push(marker);
      });

      this.setBoundsForMarkers(); // Panggil fungsi ini setelah semua marker ditambahkan
    },

    setBoundsForMarkers() {
      const bounds = new google.maps.LatLngBounds();
      this.markers.forEach((marker) => {
        bounds.extend(marker.getPosition());
      });
      this.map.fitBounds(bounds);
    },
  },
};
</script> -->

<template>
  <p>test</p>
</template>
