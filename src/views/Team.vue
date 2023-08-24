<template>
    <loader v-if="loading"/>
    <div
        v-if="team"
        class="team-name"
    >
        <img
            :src="team.logo_path"
            alt="Logo Team"
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        >
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ team.name }}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ team.country?.data?.name }}</p>
        </div>
    </div>
    <div class="mt-10">
        <h2 class="text-2xl font-extrabold leading-none tracking-tight text-gray-900">
            Команда
        </h2>
        <div
            v-if="team"
            class="mt-10 flex flex-wrap flex-row gap-y-10 gap-x-6"
        >
            <member-squard
                v-for="p of team.squad.data"
                :key="p.player.data.player_id"
                :logo="p.player.data.image_path"
                :name="p.player.data.display_name"
                :position="p.player.data.position.data.name"
            />                
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import Loader from '../components/Loader.vue'
import MemberSquard from '../components/MemberSquard.vue'
import { useTeamsStore } from '../stores/teams'

const route = useRoute()
const teamsStore = useTeamsStore()

const team = computed(() => {
    return teamsStore.team
})
let loading = true

const id = route.params.id

onMounted(() => {
    teamsStore.loadOne(id)
    loading = false
})
</script>

<style>
.team-name {
    @apply flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 w-full
}

</style>