import { ref } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useMatchesStore = defineStore('matches', () => {
  const matches = ref([])

  async function loadBySeason(seasonId) {
    const options = {
      method: 'GET',
      url: `/seasons/${ seasonId }`,
      params: {api_token: import.meta.env.VITE_API_KEY, include: 'fixtures.localTeam,fixtures.visitorTeam,fixtures.goals'}
    }

    const result = await axios(options)

    matches.value = result.data.data.fixtures.data
  }

  return { matches, loadBySeason }
})
