<script lang="ts" setup>
    const props = defineProps<{
        img: string
        width: number
        height: number
        title: string
        description: string
    }>()
</script>

<template>
    <div class="ed-benefits-card">
        <div class="ed-benefits-card__header">
            <NuxtImg
                :src="`/img/${props.img}.png`"
                :alt="props.title"
                :width="props.width"
                :height="props.height"
            />
            <h3 class="ed-benefits-card__title">
                {{props.title}}
            </h3>
        </div>
        <p class="ed-benefits-card__description">
            {{props.description}}
        </p>
    </div>
</template>

<style lang="scss" scoped>
    .ed-benefits-card {
        @apply flex flex-col items-center text-center
             gap-1 text-[var(--ed-black)] w-full
             max-w-[265px] max-h-[260px] h-full;
        
        &__header {
            @apply flex flex-col gap-4 w-full;
        }
        
        &__title {
            @apply text-[32px] font-bold ml-3 text-left;
            font-family: var(--ed-fira-sans);
        }
        
        &__description {
            @apply text-base w-[200px] text-left ml-6;
            font-family: var(--ed-work-sans);
        }
    }
</style>