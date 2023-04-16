<template>
  <div>
    <section class="container pt-6 pb-5">
      <h2 class="text-center pb-md-5 fw-bold">填寫付款資料</h2>
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
              <div class="circle bg-white border border-primary rounded-circle"></div>
              <div class="mt-3">填寫訂購資料</div>
            </div>
          </div>
          <div class="col-3 px-0">
            <div class="timeline-item d-flex flex-column align-items-center justify-content-center">
              <div class="line bg-black w-100"></div>
              <div class="circle bg-primary border border-primary rounded-circle"></div>
              <div class="mt-3 fw-bold">填寫付款資料</div>
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
    <section class="container p-5 d-flex justify-content-center bg-primary-exlight">
      <div class="w-35">
        <h3 class="pb-4 text-center">
          付款資料
        </h3>
        <VForm class="pb-4" ref="form" v-slot="{ errors, meta }" @submit="createPayment">
          <div class="mb-3 text-danger">* 為必填</div>
          <div class="mb-3">
            <label for="creditAccount" class="form-label">信用卡帳號 <span class="text-danger">*</span></label>
            <VField
              id="creditAccount"
              name="信用卡帳號"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['信用卡帳號'] }"
              placeholder="xxxx-xxxx-xxxx-xxxx"
              rules="required"
              v-model="form.creditAccount"
              maxlength="16" />
            <ErrorMessage name="信用卡帳號" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <label for="validateDate" class="form-label">有效日期 <span class="text-danger">*</span></label>
            <VField
              id="validateDate"
              name="有效日期"
              type="month"
              class="form-control"
              :class="{ 'is-invalid': errors['有效日期'] }"
              rules="required"
              v-model="form.validateDate"
              :min="minDate" />
            <ErrorMessage name="有效日期" class="invalid-feedback" />
          </div>
          <div class="mb-4">
            <label for="safeCode" class="form-label">安全碼 <span class="text-danger">*</span></label>
            <VField
              id="safeCode"
              name="安全碼"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['安全碼'] }"
              placeholder="123"
              rules="required|max:4"
              v-model="form.safeCode"
              maxlength="4" />
            <ErrorMessage name="安全碼" class="invalid-feedback" />
          </div>
          <div class="pb-4 fw-bold fs-5">
            商品總金額${{ $filters.currency(total) }} 元
          </div>
          <div>
            <RouterLink to="/orderInformation" class="btn btn-light me-4">返回填寫訂購資料</RouterLink>
            <button type="submit" class="btn btn-primary" :disabled="!meta.valid">付款</button>
          </div>
        </VForm>
      </div>
    </section>
  </div>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      total: 0,
      form: {
        creditAccount: '',
        validateDate: null,
        safeCode: ''
      }
    }
  },
  methods: {
    getOrder () {
      const orderId = this.$route.query.id
      this.$http(`${VITE_URL}v2/api/${VITE_PATH}/order/${orderId}`)
        .then(res => {
          this.total = res.data.order.total
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    createPayment () {
      const orderId = this.$route.query.id
      this.$http
        .post(`${VITE_URL}v2/api/${VITE_PATH}/pay/${orderId}`)
        .then(() => {
          this.$refs.form.resetForm()
          this.$router.push({ name: 'orderCompleted', query: { orderId } })
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    }
  },
  computed: {
    minDate () {
      const now = new Date()
      const year = now.getFullYear()
      const month = now.getMonth() + 1 // JS 月份是從 0 開始計算
      return `${year}-${month.toString().padStart(2, '0')}`
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>
