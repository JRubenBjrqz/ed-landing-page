<script lang="ts" setup>
    import { ArrowRight } from 'lucide-vue-next'

    defineProps<{
        type: string
    }>()
</script>

<template>
    <button class="ed-form-button group">
        <span class="ed-form-button__message">Send Message</span>
        <span
            class="ed-form-button__icon-container"
        >
            <ArrowRight
                :size="24"
                stroke-width="2"          
            />
        </span>
    </button>
</template>


<style lang="scss" scoped>
    .ed-form-button {
        @apply flex justify-between items-center rounded-full px-3
            py-2 font-bold border border-[var(--ed-black)] bg-transparent
            transition-colors duration-200 focus:outline-none
            hover:bg-[var(--ed-black)] hover:text-white;

        &__message {
            @apply text-base transition-colors duration-200 
                group-hover:text-white group-active:text-[var(--ed-gray)];
        }

        &__icon-container {
            @apply flex items-center justify-center w-10 h-10 rounded-full 
                bg-gradient-to-br from-[var(--ed-primary)] to-[var(--ed-light-pink)]
                text-white transition-colors duration-200
                group-hover:bg-[var(--ed-black)] group-hover:from-transparent
                group-hover:to-transparent group-active:bg-[var(--ed-black)]
                group-active:text-[var(--ed-gray)];
        }
    }
</style>