<template>
    <div class="wrapped" ref="wrapped">

        <div ref="header" class="sticky-header" :style="{ opacity: opacitySticky }" style="background-color: #121212;">
            <h1 class="text-[24px] select-none" style="font-family: SpotifyMixBold;">{{ maintrack.trackname }}</h1>
        </div>

        <div class="trackheader mt-[-68px]" ref="header" :style="{
            backgroundImage: `linear-gradient(${mainalbum.upcolorcode}, ${mainalbum.downcolorcode})`,
        }">
            <div>
                <img id="maincover" :src="mainalbum.coverpath" width="232px" class="rounded"
                    style="width: clamp(155px, calc(155px + (77 * ((100vw - 800px) / 320))), 232px);"
                    :alt="mainalbum.albumname" />
            </div>
            <div class="grid grid-cols-1 justify-items-start items-end px-6">
                <p class="text-[0.875rem] mb-[-40px]" style="font-family: SpotifyMixBold;">Song</p>
                <div ref="container" class="track-container">
                    <p ref="text" class="trackname mt-5 lg:mt-0 w-full">
                        {{ maintrack.trackname }}
                    </p>
                </div>
                <div class="flex flex-wrap gap-1 mt-[-20px] items-center">
                    <img :src="mainalbum.albumsingerimagepath" class="rounded-full" width="24px" />
                    <NuxtLink v-if="!mainalbum.isSingle" :to="{ name: 'artist-id', params: { id: mainalbum.albumsingerpath } }"
                        class="hover:underline hover:cursor-pointer"
                        style="font-family: SpotifyMixBold; font-size: 0.875rem; user-select: none;">
                        {{ mainalbum.albumsinger }}
                    </NuxtLink>
                    <NuxtLink v-else :to="{ name: 'artist-id', params: { id: mainalbum.albumsingerpath } }"
                        class="hover:underline hover:cursor-pointer"
                        style="font-family: SpotifyMixBold; font-size: 0.875rem; user-select: none;">
                        {{ mainalbum.albumsinger[0] }}
                    </NuxtLink>
                    <p class="color-texts">•</p>
                    <NuxtLink :to="`/album/${mainalbum.path}`" class="hover:underline hover:cursor-pointer text-[14px]">
                        <p>{{ mainalbum.albumname }}</p>
                    </NuxtLink>
                    <p class="color-texts">•</p>
                    <p class="color-texts">{{ mainalbum.albumreleaseyear }}</p>
                    <p class="color-texts">•</p>
                    <p class="color-texts">{{ maintrack.duration }}</p>
                </div>
            </div>
        </div>
        <div class="h-auto">
            <div class="box2 h-[200px]" :style="{ backgroundColor: mainalbum.downcolorcode }"></div>
            <div class="p-6 box1 mt-[-200px]"
                style="background: linear-gradient(to bottom, rgba(18, 18, 18, 0.3) 0px, rgba(18, 18, 18, 1) 180px)">
                <div class="flex items-center justify-start gap-8 pb-6">
                    <div
                        class="h-14 w-14 rounded-full bg-[#1ED760] hover:bg-[#2aff75] hover:scale-[1.01] duration-75 flex justify-center items-center hover:cursor-pointer">
                        <svg data-encore-id="icon" role="img" aria-hidden="true"
                            class="Svg-sc-ytk21e-0 bneLcE e-9541-icon w-6 h-6" viewBox="0 0 24 24">
                            <path
                                d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z">
                            </path>
                        </svg>
                    </div>
                    <div class="hs-dropdown [--trigger:hover]">
                        <svg id="hs-dropdown-hover-event" aria-haspopup="menu" aria-expanded="false"
                            aria-label="Dropdown" data-encore-id="icon" role="img" aria-hidden="true"
                            class="Svg-sc-ytk21e-0 cqasRA e-9541-icon w-8 h-8 z-0 savetolibrary hover:cursor-pointer"
                            viewBox="0 0 24 24">
                            <path
                                d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                                fill="#9f9f9f">
                            </path>
                        </svg>
                        <div class="hs-dropdown-menu transition-[opacity,margin] delay-200 duration-100 hs-dropdown-open:opacity-100 opacity-0 hidden w-auto px-1 bg-[#1f1f1f] shadow-2xl rounded-md absolute bottom-full mb-2"
                            role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-hover-event">
                            <div class="p-1 space-y-0.5 text-white">
                                More options for {{ maintrack.trackname }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-10">
                    <div class="grid grid-cols-1 mb-10">
                        <template v-for="el in maintrack.singers" :key="el">
                            <NuxtLink v-if="getArtistPath(el)"
                                :to="{ name: 'artist-id', params: { id: getArtistPath(el) } }"
                                class="flex items-center w-full hover:cursor-pointer hover:bg-[#2a2a2a] p-2 rounded">
                                <div>
                                    <img v-if="getArtistCoverPath(el)" :src="getArtistCoverPath(el)" width="80"
                                        class="mr-4 rounded-full" alt="">
                                </div>
                                <div class="grid grid-cols-1">
                                    <h1 class="" style="font-family: SpotifyMixBold;">Artist</h1>
                                    <h1 class="p-singer hover:underline hover:cursor-pointer"
                                        style="font-family: SpotifyMixBold;">{{ el }}</h1>
                                </div>
                            </NuxtLink>

                            <div v-else
                                class="flex items-center w-full hover:cursor-pointer hover:bg-[#2a2a2a] p-2 rounded">
                                <div class="w-20 h-20 mr-4">

                                </div>
                                <div class="grid grid-cols-1">
                                    <h1 class="" style="font-family: SpotifyMixBold;">Artist</h1>
                                    <h1 class="p-singer" style="font-family: SpotifyMixBold;">{{ el }}</h1>
                                </div>
                            </div>
                        </template>
                    </div>
                    <div class="mb-10">
                        <h1 class="text-[14px] text-[#b3b3b3]">Popular tracks by</h1>
                        <h1 class="text-[24px] mb-5" style="font-family: SpotifyMixBold;">{{ mainartist.name }}</h1>
                        <div v-for="(el, ind) in popularsongs">
                            <div v-if="el.path != route.params.id" class="populartracks hover:bg-[#2a2a2a] rounded"
                                tabindex="0">
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
                    <!-- <div>
                                    <img :src="mainalbum.albumsingerimagepath" width="80" class="mr-4 rounded-xl"
                                        alt="">
                                </div> -->
                    <div>
                        <h1 class="text-[24px] mb-5 text-start" style="font-family: SpotifyMixBold;">Popular Releases by
                            {{ mainartist.name
                            }}</h1>
                        <div class="albumssingles mb-10">
                            <div class="p-3 grid grid-cols-1 content-start h-full rounded-[6px] hover:bg-[#1f1f1f] hover:cursor-pointer duration-200 gap-2"
                                v-for="el in popularalbums" :key="el.id"
                                @click="$router.push({ name: 'album-id', params: { id: el.path } })">
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
                    </div>
                    <div>
                        <h1 class="text-[24px] mb-5 text-start" style="font-family: SpotifyMixBold;">Popular Albums by
                            {{ mainartist.name
                            }}</h1>
                        <div class="albumssingles mb-10">
                            <div class="p-3 grid grid-cols-1 content-start h-full rounded-[6px] hover:bg-[#1f1f1f] hover:cursor-pointer duration-200 gap-2"
                                v-for="el in allalbums" :key="el.id"
                                @click="$router.push({ name: 'album-id', params: { id: el.path } })">
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
                    </div>
                    <div v-if="allsingles.length != 0">
                        <h1 class="text-[24px] mb-5 text-start" style="font-family: SpotifyMixBold;">Popular Singles and
                            EPs by
                            {{ mainartist.name
                            }}</h1>
                        <div class="albumssingles mb-10">
                            <div class="p-3 grid grid-cols-1 content-start h-full rounded-[6px] hover:bg-[#1f1f1f] hover:cursor-pointer duration-200 gap-2"
                                v-for="el in allsingles" :key="el.id"
                                @click="$router.push({ name: 'album-id', params: { id: el.path } })">
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
                    </div>
                    <div>
                        <NuxtLink :to="`/album/${mainalbum.path}`"
                            style="display: grid; grid-template-columns: 80px auto;"
                            class="bg-[#2a2a2a] rounded-t hover:bg-[#595959] hover:cursor-pointer">
                            <img :src="mainalbum.coverpath" width="80px" alt="" class="rounded-tl">
                            <div class="px-4 grid grid-cols-1 self-center items-center">
                                <span class="text-[11px] w-max" v-if="mainalbum.isSingle">From the single</span>
                                <span class="text-[11px] w-max" v-else-if="mainalbum.isCompilation">From the
                                    compilation</span>
                                <span class="text-[11px] w-max" v-else>From the album</span>
                                <span class="hover:underline hover:cursor-pointer w-max"
                                    style="font-family: SpotifyMixBold;">{{
                                        mainalbum.albumname }}</span>
                            </div>
                        </NuxtLink>
                        <div
                            v-if="mainalbum.tracks[0] && typeof mainalbum.tracks[0] === 'object' && !Array.isArray(mainalbum.tracks[0])">
                            <div v-for="(el, ind) in mainalbum.tracks"
                                class="px-4 flex items-center h-14 gap-4 data text-[#9f9f9f] hover:bg-[#2a2a2a]"
                                tabindex="0" style="border-bottom: 0;">
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
                                        <NuxtLink :to="`/track/${el.path}`"><span
                                                class="hover:cursor-pointer hover:underline">{{
                                                el.trackname
                                                }}</span></NuxtLink>
                                    </div>
                                    <div class="flex items-center gap-1 text-[14px]"><abbr v-if="el.explicit == true"
                                            title="Explicit" class="hover:cursor-pointer">
                                            <span
                                                class="text-black text-[10.5px] bg-[#9f9f9f] font-bold h-4 w-4 flex justify-center items-center"
                                                style="font-family: SpotifyMixBold">
                                                E
                                            </span>
                                        </abbr>

                                        <span v-for="(item, index) in el.singers" :key="index">
                                            <NuxtLink v-if="getArtistPath(item)" :to="`/artist/${getArtistPath(item)}`"
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
                                <div class="px-4 flex items-center h-14 gap-4 data text-[#9f9f9f]"
                                    style="border-bottom: 0;">
                                    <svg data-encore-id="icon" role="img" aria-hidden="true"
                                        class="Svg-sc-ytk21e-0 dYnaPI e-9541-icon" viewBox="0 0 16 16">
                                        <path
                                            d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                                            fill="#9f9f9f"></path>
                                        <path
                                            d="M8 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"
                                            fill="#9f9f9f">
                                        </path>
                                    </svg>
                                    <div>
                                        <h1 class="pl-2" style="font-family: SpotifyMixBold;">Disc {{ ind1 + 1 }}</h1>
                                    </div>
                                </div>
                                <div v-for="(el, ind) in el1"
                                    class="px-4 flex items-center h-14 gap-4 data text-[#9f9f9f] hover:bg-[#2a2a2a]"
                                    tabindex="0" style="border-bottom: 0;">
                                    <div class="flex justify-center items-center">
                                        <h1 class="numinid">{{ ind + 1 }}</h1>
                                        <svg data-encore-id="icon" role="img" aria-hidden="true"
                                            class="Svg-sc-ytk21e-0 bneLcE e-9541-icon w-4 h-4 playinid"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"
                                                fill="white"></path>
                                        </svg>
                                    </div>
                                    <div class="pl-2 grid grid-cols-1">
                                        <div class="text-white">
                                            <NuxtLink :to="`/track/${el.path}`"><span
                                                    class="hover:cursor-pointer hover:underline">{{
                                                    el.trackname
                                                    }}</span></NuxtLink>
                                        </div>
                                        <div class="flex items-center gap-1 text-[14px]"><abbr
                                                v-if="el.explicit == true" title="Explicit"
                                                class="hover:cursor-pointer">
                                                <span
                                                    class="text-black text-[10.5px] bg-[#9f9f9f] font-bold h-4 w-4 flex justify-center items-center"
                                                    style="font-family: SpotifyMixBold">
                                                    E
                                                </span>
                                            </abbr>

                                            <span v-for="(item, index) in el.singers" :key="index">
                                                <NuxtLink v-if="getArtistPath(item)"
                                                    :to="`/artist/${getArtistPath(item)}`"
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
                    </div>
                </div>
                <div class="mt-8 px-4">
                    <div class="grid grid-cols-1 text-[#b3b3b3]">
                        <div class="text-[14px]">
                            <span>
                                <h1>{{ mainalbum.albumreleasedate }} {{ months[mainalbum.albumreleasemonth - 1] }} {{
                                    mainalbum.albumreleaseyear }}
                                </h1>
                            </span>
                        </div>
                        <div class="grid grid-cols-1 text-[11px]">
                            <h1 v-for="el in mainalbum.credits">{{ el }}</h1>
                        </div>
                    </div>
                </div>
                <FooterAbout />
            </div>

        </div>
    </div>
</template>

<script setup>

import { ref, onMounted, watch, onUnmounted, nextTick } from "vue"
import { useRoute } from "vue-router";
import albums from "~/static/albums.json"
import artists from "~/static/artists.json"
import FooterAbout from "~/components/little_comps/FooterAbout.vue";

const container = ref(null);
const text = ref(null);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let arrfordiscog = []
const route = useRoute();
let mainalbum = {};
let maintrack = {};
let mainartist = {};
let popularsongs = [];
let popularalbums = [];
let allalbums = [];
let allsingles = [];

for (let i of albums) {
    for (let j of i['tracks']) {
        if (Array.isArray(j)) {
            for (let k of j) {
                if (k.path == route.params.id) {
                    mainalbum = i
                    maintrack = k
                }
            }
        } else {
            if (j.path == route.params.id) {
                mainalbum = i
                maintrack = j
            }
        }
    }
}

for (let i of artists) {
    if (!mainalbum.isSingle) {
        if (mainalbum.albumsinger == i.name) {
            mainartist = i
        }
    } else{
        if (mainalbum.albumsinger[0] == i.name) {
            mainartist = i
        }
    }
}
console.log(mainartist);
console.log(mainartist.populartracks);

let count = 1
for (let i of mainartist.populartracks) {
    for (let j of albums) {
        for (let k of j['tracks']) {
            if (Array.isArray(k)) {
                for (let l of k) {
                    if (i == l.path && i != route.params.id) {
                        l.coverpath = j.coverpath
                        l.id = count
                        popularsongs.push(l)
                        count++
                        console.log(l);
                    }
                }
            } else {
                if (i == k.path && i != route.params.id) {
                    k.coverpath = j.coverpath
                    k.id = count
                    popularsongs.push(k)
                    count++
                }
            }
        }
    }
}
popularsongs.splice(5, 1)

for (let i of mainartist.discography.popular) {
    for (let j of albums) {
        if (i == j.path) {
            popularalbums.push(j)
        }
    }
}

for (let i of mainartist.discography.all) {
    for (let j of albums) {
        if (i == j.path && !j.isSingle && !j.isCompilation) {
            allalbums.push(j)
        }
    }
}

for (let i of mainartist.discography.all) {
    for (let j of albums) {
        if (i == j.path && j.isSingle && !j.isCompilation) {
            allsingles.push(j)
        }
    }
}

onMounted(() => {
    const colorchanging = document.querySelectorAll(".color-texts");

    colorchanging.forEach((element) => {
        element.style.color = mainalbum.textcolorcode;
    });
});

const getArtistPath = (name) => {
    const artist = artists.find((a) => a.name === name);
    return artist ? artist.path : null;
};

const getArtistCoverPath = (name) => {
    const artist = artists.find((a) => a.name === name);
    return artist ? artist.artistimage : null;
};

const adjustFontSize = () => {
    if (!container.value || !text.value) return;

    let fontSize = 96; // Start with max size
    text.value.style.fontSize = fontSize + "px";
    text.value.style.whiteSpace = "nowrap"; // Prevent multiple lines initially

    while (text.value.scrollWidth > container.value.clientWidth && fontSize > 32) {
        if (fontSize > 72) {
            fontSize = 72;
        } else if (fontSize > 48) {
            fontSize = 48;
        } else {
            fontSize = 32; // Minimum size
        }

        text.value.style.fontSize = fontSize + "px";

        // Change letter-spacing when font size is 48px or lower
        text.value.style.letterSpacing = fontSize <= 48 ? "0px" : "-4px";
        text.value.style.marginTop = fontSize <= 48 ? "20px" : "0px";
        text.value.style.marginBottom = fontSize <= 48 ? "0px" : "-10px";
    }

    // If the text still doesn't fit at 32px, allow max 2 lines
    if (text.value.scrollWidth > container.value.clientWidth) {
        text.value.style.whiteSpace = "normal"; // Allow wrapping
        text.value.style.overflow = "hidden";
        text.value.style.display = "-webkit-box";
        text.value.style.webkitLineClamp = "2"; // Max 2 lines
        text.value.style.webkitBoxOrient = "vertical";
    }
};

onMounted(() => {
    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);
});


