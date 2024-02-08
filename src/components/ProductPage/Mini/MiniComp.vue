<script setup>
import "./MiniComp.css"
</script>

<template>
  <section class="mini">
    <div class="container">
      <div class="mini__wrapper">
        <div class="mini__text-wr">
          <p class="mini__text">{{ $t("mini.item__1")}}</p>
          <span class="mini__text-span one">/</span>
          <p class="mini__text">{{ $t("mini.item__2")}}</p>
          <span class="mini__text-span two">/</span>
          <p class="mini__text">{{ $t("mini.item__3")}}</p>
          <span class="mini__text-span three">/</span>
          <p class="mini__text">{{ $t("mini.item__4")}}</p>
          <span class="mini__text-span four">/</span>
          <p class="mini__text">{{ $t("mini.item__5")}}</p>
        </div>
      </div>
    </div>
  </section>
</template>