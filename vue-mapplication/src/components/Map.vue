<template>
<div class="google-map" :id="mapName"></div> 

</template>

<script>
export default {
  name: "google-map",
  props: ["locations"],
  data() {
    return {
      mapName: this.name + "-map",
      map: null,
      bounds: null,
      markers: []
    };
  },
  mounted: function() {
    this.bounds = new google.maps.LatLngBounds();
    const element = document.getElementById(this.mapName);
    const mapCentre = this.locations[0];
    const options = {
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
    };
    this.map = new google.maps.Map(element, options);
    this.locations.forEach(coord => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude);
      const marker = new google.maps.Marker({
        position,
        map: this.map
      });
      this.markers.push(marker);
      this.map.fitBounds(this.bounds.extend(position));
    });
  }
};
</script>


<style scoped>
.google-map {
  width: auto;
  height: 525px;
  margin: 0 auto;
  background: gray;
}
</style>
