<template>
   <div class="flex bg-white border-2 rounded-2xl py-5 px-16 justify-center" v-if="match">
        <div class="relative flex items-center justify-center">
            <router-link
                :to="{name: 'teamDetail', params: {id: match.localteam_id}}"
                class="bg-gray-200 rounded-xl w-full flex flex-col h-full px-3"
            >
                <span class="flex flex-col items-center justify-center h-[96px] min-w-[100px] w-full mb-3">
                    <img :src="match.localTeam.data.logo_path" class="h-auto border-8 border-white rounded-full" sizes="80px" width="72" height="72"/>
                </span>
                <span class="text-lg font-bold text-center">{{ match.localTeam.data.name }}</span>
            </router-link>
            <div class="bg-white border-2 rounded-xl max-w-[308px] min-w-[300px] w-full h-full pt-1.5  px-2 pb-1 m-2">
                <span class="block text-center mb-2">
                    <router-link
                        :to="{name: 'leagueDetail', params: { id: match.league.data.id }}"
                        class="text-green-800 text-lg font-medium leading-5 mb-1"
                    >
                        {{ match.league.data.name }}
                    </router-link>
                    <span class="text-gray-300 block leading-5">{{ new Intl.DateTimeFormat('ru').format(new Date(match.time.starting_at.date)) }}</span>
                    <span class="text-gray-300 block leading-5">{{ match.time.starting_at.time }}</span>
                </span>
                <div class="flex flex-col h-full relative">
                    <div class="flex flex-col items-center justify-center mb-1.5rem mt-0.375rem">
                        <div class="align-center text-red-600 text-5xl">
                            {{ match.scores.ft_score }}
                        </div>
                    </div>
                </div>
            </div>
            <router-link
                :to="{name: 'teamDetail', params: {id: match.visitorteam_id}}"
                class="bg-gray-200 rounded-xl w-full flex flex-col h-full px-3"
            >
                <span class="flex flex-col items-center justify-center h-[96px] min-w-[100px] w-full mb-3">
                    <img :src="match.visitorTeam.data.logo_path" class="h-auto border-8 border-white rounded-full" sizes="80px" width="72" height="72"/>
                </span>
                <span class="text-lg font-bold text-center">{{ match.visitorTeam.data.name }}</span>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { useMatchStore } from '@/stores/match.js'
import { useRoute } from 'vue-router'
import { onMounted, computed } from 'vue'

const route = useRoute()
let matchStore = useMatchStore()

const match = computed(() => {
    return matchStore.match
})

const id = route.params.id

onMounted(async () => {
    await matchStore.load(id)
})
</script>

