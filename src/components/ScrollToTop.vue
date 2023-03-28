<template>
  <div class="scroll-to-top position-fixed rounded-circle bg-primary text-white d-flex justify-content-center align-items-center" @click="scrollToTop">
    <i class="bi bi-chevron-up fs-4"></i>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
