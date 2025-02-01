<template>
    <div class="main w-full">
        <div class="flex items-center gap-3">
            <div class="w-[64px] flex justify-center h-[64px] items-center">
                <nuxt-link to="/"><img src="../public/spotify.svg" draggable="false" width="32px" alt=""></nuxt-link>
            </div>
            <div class="flex justify-center items-center gap-2 bigSearch">
                <div class="hs-dropdown [--trigger:hover] relative inline-flex">
                    <button id="hs-dropdown-hover-event" type="button"
                        class="w-12 h-12 flex justify-center items-center rounded-full bg-[#1f1f1f] homebutton"
                        aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24"
                            class="Svg-sc-ytk21e-0 bneLcE w-6 home duration-100">
                            <path
                                d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"
                                fill="white"></path>
                        </svg>
                    </button>
                    <div class="hs-dropdown-menu transition-[opacity,margin] delay-200 duration-100 hs-dropdown-open:opacity-100 opacity-0 hidden w-auto px-1 bg-[#1f1f1f] shadow-2xl rounded-md mt-2"
                        role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-hover-event">
                        <div class="p-1 space-y-0.5 text-white">
                            Home
                        </div>
                    </div>
                </div>

                <div
                    class="w-[474px] h-12 border-none flex gap-3 items-center bg-[#1f1f1f] hover:bg-[#2a2a2a] delay-100 hover:cursor-pointer rounded-[500px] px-4 focus:outline-1 searchDiv">
                    <div class="hs-dropdown [--trigger:hover] relative inline-flex">
                        <svg id="hs-dropdown-hover-event" type="button" data-encore-id="icon" role="img"
                            aria-hidden="true" viewBox="0 0 24 24"
                            class="Svg-sc-ytk21e-0 bneLcE w-7 hover:cursor-pointer duration-100 searchPath"
                            aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            <path
                                d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"
                                fill="#9f9f9f"></path>
                        </svg>
                        <div class="hs-dropdown-menu transition-[opacity,margin] delay-200 duration-100 hs-dropdown-open:opacity-100 opacity-0 hidden w-auto px-1 bg-[#1f1f1f] shadow-2xl rounded-md mt-2"
                            role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-hover-event">
                            <div class="p-1 space-y-0.5 text-white">
                                Search
                            </div>
                        </div>
                    </div>
                    <input type="text"
                        class="searchInput h-full w-full bg-[#1f1f1f] focus:outline-none text-white delay-100"
                        placeholder="What do you want to play?">
                    <div class="hs-dropdown [--trigger:hover] relative inline-flex">
                        <svg id="hs-dropdown-hover-event" type="button" data-encore-id="icon" role="img"
                            aria-hidden="true" viewBox="0 0 24 24"
                            class="Svg-sc-ytk21e-0 bneLcE w-7 hover:cursor-pointer duration-100 searchPath"
                            aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            <path d="M15 15.5c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" fill="#9f9f9f">
                            </path>
                            <path
                                d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9H3.525zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4V2z"
                                fill="#9f9f9f"></path>
                        </svg>
                        <div class="hs-dropdown-menu transition-[opacity,margin] delay-200 duration-100 hs-dropdown-open:opacity-100 opacity-0 hidden w-auto px-1 bg-[#1f1f1f] shadow-2xl rounded-md mt-2"
                            role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-hover-event">
                            <div class="p-1 space-y-0.5 text-white">
                                Browse
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center gap-2 bigSearch2">
            <div class="hs-dropdown [--trigger:hover] relative inline-flex">
                <button id="hs-dropdown-hover-event" type="button"
                    class="w-12 h-12 flex justify-center items-center rounded-full bg-[#1f1f1f] homebutton"
                    aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                    <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24"
                        class="Svg-sc-ytk21e-0 bneLcE w-6 home duration-100">
                        <path
                            d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"
                            fill="white"></path>
                    </svg>
                </button>
                <div class="hs-dropdown-menu transition-[opacity,margin] delay-200 duration-100 hs-dropdown-open:opacity-100 opacity-0 hidden w-auto px-1 bg-[#1f1f1f] shadow-2xl rounded-md mt-2"
                    role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-hover-event">
                    <div class="p-1 space-y-0.5 text-white">
                        Home
                    </div>
                </div>
            </div>

            <div
                class="w-[474px] h-12 border-none flex gap-3 items-center bg-[#1f1f1f] hover:bg-[#2a2a2a] delay-100 hover:cursor-pointer rounded-[500px] px-4 focus:outline-1 searchDiv">
                <div class="hs-dropdown [--trigger:hover] relative inline-flex">
                    <svg id="hs-dropdown-hover-event" type="button" data-encore-id="icon" role="img" aria-hidden="true"
                        viewBox="0 0 24 24"
                        class="Svg-sc-ytk21e-0 bneLcE w-7 hover:cursor-pointer duration-100 searchPath"
                        aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                        <path
                            d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"
                            fill="#9f9f9f"></path>
                    </svg>
                    <div class="hs-dropdown-menu transition-[opacity,margin] delay-200 duration-100 hs-dropdown-open:opacity-100 opacity-0 hidden w-auto px-1 bg-[#1f1f1f] shadow-2xl rounded-md mt-2"
                        role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-hover-event">
                        <div class="p-1 space-y-0.5 text-white">
                            Search
                        </div>
                    </div>
                </div>
                <input type="text"
                    class="searchInput h-full w-full bg-[#1f1f1f] focus:outline-none text-white delay-100"
                    placeholder="What do you want to play?">
                <div class="hs-dropdown [--trigger:hover] relative inline-flex">
                    <svg id="hs-dropdown-hover-event" type="button" data-encore-id="icon" role="img" aria-hidden="true"
                        viewBox="0 0 24 24"
                        class="Svg-sc-ytk21e-0 bneLcE w-7 hover:cursor-pointer duration-100 searchPath"
                        aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                        <path d="M15 15.5c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" fill="#9f9f9f">
                        </path>
                        <path
                            d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9H3.525zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4V2z"
                            fill="#9f9f9f"></path>
                    </svg>
                    <div class="hs-dropdown-menu transition-[opacity,margin] delay-200 duration-100 hs-dropdown-open:opacity-100 opacity-0 hidden w-auto px-1 bg-[#1f1f1f] shadow-2xl rounded-md mt-2"
                        role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-hover-event">
                        <div class="p-1 space-y-0.5 text-white">
                            Browse
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-end items-center pl-4 piwa">
            <button class="px-4 py-1 bg-white font-bold premium"
                style="border-radius: var(--encore-button-corner-radius, 9999px);">Explore Premium</button>
            <div class="px-4 py-1 bg-black font-bold text-white flex gap-2 install hover:cursor-pointer"><svg
                    data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16"
                    class="Svg-sc-ytk21e-0 dYnaPI w-4">
                    <path
                        d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"
                        fill="white"></path>
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"
                        fill="white"></path>
                </svg>Install App</div>
            <div class="hs-dropdown [--trigger:hover] relative inline-flex">
                <svg id="hs-dropdown-hover-event" type="button" data-encore-id="icon" role="img" aria-hidden="true"
                    viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 dYnaPI w-4 bellPath hover:cursor-pointer duration-100"
                    aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                    <path
                        d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z"
                        fill="#9f9f9f"></path>
                </svg>
                <div class="hs-dropdown-menu transition-[opacity,margin] delay-200 duration-100 hs-dropdown-open:opacity-100 opacity-0 hidden w-auto px-1 bg-[#1f1f1f] shadow-2xl rounded-md mt-2"
                    role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-hover-event">
                    <div class="p-1 space-y-0.5 text-white">
                        What's New
                    </div>
                </div>
            </div>
            <div class="hs-dropdown [--trigger:hover] relative inline-flex w-16 justify-center items-center h-16">
                <button id="hs-dropdown-hover-event" type="button"
                    class="w-12 h-12 flex justify-center items-center rounded-full bg-[#1f1f1f] avatar"
                    aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                    <img src="/public/jdu.png" class="rounded-full w-7" alt="">
                </button>
                <div class="hs-dropdown-menu transition-[opacity,margin] delay-200 duration-100 hs-dropdown-open:opacity-100 opacity-0 hidden w-auto px-1 bg-[#1f1f1f] shadow-2xl rounded-md mt-2"
                    role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-hover-event">
                    <div class="p-1 space-y-0.5 text-white">
                        JDU
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.main {
    display: grid;
    grid-template-columns: 28% 44% 28%;
    align-items: center;
}

