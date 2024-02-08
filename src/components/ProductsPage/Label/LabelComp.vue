<script setup>
import "./LabelComp.css"
</script>

<template>
    <section class="label">
        <div class="container">
            <div class="label__wrapper">
                <div class="label__wr-input">
                    <input :placeholder="$t('label.item__1')" type="text" class="label__input">
                </div>
                <div class="label__wr-text">
                    <p class="label__text">{{ $t('label.item__2') }}</p>
                    <p class="label__text">{{ $t('label.item__3') }}</p>
                    <p class="label__text">{{ $t('label.item__4') }}</p>
                    <p class="label__text">{{ $t('label.item__5') }}</p>
                    <p class="label__text">{{ $t('label.item__6') }}</p>
                    <p class="label__text">{{ $t('label.item__7') }}</p>
                    <p class="label__text">{{ $t('label.item__8') }}</p>
                </div>
            </div>
        </div>
    </section>
</template>