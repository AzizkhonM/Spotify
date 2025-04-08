<template>
    <div v-for="(el, index) in maintrack.singers.slice(1)" :key="index">
        <div v-if="getArtist(el)" class="mb-10">
            <h1 class="text-[14px] text-[#b3b3b3]">Popular releases</h1>
            <NuxtLink :to="`/artist/${getArtist(el).path}/discography/all`" class="text-[24px] mb-5 hover:underline"
                style="font-family: SpotifyMixBold;">{{ el }}</NuxtLink>
            <div class="albumssingles">
                <div class="p-3 grid grid-cols-1 content-start h-full rounded-[6px] hover:bg-[#1f1f1f] hover:cursor-pointer duration-200 gap-2"
                    v-for="i in getArtist(el)?.discography?.popular || []" :key="i"
                    @click="$router.push({ name: 'album-id', params: { id: i } })">
                    <div style="width: 100%; height: 100%;">
                        <img style="border-radius: 6px;" :src="getAlbumByPath(i).coverpath" width="100%" alt="" />
                    </div>
                    <div class="grid grid-cols-1 gap-1">
                        <div class="text-ellipsis overflow-hidden line-clamp-2">
                            <span class="hover:underline">{{ getAlbumByPath(i).albumname }}</span>
                        </div>
                        <div class="text-[#b3b3b3] text-[13px]">
                            {{ getAlbumByPath(i).albumreleaseyear }} •
                            <span v-if="getAlbumByPath(i).isSingle">Single</span>
                            <span v-else>Album</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import artists from "~/static/artists.json"
import albums from "~/static/albums.json"

const getArtist = (name) => {
    const artist = artists.find((a) => a.name === name);
    return artist ? artist : null;
};

const getAlbumByPath = (path) => {
  return albums.find((a) => a.path === path);
};

defineProps({
    maintrack: Object
})
const route = useRoute()
</script>

<style scoped>
@import url("@/assets/css/trackpage.css");
</style>