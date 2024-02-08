<script setup>
import HeaderComp from '@/components/Header/HeaderComp.vue';
import AppComp from '@/components/Home/App/AppComp.vue';
import BankComp from "@/components/ProfilePage/Bank/BankComp.vue"
import InpComp from '@/components/ProductPage/Inp/InpComp.vue';
import ChildrenComp from "@/components/ProfilePage/Children/ChildrenComp.vue"
if (!window.localStorage.getItem('token')) {
    window.location.href = '/login'
}
</script>

<template>
    <HeaderComp />
    <main>
        <InpComp />
        <BankComp />
        <ChildrenComp />
        <RouterView />
        <AppComp />
    </main>
</template>