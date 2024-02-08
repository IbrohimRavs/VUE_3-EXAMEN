<script setup>
import "./HomeComp.css"
</script>

<template>
    <section class="home">
        <div class="container">
            <div class="home__wrapper">
                <router-link class="home__title" to="/">{{ $t('hero.title')}}</router-link>
                <router-link class="home__title" to="/offer">{{ $t('hero.text')}}</router-link>
                <span class="home__border"></span>
            </div>
        </div>
    </section>
</template>