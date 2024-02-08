<script setup>
import "./CarouselComp.css"
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
let arr = [
{
  title:'Техника Apple по доступным ценам',
  text:'987 обьявлениий',
  img: "../../../../public/images/notebook-png.png"
},
{
  title:'Техника Apple по доступным ценам',
  text:'987 обьявлениий',
  img: "../../../../public/images/notebook-png.png"
},
{
  title:'Брендовые товары за копейки',
  text:'987 обьявлениий',
  img: "../../../../public/images/gucci.png"
},
{
  title:'Брендовые товары за копейки',
  text:'987 обьявлениий',
  img: "../../../../public/images/gucci.png"
},
{
  title:'Все товары для офиса в одном месте',
  text:'987 обьявлениий',
  img: "../../../../public/images/kreslo.png"
},
{
  title:'Все товары для офиса в одном месте',
  text:'987 обьявлениий',
  img: "../../../../public/images/kreslo.png"
}
]
</script>

<template>
  <section class="carousel">
    <div class="carousel__wrapper">        
      <Carousel itemsToShow="3" touchDrag >
        <Slide v-for="item in arr" :key="item">
          <div class="carousel__image-wr">
            <p class="carousel__title">{{ item.title }}</p>
            <p class="carousel__text">{{ item.text }}</p>
            <img class="carousel__img" :src="item.img" alt="">
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>

