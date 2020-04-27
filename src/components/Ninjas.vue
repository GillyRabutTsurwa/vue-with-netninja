<template>
  <div id="ninjas">
    <ul class="list-container">
      <li v-for="(currentNinja, index) in ninjas" v-bind:key="index" class="list-item">
        <h2 v-on:click="currentNinja.show = !currentNinja.show">{{currentNinja.name}}</h2>
        <h3 v-if="currentNinja.show">{{currentNinja.speciality}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Engineering", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false }
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  color: forestgreen;
}

h2 {
  color: #333;
  cursor: pointer;
}

h2:hover {
  color: forestgreen;
}

#ninjas {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.list-container {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

.list-item {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
}
</style>
