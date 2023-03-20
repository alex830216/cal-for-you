import { defineStore } from 'pinia'
import axios from 'axios'

const { VITE_URL, VITE_PATH } = import.meta.env

const cartStore = defineStore('cart', {
  state: () => {
    return {
      carts: [],
      total: 0,
      final_total: 0
    }
  },
  actions: {
    getCart () {
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
        .then(res => {
          this.carts = res.data.data.carts
          this.total = res.data.data.total
          // 使用優惠券後的金額
          this.final_total = res.data.data.final_total
        })
    },
    // eslint-disable-next-line camelcase
    addToCart (product_id, qty = 1) {
      // this.loadingItem = product_id
      const data = {
        data: {
          // eslint-disable-next-line camelcase
          product_id,
          qty
        }
      }
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, data).then(() => {
        this.getCart()
        // this.loadingItem = ''
      })
    }
  }
})

export default cartStore
