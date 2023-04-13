<template>
  <div class="container">
    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openModal('create')">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="120">
            優惠券名稱
          </th>
          <th width="120">打折比例</th>
          <th width="120">
            到期日
          </th>
          <th width="120">
            優惠代碼
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coupon in coupons" :key="coupon.id">
          <td>{{ coupon.title }}</td>
          <td>{{ coupon.percent }}</td>
          <td>{{ $filters.dateMonth(coupon.due_date) }}</td>
          <td>{{ coupon.code }}</td>
          <td>
            <span class="text-success" v-if="coupon.is_enabled">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button type="button" class="btn btn-outline-primary btn-sm" @click="openModal('edit',coupon)">
                編輯
              </button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="openModal('delete', coupon)">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <PaginationComponent
      :pages="page"
      @change-page="getCoupons" />
    <!-- Modal -->
    <div id="couponModal" ref="couponModal" class="modal fade" tabindex="-1" aria-labelledby="couponModalLabel"
      aria-hidden="true">
      <CouponModal
        :temp-coupon="tempCoupon"
        :add-or-update-coupon="addOrUpdateCoupon" />
    </div>
    <div id="delCouponModal" ref="delCouponModal" class="modal fade" tabindex="-1"
      aria-labelledby="delCouponModalLabel" aria-hidden="true">
      <DelCouponModal
        :temp-coupon="tempCoupon"
        :del-coupon="delCoupon" />
    </div>
    <!-- Modal -->
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import PaginationComponent from '@/components/PaginationComponent.vue'
import CouponModal from '@/components/CouponModal.vue'
import DelCouponModal from '@/components/DelCouponModal.vue'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  props: [
    'checkLogin'
  ],
  data () {
    return {
      coupons: [],
      tempCoupon: {},
      isNew: false,
      page: {},
      couponModal: {},
      delCouponModal: {}
    }
  },
  methods: {
    getCoupons (page = 1) {
      this.$http
        .get(`${VITE_URL}v2/api/${VITE_PATH}/admin/coupons?page=${page}`)
        .then((res) => {
          // 將資料回傳到本地的 products 陣列
          this.coupons = res.data.coupons
          this.page = res.data.pagination
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    addOrUpdateCoupon () {
      let url = `${VITE_URL}v2/api/${VITE_PATH}/admin/coupon`
      let method = 'post'
      this.tempCoupon.due_date = Date.parse(this.tempCoupon.due_date)
      if (!this.isNew) {
        url = `${VITE_URL}v2/api/${VITE_PATH}/admin/coupon/${this.tempCoupon.id}`
        method = 'put'
      }
      // 新增產品
      if (!this.tempCoupon.id) {
        this.$http[method](url, { data: this.tempCoupon })
          .then((res) => {
            alert(res.data.message)
            this.getCoupons()
            this.couponModal.hide()
          })
          .catch((err) => {
            alert(err.response.data.message)
          })
        // 編輯產品
      } else {
        this.$http[method](url, { data: this.tempCoupon })
          .then((res) => {
            alert(res.data.message)
            this.getCoupons()
            this.couponModal.hide()
          })
          .catch((err) => {
            alert(err.response.data.message)
          })
      }
    },
    // 刪除產品
    delCoupon () {
      const url = `${VITE_URL}v2/api/${VITE_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.$http
        .delete(url, { data: this.tempCoupon })
        .then((res) => {
          alert(res.data.message)
          this.getCoupons()
          this.delCouponModal.hide()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    openModal (status, coupon) {
      if (status === 'create') {
        this.couponModal.show()
        this.isNew = true
        this.tempCoupon = {}
      } else if (status === 'edit') {
        this.couponModal.show()
        this.isNew = false
        this.tempCoupon = { ...coupon }
        this.tempCoupon.due_date = this.$filters.dateMonth(this.tempCoupon.due_date)
      } else if (status === 'delete') {
        this.delCouponModal.show()
        this.tempCoupon = { ...coupon }
      }
    }
  },
  components: {
    PaginationComponent,
    CouponModal,
    DelCouponModal
  },
  // 一開始進入頁面就做
  mounted () {
    this.checkLogin()
    this.getCoupons()
    // 建立 bootstrap JS Modal 實體，用 ref 取代 id
    this.couponModal = new Modal(this.$refs.couponModal)
    this.delCouponModal = new Modal(this.$refs.delCouponModal)
  }
}
</script>
