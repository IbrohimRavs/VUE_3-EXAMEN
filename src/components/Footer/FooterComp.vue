<script setup>
import { all } from ".."
import "./FooterComp.css"
function click() {
    all.listOneFalse = !all.listOneFalse
}
function button() {
    all.listTwoFalse = !all.listTwoFalse
}
function three() {
    all.listThreeFalse = !all.listThreeFalse
}
function four() {
    all.listFourFalse = !all.listFourFalse
}
function five() {
    all.listFiveFalse = !all.listFiveFalse
}
function six() {
    all.listSixFalse = !all.listSixFalse
}

function seven() {
    all.listSevenFalse = !all.listSevenFalse
}

function eight() {
    all.listEightFalse = !all.listEightFalse
}

</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <ul class="footer__list">
                    <li class="footer__item-red">
                        <router-link to="/" @click="click" class="footer__item-header">{{ $t("footer.list__1.item__1")}}</router-link>
                        <div class="footer__item-wr" v-show="all.listOneFalse">
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__1.item__2")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__1.item__3")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__1.item__4")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__1.item__5")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__1.item__6")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__1.item__7")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__1.item__8")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__1.item__9")}}</router-link>
                        </div>
                    </li>
                    <li class="footer__item-yellow">
                        <router-link to="/" @click="button" class="footer__item-header">{{ $t("footer.list__2.item__1")}}</router-link>
                        <div class="footer__item-wr" v-show="all.listTwoFalse">
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__2.item__2")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__2.item__3")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__2.item__4")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__2.item__5")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__2.item__6")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__2.item__7")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__2.item__8")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__2.item__9")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__2.item__10")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__2.item__11")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__2.item__12")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__2.item__13")}}</router-link>
                        </div>
                    </li>
                    <li class="footer__item-red">
                        <router-link to="/" @click="three" class="footer__item-header">{{ $t("footer.list__3.item__1")}}</router-link>
                        <div class="footer__item-wr" v-show="all.listThreeFalse">
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__3.item__2")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__3.item__3")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__3.item__4")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__3.item__5")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__3.item__6")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__3.item__7")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__3.item__8")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__3.item__9")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__3.item__10")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__3.item__11")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__3.item__12")}}</router-link>
                        </div>
                    </li>
                    <li class="footer__item-orange">
                        <router-link to="/" @click="four" class="footer__item-header">{{ $t("footer.list__4.item__1")}}</router-link>
                        <div class="footer__item-wr" v-show="all.listFourFalse">
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__4.item__2")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__4.item__3")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__4.item__4")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__4.item__5")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__4.item__6")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__4.item__7")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__4.item__8")}}</router-link>
                        </div>
                        
                    </li>
                </ul>
                <ul class="footer__list">
                    <li class="footer__item-green" style="margin-top: -90px">
                        <router-link to="/" @click="five" class="footer__item-header">{{ $t("footer.list__5.item__1")}}</router-link>
                        <div class="footer__item-wr" v-show="all.listFiveFalse">
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__5.item__2")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__5.item__3")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__5.item__4")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__5.item__5")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__5.item__6")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__5.item__7")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__5.item__8")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__5.item__9")}}</router-link>
                        </div>
                        
                    </li>
                    <li class="footer__item-fiolet" style="margin-left: -14px; margin-top: 40px;">
                        <router-link to="/" @click="six" class="footer__item-header">{{ $t("footer.list__6.item__1")}}</router-link>
                        <div class="footer__item-wr" v-show="all.listSixFalse">
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__6.item__2")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__6.item__3")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__6.item__4")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__6.item__5")}}</router-link>
                        </div>
                    </li>
                    <li class="footer__item-aqua">
                        <router-link to="/" @click="seven" class="footer__item-header">{{ $t("footer.list__7.item__1")}}</router-link>
                        <div class="footer__item-wr" v-show="all.listSevenFalse">
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__7.item__2")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__7.item__3")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__7.item__4")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__7.item__5")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__7.item__6")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__7.item__7")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__7.item__8")}}</router-link>
                        </div>
                    </li>
                    <li class="footer__item-blue">
                        <router-link to="/" @click="eight" class="footer__item-header">{{ $t("footer.list__8.item__1")}}</router-link>
                        <div class="footer__item-wr" v-show="all.listEightFalse">
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__8.item__2")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__8.item__3")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__8.item__4")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__8.item__5")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__8.item__6")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__8.item__7")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__8.item__8")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__8.item__9")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__8.item__10")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__8.item__11")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__8.item__12")}}</router-link>
                            <router-link to="/" class="footer__item-text">{{ $t("footer.list__8.item__13")}}</router-link>
                        </div>
                    </li>
                </ul>
                <div class="footer__wr-list">
                    <router-link class="footer__wr-list-text" to="/">Подать объявление</router-link>
                    <router-link class="footer__wr-list-text" to="/products">Объявления</router-link>
                    <router-link class="footer__wr-list-text" to="/add-product">Магазины</router-link>
                    <router-link class="footer__wr-list-text" to="/help">Помощь</router-link>
                    <router-link class="footer__wr-list-text" to="/servicy">Безопасность</router-link>
                    <router-link class="footer__wr-list-text" to="/reklama">Реклама на сайте</router-link>
                    <router-link class="footer__wr-list-text" to="/biznes">О компании</router-link>
                </div>
            </div>
        </div>
    </footer>
</template>