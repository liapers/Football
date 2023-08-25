<template>
  <router-link 
    :to="{name: 'leagueDetail', params: { id: props.id } }" 
    class="w-[30rem] border-2 border-b-4 border-gray-200 bg-white rounded-xl hover:bg-gray-200 mr-5 last:mr-0 "
  >
    <p class="bg-teal-600 w-fit px-4 py-1 text-sm font-bold text-white rounded-tl-lg rounded-br-xl">
      {{ props.country }}
    </p>

    <div class="grid grid-cols-6 p-5 gap-y-2">
      <div>
        <img :src="props.img" class="max-w-16 max-h-16 bg-cover bg-center bg-gray-200" />
      </div>

      <div class="col-span-5 md:col-span-4 ml-4">
        <p class="text-gray-600 font-bold">{{ props.name }}</p>
        <p class="text-gray-400">{{ props.type === 'domestic' ? 'Национальная лига' : '' }}</p>
      </div>
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps({
  id: Number,
  name: String,
  img: String,
  active: Boolean,
  type: String,
  country: String
})
</script>
