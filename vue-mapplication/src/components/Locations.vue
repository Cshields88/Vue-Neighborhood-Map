<template>
<div>
   <input class="search" type="text" v-model="search" placeholder="Search Locations">
        <ul class="list-group">
            <li class="list-group-item" v-for="location in filteredLocations">{{location.name}}</li>
            
        </ul>
    
</div> 

</template>
<script>
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
}
</style>
