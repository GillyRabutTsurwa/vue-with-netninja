import Vue from 'vue'
import App from './App.vue';
import VueRouter from "vue-router";
import Routes from "./routes/routes";

//NEW: Code to introduce vue router
Vue.use(VueRouter);
// code to instantiate vue router
const router = new VueRouter({
  // object for our routes. we will not do it here, we will make a routes folder & file
  routes: Routes,
  mode: "history"
  // IMPORTANTNOTE: mode: "history" will work locally. If you want to make it work if you are deploying an application (preferrably using nodejs), consult this link: https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations 
})


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')