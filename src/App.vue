<script setup>
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <div class="container mx-auto py-8">
    <Navigation/>
    <main class="overflow-hidden pt-[30px] h-full">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

</style>
