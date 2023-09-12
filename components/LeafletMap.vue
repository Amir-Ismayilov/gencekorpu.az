<template>
  <div :id="'map-' + _uid" style="height: 250px; width: 100%;border-radius: 5px"></div>
</template>

<script>
export default {
  name: "LeafletMap.vue",
  props: {
    latitude: String,
    longitude: String,
    address: String,
  },
  data() {
    return {
      map: null
    };
  },
  mounted() {
    if (process.client) {
      const L = require("leaflet");
      require("leaflet-fullscreen");
      const myIconPath = require('../assets/icons/place_point.png');

      if (!this.map) {
        const mapId = 'map-' + this._uid;
        this.map = L.map(mapId, {
          center: [this.latitude, this.longitude],
          zoom: 10,
          fullscreenControl: true,
          attributionControl: false,
        });

        L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
          attribution: '<a href="https://lider.az/">LIDER GROUP</a>'
        }).addTo(this.map);

        const customIcon = L.icon({
          iconUrl: myIconPath,
          iconSize: [50, 50],
          iconAnchor: [29, 75],
          popupAnchor: [-3, -76]
        });

        L.marker([this.latitude, this.longitude], { icon: customIcon })
          .addTo(this.map)
          .bindPopup("<b>Ünvan: </b> <br>" + this.address);
      }
    }
  },
  beforeDestroy() {
    if (this.map) {
      this.map.remove();
    }
  }
}
</script>

<style scoped>
#map {
  border-radius: 5px;
}
</style>
