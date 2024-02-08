<script setup>
import { all } from "@/components"
import { getAll } from "../../../services/service.js"
import "./GoodsComp.css"
getAll()
</script>

<template>
    <section class="goods">
        <div class="container">
            <div class="goods__wrapper">
                <ul class="goods__list">
                    <li class="goods__item" v-for="item in all.getAll.splice(0, 16)" :key="item.id">
                        <router-link :to="{
                            name:'cardId',
                            params: {
                                id: item.id
                            }
                        }">
                        <img class="goods__item-img" :src="item.image" :alt="item.title">
                        <p class="goods__item-title">{{ item.title }}</p>
                        <p class="goods__item-text">Вчера 22:55</p>
                        <p class="goods__item-price">{{ item.price + "$" }}</p>
                    </router-link>
                </li>                
            </ul>
        </div>
    </div>
</section>
</template>