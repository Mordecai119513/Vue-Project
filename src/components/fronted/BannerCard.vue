<template>
  <div class="container">
    <div
      class="banner-card z-index-2 bg-opacity-75 position-absolute bg-light p-4 pe-md-20 me-3 ms-1"
    >
      <h1
        class="text-primary text-center text-sm-start fs-4 fs-lg-2 fw-bold mb-4"
        style="font-family: var(--bs-NotoSerif-TC)"
      >
      嚴選創意與經典設計，<br />
      打造最具收藏價值的玩具世界。
      </h1>
      <p
        class="text-primary text-center text-sm-start fs-5 fs-lg-4 mb-7"
        style="font-family: var(--bs-NotoSerif-TC)"
      >
      送給他，送給自己。
      </p>
      <RouterLink class="btn btn-outline-primary w-100 w-sm-35 py-2" to="/products"
        >來去尋寶</RouterLink
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
          src="https://storage.googleapis.com/vue-course-api.appspot.com/mordecai-api/1740039248851.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=J8hE6jK867LESTdXXpr2FPBDicecst4H9myvG9QsgoOGo4btn0EK5knRMe0RzN2dZgVZbNcWXKJfKXwKSDQcwF%2F5FHo97%2Fp2NhnPLQmEKAaGjd5vfyTgoZDeUn0IK1bAzX44ug9d67KQCctBugxXiZFQs5ITHHEs8AqlwMJn41nONDM6Um1%2BUnWQMwpa%2F3ZhGig7VzbduOTXUQ11ruhy1AB3VO%2F65LK88IV2A85JFXohpR61Nj4pvvNwfhczxilghvbnwnF3GnCY%2BRMgCgy%2Fw5POm%2FtXLyXvwxCJawB0syz7yPNa2tBR7mwJUBq%2FY6x2ON893yX2eQR4%2Fqr1QLr7iQ%3D%3D"
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
  top: 60%;
  left: 20%;
  transform: translateX(-50%);
  max-width: 90%;
  background: rgba(255, 255, 255, 0.2);
  z-index: 10;
  @media (max-width: 768px) {
    width: 80%;
    padding: 1rem;
    top: 50%;
    left: 50%;
  }
}
  </style>
