<template>
  <div class="min-w-[144px] basis-1/5 max-w-lg mx-auto bg-white rounded-lg shadow-md p-5">
        <img class="bg-gray-600 w-32 h-32 rounded-full mx-auto border-2 border-gray-600" :src="props.logo" :alt="props.name">
        <h2 class="text-gray-900 text-center text-2xl font-semibold mt-3">{{ props.name }}</h2>
        <p class="text-center text-gray-600 mt-1">{{ props.position }}</p>
  </div>
</template>

<script setup>

const props = defineProps({
    name: String,
    logo: String,
    position: String,
})
</script>
