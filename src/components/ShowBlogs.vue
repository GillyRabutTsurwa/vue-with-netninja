<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <div v-for="(currentBlog, index) in blogsArr" v-bind:key="index" class="single-blog">
      <h2>{{currentBlog.title}}</h2>
      <article>{{currentBlog.body}}</article>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      blogsArr: []
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        let data = response.data;
        let dataSliced = data.slice(0, 10);
        this.blogsArr = dataSliced;
        console.log(this.blogsArr);
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style>
#show-blogs {
  max-width: 60rem;
  margin: 0 auto;
}

.single-blog {
  padding: 2rem;
  margin: 2rem 0;
  background-color: #eee;
}
</style>