<template>
    <div class="wrapped" ref="wrapped">
        <div ref="header" class="sticky-header"
            :style="{ opacity: opacitySticky, backgroundColor: `rgb(${main.color})` }">
            <h1 class="text-[24px] select-none" style="font-family: SpotifyMixBold;">{{ main.name }}</h1>
        </div>
        <div class="h-[285px] mt-[-68px] w-full z-0 artistbackimage"
            :style="{ backgroundImage: `url(${main.artistbackimage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }">
        </div>
        <div class="p-6 h-[285px] z-10 mt-[-285px] text-white grid grid-cols-1 content-end" :style="{
            backgroundImage: `linear-gradient(rgb(${main.color}, 0.25), rgb(0, 0, 0, 0.6))`,
        }">
            <div v-if="main.verified" class="flex gap-2 items-center">
                <svg data-encore-id="verifiedBadge" role="img" aria-hidden="false"
                    class="Svg-sc-ytk21e-0 gRhSld e-9541-icon encore-announcement-set b0NcxAbHvRbqgs2S8QDg w-6 h-6"
                    viewBox="0 0 24 24"
                    style="position: relative; background-image: linear-gradient(var(--text-base), var(--text-base)); background-size: 50% 50%; background-position: center center; background-repeat: no-repeat;">
                    <title>Verified account</title>
                    <path
                        d="M10.814.5a1.658 1.658 0 0 1 2.372 0l2.512 2.572 3.595-.043a1.658 1.658 0 0 1 1.678 1.678l-.043 3.595 2.572 2.512c.667.65.667 1.722 0 2.372l-2.572 2.512.043 3.595a1.658 1.658 0 0 1-1.678 1.678l-3.595-.043-2.512 2.572a1.658 1.658 0 0 1-2.372 0l-2.512-2.572-3.595.043a1.658 1.658 0 0 1-1.678-1.678l.043-3.595L.5 13.186a1.658 1.658 0 0 1 0-2.372l2.572-2.512-.043-3.595a1.658 1.658 0 0 1 1.678-1.678l3.595.043L10.814.5zm6.584 9.12a1 1 0 0 0-1.414-1.413l-6.011 6.01-1.894-1.893a1 1 0 0 0-1.414 1.414l3.308 3.308 7.425-7.425z"
                        fill="#4cb3fe">
                    </path>
                </svg>
                <div>Verified Artist</div>
            </div>
            <!-- <p class="mb-[-10px] mt-[-10px]"
                style="user-select: none; font-family: SpotifyMixExtrabold; font-size: clamp(48px, 6vw, 96px); letter-spacing: -4px;">
                {{ main.name }}</p> -->
            <div ref="container" class="artist-container">
                <p ref="text" class="artistname mt-5 lg:mt-0">
                    {{ main.name }}
                </p>
            </div>
            {{ (main.monthlylisteners).toLocaleString('en-US') }} monthly listeners
        </div>
        <div class="h-auto">
            <div class="box2 h-[200px]" :style="{ backgroundColor: `rgb(${main.color})` }"></div>
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
                    <button class="py-[3px] px-[15px] followw" @click="toggleFollow"><span v-if="main.followed"
                            class="text-white">Following</span><span v-if="!main.followed"
                            class="text-white">Follow</span></button>
                    <div class="hs-dropdown [--trigger:hover] relative">
                        <svg id="hs-dropdown-hover-event" aria-haspopup="menu" aria-expanded="false"
                            aria-label="Dropdown" data-encore-id="icon" role="img" aria-hidden="true"
                            class="Svg-sc-ytk21e-0 cqasRA e-9541-icon w-8 h-8 savetolibrary hover:cursor-pointer"
                            viewBox="0 0 24 24">
                            <path
                                d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                                fill="#9f9f9f">
                            </path>
                        </svg>
                        <div class="hs-dropdown-menu transition-[opacity,margin] delay-200 duration-100 hs-dropdown-open:opacity-100 opacity-0 hidden w-auto px-1 bg-[#1f1f1f] shadow-2xl rounded-md absolute bottom-full mb-2"
                            role="menu" aria-orientation="vertical" aria-labelledby="hs-dropdown-hover-event">
                            <div class="p-1 space-y-0.5 text-white">
                                More options for {{ main.name }}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="grid grid-cols-2 gap-6 artistmain mb-10">
                        <div>
                            <h1 class="text-[24px] mb-4" style="font-family: SpotifyMixBold;">Popular</h1>
                            <div v-for="el in popularsongs">
                                <div class="populartracks hover:bg-[#2a2a2a] rounded" tabindex="0">
                                    <div class="flex justify-center items-center">
                                        <h1 class="numinid text-[#9f9f9f]">{{ el.id }}</h1>
                                        <svg data-encore-id="icon" role="img" aria-hidden="true"
                                            class="Svg-sc-ytk21e-0 bneLcE e-9541-icon w-4 h-4 playinid"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"
                                                fill="white"></path>
                                        </svg>
                                    </div>
                                    <div class="py-2 flex">
                                        <img :src="el.coverpath" width="40" alt="" class="rounded mr-3">
                                        <div class="grid grid-cols-1 content-center">
                                            <NuxtLink :to="`/track/${el.path}`">
                                                <h1 class="hover:underline hover:cursor-pointer" style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">{{ el.trackname }}</h1>
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
                        <div class="">
                            <h1 class="text-[24px] mb-4" style="font-family: SpotifyMixBold;">Artist pick</h1>
                            <div class="flex items-center w-auto">
                                <NuxtLink :to="{ name: 'album-id', params: { id: main.artistpick.path } }"><img
                                        :src="main.artistpick.coverpath" width="88" class="mr-4 rounded" alt="">
                                </NuxtLink>
                                <div class="grid grid-cols-1">
                                    <NuxtLink :to="{ name: 'album-id', params: { id: main.artistpick.path } }">
                                        <h1 class="hover:underline hover:cursor-pointer text-[20px]"
                                            style="font-family: SpotifyMixBold;">{{ main.artistpick.albumname }}</h1>
                                    </NuxtLink>
                                    <h1 class="text-[#b3b3b3]">Album</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="grid grid-cols-2">
                        <h1 class="text-[24px] mb-4 text-start" style="font-family: SpotifyMixBold;">Discography</h1>
                        <div class="flex items-end justify-end">
                            <NuxtLink :to="{ path: `/artist/${$route.params.id}/discography/all` }">
                                <h1 class="hover:cursor-pointer hover:underline text-[14px] mb-4 items-end text-[#b3b3b3] text-end"
                                    style="font-family: SpotifyMixBold;">
                                    Show all
                                </h1>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="flex my-2 gap-2">
                        <div id="popularBtn" @click="setActiveTab('popular')"
                            :class="activeTab === 'popular' ? 'activeB' : 'inactiveB'"
                            class="py-1 px-3 rounded-[9999px] select-none">Popular releases</div>
                        <div id="albumBtn" @click="setActiveTab('albums')"
                            :class="activeTab === 'albums' ? 'activeB' : 'inactiveB'"
                            class="py-1 px-3 rounded-[9999px] select-none inactiveB">Albums</div>
                        <div id="singleBtn" @click="setActiveTab('singles')"
                            :class="activeTab === 'singles' ? 'activeB' : 'inactiveB'"
                            class="py-1 px-3 rounded-[9999px] select-none" v-if="singles.length !== 0">Singles and EPs
                        </div>
                        <div id="compilationBtn" @click="setActiveTab('compilation')"
                            :class="activeTab === 'compilation' ? 'activeB' : 'inactiveB'"
                            class="py-1 px-3 rounded-[9999px] select-none" v-if="compilations.length !== 0">Compilations
                        </div>
                    </div>
                </div>
                <div class="albumssingles mb-10">
                    <div class="p-3 grid grid-cols-1 content-start h-full rounded-[6px] hover:bg-[#1f1f1f] hover:cursor-pointer duration-200 gap-2"
                        v-for="el in albumslist" :key="el.id"
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
                <div class="w-full">
                    <h1 class="text-[24px] mb-4" style="font-family: SpotifyMixBold;">About</h1>
                    <div class="aboutartist p-10 w-[65%] h-[520px] rounded-lg hover:scale-[1.02] duration-700"
                        :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${main.artistimage})` }"
                        style="background-position: center; background-repeat: no-repeat; background-size: cover;">
                        <div class="flex justify-end items-start">
                            <div
                                class="grid grid-cols-1 h-20 w-20 place-items-center content-center bg-[#0074e0] rounded-full">
                                <h1 class="text-[24px] mb-[-3px] select-none" style="font-family: SpotifyMixBold;">#{{
                                    main.about.rankintheworld }}</h1>
                                <h1 class="text-[10px] mt-[-3px] select-none">in the world</h1>
                            </div>
                        </div>
                        <div class="flex justify-start items-end">
                            <div class="grid grid-cols-1">
                                <h1 class="select-none" style="font-family: SpotifyMixBold;">{{
                                    (main.monthlylisteners).toLocaleString('en-US') }} monthly listeners</h1>
                                <h1 class="select-none line-clamp-3 w-[82%]">{{ main.about.briefinfo }}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <FooterAbout />
            </div>

        </div>

        <div class="modal" id="imageModal">
            <div class="modal-wrapper">
                <div class="modal-content" id="modalContent">
                    <div class="h-[430px] bg-black flex justify-center items-center">
                        <img :src="main.artistimage" class="h-full" alt="">
                    </div>
                    <div class="bg-[#121212] p-10 grid" style="grid-template-columns: 35% 64%;">
                        <div class="grid grid-cols-1 gap-8 self-start">
                            <div
                                class="grid grid-cols-1 h-20 w-20 place-items-center content-center bg-[#0074e0] rounded-full">
                                <h1 class="text-[24px] mb-[-3px] select-none" style="font-family: SpotifyMixBold;">#{{
                                    main.about.rankintheworld }}</h1>
                                <h1 class="text-[10px] mt-[-3px] select-none">in the world</h1>
                            </div>
                            <div class="text-start">
                                <h1 class="text-[32px]" style="font-family: SpotifyMixBold;">{{
                                    (main.about.followers).toLocaleString("en-US") }}</h1>
                                <h1 class="text-[14px] text-[#B3B3B3]">followers</h1>
                            </div>
                            <div class="text-start">
                                <h1 class="text-[32px]" style="font-family: SpotifyMixBold;">{{
                                    (main.monthlylisteners).toLocaleString("en-US") }}</h1>
                                <h1 class="text-[14px] text-[#B3B3B3]">monthly listeners</h1>
                            </div>
                            <div class="text-start">
                                <div v-for="el in main.about.mostlistenedplaces" class="mb-4">
                                    <h1 class="text-[14px]" style="font-family: SpotifyMixBold;">{{ el.place }}</h1>
                                    <h1 class="text-[14px] text-[#B3B3B3]">{{
                                        (el.listenersnumber).toLocaleString("en-US") }} listeners</h1>
                                </div>
                            </div>
                            <div class="socials">
                                <div v-for="el in main.about.socialmediaweb" class="">
                                    <NuxtLink target="_blank" v-if="el.Facebook" :to="el.Facebook"
                                        class=" flex items-start gap-3 mt-4 socialMedia">
                                        <svg data-encore-id="icon" role="img" aria-hidden="true"
                                            class="Svg-sc-ytk21e-0 bneLcE e-9541-icon oORVTPvg6eTQflVKKgw8 w-5 h-5"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.093 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z">
                                            </path>
                                        </svg>
                                        <h1 class="text-[14px]">Facebook</h1>
                                    </NuxtLink>
                                    <NuxtLink target="_blank" v-if="el.Instagram" :to="el.Instagram"
                                        class="flex items-start gap-3 socialMedia mt-3">
                                        <svg data-encore-id="icon" role="img" aria-hidden="true"
                                            class="Svg-sc-ytk21e-0 bneLcE e-9541-icon oORVTPvg6eTQflVKKgw8 w-5 h-5"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M12 3.803c2.67 0 2.986.01 4.041.059.975.044 1.504.207 1.857.344.435.16.828.416 1.151.748.332.323.588.716.748 1.151.137.353.3.882.345 1.857.047 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.041-.045.975-.208 1.505-.345 1.857A3.315 3.315 0 0 1 17.9 19.8c-.352.137-.882.3-1.856.344-1.055.048-1.371.058-4.041.058-2.67 0-2.987-.01-4.041-.058-.975-.044-1.505-.207-1.857-.344a3.096 3.096 0 0 1-1.151-.748 3.096 3.096 0 0 1-.749-1.151c-.137-.353-.3-.883-.344-1.857-.048-1.055-.058-1.371-.058-4.041 0-2.67.01-2.987.058-4.041.045-.975.207-1.505.344-1.857a3.08 3.08 0 0 1 .749-1.151 3.096 3.096 0 0 1 1.15-.749c.353-.137.883-.3 1.858-.344 1.054-.048 1.37-.058 4.04-.058H12zM12.002 2c-2.716 0-3.057.012-4.124.06-1.066.05-1.793.22-2.428.466A4.91 4.91 0 0 0 3.678 3.68a4.91 4.91 0 0 0-1.153 1.772c-.247.635-.416 1.363-.465 2.427C2.012 8.943 2 9.286 2 12.002c0 2.715.012 3.056.06 4.123.05 1.066.218 1.791.465 2.426a4.909 4.909 0 0 0 1.153 1.772c.5.508 1.105.902 1.772 1.153.635.248 1.363.417 2.428.465 1.064.049 1.407.06 4.123.06s3.056-.01 4.123-.06c1.067-.049 1.79-.217 2.426-.465a5.111 5.111 0 0 0 2.925-2.925c.247-.635.416-1.363.465-2.427.048-1.064.06-1.407.06-4.123s-.012-3.057-.06-4.123c-.05-1.067-.218-1.791-.465-2.426a4.902 4.902 0 0 0-1.153-1.771 4.91 4.91 0 0 0-1.772-1.155c-.635-.247-1.363-.416-2.428-.464-1.064-.048-1.406-.06-4.122-.06L12.002 2z">
                                            </path>
                                            <path
                                                d="M12 6.867a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm0 8.47a3.334 3.334 0 1 1 0-6.67 3.334 3.334 0 0 1 0 6.67zm5.338-7.473a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z">
                                            </path>
                                        </svg>
                                        <h1 class="text-[14px]">Instagram</h1>
                                    </NuxtLink>
                                    <NuxtLink target="_blank" v-if="el.Twitter" :to="el.Twitter"
                                        class="flex items-start gap-3 socialMedia mt-3">
                                        <svg data-encore-id="icon" role="img" aria-hidden="true"
                                            class="Svg-sc-ytk21e-0 bneLcE e-9541-icon oORVTPvg6eTQflVKKgw8 w-5 h-5"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M20.31 5.833a4.451 4.451 0 0 0 2-2.524 8.91 8.91 0 0 1-2.894 1.107 4.487 4.487 0 0 0-1.494-1.06 4.471 4.471 0 0 0-1.827-.38c-1.254 0-2.325.444-3.214 1.333-.89.89-1.334 1.964-1.334 3.225 0 .318.04.664.12 1.037a12.713 12.713 0 0 1-5.226-1.398A12.804 12.804 0 0 1 2.298 3.81a4.49 4.49 0 0 0-.62 2.284c0 .778.181 1.5.542 2.168a4.439 4.439 0 0 0 1.482 1.62 4.31 4.31 0 0 1-2.06-.561v.06c0 1.087.346 2.047 1.036 2.88a4.457 4.457 0 0 0 2.608 1.572 4.405 4.405 0 0 1-1.191.166 5.04 5.04 0 0 1-.856-.082 4.41 4.41 0 0 0 1.594 2.25 4.417 4.417 0 0 0 2.655.904c-1.659 1.302-3.544 1.953-5.655 1.953-.365 0-.726-.024-1.083-.072C2.869 20.317 5.194 21 7.725 21c1.358 0 2.644-.18 3.858-.541 1.215-.361 2.288-.855 3.22-1.482a13.564 13.564 0 0 0 2.525-2.19 12.232 12.232 0 0 0 1.851-2.697c.484-.964.853-1.958 1.107-2.982a12.624 12.624 0 0 0 .369-3.644 9.266 9.266 0 0 0 2.262-2.345 8.9 8.9 0 0 1-2.607.714z">
                                            </path>
                                        </svg>
                                        <h1 class="text-[14px]">Twitter</h1>
                                    </NuxtLink>
                                    <NuxtLink target="_blank" v-if="el.Wikipedia" :to="el.Wikipedia"
                                        class="flex items-start gap-3 socialMedia mt-3">
                                        <svg data-encore-id="icon" role="img" aria-label="External link"
                                            aria-hidden="false"
                                            class="Svg-sc-ytk21e-0 eJsVCw e-9541-icon oORVTPvg6eTQflVKKgw8 w-5 h-5"
                                            viewBox="0 0 24 24">
                                            <path
                                                d="M3 5a1 1 0 0 1 1-1h8v2H5v14h13v-8h2v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5z">
                                            </path>
                                            <path
                                                d="M22 2v5.95a1 1 0 1 1-2 0V5.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L18.586 4H16.05a1 1 0 0 1 0-2H22z">
                                            </path>
                                        </svg>
                                        <h1 class="text-[14px]">Wikipedia</h1>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="text-[#B3B3B3] text-[16px] text-start">
                            <h1 class=" whitespace-pre-line">{{ main.about.briefinfo }}</h1>
                            <div class="mt-5">
                                <div class="flex items-center gap-3"><img :src="main.artistimage" width="32px"
                                        class="rounded-full" alt="">
                                    <h1>Posted By {{ main.name }}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import artists from "../../static/artists.json";
import albums from "../../static/albums.json"
import FooterAbout from "~/components/little_comps/FooterAbout.vue";

definePageMeta({
    layout: 'default' // Ensures this page loads as a new full-page view
});

const router = useRouter()

const container = ref(null);
const text = ref(null);
const route = useRoute();
let popularsongs = []
let popularalbums = []
let singles = []
let albumsss = []
let compilations = []
let allalbumsofartist = []
let main = {};
const activeTab = ref('popular')
main = artists.find(artist => artist.path === route.params.id);

if (!main) {
    router.push('/');
    return
}

setTimeout(() => {
    const about = document.querySelector(".aboutartist");
    const modal = document.getElementById("imageModal");
    const modalContent = document.getElementById("modalContent");
    const closeButton = document.getElementById("closeButton");

    console.log(about);

    about.addEventListener("click", () => {
        const imageSrc = about.src;
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

let count = 1
for (let i of main.populartracks) {
    for (let j of albums) {
        for (let k of j['tracks']) {
            if (Array.isArray(k)) {
                for (let l of k) {
                    if (i == l.path) {
                        l.coverpath = j.coverpath
                        l.id = count
                        popularsongs.push(l)
                        count++
                        console.log(l);
                    }
                }
            } else {
                if (i == k.path) {
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


for (let i of main.discography.all) {
    for (let j of albums) {
        if (j.path == i) {
            allalbumsofartist.push(j)
        }
        console.log(allalbumsofartist);
        
    }
}



for (let i of main.discography.popular) {
    for (let j of albums) {
        if (i == j.path) {
            popularalbums.push(j)
        }
    }
}

for (let i of allalbumsofartist) {
    if (i.isSingle) {
        singles.push(i)
    }
}

for (let i of allalbumsofartist) {
    if (i.albumsinger == main.name && !i.isSingle) {
        albumsss.push(i)
    }
}

for (let i of allalbumsofartist) {
    if (i.albumsinger == main.name && i.isCompilation) {
        compilations.push(i)
    }
}

let albumslist = computed(() => {
    switch (activeTab.value) {
        case 'albums':
            return albumsss
        case 'singles':
            return singles
        case 'compilation':
            return compilations
        default:
            return popularalbums
    }
})

const setActiveTab = (tab) => {
    activeTab.value = tab
}

onMounted(() => {
    console.log('Current Page Layout:', route.meta.layout);
})

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

// onMounted(() => {
//     const box1 = document.querySelector('.box1');
//     const box2 = document.querySelector('.box2');

//     if (box1 && box2) {
//         const box1Height = box1.offsetHeight;

//         box2.style.height = `${box1Height}px`;
//         box1.style.marginTop = `-${box1Height}px`
//     }
// });

const toggleFollow = async () => {
    try {
        const response = await $fetch('/api/update-follow-status', {
            method: 'POST',
            body: { id: main.id }
        });

        if (response.success) {
            console.log('✅ Follow status updated successfully');
        } else {
            console.error('❌ Failed to update data:', response.message);
        }
    } catch (error) {
        console.error('Error in API request:', error);
    }
};



const wrapped = ref(null);
const opacitySticky = ref(0);

// Handles scroll event and updates opacity
const handleScroll = () => {
    if (!wrapped.value) return;
    const scrollTop = wrapped.value.scrollTop;
    opacitySticky.value = Math.min(scrollTop / (285 - 68), 1); // Fade-in effect
};


// Add event listener when mounted
onMounted(() => {
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
    title: `${main.name} | Spotify`
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

.wrapped {
    color: white;
    border-radius: 10px;
    overflow-y: scroll;
    height: calc(100vh - 180px);
}

.artist-container {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    /* Ensure container width is defined */
}

.artistname {
    font-weight: bold;
    font-family: SpotifyMixExtrabold;
    letter-spacing: -4px;
    user-select: none;
    margin-bottom: -10px;
    overflow: hidden;
    display: inline-block;
}

.followw {
    border: 1px solid #7a7c7b;
    border-radius: 9999px;
    font-family: SpotifyMixExtrabold;
}

.followw span {
    font-size: 14px;
    font-family: SpotifyMixBold;
}

.followw:hover {
    cursor: pointer;
    border: 1px solid white;
    scale: 1.03;
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

.inactiveB {
    background-color: #2a2a2a;

    &:hover {
        background-color: #333333;
        cursor: pointer;
    }

    &:active {
        background-color: #3d3d3d;
    }
}

.activeB {
    background-color: white;
    color: black;

    &:hover {
        background-color: #f0f0f0;
        cursor: pointer;
    }

    &:active {
        background-color: #e1e1e1;
    }
}

@media only screen and (max-width: 1343px) {
    .artistmain {
        grid-template-columns: 1fr;
    }
}

::selection {
    background-color: #1ED760;
    color: white;
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

.aboutartist {
    display: grid;
    grid-template-rows: 50% 50%;
}

@media only screen and (max-width: 1343px) {
    .aboutartist {
        width: 80%;
    }
}

@media only screen and (max-width: 1140px) {
    .aboutartist {
        width: 100%;
    }
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
    width: 768px;
    height: 80vh;
    overflow-y: scroll;
    border-radius: 9999px;
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

.socials svg path {
    fill: white;
}

.socialMedia:hover {
    cursor: pointer;
}

.socialMedia:hover h1 {
    text-decoration: underline;
}

.sticky-header {
    position: sticky;
    /* Instead of sticky */
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    padding: 16px 24px;
    font-size: 20px;
    font-weight: bold;
    opacity: 0;
    /* Initially hidden */
}
</style>