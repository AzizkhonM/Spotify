<template>
    <div class="grid gap-2 p-2 big-container">
      <Header />
      <div class="grid-container">
        <Sidebar />
        <slot /> <!-- This will now load the Discography page -->
      </div>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Sidebar from '~/components/Sidebar.vue';
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';
  </script>
  

<style scoped>

*{
  scroll-behavior: smooth;
}

.big-container {
    display: grid;
    grid-template-rows: 70px 1fr 70px;
    grid-template-areas:
        "header"
        "sidebar main"
        "footer footer";
    height: 99vh;
}

.grid-container {
    display: grid;
    grid-template-columns: 64px 1fr;
    grid-template-areas:
        "header"
        "sidebar main"
        "footer footer";
    width: 100%;
    gap: 12px;
}
</style>