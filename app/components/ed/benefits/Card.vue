<script lang="ts" setup>
    const props = defineProps<{
        img: string
        title: string
        description: string
    }>()
</script>

<template>
    <div class="ed-benefits-card">
        <NuxtImg
            :src="`/img/${props.img}.png`"
            height="72"
        />
        <div class="ed-benefits-card__content">    
            <h3 class="ed-benefits-card__content-title">
                {{props.title}}
            </h3>
            <p class="ed-benefits-card__content-description">
                {{props.description}}
            </p>
        </div>
    </div>
</template>

<style scoped>
    .ed-benefits-card {
        @apply flex flex-col items-center text-center p-8 text-[var(--ed-black)];
    }

    .ed-benefits-card__content {
        @apply flex flex-col gap-1 mt-6;
    }

    .ed-benefits-card__content-title {
        @apply text-[32px] font-bold;
        font-family: var(--ed-fira-sans);
    }

    .ed-benefits-card__content-description {
        @apply text-base max-w-52 mx-auto;
        font-family: var(--ed-work-sans);
    }
</style>