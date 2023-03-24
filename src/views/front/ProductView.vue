<template>
  <div>
    <section class="container pt-6 pb-5">
      <div style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><RouterLink to="/products" class="link-primary text-decoration-none">商品列表</RouterLink></li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
      </div>
    </section>
    <section class="container pb-7">
      <div class="row pt-2">
        <div class="col-12 col-lg-6 text-center pb-5 pb-lg-0">
          <img :src="product.imageUrl" alt="" class="object-cover" height="450">
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
            <button type="button" class="btn btn-outline-primary mb-0 mb-md-2 mb-lg-0 me-2 me-md-0" @click="add(product)"><i class="bi bi-heart-fill"></i> 加入收藏</button>
            <button type="button" class="btn btn-primary" @click="addToCart(product.id, qty);showToast()">
              <i class="bi bi-cart-fill"></i> 加入購物車
            </button>
            <ShowCartToast ref="showCartToast"></ShowCartToast>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-primary-exlight">
      <div class="container d-flex flex-fill flex-column align-items-center justify-content-center text-center py-5 col-8 col-lg-4">
        <h3 class="fw-bold pb-4">您可能也喜歡</h3>
        <swiper
          :navigation="true"
          :grabCursor="true"
          :loop="true"
          :scrollbar="{
            hide: true,
          }"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :spaceBetween="10"
          :modules="modules"
          class="swiper"
        >
          <swiper-slide v-for="product in products" :key="product.id">
            <div class="card">
              <RouterLink :to="`/product/${product.id}`" class="nav-link text-primary-light overlay-link"><img :src="product.imageUrl" class="card-img-top object-cover" height="200" alt="產品圖片"></RouterLink>
              <div class="card-body">
                <h5 class="card-title fw-bold">{{ product.title }}</h5>
                <p class="card-text"><span class="text-decoration-line-through">原價 ${{ product.origin_price }}</span><br>現在只要 ${{ product.price }}</p>
                <p>熱量：{{ product.calorie }} 大卡</p>
                <p>蛋白質：{{ product.protein }} 克</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { RouterLink } from 'vue-router'
import cartStore from '@/stores/cart'
import favoritesStore from '@/stores/favorites'
import ShowCartToast from '@/components/ShowCartToast.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Scrollbar } from 'swiper'

import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      product: {},
      qty: 1,
      modules: [Autoplay, Navigation, Scrollbar]
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`)
        .then(res => {
          this.product = res.data.product
          this.getSameCategory(this.product.category)
        })
    },
    getSameCategory (category) {
      this.$http(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
        .then(res => {
          this.products = res.data.products.filter((item) => {
            return item.category === category
          })
        })
    },
    showToast () {
      this.$refs.showCartToast.showCartToast()
    },
    addToFavorites () {
      this.add(this.product)
    },
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(favoritesStore, ['add'])
  },
  components: {
    RouterLink,
    ShowCartToast,
    Swiper,
    SwiperSlide
  },
  mounted () {
    this.getProduct()
  }
}
</script>
