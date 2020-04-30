<template>
  <footer>
    <p>&copy; {{copyright}} {{title}}</p>
  </footer>
</template>

<script>
import { bus } from "../main";
export default {
  data() {
    return {
      copyright: "Copyright 2020,",
      title: "Vue Ninjas"
    };
  },
  props: {
    titleProp: String
  },
  //IMPORTANTNOTE: Event bus events are listened at the point where components are created. In this case, the created hook. TODO: Learn more about life cycle hooks
  created() {
    bus.$on("title-changed", eventBusData => {
      this.title = eventBusData;
    });
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