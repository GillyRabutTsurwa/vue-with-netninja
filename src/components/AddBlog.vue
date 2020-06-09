<template>
  <div id="add-blog">
    <h3>Add Blog</h3>
    <form>
      <label for="title">Blog Title:</label>
      <input type="text" id="title" v-model.lazy="blog.title" />
      <label for="content">Blog Content:</label>
      <textarea name id="content" v-model.lazy="blog.content"></textarea>
    </form>
    <div class="preview">
      <div class="preview__title">
        <p>
          <strong>Blog Title:</strong>
          {{blog.title}}
        </p>
      </div>
      <div class="preview__content">
        <p>
          <strong>Blog Content:</strong>
        </p>
        <p>{{blog.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: "",
        content: ""
      }
    };
  }
};
</script>

<style>
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}

form,
.preview {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

.preview__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
label {
  font-weight: bold;
  margin: 0.5em 0;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

h3 {
  margin-top: 10px;
}
</style>