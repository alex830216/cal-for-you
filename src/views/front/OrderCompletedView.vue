<template>
  <section class="container pt-6 pb-5">
    <h2 class="text-center pb-4 fw-bold">完成訂單</h2>
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
          <div class="circle bg-white border border-primary rounded-circle"></div>
          <div class="mt-3 fw-bold">填寫付款資料</div>
        </div>
      </div>
      <div class="col-3 ps-0">
        <div class="timeline-item d-flex flex-column align-items-center justify-content-center">
          <div class="line bg-black w-100"></div>
          <div class="circle bg-primary border border-primary rounded-circle"></div>
          <div class="mt-3">完成訂單</div>
        </div>
      </div>
    </div>
  </section>

  <section class="container py-3">
    <div class="fs-1 text-success pb-2">感謝您的訂單<br>訂單成立，已完成付款！</div>
    <div class="fs-5">以下是您在 Cal For You 幫你算<br>訂購的電子明細</div>
  </section>

  <section class="container">
    <table class="table table-primary table-bordered border-primary-subtle">
      <thead>
        <tr>
          <th class="col-2">訂單金額</th>
          <td>${{ order.total }}</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="col-2">訂單編號</th>
          <td>{{ order.id }}</td>
        </tr>
        <tr>
          <th class="col-2">訂單成立日期</th>
          <td>{{ $filters.date(order.create_at) }}</td>
        </tr>
        <tr>
          <th class="col-2">訂購品項</th>
          <td>
            <table class="table table-primary border-primary-subtle">
              <thead>
                <tr>
                  <th>品名</th>
                  <th>單價</th>
                  <th>數量</th>
                  <th>小計</th>
                </tr>
              </thead>
              <tbody>
                <template v-if="order.products">
                  <tr v-for="product in order.products" :key="product.id">
                    <td>{{ product.product.title }}</td>
                    <td>{{ product.product.price }}</td>
                    <td>{{ product.qty }}</td>
                    <td>${{ product.total }}</td>
                  </tr>
                </template>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3" class="col-11 text-end pe-5 fw-bold">訂單金額</td>
                  <td class="col-1 fw-bold">${{ order.total }}</td>
                </tr>
              </tfoot>
            </table>
          </td>
        </tr>
        <tr>
          <th class="col-2">訂購人資料</th>
          <td>
            <table class="table table-primary border-primary-subtle">
              <template v-if="order.user">
                <thead>
                  <tr>
                    <th class="col-2">訂購人</th>
                    <td>{{ order.user.name }}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="col-2">Email</th>
                    <td>{{ order.user.email }}</td>
                  </tr>
                  <tr>
                    <th class="col-2">電話</th>
                    <td>{{ order.user.tel }}</td>
                  </tr>
                  <tr>
                    <th class="col-2">地址</th>
                    <td>{{ order.user.address }}</td>
                  </tr>
                </tbody>
              </template>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      order: {}
    }
  },
  methods: {
    getOrder () {
      const orderId = this.$route.query.orderId
      this.$http.get(`${VITE_URL}/v2/api/${VITE_PATH}/order/${orderId}`)
        .then(res => {
          this.order = res.data.order
        })
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>
