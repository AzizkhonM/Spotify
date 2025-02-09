<script setup>
definePageMeta({
  layout: false, // Optional: Use no layout
})
</script>

<template>
  <div>
    <Error404 />
  </div>
</template>

<script>
import Error404 from '../layouts/error.vue'
export default {
  components: { Error404 },
}
</script>


<style>
::selection {
    background-color: #1ED760; 
    color: white;              
}
</style>