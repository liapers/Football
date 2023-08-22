import { ref } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useLeaguesStore = defineStore('leagues', () => {
  const leagues = ref([])
  async function load() {
    const options = {
      method: 'GET',
      url: '/leagues',
      params: {api_token: import.meta.env.VITE_API_KEY}
    }

    const result = await axios(options)

    leagues.value = result.data.data
  }

  async function search(name) {
    const options = {
      method: 'GET',
      url: `/leagues/search/${name}`,
      params: {api_token: import.meta.env.VITE_API_KEY}
    }

    const result = await axios(options)

    leagues.value = result.data.data
  }

  return { leagues, load, search }
})
