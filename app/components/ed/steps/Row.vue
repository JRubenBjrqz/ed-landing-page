<script lang="ts" setup>
    const props = defineProps<{
        number: number
        icon: string
        title: string
        subtitle?: string
        description: string
    }>()
</script>

<template>
    <div :class="['ed-steps-row', props.number === 4 ? 'border-b' : '']">
        <div class="ed-steps-row__header">
            <div class="ed-steps-row__header-number">{{props.number}}</div>
            <div :class="props.number === 2 ? '' : 'w-[278px]'">
                <h3 class="ed-steps-row__header-title">{{props.title}}</h3>
                <h3 
                    v-if="props.subtitle"
                    class="ed-steps-row__header-title"
                >
                    {{props.subtitle}}
                </h3>
            </div>
        </div>
        <div class="ed-steps-row__description">
            <p>{{props.description}}</p>
        </div>
        <div class="flex-shrink-0 flex justify-end items-start mb-auto">
            <component
                :is="props.icon"
                size="32"
                stroke-width="1"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .ed-steps-row {
        @apply flex flex-col justify-between md:flex-row 
            items-start md:items-center py-8 border-t
            border-[var(--ed-border-light)];
    
        &__header {
            @apply flex items-center gap-x-4 flex-shrink-0
                text-left;
        }
    
        &__header-number {
            @apply text-8xl font-medium py-2 bg-clip-text text-transparent;
            background-image: var(--ed-number-gradient);
        }
    
        &__header-title {
            @apply text-[32px] font-bold leading-none;
        }
    
        &__description {
            @apply flex-grow text-left md:w-1/2 max-w-[353px]
                text-base leading-tight;
            font-family: var(--ed-work-sans);
        }
    }
</style>