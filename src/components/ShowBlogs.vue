<template>
  <div id="show-blogs">
    <h1 v-rainbow:auto>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search For Blogs" />
    <div v-if="filteredBlogsArr.length > 0">
      <div v-for="(currentBlog, index) in filteredBlogsArr" v-bind:key="index" class="single-blog">
        <!-- NOTE: Filters do not change the data itself, they simply change the output of the data -->

        <span class="arrow-single-blog">
          <!-- This link will send us to a single blog (SingleBlog.vue) which takes in an ID. Since the data we fetch for all the blogs come with an id, we can just use that as our id to pass in. -->
          <!-- If the id of the blog is 7, the below to path translate as follows:
          "/blog/7". Consequently, blog # 7 will show
          -->
          <router-link v-bind:to="`/blog/${currentBlog.id}`">&rarr;</router-link>
        </span>

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
import searchMixin from "../mixins/searchMixin";
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
    // filteredarray cut from here
  },
  directives: {
    rainbow: {
      bind(el, binding) {
        el.style.color = `#${Math.random()
          .toString()
          .slice(2, 8)}`;
        if (binding.arg === "auto") {
          setInterval(() => {
            el.style.color = `#${Math.random()
              .toString()
              .slice(2, 8)}`;
          }, 3000);
        }
      }
    }
  },
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    },
    snippet(value) {
      return `${value.slice(0, 100)}.....`;
    }
  },
  //NEW: mixins
  mixins: [searchMixin],
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
  position: relative;
  padding: 2rem;
  margin: 2rem 0;
  background-color: #eee;
}

.arrow-single-blog {
  position: absolute;
  top: 1em;
  right: 1em;
  font-size: 1.5em;
}

.arrow-single-blog a {
  color: #333;
  text-decoration: none;
}

.arrow-single-blog a:hover {
  color: #057442;
}
</style>