<template>
    <div v-if="arrfordiscog.length > 0" class="grid grid-cols-1 gap-4 px-4 pb-8">
        <div class="grid grid-cols-2 items-end">
            <div><span v-if="!main.isSingle" class="text-[24px]" style="font-family: SpotifyMixBold;">More by {{
                main.albumsinger }}</span>
                <span v-else class="text-[24px]" style="font-family: SpotifyMixBold;">More by {{ main.albumsinger[0]
                    }}</span>
            </div>
            <div style="text-align: end;">
                <NuxtLink :to="{ path: `/artist/${main.albumsingerpath}/discography/all` }"
                    class="text-[#b3b3b3] text-[14px] hover:underline hover:cursor-pointer">See discography</NuxtLink>
            </div>
        </div>
        <div class="morediscography">
            <NuxtLink
                class="p-3 grid grid-cols-1 content-start h-full rounded-[6px] hover:bg-[#1f1f1f] hover:cursor-pointer duration-200 gap-2"
                v-for="el in arrfordiscog" :key="el.id" :to="{ name: 'album-id', params: { id: el.path } }">
                <div style="width: 100%; height: 100%;"><img style=" border-radius: 6px;" :src="el.coverpath"
                        width="100%" alt=""></div>
                <div class="grid grid-cols-1 gap-1">
                    <div class="text-ellipsis overflow-hidden line-clamp-2"><span class="hover:underline">{{
                        el.albumname
                            }}</span></div>
                    <div class="text-[#b3b3b3] text-[13px]">{{ el.albumreleaseyear }}</div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";

defineProps({
    main: Object, arrfordiscog: Array
})
const route = useRoute()
</script>

<style scoped>
@import "@/assets/css/albumpage.css";
</style>