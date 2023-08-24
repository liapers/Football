<template>

    <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full">
        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" :src="team.logo_path" alt="Logo Team">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ team.name }}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ team.country?.data?.name }}</p>
        </div>
    </div>

</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTeamsStore } from '../stores/teams'

const route = useRoute()
const teamsStore = useTeamsStore()

const team = computed(() => {
    return teamsStore.team
})

const id = route.params.id

onMounted(() => {
    teamsStore.loadOne(id)
})
</script>