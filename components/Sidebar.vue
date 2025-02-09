<template>
    <div class="wrapped w-full">
        <div class="grid gap-2 grid-cols-1">
            <NuxtLink v-for="el in albums" :key="el.id" :to="{ name: 'album-id', params: { id: el.path } }"
                class="w-full aspect-square p-[5px] hover:bg-[#1c1c1c] hover:cursor-pointer rounded-md">
                <img :src="el.coverpath" alt="" class="rounded-md">
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import albums from "../static/albums.json"
</script>

<style scoped>
.wrapped {
    color: white;
    background-color: #121212;
    border-radius: 5px;
    overflow-y: scroll;
    height: calc(100vh - 180px);
    scrollbar-gutter: stable both-edges;
    scrollbar-width: 5px;
    padding: 5px 0px;
}

.wrapped::-webkit-scrollbar {
    width: 5px;
}

.wrapped::-webkit-slider-thumb {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}

::selection {
    background-color: #1ED760; 
    color: white;              
}
</style>