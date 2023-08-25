<template>
    <router-link
        :to="{ name: 'matchDetail', params: { id: props.match.id } }"
        class="card-match"
    >
        <div class="flex justify-end">
            <AppTooltip content="Дата и время начала матча" placement="top">
                <p class="card-match__date">
                    {{ rusDate }}
                </p>
            </AppTooltip>
        </div>

        <div
            v-for="team of teams"
            :key="team.name"
            class="flex mt-4 items-center justify-between"
        >
            <div class="flex items-center">
                <img
                    class="card-match__team-logo"
                    :src="team.logo"
                    :alt="team.name"
                >

                <h2 class="card-match__team-name">
                    {{ team.name }}
                </h2>                
            </div>

            <h2 class="card-match__team-goals">
                {{ team.goals }}
            </h2>
        </div>
    </router-link>
</template>

<script setup>
import { computed } from 'vue'
import AppTooltip from '@/components/AppTooltip.vue'

const props = defineProps({
    match: Object,
})

const teams = computed(() => {
    const localTeam = props.match.localTeam.data
    const visitorTeam = props.match.visitorTeam.data

    return [
        {
            name: localTeam.name,
            logo: localTeam.logo_path,
            goals: props.match.scores.localteam_score,
        },
        {
            name: visitorTeam.name,
            logo: visitorTeam.logo_path,
            goals: props.match.scores.visitorteam_score,
        },
    ]
})

const rusDate = computed(() => {
    const rusFormatter = new Intl.DateTimeFormat('ru')

    const [date, time] = props.match.time.starting_at.date_time.split(' ')

    return rusFormatter.format(new Date(date)) + ' ' + time.slice(0, 5)
})
</script>

<style scoped>
.card-match {
    @apply min-w-[212px] w-[212px] max-w-[292px] flex-auto basis-1/6 mx-auto
        bg-white rounded-2xl shadow-md p-5 text-center hover:bg-gray-50
}
.card-match__date {
    @apply text-base text-gray-500
}
.card-match__team-logo {
    @apply max-w-[32px] max-h-[32px] mr-4
}
.card-match__team-name,
.card-match__team-goals {
    @apply text-base text-gray-900 font-bold
}
</style>
