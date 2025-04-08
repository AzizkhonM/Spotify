<template>
    <h1 class="text-[24px] mb-5 text-start" style="font-family: SpotifyMixBold;">Popular Albums by
        {{ mainartist.name
        }}</h1>
    <div class="albumssingles mb-10">
        <div class="p-3 grid grid-cols-1 content-start h-full rounded-[6px] hover:bg-[#1f1f1f] hover:cursor-pointer duration-200 gap-2"
            v-for="el in allalbums" :key="el.id" @click="$router.push({ name: 'album-id', params: { id: el.path } })">
            <div style="width: 100%; height: 100%;">
                <img style="border-radius: 6px;" :src="el.coverpath" width="100%" alt="" />
            </div>
            <div class="grid grid-cols-1 gap-1">
                <div class="text-ellipsis overflow-hidden line-clamp-2">
                    <span class="hover:underline">{{ el.albumname }}</span>
                </div>
                <div class="text-[#b3b3b3] text-[13px]">
                    {{ el.albumreleaseyear }} •
                    <span v-if="el.isSingle">Single</span>
                    <span v-else>Album</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

defineProps({
    mainartist: Object,
    allalbums: Object
})
const route = useRoute()
</script>

<style>
@import "@/assets/css/trackpage.css";
</style>