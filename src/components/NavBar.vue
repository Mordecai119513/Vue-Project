<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div class="container">
      <!-- 左側：Logo + 網站名稱 -->
      <RouterLink class="navbar-brand d-flex align-items-center" to="/">
        <img src="/src/assets/Logo.png" alt="Logo" class="logo me-2" />
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
            <router-link to="/dashboard/products" class="nav-link">產品</router-link>
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
  width: 40px;
  height: 40px;
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
