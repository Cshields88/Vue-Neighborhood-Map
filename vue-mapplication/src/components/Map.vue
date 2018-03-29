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
          latitude: 51.4998973,
          longitude: -0.202432
        }
      ]
    };
  },
  mounted: function() {
    const element = document.getElementById(this.mapName);
    const options = {
      zoom: 10,
      center: new google.maps.LatLng(41.916391, -83.39574)
    };
    const map = new google.maps.Map(element, options);
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
