<template>
  <div class="wrapped">
    <div class="albumheader" :style="{
      backgroundImage: `linear-gradient(${main.upcolorcode}, ${main.downcolorcode})`,
    }">
      <div>
        <img id="maincover" :src="main.coverpath" width="232px"
          class="hover:scale-[1.02] duration-200 hover:cursor-pointer rounded" :alt="main.albumname" />
      </div>
      <div class="grid grid-cols-1 justify-items-start items-end px-6">
        <p class="text-[0.875rem] mb-[-40px]">Album</p>
        <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis">
          <p class="font-bold mb-[-18px] mainalbumname" style="font-family: SpotifyMixExtrabold; letter-spacing: -4px; font-size: clamp(48px, 6vw, 96px);">
            {{ main.albumname }}
          </p>
        </div>
        <div class="flex gap-1 mt-[-20px] items-end">
          <img :src="main.albumsingerimagepath" class="rounded-full" width="24px" />
          <p style="font-family: SpotifyMixBold; font-size: 0.875rem; user-select: none;">
            {{ main.albumsinger }}
          </p>
          <p class="color-texts">•</p>
          <p class="color-texts">{{ main.albumreleaseyear }}</p>
          <p class="color-texts">•</p>
          <p class="color-texts">{{ main.tracksnumber }} songs</p>
          <p class="color-texts">•</p>
          <p v-if="main.timehour !== 0" class="color-texts">
            about {{ main.timehour }} hour
          </p>
          <p class="color-texts">{{ main.timeminute }} min</p>
          <p v-if="main.timehour === 0" class="color-texts">
            {{ main.timesecond }} sec
          </p>
        </div>
      </div>
    </div>
    <div class="h-36" :style="{ backgroundColor: `${main.downcolorcode}` }"></div>
    <div class="h-36 mt-[-144px] uptolist"
      style="background: linear-gradient(rgba(18, 18, 18, 0.3), rgba(18, 18, 18, 1))">
      <div class="flex justify-start items-center gap-8">
        <div
          class="h-14 w-14 rounded-full bg-[#1ED760] hover:bg-[#2aff75] hover:scale-[1.01] duration-75 flex justify-center items-center hover:cursor-pointer">
          <svg data-encore-id="icon" role="img" aria-hidden="true" class="Svg-sc-ytk21e-0 bneLcE e-9541-icon w-6 h-6"
            viewBox="0 0 24 24">
            <path
              d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z">
            </path>
          </svg>
        </div>
        <svg data-encore-id="icon" role="img" aria-hidden="true"
          class="Svg-sc-ytk21e-0 cqasRA e-9541-icon w-8 h-8 savetolibrary hover:cursor-pointer" viewBox="0 0 24 24">
          <path
            d="M11.999 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-11 9c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11z"
            fill="#9f9f9f">
          </path>
          <path d="M17.999 12a1 1 0 0 1-1 1h-4v4a1 1 0 1 1-2 0v-4h-4a1 1 0 1 1 0-2h4V7a1 1 0 1 1 2 0v4h4a1 1 0 0 1 1 1z"
            fill="#9f9f9f">
          </path>
        </svg>
        <svg data-encore-id="icon" role="img" aria-hidden="true"
          class="Svg-sc-ytk21e-0 cqasRA e-9541-icon w-8 h-8 savetolibrary hover:cursor-pointer" viewBox="0 0 24 24">
          <path
            d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
            fill="#9f9f9f">
          </path>
        </svg>
      </div>
      <div class="flex items-end h-16 px-4 pb-2 gap-4 updata text-[#9f9f9f]">
        <div class="flex justify-center">#</div>
        <div class="pl-2">Title</div>
        <div class="flex justify-center">
          <svg data-encore-id="icon" role="img" aria-hidden="true" class="Svg-sc-ytk21e-0 dYnaPI e-9541-icon w-4 h-4"
            viewBox="0 0 16 16">
            <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" fill="#9f9f9f">
            </path>
            <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z" fill="#9f9f9f">
            </path>
          </svg>
        </div>
      </div>
    </div>
    <div class="px-6 bg-[#121212] pt-4" style="user-select: none;">
      <div class="pb-8">
        <div v-for="el in main.tracks" class="px-4 flex items-center h-14 gap-4 data text-[#9f9f9f] hover:bg-[#2a2a2a]"
          tabindex="0" style="border-bottom: 0;">
          <div class="flex justify-center items-center">
            <h1 class="numinid">{{ el.id }}</h1>
            <svg data-encore-id="icon" role="img" aria-hidden="true"
              class="Svg-sc-ytk21e-0 bneLcE e-9541-icon w-4 h-4 playinid" viewBox="0 0 24 24">
              <path
                d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"
                fill="white"></path>
            </svg>
          </div>
          <div class="pl-2 grid grid-cols-1">
            <div class="text-white"><span class="hover:cursor-pointer hover:underline">{{ el.trackname }}</span></div>
            <div class="flex items-center gap-1 text-[14px]"><abbr v-if="el.explicit == true" title="Explicit"
                class="hover:cursor-pointer">
                <span class="text-black text-[10.5px] bg-[#9f9f9f] font-bold h-4 w-4 flex justify-center items-center"
                  style="font-family: SpotifyMixBold">
                  E
                </span>
              </abbr>

              <span class="p-singer hover:underline hover:cursor-pointer" v-for="(item, index) in el.singers"
                :key="index">
                {{ item }}<span v-if="index < el.singers.length - 1">, </span>
              </span>
            </div>
          </div>
          <div class="flex justify-center text-[14px]">
            {{ el.duration }}
          </div>
          <div>
            <svg data-encore-id="icon" role="img" aria-hidden="true"
              class="Svg-sc-ytk21e-0 cqasRA e-9541-icon dataoftrack hover:cursor-pointer h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                fill="#fff">
              </path>
            </svg>
          </div>
        </div>
        <div class="mt-8 px-4">
          <div class="grid grid-cols-1 text-[#b3b3b3]">
            <div class="text-[14px]">
              <span>
                <h1>{{ main.albumreleasedate }} {{ months[main.albumreleasemonth - 1] }} {{ main.albumreleaseyear }}
                </h1>
              </span>
            </div>
            <div class="grid grid-cols-1 text-[11px]">
              <h1 v-for="el in main.credits">{{ el }}</h1>
            </div>
          </div>
        </div>
      </div>

      <div v-if="arrfordiscog.length > 0" class="grid grid-cols-1 gap-4 px-4 pb-8">
        <div class="grid grid-cols-2 items-end">
          <div><span class="text-[24px]" style="font-family: SpotifyMixBold;">More by {{ main.albumsinger }}</span>
          </div>
          <div style="text-align: end;"><span
              class="text-[#b3b3b3] text-[14px] hover:underline hover:cursor-pointer">See discography</span></div>
        </div>
        <div class="morediscography">
          <NuxtLink
            class="p-3 grid grid-cols-1 content-start h-full rounded-[6px] hover:bg-[#1f1f1f] hover:cursor-pointer duration-200 gap-2"
            v-for="el in arrfordiscog" :key="el.id" :to="{ name: 'album-id', params: { id: el.path } }">
            <div style="width: 100%; height: 100%;"><img style=" border-radius: 6px;" :src="el.coverpath" width="100%"
                alt=""></div>
            <div class="grid grid-cols-1 gap-1">
              <div class="text-ellipsis overflow-hidden line-clamp-2"><span class="hover:underline">{{ el.albumname
                  }}</span></div>
              <div class="text-[#b3b3b3] text-[13px]">{{ el.albumreleaseyear }}</div>
            </div>
          </NuxtLink>
        </div>
        <FooterAbout/>
      </div>
    </div>

    <div class="modal" id="imageModal">
      <div class="modal-wrapper">
        <div class="modal-content" id="modalContent"></div>
        <h1 id="closeButton">Close</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import albums from "../../data/albums.json";
