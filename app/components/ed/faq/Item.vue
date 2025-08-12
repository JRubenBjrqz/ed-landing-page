<script setup lang="ts">
	defineProps<{
		question: string
		answer: string
	}>()
</script>

<template>
	<div>
		<h3 class="text-2xl font-bold" style="font-family: var(--ed-fira-sans);">{{ question }}</h3>
		<p class="text-base mt-2" style="font-family: var(--ed-dm-sans)">{{ answer }}</p>
	</div>
</template>