const wrapped = ref(null);
const divHeight = ref(0); // Threshold for full opacity
const opacitySticky = ref(0);
const header = ref(0)

// Handles scroll event and updates opacity
const handleScroll = () => {
    if (!wrapped.value) return;
    const scrollTop = wrapped.value.scrollTop;
    opacitySticky.value = Math.min(scrollTop / divHeight.value, 1); // Fade-in effect
};

const getDivHeight = () => {
    if (header.value) {
        divHeight.value = header.value.offsetHeight - 68; // Get height
        console.log("Div height:", divHeight.value);
    }
};

// Add event listener when mounted
onMounted(() => {
    nextTick(() => {
        getDivHeight(); // Ensure DOM is fully rendered before getting height
    });
    if (wrapped.value) {
        wrapped.value.addEventListener("scroll", handleScroll);
    }
});

// Remove event listener when unmounted
onUnmounted(() => {
    if (wrapped.value) {
        wrapped.value.removeEventListener("scroll", handleScroll);
    }
});

useHead({
    title: `${maintrack.trackname} - song by ${maintrack.singers.join(", ")} | Spotify`
})

</script>

<style scoped>
.wrapped {
    color: white;
    border-radius: 10px;
    overflow-y: scroll;
    height: calc(100vh - 180px);
}

