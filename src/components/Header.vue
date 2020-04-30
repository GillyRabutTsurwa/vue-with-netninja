<template>
  <header>
    <!-- NOTEIMPORTANT: Since a titleProp (a String) is a reference type, it will not change the value anywhere else, because we are making a duplicate of it and not using the same reference point as we do in reference types. -->
    <h1 v-on:click="changeTitle">{{title}}</h1>
  </header>
</template>

<script>
import { bus } from "../main";
export default {
  data() {
    return {
      title: "Vue Ninjas"
    };
  },
  props: {
    titleProp: String
  },
  methods: {
    // NOTE: This method will emit an event up to the parent
    changeTitle() {
      //IMPORTANTNOTE: We use $emit() to run an event up to parent.
      // first parametre is name of event, second is data we want to pass through
      // this.$emit("title-changed", "Vue Makengos");
      //NOTE: We are just regularly changing the title here... but on the next line...
      this.title = "Vue Makengos";
      //IMPORTANTNOTE: we are emitting an event on the bus... to be shipped to the footer
      bus.$emit("title-changed", "Vue Vue Makengos");
    }
  }
};
</script>

<style scoped>
header {
  background-color: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
  cursor: pointer;
}
</style>