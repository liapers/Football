<template>
    <Loader v-if="loading" />
        <default-search @submit="submit"/>
        
        <ul v-if="leageus.length" class="flex justify-around">
        <LeagueListItem
            v-for="l in leageus" :key="l.id"
            :img="l.logo_path" :name="l.name"
            :active="l.active" :type="l.type"
        />
    </ul>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
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
    await leageusStore.search(value)
}
onMounted(() => {
    leageusStore.load()
    loading = false
})
</script>
