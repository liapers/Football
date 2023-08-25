import { ref } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useMatchStore = defineStore('match', () => {
  const match = ref(undefined)

  async function load(id) {
    const options = {
      method: 'GET',
      url: `/fixtures/${id}`,
      params: {api_token: import.meta.env.VITE_API_KEY, include: 'localTeam,visitorTeam,league'}
    }

    const result = await axios(options)

    match.value = result.data.data
  }

  return { match, load }
})
