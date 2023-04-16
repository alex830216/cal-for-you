<template>
  <div class="toast-container position-fixed top-7 end-0 p-3">
    <div ref="cartToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="../assets/logo.svg" class="rounded me-2" height="20" alt="logo">
        <strong class="me-auto">Cal For You</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body text-success fs-5">
        商品已成功加入購物車！
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'bootstrap'

export default {
  methods: {
    showCartToast () {
      this.toast.show()
    }
  },
  mounted () {
    this.toast = new Toast(this.$refs.cartToast)
  }
}
</script>
