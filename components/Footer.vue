<template>
  <div class="footer text-white">
    <div class="music_data min-w-52">
      <div class="w-16 h-16 flex justify-center items-center mx-[6px]">
        <img src="../public/hurryuptomorrow.jpg" width="50px" alt="">
      </div>
      <div class="grid grid-rows-2 text-white ml-3 text-sm songInfo">
        <div ref="textContainer1" class="flex items-end songTitle scrolling-text-container1">
          <p ref="textElement1" class="scrolling-text1 text-[14px] hover:underline hover:cursor-pointer">Reflections Laughing (feat. Travis Scott, Florence + The Machine)
          </p>
        </div>
        <div ref="textContainer2" class="songArtist scrolling-text-container2">
          <p ref="textElement2"
            class="scrolling-text2 font-[200] text-[12px] text-[#9f9f9f] hover:underline hover:text-white hover:cursor-pointer"
            style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
            The Weeknd, Travis Scott, Florence + The Machine
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="grid grid-cols-1 grid-rows-2 h-full">
        <div class="flex items-center gap justify-center h-[40px] gap-5">
          <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16"
            class="Svg-sc-ytk21e-0 dYnaPI specIcons w-4">
            <path
              d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z">
            </path>
            <path
              d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z">
            </path>
          </svg>
          <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16"
            class="Svg-sc-ytk21e-0 dYnaPI specIcons">
            <path
              d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z">
            </path>
          </svg>
          <div ref="playPause"
            class="flex justify-center items-center w-8 h-8 bg-white hover:bg-[#b3b3b3] hover:cursor-pointer hover:scale-105 rounded-full">
            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16"
              class="Svg-sc-ytk21e-0 dYnaPI w-4 play" style="display: block;">
              <path
                d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z">
              </path>
            </svg>
            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16"
              class="Svg-sc-ytk21e-0 dYnaPI w-4 pause" style="display: none;">
              <path
                d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z">
              </path>
            </svg>
          </div>
          <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16"
            class="Svg-sc-ytk21e-0 dYnaPI specIcons">
            <path
              d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z">
            </path>
          </svg>
          <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16"
            class="Svg-sc-ytk21e-0  specIcons">
            <path
              d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z">
            </path>
          </svg>
        </div>
        <div class="flex justify-center items-center">
          <p class="text-[12px]">00:00</p>
            <div class="f2 flex justify-center items-center">
              <div class="volume-slider-container_2 w-full flex justify-center items-center">
                <input type="range" id="volume-slider_2" class="volume-slider_2" min="0" max="100" value="0" />
              </div>
            </div>
          <p class="text-[12px]">00:00</p>
        </div>
      </div>
    </div>
    <div class="h-full flex justify-end items-center space-x-2">
      <div class="flex">
        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16"
          class="Svg-sc-ytk21e-0 dYnaPI specIcons rightfooter">
          <path d="M11.196 8 6 5v6l5.196-3z"></path>
          <path
            d="M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z">
          </path>
        </svg>
        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16"
          class="Svg-sc-ytk21e-0 dYnaPI specIcons rightfooter">
          <path
            d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z">
          </path>
        </svg>
        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16"
          class="Svg-sc-ytk21e-0 dYnaPI specIcons rightfooter">
          <path
            d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z">
          </path>
        </svg>
        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16"
          class="Svg-sc-ytk21e-0 dYnaPI specIcons rightfooter">
          <path
            d="M2 3.75C2 2.784 2.784 2 3.75 2h8.5c.966 0 1.75.784 1.75 1.75v6.5A1.75 1.75 0 0 1 12.25 12h-8.5A1.75 1.75 0 0 1 2 10.25v-6.5zm1.75-.25a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-6.5a.25.25 0 0 0-.25-.25h-8.5zM.25 15.25A.75.75 0 0 1 1 14.5h14a.75.75 0 0 1 0 1.5H1a.75.75 0 0 1-.75-.75z">
          </path>
        </svg>
        <svg data-encore-id="icon" role="presentation" aria-label="Volume high" aria-hidden="false" id="volume-icon"
          viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 kcUFwU specIcons rightfooter">
          <path
            d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z">
          </path>
          <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
        </svg>


        <div class="flex items-center">
          <div class="footer2">
            <div class="volume-slider-container">
              <input type="range" id="volume-slider" class="volume-slider" min="0" max="100" value="90" />
            </div>
          </div>
        </div>

        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16"
          class="Svg-sc-ytk21e-0 dYnaPI specIcons rightfooter">
          <path
            d="M16 2.45c0-.8-.65-1.45-1.45-1.45H1.45C.65 1 0 1.65 0 2.45v11.1C0 14.35.65 15 1.45 15h5.557v-1.5H1.5v-11h13V7H16V2.45z">
          </path>
          <path
            d="M15.25 9.007a.75.75 0 0 1 .75.75v4.493a.75.75 0 0 1-.75.75H9.325a.75.75 0 0 1-.75-.75V9.757a.75.75 0 0 1 .75-.75h5.925z">
          </path>
        </svg>
        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16"
          class="Svg-sc-ytk21e-0 dYnaPI specIcons rightfooter" @click="toggleFullScreen">
          <path
            d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0z">
          </path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';

