<script setup>
import HeaderComp from '@/components/Header/HeaderComp.vue';
import InpComp from '@/components/ProductPage/Inp/InpComp.vue';
import ForComp from "@/components/AddPage/For/ForComp.vue"
import HeroComp from '@/components/Home/Hero/HeroComp.vue';
import SelectionComp from "@/components/AddPage/Selection/SelectionComp.vue";
import AdsComp from "@/components/AddPAge/Ads/AdsComp.vue";
</script>

<template>
    <HeaderComp />
    <main>
        <InpComp />
        <ForComp />
        <HeroComp />
        <SelectionComp />
        <AdsComp />
    </main>
</template>