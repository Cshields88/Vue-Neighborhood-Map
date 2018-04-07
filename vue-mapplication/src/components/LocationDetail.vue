<template>
 <div class="details">
      <h1 v-for="location in locations">{{location.name}} - {{location.url}}</h1>
      <!-- <li v-for="location in locations">{{location.name}} - {{location.url}}</li> -->
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, consequuntur facilis delectus porro accusamus debitis rerum illo blanditiis corrupti pariatur. Sint, pariatur sequi. Aperiam pariatur earum doloribus sequi! Eaque, reiciendis!</p>
 </div>
</template>
<script>
export default {
  // data() {
  //   return {
  //     loc: this.locations,
  //     name: loc.name
  //   };
  // },
  props: ["locations"]
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
