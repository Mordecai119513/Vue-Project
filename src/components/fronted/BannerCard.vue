<template>
    <div class="container">
      <div
        class="banner-card z-index-2 bg-opacity-75 position-absolute bg-light p-4 pe-md-20 me-3 ms-1"
      >
      </div>
    </div>
    <Swiper
      :modules="modules"
      class="banner-swiper swiper-no-swiping"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false
      }"
      :loop="true"
      :effect="'fade'"
      :speed="2500"
      :noSwiping="true"
    >
      <SwiperSlide
        ><img
          class="d-sm-block d-none"
          src="/banner/173944158959.jpg"
          alt="怪獸超大全"
          style="background-color: var(--bs-primary)" />

        <img
          class="d-sm-none d-block"
          src="/banner/17392684218.jpg"
          alt="未上色鋼彈"
          style="background-color: var(--bs-primary)"
      /></SwiperSlide>
      <SwiperSlide
        ><img
          class="d-sm-block d-none"
          src="/banner/173893591590.jpg"
          alt="紅鋼彈"
          style="background-color: var(--bs-primary)"
        /><img
          class="d-sm-none d-block"
          src="/banner/173926601638.jpg"
          alt="黑白鋼彈"
          style="background-color: var(--bs-primary)"
        />
      </SwiperSlide>
      <SwiperSlide
        ><img
          class="d-sm-block d-none"
          src="/banner/173883331264.jpg"
          alt="五老星"
          style="background-color: var(--bs-primary)" />

        <img
          class="d-sm-none d-block"
          src="/banner/173942584690.jpeg"
          alt="獅子王"
          style="background-color: var(--bs-primary)"
      /></SwiperSlide>
      <SwiperSlide
        ><img
          class="d-sm-block d-none"
          src="/banner/173947836626.jpeg"
          alt="街頭快打"
          style="background-color: var(--bs-primary)" />
        <img
          class="d-sm-none d-block"
          src="/banner/173952569639.jpeg"
          alt="蜘蛛人"
          style="background-color: var(--bs-primary)"
      /></SwiperSlide>
    </Swiper>
  </template>

<script>
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

export default {
  data () {
    return {
      modules: [Autoplay, EffectFade] // Swiper modules
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

  <style lang="scss" scoped>
.banner-swiper {
  width: 100vw; /* 讓輪播圖寬度滿版 */
  height: 100vh; /* 讓高度佔滿視窗 */
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

  .banner-card {
    top: 45%;
  }
  </style>
