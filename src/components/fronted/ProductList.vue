<template>
    <div class="vl-parent" ref="loading-container">
      <!-- loading 效果元件 -->
      <ContainerLoading :isLoading="isLoading" :container="container" />
      <div v-if="localProducts.length === 0">
  <h2 class="fs-3 text-secondary text-center mt-10 mb-20">很抱歉! 找不到符合的商品</h2>
</div>
<div v-else class="row g-md-4 g-3">
  <div v-for="product in localProducts" :key="product.id" class="col-lg-4 col-6">
          <div class="card border-0 h-100 position-relative">
            <!-- 加入許願清單按鈕 -->
            <RouterLink class="product-link text-decoration-none" :to="`/product/${product.id}`">
              <div class="position-relative">
                <!-- 判定並顯示是否為熱銷產品 -->
                <span
                  v-if="product.is_hotSale"
                  class="position-absolute p-2 bg-pink z-index-4 fs-md-6 fs-7 text-white top-0"
                  >HOT</span
                >
                <!-- 判定並顯示是產品是否售完 -->
                <div
                  v-if="product.quantity === 0"
                  class="product-sell-out text-center text-white fs-3"
                >
                  已售完
                </div>
                <div class="img-hidden">
                  <img
                    class="rounded-0 img-fluid cover-fit"
                    :src="product.imageUrl"
                    :alt="product.title"
                    width="351"
                    height="320"
                    style="background-color: var(--bs-secondary)"
                  />
                </div>
              </div>
            </RouterLink>
            <div class="my-2">
              <h3 class="card-title text-black fs-6 mb-1 mt-2">{{ product.title }}</h3>
              <p v-if="product.origin_price === product.price" class="card-text text-black fs-6 mb-2">
                <span>NT${{ product.origin_price }} </span>
              </p>
              <p v-else class="card-text text-black fs-6 mb-2">
                <span>NT${{ product.price }} </span>
                <span class="ms-1 text-decoration-line-through text-secondary"
                  >NT${{ product.origin_price }}</span
                >
              </p>
            </div>

            <button
              class="btn btn-outline-primary w-100 mt-auto py-2"
              type="button"
              @click="addToCart(product.id)"
              :disabled="product.quantity === 0 || spinnerLoading === product.id"
            >
              <span
                v-if="spinnerLoading === product.id"
                class="spinner-border-sm spinner-border"
                role="status"
                aria-hidden="true"
              ></span>
              加入購物車
            </button>
          </div>
        </div>
      </div>
      <!-- 分頁元件 -->
      <div class="mt-7">
        <PaginationComponent :getProducts="getProducts" :categoryValue="categoryValue" :page="page" />
      </div>
    </div>
  </template>

<script>
import PaginationComponent from '@/components/fronted/PaginationComponent.vue'

export default {
  data () {
    return {
      container: null, // 修正 this.$refs.loadingContainer 尚未初始化的問題
      localProducts: [], // 新增本地變數存 API 產品數據
      localPagination: {}, // 新增本地變數存分頁數據
      localIsLoading: false // 新增本地變數控制 loading
    }
  },
  props: ['categoryProducts', 'categoryValue', 'getProducts', 'page', 'isLoading', 'spinnerLoading'],
  components: {
    PaginationComponent
  },
  mounted () {
    console.log('📌 ProductList.vue 掛載，開始載入產品...')
    this.loadProducts()
  },
  methods: {
    loadProducts (page = 1, category = '') {
      this.localIsLoading = true
      const apiUrl = `${process.env.VUE_APP_API}v2/api/${process.env.VUE_APP_PATH}/products?page=${page}&category=${category}`
      console.log('🔍 API 請求 URL:', apiUrl) // 確認 API URL 是否正確

      this.$http.get(apiUrl)
        .then((res) => {
          console.log('📢 API 回應:', res.data) // 檢查 API 是否回傳資料

          if (res.data.success) {
            this.localProducts = res.data.products
            this.localPagination = res.data.pagination
            this.localIsLoading = false
            this.$emit('update-products', this.localProducts, this.localPagination)
          } else {
            console.error('❌ API 回傳失敗:', res.data.message)
            this.localIsLoading = false
          }
        })
        .catch((err) => {
          console.error('🚨 API 請求錯誤:', err)
          this.localIsLoading = false
        })
    }
  }
}
</script>

  <style lang="scss" scoped>
  // 產品售完 mask
  .product-sell-out {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(33, 33, 33, 0.75);
    &:hover {
      background-color: rgba(102, 101, 101, 0.75);
      transition: 0.3s;
    }
  }

  // 產品圖片 hover zoom in / out
  .img-hidden {
    width: 100%; /* 確保外框寬度與容器一致 */
  height: 250px; /* 統一圖片高度 */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  }
  .img-hidden img {
    transition: 0.5s;

    &:hover {
      transform: scale(1.2);
    }
  }
  .cover-fit {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .wishLists-btn {
    position: absolute;
    z-index: 4;
    right: 10px;
    top: 5px;
    .bi-heart {
      left: 0;
      z-index: 2;
    }
  }

  .wishLists-btn .bi-heart-fill {
    left: 0;
    z-index: 3;
    color: transparent; //active 樣式改為修改顏色
    &:hover {
      color: white;
    }
    &:active {
      opacity: 100;
      color: pink !important;
    }
  }

  .heart-fill-active {
    // active 樣式改為修改顏色
    color: white !important;
  }
  </style>
