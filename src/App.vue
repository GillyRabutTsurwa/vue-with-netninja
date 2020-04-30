<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <!-- IMPORTANTNOTE: Here in the parent, we listen to the emitted event like any other click event, with v-on:{eventName} or :{eventName}. Onwards, we usually declare a function with an arguement of ($event), which is the data that we wanted to bring with from the child component. In our case, it was Vue Makengos. -->
    <HeaderCompo v-bind:titleProp="title" v-on:title-changed="updateTitle($event)" />
    <NinjaCompo v-bind:ninjasProp="ninjas" />

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
    HeaderCompo: Header,
    NinjaCompo: Ninjas,
    FooterCompo: Footer
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
  },
  methods: {
    //IMPORTANTNOTE: This is the method that has access to the data passed through from the child component for the event. The parametre updatedTitle IS $event arguement that contains the data to pass on to the parent... Vue Makengos
    updateTitle(updatedTitle) {
      this.title = updatedTitle;
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
</style>
