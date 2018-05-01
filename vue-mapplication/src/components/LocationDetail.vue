<template>
 <div class="details">
      <!-- <h1 v-for="location in locations">{{location.name}} - {{location.url}}</h1>
       <li v-for="location in locations">{{location.name}} - {{location.url}}</li>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, consequuntur facilis delectus porro accusamus debitis rerum illo blanditiis corrupti pariatur.
         Sint, pariatur sequi. Aperiam pariatur earum doloribus sequi! Eaque, reiciendis!</p> -->

         <p v-if="!location">Please select a Location</p>
        <p v-else
         v-for="(location, i) in locations" 
         :key="location.name">{{i}} | Location #{{ location.name }} selected, Status {{ location.url }} </p>

 </div>
</template>
<script>
import { locationBus } from "../main";

export default {
  data() {
    return {
      location: null
    };
  },
  // props: {
  //   locations: Array
  // },
  props: ["locations"],

  created() {
    // Using the service bus
    locationBus.$on("locationSelected", location => {
      this.locations = location;
      console.log("Clicked Location");
    });

    // EventBus.$on('i-got-clicked', clickCount => {
    //   console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`)
    // });
  }
};
</script>

<style scoped>
.details {
  border: 1px solid black;
  margin: 50px 10px 10px 10px;
  padding: 20px;
}
h1 {
  margin: 0 0 20px 0;
}
</style>
