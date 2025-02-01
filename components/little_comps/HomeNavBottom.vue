<template>
    <div class="grid head gap-3 grid-cols-4">
        <NuxtLink v-for="el in homeNavBottom" :key="el.id" :to="el.isalbum 
      ? { name: 'album-id', params: { id: el.path } } 
      : { name: 'playlist-id', params: { id: el.path } }"
            class="h-16 bg-[#303030] hover:bg-[#3e3e3e] duration-300 hover:cursor-pointer rounded flex main">
            <div class="min-h-16 max-h-16 min-w-16 max-w-16 cover cover-div">
                <img :src="el.coverpath" class="rounded-tl rounded-bl " alt="" width="100%">
            </div>
            <div class="flex items-center">
                <div class="mx-4 w-auto album-name" style="font-family: SpotifyMixBold;">
                    {{ el.albumorplaylistname }}
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
import homeNavBottom from "../data/homeNavBottom.json"
</script>

<style scoped>
@font-face {
    font-family: SpotifyMixBold;
    src: url(../../public/SpotifyMix-Bold.ttf);
}

.cover {
    box-shadow: 4px 0px 8px rgba(0, 0, 0, 0.3);
}

.album-name {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
}

@media only screen and (max-width: 1315px) {
    .cover {
        max-width: 48px;
        min-width: 48px;
        aspect-ratio: 1/1;
    }

    .main {
        height: 48px;
    }

    .album-name {
        font-size: 13px;
    }
}

@media only screen and (max-width: 990px) {
    .head {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>