import FooterAbout from "~/components/little_comps/FooterAbout.vue";

const { $fitty } = useNuxtApp()

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let arrfordiscog = []
const route = useRoute();
let main = {};
for (let i of albums) {
  if ((i.path == route.params.id)) {
    main = i;
  }
  console.log(main);
}

for (let i of albums) {
  if (i.albumsinger == main.albumsinger) {
    if (i.path != route.params.id) {
      arrfordiscog.push(i)
    }
  }
}


const isOpen = ref(false);

onMounted(() => {
  $fitty('.mainalbumname', {
    minSize: 48,
    maxSize: 96
  })
  const colorchanging = document.querySelectorAll(".color-texts");

  colorchanging.forEach((element) => {
    element.style.color = main.textcolorcode;
    console.log(main.textcolorcode);
  });
});

console.log(main.coverpath);

setTimeout(() => {
  const cover = document.querySelector("#maincover");
  const modal = document.getElementById("imageModal");
  const modalContent = document.getElementById("modalContent");
  const closeButton = document.getElementById("closeButton");

  console.log(cover);

  cover.addEventListener("click", () => {
    const imageSrc = cover.src;
    modalContent.style.backgroundImage = `url(${imageSrc})`;
    modal.classList.add("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  closeButton.addEventListener("click", () => {
    modal.classList.remove("active");
  });
}, 100);
</script>

<style scoped>
@font-face {
  font-family: SpotifyMixBold;
  src: url(../../public/SpotifyMix-Bold.ttf);
}

@font-face {
  font-family: SpotifyMixExtrabold;
  src: url(../../public/SpotifyMix-Extrabold.ttf);
}

.color-texts {
  font-size: 0.875rem;
}

.wrapped {
  color: white;
  border-radius: 10px;
  overflow-y: scroll;
  height: calc(100vh - 180px);
}

.albumheader {
  padding: 24px;
  display: grid;
  grid-template-columns: 232px auto;
}

.albumheader img {
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
}

.nuxt-ui-modal-overlay {
  background-color: #050505;
}

.modal {
  display: flex;
  /* Use flexbox for centering */
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.modal.active {
  opacity: 1;
  visibility: visible;
}

.modal-wrapper {
  display: grid;
  grid-template-rows: auto;
  /* Two rows: one for content, one for <h1> */
  justify-items: center;
  /* Center align horizontally */
  text-align: center;
  gap: 24px;
}

.modal-content {
  width: 75vh;
  aspect-ratio: 1 / 1;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
}

#closeButton {
  color: white;
  margin-top: 20px;
  font-size: 1rem;
  margin: 8px 32px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: SpotifyMixBold;
}

#closeButton:hover {
  transform: scale(1.1);
}

