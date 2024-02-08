<script setup>
import { all } from "@/components";
import { spliceAll } from "@/services/service";
import "./SpliceComp.css"
spliceAll()
function click() {
    window.location.reload()
}
</script>

<template>
    <section class="splice">
        <div class="container">
            <div class="splice__wrapper">
                <ul class="splice__list">
                    <li class="splice__item" v-for="item in all.spliceAll" :key="item.id" @click="click">
                        <router-link :to="{
                            name:'cardId',
                            params: {
                                id: item.id
                            }
                        }">
                        <img class="splice__item-img" :src="item.image" :alt="item.title">
                        <p class="splice__item-title">{{ item.title }}</p>
                        <p class="splice__item-text">Вчера 22:55</p>
                        <p class="splice__item-price">{{ item.price + "$" }}</p>
                    </router-link>
                </li>                
            </ul>
        </div>
    </div>
</section>
</template>