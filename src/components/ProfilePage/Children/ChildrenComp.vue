<script setup>
import "./ChildrenComp.css"
</script>

<template>
    <section class="children">
        <div class="container">
            <div class="children__wrapper">
                <div class="children__wr-text">
                    <router-link class="children__text" to="/profile/">Объявления</router-link>
                    <router-link class="children__text" to="/profile/message">Сообщения</router-link>
                    <router-link class="children__text" to="/profile/product">Платежи и счёт</router-link>
                    <router-link class="children__text" to="/profile/settings">Настройки</router-link>
                    <router-link class="children__text" to="/profile/login">Мой бизнес</router-link>
                </div>
            </div>
        </div>
    </section>
</template>