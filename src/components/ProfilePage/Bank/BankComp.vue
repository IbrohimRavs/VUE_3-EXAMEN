<script setup>
import "./BankComp.css"
</script>

<template>
    <section class="bank">
        <div class="container">
            <div class="bank__wrapper">
                <h2 class="bank__title">{{ $t('bank.item__1')}}</h2>
                <div class="bank__wr-text">
                    <p class="bank__text">{{ $t('bank.item__2')}}</p>
                    <button class="bank__button">
                        <div class="bank__button-wr">
                            <img class="bank__button-img" src="/images/plus.png" alt="button image plus">
                        </div>
                        {{ $t('bank.item__3')}}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>