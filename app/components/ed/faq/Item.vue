<script setup lang="ts">
	defineProps<{
		question: string
		answer: string
	}>()
</script>

<template>
	<div class="ed-faq-item">
		<h3 class="ed-faq-item__question">{{ question }}</h3>
		<p class="ed-faq-item__answer">{{ answer }}</p>
	</div>
</template>

<style lang="scss" scoped>
    .ed-faq-item {
        &__question {
            @apply text-2xl font-bold;
        }
        
        &__answer {
            @apply text-base mt-2 leading-tight;
        }
    }
</style>