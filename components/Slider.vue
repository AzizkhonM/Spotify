<script setup lang="ts">
const containerRef = ref(null)
const slides = ref(Array.from({ length: 10 }))
const swiper = useSwiper(containerRef, {
  effect: 'creative',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
    },
  },
})

onMounted(() => {
  console.log(swiper.instance)
})
</script>

<template>
    <ClientOnly>
      <div class="carousel-wrapper">
        <swiper-container ref="containerRef" :init="false">
          <swiper-slide
            v-for="(slide, idx) in slides"
            :key="idx"
            class="slide"
          >
            Slide {{ idx + 1 }}
          </swiper-slide>
        </swiper-container>
      </div>
    </ClientOnly>
  </template>

<style lang="css">
.carousel-wrapper {
  max-width: 100%; /* Ensure it’s responsive */
  width: 800px; /* Set a specific width */
  margin: 0 auto; /* Center it horizontally */
  overflow: hidden; /* Prevent overflow issues */
}

swiper-container {
  width: 100%; /* Ensure it fits within the parent wrapper */
}

swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

::selection {
    background-color: #1ED760; 
    color: white;              
}
</style>