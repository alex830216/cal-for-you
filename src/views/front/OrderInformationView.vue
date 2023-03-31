<template>
  <div>
    <section class="container pt-6 pb-5">
      <h2 class="text-center pb-md-5 fw-bold">填寫訂購資料</h2>
      <div class="d-none d-md-block">
        <div class="row">
          <div class="col-3 pe-0">
            <div class="timeline-item d-flex flex-column align-items-center justify-content-center">
              <div class="line bg-black w-100"></div>
              <div class="circle bg-white border border border-primary rounded-circle"></div>
              <div class="mt-3">購物車清單</div>
            </div>
          </div>
          <div class="col-3 px-0">
            <div class="timeline-item d-flex flex-column align-items-center justify-content-center">
              <div class="line bg-black w-100"></div>
              <div class="circle bg-primary border border-primary rounded-circle"></div>
              <div class="mt-3 fw-bold">填寫訂購資料</div>
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
    <section class="container py-3">
      <table class="table table-hover align-middle text-center">
        <thead>
          <tr class="table-primary">
            <th class="col-6">品名</th>
            <th class="col-2">單價</th>
            <th class="col-2">數量</th>
            <th class="col-2">小計</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="carts">
            <tr v-for="item in carts" :key="item.id">
              <td class="d-flex flex-column flex-md-row align-items-center justify-content-center">
                <div class="col-12 col-md-3 pb-2 pb-md-0 me-md-2">
                  <img :src="item.product.imageUrl" class="object-cover w-100" height="120" alt="產品圖片">
                </div>
                <div class="col-12 col-md-9 text-center text-md-start">{{ item.product.title }}</div>
              </td>
              <td>
                {{ item.product.price }}
              </td>
              <td>
                {{ item.qty }}
              </td>
              <td>
                ${{ item.product.price * item.qty }}
              </td>
            </tr>
          </template>
        </tbody>
        <tfoot>
          <tr class="fs-4">
            <td colspan="3" class="col-11 text-end pe-5 fw-bold">訂單金額</td>
            <td class="col-1 fw-bold">${{ $filters.currency(final_total) }}</td>
          </tr>
        </tfoot>
      </table>
    </section>
    <section class="container">
      <div class="bg-primary-subtle p-4">
        <h3 class="pb-3">
          訂購資料
        </h3>
        <VForm class="pb-4" ref="form" v-slot="{ errors, meta }" @submit="createOrder">
          <div class="mb-3 text-danger">* 為必填</div>
          <div class="mb-3">
            <label for="email" class="form-label">Email <span class="text-danger">*</span></label>
            <VField
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="name@gmail.com"
              rules="required|email"
              v-model="form.user.email"
            ></VField>
            <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名 <span class="text-danger">*</span></label>
            <VField
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="王小明"
              rules="required"
              v-model="form.user.name"
            ></VField>
            <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話 <span class="text-danger">*</span></label>
            <VField
              id="tel"
              name="電話"
              type="tel"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="0912345678"
              rules="required|phone"
              v-model="form.user.tel"
            ></VField>
            <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">收件人地址 <span class="text-danger">*</span></label>
            <VField
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="xx市xx區xx路x段x號x樓"
              rules="required"
              v-model="form.user.address"
            ></VField>
            <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-4">
            <label for="remarks" class="form-label">備註</label>
            <textarea class="form-control" id="remarks" cols="30" rows="5" v-model="form.message"></textarea>
          </div>
          <div class="d-flex justify-content-end align-items-center p-3">
            <RouterLink to="/cart" class="btn btn-light me-4">返回購物車</RouterLink>
            <button
              type="submit"
              class="btn btn-primary"
              :disabled="!meta.valid || carts.length === 0">
              確認結帳
            </button>
          </div>
        </VForm>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import cartStore from '../../stores/cart'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      cart: {},
      loadingItem: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
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
    },
    deleteCart (item) {
      this.loadingItem = item.id
      this.$http.delete(`${VITE_URL}v2/api/${VITE_PATH}/cart/${item.id}`).then(() => {
        this.getCart()
        this.loadingItem = ''
      })
    },
    deleteCarts () {
      this.$http.delete(`${VITE_URL}v2/api/${VITE_PATH}/carts`).then(() => {
        this.getCart()
      })
    },
    createOrder () {
      const data = this.form
      this.$http.post(`${VITE_URL}v2/api/${VITE_PATH}/order`, { data }).then((res) => {
        // 清除form資料，veevalidate提供的方法
        this.$refs.form.resetForm()
        this.form.message = ''
        this.getCart()
        const id = res.data.orderId
        this.$router.push({ name: 'payment', query: { id } })
      })
        .catch(err => {
          alert(err.response.data.message)
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
