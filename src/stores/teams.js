import { ref } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useTeamsStore = defineStore('teams', () => {
  const teams = ref([])
  const team = ref(undefined)

  async function load() {
    const options = {
      method: 'GET',
      url: '/teams',
      params: {api_token: import.meta.env.VITE_API_KEY, include: 'country,league'}
    }

    const result = await axios(options)

    teams.value = result.data.data
  }

  async function search(name) {
    const options = {
      method: 'GET',
      url: `/teams/search/${name}`,
      params: {api_token: import.meta.env.VITE_API_KEY, include: 'country,league'}
    }

    const result = await axios(options)

    teams.value = result.data.data
  }

  async function loadOne(id) {
    const options = {
      method: 'GET',
      url: `/teams/${id}`,
      params: {api_token: import.meta.env.VITE_API_KEY, include: 'country,league,squad.player.position'}
    }

    const result = await axios(options)

    team.value = result.data.data
  }

  return { teams, team, load, loadOne, search }
})
