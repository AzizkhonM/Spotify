<template>
  <div class="wrapped" ref="wrapped" @scroll="handleScroll">

    <div ref="header" class="sticky-header" :style="{ opacity: opacitySticky, backgroundColor: main.downcolorcode }">
      <h1 class="text-[24px] select-none" style="font-family: SpotifyMixBold;">{{ main.albumname }}</h1>
    </div>

    <div class="albumheader mt-[-68px]" ref="header" :style="{
      backgroundImage: `linear-gradient(${main.upcolorcode}, ${main.downcolorcode})`,
    }">
      <div>
        <img id="maincover" :src="main.coverpath" width="232px"
          class="hover:scale-[1.02] duration-200 hover:cursor-pointer rounded"
          style="width: clamp(155px, calc(155px + (77 * ((100vw - 800px) / 320))), 232px);" :alt="main.albumname" />
      </div>
      <div class="grid grid-cols-1 justify-items-start items-end px-6">
        <p class="text-[0.875rem] mb-[-40px]">
          <span v-if="main.isSingle">Single</span>
          <span v-else>Album</span>
        </p>
        <div ref="container" class="album-container">
          <p ref="text" class="albumname mt-5 lg:mt-0 w-full">
            {{ main.albumname }}
          </p>
        </div>
        <div class="flex gap-1 mt-[-20px] items-end">
          <img v-if="!main.isSingle" :src="main.albumsingerimagepath" class="rounded-full" width="24px" />
          <NuxtLink v-if="!main.isSingle" :to="{ name: 'artist-id', params: { id: main.albumsingerpath } }"
            class="hover:underline hover:cursor-pointer"
            style="font-family: SpotifyMixBold; font-size: 0.875rem; user-select: none;">
            {{ main.albumsinger }}
          </NuxtLink>
          <span v-else-if="main.isSingle" v-for="(item, index) in main.albumsinger" :key="index">
            <NuxtLink v-if="getArtistPath(item)" :to="`/artist/${getArtistPath(item)}`"
              class="hover:underline hover:cursor-pointer"
              style="font-family: SpotifyMixBold; font-size: 0.875rem; user-select: none;">
              {{ item }}
            </NuxtLink>
            <span v-else class="" style="font-family: SpotifyMixBold; font-size: 0.875rem; user-select: none;">{{ item }}</span>

            <span v-if="index < main.albumsinger.length - 1"> • </span>
          </span>
          <p class="color-texts">•</p>
          <p class="color-texts">{{ main.albumreleaseyear }}</p>
          <p class="color-texts">•</p>
          <p class="color-texts">{{ main.tracksnumber }} song<span v-if="main.tracksnumber > 1">s</span></p>
          <p class="color-texts">•</p>
          <p v-if="main.timehour !== 0" class="color-texts">
            about {{ main.timehour }} hour
          </p>
          <p v-if="main.timeminute !== 0" class="color-texts">{{ main.timeminute }} min</p>
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
        <div v-if="main.tracks[0] && typeof main.tracks[0] === 'object' && !Array.isArray(main.tracks[0])">
          <div v-for="(el, ind) in main.tracks"
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
                <NuxtLink :to="`/track/${el.path}`"><span class="hover:cursor-pointer hover:underline">{{ el.trackname
                    }}</span></NuxtLink>
              </div>
              <div class="flex items-center gap-1 text-[14px]"><abbr v-if="el.explicit == true" title="Explicit"
                  class="hover:cursor-pointer">
                  <span class="text-black text-[10.5px] bg-[#9f9f9f] font-bold h-4 w-4 flex justify-center items-center"
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
                class="Svg-sc-ytk21e-0 cqasRA e-9541-icon dataoftrack hover:cursor-pointer h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                  fill="#fff">
                </path>
              </svg>
            </div>
          </div>
        </div>
        <div v-else>
          <div v-for="(el1, ind1) in main.tracks">
            <div class="px-4 flex items-center h-14 gap-4 data text-[#9f9f9f]" style="border-bottom: 0;">
              <svg data-encore-id="icon" role="img" aria-hidden="true" class="Svg-sc-ytk21e-0 dYnaPI e-9541-icon"
                viewBox="0 0 16 16">
                <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                  fill="#9f9f9f"></path>
                <path d="M8 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0z" fill="#9f9f9f">
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
                  <NuxtLink :to="`/track/${el.path}`"><span class="hover:cursor-pointer hover:underline">{{ el.trackname
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
            <div style="width: 100%; height: 100%;"><img style=" border-radius: 6px;" :src="el.coverpath" width="100%"
                alt=""></div>
            <div class="grid grid-cols-1 gap-1">
              <div class="text-ellipsis overflow-hidden line-clamp-2"><span class="hover:underline">{{ el.albumname
                  }}</span></div>
              <div class="text-[#b3b3b3] text-[13px]">{{ el.albumreleaseyear }}</div>
            </div>
          </NuxtLink>
        </div>
        <FooterAbout />
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
import { ref, onMounted, watch, onUnmounted, nextTick } from "vue";
import { useRoute } from "vue-router";
import albums from "../../static/albums.json";
import artists from "~/static/artists.json"
import FooterAbout from "~/components/little_comps/FooterAbout.vue";

const container = ref(null);
const text = ref(null);
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

for (let i of artists) {
  if (!main.isSingle) {
    if (i.name == main.albumsinger) {
      for(let j of i.discography.popular){
        for(let k of albums){
          if(j == k.path){
            arrfordiscog.push(k)
          }
        }
      }
    }
  } else {
    if (i.name.includes(main.albumsinger[0])) {
      for(let j of i.discography.popular){
        for(let k of albums){
          if(j == k.path){
            arrfordiscog.push(k)
          }
        }
      }
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

const getArtistPath = (name) => {
  const artist = artists.find((a) => a.name === name);
  return artist ? artist.path : null;
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

watch(() => main.albumname, adjustFontSize);


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

if (main.isSingle) {
  useHead({
    title: `${main.albumname} - Single by ${main.albumsinger.join(", ")} | Spotify`,
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: 'favicon.png'  // Path to your custom favicon
      }
    ]
  })
} else if (main.isCompilation) {
  useHead({
    title: `${main.albumname} - Compilation by ${main.albumsinger} | Spotify`,
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: 'favicon.png'  // Path to your custom favicon
      }
    ]
  })
} else {
  useHead({
    title: `${main.albumname} - Album by ${main.albumsinger} | Spotify`,
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: 'favicon.png'  // Path to your custom favicon
      }
    ]
  })
}
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

