<template>
    <div class="leageus">
        <form @submit.prevent="searchLeagues">
            <div class="p-0 pl-7 flex justify-center">
                <label class="block p-3 rounded-2xl bg-white">
                    <span>Название лиги</span>
                    <input
                        type="text"
                        class="mt-1 border-t-0 border-l-0 border-r-0 border-b-1 outline-none border-cyan-500
                        dark:text-cyan-500 dark:placeholder-cyan-500 text-sm focus:ring-cyan-500 focus:border-cyan-500 w-full
                        dark:bg-gray-700 dark:border-cyan-500"
                    >
                </label>
                <label class="block ml-4 p-3 rounded-2xl bg-white">
                    <span>Страна лиги</span>
                    <input
                        type="text"
                        class="mt-1 border-t-0 border-l-0 border-r-0 border-b-1 outline-none border-cyan-500
                        dark:text-green-400 dark:placeholder-cyan-500 text-sm focus:ring-cyan-500 focus:border-cyan-500 w-full
                        dark:bg-gray-700 dark:border-cyan-500"
                    >
                </label>
                <label class="block ml-4 p-3 rounded-2xl bg-white">
                    <span>Сезон</span>
                    <input
                        type="text"
                        class="mt-1 border-t-0 border-l-0 border-r-0 border-b-1 outline-none border-cyan-500
                        dark:text-green-400 dark:placeholder-cyan-500 text-sm focus:ring-cyan-500 focus:border-cyan-500 w-full
                        dark:bg-gray-700 dark:border-cyan-500"
                    >
                </label>
                <label class="block ml-4 p-3 rounded-2xl bg-white">
                    <span>Команда</span>
                    <input
                        type="text"
                        class="mt-1 border-t-0 border-l-0 border-r-0 border-b-1 outline-none border-cyan-500
                        dark:text-green-400 dark:placeholder-cyan-500 text-sm focus:ring-cyan-500 focus:border-cyan-500 w-full
                        dark:bg-gray-700 dark:border-cyan-500"
                    >
                </label>
            </div>
            <div class="flex items-center justify-end">
                <button
                    type="submit"
                    class="bg-cyan-500 hover:bg-cyan-500 text-white font-bold py-2 px-4 rounded">
                    Поиск
                </button>
            </div>
        </form>
        <ul>
            <LeagueListItem v-for="l in leageus" :key="l.league.id"/>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted, computed} from "vue"
import { useLeaguesStore } from "../stores/leagues";

const leageus = computed(() => {
    return leageusStore.leagues
})
const leageusStore = useLeaguesStore()

let searchLeagues = (() => {
    e.preventDefault()
})
onMounted(() => {
    leageusStore.load()
})
</script>