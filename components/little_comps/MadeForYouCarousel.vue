<template>
    <div class="p-6 bg-black text-white">
      <h2 class="text-2xl font-bold mb-4">Made For You</h2>
      <Swiper
        :modules="[SwiperAutoplay, SwiperNavigation]"
        :slides-per-view="'auto'"
        :space-between="20"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        navigation
        class="carousel"
      >
        <SwiperSlide v-for="(playlist, index) in playlists" :key="index" class="w-60">
          <div class="bg-gray-800 rounded-lg p-4 cursor-pointer transition-transform transform hover:scale-105">
            <img :src="playlist.image" alt="Playlist Cover" class="w-full h-40 rounded-lg object-cover mb-3" />
            <h3 class="text-lg font-semibold">{{ playlist.title }}</h3>
            <p class="text-sm text-gray-400">{{ playlist.description }}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue';
// Import Swiper components correctly
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
// Import Swiper modules correctly
import { Navigation, Autoplay } from 'swiper/modules';

const playlists = ref([
  { title: 'Daily Mix 1', description: 'Your favorite hits mixed with new tracks.', image: '/images/mix1.jpg' },
  { title: 'Discover Weekly', description: 'A fresh selection just for you.', image: '/images/discover.jpg' },
  { title: 'On Repeat', description: 'Your most played songs right now.', image: '/images/repeat.jpg' },
  { title: 'Release Radar', description: 'New drops from your favorite artists.', image: '/images/radar.jpg' },
]);
</script>
  
  <style scoped>
  .carousel {
    overflow: visible;
  }
  </style>
  