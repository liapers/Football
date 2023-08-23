<template>
    <Loader v-if="loading" />
    <DefaultSearch @submit="submit"/>
    <ul v-if="teams.length" class="flex h-full flex-wrap justify-around">
        <TeamListItem
            v-for="t in teams" :key="t.id"
            :img="t.logo_path" :name="t.name" :national_team="t.national_team"
        />
    </ul>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useTeamsStore } from '../stores/teams'
import TeamListItem from '../components/TeamListItem.vue'
import Loader from '../components/Loader.vue'
import DefaultSearch from '../components/DefaultSearch.vue'

let loading = true

const teams = computed(() => {
    return teamsStore.teams
})
const teamsStore = useTeamsStore()

const submit = async (value) => {
    await teamsStore.search(value)
}
onMounted(async () => {
    loading = false
    await teamsStore.load()
})
</script>
