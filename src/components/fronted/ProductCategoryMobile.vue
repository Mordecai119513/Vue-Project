<template>
    <select
      class="form-select mb-5 fs-6"
      name="product-categories"
      @change="classifyProductsMobile($event)"
    >
      <option value="" selected>全部商品</option>
      <option value="giftBox">禮盒系列</option>
      <option value="bathAndBodyProducts">沐浴用品</option>
      <option value="fragrance">室內香氛</option>
    </select>
  </template>

<script>
export default {
  data () {
    return {}
  },
  props: ['getProducts', 'categoryValue'],
  methods: {
    // 產品分類 (手機版)
    classifyProductsMobile (event) {
      const category = event.target.value
      this.getProducts(1, category)
    }
  }
}
</script>
