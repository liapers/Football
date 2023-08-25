<template>
    <div class="league-detail">
        <div class="league-detail__header ">
            <div class="flex flex-col justify-between">
                <div class="text-4xl font-extrabold leading-[0.85] tracking-tight text-gray-900 text-start">
                    {{ leagueDetail.name }}
                </div>

                <div class="flex gap-x-5">
                    <div class="flex flex-col mt-4">
                        <p class="text-base text-gray-500">
                            Страна
                        </p>
                        <p class="text-base text-gray-900 font-bold">
                            {{ leagueDetail?.country?.data?.name }}
                        </p>
                    </div>

                    <div class="flex flex-col mt-4">
                        <p class="text-base text-gray-500">
                            Сезон
                        </p>
                        <p class="text-base text-gray-900 font-bold">
                            {{ leagueDetail?.season?.data?.name }}
                        </p>
                    </div>
                </div>

                <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    <li
                        v-for="tab of tabs"
                        :key="tab.name"
                        class="mr-2"
                    >
                        <button
                            @click="changeTab(tab.name)"
                            :class="isTabActive(tab.name) ? 'btn-active' : ''"
                            class="inline-block league-detail__btn"
                        >
                            {{ tab.label }}
                        </button>
                    </li>
                </ul>
            </div>

            <div class="flex flex-col items-end">
                <img
                    :src="leagueDetail.logo_path"
                    class="max-w-32 max-h-32 bg-cover bg-center"
                />

                <AppTooltip
                    content="Перейти к списку лиг"
                    placement="bottom"
                    class="w-full"
                >
                    <router-link
                        :to="{ name: 'leagues' }"
                        class="league-detail__btn"
                    >
                        <svg class="w-[16px] h-[16px] text-white pr-[10px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                        </svg>

                        <span>
                            Все лиги
                        </span>
                    </router-link>
                </AppTooltip>
            </div>
        </div>

        <div class="mt-7">
            <h2 class="text-2xl font-extrabold leading-none pl-7 tracking-tight text-white">
                {{ activeTabLabel }}
            </h2>

            <div
                v-show="isTabActive('teams')"
                class="mt-7 flex flex-wrap flex-row gap-y-10 gap-x-4"
            >
                <TeamCard
                    v-for="team of teams"
                    v-bind="team"
                    :key="team.id"
                />
            </div>

            <div
                v-show="isTabActive('matches')"
                class="mt-7 flex flex-wrap flex-row gap-y-10 gap-x-4"
            >
                <MatchCard
                    v-for="match of matches"
                    :key="match.id"
                    :match="match"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { useLeaguesStore } from '@/stores/leagues'
import { useTeamsStore } from '@/stores/teams'
import { useMatchesStore } from '@/stores/matches'

import AppTooltip from '@/components/AppTooltip.vue'
import TeamCard from '@/components/TeamCard.vue'
import MatchCard from '@/components/MatchCard.vue'

const route = useRoute()

const leaguesStore = useLeaguesStore()
const teamsStore = useTeamsStore()
const matchesStore = useMatchesStore()

const leagueId = computed(() => route.params.id)
const leagueDetail = computed(() => leaguesStore.leagueDetail)

const teams = computed(() => {
    return teamsStore.teams.map(team => ({ 
        ...team, 
        coach: team.coach.data.fullname, 
        logo: team.logo_path 
    }))
})

const matches = computed(() => matchesStore.matches)

const tabs = [
    { label: 'Команды', name: 'teams' },
    { label: 'Матчи', name: 'matches' },
]
const activeTabName = ref(tabs[0].name)

const activeTabLabel = computed(() => {
    return tabs.find(tab => tab.name === activeTabName.value).label ?? ''
})

const changeTab = async tabName => {
    activeTabName.value = tabName
    await loadByActiveTab()
}

const isTabActive = tabName => activeTabName.value === tabName

const loadByActiveTab = async () => {
    if (activeTabName.value === 'teams' && !teams.value.length)
        await loadTeams()

    else if (activeTabName.value === 'matches' && !matches.value.length)
        await loadMatches()
}

const loadTeams = async () => {
    await teamsStore.loadBySeason(leagueDetail.value.season.data.id)
}

const loadMatches = async () => {
    await matchesStore.loadBySeason(leagueDetail.value.season.data.id)
}

onMounted(async () => {
    await leaguesStore.loadOne(leagueId.value)
    await loadByActiveTab()
})
</script>

<style scoped>
.league-detail {
    @apply mb-10
}
.league-detail__btn {
    @apply inline-flex items-center justify-center text-white bg-teal-600 hover:bg-teal-700
        font-medium rounded-lg text-sm px-4 py-2 mt-5 w-full transition-colors duration-300
}
.btn-active {
    @apply bg-gray-900 hover:bg-gray-800
}
.league-detail__header {
    @apply w-full rounded-2xl bg-white border-gray-200 border flex justify-between p-7
}
</style>
