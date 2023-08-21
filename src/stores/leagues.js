import { ref } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useLeaguesStore = defineStore('leagues', (params = {current: true}) => {
  const leagues = ref([])
  async function load() {

    const options = {
      method: 'GET',
      url: 'https://footapi7.p.rapidapi.com/api/tournament/17/season/41886/team-events/total',
      headers: {
        'X-RapidAPI-Key': '3cc9b6f561msh61fb070cdbb8551p155c29jsnac8909be3d4f',
        'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
      }
    }

    const data = await axios(options)

    leagues.value = data.response
  }

  return { leagues, load }
})
