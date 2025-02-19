<template>
  <section class="subscript section-bkg">
    <div class="container text-primary">
      <div class="row justify-content-center text-center">
        <div class="col-md-6">
          <VForm @submit="subscription" ref="subscriptionForm">
            <label
              class="form-label fs-3 fw-bold mb-4 d-block"
              for="subscript"
              style="font-family: var(--bs-NotoSerif-TC)"
              >訂閱我們，獲取優惠與最新活動消息</label
            >
            <div class="d-flex justify-content-center">
              <button class="fs-6 btn btn-outline-primary px-5 py-2" type="submit">訂閱</button>
            </div>
            <ErrorMessage class="invalid-feedback mt-2" name="email" />
          </VForm>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// sweetalert2
import Swal from 'sweetalert2'
// vee-validate
import {
  Form, defineRule, configure, ErrorMessage
} from 'vee-validate'
import {
  required, email
} from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW') // 設定預設語系

const VForm = Form

// vee-validate rule
defineRule('required', required)
defineRule('email', email)

export default {
  data () {
    return {
    }
  },
  methods: {
    // 訂閱最新活動消息
    subscription () {
      Swal.fire({
        icon: 'success',
        title: '成功訂閱',
        text: '獲得購物 8 折優惠代碼 ToyHaven01',
        confirmButtonText: '確定',
        confirmButtonColor: '#5D7067',
        customClass: {
          title: 'titleFontStyle',
          popup: 'radius0',
          confirmButton: 'radius0'
        }
      })
      this.$refs.subscriptionForm.resetForm()
    }
  },
  components: { VForm, ErrorMessage }
}
</script>

  <style lang="scss" scoped>
  .section-bkg {
    background-position: top;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  .subscript {
    padding: 140px 0;
  }
  </style>
