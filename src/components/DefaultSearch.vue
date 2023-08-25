<template>
    <div class="relative mb-7">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-0">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
        </div>
        <input
            id="default-search"
            type="search"
            v-model="value" 
            @keyup.enter="submit"
            class="search-input"
            placeholder="Название лиги"
            required
        />
        <button
            @click="submit"
            type="submit"
            class="search-btn"
        >
            Поиск
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['submit'])
const value = ref('')

const submit = async () => {
    emit('submit', value.value)
}
</script>

<style scoped>
.search-input {
    @apply block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-600 focus:border-teal-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
}
.search-btn {
    @apply  text-white absolute right-2.5 bottom-2.5 bg-teal-600 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-sky-200 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-teal-600 dark:focus:ring-teal-600
}
</style>