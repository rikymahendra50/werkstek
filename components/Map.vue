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

<script scoped>
let googleMapsScriptLoaded = false;
export default {
  props: {
    latitude: {},
    longitude: {},
  },
  data() {
    return {
      map: null,
      markers: [],
      currentInfoWindow: null,
      locations: [
        {
          lat: -8.653840910873269,
          lng: 115.21785198506426,
          name: "Tolstraat 186-188 H, Amsterdam De Pijp",
          area: "1104 m2",
          image: "/images/img-home-1.png",
          popularity: 100,
          city: "Rotterdam",
          type: "Kantoorruimte",
          price: 230,
          filtered: false,
        },
        // test
        {
          lat: -8.653840910873269,
          lng: 115.21785198506426,
          name: "Tolstraat 186-188 H, Amsterdam De Pijp",
          area: "1104 m2",
          image: "/images/img-home-1.png",
          popularity: 100,
          city: "Rotterdam",
          type: "Kantoorruimte",
          price: 750,
          filtered: false,
        },
        {
          lat: -8.62717144710956,
          lng: 115.29189271629312,
          name: "Company C",
          area: "Deskripsi C",
          image: "/images/img-home-1.png",
          popularity: 20,
          city: "Rotterdam",
          type: "Andere Optie 2",
          price: 240,
          filtered: false,
        },
        {
          lat: -8.641220836289818,
          lng: 115.17259520426518,
          name: "Company D",
          area: "Deskripsi D",
          image: "/images/img-home-1.png",
          popularity: 20,
          city: "Amsterdam",
          type: "Andere Optie 1",
          price: 4,
          filtered: false,
        },
        {
          lat: -8.616146108681335,
          lng: 115.17967680101556,
          name: "Company E",
          area: "Deskripsi E",
          image: "/images/img-home-1.png",
          popularity: 20,
          city: "Rotterdam",
          type: "Andere Optie 1",
          price: 710,
          filtered: false,
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
    findMarkerByLatLng(lat, lng) {
      return this.markers.find((marker) => {
        const position = marker.getPosition();
        return position.lat() === lat && position.lng() === lng;
      });
    },

    // Move To Location when search
    moveToLocation(lat, lng) {
      if (this.map) {
        // Pindahkan pusat peta ke lokasi yang baru
        this.map.setCenter({ lat, lng });

        // Temukan marker yang difilter
        const filteredMarkers = this.markers.filter(
          (marker) => marker.details.filtered
        );

        // Buat batas (bounds) yang mencakup semua marker yang difilter
        const bounds = new google.maps.LatLngBounds();
        filteredMarkers.forEach((marker) => {
          bounds.extend(marker.getPosition());
        });

        // Setelah mendapatkan batas, fit peta ke batas tersebut
        this.map.fitBounds(bounds);

        // Memastikan level zoom tidak terlalu tinggi atau rendah
        const maxZoom = 12;
        const minZoom = 10;
        const currentZoom = this.map.getZoom();
        this.map.setZoom(Math.min(Math.max(currentZoom, minZoom), maxZoom));

        // Buka info window untuk marker yang sesuai
        const matchingMarker = this.markers.find((marker) =>
          marker.getPosition().equals(new google.maps.LatLng(lat, lng))
        );

        if (matchingMarker) {
          matchingMarker.details.filtered = true;
          // this.updateMarker();

          const infowindow = new google.maps.InfoWindow({
            content: `
              <div style="max-width: 190px;" class="text-end">
                <img src="${matchingMarker.details.image}" alt="${matchingMarker.details.name}" style="width: 200px; min-height: 100px;">
                <div style="padding: 10px; border:1px solid red">
                  <h2 style="color: #F0912D; margin-top: 2px;">${matchingMarker.details.name}</h2>
                  <p style="color: black; font-size: 10px; margin: 2px 0;">${matchingMarker.details.area}</p>
                  <p style="color: black;">Price: $${matchingMarker.details.price}</p>
                </div>
              </div>
            `,
          });

          infowindow.open(this.map, matchingMarker);
          this.currentInfoWindow = infowindow;
        }
      }
    },

    // Map Function
    loadGoogleMapsScript() {
      if (!window.googleMapsScriptLoaded) {
        window.googleMapsScriptLoaded = true;
        window.initMap = this.setupMap;
        const googleMapsScript = document.createElement("script");
        googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBhpUx1wrOB8GWCibu649AJo5Be0ocjq3U&callback=initMap&`;
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
      const brightStyle = [
        {
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }],
        },
        {
          elementType: "labels.text.fill",
          stylers: [{ color: "#757575" }],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [{ color: "#ffffff" }],
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [{ color: "#ffffff" }],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [{ color: "#bdbdbd" }],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#eeeeee" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#757575" }],
        },
      ];

      this.map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -8.653840910873269, lng: 115.21785198506426 },
        zoom: 1,
        fullscreenControl: false,
        zoomControl: false,
        keyboardShortcuts: false,
        mapId: null,
        styles: brightStyle,
      });
      const iconBase = "http://maps.google.com/mapfiles/ms/icons/";

      const icon = {
        url: iconBase + "red-dot.png",
        scaledSize: new google.maps.Size(15, 15),
      };
      this.locations.forEach((location) => {
        const marker = new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: this.map,
          title: location.name,
          icon: icon,
          details: location,
        });
        const contentString = `
          <div class="w-full flex flex-col text-start">
            <img src="${location.image}" alt="${location.name}" class="w-full max-h-[100px]">
            <div class="px-2 pb-4">
              <h2 class="text-primary mt-2 text-[14px]">${location.name}</h2>
              <p class="text-black text-[10px] my-2">${location.area}</p>
              <p class="text-[10px]">Price: $${location.price}</p>
            </div>
          </div>
        `;
        const infowindow = new google.maps.InfoWindow({
          content: contentString,
          closeBoxMargin: "10px 10px 0 0",
        });

        marker.addListener("click", () => {
          if (this.currentInfoWindow) {
            this.currentInfoWindow.close();
          }

          infowindow.open(this.map, marker);
          this.currentInfoWindow = infowindow;
        });

        this.markers.push(marker);
      });
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
</script>
