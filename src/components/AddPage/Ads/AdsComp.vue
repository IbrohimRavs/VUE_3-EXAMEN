<script setup>
import { all } from "@/components"
import "./AdsComp.css"
function click() {
    console.log('price ' + all.price)
    console.log('curs ' + all.curs);
    console.log('dogovor ' + all.dogovor);
    console.log('room ' + all.room);
    console.log('room ' + all.roomTwo);
    console.log('room ' + all.roomThree);
    console.log('В городе ' + all.checkOne);
    console.log('Вдоль трассы ' + all.checkTwo);
    console.log('В дачном массиве ' + all.checkThree);
    console.log('В пригороде ' + all.checkFour);
    console.log('Возле водоема, реки ' + all.checkFive);
    console.log('На закрытой территории ' + all.checkSix);
    console.log('В сельской местности ' + all.checkSeven);
    console.log('В предгорьях ' + all.checkEight);
    console.log('Этажность дома* ' + all.home);
    console.log('Высота потолков ' + all.height);
    console.log('Площадь участка* ' + all.sqaure);
    console.log('Авторский проект ' + all.boxOne);
    console.log('Требует ремонта ' + all.boxTwo);
    console.log('Черновая отделка ' + all.boxThree);
    console.log('Средний ремонт ' + all.boxFour);
    console.log('Предчистовая отделка ' + all.boxFive);
    console.log('Под снос ' + all.boxSix);
    console.log('Евроремонт ' + all.boxSeven);
    console.log('Не достроен ' + all.boxEight);
    console.log('Тип дома ' + all.type);
    console.log('Электричество ' + all.Electricity);
    console.log('Eсть возможность  ' + all.input);
    console.log('Регион  ' + all.city);
    console.log('Город / Район  ' + all.region);
    console.log('Телефонный номер  ' + all.tel);
    console.log('Email-адрес  ' + all.adres);
    console.log('Контактный лицо  ' + all.face);
}
</script>

