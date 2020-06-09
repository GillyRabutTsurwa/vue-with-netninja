<template>
  <header>
    <h1 v-on:click="changeTitle">{{titleProp}}</h1>
  </header>
</template>

<script>
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
      this.$emit("title-changed", "Vue Makengos");
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
}
</style>