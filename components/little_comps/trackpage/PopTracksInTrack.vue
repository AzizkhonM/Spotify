<template>
    <div class="mb-10">
        <h1 class="text-[14px] text-[#b3b3b3]">Popular tracks by</h1>
        <h1 class="text-[24px] mb-5" style="font-family: SpotifyMixBold;">{{ mainartist.name }}</h1>
        <div v-for="(el, ind) in popularsongs">
            <div v-if="el.path != route.params.id" class="populartracks hover:bg-[#2a2a2a] rounded" tabindex="0">
                <div class="flex justify-center items-center">
                    <h1 class="numinid text-[#9f9f9f]">{{ ind + 1 }}</h1>
                    <svg data-encore-id="icon" role="img" aria-hidden="true"
                        class="Svg-sc-ytk21e-0 bneLcE e-9541-icon w-4 h-4 playinid" viewBox="0 0 24 24">
                        <path
                            d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"
                            fill="white"></path>
                    </svg>
                </div>
                <div class="py-2 flex">
                    <img :src="el.coverpath" width="40" alt="" class="rounded mr-3">
                    <div class="grid grid-cols-1 content-center">
                        <NuxtLink :to="`/track/${el.path}`">
                            <h1 class="hover:underline hover:cursor-pointer">{{ el.trackname }}</h1>
                        </NuxtLink>

                        <span v-if="el.explicit"
                            class="text-black text-[10.5px] bg-[#9f9f9f] font-bold h-4 w-4 flex justify-center items-center"
                            style="font-family: SpotifyMixBold">
                            E
                        </span>
                    </div>
                </div>
                <div class="flex justify-center items-center text-[14px] text-[#9f9f9f]">
                    {{ el.duration }}
                </div>
                <div class="flex items-center">
                    <svg data-encore-id="icon" role="img" aria-hidden="true"
                        class="Svg-sc-ytk21e-0 cqasRA e-9541-icon dataoftrack hover:cursor-pointer h-5 w-5"
                        viewBox="0 0 24 24">
                        <path
                            d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                            fill="#fff">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";

defineProps({
    mainartist: Object,
    popularsongs: Object
})
const route = useRoute()
</script>

<style scoped>
@import "@/assets/css/trackpage.css";
</style>