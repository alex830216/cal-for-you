<template>
  <div class="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary-dark fixed-top">
      <div class="container">
        <h1>
          <RouterLink to="/" class="navbar-brand fs-3 fw-bold text-primary-light"><!-- icon from https://freeicons.io/e-commerce-circle-gradient-2/calculator-calculate-math-calculation-icon-48905 -->
            <img src="../assets/logo.svg" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
            Cal For You 幫你算</RouterLink>
        </h1>
        <button class="navbar-toggler text-primary-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-lg-auto mb-2 mb-lg-0 fs-5 text-center">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link text-primary-light">首頁</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/calculate" class="nav-link text-primary-light">幫你算</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/products" class="nav-link text-primary-light">商品列表</RouterLink>
            </li>
          </ul>
          <ul class="d-flex navbar-nav me-2 mb-2 mb-lg-0 fs-3 text-center">
            <li class="nav-item mx-1">
              <RouterLink to="/favorite" class="nav-link text-primary-light"><i class="bi bi-heart text-primary-light"></i></RouterLink>
            </li>
            <li class="nav-item mx-1">
              <RouterLink to="/cart" class="nav-link text-primary-light position-relative">
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
    <RouterView class="content"></RouterView>
    <footer class="footer bg-primary-dark text-primary-light py-3">
      <div class="container d-flex flex-column align-items-center justify-content-center text-center">
        <div>
          僅個人作品使用，無任何商業用途 |
          <RouterLink to="/admin" class="nav-link text-primary-light d-inline-block">後台</RouterLink>
        </div>
        <div>
          Cal For You 幫你算 © 2023 ALL RIGHTS RESERVED |
          made by Alex <a href="https://github.com/alex830216" target="_blank" class="github-link"><i class="bi bi-github fs-3"></i></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { RouterView, RouterLink } from 'vue-router'
import cartStore from '../stores/cart'

export default {
  components: {
    RouterView,
    RouterLink
  },
  computed: {
    ...mapState(cartStore, ['carts'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart'])
  },
  mounted () {
    this.getCart()
  }
}
</script>
