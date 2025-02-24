<template>
    <select
      class="form-select mb-5 fs-6"
      name="product-categories"
      @change="classifyProductsMobile($event)"
    >
      <option value="" selected>全部商品</option>
      <option value="giftBox">扭蛋系列</option>
      <option value="bathAndBodyProducts">公仔收藏</option>
      <option value="fragrance">其他好物</option>
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
