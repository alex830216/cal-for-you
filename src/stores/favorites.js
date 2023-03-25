import { defineStore } from 'pinia'

const favoritesStore = defineStore('favorites', {
  state: () => {
    return {
      items: JSON.parse(localStorage.getItem('favorites')) || []
    }
  },
  actions: {
    addToFavorites (item) {
      this.items.push(item)
      item.isFavorite = true
      localStorage.setItem('favorites', JSON.stringify(this.items))
    },
    removeFromFavorites (item) {
      const index = this.items.findIndex(i => i.id === item.id)
      this.items.splice(index, 1)
      item.isFavorite = false
      localStorage.setItem('favorites', JSON.stringify(this.items))
    },
    removeAllFavorites () {
      this.items = []
      localStorage.removeItem('favorites')
    }
  }
})

export default favoritesStore