.album-container {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  /* Ensure container width is defined */
}

.albumname {
  font-weight: bold;
  font-family: SpotifyMixExtrabold;
  letter-spacing: -4px;
  user-select: none;
  margin-bottom: -10px;
  overflow: hidden;
  display: inline-block;
}

.wrapped {
  color: white;
  border-radius: 10px;
  overflow-y: auto;
  /* Allow scrolling */
  height: calc(100vh - 180px);
  position: relative;
  /* Ensures sticky header stays inside */
}

.albumheader {
  padding: 24px;
  display: grid;
  grid-template-columns: clamp(155px, calc(155px + (77 * ((100vw - 800px) / 320))), 232px) auto;
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

  .morediscography>a:nth-child(n+9) {
    display: none;
  }
}

@media only screen and (min-width: 1380px) and (max-width: 1560px) {
  .morediscography {
    grid-template-columns: repeat(7, 1fr);
  }

  .morediscography>a:nth-child(n+8) {
    display: none;
  }
}

@media only screen and (min-width: 1200px) and (max-width: 1380px) {
  .morediscography {
    grid-template-columns: repeat(6, 1fr);
  }

  .morediscography>a:nth-child(n+7) {
    display: none;
  }
}

@media only screen and (min-width: 1016px) and (max-width: 1200px) {
  .morediscography {
    grid-template-columns: repeat(5, 1fr);
  }

  .morediscography>a:nth-child(n+6) {
    display: none;
  }
}

@media only screen and (min-width: 830px) and (max-width: 1016px) {
  .morediscography {
    grid-template-columns: repeat(4, 1fr);
  }

  .morediscography>a:nth-child(n+5) {
    display: none;
  }
}

@media only screen and (max-width: 830px) {
  .morediscography {
    grid-template-columns: repeat(3, 1fr);
  }

  .morediscography>a:nth-child(n+4) {
    display: none;
  }
}

::selection {
  background-color: #1ED760;
  color: white;
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
