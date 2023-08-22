<template>
  <router-link :to="{name: 'leagues'}" class="w-[30rem] border-2 border-b-4 border-gray-200 rounded-xl hover:bg-gray-50 mb-4">
    <div class="grid grid-cols-6 p-5 gap-y-2">
      <div>
        <img :src="props.img" class="max-w-16 max-h-16 rounded-full bg-cover bg-center" />
      </div>

      <div class="col-span-5 md:col-span-4 ml-4">
        <p class="text-gray-600 font-bold">{{ props.name }}</p>
        <p class="text-gray-400">{{ props.national_team ? 'Национальная лига' : '' }}</p>
      </div>
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps(['name', 'img', 'national_team'])
</script>
]
