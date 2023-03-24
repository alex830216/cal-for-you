<template>
  <div>
    <section class="container pt-6 pb-5">
      <h2 class="text-center pb-5 fw-bold">購物車清單</h2>
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
    </section>
    <section class="container py-3">
      <table class="table table-hover align-middle">
        <thead>
          <tr class="table-primary">
            <th class="col-2">刪除</th>
            <th class="col-7">品名</th>
            <th class="col-2">數量</th>
            <th class="col-1">單價</th>
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
                  <i class="fas fa-spinner fa-pulse"
                    v-if="item.id === loadingItem"></i>
                  x
                </button>
              </td>
              <td>
                <img :src="item.product.imageUrl" class="object-cover" height="120" alt="產品圖片">{{ item.product.title }}
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
            <td>${{ total }}</td>
          </tr>
          <!-- <tr>
            <td colspan="3" class="text-end text-success">折扣價</td>
            <td class="text-success">${{ final_total }}</td>
          </tr> -->
        </tfoot>
      </table>
    </section>
    <section class="container pb-3">
      <div class="d-flex justify-content-between align-items-center p-3 bg-primary-exlight">
        <div>
          <button @click="deleteCarts" type="button" class="btn btn-outline-danger">刪除所有品項</button>
        </div>
        <div>
          <RouterLink to="/products" class="btn btn-light me-3">繼續購物</RouterLink>
          <RouterLink
            :to="!carts.length ? '' : '/orderInformation'"
            class="btn btn-primary">
            結帳({{ carts.length }})
          </RouterLink>
        </div>
      </div>
    </section>
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
      disabled: true
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
        .put(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          this.cart = res.data.data
          this.getCart()
          this.loadingItem = ''
        })
    },
    deleteCart (item) {
      this.loadingItem = item.id
      this.$http.delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${item.id}`).then(() => {
        this.getCart()
        this.loadingItem = ''
      })
    },
    deleteCarts () {
      this.$http.delete(`${VITE_URL}/v2/api/${VITE_PATH}/carts`).then(() => {
        this.getCart()
      })
    },
    ...mapActions(cartStore, ['getCart', 'addToCart'])
  },
  computed: {
    ...mapState(cartStore, ['carts', 'total', 'final_total'])
  },
  mounted () {
    this.getCart()
  }
}
</script>
