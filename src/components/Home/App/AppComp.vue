<script setup>
import "./AppComp.css"
</script>

<template>
    <section class="app">
        <div class="container">
            <div class="app__wrapper">
                <router-link class="app__logo-href" to="/">
                    <img class="app__logo" src="/images/black-logo.svg" alt="">
                    <p class="app__logo-text">{{ $t("header.title") }}</p>
                </router-link>
                <p class="app__text">
                    {{ $t("mark.text") }}
                </p>
                <div class="app__button-wr">
                    <button class="app__button">
                        <div class="app__button-wr-image">
                            <img class="app__button-img" src="/images/icon-apple.svg" alt="">
                        </div>
                        <div class="app__button-wr-text">
                            <p class="app__button-text">Available on the</p>
                            <p class="app__button-title">Apple Store</p>
                        </div>
                    </button>
                    <button class="app__button">
                        <div class="app__button-wr-image">
                            <img class="app__button-img google" src="/images/google.svg" alt="">
                        </div>
                        <div class="app__button-wr-text">
                            <p class="app__button-text">Android App on</p>
                            <p class="app__button-title google__text">GOOGLE PLAY</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>