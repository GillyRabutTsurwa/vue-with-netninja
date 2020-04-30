<template>
  <div id="ninjas">
    <ul class="list-container">
      <li v-for="(currentNinja, index) in ninjasProp" v-bind:key="index" class="list-item">
        <h2 v-on:click="currentNinja.show = !currentNinja.show">{{currentNinja.name}}</h2>
        <h3 v-if="currentNinja.show">{{currentNinja.speciality}}</h3>
      </li>
    </ul>
    <button v-on:click="deleteNinja">Delete Ninja</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    ninjasProp: Array
  },
  methods: {
    deleteNinja() {
      this.ninjasProp.pop();
    }
  },
  //NEW: lifecycle hooks
  beforeCreate() {
    alert("beforeCreate");
  },
  created() {
    //NOTE: A lot of people go here to fetch data and stuff
    alert("created");
  },
  beforeMount() {
    alert("beforeMount");
  },
  mounted() {
    // NOTE: good place to manipulate the DOM once mounted
    alert("mounted");
  },
  beforeUpdate() {
    // NOTE: run before a change is updated in the DOM
    alert("beforeUpdate");
  },
  updated() {
    // NOTE: runs after the DOM is updated and re-rendered
    // good for manipulating DOM once updated
    alert("updated");
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