const textContainer1 = ref(null);
const textElement1 = ref(null);
const textContainer2 = ref(null);
const textElement2 = ref(null);
const playPause = ref(null)

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
};

onMounted(() => {

  const container1 = textContainer1.value;
  const text1 = textElement1.value;

  const containerWidth1 = container1.getBoundingClientRect().width;

  const textWidth1 = text1.getBoundingClientRect().width;

  if (text1.scrollWidth > container1.clientWidth) {
    let isForward1 = true;

    container1.style.setProperty("--container-width1", `${containerWidth1}px`);
    container1.style.setProperty("--text-width1", `${textWidth1}px`);

    console.log(containerWidth1);

    container1.classList.add("marquee-forward1");

    text1.addEventListener("animationiteration", () => {
      if (isForward1) {
        container1.classList.remove("marquee-forward1");
        container1.classList.add("marquee-reverse1");
      } else {
        container1.classList.remove("marquee-reverse1");
        container1.classList.add("marquee-forward1");
      }
      isForward1 = !isForward1;
    });
  }

  const container2 = textContainer2.value;
  const text2 = textElement2.value;

  const containerWidth2 = container2.getBoundingClientRect().width;

  const textWidth2 = text2.getBoundingClientRect().width;

  if (text2.scrollWidth > container2.clientWidth) {
    let isForward2 = true;

    container2.style.setProperty("--container-width2", `${containerWidth2}px`);
    container2.style.setProperty("--text-width2", `${textWidth2}px`);

    console.log(containerWidth2);

    container2.classList.add("marquee-forward2");

    text2.addEventListener("animationiteration", () => {
      if (isForward2) {
        container2.classList.remove("marquee-forward2");
        container2.classList.add("marquee-reverse2");
      } else {
        container2.classList.remove("marquee-reverse2");
        container2.classList.add("marquee-forward2");
      }
      isForward2 = !isForward2;
    });
  }

  const playPause1 = playPause.value
  let playPauseTF = true

  playPause1.addEventListener("click", () => {
    if (playPauseTF) {
      document.querySelector(".play").style.display = "none"
      document.querySelector(".pause").style.display = "block"
      playPauseTF = false
    } else {
      document.querySelector(".play").style.display = "block"
      document.querySelector(".pause").style.display = "none"
      playPauseTF = true
    }
  })


  const slider = document.getElementById('volume-slider');

  // Set initial background color with the passed part in white
  slider.style.background = `linear-gradient(to right, white ${slider.value}%, #d3d3d3 ${slider.value}%)`;

  // Update the background dynamically as the slider changes
  slider.addEventListener('input', () => {
    const percentage = slider.value;
    slider.style.background = `linear-gradient(to right, white ${percentage}%, #d3d3d3 ${percentage}%)`;
  });

});


