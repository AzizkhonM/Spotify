<template>
    <div class="grid gap-2 p-2 big-container">

        <Header />
        <div class="grid-container">
            Salom
            <slot/>
        </div>
        <Footer/>

    </div>
</template>

<script setup>
import Slider from '~/components/Slider.vue';

</script>

<style scoped>
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