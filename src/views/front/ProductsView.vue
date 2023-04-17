<template>
  <div>
    <section class="container pt-6">
      <h2 class="fw-bold pb-4 text-center">商品列表</h2>
      <div class="row d-flex flex-md-row flex-column">
        <div class="col-md-3">
          <div class="pb-3 pb-md-5 d-md-flex flex-md-column">
            <button type="button" @click="getProducts" ref="allProducts" class="btn btn-outline-primary me-1 me-md-0 mb-md-1">全部商品</button>
            <button type="button" @click="filterCategory($event.target)" class="btn btn-outline-primary me-1 me-md-0 mb-md-1">健康餐盒</button>
            <button type="button" @click="filterCategory($event.target)" class="btn btn-outline-primary me-1 me-md-0 mb-md-1">乳清蛋白</button>
            <button type="button" @click="filterCategory($event.target)" class="btn btn-outline-primary me-1 me-md-0 mb-md-1">雞肉</button>
            <button type="button" @click="filterCategory($event.target)" class="btn btn-outline-primary">海鮮</button>
          </div>
          <div class="pb-3 pb-md-5 d-md-flex flex-md-column">
            <button type="button" class="btn btn-primary me-1 me-md-0 mb-md-1 disabled">熱量 (Cal)</button>
            <button type="button" @click="filterCal($event.target)" class="btn btn-outline-primary me-1 me-md-0 mb-md-1">0 ~ 300</button>
            <button type="button" @click="filterCal($event.target)" class="btn btn-outline-primary me-1 me-md-0 mb-md-1">301 ~ 600</button>
            <button type="button" @click="filterCal($event.target)" class="btn btn-outline-primary">601<i class="bi bi-arrow-up"></i></button>
          </div>
          <div class="pb-3 pb-md-5 d-md-flex flex-md-column">
            <button type="button" class="btn btn-primary me-1 me-md-0 mb-md-1 disabled">蛋白質 (g)</button>
            <button type="button" @click="filterProtein($event.target)" class="btn btn-outline-primary me-1 me-md-0 mb-md-1">0 ~ 10</button>
            <button type="button" @click="filterProtein($event.target)" class="btn btn-outline-primary me-1 me-md-0 mb-md-1">10.1 ~ 20</button>
            <button type="button" @click="filterProtein($event.target)" class="btn btn-outline-primary">20.1<i class="bi bi-arrow-up"></i></button>
          </div>
        </div>
        <div class="col-md-9">
          <div class="row g-4">
            <div v-for="product in products" :key="product.id" class="col-md-6 col-lg-4">
              <div class="card">
                <RouterLink :to="`/product/${product.id}`" class="nav-link text-primary-light overlay-link"><img :src="product.imageUrl" class="card-img-top object-cover" height="200" alt="productImage"></RouterLink>
                <div class="card-body text-center">
                  <h5 class="card-title fw-bold">{{ product.title }}</h5>
                  <p class="card-text"><span class="text-decoration-line-through">原價 ${{ product.origin_price }}</span><br>現在只要 ${{ product.price }}</p>
                  <p>熱量：{{ product.calorie }} 大卡</p>
                  <p>蛋白質：{{ product.protein }} 克</p>
                  <button
                    type="button"
                    class="btn btn-outline-primary"
                    @click="addToCart(product.id, qty, showToast)"
                    :disabled="product.id === loadingItem">
                    <i class="bi bi-cart-fill"></i> 加入購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <LoadingComponent
      ref="loading" />
    <ShowCartToast ref="showCartToast" />
    <section class="container d-flex justify-content-center pt-5">
      <PaginationComponent
        :pages="page"
        @change-page="getProducts" />
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { RouterLink } from 'vue-router'
import LoadingComponent from '@/components/LoadingComponent.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'
import cartStore from '@/stores/cart'
import ShowCartToast from '@/components/ShowCartToast.vue'

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
      this.$http(`${VITE_URL}v2/api/${VITE_PATH}/products?page=${page}`)
        .then(res => {
          this.products = res.data.products
          this.page = res.data.pagination
          this.$refs.loading.loading.isLoading = false
          const allProductsBtn = this.$refs.allProducts
          const Btns = allProductsBtn.parentNode.parentNode.querySelectorAll('button')
          Btns.forEach(item => {
            item.disabled = false
          })
          allProductsBtn.disabled = true
        })
        .catch(err => {
          alert(err)
        })
    },
    filterCategory (btn) {
      this.$http(`${VITE_URL}v2/api/${VITE_PATH}/products/all`)
        .then(res => {
          this.products = res.data.products.filter((item) => {
            return item.category === btn.innerText
          })
          this.btnDisabled(btn)
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    filterCal (btn) {
      this.$http(`${VITE_URL}v2/api/${VITE_PATH}/products/all`)
        .then(res => {
          if (btn.innerText === '0 ~ 300') {
            this.products = res.data.products.filter((item) => {
              return item.calorie >= 0 && item.calorie <= 300
            })
          } else if (btn.innerText === '301 ~ 600') {
            this.products = res.data.products.filter((item) => {
              return item.calorie >= 301 && item.calorie <= 600
            })
          } else if (btn.innerText === '601') {
            this.products = res.data.products.filter((item) => {
              return item.calorie >= 601
            })
          }
          this.btnDisabled(btn)
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    filterProtein (btn) {
      this.$http(`${VITE_URL}v2/api/${VITE_PATH}/products/all`)
        .then(res => {
          if (btn.innerText === '0 ~ 10') {
            this.products = res.data.products.filter((item) => {
              return item.protein >= 0 && item.protein <= 10
            })
          } else if (btn.innerText === '10.1 ~ 20') {
            this.products = res.data.products.filter((item) => {
              return item.protein >= 10.1 && item.protein <= 20
            })
          } else if (btn.innerText === '20.1') {
            this.products = res.data.products.filter((item) => {
              return item.protein >= 20.1
            })
          }
          this.btnDisabled(btn)
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    showToast () {
      this.$refs.showCartToast.showCartToast()
    },
    btnDisabled (btn) {
      const Btns = btn.parentNode.parentNode.querySelectorAll('button')
      Btns.forEach(item => {
        item.disabled = false
      })
      btn.disabled = true
    },
    ...mapActions(cartStore, ['addToCart'])
  },
  components: {
    RouterLink,
    PaginationComponent,
    LoadingComponent,
    ShowCartToast
  },
  mounted () {
    this.getProducts()
  },
  computed: {
    ...mapState(cartStore, ['loadingItem'])
  }
}
</script>
