<template>
  <div class="container col-12 col-lg-6">
    <section class="pt-6 pb-5">
      <h2 class="text-center pb-md-5 fw-bold">完成訂單</h2>
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
              <div class="circle bg-white border border-primary rounded-circle"></div>
              <div class="mt-3">填寫付款資料</div>
            </div>
          </div>
          <div class="col-3 ps-0">
            <div class="timeline-item d-flex flex-column align-items-center justify-content-center">
              <div class="line bg-black w-100"></div>
              <div class="circle bg-primary border border-primary rounded-circle"></div>
              <div class="mt-3 fw-bold">完成訂單</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pb-3">
      <div class="fs-1 text-success pb-5">感謝您的訂單<br>訂單成立，已完成付款！</div>
      <div class="fs-2 pb-5">
        <span class="text-primary-dark pe-2">有東西忘記買了？</span>
        <RouterLink to="/products" class="btn btn-lg btn-outline-primary hvr-pulse">
          繼續購物
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
          </svg>
        </RouterLink>
      </div>
      <div class="fs-5">以下是您在 Cal For You 幫你算<br>訂購的電子明細</div>
    </section>
    <section class="pb-5">
      <table class="table table-primary table-bordered border-primary-subtle mb-5">
        <thead>
          <tr>
            <th class="col-4 col-md-3">訂單金額</th>
            <td>${{ $filters.currency(order.total) }}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="col-4 col-md-3">訂單編號</th>
            <td>{{ order.id }}</td>
          </tr>
          <tr>
            <th class="col-4 col-md-3">訂單成立日期</th>
            <td>{{ $filters.date(order.create_at) }}</td>
          </tr>
          <tr>
            <th class="col-4 col-md-3">訂購品項</th>
            <td>
              <template v-if="order.products">
                <table class="table table-primary border-primary-subtle">
                  <template v-for="product in order.products" :key="product.id">
                    <thead>
                      <tr>
                        <th class="col-5 col-md-4">品名</th>
                        <td>{{ product.product.title }}</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th class="col-5 col-md-4">單價</th>
                        <td>{{ product.product.price }}</td>
                      </tr>
                      <tr>
                        <th class="col-5 col-md-4">數量</th>
                        <td>{{ product.qty }}</td>
                      </tr>
                      <tr>
                        <th class="col-5 col-md-4">小計</th>
                        <td>${{ $filters.currency(product.total) }}</td>
                      </tr>
                    </tbody>
                  </template>
                  <tfoot>
                    <tr>
                      <th>訂單金額</th>
                      <td class="fw-bold">${{ $filters.currency(order.total) }}</td>
                    </tr>
                  </tfoot>
                </table>
              </template>
            </td>
          </tr>
          <tr>
            <th class="col-4 col-md-3">訂購人資料</th>
            <td>
              <table class="table table-primary border-primary-subtle">
                <template v-if="order.user">
                  <thead>
                    <tr>
                      <th class="col-5 col-md-4">訂購人</th>
                      <td>{{ order.user.name }}</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th class="col-5 col-md-4">Email</th>
                      <td>{{ order.user.email }}</td>
                    </tr>
                    <tr>
                      <th class="col-5 col-md-4">電話</th>
                      <td>{{ order.user.tel }}</td>
                    </tr>
                    <tr>
                      <th class="col-5 col-md-4">地址</th>
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
  </div>
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
      this.$http(`${VITE_URL}v2/api/${VITE_PATH}/order/${orderId}`)
        .then(res => {
          this.order = res.data.order
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>