.uptolist {
  padding: 24px;
  padding-bottom: 0px;
}

.savetolibrary:hover path {
  fill: white;
}

.updata,
.data {
  display: grid;
  grid-template-columns: 20px auto 40px 20px;
  border-bottom: 0.1em solid #2d2d2d;
}

.dataoftrack {
  display: none;
}

.playinid {
  display: none;
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

.morediscography {
  display: grid;
}

@media only screen and (min-width: 1560px) {
  .morediscography {
    grid-template-columns: repeat(8, 1fr);
  }

  .morediscography>div:nth-child(n+9) {
    display: none;
  }
}

@media only screen and (min-width: 1380px) and (max-width: 1560px) {
  .morediscography {
    grid-template-columns: repeat(7, 1fr);
  }

  .morediscography>div:nth-child(n+8) {
    display: none;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1380px) {
  .morediscography {
    grid-template-columns: repeat(6, 1fr);
  }

  .morediscography>div:nth-child(n+7) {
    display: none;
  }
}

@media only screen and (min-width: 1016px) and (max-width: 1200px) {
  .morediscography {
    grid-template-columns: repeat(5, 1fr);
  }

  .morediscography>div:nth-child(n+6) {
    display: none;
  }
}

@media only screen and (min-width: 830px) and (max-width: 1016px) {
  .morediscography {
    grid-template-columns: repeat(4, 1fr);
  }

  .morediscography>div:nth-child(n+5) {
    display: none;
  }
}

@media only screen and (max-width: 830px) {
  .morediscography {
    grid-template-columns: repeat(3, 1fr);
  }

  .morediscography>div:nth-child(n+4) {
    display: none;
  }
}
</style>
