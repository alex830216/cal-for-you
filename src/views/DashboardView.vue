<template>
  <div>
    <div>這是後台頁面</div>
    <RouterLink to="/admin">產品列表</RouterLink> |
    <RouterLink to="/admin/orders">訂單列表</RouterLink> |
    <RouterLink to="/admin/coupons">優惠券列表</RouterLink> |
    <RouterLink to="/">回前台</RouterLink> |
    <a href="#" @click.prevent="logout">登出</a>
    <routerView :check-login="checkLogin" />
  </div>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router'

const { VITE_URL } = import.meta.env
export default {
  data () {
    return {
    }
  },
  components: {
    RouterView,
    RouterLink
  },
  methods: {
    logout () {
      document.cookie = 'hexToken=; expires='
      this.$router.push('/login')
    },
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')

      this.$http.defaults.headers.common.Authorization = token
      this.$http
        .post(`${VITE_URL}v2/api/user/check`)
        .then(() => {})
        .catch(() => {
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>
