<template>
    <ul class="list-group">
      <button
        type="button"
        class="list-group-item list-group-item-action"
        :class="{ active: categoryValue === '' }"
        @click="getProducts(1)"
      >
        <li class="list-unstyled">全部商品</li>
      </button>
      <button
        type="button"
        class="list-group-item list-group-item-action"
        :class="{ active: categoryValue === 'giftBox' }"
        @click="getProducts(1, 'giftBox')"
      >
        <li class="list-unstyled">禮盒系列</li>
      </button>
      <button
        type="button"
        class="list-group-item list-group-item-action"
        :class="{ active: categoryValue === 'bathAndBodyProducts' }"
        @click="getProducts(1, 'bathAndBodyProducts')"
      >
        <li class="list-unstyled">沐浴用品</li>
      </button>
      <button
        type="button"
        class="list-group-item list-group-item-action"
        :class="{ active: categoryValue === 'fragrance' }"
        @click="getProducts(1, 'fragrance')"
      >
        <li class="list-unstyled">室內香氛</li>
      </button>
    </ul>
  </template>

<script>
export default {
  data () {
    return {}
  },
  props: ['getProducts', 'categoryValue']
}
</script>
