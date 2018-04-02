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
