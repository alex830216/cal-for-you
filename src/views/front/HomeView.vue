<template>
  <div>
    <section class="position-relative">
      <div class="cover d-flex align-items-center justify-content-center fs-1 text-white text-opacity-75"
      style="background: url(https://images.unsplash.com/photo-1564836235910-c3055ca0f912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) no-repeat fixed top/cover ; width: 100%; height: 100vh;">
        <div class="container position-absolute top-50 start-50 translate-middle text-center">
          <p class="fw-bold text-primary-light animate__animated animate__slideInDown">不知道該吃多少嗎?<br>交給我們幫你算</p>
          <RouterLink to="/calculate#calculator" class="btn btn-primary-transparent btn-lg hvr-round-corners animate__animated animate__zoomIn">計算後獲得優惠券</RouterLink>
        </div>
      </div>
    </section>
    <section class="text-primary-dark bg-primary-exlight py-6">
      <div class="container text-center">
        <div class="fs-1 fw-bold pb-5">您是否有以下困擾?</div>
        <div class="row align-items-center justify-content-center py-sm">
          <div class="col-md-6 pb-5 pb-md-0" data-aos="fade-right">
            <img src="https://images.unsplash.com/photo-1511909525232-61113c912358?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80" class="img-fluid" alt="diet" style="object-fit: cover;">
          </div>
          <div class="col-md-6" data-aos="fade-left">
            <h2 class="fs-2">想減肥<br>但不知道該吃哪些食物</h2>
          </div>
        </div>
        <div class="row flex-row-reverse align-items-center justify-content-center py-sm">
          <div class="col-md-6 pb-5 pb-md-0" data-aos="fade-left">
            <img src="https://images.unsplash.com/photo-1577563612200-a95560e2edec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="img-fluid" alt="obesity" style="object-fit: cover;">
          </div>
          <div class="col-md-6" data-aos="fade-right">
            <h2 class="fs-2">想減脂<br>害怕攝取過多熱量</h2>
          </div>
        </div>
        <div class="row align-items-center justify-content-center py-sm">
          <div class="col-md-6 pb-5 pb-md-0" data-aos="fade-right">
            <img src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="img-fluid" alt="training" style="object-fit: cover;">
          </div>
          <div class="col-md-6" data-aos="fade-left">
            <h2 class="fs-2">想增肌<br>這樣吃，蛋白質夠嗎</h2>
          </div>
        </div>
      </div>
    </section>
    <section class="position-relative">
      <div class="cover d-flex align-items-center justify-content-center text-primary-light"
      style="background: url(https://images.unsplash.com/photo-1505744386214-51dba16a26fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1306&q=80) no-repeat fixed center / cover ; width: 100%; height: 500px;">
        <div class="container position-absolute top-50 start-50 translate-middle text-center" data-aos="fade-up">
          <h2 class="pb-3 fs-1">品牌理念</h2>
          <p class="fs-3">結合 <strong class="fs-2">Cal</strong>culate 與 <strong class="fs-2">Cal</strong>orie<br>為您計算一天所需的熱量以及蛋白質<br>從此不再擔心熱量超標</p>
        </div>
      </div>
    </section>
    <section class="bg-primary-exlight py-6">
      <div class="container d-flex flex-column align-items-center justify-content-center text-center">
        <h2 class="fw-bold pb-4 fs-1">優選好食</h2>
        <swiper
          :navigation="true"
          :effect="'coverflow'"
          :grabCursor="true"
          :loop="true"
          :scrollbar="{
            hide: true,
          }"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :breakpoints="{
            '768': {
              slidesPerView: 3,
              spaceBetween: 40,
            }
          }"
          :modules="modules"
          class="swiper"
        >
          <swiper-slide class="bg-primary-exlight" v-for="product in products" :key="product.id">
            <div class="card card-translate" style="position: relative;">
              <RouterLink :to="`/product/${product.id}`" class="nav-link overlay-link">
                <img :src="product.imageUrl" class="card-img-top object-cover" height="200" alt="productImage">
                <div class="card-body text-center">
                  <h5 class="card-title fw-bold">{{ product.title }}</h5>
                  <p class="card-text"><span class="text-decoration-line-through">原價 ${{ product.origin_price }}</span><br>現在只要 ${{ product.price }}</p>
                  <p>熱量：{{ product.calorie }} 大卡</p>
                  <p>蛋白質：{{ product.protein }} 克</p>
                </div>
              </RouterLink>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <section class="position-relative">
      <div class="cover d-flex align-items-center justify-content-center text-primary-light"
      style="background: url(https://images.unsplash.com/photo-1557568192-2fafc8b5bdc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) no-repeat fixed center / cover ; width: 100%; height: 500px;">
        <div class="container position-absolute top-50 start-50 translate-middle" data-aos="fade-up">
          <div class="row w-100">
            <div class="col-12 col-lg-5">
              <label for="email" class="form-label pb-3 fs-3">訂閱我們<br>可獲得專屬減脂菜單！</label>
              <VForm class="input-group" v-slot="{ errors, meta }" @submit="subscribe">
                <VField
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="email@gmail.com"
                  rules="required|email"
                  v-model="email" />
                <button
                  type="submit"
                  class="btn btn-primary-transparent btn-lg hvr-glow animate__animated animate__zoomIn"
                  :disabled="!meta.valid">
                  訂閱
                </button>
                <ErrorMessage name="email" class="invalid-feedback" />
              </VForm>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-primary-dark text-primary-light pt-5">
      <div class="container d-flex flex-column align-items-center justify-content-center text-center" style="border-bottom: 1px solid rgb(230, 243, 250);" data-aos="zoom-in">
        <h2>Cal For You 幫你算</h2>
        <div class="d-flex align-items-center">
          <div>聯絡我們：<a href="tel:+886-912345678" class="tel">0912-345-678</a></div>
          <ul class="d-flex ps-0">
            <li>
              <a href="#" class="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook facebook-link" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-line line-link" viewBox="0 0 16 16">
                  <path d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div class="pb-2">
          營業時間（六日公休）：週一 ~ 週五 09：00 ~ 20：00
        </div>
      </div>
    </section>
    <ShowSubscribeToast
      ref="subscribeToast"/>
    <LoadingComponent
      ref="loading" />
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import LoadingComponent from '@/components/LoadingComponent.vue'
import ShowSubscribeToast from '@/components/ShowSubscribeToast.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Scrollbar } from 'swiper'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css'

import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      email: '',
      modules: [Autoplay, Navigation, Scrollbar]
    }
  },
  methods: {
    getProducts () {
      this.$http(`${VITE_URL}v2/api/${VITE_PATH}/products/all`)
        .then(res => {
          this.products = res.data.products
          this.$refs.loading.loading.isLoading = false
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    subscribe () {
      this.$refs.subscribeToast.showSubscribeToast()
    }
  },
  components: {
    RouterLink,
    Swiper,
    SwiperSlide,
    LoadingComponent,
    ShowSubscribeToast
  },
  mounted () {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 200, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false // whether animation should happen only once - while scrolling down
    })
    this.getProducts()
  }
}
</script>
