import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLeaguesStore = defineStore('leagues', () => {
  const leagues = ref([])
  async function load() {
    const data = await axios.get("/v3/leagues")
    leagues = data.response
  }

  return { leagues, load }
})
