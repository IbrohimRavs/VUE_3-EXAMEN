<script setup>
import "./SelectionComp.css"
</script>

<template>
    <section class="selection">
        <div class="container">
            <div class="selection__wrapper">
                <div class="selection__wr-text">
                    <p class="selection__title">Вы выбрали:</p>
                    <p class="selection__text">Недвижимость   »   </p>
                    <p class="selection__text">Дома   »   </p>
                    <p class="selection__text">Аренда долгосрочная</p>
                </div>
                <button class="selection__button">
                    <div class="selection__button-img-wr">
                        <img class="selection__button-img" src="/images/kar.svg" alt="button img">
                    </div>
                    <p class="selection__button-text">Изменить</p>
                </button>
            </div>
        </div>
    </section>
</template>