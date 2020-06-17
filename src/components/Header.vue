<template>
  <nav class="navigation">
    <div class="logo-container">
      <img class="logo" alt="Vue logo" src="../assets/logo.png" />
    </div>
    <ul class="navigation__list">
      <li class="navigation__list--item">
        <!-- NOTE: we need the exact HTML attribute for these, otherwise, the styles of the link when it is active will apply to both, as if they are both active. This is because the style is applying to any path that starts with "/". To make sure the style applies only to the specific path that the link directs to, and only that link, we add the exact attribute. Watch NetNinja's Vue Tutorial 41 for a better understanding.  -->
        <!-- NOTE: alternatively, we can get rid of the exact attribute and change .router-link-active to -router-link-exact-active. That will have the same effect. But I prefer the first one. -->
        <router-link to="/" exact>Blog</router-link>
      </li>
      <li class="navigation__list--item">
        <router-link to="/addBlog" exact>Add New Blog</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.logo-container {
  width: 3em;
  height: 3em;
}

.logo-container .logo {
  width: 100%;
  height: 100%;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 2em;
  background-color: #34495e;
  margin-bottom: 1.75em;
}

.navigation__list {
  display: flex;
  list-style-type: none;
  margin-right: 40%;
}

.navigation__list--item {
  margin-right: 2em;
  text-decoration: none;
}

.navigation__list--item a {
  color: #ddd;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2em;
}

.router-link-active {
  /* background-color: #ddd; */
  border-bottom: 2px solid #ddd;
}
</style>