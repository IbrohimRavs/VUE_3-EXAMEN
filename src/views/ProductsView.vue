<script setup>
import HeaderComp from '@/components/Header/HeaderComp.vue';
import FooterComp from '@/components/Footer/FooterComp.vue';
import LabelComp from "@/components/ProductsPage/Label/LabelComp.vue"
import RangeComp from "@/components/ProductsPage/Range/RangeComp.vue"
import SelectComp from "@/components/ProductsPage/Select/SelectComp.vue"
import MoreComp from '@/components/Home/More/MoreComp.vue';
import SearchComp from "@/components/ProductsPage/Search/SearchComp.vue"
import SplicesComp from "@/components/ProductsPage/Splices/SplicesComp.vue"
import AppComp from '@/components/Home/App/AppComp.vue';
</script>

<template>
    <HeaderComp />
    <section>
        <LabelComp />
        <RangeComp />
        <SelectComp />
        <MoreComp />
        <SearchComp />
        <SplicesComp />
        <AppComp />
    </section>
    <FooterComp />
</template>