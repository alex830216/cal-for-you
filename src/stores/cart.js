import { defineStore } from 'pinia'
import axios from 'axios'

const { VITE_URL, VITE_PATH } = import.meta.env

const cartStore = defineStore('cart', {
  state: () => {
    return {
      carts: [],
      total: 0,
      final_total: 0,
      couponCode: '',
      couponIsUsed: false
    }
  },
  actions: {
    getCart () {
      axios.get(`${VITE_URL}v2/api/${VITE_PATH}/cart`)
        .then(res => {
          this.carts = res.data.data.carts
          this.total = res.data.data.total
          // 使用優惠券後的金額
          this.couponIsUsed = JSON.parse(localStorage.getItem('coupon'))
          this.final_total = res.data.data.final_total
        })
    },
    // eslint-disable-next-line camelcase
    addToCart (product_id, qty = 1) {
      // eslint-disable-next-line camelcase
      const data = {
        data: {
          // eslint-disable-next-line camelcase
          product_id,
          qty
        }
      }
      axios.post(`${VITE_URL}v2/api/${VITE_PATH}/cart`, data).then(() => {
        this.getCart()
      })
    },
    useCoupon (coupon) {
      this.couponCode = coupon
      const data = {
        data: {
          code: this.couponCode
        }
      }
      axios.post(`${VITE_URL}v2/api/${VITE_PATH}/coupon`, data)
        .then((res) => {
          this.couponIsUsed = true
          localStorage.setItem('coupon', JSON.stringify(this.couponIsUsed))
          this.final_total = res.data.final_total
          this.getCart()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  }
})

export default cartStore
