<template>
 <div class="details">
      <h1 :name="name">{{name}}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, consequuntur facilis delectus porro accusamus debitis rerum illo blanditiis corrupti pariatur. Sint, pariatur sequi. Aperiam pariatur earum doloribus sequi! Eaque, reiciendis!</p>
 </div>
</template>
<script>
export default {
  props: ["name", "description"]
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
