<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div class="container">
      <!-- 左側：Logo + 網站名稱 -->
      <RouterLink class="navbar-brand d-flex align-items-center" to="/">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/mordecai-api/1740385752043.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lM4y8aT%2FRnZWwMptibiVRhNtw1%2BlYPQtzoJFXpw3uyNToVAh9jJ2trrDuF0ThYrEw8FoVaHKS5hiOlT7A7AK3%2BBT6zDbS6G4f0VyVonimPDhVcVYafOvw7MsVdt4N7mHqv%2BFBgb90sPCa4Gep5Gw9UD3%2FeP3KljNy6ULLUQpp5YcOU80Y4Jc41naOs6ld0OjS2BX4Cku1inR7oiTfp7Bz5lBxRRLLskU6HtI8YB3t%2BV%2BABy%2BTV%2BecrORQ%2FaAmxmmeKOB0xM2g%2FxLAQ9AjFPz8ROKiLbjnU%2Bkfjp4UyieGSkLrDWmXb96QXfUbHv5JMGFJRLstD53Ck3%2BBZkH3kAQCA%3D%3D" alt="Logo" class="logo me-2" />
        <span class="fw-bold text-dark">Toy Haven</span>
      </RouterLink>
      <!-- 漢堡選單（小螢幕） -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- 中間：導航選單 -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link to="/about" class="nav-link">關於ToyHaven</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/fronted/ProductsView" class="nav-link">全部商品</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/products" class="nav-link">產品相關</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/orders" class="nav-link">訂單</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/coupons" class="nav-link">優惠券</router-link>
          </li>
        </ul>
      </div>

      <!-- 右側：購物車 + 會員登入 -->
      <div class="d-flex align-items-center">
        <!-- 購物車按鈕 -->
        <RouterLink class="nav-link position-relative text-dark me-3" to="/cart">
          <i class="bi bi-cart fs-4"></i>
          <span v-if="cartItemCount > 0" class="cart-badge">{{ cartItemCount }}</span>
        </RouterLink>

        <!-- 會員登入按鈕 -->
        <RouterLink class="nav-link text-dark fs-4" to="/login">
          <i class="bi bi-person-circle"></i>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<script>
import { useCartStore } from '@/stores/cartStore'
import { storeToRefs } from 'pinia'

export default {
  setup () {
    const cartStore = useCartStore()
    const { cartItemCount } = storeToRefs(cartStore)

    return { cartItemCount }
  },
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/Login')
          }
        })
    }
  }
}
</script>

<style scoped>
.logo {
  max-width: 80px; /* 最大寬度 */
  height: 40px; /* 自動調整高度 */
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -10px;
  background: red;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 50%;
  padding: 3px 6px;
}
</style>
