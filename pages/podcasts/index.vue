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
</div>
</template>

<script setup>
import SlotNavbar from '~/components/little_comps/SlotNavbar.vue';
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
</style>