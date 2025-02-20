<template>
    <ul class="list-group my-4 py-4">
      <button
        type="button"
        class="list-group-item list-group-item-action "
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
        <li class="list-unstyled">扭蛋系列</li>
      </button>
      <button
        type="button"
        class="list-group-item list-group-item-action"
        :class="{ active: categoryValue === 'bathAndBodyProducts' }"
        @click="getProducts(1, 'bathAndBodyProducts')"
      >
        <li class="list-unstyled">公仔收藏</li>
      </button>
      <button
        type="button"
        class="list-group-item list-group-item-action"
        :class="{ active: categoryValue === 'fragrance' }"
        @click="getProducts(1, 'fragrance')"
      >
        <li class="list-unstyled">其他好物</li>
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
