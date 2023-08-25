<template>
    <div class="group relative inline-block">
        <slot />
        <div
            :class="`tooltip-placement-${ props.placement } tooltip-theme-${ props.theme }`"
            class="absolute z-50 whitespace-nowrap rounded px-3 py-2 text-sm font-semibold 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
            <span
                v-if="arrow"
                :class="`tooltip-arrow-placement-${ props.placement } tooltip-arrow-theme-${ props.theme }`"
                class="absolute -z-10 h-2 w-2 rotate-45 rounded-sm" 
            />
            <slot name="content">{{ props.content }}</slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    content: {
        type: String,
        default: '',
    },
    placement: {
        type: String,
        default: 'top',
        validator: value => ['top', 'left', 'bottom', 'right'].includes(value),
    },
    theme: {
        type: String,
        default: 'dark',
        validator: value => ['dark', 'light'].includes(value),
    },
    arrow: {
        type: Boolean,
        default: true,
    },
})
</script>

<style scoped>
.tooltip-placement-top {
	@apply bottom-full left-1/2 -translate-x-1/2 mb-3;
}
.tooltip-placement-left {
	@apply right-full top-1/2 -translate-y-1/2 mr-3;
}
.tooltip-placement-bottom {
	@apply top-full left-1/2 -translate-x-1/2 mt-3;
}
.tooltip-placement-right {
	@apply left-full top-1/2 -translate-y-1/2 ml-3;
}
.tooltip-theme-dark {
	@apply text-white bg-gray-900;
}
.tooltip-theme-light {
	@apply text-gray-900 border bg-white;
}
.tooltip-arrow-placement-top {
	@apply -bottom-1 left-1/2 -translate-x-1/2 border-b border-r;
}
.tooltip-arrow-placement-left {
	@apply -right-1 top-1/2 -translate-y-1/2 border-t border-r;
}
.tooltip-arrow-placement-bottom {
	@apply -top-1 left-1/2 -translate-x-1/2 border-t border-l;
}
.tooltip-arrow-placement-right {
	@apply -left-1 top-1/2 -translate-y-1/2 border-b border-l;
}
.tooltip-arrow-theme-dark {
	@apply bg-gray-900 border-gray-900;
}
.tooltip-arrow-theme-light {
	@apply bg-white;
}
</style>
