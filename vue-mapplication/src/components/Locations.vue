<template>
<div>
   <input class="search" type="text" v-model="search" placeholder="Search Locations">
        <ul class="list-group">
            <li class="list-group-item" v-for="(location, index) in filteredLocations" :index="index" @click="locationSelected">{{location.name}}</li>
            
        </ul>
    
</div> 

</template>
<script>
import { locationBus } from "../main";

export default {
  data() {
    return {
      // locations: [
      //   { name: "Sterling State Park", type: "Restaurant" },
      //   { name: "River Raisin", type: "Store" },
      //   { name: "Sunocco", type: "Gas Station" }
      // ],
      search: ""
    };
  },
  props: ["locations"],
  methods: {
    locationSelected(locations) {
      locationBus.$emit("locationSelected", this.locations);
    }
  },
  computed: {
    filteredLocations() {
      return this.locations.filter(location => {
        return location.name.toUpperCase().match(this.search.toUpperCase());
      });
    }
  }
};
</script>
<style scoped>
.search {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  opacity: 0.6;
}
li {
  color: darkcyan;
}
</style>
