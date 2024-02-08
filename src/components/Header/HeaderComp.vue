<script setup>
import "./HeaderComp.css"
import { useI18n } from "vue-i18n"
import { all } from ".."
const { locale } = useI18n({ useScope: "global"})
function ru () {
    locale.value = 'ru'
    localStorage.setItem("lang", locale.value)
}


function oz () {
    locale.value = 'uz'
    localStorage.setItem("lang", locale.value)
}

if (window.localStorage.getItem('token')){
    all.allShow = false
    all.userShow = true
}
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <router-link to="/" class="header__logo-wr">
                    <img src="/images/logo.svg" alt="logo" class="header__logo">
                    <p class="header__logo-text">{{ $t('header.title') }}</p>
                </router-link>
                
                <ul class="header__list"> 
                    <li class="header__item">
                        <router-link to="/products" class="header__item-text">{{ $t('header.item__1') }}</router-link>
                    </li>
                    <li class="header__item">
                        <router-link to="/add-product" class="header__item-text">{{ $t('header.item__2') }}</router-link>
                    </li> 
                    <li class="header__item">
                        <router-link to="/biznes" class="header__item-text">{{ $t('header.item__3') }}</router-link>
                    </li>
                    <li class="header__item">
                        <router-link to="/asasd" class="header__item-text">{{ $t('header.item__4') }}</router-link>
                    </li>
                </ul>
                <div class="header__lang-wr">
                    <p class='header__lang-ru mode' @click="ru">Рус</p>
                    <span class="header__border-lang"></span>
                    <p class="header__lang-uz" @click="oz">O’z</p>
                </div>
                <div class="header__sign-wr" v-show="all.allShow">
                    <router-link class="header__sign" to="/login">
                        {{ $t('header.item__5') }}
                    </router-link>
                    <router-link class="header__reg" to="/login">
                        {{ $t('header.item__6') }}
                    </router-link>
                </div>
                <div class="header__user-wr" v-show="all.userShow">
                    <router-link class="header__user-text" to="/profile">
                        {{ $t('header.item__7') }}
                        <img class="header__user-img" src="/images/user.png" alt="">
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>