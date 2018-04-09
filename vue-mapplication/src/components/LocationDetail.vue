<template>
 <div class="details">
   <button type="submit">Add Title</button>
      <h1>{{location.name}}</h1>
      <li v-for="location in locations">{{location.name}} - {{location.url}}</li>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, consequuntur facilis delectus porro accusamus debitis rerum illo blanditiis corrupti pariatur. Sint, pariatur sequi. Aperiam pariatur earum doloribus sequi! Eaque, reiciendis!</p>
 </div>
</template>
<script>
export default {
  data() {
    return {
      title: []
    };
  },
  props: ["locations", "name", "url"],
  methods: {
    addName() {
      return this.title.push(location.name);
    }
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
