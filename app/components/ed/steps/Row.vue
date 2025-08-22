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
            <div :class="props.number === 2 ? '' : 'md:w-[278px]'">
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
        <div class="ed-steps-row__icon-container">
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
        @apply flex flex-col gap-3 lg:gap-0 md:justify-between lg:flex-row 
            items-start lg:items-center py-8 border-t
            border-[var(--ed-border-light)];
    
        &__header {
            @apply flex items-center gap-x-4 flex-shrink-0
                text-left order-2 lg:order-1;
        }
    
        &__header-number {
            @apply text-8xl font-medium py-2 bg-clip-text text-transparent;
            background-image: var(--ed-number-gradient);
        }
    
        &__header-title {
            @apply text-[32px] font-bold leading-none;
        }
    
        &__description {
            @apply flex-grow text-left lg:w-1/2 lg:max-w-[353px]
                text-base leading-tight order-3 lg:order-2;
            font-family: var(--ed-work-sans);
        }

        &__icon-container {
            @apply flex-shrink-0 flex justify-end items-start
                mb-auto ml-auto lg:ml-0 order-1 lg:order-3;
        }
    }
</style>