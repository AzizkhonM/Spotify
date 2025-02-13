<template>
  <div class="wrapped" ref="wrapped">

    <div ref="header" class="sticky-header" :style="{ opacity: opacitySticky, backgroundColor: main.downcolorcode }">
      <h1 class="text-[24px] select-none" style="font-family: SpotifyMixBold;">{{ main.playlistname }}</h1>
    </div>

    <div class="playlistheader mt-[-68px]" ref="header"
      :style="{ backgroundImage: `linear-gradient(${main.upcolorcode}, ${main.downcolorcode})` }">
      <div><img id="maincover" :src="main.coverpath" width="232px"
          class="hover:scale-[1.02] duration-200 hover:cursor-pointer rounded" :alt="main.albumname" /></div>
      <div class="grid grid-cols-1 justify-items-start items-end px-6">
        <p class="text-[0.875rem] mb-[-40px]">Playlist</p>
        <div ref="container" class="playlist-container">
          <p ref="text" class="playlistname lg:mt-0 w-full">
            {{ main.playlistname }}
          </p>
        </div>
        <div class="flex gap-1 items-end mt-[-20px]">
          <img :src="main.playlistownerimagepath" class="rounded-full" width="24px">
          <p style="font-family: SpotifyMixBold; font-size: 0.875rem">{{ main.playlistowner }}</p>
          <p class="color-texts">•</p>
          <p class="color-texts">{{ main.tracksnumber }} songs</p>
          <p class="color-texts">•</p>
          <p v-if="main.timehour !== 0" class="color-texts">about {{ main.timehour }} hour</p>
          <p class="color-texts">{{ main.timeminute }} min</p>
          <p v-if="main.timehour === 0" class="color-texts">{{ main.timesecond }} sec</p>
        </div>
      </div>
    </div>
    <div class="h-36" :style="{ backgroundColor: `${main.downcolorcode}` }"></div>
    <div class="h-36 mt-[-144px] uptolist"
      style="background: linear-gradient(rgba(18, 18, 18, 0.3), rgba(18, 18, 18, 1))">
      <div class="flex justify-start items-center gap-8">
        <div
          class="h-14 w-14 rounded-full bg-[#1ED760] hover:bg-[#20ff6e] hover:scale-[1.01] duration-750 flex justify-center items-center hover:cursor-pointer">
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
      <div class="flex items-end h-16 px-4 gap-4 updata text-[#9f9f9f]">
        <div class="flex justify-center">#</div>
        <div class="">Title</div>
        <div class="">Album</div>
        <div class="">Date added</div>
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
          <div class="flex pt-[5px] pb-1" style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">
            <img :src="getCover(el)" width="45" alt="" class="rounded mr-3">
            <div class="pl-2 grid grid-cols-1">
              <div class="text-white" style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">
                <NuxtLink :to="`/track/${el}`"><span class="hover:cursor-pointer hover:underline">{{ getTrackname(el)
                    }}</span></NuxtLink>
              </div>
              <div class="flex items-center gap-1 text-[14px]"><abbr v-if="isExplicit(el)" title="Explicit"
                  class="hover:cursor-pointer">
                  <span class="text-black text-[10.5px] bg-[#9f9f9f] font-bold h-4 w-4 flex justify-center items-center"
                    style="font-family: SpotifyMixBold">
                    E
                  </span>
                </abbr>

                <span v-for="(item, index) in getArtists(el)" class="text-[14px]" :key="index">
                  <NuxtLink v-if="getArtistPath(item)" :to="`/artist/${getArtistPath(item)}`"
                    class="p-singer hover:underline hover:cursor-pointer">
                    {{ item }}
                  </NuxtLink>
                  <span v-else class="p-singer">{{ item }}</span>
                  <span v-if="index < getArtists(el).length - 1">, </span>
                </span>
              </div>
            </div>
          </div>
          <div class="albumname text-[#b3b3b3]">
            <NuxtLink :to="`/album/${getAlbumPath(el)}`" style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">
              <h1 class="hover:underline w-max hover:cursor-pointer">{{ getAlbum(el) }}</h1>
            </NuxtLink>
          </div>
          <div class="">
            13 Feb 2025
          </div>
          <div class="flex justify-center text-[14px]">
            {{ getTrackLength(el) }}
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
        <!-- <div v-for="(el, ind) in main.tracks"
          class="px-4 flex items-center rounded h-14 gap-4 data text-[#9f9f9f] hover:bg-[#2a2a2a]" tabindex="0"
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
          <div class="py-2 flex items-center">
            <img :src="getCover(el)" width="40" alt="" height="40" class="rounded h-10">
            <- <div class="grid grid-cols-1 content-center">
              <NuxtLink :to="`/track/${el}`">
                <h1 class="hover:underline text-white hover:cursor-pointer">{{ getTrackname(el) }}</h1>
              </NuxtLink>
              <div class="grid grid-cols-2 justify-start content-center gap-2">
                <span v-if="isExplicit(el)"
                  class="text-black text-[10.5px] bg-[#9f9f9f] font-bold h-4 w-4 flex justify-center items-center"
                  style="font-family: SpotifyMixBold">
                  E
                </span>
                <span v-for="(item, index) in getArtists(el)" :key="index">
                  <NuxtLink v-if="getArtistPath(item)" :to="`/artist/${getArtistPath(item)}`"
                    class="p-singer hover:underline hover:cursor-pointer">
                    {{ item }}
                  </NuxtLink>
                  <span v-else class="p-singer">{{ item }}</span>
                  <span v-if="index < getArtists(el).length - 1">, </span>
                </span>
              </div>
            </div> ->
            <div class="pl-2 grid grid-cols-1">
              <div class="text-white">
                <NuxtLink :to="`/track/${el}`"><span class="hover:cursor-pointer hover:underline">{{ getTrackname(el)
                    }}</span></NuxtLink>
              </div>
              <div class="flex items-center gap-1 text-[14px]"><abbr v-if="isExplicit(el)" title="Explicit"
                  class="hover:cursor-pointer">
                  <span class="text-black text-[10.5px] bg-[#9f9f9f] font-bold h-4 w-4 flex justify-center items-center"
                    style="font-family: SpotifyMixBold">
                    E
                  </span>
                </abbr>

                <span v-for="(item, index) in getArtists(el)" :key="index">
                  <NuxtLink v-if="getArtistPath(item)" :to="`/artist/${getArtistPath(item)}`"
                    class="p-singer hover:underline hover:cursor-pointer">
                    {{ item }}
                  </NuxtLink>
                  <span v-else class="p-singer">{{ item }}</span>

                  <span v-if="index < getArtists(el).length - 1">, </span>
                </span>
              </div>
            </div>
          </div>
          <div class="albumname">
            <h1 class="text-[#b3b3b3] hover:underline">{{ getAlbum(el) }}</h1>
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
        </div> -->
        <div class="px-4 mt-10">
          <FooterAbout/>
        </div>
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
import playlists from "../../static/playlists.json";
import albums from "~/static/albums.json"
import artists from "~/static/artists.json"
import FooterAbout from "~/components/little_comps/FooterAbout.vue";

