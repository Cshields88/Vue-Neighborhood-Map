<template>
<div class="container" id="main">
  <div class="row">
    <h1>Map SPA</h1>
  </div>
  <div class="row">
<div class="col">
  <app-locations class="locations"></app-locations>
</div>
<div class="col">
  <app-map class="map"></app-map>
</div>
  </div>
  <div class="row">
    <app-detail></app-detail>
  </div>
</div>
</template>

<script>
import Map from "./components/Map.vue";
import Locations from "./components/Locations.vue";
import LocationDetail from "./components/LocationDetail.vue";
export default {
  components: {
    appLocations: Locations,
    appMap: Map,
    appDetail: LocationDetail
  }
};
</script>

<style>
#main {
  margin-top: 60px;
}
h1 {
  margin: 0 0 20px 20px;
}
</style>
