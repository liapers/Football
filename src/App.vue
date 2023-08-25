<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  <div class="container mx-auto py-8">
    <Header/>
    <main class="pt-[30px] h-full">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

</style>
