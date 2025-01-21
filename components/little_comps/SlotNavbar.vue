<template>
    <nuxt-link to="/" class="nav-button" exact-active-class="active">All</nuxt-link>
    <nuxt-link to="/music" class="nav-button" exact-active-class="active">Music</nuxt-link>
    <nuxt-link to="/podcasts" class="nav-button" exact-active-class="active">Podcasts</nuxt-link>
</template>


<style>
.nav-button {
    background-color: #FFFFFF1A;
    color: white;
    text-decoration: none;
    padding: 4px 12px;
    border-radius: 9999px;
    transition: background-color 0.3s ease;
}

.nav-button:hover{
    background-color: #ffffff24;
}

.nav-button.active {
    background-color: white;
    color: black;
}
</style>