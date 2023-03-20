<template>
  <section class="container pt-6">
    <h2 class="fw-bold pb-4 text-center">商品列表</h2>
    <div class="row">
      <div class="d-grid gap-2 col-3 mx-auto">
        <button type="button" class="btn btn-outline-primary">全部商品</button>
        <button type="button" class="btn btn-outline-primary">健康餐盒</button>
        <button type="button" class="btn btn-outline-primary">乳清蛋白</button>
        <button type="button" class="btn btn-outline-primary">雞胸肉</button>
        <button type="button" class="btn btn-outline-primary">海鮮</button>
        <button type="button" class="btn btn-outline-primary mt-5">熱量 (Cal)</button>
        <button type="button" class="btn btn-outline-primary">0 ~ 300</button>
        <button type="button" class="btn btn-outline-primary">301 ~ 600</button>
        <button type="button" class="btn btn-outline-primary">601 <i class="bi bi-arrow-up"></i></button>
        <button type="button" class="btn btn-outline-primary mt-5">蛋白質 (g)</button>
        <button type="button" class="btn btn-outline-primary">0 ~ 5</button>
        <button type="button" class="btn btn-outline-primary">5.1 ~ 10</button>
        <button type="button" class="btn btn-outline-primary">10.1 ~ 15</button>
        <button type="button" class="btn btn-outline-primary">15.1 ~ 20</button>
      </div>
      <div class="col-9">
        <div class="d-flex flex-column align-items-center justify-content-center text-center py-5">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="product in products" :key="product.id">
              <div class="card h-100">
                <!-- 若圖片高度不一，需統一高度，於影片59:00 -->
                <!-- <a href="#"><img :src="product.imageUrl" class="card-img-top object-cover" alt="..."></a> -->
                <RouterLink :to="`/product/${product.id}`" class="nav-link text-primary-light"><img :src="product.imageUrl" class="card-img-top object-cover" alt="..."></RouterLink>
                <div class="card-body">
                  <h5 class="card-title fw-bold">{{ product.title }}</h5>
                  <p class="card-text"><span class="text-decoration-line-through">原價 ${{ product.origin_price }}</span><br>現在只要 ${{ product.price }}</p>
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
</template>

<script>
import { RouterLink } from 'vue-router'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProducts () {
      this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/products`)
        .then(res => {
          this.products = res.data.products
        })
    }
  },
  components: {
    RouterLink
  },
  mounted () {
    this.getProducts()
  }
}
</script>
