<template>
  <!-- NEW: SLOTS. This will be pertaining to the html inside our component tags on the App component -->
  <!-- NEWNOTE: naming slots is even better, parce que tu peux deplacer les slots dans les endroits differences -->
  <div>
    <slot name="titleSlot"></slot>
    <h1>Yo</h1>
    <slot name="textSlot"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
h1 {
  color: forestgreen;
}
</style>