<script setup>
import { all } from "@/components"
import { getAll } from "@/services/service"
import "../../Home/Goods/GoodsComp.css"
import "./SelectComp.css"
getAll()
</script>

<template>
    <section class="select">
        <div class="container">
            <div class="select__wrapper">
                <ul class="goods__list">
                    <li class="goods__item green" v-for="item in all.getAll.splice(16, 20)" :key="item.id">
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
            <ul class="goods__list">
                <li class="goods__item" v-for="item in all.getAll.splice(4,16)" :key="item.id">
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
