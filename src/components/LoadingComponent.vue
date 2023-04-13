<template>
  <div>
    <loading
      :active="loading.isLoading"
      :is-full-page="loading.fullPage"
      :background-color="loading.backgroundColor">
      <div class="loadingio-spinner-ripple-6lay1q6s1f">
        <div class="ldio-170y7nacyvl">
          <div></div>
          <div></div>
        </div>
      </div>
    </loading>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

export default {
  data () {
    return {
      loading: {
        isLoading: false,
        fullPage: false,
        backgroundColor: 'rgb(230, 243, 250)'
      }
    }
  },
  components: {
    Loading
  },
  mounted () {
    this.loading.isLoading = true
  }
}
</script>
