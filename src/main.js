import Vue from 'vue'
import App from './App.vue';
import VueRouter from "vue-router";
import Routes from "./routes/routes";

//NEW: Code to introduce vue router
Vue.use(VueRouter);
// code to instantiate vue router
const router = new VueRouter({
  // object for our routes. we will not do it here, we will make a routes folder & file
  routes: Routes
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')