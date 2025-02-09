<template>
    <div class="grid gap-2 p-2 big-container">

        <Header />
        <div class="grid-container">
            <Sidebar />
            <div class="bg-black text-white flex items-center justify-center">
                <div class="text-center">
                    <p style="font-size: 100px; margin-bottom: -20px; margin-top: -20px;">404</p>
                    <p class="text-3xl font-semibold">Oops! This page doesn't exist.</p>
                    <p class="text-gray-400 mt-2 mb-4">Maybe the link is broken or the page has been removed.</p>

                    <NuxtLink to="/"
                        class="mt-6 inline-flex items-center px-6 py-2 bg-green-500 text-black font-bold rounded-full shadow-lg hover:bg-green-400 transition-transform transform hover:scale-105">
                        Back to Home
                    </NuxtLink>
                </div>
            </div>
        </div>
        <Footer />

    </div>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue';


</script>

<style scoped>
* {
    scroll-behavior: smooth;
}

.big-container {
    display: grid;
    grid-template-rows: 70px 1fr 70px;
    grid-template-areas:
        "header"
        "sidebar main"
        "footer footer";
    height: 99vh;
}

.grid-container {
    display: grid;
    grid-template-columns: 64px 1fr;
    grid-template-areas:
        "header"
        "sidebar main"
        "footer footer";
    width: 100%;
    gap: 12px;
}
</style>