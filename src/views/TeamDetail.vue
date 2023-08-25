<template>
    <loader v-if="loading"/>
    <div class="team-detail__header" v-if="team">
            <div class="flex flex-col justify-between">
                <div class="text-4xl font-extrabold leading-[0.85] tracking-tight text-gray-900 text-start">
                    {{ team.name }}
                </div>

                <div class="flex gap-x-5">
                    <div class="flex flex-col mt-4">
                        <p class="text-base text-gray-500">
                            Страна
                        </p>
                        <p class="text-base text-gray-900 font-bold">
                            {{ team?.country?.data?.name }}
                        </p>
                    </div>

                    <div class="flex flex-col mt-4">
                        <p class="text-base text-gray-500">
                            Тренер
                        </p>
                        <p class="text-base text-gray-900 font-bold">
                            {{ team?.coach?.data?.fullname }}
                        </p>
                    </div>

                </div>
            </div>

            <div class="flex flex-col items-end">
                <img
                    :src="team.logo_path"
                    class="max-w-32 max-h-32 bg-cover bg-center"
                />

                <AppTooltip
                    content="Перейти к списку команд"
                    placement="bottom"
                    class="w-full"
                >
                    <router-link
                        :to="{ name: 'teams' }"
                        class="team-detail__btn"
                    >
                        <svg class="w-[16px] h-[16px] text-white pr-[10px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                        </svg>

                        <span>
                            Все команды
                        </span>
                    </router-link>
                </AppTooltip>
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

.team-detail {
    @apply mb-10
}
.team-detail__btn {
    @apply inline-flex items-center justify-center text-white bg-teal-600 hover:bg-teal-700
        font-medium rounded-lg text-sm px-4 py-2 mt-5 w-full transition-colors duration-300
}
.btn-active {
    @apply bg-gray-900 hover:bg-gray-800
}
.team-detail__header {
    @apply w-full rounded-2xl bg-white border-gray-200 border flex justify-between p-7
}


</style>