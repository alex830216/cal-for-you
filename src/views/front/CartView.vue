<template>
  <div>
    <section class="container pt-6 pb-5">
      <h2 class="text-center pb-md-5 fw-bold">購物車清單</h2>
      <div class="d-none d-md-block">
        <div class="row">
          <div class="col-3 pe-0">
            <div class="timeline-item d-flex flex-column align-items-center justify-content-center">
              <div class="line bg-black w-100"></div>
              <div class="circle bg-primary border border-primary rounded-circle"></div>
              <div class="mt-3 fw-bold">購物車清單</div>
            </div>
          </div>
          <div class="col-3 px-0">
            <div class="timeline-item d-flex flex-column align-items-center justify-content-center">
              <div class="line bg-black w-100"></div>
              <div class="circle bg-white border border-primary rounded-circle"></div>
              <div class="mt-3">填寫訂購資料</div>
            </div>
          </div>
          <div class="col-3 px-0">
            <div class="timeline-item d-flex flex-column align-items-center justify-content-center">
              <div class="line bg-black w-100"></div>
              <div class="circle bg-white border border-primary rounded-circle"></div>
              <div class="mt-3">填寫付款資料</div>
            </div>
          </div>
          <div class="col-3 ps-0">
            <div class="timeline-item d-flex flex-column align-items-center justify-content-center">
              <div class="line bg-black w-100"></div>
              <div class="circle bg-white border border-primary rounded-circle"></div>
              <div class="mt-3">完成訂單</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <template
      v-if="carts.length">
      <section class="container py-3">
        <template v-if="carts.length">
          <table class="table table-hover align-middle">
            <thead>
              <tr class="table-primary">
                <th class="col-2">刪除</th>
                <th class="col-6">品名</th>
                <th class="col-3">數量</th>
                <th class="col-2">單價</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="carts">
                <tr v-for="item in carts" :key="item.id">
                  <td>
                    <!-- 刪除時不能重複刪除 -->
                    <button type="button"
                      class="btn btn-outline-danger btn-sm"
                      :disabled="item.id === loadingItem"
                      @click="deleteCart(item)">
                      <span
                        class="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                        v-if="item.id === loadingItem">
                      </span>
                      <i class="bi bi-trash3 fs-6"></i>
                    </button>
                  </td>
                  <td class="d-flex flex-column flex-md-row align-items-center justify-content-center">
                    <div class="col-12 col-md-3 pb-2 pb-md-0 me-md-2">
                      <img :src="item.product.imageUrl" class="object-cover w-100" height="120" alt="productImage">
                    </div>
                    <div class="col-12 col-md-9 text-center text-md-start">{{ item.product.title }}</div>
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <div class="input-group">
                        <!-- 更新時不能更改數量 -->
                        <select name="" id=""
                          class="form-select"
                          v-model="item.qty"
                          :disabled="item.id === loadingItem"
                          @change="updateCart(item)">
                          <option :value="i" v-for="i in 10" :key="`${i}165146`">{{ i }}</option>
                        </select>
                      </div>
                    </div>
                  </td>
                  <td>
                    {{ item.product.price }}
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="col-11 text-end">商品總金額</td>
                <td>${{ $filters.currency(total) }}</td>
              </tr>
              <tr v-if="couponIsUsed">
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-success">${{ $filters.currency(final_total) }}</td>
              </tr>
            </tfoot>
          </table>
        </template>
      </section>
      <section class="container bg-primary-exlight p-4">
        <div class="d-flex justify-content-end align-items-center pb-4">
          <div>
            輸入優惠碼
          </div>
          <div class="px-3">
            <input type="text" class="p-1" placeholder="請輸入優惠碼" v-model="coupon">
          </div>
          <button type="button" class="btn btn-outline-primary" @click="useCoupon(this.coupon); clear()">
            使用
          </button>
        </div>
        <template v-if="couponIsUsed">
          <div class="d-flex justify-content-end align-items-center pb-4 text-danger fw-bold">
            優惠碼已使用，享{{ final_total * 10 / total }}折優惠
          </div>
        </template>
        <div class="d-flex flex-column flex-sm-row justify-content-between align-items-center">
          <div>
            <button type="button" @click="deleteCarts" class="btn btn-outline-danger mb-3 mb-sm-0">刪除所有品項</button>
          </div>
          <div>
            <RouterLink to="/products" class="btn btn-light me-4">繼續購物</RouterLink>
            <RouterLink
              :to="!carts.length ? '' : '/orderInformation'"
              class="btn btn-primary">
              結帳({{ carts.length }})
            </RouterLink>
          </div>
        </div>
      </section>
    </template>
    <template v-else>
      <section class="container pt-7">
        <div class="fs-2 text-center">
          <div>購物車目前沒有商品，<RouterLink to="/products" class="link-primary text-decoration-none">繼續購物</RouterLink></div>
        </div>
      </section>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import cartStore from '@/stores/cart'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      cart: {},
      loadingItem: '',
      disabled: true,
      coupon: ''
    }
  },
  methods: {
    updateCart (item) {
      const data = {
        product_id: item.product.id,
        qty: item.qty
      }
      this.loadingItem = item.id
      this.$http
        .put(`${VITE_URL}v2/api/${VITE_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          this.cart = res.data.data
          this.getCart()
          this.loadingItem = ''
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    deleteCart (item) {
      this.loadingItem = item.id
      this.$http
        .delete(`${VITE_URL}v2/api/${VITE_PATH}/cart/${item.id}`)
        .then(() => {
          this.getCart()
          this.loadingItem = ''
          localStorage.setItem('coupon', JSON.stringify(false))
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    deleteCarts () {
      this.$http
        .delete(`${VITE_URL}v2/api/${VITE_PATH}/carts`)
        .then(() => {
          this.getCart()
          localStorage.setItem('coupon', JSON.stringify(false))
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    showToast (couponIsUsed, message) {
      this.$refs.showCouponUsedToast.showCouponUsedToast(couponIsUsed, message)
    },
    clear () {
      this.coupon = ''
    },
    ...mapActions(cartStore, ['getCart', 'addToCart', 'useCoupon', 'showToast'])
  },
  computed: {
    ...mapState(cartStore, ['carts', 'total', 'final_total', 'couponIsUsed'])
  },
  mounted () {
    this.getCart()
  }
}
</script>
