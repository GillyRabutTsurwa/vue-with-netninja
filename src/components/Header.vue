<template>
  <header>
    <!-- NOTEIMPORTANT: Since a titleProp (a String) is a reference type, it will not change the value anywhere else, because we are making a duplicate of it and not using the same reference point as we do in reference types. -->
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
    changeTitle() {
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