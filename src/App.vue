<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <AddBlog />
  </div>
</template>

<script>
import AddBlog from "./components/AddBlog";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    AddBlog: AddBlog
  },
  methods: {}
};
</script>

<style>
@import "./App.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
