<template>
  <div class="toast-container position-fixed top-7 end-0 p-3">
    <div ref="couponCopyToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="../assets/logo.svg" class="rounded me-2" height="20" alt="logo">
        <strong class="me-auto">Cal For You</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body text-success fs-5">
        優惠碼已成功複製！
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'bootstrap'

export default {
  methods: {
    showCouponCopyToast () {
      this.toast.show()
    }
  },
  mounted () {
    this.toast = new Toast(this.$refs.couponCopyToast)
  }
}
</script>
