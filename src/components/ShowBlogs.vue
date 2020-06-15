<template>
  <div id="show-blogs">
    <h1 v-rainbow:auto>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search For Blogs" />
    <div v-if="filteredBlogsArr.length > 0">
      <div v-for="(currentBlog, index) in filteredBlogsArr" v-bind:key="index" class="single-blog">
        <!-- NOTE: Filters do not change the data itself, they simply change the output of the data -->
        <h2 v-rainbow>{{currentBlog.title | toUpperCase}}</h2>
        <article>{{currentBlog.body | snippet}}</article>
      </div>
    </div>
    <div v-else>
      <p style="font-size: 3em">¯\_(ツ)_/¯</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      blogsArr: [],
      search: ""
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
  computed: {
    filteredBlogsArr: function() {
      return this.blogsArr.filter(currentBlog => {
        return currentBlog.title.match(this.search);
      });
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