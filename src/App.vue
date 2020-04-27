<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <HeaderCompo />
    <NinjaCompo />
    <FooterCompo />
  </div>
</template>

<script>
import Header from "./components/Header";
import Ninjas from "./components/Ninjas";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    HeaderCompo: Header, //NOTE: Can't use header because it's a reserved HTML5 Element Tag.
    NinjaCompo: Ninjas,
    FooterCompo: Footer //NOTE: Same 4 footer. Which is why I used HeaderCompo & FooterCompo respectively.
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
</style>