const isOpen = ref(false)

const route = useRoute();

const container = ref(null);
const text = ref(null);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let main = {};
console.log(route.params.id);
for (let i of playlists) {
  if ((i.path = route.params.id)) {
    main = i;
  }
}

const getCover = (path) => {
  for (let i of albums) {
    for (let j of i.tracks) {
      if (j.path == path) {
        return i.coverpath
      }
    }
  }
};

const getTrackname = (path) => {
  for (let i of albums) {
    for (let j of i.tracks) {
      if (j.path == path) {
        return j.trackname
      }
    }
  }
};

const isExplicit = (path) => {
  for (let i of albums) {
    for (let j of i.tracks) {
      if (j.path == path) {
        return j.explicit
      }
    }
  }
};

const getArtists = (path) => {
  for (let i of albums) {
    for (let j of i.tracks) {
      if (j.path == path) {
        return j.singers
      }
    }
  }
};

const getAlbum = (path) => {
  for (let i of albums) {
    for (let j of i.tracks) {
      if (j.path == path) {
        return i.albumname
      }
    }
  }
};

const getAlbumPath = (path) => {
  for (let i of albums) {
    for (let j of i.tracks) {
      if (j.path == path) {
        return i.path
      }
    }
  }
};

const getTrackLength = (path) => {
  for (let i of albums) {
    for (let j of i.tracks) {
      if (j.path == path) {
        return j.duration
      }
    }
  }
};

const getArtistPath = (name) => {
  const artist = artists.find((a) => a.name === name);
  return artist ? artist.path : null;
};

onMounted(() => {
  const colorchanging = document.querySelectorAll('.color-texts');

  colorchanging.forEach(element => {
    element.style.color = main.textcolorcode
    console.log(main.textcolorcode);
  });
})

console.log(main.coverpath);

setTimeout(() => {
  const cover = document.querySelector("#maincover")
  const modal = document.getElementById('imageModal');
  const modalContent = document.getElementById('modalContent');
  const closeButton = document.getElementById('closeButton');

  console.log(cover);

  cover.addEventListener('click', () => {

    const imageSrc = cover.src;
    modalContent.style.backgroundImage = `url(${imageSrc})`;
    modal.classList.add('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  closeButton.addEventListener('click', () => {
    modal.classList.remove('active');
  });
}, 100)

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
  title: `${main.playlistname} - playlist by ${main.playlistowner} | Spotify`
})

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

.playlist-container {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  /* Ensure container width is defined */
}

.playlistname {
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
}

.playlistheader {
  padding: 24px;
  display: grid;
  grid-template-columns: clamp(155px, calc(155px + (77 * ((100vw - 800px) / 320))), 232px) auto;
}

.albumheader img {
  box-shadow: 0 4px 60px rgba(0, 0, 0, .5);
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
  transform: scale(1.10)
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
  grid-template-columns: 20px minmax(100px, 41%) minmax(100px, 29%) minmax(100px, 21%) 40px 20px;
  border-bottom: 1px solid #2d2d2d;
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

  .albumname {
    color: white;
  }

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

  .albumname {
    color: white;
  }

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
