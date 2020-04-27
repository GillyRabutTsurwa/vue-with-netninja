<template>
  <footer>
    <p>&copy; {{copyright}} {{titleProp}}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      copyright: "Copyright 2020,"
    };
  },
  props: {
    titleProp: String
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