<script setup>
import "./HeroComp.css"
</script>

<template>
    <section class="hero">
        <div class="container">
            <div class="hero__wrapper">
                <ul class="hero__list">
                    <li class="hero__item">
                        <img src="/images/Airplane_one.svg" alt="" class="hero__item-img">
                        <p class="hero__text">{{ $t('home.item__1') }}</p>
                    </li>
                    <li class="hero__item">
                        <img src="/images/Store.svg" alt="" class="hero__item-img store">
                        <p class="hero__text">{{ $t('home.item__2') }}</p>
                    </li>
                    <li class="hero__item">
                        <img src="/images/Terminal.svg" alt="" class="hero__item-img terminal">
                        <p class="hero__text">{{ $t('home.item__3') }}</p>
                    </li>
                    <li class="hero__item">
                        <img src="/images/Briefcase.svg" alt="" class="hero__item-img briefcase">
                        <p class="hero__text">{{ $t('home.item__4') }}</p>
                    </li>
                    <li class="hero__item">
                        <img src="/images/Gifts.svg" alt="" class="hero__item-img gifts">
                        <p class="hero__text">{{ $t('home.item__5') }}</p>
                    </li>
                    <li class="hero__item">
                        <img src="/images/Challenge.svg" alt="" class="hero__item-img in">
                        <p class="hero__text">{{ $t('home.item__6') }}</p>
                    </li>
                    <li class="hero__item">
                        <img src="/images/In.svg" alt="" class="hero__item-img ">
                        <p class="hero__text">{{ $t('home.item__7') }}</p>
                    </li>
                    <li class="hero__item">
                        <img src="/images/Gaming.svg" alt="" class="hero__item-img gaming">
                        <p class="hero__text">{{ $t('home.item__8') }}</p>
                    </li>
                    <li class="hero__item">
                        <img src="/images/Man.svg" alt="" class="hero__item-img man">
                        <p class="hero__text">{{ $t('home.item__9') }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>