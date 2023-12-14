<template>
    <div id="map"></div>
</template>
  
  <script setup>
  
  let map;
  let markers = [];
  
  function initMap() {
      const locations = [
        { 
            lat: -8.653840910873269, 
            lng: 115.21785198506426, 
            name: 'Title A', 
            description: 'Deskripsi A', 
            price: 4, 
            image: 'image.jpg',
            popularity: 100 
        },
        { 
            lat: -8.62717144710956, 
            lng: 115.20910166137442, 
            name: 'Title B', 
            description: 'Deskripsi B', 
            price: 5, 
            image: 'image.jpg' ,
            popularity: 20
        },
      ];

      map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -8.653840910873269, lng: 115.21785198506426 }, // Koordinat tengah peta
        zoom: 13 // Tingkat zoom awal
      });

      const iconBase = 'http://maps.google.com/mapfiles/ms/icons/';

      locations.forEach(location => {
        const marker = new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: map,
          title: location.name,
          icon: iconBase + 'red-dot.png' // Custom marker icon
        });

        const contentString = `
          <div>
            <h2>${location.name}</h2>
            <img src="${location.image}" alt="${location.name}" style="width:200px;height:100px;">
            <p>${location.description}</p>
            <p>Price: $${location.price}</p>
          </div>
        `;

        const infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        marker.addListener('click', () => {
          infowindow.open(map, marker);
        });

        markers.push({ marker, popularity: location.popularity });
      });

      google.maps.event.addListener(map, 'zoom_changed', function() {
        const currentZoom = map.getZoom();

        markers.forEach(location => {
          if (location.popularity < 50 && currentZoom < 12) {
            location.marker.setVisible(false);
          } else {
            location.marker.setVisible(true);
          }
        });
      });
    }


    function loadGoogleMapsScript() {
        const googleMapsScript = document.createElement('script');
        googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBhpUx1wrOB8GWCibu649AJo5Be0ocjq3U&callback=initMap`;
        googleMapsScript.defer = true;
        googleMapsScript.async = true;
        window.initMap = initMap; // Make sure initMap is accessible globally
        document.head.appendChild(googleMapsScript);
    }

    loadGoogleMapsScript(); // Panggil fungsi untuk memuat skrip Google Maps


  </script>
  
  <style>
  #map {
    height: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
  </style>
  
  <script>
  export default {
    name: 'MapInteractive'
  };
  </script>
  