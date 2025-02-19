<template>
    <section class="more-products pt-8">
      <h2 class="fs-2 fw-bold text-primary text-center mb-6 my-4 py-4" style="font-family: var(--bs-NotoSerif-TC)">
        更多產品
      </h2>
      <!-- swiper -->
      <div class="bg-light py-4">
          <SwiperSlide>
            <RouterLink to="/product/-NaUd3lZGkS1IJDjaSCV">
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633231830.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=YOqiBfmUlHKemT74wXg3tHMeWXcKZt9qPkQdOhuQK%2Bossb4YEyBPWVs3T37L4IPiKOQUiQiWtW3fMC5nQbATdALGyRbO40fo69W4S%2BUS8sJYKKvidMLDsIMNdQvkWy8lWhefXRuEOjr3U4YtQWosixRqE4JW49zZ9ZXpKU7O3vF0dL2n24tGjhXgeVDkSLf7ZUG3rELUxqBRYxKO4hDZnK7%2Fq6HPielBTq7PSa83y8mIce3PK3YAtMc74asjKFEUSCqzwkWyTXQnP7W%2FU5FW1tJn68szL97BLNJirpCXf4Gt8EQlWhXmgW6RVbJ86OhkiDI7d7xFXhT967GROTNgwA%3D%3D"
                alt="深棕色的木桌上擺著一排咖啡色的擴香 "
              />
              <div class="swiper-slide-mask"></div>
              <p
                class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle"
              >
                居家擴香
              </p></RouterLink
            ></SwiperSlide
          >
          <SwiperSlide>
            <RouterLink to="/product/-NaUeamgqGkzq4BTFRJ0">
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633534220.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OXbSt9vUg1T%2BEMkjC9V1W88H42phrKXTcBf1%2FsSxOqudHJ3BFa1OTabzyvnnTnrAk3wOUArOkl2H4%2F9FevWUJGul8bJCv8jJJCRYjTqCoyam3TH%2FmIGam%2Fe4CMnmqeWjjtS38ZbteZGzq7HMAioMqAXoYASwu6QyGsbJIjKABmeWjGjg4toV4nBWHrfCtNVurwU9sByyN65NU1uiLM6xlHtZsmOn7WF%2FF5S%2F4fWD6rYKjvOC8YM%2Ff0q5gRH0gwmjlbcHjMiL%2BWrWHI3RnLMN%2Bwtgnb8ZZznhDsNVtCEzO0cG0bKWXNLWP0kRy2NiBp4rudnothozKi56r3My71wWGg%3D%3D"
                alt="四種不同材料的白色海鹽皂"
              />
              <div class="swiper-slide-mask"></div>
              <p
                class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle"
              >
                山形海鹽皂
              </p></RouterLink
            ></SwiperSlide
          >
          <SwiperSlide>
            <RouterLink to="/product/-NaUegMYLEbG-GRD7_IO">
              <img
                src="https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1690633563910.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lBgmsdwE2Q5e8dBmVShbLWIWLU7TtqKFppIdLHRuCVUEPYskcrq0bWR%2B8ElUrzMkZU3eVChWNUwl5KZcX6S41F1xLvhAr%2B6PhMKKKDVraA%2FX7oTEqrLvhYrzOiIF%2BCg6JlUbPetaYGtLj2ua7yrltRXB73g5BinjMkA1NjPMj2GL3BbTHmXSrvnsOK8cFDJ6XRBG6qDkuuu9a3couUCFFy4to1Yr983qY%2FdkljuEWFjn9Vm7Ext7Vjml9vu2VUNfZMEbTo03wumK2yQa%2BO48AAgVaN7bL7T6xsw%2FG0B1ce5lZ2pXRDSiE%2F89J3cCfyQY%2BCnFs9vMthGmP%2F8BZ6ojxQ%3D%3D"
                alt="黃色粉紅色紫色的絲瓜片香皂"
              />
              <div class="swiper-slide-mask"></div>
              <p
                class="swiper-slide-mask-btn position-absolute top-50 start-50 text-white border border-1 px-3 py-2 mb-0 translate-middle"
              >
                絲瓜片香皂
              </p>
            </RouterLink></SwiperSlide
          >
      </div>
    </section>
  </template>

<script>
// Import Swiper
import { SwiperSlide } from 'swiper/vue'
import {
  Navigation, Autoplay, EffectFade, FreeMode
} from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'

export default {
  data () {
    return {
      modules: [Navigation, Autoplay, EffectFade, FreeMode] // Swiper modules
    }
  },
  components: {
    SwiperSlide
  }
}
</script>

  <style lang="scss">
  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .more-product-card-swiper {
    height: 200px;
  }

  .more-product-card-swiper .swiper-slide {
    img {
      position: relative;
    }
    &:hover {
      .swiper-slide-mask {
        opacity: 50%;
      }
      .swiper-slide-mask-btn {
        opacity: 100%;
      }
    }
  }

  .swiper-slide-mask {
    position: absolute;
    background-color: black;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0%;
    transition: ease-in-out 0.35s;
  }

  .swiper-slide-mask-btn {
    opacity: 0%;
    transition: ease-in-out 0.35s;
  }

  .swiper-slide .bg-opacity-75 {
    background: rgba(255, 255, 255, 0.9);
  }

  .swiper-button-prev {
    background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693399232285.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=CxIaU4qeHDArnBAlLdV0lJgaAbGsxnpYe7Q4al%2B8LckdlhkLeQDL5TSu80tiDwQOIMKBD6tOWW8bUmXFTrqEb29Va9TL7UFwKzKYyraGWwscF%2FaXZxke1z0ti%2FwJqYY7kWG8%2FvNiHBvsb%2BaVG3hyzD82eiud9RrvG4Lnf93zWtgkpNDxFIWHah1%2FVD1x4Mnc15S1QK5gPF7eQB2lgGqa67Rd37VIsWMe0JDM4sSkwQoM6F8mPjB%2FmXvvyYAGI7ZMZk5O0PxmTliZC4c9tgxT60jX3ZNwb1DMkl%2Foyw534csYcFrt0REo8x8%2FTwtPGTMdwlPRzPf2yKLY7d0WYfKQSw%3D%3D') !important;
  }

  .swiper-button-prev::after {
    display: none;
  }

  .swiper-button-next {
    background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1693399233862.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=XzxONqc%2BASNXxpjtR%2B9WH127eflpY5uU9rJdTYOhb8pa1E11s5kOoMEYiE6l1%2Bk3Mi7cns%2Fv6QuAG81I0CqziA5uPY3%2F1Reqm06lhQW1d1SCIVgWDraVoqAVFozwyzy2JPqFfoHLs7RcGp29%2FKJ5hLJSt3pH%2B3KK0kBqyRTowxTz2XKYCCkqlTvMGJGzu0TAvmd2P4axuxqo6PAH5h0t0GCRPNkuhAx4tHZcfCOGfVy%2FH9lhtZpFWkuSALF%2Fymt4zgTPX7sZAzFARf98J3p73exlvfw7jXug4i8VxPpNJ4cazm7owffxmvXRdH8AkqRvm8PfOBC%2BigpvAx6JmdApZg%3D%3D') !important;
  }

  .swiper-button-next::after {
    display: none;
  }
  </style>
