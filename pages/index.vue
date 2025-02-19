<template>
    <div class="wrapped">
        <!-- <div class="relative group">
            <div class="w-auto bg-blue-500 rounded-full flex items-center justify-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                    class="w-6 h-6 text-white">
                    <path
                        d="M12.1 8.64l.91 1.9 2.1.32-1.52 1.48.36 2.09-1.85-.97-1.85.97.36-2.09-1.52-1.48 2.1-.32.91-1.9M12 4c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
            </div>

            <div
                class="absolute top-1/2 left-full -translate-y-1/2 ml-2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                Liked Songs
            </div>
        </div> -->
        <div class="container h-[64px] gap-2 flex justify-start items-center text-[14px]">
            <SlotNavbar />
        </div>
        <HomeNavBottom />
        <h1 class="text-[24px] mb-4 mt-6" style="font-family: SpotifyMixBold;">Made for JDU</h1>

        <UCarousel v-slot="{ item }" loop arrows dots :items="madeforjdu">
            <NuxtLink :to="`playlist/${item.path}`"
                class="p-3 w-[200px] h-[250px] grid grid-cols-1 content-start rounded-[6px] hover:bg-[#1f1f1f] hover:cursor-pointer duration-200 gap-2">
                <div style="width: 100%; height: 100%;"><img style=" border-radius: 6px;" :src="item.coverpath"
                        width="100%" alt=""></div>
                <div>
                    <h1 class="line-clamp-2 text-[14px] text-[#B3B3B3]">{{ item.description }}</h1>
                </div>
            </NuxtLink>
        </UCarousel>

        <h1 class="text-[24px] mb-4 mt-6" style="font-family: SpotifyMixBold;">More Albums</h1>

        <div class="morealbums">
            <NuxtLink :to="`album/${el.path}`" :key="el.id" v-for="el in album"
                class="w-full aspect-[10/13] rounded-lg">
                <div :style="{
                    backgroundImage: `url(${el.coverpath}), linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5))`,
                }" class="w-full h-full img-divs rounded-lg">
                    <div class="albumdata">
                        <img :src="el.albumsingerimagepath" alt="">
                        <div class="">
                            <h1 class="line-clamp-2 albumname" style="font-family: SpotifyMixBold;">{{
                                el.albumname }}</h1>
                            <h1 class="text-[14px] line-clamp-1 text-[#b3b3b3] data">{{ el.isSingle ? "Single" : "Album" }} • {{
                                Array.isArray(el.albumsinger) ? el.albumsinger.join(', ') : el.albumsinger }}</h1>
                        </div>
                    </div>
                    <div class="emptydiv"></div>
                </div>
            </NuxtLink>
        </div>

        <FooterAbout />
    </div>
</template>

<script setup>
import SlotNavbar from '~/components/little_comps/SlotNavbar.vue';
import HomeNavBottom from '~/components/little_comps/HomeNavBottom.vue';
import FooterAbout from '~/components/little_comps/FooterAbout.vue';
import madeforjdu from "~/static/madeforjdu.json"
import { ref, onBeforeMount, onMounted, onBeforeUnmount, nextTick } from 'vue';
import albums from '~/static/albums.json';

let album = ref([]);

onBeforeMount(() => {
    let numbers = [];
    while (numbers.length < 12) {
        let randomNum = Math.floor(Math.random() * 75);
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
    album.value = numbers.map(num => albums[num]);
});

const setDivHeight = () => {
    const albumData = document.querySelectorAll('.albumdata');
    const emptyDivs = document.querySelectorAll('.empty-div');
    albumData.forEach((el, index) => {
        if (emptyDivs[index]) {
            emptyDivs[index].style.height = `${el.offsetHeight}px`;
        }
    });
};

onMounted(() => {
    nextTick(() => {
        setDivHeight();
        window.addEventListener('resize', setDivHeight);
    });
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', setDivHeight);
});

console.log(album);

</script>


<style scoped lang="css">
.wrapped {
    background-color: #121212;
    color: white;
    padding: 0 40px;
    border-radius: 10px;
    overflow-y: scroll;
    height: calc(100vh - 180px);
}

::selection {
    background-color: #1ED760;
    color: white;
}

.morealbums {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
}

.morealbums a {
    padding: 12px
}

.img-divs {
    background-position: 0px 0px;
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 0.5s ease;
}

.img-divs:hover {
    background-position: center;
}

.albumdata {
    display: flex;
    padding: 20px;
    gap: 16px;
    align-items: center;
    /* height: 133px; */
}

.albumdata img {
    width: 72px;
    height: 72px;
    border-radius: 4px;
}

.emptydiv {
    margin-top: -133px;
    background: linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0));
    /* height: 163px; */
}

@media only screen and (max-width: 1670px) {
    .morealbums {
        grid-template-columns: repeat(3, 1fr);
    }

    .albumdata img {
        width: 96px;
        height: 96px;
        border-radius: 4px;
    }

    .emptydiv{
        margin-top: -136px;
        height: 166px;
    }

    .albumname{
        font-size: 24px;
    }
}

@media only screen and (max-width: 1510px) {
    .albumdata img {
        width: 72px;
        height: 72px;
        border-radius: 4px;
    }

    .albumdata{
        height: 121px;
    }

    .emptydiv{
        margin-top: -121px;
        height: 151px;
    }

    .albumname{
        font-size: 20px;
    }
}

@media only screen and (max-width: 1290px) {
    .morealbums {
        grid-template-columns: repeat(2, 1fr);
    }

    .morealbums a {
        max-width: 456px;
    }

    .albumdata img {
        width: 96px;
        height: 96px;
        border-radius: 4px;
    }

    .emptydiv{
        margin-top: -136px;
        height: 166px;
    }

    .albumdata{
        height: 136px;
    }

    .albumname{
        font-size: 24px;
    }
}

@media only screen and (max-width: 1060px) {
    .albumdata img {
        width: 72px;
        height: 72px;
        border-radius: 4px;
    }

    .albumdata{
        height: 121px;
    }

    .emptydiv{
        margin-top: -121px;
        height: 151px;
    }

    .albumname{
        font-size: 20px;
    }
}

@media only screen and (max-width: 910px) {
    .morealbums {
        grid-template-columns: repeat(1, 1fr);
    }

    .morealbums a {
        max-width: 456px;
    }

    .albumdata img {
        width: 96px;
        height: 96px;
        border-radius: 4px;
    }

    .emptydiv{
        margin-top: -136px;
        height: 166px;
    }

    .albumdata{
        height: 136px;
    }

    .albumname{
        font-size: 24px;
    }
}
</style>