<template>
  <section class="container pt-6">
    <h2 class="fw-bold pb-4 text-center">商品列表</h2>
    <div class="row d-flex flex-md-row flex-column">
      <div class="col-md-3">
        <div class="pb-3 pb-md-5 d-md-flex flex-md-column">
          <button @click="getProducts" type="button" class="btn btn-outline-primary me-1 me-md-0 mb-md-1">全部商品</button>
          <button @click="filterCategory($event.target.innerText)" type="button" class="btn btn-outline-primary me-1 me-md-0 mb-md-1">健康餐盒</button>
          <button @click="filterCategory($event.target.innerText)" type="button" class="btn btn-outline-primary me-1 me-md-0 mb-md-1">乳清蛋白</button>
          <button @click="filterCategory($event.target.innerText)" type="button" class="btn btn-outline-primary me-1 me-md-0 mb-md-1">雞肉</button>
          <button @click="filterCategory($event.target.innerText)" type="button" class="btn btn-outline-primary">海鮮</button>
        </div>
        <div class="pb-3 pb-md-5 d-md-flex flex-md-column">
          <button type="button" class="btn btn-outline-primary me-1 me-md-0 mb-md-1">熱量 (Cal)</button>
          <button @click="filterCal($event.target.innerText)" type="button" class="btn btn-outline-primary me-1 me-md-0 mb-md-1">0 ~ 300</button>
          <button @click="filterCal($event.target.innerText)" type="button" class="btn btn-outline-primary me-1 me-md-0 mb-md-1">301 ~ 600</button>
          <button @click="filterCal($event.target.innerText)" type="button" class="btn btn-outline-primary">601<i class="bi bi-arrow-up"></i></button>
        </div>
        <div class="pb-3 pb-md-5 d-md-flex flex-md-column">
          <button type="button" class="btn btn-outline-primary me-1 me-md-0 mb-md-1">蛋白質 (g)</button>
          <button @click="filterProtein($event.target.innerText)" type="button" class="btn btn-outline-primary me-1 me-md-0 mb-md-1">0 ~ 10</button>
          <button @click="filterProtein($event.target.innerText)" type="button" class="btn btn-outline-primary me-1 me-md-0 mb-md-1">10.1 ~ 20</button>
          <button @click="filterProtein($event.target.innerText)" type="button" class="btn btn-outline-primary">20.1<i class="bi bi-arrow-up"></i></button>
        </div>
      </div>
      <div class="col-md-9">
        <div class="d-flex align-items-center justify-content-center text-center py-5">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="product in products" :key="product.id">
              <div class="card h-100">
                <RouterLink :to="`/product/${product.id}`" class="nav-link text-primary-light"><img :src="product.imageUrl" class="card-img-top object-cover" height="200" alt="..."></RouterLink>
                <div class="card-body">
                  <h5 class="card-title fw-bold">{{ product.title }}</h5>
                  <p class="card-text"><span class="text-decoration-line-through">原價 ${{ product.origin_price }}</span><br>現在只要 ${{ product.price }}</p>
                  <p>熱量：{{ product.calorie }} 大卡</p>
                  <p>蛋白質：{{ product.protein }} 克</p>
                  <a href="#" class="btn btn-outline-primary mb-0 mb-md-2 mb-lg-0 me-2 me-md-0"><i class="bi bi-heart-fill"></i> 加入收藏</a>
                  <a href="#" class="btn btn-primary"><i class="bi bi-cart-fill"></i> 加入購物車</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="container d-flex justify-content-center">
    <PaginationComponent
      :pages="page"
      @change-page="getProducts">
    </PaginationComponent>
  </section>
</template>

<script>
import { RouterLink } from 'vue-router'
import PaginationComponent from '@/components/PaginationComponent.vue'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      page: {}
    }
  },
  methods: {
    getProducts (page = 1) {
      this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/products?page=${page}`)
        .then(res => {
          this.products = res.data.products
          this.page = res.data.pagination
        })
    },
    filterCategory (category) {
      this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
        .then(res => {
          this.products = res.data.products.filter((item) => {
            return item.category === category
          })
        })
    },
    filterCal (cal) {
      this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
        .then(res => {
          if (cal === '0 ~ 300') {
            this.products = res.data.products.filter((item) => {
              return item.calorie >= 0 && item.calorie <= 300
            })
          } else if (cal === '301 ~ 600') {
            this.products = res.data.products.filter((item) => {
              return item.calorie >= 301 && item.calorie <= 600
            })
          } else if (cal === '601') {
            this.products = res.data.products.filter((item) => {
              return item.calorie >= 601
            })
          }
        })
    },
    filterProtein (protein) {
      this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
        .then(res => {
          if (protein === '0 ~ 10') {
            this.products = res.data.products.filter((item) => {
              return item.protein >= 0 && item.protein <= 10
            })
          } else if (protein === '10.1 ~ 20') {
            this.products = res.data.products.filter((item) => {
              return item.protein >= 10.1 && item.protein <= 20
            })
          } else if (protein === '20.1') {
            this.products = res.data.products.filter((item) => {
              return item.protein >= 20.1
            })
          }
        })
    }
  },
  components: {
    RouterLink,
    PaginationComponent
  },
  mounted () {
    this.getProducts()
  }
}
</script>