.bigSearch {
    display: none;
}

@media only screen and (max-width: 1325px) {
    .main {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
    }

    .bigSearch2 {
        display: none;
    }

    .bigSearch{
        display: flex;
    }
}

.homebutton:hover {
    .home {
        width: 26px;
    }
}

.searchDiv:hover input {
    background-color: #2a2a2a;
}

.searchPath:hover path {
    fill: white;
}

.searchInput::placeholder {
    color: #9f9f9f;
}

.piwa{
    gap: 12px;
}

@media only screen and (max-width: 1513px) {
    .piwa{
        gap: 10px;
    }
}

@media only screen and (max-width: 1492px) {
    .piwa{
        gap: 8px;
    }
}

@media only screen and (max-width: 1441px) {
    .piwa{
        gap: 6px;
    }
}

.premium,
.install,
.avatar {
    transition: transform 0.2s ease-in-out;
}

@media only screen and (max-width: 1543px) {
    .premium, .install{
        font-size: 98%;
    }
}

@media only screen and (max-width: 1528px) {
    .premium, .install{
        font-size: 96%;
    }
}

@media only screen and (max-width: 1470px) {
    .premium, .install{
        font-size: 94%;
    }
}

@media only screen and (max-width: 1455px) {
    .premium, .install{
        font-size: 92%;
    }
}

@media only screen and (max-width: 1419px) {
    .premium, .install{
        font-size: 91%;
    }
}

@media only screen and (max-width: 1412px) and (min-width: 1325px) {
    .main {
    grid-template-columns: 30% 40% 30%;
}
}

@media only screen and (max-width: 1419px) {
    .avatar{
        width: 44px;
        height: 44px;
    }

    .avatar img{
        width: 26px;
    }
}

@media only screen and (max-width: 1324px) {
    .piwa{
        gap: 12px;
    }

    .premium, .install{
        font-size: 100%;
    }

    .premium{
        min-width: 160px;
    }

    .install{
        min-width: 136px;
    }

    .avatar{
        width: 48px;
        height: 48px;
    }

    .avatar img{
        width: 28px;
    }
}

@media only screen and (max-width: 1024px){
    .premium{
        display: none
    }
}

.premium:hover,
.install:hover,
.avatar:hover {
    transform: scale(1.05);
}

.bellPath:hover path {
    fill: white;
}
</style>