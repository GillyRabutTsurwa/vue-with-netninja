<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <SlotDemo>
      <h2 slot="titleSlot">{{slotTitle}}</h2>
      <p slot="textSlot">Pinchi ma pinchi</p>
    </SlotDemo>
    <hr />
    <FormHelper />
  </div>
</template>

<script>
import SlotDemo from "./components/SlotDemo";
import FormHelper from "./components/FormHelper";
export default {
  name: "App",
  data() {
    return {
      //IMPORTANTNOTE: If we want to make our slots dynamic, we must use them where the dynamic slots are initialised (in our case the app component).
      //HINT: where you are NOT using the slot tags to define them like this....
      // <slot></slot>
      slotTitle: "Je suis un titre de slot dynamique"
    };
  },
  components: {
    SlotDemo: SlotDemo,
    FormHelper: FormHelper
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
