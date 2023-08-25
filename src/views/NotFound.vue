<template>
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 tracking-tight font-extrabold text-8xl text-primary-600 dark:text-primary-500">
                404
            </h1>
            <p class="mb-4 tracking-tight font-bold text-gray-900 text-4xl dark:text-white">
                Страница не найдена
            </p>
            <router-link
                :to="{ name: 'leagues' }"
                class="inline-flex mt-4  text-white bg-sky-500 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 
                font-medium rounded-lg text-sm px-4 py-2"
            >
                К лигам
            </router-link>
        </div>
    </div>
</template>
