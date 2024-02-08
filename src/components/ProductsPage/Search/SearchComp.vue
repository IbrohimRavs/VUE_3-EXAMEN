<script setup>
import "./SearchComp.css"
</script>

<template>
    <section class="search">
        <div class="container">
            <div class="search__wrapper">
                <h2 class="search__title">{{ $t('search.item__1') }}</h2>
            </div>
            <div class="search__wr-all">
                <div class="search__wr-mini">
                    <p class="search__mini-title">{{ $t('search.item__2') }}</p>
                    <p class="search__mini-text">{{ $t('search.item__3') }}</p>
                </div>
                <div class="search__wr-mini">
                    <p class="search__mini-title">{{ $t('search.item__2') }}</p>
                    <p class="search__mini-text">{{ $t('search.item__3') }}</p>
                </div>
                <div class="search__wr-mini">
                    <p class="search__mini-title">{{ $t('search.item__2') }}</p>
                    <p class="search__mini-text">{{ $t('search.item__3') }}</p>
                </div>
                <div class="search__wr-mini">
                    <p class="search__mini-title">{{ $t('search.item__2') }}</p>
                    <p class="search__mini-text">{{ $t('search.item__3') }}</p>
                </div>
            </div>
        </div>
    </section>
</template>