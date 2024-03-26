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

<!-- <script setup>
let googleMapsScriptLoaded = false;
let map = ref(null);

function initAutocomplete() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.8688, lng: 151.2195 },
    zoom: 13,
    mapTypeId: "roadmap",
  });
  // Create the search box and link it to the UI element.
  const input = document.getElementById("pac-input");
  const searchBox = new google.maps.places.SearchBox(input);

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });

  let markers = [];

  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();

    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }

      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };

      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
        })
      );
      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

// window.initAutocomplete = initAutocomplete;

onMounted(() => {
  if (!googleMapsScriptLoaded) {
    googleMapsScriptLoaded = true;
    loadGoogleMapsScript();
  } else {
    initAutocomplete();
  }
});

const loadGoogleMapsScript = () => {
  if (!window.googleMapsScriptLoaded) {
    window.googleMapsScriptLoaded = true;
    window.initMap = initAutocomplete;
    const googleMapsScript = document.createElement("script");
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBhpUx1wrOB8GWCibu649AJo5Be0ocjq3U&callback=initMap&`;
    googleMapsScript.defer = true;
    googleMapsScript.async = true;
    googleMapsScript.onload = () => {
      googleMapsScriptLoaded = true;
    };
    document.head.appendChild(googleMapsScript);
  } else {
    initAutocomplete();
  }
};
</script> -->
