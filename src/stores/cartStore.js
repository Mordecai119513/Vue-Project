import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] // 購物車內的商品列表
  }),
  getters: {
    cartItemCount: (state) => state.cartItems.length // 計算購物車內的商品數量
  },
  actions: {
    addToCart (item) {
      this.cartItems.push(item)
    },
    removeFromCart (index) {
      this.cartItems.splice(index, 1)
    },
    clearCart () {
      this.cartItems = []
    }
  }
})
