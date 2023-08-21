<template>
    <div class="leageus">
        <form>
            <div class="p-0 pl-7 flex justify-center">
                <label class="block p-3 rounded-2xl bg-white">
                    <span>Название лиги</span>
                    <input type="text" class="mt-1 block w-full"/>
                </label>
                <label class="block ml-4 p-3 rounded-2xl bg-white">
                    <span>Страна лиги</span>
                    <input type="text" class="mt-1 block w-full"/>
                </label>
                <label class="block ml-4 p-3 rounded-2xl bg-white">
                    <span>Сезон</span>
                    <input type="text" class="mt-1 block w-full"/>
                </label>
                <label class="block ml-4 p-3 rounded-2xl bg-white">
                    <span>Команда</span>
                    <input type="text" class="mt-1 block w-full"/>
                </label>
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

onMounted(() => {
    leageusStore.load()
})
</script>