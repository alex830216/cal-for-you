import { defineStore } from 'pinia'

const favoritesStore = defineStore('favorites', {
  state: () => {
    return {
      items: []
    }
  },
  actions: {
    add (item) {
      if (!this.items.includes(item)) {
        this.items.push(item)
      } else if (this.items.includes(item)) {
        const index = this.items.findIndex(i => i.id === item.id)
        this.items.splice(index, 1)
      }
    },
    removeAll () {
      this.items = []
    }
  }
})

export default favoritesStore
