<template>
<div>
   
        <ul class="list-group">
            <li class="list-group-item" v-for="location in locations">{{location.name}}</li>
            
        </ul>
    
</div> 

</template>
<script>
export default {
  data() {
    return {
      locations: [
        { name: "Sterling State Park", type: "Restaurant" },
        { name: "River Raisin", type: "Store" },
        { name: "Mobile", type: "Gas Station" }
      ]
    };
  }
};
</script>