@font-face {
    font-family: SpotifyMixBold;
    src: url(../../public/SpotifyMix-Bold.ttf);
}

@font-face {
    font-family: SpotifyMixExtrabold;
    src: url(../../public/SpotifyMix-Extrabold.ttf);
}

.savetolibrary:hover path {
    fill: white;
}

.populartracks {
    padding: 0px 16px;
    display: grid;
    grid-template-columns: 16px auto 40px 20px;
    gap: 16px;
}

.dataoftrack {
    display: none;
}

.populartracks:focus {
    background-color: #5a5a5a;
    outline: none;

    .dataoftrack {
        display: block;
    }

    .p-singer {
        color: white;
    }

    .playinid {
        display: block;
    }

    .numinid {
        display: none;
    }
}

.populartracks:hover {
    .dataoftrack {
        display: block;
    }

    .p-singer {
        color: white;
    }

    .playinid {
        display: block;
    }

    .numinid {
        display: none;
    }
}

.playinid {
    display: none;
}

.color-texts {
    font-size: 0.875rem;
}

.trackheader {
    padding: 24px;
    display: grid;
    grid-template-columns: clamp(155px, calc(155px + (77 * ((100vw - 800px) / 320))), 232px) auto;
}

.trackheader img {
    box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
}

.track-container {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    /* Ensure container width is defined */
}