<template>
    <section class="ads__wr">
        <div class="container">
            <div class="ads__wrapper">
                <div class="ads__price-wr">
                    <p class="ads__price-text">{{ $t('ads.item__1') }}</p>
                    <div class="ads__price-wr-input">
                        <input class="ads__price-number-inp" v-model="all.price" placeholder="400 000"  type="number">
                        <select class="ads__price-select" v-model="all.curs">
                            <option value="Сум">{{ $t('ads.item__2') }}</option>
                        </select>
                        <input class="ads__price-checkbox" v-model="all.dogovor" type="checkbox">
                        <p class="ads__price-title">{{ $t('ads.item__3') }}</p>
                    </div>
                </div>
                <div class="ads__room-wr">
                    <p class="ads__room-text">{{ $t('ads.item__4') }}</p>
                    <div class="ads__room-wr-input">
                        <input class="ads__room-input" v-model="all.room" placeholder="4" type="number">
                        <input class="ads__room-input" v-model="all.roomTwo" placeholder="900" type="number">
                        <input class="ads__room-input" v-model="all.roomThree" placeholder="90" type="number">
                    </div>
                </div>
                <div class="ads__location-wr">
                    <p class="ads__location-title">{{ $t('ads.item__5') }}</p>
                    <div class="ads__location-wr-input">
                        <div class="ads__location-wr-mini"> 
                            <input class="ads__location-checkbox" v-model="all.checkOne" type="checkbox">
                            <p class="ads__location-text">{{ $t('ads.item__6') }}</p>
                            <input class="ads__location-checkbox" v-model="all.checkTwo" type="checkbox">
                            <p class="ads__location-text">{{ $t('ads.item__7') }}</p>
                            <input class="ads__location-checkbox" v-model="all.checkThree" type="checkbox">
                            <p class="ads__location-text">{{ $t('ads.item__8') }}</p>
                        </div>
                        <div class="ads__location-wr-mini"> 
                            <input class="ads__location-checkbox" v-model="all.checkFour" type="checkbox">
                            <p class="ads__location-text">{{ $t('ads.item__9') }}</p>
                            <input class="ads__location-checkbox" v-model="all.checkFive" type="checkbox">
                            <p class="ads__location-text">{{ $t('ads.item__10') }}</p>
                            <input class="ads__location-checkbox" v-model="all.checkSix" type="checkbox">
                            <p class="ads__location-text">{{ $t('ads.item__11') }}</p>
                        </div>
                        <div class="ads__location-wr-mini"> 
                            <input class="ads__location-checkbox" v-model="all.checkSeven" type="checkbox">
                            <p class="ads__location-text">{{ $t('ads.item__12') }}</p>
                            <input class="ads__location-checkbox" v-model="all.checkEight" type="checkbox">
                            <p class="ads__location-text">{{ $t('ads.item__13') }}</p>
                        </div>
                    </div>
                </div>
                <div class="ads__home-wr">
                    <div class="ads__home-text-wr">
                        <p class="ads__home-text">{{ $t('ads.item__14') }}</p>
                        <p class="ads__home-text">{{ $t('ads.item__15') }}</p>
                        <p class="ads__home-text">{{ $t('ads.item__16') }}</p>
                    </div>
                    <div class="ads__home-wr-input">
                        <input class="ads__home-input" v-model="all.home" placeholder="4" type="number">
                        <input class="ads__home-input" v-model="all.height" placeholder="2m" type="text">
                        <input class="ads__home-input" v-model="all.square" placeholder="342" type="number">
                    </div>
                </div>
                <div class="ads__state-wr">
                    <p class="ads__state-title">{{ $t('ads.item__17') }}</p>
                    <div class="ads__location-wr-input">
                        <div class="ads__location-wr-mini"> 
                            <input class="ads__location-checkbox" v-model="all.boxOne" type="checkbox">
                            <p class="ads__location-text">{{ $t('ads.item__18') }}</p>
                            <input class="ads__location-checkbox" v-model="all.boxTwo" type="checkbox">
                            <p class="ads__location-text">{{ $t('ads.item__19') }}</p>
                            <input class="ads__location-checkbox" v-model="all.boxThree" type="checkbox">
                            <p class="ads__location-text">{{ $t('ads.item__20') }}</p>
                        </div>
                        <div class="ads__location-wr-mini"> 
                            <input class="ads__location-checkbox" v-model="all.boxFour" type="checkbox">
                            <p class="ads__location-text">{{ $t('ads.item__21') }}</p>
                            <input class="ads__location-checkbox" v-model="all.boxFive" type="checkbox">
                            <p class="ads__location-text">{{ $t('ads.item__22') }}</p>
                            <input class="ads__location-checkbox" v-model="all.boxSix" type="checkbox">
                            <p class="ads__location-text">{{ $t('ads.item__23') }}</p>
                        </div>
                        <div class="ads__location-wr-mini"> 
                            <input class="ads__location-checkbox" v-model="all.boxSeven" type="checkbox">
                            <p class="ads__location-text">{{ $t('ads.item__24') }}</p>
                            <input class="ads__location-checkbox" v-model="all.boxEight" type="checkbox">
                            <p class="ads__location-text">{{ $t('ads.item__25') }}</p>
                        </div>
                    </div>
                </div>
                <div class="ads__label-wr"> 
                    <div class="ads__label-text-wr">
                        <p class="ads__label-text">{{ $t('ads.item__26') }}</p>
                        <p class="ads__label-text">{{ $t('ads.item__27') }}</p>
                    </div>
                    <div class="ads__label-select-wr">
                        <select class="ads__label-select" v-model="all.type">
                            <option value="Коттедж">{{ $t('ads.item__28') }}</option>
                        </select>
                        <select class="ads__label-select" v-model="all.Electricity">
                            <option value="Есть возможность подключения">{{ $t('ads.item__29') }}</option>
                        </select>
                    </div>
                </div>
                <div class="ads__message-wr">
                    <p class="ads__message-title">{{ $t('ads.item__30') }}</p>
                    <input class="ads__message-input" v-model="all.input" maxlength="9000" placeholder="Есть возможность подключения" type="text">
                </div>
                <div class="ads__wr-files">
                    <div class="ads__wr-input-file">
                        <label class="ads__wr-label">
                            <input class="ads__wr-input" type="file">
                        </label>    
                        <label class="ads__wr-label">
                            <input class="ads__wr-input" type="file">
                        </label>    
                        <label class="ads__wr-label">
                            <input class="ads__wr-input" type="file">
                        </label>    
                        <label class="ads__wr-label">
                            <input class="ads__wr-input" type="file">
                        </label>    
                        <label class="ads__wr-label">
                            <input class="ads__wr-input" type="file">
                        </label>    
                    </div>
                    <div class="ads__wr-input-file">
                        <label class="ads__wr-label">
                            <input class="ads__wr-input" type="file">
                        </label>    
                        <label class="ads__wr-label">
                            <input class="ads__wr-input" type="file">
                        </label>    
                        <label class="ads__wr-label">
                            <input class="ads__wr-input" type="file">
                        </label>    
                        <label class="ads__wr-label">
                            <input class="ads__wr-input" type="file">
                        </label>    
                        <label class="ads__wr-label">
                            <input class="ads__wr-input" type="file">
                        </label>    
                    </div>
                </div>
                <div class="ads__region-wr">
                    <p class="ads__region-title">{{ $t('ads.item__31') }}</p>
                    <div class="ads__region-wr-text">
                        <p class="ads__region-text">{{ $t('ads.item__32') }}</p>
                        <p class="ads__region-text">{{ $t('ads.item__33') }}</p>
                    </div>
                    <div class="ads__region-wr-select">
                        <select class="ads__region-select" v-model="all.city">
                            <option value="Ташкент">{{ $t('ads.item__34') }}</option>
                        </select>
                        <select class="ads__region-select" v-model="all.region">
                            <option value="Мирза Улугбекский район">{{ $t('ads.item__35') }}</option>
                        </select>
                    </div>
                </div>
                <div class="ads__wr-frame">
                    <iframe class="ads__frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.3670870809597!2d69.24380527599793!3d41.32263040000965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bd5d08cd293%3A0x10a4761db612c58f!2sZucco%20Academy!5e0!3m2!1sru!2s!4v1707397375334!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="ads__wr-tel">
                    <p class="ads__wr-tel-text">{{ $t('ads.item__36') }}</p>
                    <input class="ads__wr-tel-input" placeholder="+99894 888 74452" v-model="all.tell" type="number">
                    <p class="ads__wr-tel-text">{{ $t('ads.item__37') }}</p>
                    <input class="ads__wr-tel-input" placeholder="+99894 888 74452" v-model="all.adres" type="text">
                    <p class="ads__wr-tel-text">{{ $t('ads.item__38') }}</p>
                    <input class="ads__wr-tel-input" placeholder="Зухриддин" v-model="all.face" type="text">
                </div>
                <div class="ads__wr-button">
                    <button class="ads__button" @click="click">{{ $t('ads.item__39') }}</button>
                    <p class="ads__text">{{ $t('ads.item__40') }}</p>
                </div>
            </div>
        </div>
    </section>
</template>