<template>
  <div id="add-blog">
    <h3>Add Blog</h3>
    <form>
      <label for="title">Blog Title:</label>
      <input type="text" id="title" v-model.lazy="blog.title" />
      <label for="content">Blog Content:</label>
      <textarea name id="content" v-model.lazy="blog.content"></textarea>
    </form>
    <div class="checkboxes">
      <div class="checkboxes__label-input">
        <label for="pinchi">Pinchi</label>
        <input type="checkbox" id="pinchi" value="pinchi" v-model="blog.categoriesArr" />
      </div>
      <div class="checkboxes__label-input">
        <label for="panna" value>Panna</label>
        <input type="checkbox" id="panna" value="panna" v-model="blog.categoriesArr" />
      </div>
      <div class="checkboxes__label-input">
        <label for="akinde">Akinde</label>
        <input type="checkbox" id="akinde" value="akinde" v-model="blog.categoriesArr" />
      </div>
    </div>
    <div class="option-select">
      <!-- I understand
      we bind the value of our select to a variable called blog.loFiChannel
      -->
      <select v-model="blog.loFiChannel">
        <!-- THEN, we dynamically create some options using an array and display them out. The name of the option (based on the array) is what the value of blog.loFiChannel will be
        blog.loFiChannel looks for what is selected in the array of options and whatever is selected will be the value of the variable
        -->
        <option
          v-for="(currentChannel, index) in loFiChannels"
          v-bind:key="index"
        >{{currentChannel}}</option>
      </select>
    </div>
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
      <div class="preview__categories">
        <p>
          <strong>Blog Categories:</strong>
        </p>
        <ul>
          <li
            v-for="(currentCategory, index) in blog.categoriesArr"
            v-bind:key="index"
          >{{currentCategory}}</li>
        </ul>
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
        content: "",
        categoriesArr: [],
        loFiChannel: "STEEZY"
      },
      loFiChannels: [
        "STEEZY",
        "Axian",
        "EmotionalTokyo",
        "ChilledCow",
        "Lo-Fi Girl"
      ]
    };
  },
  updated() {
    console.log(`Current value of loFiChannel is ${this.blog.loFiChannel}`);
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

.checkboxes {
  display: flex;
  justify-content: space-between;
  padding: 0 3em;
  margin: 1.5em 0;
}

.checkboxes label {
  margin-right: 0.25em;
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