.trackname {
    font-weight: bold;
    font-family: SpotifyMixExtrabold;
    letter-spacing: -4px;
    user-select: none;
    margin-bottom: -10px;
    overflow: hidden;
    display: inline-block;
}

.albumssingles {
    display: grid;
}

@media only screen and (min-width: 1560px) {
    .albumssingles {
        grid-template-columns: repeat(8, 1fr);
    }

    .albumssingles>div:nth-child(n+9) {
        display: none;
    }
}

@media only screen and (min-width: 1380px) and (max-width: 1560px) {
    .albumssingles {
        grid-template-columns: repeat(7, 1fr);
    }

    .albumssingles>div:nth-child(n+8) {
        display: none;
    }
}

@media only screen and (min-width: 1200px) and (max-width: 1380px) {
    .albumssingles {
        grid-template-columns: repeat(6, 1fr);
    }

    .albumssingles>div:nth-child(n+7) {
        display: none;
    }
}

@media only screen and (min-width: 1016px) and (max-width: 1200px) {
    .albumssingles {
        grid-template-columns: repeat(5, 1fr);
    }

    .albumssingles>div:nth-child(n+6) {
        display: none;
    }
}

@media only screen and (min-width: 830px) and (max-width: 1016px) {
    .albumssingles {
        grid-template-columns: repeat(4, 1fr);
    }

    .albumssingles>div:nth-child(n+5) {
        display: none;
    }
}

@media only screen and (max-width: 830px) and (min-width: 0px) {
    .albumssingles {
        grid-template-columns: repeat(3, 1fr);
    }

    .albumssingles>div:nth-child(n+4) {
        display: none;
    }
}

.data {
    display: grid;
    grid-template-columns: 20px auto 40px 20px;
    border-bottom: 0.1em solid #2d2d2d;
}

.data:focus {
    background-color: #5a5a5a;
    outline: none;

    .dataoftrack {
        display: block;
    }

    .p-singer {
        color: white;
    }

    .playinid {
        display: block;
    }

    .numinid {
        display: none;
    }
}

.data:hover {
    .dataoftrack {
        display: block;
    }

    .p-singer {
        color: white;
    }

    .playinid {
        display: block;
    }

    .numinid {
        display: none;
    }
}

.sticky-header {
    position: sticky;
    /* Instead of sticky */
    top: 0;
    left: 0;
    width: 100%;
    padding: 16px 24px;
    font-size: 20px;
    font-weight: bold;
    opacity: 0;
    /* Initially hidden */
}
</style>