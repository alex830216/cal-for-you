<template>
  <div class="toast-container position-fixed top-7 end-0 p-3">
    <div ref="couponUsedToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="../assets/logo.svg" class="rounded me-2" height="20" alt="...">
        <strong class="me-auto">Cal For You</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body fs-5" :class="{ 'text-success': this.couponIsUsed, 'text-danger': !this.couponIsUsed }">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'bootstrap'

export default {
  data () {
    return {
      message: '',
      couponIsUsed: false
    }
  },
  methods: {
    showCouponUsedToast (couponIsUsed, message) {
      this.couponIsUsed = couponIsUsed
      this.message = message
      this.toast.show()
    }
  },
  mounted () {
    this.toast = new Toast(this.$refs.couponUsedToast)
  }
}
</script>
