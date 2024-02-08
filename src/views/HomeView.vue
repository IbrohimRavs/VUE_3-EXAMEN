<script setup>
import HeaderComp from "@/components/Header/HeaderComp.vue"
import HeroComp from "@/components/Home/Hero/HeroComp.vue"
import HomeComp  from "@/components/Home/Home/HomeComp.vue";
// import GoodsComp from "@/components/Home/Goods/GoodsComp.vue"
import MoreComp from "@/components/Home/More/MoreComp.vue";
import CarouselComp from "@/components/Home/Carousel/CarouselComp.vue"
import { RouterView } from "vue-router";
import ChoiceComp from "@/components/Home/Choice/ChoiceComp.vue";
import ChooceComp from "@/components/Home/Chooce/ChooceComp.vue"
import AppComp from "@/components/Home/App/AppComp.vue"
import FooterComp from "@/components/Footer/FooterComp.vue"
</script>

<template>
  <HeaderComp />
  <main>
    <HeroComp />
    <HomeComp />
    <!-- <GoodsComp /> -->
    <RouterView />
    <MoreComp />
    <CarouselComp />
    <ChoiceComp />
    <ChooceComp />
    <AppComp />
  </main>
  <FooterComp />
</template>
