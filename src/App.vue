<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <!-- <AddBlog /> -->
    <Blogs />
  </div>
</template>

<script>
// import AddBlog from "./components/AddBlog";
import ShowBlogs from "./components/ShowBlogs";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    // AddBlog: AddBlog,
    Blogs: ShowBlogs
  }
};
</script>

<style>
@import "./App.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo {
  position: fixed;
  top: 2em;
  left: 2em;
  width: 3em;
  height: 3em;
}

.btn {
  cursor: pointer;
  outline: none;
  border: 0.1em solid transparent;
  font-size: 1.1em;
  padding: 0.7em 1.1em;
  margin: 1em;
  text-transform: uppercase;
  background-color: #42b883;
  color: #fff;
  font-weight: 600;
  border-radius: 0.5em;
  transition: all 0.2s ease-in;
}
.btn:hover {
  color: #42b883;
  background-color: #fff;
  border: 0.1em solid #42b883;
}
</style>
