<script setup>
import HeaderComp from '@/components/Header/HeaderComp.vue';
import FooterComp from '@/components/Footer/FooterComp.vue';
import InpComp from "@/components/ProductPage/Inp/InpComp.vue"
import MiniComp from "@/components/ProductPage/Mini/MiniComp.vue"
import ProductComp from "@/components/ProductPage/Product/ProductComp.vue"
import ProodFootComp from "@/components/ProductPage/ProdFoot/ProodFootComp.vue"
import SpliceComp from "@/components/ProductPage/Splice/SpliceComp.vue"
import AppComp from '@/components/Home/App/AppComp.vue';
</script>
<template>
  <HeaderComp />
  <main>
    <InpComp />
    <MiniComp />
    <ProductComp />
    <ProodFootComp />
    <RouterView />
    <SpliceComp />
    <AppComp />
  </main>
  <FooterComp />
</template>