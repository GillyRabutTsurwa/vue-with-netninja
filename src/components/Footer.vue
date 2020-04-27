<template>
  <footer>
    <p>&copy; {{copyright}}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      copyright: "Copyright 2020, Vue Ninjas"
    };
  }
};
</script>

<style scoped>
footer {
  background-color: #222;
  padding: 6px;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>