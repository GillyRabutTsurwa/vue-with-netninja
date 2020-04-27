<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <HeaderCompo v-bind:titleProp="title" />
    <!-- NOTEIMPORTANT: you have to use v-bind to pass on props to child -->
    <!-- We are passing on the ninjas array to the child Ninjas Component -->
    <NinjaCompo v-bind:ninjasProp="ninjas" />
    <hr />
    <NinjaCompo v-bind:ninjasProp="ninjas" />
    <!-- NOTE: Clicking a ninja in one place will delete in both -->

    <FooterCompo v-bind:titleProp="title" />
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
  },
  data() {
    return {
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Engineering", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false }
      ],
      title: "Vue Ninjas"
    };
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
