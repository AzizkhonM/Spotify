<template>
    <div class="wrapped">
        <div class="artistdiscography">
            <div>
                <div class="sticky top-0 bg-[#121212]">
                    <div class="h-16"></div>
                    <div class="grid grid-cols-2">
                        <h1 class="text-[24px] sticky" style="font-family: SpotifyMixBold;">{{ main.name }}</h1>
                        <div class="flex justify-end">
                            <div class="hs-dropdown relative inline-flex text-end">
                                <button id="hs-dropdown-transform-style" type="button"
                                    class="hs-dropdown-toggle px-2 inline-flex items-center gap-x-2 text-[14px] font-medium rounded-lg bg-[#121212] text-[#b3b3b3] focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                                    aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                    Albums
                                    <svg class="hs-dropdown-open:rotate-180 size-4" xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>

                                <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10"
                                    role="menu" aria-orientation="vertical"
                                    aria-labelledby="hs-dropdown-transform-style">
                                    <div class="hs-dropdown-open:ease-in hs-dropdown-open:opacity-100 hs-dropdown-open:scale-100 transition ease-out opacity-0 scale-95 duration-200 mt-2 origin-top-left min-w-60 text-[14px] font-medium rounded bg-[#282828]"
                                        data-hs-transition>
                                        <div class="p-1 space-y-0.5">
                                            <NuxtLink :to="{path: `/artist/${$route.params.id}/discography/all`}" class="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-white hover:bg-[#3e3e3e] focus:outline-none">
                                                All
                                            </NuxtLink>
                                            <NuxtLink to="" class="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-[#1ed760] hover:bg-[#3e3e3e] focus:outline-none">
                                                Albums
                                            </NuxtLink>
                                            <NuxtLink :to="{path: `/artist/${$route.params.id}/discography/single`}" class="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-white hover:bg-[#3e3e3e] focus:outline-none">
                                                Singles and EPs
                                            </NuxtLink>
                                            <NuxtLink :to="{path: `/artist/${$route.params.id}/discography/compilation`}" class="flex items-center gap-x-3.5 py-2 px-3 rounded text-sm text-white hover:bg-[#3e3e3e] focus:outline-none">
                                                Compilations
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="albumcards">
                    <div class="p-3 grid grid-cols-1 content-start h-full rounded-[6px] hover:bg-[#1f1f1f] hover:cursor-pointer duration-200 gap-2"
                        v-for="el in allalbumsofartist" :key="el.id"
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
            <FooterAbout />
        </div>
    </div>
</template>

<script setup>
import artists from "~/static/artists.json"
import albums from "~/static/albums.json"
import FooterAbout from "~/components/little_comps/FooterAbout.vue";
import { useRoute } from 'vue-router';

const route = useRoute();

let main = []
let allalbumsofartist = []

for (let i of artists) {
    if (i["path"] == route.params.id) {
        main = i
    }
}

for (let i of main.discography.all) {
    for (let j of albums) {
        if (j.path == i && !j.isSingle && !j.isCompilation) {
            allalbumsofartist.push(j)
        }
    }
}

console.log(allalbumsofartist);


console.log(main);

definePageMeta({ layout: 'discography' });

useHead({
    title: `Spotify - ${main.name} - Discography`
})
</script>

<style scoped>
.wrapped {
    background-color: #121212;
    color: white;
    border-radius: 10px;
    overflow-y: scroll;
    height: calc(100vh - 180px);
    padding: 0px 24px 24px;
}

button:hover {
    color: white
}

.albumcards {
    display: grid;
}

@media only screen and (min-width: 1430px) {
    .albumcards {
        grid-template-columns: repeat(7, 1fr);
    }
}

@media only screen and (min-width: 1248px) and (max-width: 1430px) {
    .albumcards {
        grid-template-columns: repeat(6, 1fr);
    }
}

@media only screen and (min-width: 1066px) and (max-width: 1248px) {
    .albumcards {
        grid-template-columns: repeat(5, 1fr);
    }
}

@media only screen and (min-width: 880px) and (max-width: 1066px) {
    .albumcards {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media only screen and (max-width: 880px) {
    .albumcards {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>