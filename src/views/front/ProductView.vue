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
    <section class="container pb-5">
      <div class="row pt-2">
        <div class="col-12 col-lg-6 text-center pb-5 pb-lg-0">
          <swiper
            :spaceBetween="30"
            :centeredSlides="true"
            :scrollbar="{
              hide: true,
            }"
            :loop="true"
            :navigation="true"
            :modules="modules"
            class="swiper"
            >
            <swiper-slide v-for="productPicture in productPictures" :key="productPicture">
              <img :src="productPicture" alt="productImage" class="object-cover w-100" height="422">
            </swiper-slide>
          </swiper>
        </div>
        <div class="col-12 col-lg-6 px-5">
          <h2 class="text-center pb-3">{{ product.title }}</h2>
          <p>{{ product.description }}</p>
          <div class="pb-1 fs-5">
            價格：${{ product.price }}
          </div>
          <div>
            數量<br>
            <select class="form-select" aria-label="exercise-frequency" v-model="qty">
              <option :value="i" v-for="i in 10" :key="`${i}18645`">{{ i }}</option>
            </select>
          </div>
          <div class="pt-5 d-flex justify-content-between">
            <button
              type="button"
              class="btn btn-outline-primary"
              @click="addToCart(product.id, qty, showToast)"
              :disabled="product.id === loadingItem">
              <i class="bi bi-cart-fill"></i> 加入購物車
            </button>
            <ShowCartToast ref="showCartToast" />
          </div>
        </div>
      </div>
    </section>
    <section class="container pb-5">
      <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="exchange-tab" data-bs-toggle="tab" data-bs-target="#exchange-and-return" type="button" role="tab" aria-controls="exchange-and-return" aria-selected="true">退換貨須知</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="shipping-tab" data-bs-toggle="tab" data-bs-target="#shipping-policy" type="button" role="tab" aria-controls="shipping-policy" aria-selected="false">運送服務</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <ol class="list-group-numbered tab-pane fade show active" id="exchange-and-return" role="tabpanel" aria-labelledby="exchange-tab" tabindex="0">
          <li class="list-group-item pb-3">產品在購買後30天內，如因產品本身質量問題、運輸過程中損壞等原因需退換貨，請您聯繫我們客服人員協助處理。如超過30天，我們將無法受理退換貨申請。</li>
          <li class="list-group-item pb-3">若因您個人原因（如不喜歡、尺寸不合適等）需申請退換貨，請您確保商品完整無損、未經使用、且保持原包裝。我們會依據實際情況收取相應的退換貨運費和處理費。</li>
          <li class="list-group-item pb-3">退換貨前，請先聯繫我們的客服人員，提供訂單號碼和退換貨原因。我們將根據實際情況為您提供最佳的解決方案。</li>
          <li class="list-group-item pb-3">在產品退回後，我們會進行檢查確認，確認無誤後會進行退款或換貨。退款將在收到退貨商品後5個工作日內退回原支付賬戶，換貨將在確認退貨商品無誤後5個工作日內發貨。</li>
          <li class="list-group-item pb-3">如果您對產品的質量有任何疑問或問題，請隨時聯繫我們的客服人員，我們將竭盡所能為您提供滿意的解決方案。</li>
        </ol>
        <ol class="list-group-numbered tab-pane fade" id="shipping-policy" role="tabpanel" aria-labelledby="shipping-tab" tabindex="0">
          <li class="list-group-item pb-3">我們的產品通常會在訂單確認後2-3個工作日內安排發貨。如需加急發貨，請您聯繫我們客服人員，我們將盡可能為您安排快速發貨。</li>
          <li class="list-group-item pb-3">我們會盡力確保產品在運輸過程中的安全，但是在運輸過程中出現的損壞、延誤或丟失等情況我們將不承擔責任。如有此類問題發生，請及時聯繫我們的客服人員，我們將盡力協助處理。</li>
          <li class="list-group-item pb-3">如果您對運送服務有任何疑問或問題，請隨時聯繫我們的客服人員，我們將竭盡所能為您提供滿意的解決方案。</li>
        </ol>
      </div>
    </section>
    <section class="bg-primary-exlight">
      <div class="container d-flex flex-fill flex-column align-items-center justify-content-center text-center py-5 col-8">
        <h3 class="fw-bold pb-4">您可能也喜歡</h3>
        <swiper
          :spaceBetween="10"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :scrollbar="{
            hide: true,
          }"
          :navigation="true"
          :slidesPerView="1"
            :breakpoints="{
              '992': {
                slidesPerView: 3,
                spaceBetween: 30,
              }
            }"
          :modules="modules"
          class="swiper">
          <swiper-slide class="bg-primary-exlight" v-for="categoryProduct in products" :key="categoryProduct.id">
            <div class="card card-translate" style="position: relative;">
              <RouterLink
                :to="`/product/${categoryProduct.id}`"
                @click="getCategoryProduct(categoryProduct)"
                class="nav-link overlay-link">
                <img :src="categoryProduct.imageUrl" class="card-img-top object-cover" height="200" alt="productImage">
                <div class="card-body text-center">
                  <h5 class="card-title fw-bold">{{ categoryProduct.title }}</h5>
                  <p class="card-text"><span class="text-decoration-line-through">原價 ${{ categoryProduct.origin_price }}</span><br>現在只要 <span class="fs-5 text-danger">${{ categoryProduct.price }}</span></p>
                  <p>熱量：{{ categoryProduct.calorie }} 大卡</p>
                  <p>蛋白質：{{ categoryProduct.protein }} 克</p>
                </div>
              </RouterLink>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <LoadingComponent
      ref="loading" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { RouterLink } from 'vue-router'
import cartStore from '@/stores/cart'
import ShowCartToast from '@/components/ShowCartToast.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Scrollbar } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      product: {},
      productPictures: [],
      categoryProduct: {},
      qty: 1,
      modules: [Autoplay, Navigation, Scrollbar]
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      this.$http(`${VITE_URL}v2/api/${VITE_PATH}/product/${id}`)
        .then(res => {
          this.product = res.data.product
          this.$refs.loading.loading.isLoading = false
          if (this.product.imagesUrl) {
            this.productPictures = [this.product.imageUrl, ...this.product.imagesUrl]
          } else {
            this.productPictures = [this.product.imageUrl]
          }
          this.getSameCategory()
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    getSameCategory () {
      const { category } = this.product
      this.$http(`${VITE_URL}v2/api/${VITE_PATH}/products?category=${category}`)
        .then(res => {
          this.products = res.data.products
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    getCategoryProduct (categoryProduct) {
      this.product = categoryProduct
    },
    showToast () {
      this.$refs.showCartToast.showCartToast()
    },
    ...mapActions(cartStore, ['addToCart'])
  },
  components: {
    RouterLink,
    ShowCartToast,
    LoadingComponent,
    Swiper,
    SwiperSlide
  },
  mounted () {
    this.getProduct()
  },
  computed: {
    ...mapState(cartStore, ['loadingItem'])
  }
}
</script>
