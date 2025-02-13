<template>
    <NavBar></NavBar>
    <div class="container-fluid mt-3 position-relative"></div>
    <ToastMessages></ToastMessages>
    <router-view/>
</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
import NavBar from '../components/NavBar.vue'

export default {
  components: {
    NavBar,
    ToastMessages
  },
  provide () {
    return {
      emitter
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    console.log(token)
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api, this.user).then((res) => {
      console.log(res)
      if (!res.data.success) {
        this.$router.push('LoginPage')
      }
    })
  }
}
</script>
