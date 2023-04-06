import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/all.scss'
import 'bootstrap' // bootstrap JS
import 'bootstrap-icons/font/bootstrap-icons.css'
import {
  Field, Form, ErrorMessage, defineRule, configure
} from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import { currency, date, dateMonth } from './methods/filters'

import App from './App.vue'
import router from './router'

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
defineRule('phone', (value) => {
  const pattern = /^09\d{8}$/ // 以 09 開頭，後面接 8 位數字
  return pattern.test(value) || '請輸入有效的手機號碼，需為 09 開頭，且長度為十碼'
})
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

const app = createApp(App)

app.config.globalProperties.$filters = { currency, date, dateMonth }

app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)

app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
