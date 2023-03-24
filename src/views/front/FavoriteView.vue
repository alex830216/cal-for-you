<template>
  <section class="container pt-6 pb-5">
    <h2 class="text-center">收藏清單</h2>
    <button type="button" class="btn btn-outline-primary mb-3" @click="removeAllFavorites">刪除所有收藏</button>
    <div class="row g-4">
      <template v-if="items">
        <div v-for="favoriteItem in items" :key="favoriteItem.id" class="col-md-4">
          <div class="card">
            <RouterLink :to="`/product/${favoriteItem.id}`" class="nav-link text-primary-light"><img :src="favoriteItem.imageUrl" class="card-img-top object-cover" height="200" alt="產品圖片"></RouterLink>
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ favoriteItem.title }}</h5>
              <p class="card-text"><span class="text-decoration-line-through">原價 ${{ favoriteItem.origin_price }}</span><br>現在只要 ${{ favoriteItem.price }}</p>
              <p>熱量：{{ favoriteItem.calorie }} 大卡</p>
              <p>蛋白質：{{ favoriteItem.protein }} 克</p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import favoritesStore from '@/stores/favorites'

export default {
  methods: {
    removeAllFavorites () {
      this.removeAll()
    },
    ...mapActions(favoritesStore, ['removeAll'])
  },
  computed: {
    ...mapState(favoritesStore, ['items'])
  }
}
</script>