</script>

<style scoped>
/* Marquee */

.scrolling-text-container1 {
  overflow: hidden;
  position: relative;
  white-space: nowrap;
}

.scrolling-text1 {
  display: inline-block;
  position: relative;
  animation: none;
}

@keyframes scroll-forward1 {
  0% {
    transform: translateX(0);
  }

  20% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-100% + var(--container-width1)));
  }

  80% {
    transform: translateX(calc(-100% + var(--container-width1)));
  }
}

@keyframes scroll-reverse1 {
  0% {
    transform: translateX(calc(-100% + var(--container-width1)));
  }

  20% {
    transform: translateX(calc(-100% + var(--container-width1)));
  }

  80% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(0);
  }
}

.marquee-forward1 .scrolling-text1 {
  animation: scroll-forward1 5s linear infinite;
}

.marquee-reverse1 .scrolling-text1 {
  animation: scroll-reverse1 5s linear infinite;
}




.scrolling-text-container2 {
  overflow: hidden;
  position: relative;
  white-space: nowrap;
}

.scrolling-text2 {
  display: inline-block;
  position: relative;
  animation: none;
}

@keyframes scroll-forward2 {
  0% {
    transform: translateX(0);
  }

  20% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-100% + var(--container-width2)));
  }

  80% {
    transform: translateX(calc(-100% + var(--container-width2)));
  }
}

@keyframes scroll-reverse2 {
  0% {
    transform: translateX(calc(-100% + var(--container-width2)));
  }

  20% {
    transform: translateX(calc(-100% + var(--container-width2)));
  }

  80% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(0);
  }
}

.marquee-forward2 .scrolling-text2 {
  animation: scroll-forward2 5s linear infinite;
}

.marquee-reverse2 .scrolling-text2 {
  animation: scroll-reverse2 5s linear infinite;
}

/* Marquee */


.footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
}

.music_data {
  display: grid;
  align-content: center;
  grid-template-columns: 64px auto;
}

.music_data img {
  grid-row: 1/3;
}

.specIcons path {
  fill: #b3b3b3;
}

.specIcons {
  width: 16px;
}

.specIcons:hover path,
.specIcons {
  cursor: pointer;
  fill: white
}

.rightfooter {
  margin: 8px;
}




.footer2 {
  width: 115px;
  display: flex;
  align-items: center;
  padding: 10px;
}


.volume-slider {
  width: 95px;
  -webkit-appearance: none;
  /* Remove default appearance for better styling */
  height: 3px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: background 0.3s ease;
  /* Smooth transition for background changes */
  background: linear-gradient(to right, white 90%);
  /* Passed part turns green on hover */
  display: flex;
  align-items: center
  ;
}

.volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: transparent;
  /* Make the thumb invisible initially */
  transition: background-color 0.3s ease;
}

.volume-slider:hover::-webkit-slider-thumb {
  background-color: white;
  /* Show white thumb on hover */
}

.volume-slider:hover {
  background: linear-gradient(to right, green 90%);
  /* Passed part turns green on hover */
}


.f2 {
  display: flex;
  align-items: center;
  width: 100%;
}


.volume-slider_2 {
  width: 95%;
  min-width: 175px;
  -webkit-appearance: none;
  /* Remove default appearance for better styling */
  height: 3px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  transition: background 0.3s ease;
  /* Smooth transition for background changes */
  background: linear-gradient(to right, white 90%);
  /* Passed part turns green on hover */
  ;
}

.volume-slider_2::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: transparent;
  /* Make the thumb invisible initially */
  transition: background-color 0.3s ease;
}

.volume-slider_2:hover::-webkit-slider-thumb {
  background-color: white;
  /* Show white thumb on hover */
}

.volume-slider_2:hover {
  background: linear-gradient(to right, white 90% green 90%);
  /* Passed part turns green on hover */
}

::selection {
    background-color: #1ED760; 
    color: white;              
}
</style>