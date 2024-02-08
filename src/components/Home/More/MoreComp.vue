<script setup>
import "./MoreComp.css"
import { all } from "@/components";
import { spliceAll } from "@/services/service";
function click() {
    console.log(all.spliceAll)
    all.buttonFalse = !all.buttonFalse
    all.modelFalse = !all.modelFalse
    console.log(all.modelFalse)
}

spliceAll()
</script>

<template>
    <section class="more">
        <div class="container">
            <div class="more__wrapper">
                <ul class="goods__list">
                    <li class="goods__item" v-show="all.modelFalse" v-for="item in all.spliceAll" :key="item.id">
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
            <span class="more__border"></span>
            <p class="more__text" @click="click" v-show="all.buttonFalse">{{ $t("hero.more")}}</p>
        </div>
    </div>
</section>
</template>