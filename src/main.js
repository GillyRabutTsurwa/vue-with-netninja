import Vue from 'vue'
import App from './App.vue';

Vue.config.productionTip = false;

Vue.directive("rainbow", {
  bind(el, binding) {
    // took me a while to get the Math.random...... logic but it's chill now
    el.style.color = `#${Math.random().toString().slice(2,8)}`;
    if (binding.arg === "auto") {
      setInterval(() => {
        el.style.color = `#${Math.random().toString().slice(2,8)}`;
      }, 3000);
    }

  }
});

//NEW: Filters
// first parametre name of filter
// value we're manipulating. On the left side of the pipe on declaration.
Vue.filter("toUpperCase", (value) => {
  return value.toUpperCase();
});

Vue.filter("snippet", (value) => {
  return `${value.slice(0,100)}...`;
});

new Vue({
  render: h => h(App),
}).$mount('#app')