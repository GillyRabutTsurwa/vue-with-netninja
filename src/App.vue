<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <button
      @click="changeForm"
    >{{component === "FormOne" ? "Change To Form 2" : "Change To Form 1"}}</button>
    <!-- NEW component tag -->
    <!-- component vue "element" has the is attribute which looks for a value that equates to the desired form name to be rendered. The value have to equate to the component name(s) -->
    <!-- NEW keep alive tag. keeps the component alive and hidden (does not destroy it) when we dynamically change to another component. This is especially useful cause we can switch between the forms and the info in the inputs will be preserved -->
    <!-- NOTE: Shaun's definition keep alive tells component: Do not destroy the component (its data etc) when we switch to a new one -->
    <!-- NOTE: definition of keep alive according to VSCode: When wrapped around a dynamic component, <keep-alive> caches the inactive component instances without destroying them. -->
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
  </div>
</template>

<script>
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";
export default {
  name: "App",
  data() {
    return {
      component: "FormOne"
    };
  },
  components: {
    FormOne: FormOne,
    FormTwo: FormTwo
  },
  methods: {
    changeForm() {
      this.component === "FormOne"
        ? (this.component = "FormTwo")
        : (this.component = "FormOne");
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  position: fixed;
  width: 1.5em;
  height: 1.5em;
  top: 1em;
  left: 1em;
}

button {
  cursor: pointer;
}
</style>
