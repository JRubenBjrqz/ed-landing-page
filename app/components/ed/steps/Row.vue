<script lang="ts" setup>
    const props = defineProps<{
        number: number
        icon: string
        title: string
        description: string
    }>()
</script>

<template>
    <div className="ed-steps-row">
        <div className="flex items-center gap-x-3 flex-shrink-0 text-left md:w-1/4">
            <div className="text-8xl font-extrabold py-2">{{props.number}}</div>
            <h3 className="text-[32px] font-bold">{{props.title}}</h3>
        <!-- {subtitle && <p className="text-lg text-easydevs-light-text mt-1">{subtitle}</p>} -->
        </div>
        <div className="flex-grow text-left md:w-1/2">
            <p className="mt-2 text-lg">{{props.description}}</p>
        </div>
        <div className="flex-shrink-0 md:w-1/4 flex justify-end">
            <component :is="props.icon" className="h-8 w-8" />
        </div>
    </div>
</template>

<style scoped>
    .ed-steps-row {
        @apply flex flex-col md:flex-row items-start md:items-center gap-8 py-8;
    }

    .ed-steps-row__number {
        @apply text-6xl font-extrabold;
    }

    .ed-steps-row__title {
        @apply text-3xl font-bold mt-2;
    }

    .ed-steps-row__description {
        @apply mt-2 text-lg;
    }
</style>