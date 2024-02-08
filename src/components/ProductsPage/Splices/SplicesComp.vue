<script setup>
import { all } from "@/components"
import { getAll } from "@/services/service"
import "./SplicesComp.css"
getAll()
</script>

<template>
    <section class="splices">
        <div class="container">
            <div class="splices__wrapper">
                <h2 class="splices__title">{{ $t('splices.item__1') }}</h2>
                <ul class="splices__list">
                    <li class="splices__item" v-for="item in all.getAll.splice(0, 3)" :key="item.id">
                        <router-link :to="{
                            name: 'cardId',
                            params:{
                                id: item.id   
                            }
                        }">
                        <div class="splices__item-wr">
                            <img class="splices__item-image" :src="item.image" :alt="item.title">
                            <p class="splices__item-text">{{ item.title }}</p>
                            <p class="splices__item-time">Вчера 22:55</p>
                            <p class="splices__item-price">{{ item.price + ' $' }}</p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</section>
</template>