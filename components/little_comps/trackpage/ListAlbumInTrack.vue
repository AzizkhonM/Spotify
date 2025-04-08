<template>
    <NuxtLink :to="`/album/${mainalbum.path}`" style="display: grid; grid-template-columns: 80px auto;"
        class="bg-[#2a2a2a] rounded-t hover:bg-[#595959] hover:cursor-pointer">
        <img :src="mainalbum.coverpath" width="80px" alt="" class="rounded-tl">
        <div class="px-4 grid grid-cols-1 self-center items-center">
            <span class="text-[11px] w-max" v-if="mainalbum.isSingle">From the single</span>
            <span class="text-[11px] w-max" v-else-if="mainalbum.isCompilation">From the
                compilation</span>
            <span class="text-[11px] w-max" v-else>From the album</span>
            <span class="hover:underline hover:cursor-pointer w-max" style="font-family: SpotifyMixBold;">{{
                mainalbum.albumname }}</span>
        </div>
    </NuxtLink>
    <div v-if="mainalbum.tracks[0] && typeof mainalbum.tracks[0] === 'object' && !Array.isArray(mainalbum.tracks[0])">
        <div v-for="(el, ind) in mainalbum.tracks"
            class="px-4 flex items-center h-14 gap-4 data text-[#9f9f9f] hover:bg-[#2a2a2a]" tabindex="0"
            style="border-bottom: 0;">
            <div class="flex justify-center items-center">
                <h1 class="numinid">{{ ind + 1 }}</h1>
                <svg data-encore-id="icon" role="img" aria-hidden="true"
                    class="Svg-sc-ytk21e-0 bneLcE e-9541-icon w-4 h-4 playinid" viewBox="0 0 24 24">
                    <path
                        d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"
                        fill="white"></path>
                </svg>
            </div>
            <div class="pl-2 grid grid-cols-1">
                <div class="text-white">
                    <NuxtLink :to="`/track/${el.path}`"><span class="hover:cursor-pointer hover:underline">{{
                        el.trackname
                    }}</span></NuxtLink>
                </div>
                <div class="flex items-center gap-1 text-[14px]"><abbr v-if="el.explicit == true" title="Explicit"
                        class="hover:cursor-pointer">
                        <span
                            class="text-black text-[10.5px] bg-[#9f9f9f] font-bold h-4 w-4 flex justify-center items-center"
                            style="font-family: SpotifyMixBold">
                            E
                        </span>
                    </abbr>

                    <span v-for="(item, index) in el.singers" :key="index">
                        <NuxtLink v-if="getArtist(item)?.path" :to="`/artist/${getArtist(item)?.path}`"
                            class="p-singer hover:underline hover:cursor-pointer">
                            {{ item }}
                        </NuxtLink>
                        <span v-else class="p-singer">{{ item }}</span>

                        <span v-if="index < el.singers.length - 1">, </span>
                    </span>
                </div>
            </div>
            <div class="flex justify-center text-[14px]">
                {{ el.duration }}
            </div>
            <div>
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
    <div v-else>
        <div v-for="(el1, ind1) in mainalbum.tracks">
            <div class="px-4 flex items-center h-14 gap-4 data text-[#9f9f9f]" style="border-bottom: 0;">
                <svg data-encore-id="icon" role="img" aria-hidden="true" class="Svg-sc-ytk21e-0 dYnaPI e-9541-icon"
                    viewBox="0 0 16 16">
                    <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                        fill="#9f9f9f"></path>
                    <path d="M8 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"
                        fill="#9f9f9f">
                    </path>
                </svg>
                <div>
                    <h1 class="pl-2" style="font-family: SpotifyMixBold;">Disc {{ ind1 + 1 }}</h1>
                </div>
            </div>
            <div v-for="(el, ind) in el1"
                class="px-4 flex items-center h-14 gap-4 data text-[#9f9f9f] hover:bg-[#2a2a2a]" tabindex="0"
                style="border-bottom: 0;">
                <div class="flex justify-center items-center">
                    <h1 class="numinid">{{ ind + 1 }}</h1>
                    <svg data-encore-id="icon" role="img" aria-hidden="true"
                        class="Svg-sc-ytk21e-0 bneLcE e-9541-icon w-4 h-4 playinid" viewBox="0 0 24 24">
                        <path
                            d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"
                            fill="white"></path>
                    </svg>
                </div>
                <div class="pl-2 grid grid-cols-1">
                    <div class="text-white">
                        <NuxtLink :to="`/track/${el?.path}`"><span class="hover:cursor-pointer hover:underline">{{
                            el.trackname
                        }}</span></NuxtLink>
                    </div>
                    <div class="flex items-center gap-1 text-[14px]"><abbr v-if="el.explicit == true" title="Explicit"
                            class="hover:cursor-pointer">
                            <span
                                class="text-black text-[10.5px] bg-[#9f9f9f] font-bold h-4 w-4 flex justify-center items-center"
                                style="font-family: SpotifyMixBold">
                                E
                            </span>
                        </abbr>

                        <span v-for="(item, index) in el.singers" :key="index">
                            <NuxtLink v-if="getArtist(item)?.path" :to="`/artist/${getArtist(item)?.path}`"
                                class="p-singer hover:underline hover:cursor-pointer">
                                {{ item }}
                            </NuxtLink>
                            <span v-else class="p-singer">{{ item }}</span>

                            <span v-if="index < el.singers.length - 1">, </span>
                        </span>
                    </div>
                </div>
                <div class="flex justify-center text-[14px]">
                    {{ el.duration }}
                </div>
                <div>
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
import { useRoute } from 'vue-router';
import artists from "~/static/artists.json"
import albums from "~/static/albums.json"

const getArtist = (name) => {
    const artist = artists.find((a) => a.name === name);
    return artist ? artist : null;
};

defineProps({
    mainalbum: Object
})
const route = useRoute()
</script>

<style scoped>
@import url("@/assets/css/trackpage.css");
</style>