<template>
  <section class="container pt-6 pb-3">
    <div style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><RouterLink to="/products" class="link-primary text-decoration-none">商品列表</RouterLink></li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
      </ol>
    </div>
  </section>

  <section class="container">
    <div class="row pt-2">
      <!-- swipper + 多圖 -->
      <div class="col-12 col-lg-6 text-center">
        <img :src="product.imageUrl" alt="" class="object-cover" height="300">
      </div>
      <div class="col-12 col-lg-6 px-5">
        <h2 class="text-center pb-3">{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <div class="pb-">
          價格：${{ product.price }}
        </div>
        <div>
          數量<br>
          <select class="form-select" aria-label="exercise-frequency" v-model="qty">
            <option :value="i" v-for="i in 10" :key="`${i}18645`">{{ i }}</option>
          </select>
        </div>
        <div class="pt-5 d-flex justify-content-between">
          <a href="#" class="btn btn-outline-primary"><i class="bi bi-heart-fill"></i> 加入收藏</a>
          <button type="button" class="btn btn-primary" @click="addToCart(product.id, qty)">
            <i class="bi bi-cart-fill"></i> 加入購物車
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- swipper + category 分類 -->
  <section class="container d-flex flex-column align-items-center justify-content-center text-center py-6">
    <h3 class="fw-bold pb-5">您可能也喜歡</h3>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card h-100">
          <a href="#"><img src="..." class="card-img-top" alt="..."></a>
          <div class="card-body">
            <h5 class="card-title fw-bold">產品名稱</h5>
            <p class="card-text">原價<br>現在只要</p>
            <a href="#" class="btn btn-outline-primary mb-0 mb-md-2 mb-lg-0 me-2 me-md-0"><i class="bi bi-heart-fill"></i> 加入收藏</a>
            <a href="#" class="btn btn-primary"><i class="bi bi-cart-fill"></i> 加入購物車</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <a href="#"><img src="..." class="card-img-top" alt="..."></a>
          <div class="card-body">
            <h5 class="card-title fw-bold">產品名稱</h5>
            <p class="card-text">原價<br>現在只要</p>
            <a href="#" class="btn btn-outline-primary mb-0 mb-md-2 mb-lg-0"><i class="bi bi-heart-fill"></i> 加入收藏</a>
            <a href="#" class="btn btn-primary"><i class="bi bi-cart-fill"></i> 加入購物車</a>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <a href="#"><img src="..." class="card-img-top" alt="..."></a>
          <div class="card-body">
            <h5 class="card-title fw-bold">產品名稱</h5>
            <p class="card-text">原價<br>現在只要</p>
            <a href="#" class="btn btn-outline-primary mb-0 mb-md-2 mb-lg-0"><i class="bi bi-heart-fill"></i> 加入收藏</a>
            <a href="#" class="btn btn-primary"><i class="bi bi-cart-fill"></i> 加入購物車</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'pinia'
import { RouterLink } from 'vue-router'
import cartStore from '../../stores/cart'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      product: {},
      qty: 1
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`)
        .then(res => {
          this.product = res.data.product
        })
    },
    ...mapActions(cartStore, ['addToCart'])
  },
  components: {
    RouterLink
  },
  mounted () {
    this.getProduct()
  }
}
</script>
