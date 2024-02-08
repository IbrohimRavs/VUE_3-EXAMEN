<script setup>
import "./RangeComp.css"
import MultiRangeSlider from "multi-range-slider-vue";
</script>

<template>
    <section class="range">
        <div class="container">
            <div class="range__wrapper">
                <div class="range__wr-input">
                    <p class="range__text">{{ $t('range.item__1') }}</p>
                    <div class="MultiRangeSliderContainer">
                        <MultiRangeSlider
                        :min="100"
                        :max="10000"
                        :minValue="2000"
                        :maxValue="7000"
                        :step="500"
                        />
                    </div>
                </div>
                <div class="range__select-wr">
                    <div class="range__select-wr-mini">
                        <select class="range__select">
                            <option :value="$t('range.item__2')">{{ $t('range.item__2') }}</option>
                        </select>
                        <select class="range__select">
                            <option :value="$t('range.item__3')">{{ $t('range.item__3') }}</option>
                        </select>
                        <select class="range__select">
                            <option :value="$t('range.item__4')">{{ $t('range.item__4') }}</option>
                        </select>
                    </div>
                    <button class="range__button">{{ $t('range.item__5') }}</button>
                </div>
            </div>
        </div>
    </section>
</template>