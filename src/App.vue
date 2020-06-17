<template>
  <div id="app">
    <Tete />
    <!-- This router-view is responsible of rendering the component based on the specific path (consult routes/routes.js). So we don't need to import and define our components like usual.
    ie, router-view says "yo, based on the url, render the appropriate component in this place"
    -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
// import AddBlog from "./components/AddBlog";
// import ShowBlogs from "./components/ShowBlogs";
// import ListBlogs from "./components/ListBlogs";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Tete: Header
    // AddBlog: AddBlog,
    // Blogs: ShowBlogs,
    // ListBlogs: ListBlogs
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
