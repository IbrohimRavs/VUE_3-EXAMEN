<script setup>
import "./ProfileComp.css"
</script>

<template>
    <section class="profile">
        <div class="container">
            <div class="profile__wrapper">
                <div class="profile__text-wr">
                    <div class="profile__wr-mini">
                        <p class="profile__text">{{ $t('profile.item__1') }}</p>
                        <p class="profile__text">{{ $t('profile.item__2') }}</p>
                    </div>
                    <div class="profile__wr-mini two">
                        <p class="profile__text">{{ $t('profile.item__3') }}</p>
                        <p class="profile__text">{{ $t('profile.item__4') }}</p>
                        <p class="profile__text">{{ $t('profile.item__5') }}</p>
                    </div>
                </div>

                <ul class="profile__list">
                    <li class="profile__item">
                        <div class="profile__wr-all">
                            <div class="profile__wr-mini">
                                <img class="profile__img" src="/images/file.png" alt="">
                                <p class="profile__item-title">{{ $t('profile.item__6') }}</p>
                                <div class="profile__item-wr-price">
                                    <p class="profile__item-price-text">2 000 000</p>
                                    <p class="profile__item-price-title">{{ $t('profile.item__15') }}</p>
                                </div>
                                <div class="profile__item-wr-data">
                                    <p class="profile__item-data"># 345 002</p>
                                    <p class="profile__item-data">{{ $t('profile.item__7') }} </p>
                                    <p class="profile__item-data">{{ $t('profile.item__8') }}</p>
                                </div>
                                <button class="profile__item-button-green">
                                    <div class="profile__wr-img">
                                        <img class="profile__item-green-button-img" src="/images/Mask.png" alt="button img">
                                    </div>
                                    <p class="profile__item-green-button">{{ $t('profile.item__9') }}</p>
                                </button>
                                <button class="profile__item-button-blue">
                                    <div class="profile__wr-img-blue">
                                        <img class="profile__item-green-button-img" src="/images/Mask.png" alt="button img">
                                    </div>
                                    <p class="profile__item-green-button">{{ $t('profile.item__10') }}</p>
                                </button>
                                <button class="profile__item-button-white">
                                    <img src="/images/more.png" alt="button img">
                                </button>
                            </div>
                            <div class="profile__item-text-wr">
                                <p class="profile__item-footer-text">{{ $t('profile.item__11') }}</p>
                                <p class="profile__item-footer-text">{{ $t('profile.item__12') }}</p>
                                <p class="profile__item-footer-text">{{ $t('profile.item__13') }}</p>
                                <p class="profile__item-footer-text">{{ $t('profile.item__14') }}</p>
                            </div>
                        </div>
                    </li>
                    <li class="profile__item">
                        <div class="profile__wr-all">
                            <div class="profile__wr-mini">
                                <img class="profile__img" src="/images/file.png" alt="">
                                <p class="profile__item-title">{{ $t('profile.item__6') }}</p>
                                <div class="profile__item-wr-price">
                                    <p class="profile__item-price-text">2 000 000</p>
                                    <p class="profile__item-price-title">6 000 000 сум</p>
                                </div>
                                <div class="profile__item-wr-data">
                                    <p class="profile__item-data"># 345 002</p>
                                    <p class="profile__item-data">{{ $t('profile.item__7') }} </p>
                                    <p class="profile__item-data">{{ $t('profile.item__8') }}</p>
                                </div>
                                <button class="profile__item-button-green">
                                    <div class="profile__wr-img">
                                        <img class="profile__item-green-button-img" src="/images/Mask.png" alt="button img">
                                    </div>
                                    <p class="profile__item-green-button">{{ $t('profile.item__9') }}</p>
                                </button>
                                <button class="profile__item-button-blue">
                                    <div class="profile__wr-img-blue">
                                        <img class="profile__item-green-button-img" src="/images/Mask.png" alt="button img">
                                    </div>
                                    <p class="profile__item-green-button">{{ $t('profile.item__10') }}</p>
                                </button>
                                <button class="profile__item-button-white">
                                    <img src="/images/more.png" alt="button img">
                                </button>
                            </div>
                            <div class="profile__item-text-wr">
                                <p class="profile__item-footer-text">{{ $t('profile.item__11') }}</p>
                                <p class="profile__item-footer-text">{{ $t('profile.item__12') }}</p>
                                <p class="profile__item-footer-text">{{ $t('profile.item__13') }}</p>
                                <p class="profile__item-footer-text">{{ $t('profile.item__14') }}</p>
                            </div>
                        </div>
                    </li>
                    <li class="profile__item">
                        <div class="profile__wr-all">
                            <div class="profile__wr-mini">
                                <img class="profile__img" src="/images/file.png" alt="">
                                <p class="profile__item-title">{{ $t('profile.item__6') }}</p>
                                <div class="profile__item-wr-price">
                                    <p class="profile__item-price-text">2 000 000</p>
                                    <p class="profile__item-price-title">6 000 000 сум</p>
                                </div>
                                <div class="profile__item-wr-data">
                                    <p class="profile__item-data"># 345 002</p>
                                    <p class="profile__item-data">{{ $t('profile.item__7') }} </p>
                                    <p class="profile__item-data">{{ $t('profile.item__8') }}</p>
                                </div>
                                <button class="profile__item-button-green">
                                    <div class="profile__wr-img">
                                        <img class="profile__item-green-button-img" src="/images/Mask.png" alt="button img">
                                    </div>
                                    <p class="profile__item-green-button">{{ $t('profile.item__9') }}</p>
                                </button>
                                <button class="profile__item-button-blue">
                                    <div class="profile__wr-img-blue">
                                        <img class="profile__item-green-button-img" src="/images/Mask.png" alt="button img">
                                    </div>
                                    <p class="profile__item-green-button">{{ $t('profile.item__10') }}</p>
                                </button>
                                <button class="profile__item-button-white">
                                    <img src="/images/more.png" alt="button img">
                                </button>
                            </div>
                            <div class="profile__item-text-wr">
                                <p class="profile__item-footer-text">{{ $t('profile.item__11') }}</p>
                                <p class="profile__item-footer-text">{{ $t('profile.item__12') }}</p>
                                <p class="profile__item-footer-text">{{ $t('profile.item__13') }}</p>
                                <p class="profile__item-footer-text">{{ $t('profile.item__14') }}</p>
                            </div>
                        </div>
                    </li>
                    <li class="profile__item">
                        <div class="profile__wr-all">
                            <div class="profile__wr-mini">
                                <img class="profile__img" src="/images/file.png" alt="">
                                <p class="profile__item-title">{{ $t('profile.item__6') }}</p>
                                <div class="profile__item-wr-price">
                                    <p class="profile__item-price-text">2 000 000</p>
                                    <p class="profile__item-price-title">6 000 000 сум</p>
                                </div>
                                <div class="profile__item-wr-data">
                                    <p class="profile__item-data"># 345 002</p>
                                    <p class="profile__item-data">{{ $t('profile.item__7') }} </p>
                                    <p class="profile__item-data">{{ $t('profile.item__8') }}</p>
                                </div>
                                <button class="profile__item-button-green">
                                    <div class="profile__wr-img">
                                        <img class="profile__item-green-button-img" src="/images/Mask.png" alt="button img">
                                    </div>
                                    <p class="profile__item-green-button">{{ $t('profile.item__9') }}</p>
                                </button>
                                <button class="profile__item-button-blue">
                                    <div class="profile__wr-img-blue">
                                        <img class="profile__item-green-button-img" src="/images/Mask.png" alt="button img">
                                    </div>
                                    <p class="profile__item-green-button">{{ $t('profile.item__10') }}</p>
                                </button>
                                <button class="profile__item-button-white">
                                    <img src="/images/more.png" alt="button img">
                                </button>
                            </div>
                            <div class="profile__item-text-wr">
                                <p class="profile__item-footer-text">{{ $t('profile.item__11') }}</p>
                                <p class="profile__item-footer-text">{{ $t('profile.item__12') }}</p>
                                <p class="profile__item-footer-text">{{ $t('profile.item__13') }}</p>
                                <p class="profile__item-footer-text">{{ $t('profile.item__14') }}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>