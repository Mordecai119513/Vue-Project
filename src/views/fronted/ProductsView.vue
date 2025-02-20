<template>
    <NavBar></NavBar>
    <div
      class="py-md-13 py-9 background-position-center background-size-corver"
      style="
        background-image: url('https://storage.googleapis.com/vue-course-api.appspot.com/peihanwang-hexschool/1689994083390.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=fbh9MvNqSmL%2Bs8EQ1sukc8Yxip6M03Xj1r81k1C6L5IOsrr3RQLp%2FyNctt%2FSnGmgsE0V8RIKSwrKtspQN0JmEynIvezjrXu2sWKg8kMy7TUAU8VlafwLiUQWBRpYITL6JbUm%2BOc3smTAnJlxNewDMi8DYwdiqJ9DAaZfm2BS9JO9vgXAia%2Bwxd3YxrX%2F4RzJ3zQtdiQvZI4bwaptLgyX0Lir6dwimbzaq8wlRLlnSjU2g%2B286D2yMkjCNKl39Cg%2BZi9wTyHCIlPpf%2FnD3jpZkksFI%2FYunG8EaFvVUREZX4iXTgtaTMoO1fbFXl2wNy1sMAlLyxV8vbvuh535OknYHw%3D%3D');
        background-color: var(--bs-primary);
      "
    >
      <div class="container d-flex flex-column align-items-center">
        <h2 class="fw-bold fs-lg-10 fs-1 mb-3 text-white" style="font-family: var(--bs-NotoSerif-TC)">
          全站商品
        </h2>
        <div class="fs-6">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0 text-white text-center">
              <li class="breadcrumb-item">
                <RouterLink class="text-decoration-none text-white" to="/">首頁</RouterLink>
              </li>
              <li class="breadcrumb-item active" aria-current="page">全站商品</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>

    <div class="container my-6">
      <div class="row">
        <div class="col-lg-3 d-none d-lg-block sticky-top-customize">
          <ProductCategoryDesktop :getProducts="getProducts" :categoryValue="categoryValue" />
        </div>
        <div class="d-block d-lg-none">
          <ProductCategoryMobile :getProducts="getProducts" :categoryValue="categoryValue" />
        </div>
        <div class="col-lg-9">
          <ProductList
            :categoryProducts="categoryProducts"
            :categoryValue="categoryValue"
            :getProducts="getProducts"
            :page="page"
            :isLoading="isLoading"
          />
        </div>
      </div>
    </div>
  </template>
<script>
import ProductCategoryDesktop from '@/components/fronted/ProductCategoryDesktop.vue'
import ProductCategoryMobile from '@/components/fronted/ProductCategoryMobile.vue'
import ProductList from '@/components/fronted/ProductList.vue'
import NavBar from '@/components/NavBar.vue'

const VUE_APP_URL = process.env.VUE_APP_URL
const VUE_APP_PATH = process.env.VUE_APP_PATH

export default {
  data () {
    return {
      products: [], // 初始產品列表
      categoryProducts: [], // 分類後的產品列表
      categoryValue: '', // 用於 pagination 換頁時將類別類型加入至 getProducts
      page: {},
      isLoading: false // 控制 loading 狀態
    }
  },
  components: {
    ProductCategoryDesktop,
    ProductCategoryMobile,
    ProductList,
    NavBar
  },
  methods: {
    getProducts (page = 1, category = '') {
      this.isLoading = true
      this.$http
        .get(`${VUE_APP_URL}/v2/api/${VUE_APP_PATH}/products?page=${page}&category=${category}`)
        .then((res) => {
          this.products = res.data.products
          this.categoryProducts = this.products
          this.categoryValue = category
          this.page = res.data.pagination
          this.scrollToTop()
          this.isLoading = false
        })
        .catch(() => {
          this.isLoading = false
        })
    },
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
