<template>
<div class="container-fluid">
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
</div>
</template>

<script>
import Map from "./components/Map.vue";
import Locations from "./components/Locations.vue";
export default {
  components: {
    appLocations: Locations,
    appMap: Map
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
/* .map {
  width: 60%;
  background-color: black;
}
.list {
  width: 40%;
} */
</style>
