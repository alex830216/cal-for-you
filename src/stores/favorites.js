import { defineStore } from 'pinia'

const favoritesStore = defineStore('favorites', {
  state: () => {
    return {
      items: JSON.parse(localStorage.getItem('favorites')) || []
    }
  },
  actions: {
    add (item) {
      if (!this.items.includes(item)) {
        this.items.push(item)
        localStorage.setItem('favorites', JSON.stringify(this.items))
      } else if (this.items.includes(item)) {
        const index = this.items.findIndex(i => i.id === item.id)
        this.items.splice(index, 1)
        localStorage.setItem('favorites', JSON.stringify(this.items))
      }
    },
    removeAll () {
      this.items = []
      localStorage.removeItem('favorites')
    }
  }
})

export default favoritesStore
