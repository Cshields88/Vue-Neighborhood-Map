import Vue from "vue";
// import VueRouter from "vue-router";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import Routes from "routes.js";

Vue.use(BootstrapVue);
// Vue.use(VueRouter);
export const locationBus = new Vue();
// const router = new VueRouter({
//   routes: routes
// });

new Vue({
  el: "#app",
  render: h => h(App)
});
