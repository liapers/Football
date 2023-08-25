<template>
    <router-link
        :to="{ name: 'teamDetail', params: { id: props.id } }"
        class="card-team"
    >
        <img
            class="card-team__logo"
            :src="props.logo"
            :alt="props.name"
        >

        <h2 class="card-team__name">
            {{ props.name }}
        </h2>

        <AppTooltip content="Тренер" placement="bottom">
            <p class="card-team__coach">
                {{ coach }}
            </p>
        </AppTooltip>
    </router-link>
</template>

<script setup>
import AppTooltip from '@/components/AppTooltip.vue'

const props = defineProps({
    id: Number,
    name: String,
    logo: String,
    coach: String,
})
</script>

<style scoped>
.card-team {
    @apply min-w-[212px] w-[212px] max-w-[292px] flex-auto basis-1/6 mx-auto
        bg-white rounded-2xl shadow-md p-5 text-center hover:bg-gray-200
}
.card-team__logo {
    @apply bg-gray-600 w-32 h-32 rounded-full mx-auto border-2 border-gray-600
}
.card-team__name {
    @apply text-gray-900 text-2xl font-semibold mt-3
}
.card-team__coach {
    @apply text-gray-600 mt-1
}
</style>
