<template>

    <div class="d-flex justify-content-center">
      <nav aria-label="Page navigation ">
        <ul class="pagination pagination-sm">
          <li class="page-item" :class="{ disabled: !page.has_pre }">
            <a
              class="page-link"
              href="#"
              aria-label="Previous"
              @click.prevent="getProducts(page.current_page - 1, categoryValue)"
            >
              <span aria-hidden="true"><i class="bi bi-chevron-left"></i></span>
            </a>
          </li>
          <li
            class="page-item"
            :class="{ active: pages === page.current_page }"
            v-for="pages in page.total_pages"
            :key="pages + 'page'"
          >
            <a class="page-link" href="#" @click.prevent="getProducts(pages, categoryValue)">{{
              pages
            }}</a>
          </li>

          <li class="page-item" :class="{ disabled: !page.has_next }">
            <a
              class="page-link"
              href="#"
              aria-label="Next"
              @click.prevent="getProducts(page.current_page + 1, categoryValue)"
            >
              <span aria-hidden="true"><i class="bi bi-chevron-right"></i></span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </template>

<script>
export default {
  data () {
    return {}
  },
  props: ['getProducts', 'categoryValue', 'page']
}
</script>
