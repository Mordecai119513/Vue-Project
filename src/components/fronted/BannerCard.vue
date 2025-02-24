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
      <RouterLink class="btn btn-outline-primary w-100 w-sm-35 py-2" to="/fronted/ProductsView"
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
          src="https://storage.googleapis.com/vue-course-api.appspot.com/mordecai-api/1740042340813.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=gbGgLhrGD%2B6m6kBMLkTMJ9yqMmhNcBJyys5HE2xDLl0DFsI6hHQmuOkDVbob7BqlfHy8RVmvW2lGdjYOeHTEtICYw1c08MeYuMuoVzQJpVIQDQcPvFK4rT6JuK3uv9oORLqBXOAvzrpafHR9KRYH8KlOefsU67a7ZKfDj1SaWTEgSqtJOY8bCirJTDaDERKsKIWnD9eYkzdrIhtdqgOVynLzf4EmR5PQMM%2BDNSYDyzLJq5mq4ieubXYb8OnoC3otJ0A7aWHEu%2BVPEQDwsIUZjsEClgyhmC%2FfMG6x479Vl7HRkqL3zsr%2B6wDk9ZP4fuflQvQ%2B%2BzUe6J86UEkGuUgQGw%3D%3D"
          alt="灰鋼彈"
          style="background-color: var(--bs-primary)"
      /></SwiperSlide>
      <SwiperSlide
        ><img
          class="d-sm-block d-none"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/mordecai-api/1740386176617.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=kT4quM1xNlxPFwffHqKI0n5uGECczYXhbZN%2FT17hMY71GP1HBB1ruyqRLQ00gUOG7X7Zwqls%2BzU%2BrMgW7MFNCpClhmJA45CDLJx5o%2F9TQYzeL3LNFNq0k1hU874ZUMl8vvO%2BvzZ%2BL5AwiPtkZn9b8wvq6Fj1ujsfANLtbaeNNjwWyJF%2Bm4O0kYsZHa5rFppVmGYlN6CermMlDLzBBhKm86Bwy2XEApJXSxod7tzWilW%2BdaaXhlJ67Wnh9lUNkQq2moAWZQf3Dg4VChsfG6p%2BvVwB8PWQoOc5CLUkm4lCZynRzXGwOm%2F6tAvDHpi%2FLAxMqtNVjuF6bBaJKun1WdVRIA%3D%3D"
          alt="紅鋼彈"
          style="background-color: var(--bs-primary)"
        /><img
          class="d-sm-none d-block"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/mordecai-api/1740384758935.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OnRGMgu6Php29JgJSOGuj6iZAUQKVyHjbwfPwSBFTVGvihgEWfKMK7KTHFZNiayASGE5otLFIgA%2B9WFHCpmpnlMgxb1%2BDNaa1zJsmsA4E%2BQTWx36fE2Jc4cvkj3%2BakVHcCIDjv7bc3dvubU7EqscwZ7qfy9HW%2BKN17CWrwxLOOZ7jUt40VVuwGTbqjR0lC9l5uCNQ4ecqNfkVCdbHsiIiS%2FSuyeyaIMt1Tr5jWbPBJLaVxbzOHcnNlgo4ZWH9%2FVnQ3drBluJzgN0zzQhpwmoBqZpXVHg2VbNOiuYKZqCZ71zhRkZ2SX98Z3GHvKVCTledAT7B0AIB0Fn3YkcS3E8mA%3D%3D"
          alt="黑白鋼彈"
          style="background-color: var(--bs-primary)"
        />
      </SwiperSlide>
      <SwiperSlide
        ><img
          class="d-sm-block d-none"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/mordecai-api/1740384638596.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KMsW2dh8uIrf%2FFtHWFlpbixs612SAffS%2Fz62PKNTIpAQzYK9YmAOVpc6Jgv7Xi4UfL7ktwFmaoSudHBo9MIxwZjuSjy5Odjj2YzIj75L54%2BzKKgheCgKBvTK%2BLBBbsLwL2PbA%2FVtgr4vcginmd1mAoHZDdVNv%2BYJJ5tr1KEfPZFhE5BG9dqRfu86pg6lnvdwTRQzREhKD7eRHRyhqG5dZB5u0Y3EjV9glk6rIbZ2FxBmxMo6QhInkLKoCL8AIP86ZlSkZsX4%2B8Vzg%2B0nVpYit6Ld3A4qcLa8ajcD21kLJCf%2BDKwJnPZUpJ%2Bs7yITuq1PWCFORWBFFrNF7Olw3hs8Yg%3D%3D"
          alt="五老星"
          style="background-color: var(--bs-primary)" />

        <img
          class="d-sm-none d-block"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/mordecai-api/1740384789303.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ovKTJvRVZtRi%2BcHS7B1CgG%2FMGOy8HUnQPlhdeMkPwv9H2NVn6LFuEGxP8bCCiT5mdDDwKv2vXfj5BcROhsWPXnke7WKEEsc7n5gb3Bgwq5wJrQ1G74nwHSnD7O%2FRArEsdJD%2BuB6vFhEKxEYHYsisrXsRJj%2F0dLHWUDdmgjemtLMzboIb73EXdurbJvdJpJ1ZZeiXXKbH9FuX2YUnfMgtdhNZdOSseTe3E2q0UAc1kRphIsx8cdMNccmLF2omqJ7cobSX%2BBxQEuBE5o%2B%2B%2B7c5LcVqAW4cjQfgFmAN3sEowIqR7CbwyTJFI1fNuKIm8SOsv148Y5Q56bJRraI%2BsFrceQ%3D%3D"
          alt="獅子王"
          style="background-color: var(--bs-primary)"
      /></SwiperSlide>
      <SwiperSlide
        ><img
          class="d-sm-block d-none"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/mordecai-api/1740384823398.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BTIKQWOqyTTKogcHkLwmJVA1uH5r7JwCuHujVqXIKoVmjPUwVj%2FuJlk3YZ%2FCByD1jnO4k2rfFXjRsEGO7LCj%2Fl7E1kGLg%2F9RQMtZ7FCoqRZv2ep16FQR0ETPlLKpu0ljwVBX9lsgP%2F3js7T8FP5nxtESJjkygJKiakX1c6ASHzTzaA3x5P456OmT%2B%2Fwz1xqajN99MRvVdK2nJ959pQg8oByPlXSauTPtkSIqHcvdCgujPWAwcy6Gz7Rxmkubh6NhlbBAUbz6qOklKIvq2hBaQCpjO7DU3aF8qyLGESQGZnVL9phLtMMHq93%2BaLK9h%2FNuldLAoPWnF%2BiRE00sqhhXVA%3D%3D"
          alt="街頭快打"
          style="background-color: var(--bs-primary)" />
        <img
          class="d-sm-none d-block"
          src="https://storage.googleapis.com/vue-course-api.appspot.com/mordecai-api/1740384895761.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=X21l%2B%2B3dGYAZZbjM%2B2ixHJrijZVt%2BY2VWbFMMpDQaLkmHH7x7K%2BQ%2BixYrhkkpro4YQGIswca%2Btnk2C5Xi2c%2BPfU6tHPuAM9CviLPMXKOqFEhz0rCWsxnhIQJMFFZqp4UGo%2BRxciG3UxP7an5aEHus1yH9S6JDRL4lUBeRROjWERxJe2%2FD%2FGdf7JePbqkHJtxa%2FwJZIpIfgh56YXmc2dkCYn%2BLUxTxDjpzQb3Un4Ux6RmyU7IW58BYf7u6zoffEYpOeNUCe4sg5JeDOInUOv69WcWUIxoh8mW5dZyzJZ1eQuw%2FZzhUzQK8NznV%2Fo3zlOuVdyjQUj3qMYfrlrFyRNWZg%3D%3D"
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
