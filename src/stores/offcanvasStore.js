import { defineStore } from 'pinia'

const offcanvasStore = defineStore('offcanvasStore', {
  state: () => ({
    cartOffcanvasIsShow: false,
    menuOffcanvasIsShow: false
  }),
  actions: {
    cartOffcanvasToggle () {
      this.cartOffcanvasIsShow = !this.cartOffcanvasIsShow
    },
    // 重置 cartOffcanvasIsShow 開啟與關閉的狀態，避免透過 ESC 鍵或是滑鼠左鍵點擊畫布以外區塊關閉畫布後造成的顯示錯誤
    resetCartOffcanvasIsShowStatus () {
      this.cartOffcanvasIsShow = false
    },
    menuOffcanvasToggle () {
      this.menuOffcanvasIsShow = !this.menuOffcanvasIsShow
    },
    // 重置 menuOffcanvasIsShow 開啟與關閉的狀態，避免透過 ESC 鍵或是滑鼠左鍵點擊畫布以外區塊關閉畫布後造成的顯示錯誤
    resetMenuOffcanvasIsShowStatus () {
      this.menuOffcanvasIsShow = false
    }
  },
  getters: {}
})

export default offcanvasStore
