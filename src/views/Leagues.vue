<template>
    <Loader v-if="loading" />
    <DefaultSearch @submit="submit"/>
        
    <ul v-if="leageus.length" class="flex">
    <LeagueListItem
        v-for="l in leageus" :key="l.id" :id="l.id"
        :img="l.logo_path" :name="l.name"
        :active="l.active" :type="l.type"
        :country="l.country.data.name"
    />
    </ul>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useLeaguesStore } from '../stores/leagues'
import LeagueListItem from '../components/LeagueListItem.vue'
import Loader from '../components/Loader.vue'
import DefaultSearch from '../components/DefaultSearch.vue'

let loading = true

const leageus = computed(() => {
    return leageusStore.leagues
})
const leageusStore = useLeaguesStore()

const submit = async (value) => {
    if (value)
        await leageusStore.search(value)
    else
        leageusStore.load()
}
onMounted(() => {
    leageusStore.load()
    loading = false
})
</script>
