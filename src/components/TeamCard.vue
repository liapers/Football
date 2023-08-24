<template>
    <div class="min-w-[144px] basis-1/5 grow text-center text-gray-500 dark:text-gray-400">
        <img 
            class="mx-auto mb-4 w-36 h-36 rounded-full" 
            :src="props.logo" 
            :alt="props.name"
        >

        <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <router-link :to="{ name: 'teamDetail', params: { id: props.id } }">
                {{ props.name }}
            </router-link>
        </h3>

        <AppTooltip content="Тренер" placement="bottom">
            <p>{{ coach }}</p>
        </AppTooltip>
    </div>
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
