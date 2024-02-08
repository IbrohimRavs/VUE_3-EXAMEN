<script setup>
import "./ChoiceComp.css"
</script>

<template>
    <section class="choice">
        <div class="container">
            <div class="choice__wrapper">
                <router-link class="choice__title" to="/">{{ $t("splice.title")}}</router-link>
                <router-link class="choice__title" to="/select">{{ $t("splice.text")}}</router-link>
                <router-link class="choice__title" to="/price">{{ $t("splice.price")}}</router-link>
            </div>
        </div>
    </section>
</template>