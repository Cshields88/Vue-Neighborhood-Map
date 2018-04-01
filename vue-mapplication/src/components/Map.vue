<template>
<div class="google-map" :id="mapName"></div> 

</template>

<script>
export default {
  name: "google-map",
  props: ["name"],
  data() {
    return {
      mapName: this.name + "-map",
      markerCoordinates: [
        {
          latitude: 41.919281,
          longitude: -83.339478
        },
        {
          latitude: 41.956363,
          longitude: -83.658961
        },
        {
          latitude: 41.809727,
          longitude: -83.447003
        }
      ]
    };
  },
  mounted: function() {
    const bounds = new google.maps.LatLngBounds();
    const element = document.getElementById(this.mapName);
    const mapCentre = this.markerCoordinates[0];
    const options = {
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude),
      zoom: 8
    };
    const map = new google.maps.Map(element, options);
    this.markerCoordinates.forEach(coord => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude);
      const marker = new google.maps.Marker({
        position,
        map
      });
      map.fitBounds(bounds.extend(position));
    });
  }
};
</script>


<style scoped>
.google-map {
  width: auto;
  height: 400px;
  margin: 0 auto;
  background: gray;
}
</style>
