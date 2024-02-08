<script setup>
import { all } from "@/components"
import { loginPost } from "@/services/service"
import "./LoginComp.css"
function click() {
    loginPost()
}

if (window.localStorage.getItem('token')) {
    location.href = "/"
}
</script>

<template>
    <section class="login">
        <div class="container">
            <div class="login__wrapper">
                <div class="login__text-wr">
                    <h2 class="login__title">Ваша регистрация завершена!</h2>
                    <p class="login__text">
                        Вы успешно зарегистрированы на сайте киви и ваше пароль 
                        отправлен в виде смс на ваше телефонный номер
                    </p>
                    <div class="login__input-wr">
                        <p class="login__paragraph">Введите email или номер телефона</p>
                        <input class="login__input-email" v-model="all.email" placeholder="99891 167 27 23" type="text">
                        <p class="login__paragraph-pass">Пароль</p>
                        <input class="login__input-password" v-model="all.password" placeholder="***********" type="text">
                    </div>
                    <button class="login__button" @click="click">Войти</button>
                    <p class="login__border-text">или</p>
                    <p class="login__text-sign">Восстоновить ваше пароль</p>
                </div>
                <div class="login__wr-image">
                    <img class="login__img" src="/images/login-img.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>