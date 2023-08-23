<template>
  <nav class="flex items-center h-[60px] rounded-2xl mb-2">
    <div class="pl-4">
      <ul
        class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <router-link :to="{ name: 'leagues' }" v-slot="{ isActive, href }">
            <a :href="href"
              :class="isActive ?
                'block py-2 pl-3 pr-4 text-white bg-black rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-[blue-500]' :
                'block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-800 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'">
              Лиги
            </a>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'teams' }" v-slot="{ isActive, href }">
            <a :href="href"
              :class="isActive ?
                'block py-2 pl-3 pr-4 text-white bg-black rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-blue-500' :
                'block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-800 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'">
              Команды
            </a>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
