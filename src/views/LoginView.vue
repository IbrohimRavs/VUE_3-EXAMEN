<script setup>
import HeaderComp from '@/components/Header/HeaderComp.vue';
import LoginComp from '@/components/LoginPage/Login/LoginComp.vue';
import InpComp from '@/components/ProductPage/Inp/InpComp.vue';
</script>

<template>
    <HeaderComp />
    <section>
       <InpComp /> 
       <LoginComp />
    </section>
</template>