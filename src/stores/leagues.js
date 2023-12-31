import { ref } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useLeaguesStore = defineStore('leagues', () => {
  const leagues = ref([])
  const leagueDetail = ref({})

  async function load() {
    const options = {
      method: 'GET',
      url: '/leagues',
      params: {api_token: import.meta.env.VITE_API_KEY, include: 'country'}
    }

    const result = await axios(options)

    leagues.value = result.data.data
  }

  async function search(name) {
    const options = {
      method: 'GET',
      url: `/leagues/search/${name}`,
      params: {api_token: import.meta.env.VITE_API_KEY, include: 'country'}
    }

    const result = await axios(options)

    leagues.value = result.data.data
  }

  async function loadOne(id) {
    const options = {
      method: 'GET',
      url: `/leagues/${id}`,
      params: {api_token: import.meta.env.VITE_API_KEY, include: 'country,season'}
    }

    const result = await axios(options)

    leagueDetail.value = result.data.data
  }

  return { leagues, leagueDetail, load, search, loadOne }
})
