<script setup>
import "../../Home/Home/HomeComp.css"
import "./ProdFoot.css"
</script>

<template>
    <section class="prodfoot">
        <div class="container">
            <div class="proodfoot__wrapper">
                <div class="home__wrapper">
                    <router-link class="home__title" to="">Похожие объявления</router-link>
                    <router-link class="home__title" :to="{
                        name: 'CardIdName',
                        
                    }">Обьявление автора</router-link>
                    <span class="home__border"></span>
                </div>
            </div>
        </div>
    </section>
</template>