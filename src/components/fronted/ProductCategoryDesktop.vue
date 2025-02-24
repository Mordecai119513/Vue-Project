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
        :class="{ active: categoryValue === 'gacha' }"
        @click="getProducts(1, 'gacha')"
      >
        <li class="list-unstyled">扭蛋系列</li>
      </button>
      <button
        type="button"
        class="list-group-item list-group-item-action"
        :class="{ active: categoryValue === 'doll' }"
        @click="getProducts(1, 'doll')"
      >
        <li class="list-unstyled">公仔收藏</li>
      </button>
      <button
        type="button"
        class="list-group-item list-group-item-action"
        :class="{ active: categoryValue === 'other' }"
        @click="getProducts(1, 'other')"
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
