<template>
            <Loader v-if="loading" />
    <div class="relative mb-7">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-0">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
        </div>
        <input type="search" v-model="leagueName" id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Название лиги" required />
        <button @click="submit" type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-sky-500 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-sky-500 dark:focus:ring-sky-500">
            Поиск
        </button>
    </div>
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
import Loader from '../components/Loader.vue';

const leagueName = ref('')

const leageus = computed(() => {
    return leageusStore.leagues
})
const leageusStore = useLeaguesStore()
let loading = true


const submit = async () => {
    await leageusStore.search(leagueName.value)
}
onMounted(() => {
    leageusStore.load()
    loading = false
})
</script>
