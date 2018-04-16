<template>
<div class="container" id="main">
  <div class="row">
    <h1 class="text-center">10 Best Michigan Breweries</h1>
  </div>
  <div class="row">
<div class="col">
  <app-locations class="locations" :locations="locations"></app-locations>
</div>
<div class="col">
  <app-map class="map" :locations="locations"></app-map>
</div>
  </div>
  <div class="row">
    <app-detail v-bind="locations" @locationSelected="location = $event"></app-detail>
  </div>
</div>
</template>

<script>
import Map from "./components/Map.vue";
import Locations from "./components/Locations.vue";
import LocationDetail from "./components/LocationDetail.vue";

export default {
  data() {
    return {
      locations: [
        {
          name: "Founders Brewing Co.",
          latitude: 42.9584,
          longitude: -85.6742,
          url: "http://www.foundersbrewing.com"
        },
        {
          name: "Bells Brewery",
          latitude: 42.28511,
          longitude: -85.449972,
          url: "http://www.bellsbeer.com"
        },
        {
          name: "New Holland Brewing Co.",
          latitude: 42.790067,
          longitude: -86.104204,
          url: "http://www.newhollandbrew.com"
        },
        {
          name: "Shorts Brewing Co.",
          latitude: 44.976315,
          longitude: -85.210035,
          url: "http://www.shortsbrewing.com"
        },
        {
          name: "Dark Horse Brewery",
          latitude: 42.26626,
          longitude: -84.963444,
          url: "http://www.darkhorsebrewery.com"
        },
        {
          name: "Kuhnhenn Brewing Company",
          latitude: 42.527963,
          longitude: -83.046753,
          url: "http://www.kbrewery.com"
        },
        {
          name: "Jolly Pumpkin Artisan Ales",
          latitude: 42.323838,
          longitude: -83.878447,
          url: "http://www.jollypumpkin.com"
        },
        {
          name: "Arcadia Brewing Co.",
          latitude: 42.295278,
          longitude: -85.570512,
          url: "http://www.arcadiaales.com"
        },
        {
          name: "Detroit Beer Company",
          latitude: 42.336136,
          longitude: -83.048882,
          url: "http://www.detroitbeerco.com"
        },
        {
          name: "North Peak Brewing Company",
          latitude: 44.765242,
          longitude: -85.628562,
          url: "http://www.northpeak.net"
        }
      ]
    };
  },
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
  color: darkcyan;
}
</style>
