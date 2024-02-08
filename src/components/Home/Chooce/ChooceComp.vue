<script setup>
import { all } from "@/components"
import { spliceAll, splice } from "@/services/service"
import "./ChooceComp.css"
import "./ChooceComp.css"
all
function click() {
    console.log(all.splice)
    all.theButtonFalse = !all.theButtonFalse
    all.theModelFalse = !all.theModelFalse
    console.log(all.theModelFalse)
}
splice()

</script>

<template>
    <section class="chooce">
        <div class="container">
            <div class="chooce__wrapper">
                <ul class="goods__list">
                    <li class="goods__item" v-for="item in all.spliceAll" :key="item.id">
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
                <li class="goods__item" v-show="all.theModelFalse" v-for="item in all.splice" :key="item.id">
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
            <p class="more__text" @click="click" v-show="all.theButtonFalse">{{ $t("hero.more")}}</p>
        </div>
    </div>
</section>
</template>