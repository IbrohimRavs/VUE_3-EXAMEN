<script setup>
import "./InpComp.css"
</script>

<template>
    <section class="inp">
        <div class="container">
            <div class="inp__wrapper">
                <div class="inp__wr-input">
                    <select class="inp__select">
                        <option class="inp__select-value" value="Любая категория">{{ $t('inp.item__1') }}</option>
                    </select>
                    <span class="inp__select-border"></span>
                    <input class="inp__input" type="text" :placeholder=" $t('inp.item__2') ">
                    <span class="inp__input-border"></span>
                    <select class="inp__select-last">
                        <option class="inp__select-last-value" value="Любая категория">{{ $t('inp.item__3') }}</option>
                    </select>
                    <button class="inp__select-button">{{ $t('inp.item__4') }}</button>
                </div>
                <button class="inp__button">
                    <div class="inp__button-wr-img">
                        <img class="inp__button-img" src="/images/plus.svg" alt="">
                    </div>
                    <p class="inp__button-text">{{ $t('inp.item__5') }}</p>
                </button>
            </div>
        </div>
    </section>
</template>