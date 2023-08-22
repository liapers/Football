<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
  <div class="container mx-auto py-8">
    <Header/>
    <main class="overflow-hidden pt-[50px]">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

</style>
