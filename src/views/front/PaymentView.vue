<template>
  <section class="container pt-6 pb-5">
    <h2 class="text-center pb-4 fw-bold">填寫付款資料</h2>
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
  </section>

  <section class="container py-3">
    <div class="bg-primary-subtle p-4">
      <h3 class="pb-3">
        付款資料
      </h3>
      <form>
        <div class="mb-3 text-danger">* 為必填</div>
        <div class="mb-3">
          <label for="credit-account" class="form-label">信用卡帳號 <span class="text-danger">*</span></label>
          <!-- 製做一個 input 欄位，當使用者輸入四個數字就自動加上 -，用 Vue 做 -->
          <!-- validate max 16 碼 -->
          <input type="text" class="form-control" id="credit-account" placeholder="xxxx xxxx xxxx xxxx">
        </div>
        <div class="mb-3">
          <label for="validate-date" class="form-label">有效日期 <span class="text-danger">*</span></label>
          <!-- 製做一個 input 欄位，當使用者輸入兩個數字就自動加上 /，用 Vue 做 -->
          <input type="text" class="form-control" id="validate-date" placeholder="07/35">
        </div>
        <div class="mb-4">
          <label for="safe-code" class="form-label">安全碼 <span class="text-danger">*</span></label>
          <!-- validate max 4 碼 -->
          <input type="text" class="form-control" id="safe-code" placeholder="123">
        </div>
        <div class="mb-4 fw-bold fs-5">
          商品總金額${{ total }} 元
        </div>
        <div>
          <RouterLink to="/orderInformation" class="btn btn-light me-3">返回填寫訂購資料</RouterLink>
          <button type="button" class="btn btn-primary" @click="pay">付款</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      total: 0
    }
  },
  methods: {
    getOrder () {
      const orderId = this.$route.query.id
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/order/${orderId}`)
        .then(res => {
          this.total = res.data.order.total
        })
    },
    pay () {
      const orderId = this.$route.query.id
      this.$http.post(`${VITE_URL}/v2/api/${VITE_PATH}/pay/${orderId}`)
        .then(() => {
          this.$router.push({ name: 'orderCompleted', query: { orderId } })
        })
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>
