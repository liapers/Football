<template>
    <div class="leageus">
        <form>
            
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