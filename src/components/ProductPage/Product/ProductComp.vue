<script setup>
import { all } from "@/components"
import { getById } from "@/services/service"
import { useRoute } from "vue-router"
import "./ProductComp.css"
let route = useRoute()
let id = route.params.id
getById(id)
</script>


<template>
    <section class="product">
        <div class="container">
            <div class="product__wrapper">
                <h2 class="product__title">{{ all.getById.title }}</h2>
                <div class="product__wr-all">
                    <div class="product__img-wr-all">
                        <div class="product__img-mini">
                            <img class="product__mini-image" :src="all.getById.image" :alt=" all.getById.title ">
                            <img class="product__mini-image" :src="all.getById.image" :alt=" all.getById.title ">
                            <img class="product__mini-image" :src="all.getById.image" :alt=" all.getById.title ">
                            <img class="product__mini-image" :src="all.getById.image" :alt=" all.getById.title ">
                            <img class="product__mini-image" :src="all.getById.image" :alt=" all.getById.title ">
                        </div>
                        <img class="product__img" :src="all.getById.image" alt="">
                    </div>
                    <div class="product__text-wr-all">
                        <div class="product__wr-head">
                            <p class="product__head-title">{{ $t("product.item__1")}}</p>
                            <p class="product__head-text">{{ $t("product.item__2")}}</p>
                        </div>
                        <p class="product__text-all-title">{{ all.getById.price + ' $' }}</p>
                        <p class="product__text-all-location">{{ $t("product.item__3")}}</p>
                        <div class="product__button-wr">
                            <button class="product__text-all-button">
                                <p class="product__button-title">99891 166 ****</p>
                                <p class="product__button-text">{{ $t("product.item__4")}}</p>
                            </button>
                            <button class="product__text-all-button">
                                <p class="product__button-title">99891 166 ****</p>
                                <p class="product__button-text">{{ $t("product.item__5")}}</p>
                            </button>
                        </div>
                        <div class="product__text-wr-avtor">
                            <p class="product__text-avtor-text">{{ $t("product.item__6")}}</p>
                            <p class="product__text-avtor-title">{{ $t("product.item__7")}}</p>
                        </div>
                        <div class="product__button-wr-avtor">
                            <button class="product__avtor-button">{{ $t("product.item__8")}}</button>
                            <button class="product__avtor-button">{{ $t("product.item__9")}}</button>
                        </div>
                        <ul class="product__list">
                            <li class="product__item">
                                <p class="product__item-title">{{ $t("product.item__10")}}</p>
                                <p class="product__item-text">6</p>
                            </li>
                            <li class="product__item">
                                <p class="product__item-title">{{ $t("product.item__11")}}</p>
                                <p class="product__item-text">40 м2</p>
                            </li>
                            <li class="product__item">
                                <p class="product__item-title">{{ $t("product.item__12")}}</p>
                                <p class="product__item-text">32</p>
                            </li>
                            <li class="product__item">
                                <p class="product__item-title">{{ $t("product.item__13")}}</p>
                                <p class="product__item-text">6</p>
                            </li>
                            <li class="product__item">
                                <p class="product__item-title">{{ $t("product.item__14")}}</p>
                                <p class="product__item-text">{{ $t("product.item__15")}}</p>
                            </li>
                            <li class="product__item">
                                <p class="product__item-title">{{ $t("product.item__16")}}</p>
                                <p class="product__item-text">32</p>
                            </li>
                            <li class="product__item">
                                <p class="product__item-title">{{ $t("product.item__17")}}</p>
                                <p class="product__item-text blue">{{ $t("product.item__18")}}</p>
                            </li>
                            <li class="product__item">
                                <p class="product__item-title">{{ $t("product.item__19")}}</p>
                                <p class="product__item-text blue">{{ $t("product.item__20")}}</p>
                            </li>
                            <li class="product__item">
                                <p class="product__item-title">{{ $t("product.item__21")}}</p>
                                <p class="product__item-text">{{ $t("product.item__22")}}</p>
                            </li>
                            <li class="product__item">
                                <p class="product__item-title">{{ $t("product.item__23")}}</p>
                                <p class="product__item-text blue blue-max">{{ $t("product.item__24")}}</p>
                            </li>
                            <li class="product__item">
                                <p class="product__item-title">{{ $t("product.item__25")}}</p>
                                <p class="product__item-text blue">{{ $t("product.item__26")}}</p>
                            </li>
                            <li class="product__item">
                                <p class="product__item-title">{{ $t("product.item__27")}}</p>
                                <p class="product__item-text">32</p>
                            </li>
                            <li class="product__item">
                                <p class="product__item-title">{{ $t("product.item__28")}}</p>
                                <p class="product__item-text blue-end">{{ $t("product.item__29")}}</p>
                            </li>
                        </ul>
                        <p class="product__text">{{ $t("product.item__30")}}</p>
                        <p class="product__text">{{ $t("product.item__31")}}</p>
                        <div class="product__wr-text">
                            <p class="product__footer-text">{{ $t("product.item__32")}}</p>
                            <p class="product__footer-text red">{{ $t("product.item__33")}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>