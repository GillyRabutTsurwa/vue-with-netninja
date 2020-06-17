<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      // grab the route parametre from the url and stores it in id variable
      // we have access to this because: 1 - we have vue-router and 2 - in our routes.js file, we defined the route for a single blog (this component) to take in an id.
      id: this.$route.params.id,
      blog: {
        title: "",
        body: ""
      }
    };
  },
  methods: {
    // we are fetching data of a single post, eventually extracting it's title and body and displaying them in the UI. Pareille que ce qu'on a fait chez ShowBlogs.vue mais maintenant, on obtient un blog singulier.
    async fetchTitleAndBody() {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${this.id}`
      );
      let data = response.data;
      console.log(data);
      this.blog.title = data.title;
      this.blog.body = data.body;
    }
  },
  created() {
    this.fetchTitleAndBody();
  }
};
</script>

<style>
</style>