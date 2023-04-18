<template>
  <div class="toast-container position-fixed top-7 end-0 p-3">
    <div ref="subscribeToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="../assets/logo.svg" class="rounded me-2" height="20" alt="logo">
        <strong class="me-auto">Cal For You</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body text-success fs-5">
        訂閱成功！
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'bootstrap'

export default {
  methods: {
    showSubscribeToast () {
      this.toast.show()
    }
  },
  mounted () {
    this.toast = new Toast(this.$refs.subscribeToast)
  }
}
</script>
