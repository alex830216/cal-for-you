<template>
  <div class="wrap">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary-dark fixed-top">
      <div class="container">
        <h1>
          <RouterLink to="/" class="navbar-brand fs-3 fw-bold text-primary-light hvr-grow" @click="navToggle"><!-- icon from https://freeicons.io/e-commerce-circle-gradient-2/calculator-calculate-math-calculation-icon-48905 -->
            <img src="../assets/logo.svg" alt="logo" width="30" height="30" class="d-inline-block align-text-top">
            Cal For You 幫你算</RouterLink>
        </h1>
        <button type="button" class="navbar-toggler text-primary-light" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent" ref="navbar">
          <ul class="navbar-nav me-lg-auto mb-2 mb-lg-0 ms-3 fs-5 text-center">
            <li class="nav-item">
              <RouterLink to="/calculate" class="nav-link text-primary-light" @click="navToggle">幫你算</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/products" class="nav-link text-primary-light" @click="navToggle">商品列表</RouterLink>
            </li>
          </ul>
          <ul class="d-flex navbar-nav me-2 mb-2 mb-lg-0 fs-3 text-center">
            <li class="nav-item mx-1">
              <RouterLink to="/cart" class="nav-link text-primary-light position-relative" @click="navToggle">
                <i class="bi bi-cart3"></i>
                <span class="position-absolute top-lg-25 start-lg-100 translate-middle badge rounded-pill bg-danger fs-6">
                  {{ carts.length }}
                </span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <RouterView class="content" />
    <ScrollToTop />
    <footer class="footer bg-primary-dark text-primary-light py-3">
      <div class="container d-flex flex-column align-items-center justify-content-center text-center">
        <div>
          僅個人作品使用，無任何商業用途 |
          <RouterLink to="/admin" class="nav-link text-primary-light d-inline-block">後台</RouterLink>
        </div>
        <div>
          Cal For You 幫你算 © 2023 ALL RIGHTS RESERVED |
          made by Alex
          <a href="https://github.com/alex830216" target="_blank" class="px-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github github-link" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { RouterView, RouterLink } from 'vue-router'
import { Collapse } from 'bootstrap'
import ScrollToTop from '@/components/ScrollToTop.vue'
import cartStore from '../stores/cart'

export default {
  components: {
    RouterView,
    RouterLink,
    ScrollToTop
  },
  computed: {
    ...mapState(cartStore, ['carts'])
  },
  methods: {
    navToggle () {
      const bsCollapse = new Collapse(this.$refs.navbar, {
        toggle: false
      })

      bsCollapse.hide()
    },
    ...mapActions(cartStore, ['getCart'])
  },
  mounted () {
    this.getCart()
    const navMenu = this.$refs.navbar
    document.addEventListener('click', function (event) {
      const clickTarget = event.target
      if (
        navMenu.classList.contains('show') &&
        !navMenu.contains(clickTarget) &&
        clickTarget.getAttribute('aria-controls') !== 'navbarSupportedContent'
      ) {
        const bsCollapse = new Collapse(navMenu, {
          toggle: false
        })

        bsCollapse.hide()
      }
    })
  }
}
</script>
