<template>
  <nav class="flex items-center h-[60px] rounded-2xl mb-2">
    <div class="pl-4">
      <ul
        class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <router-link :to="{ name: 'leagues' }" v-slot="{ isActive, href }">
            <a :href="href"
              :class="isActive ?
              'border-b-2 border-transparent py-2 pl-3 pr-4 text-white md:bg-transparent md:border-green-800 md:p-0 dark:text-white':
              'border-b-2 border-transparent text-white hover:text-white dark:hover:text-white hover:border-green-800 mx-1.5 sm:mx'">
              Лиги
            </a>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'teams' }" v-slot="{ isActive, href }">
            <a :href="href"
              :class="isActive ?
              'border-b-2 border-transparent py-2 pl-3 pr-4 text-white md:bg-transparent md:border-green-800 md:p-0 dark:text-white':
              'border-b-2 border-transparent text-white hover:text-white dark:hover:text-white hover:border-green-800 mx-1.5 sm:mx'">
              Команды
            </a>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
