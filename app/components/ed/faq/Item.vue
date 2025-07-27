<script setup lang="ts">
	defineProps<{
		question: string
		answer: string
	}>()
</script>

<template>
	<div>
		<h3 class="text-xl font-bold text-easydevs-dark-text">{{ question }}</h3>
		<p class="mt-2 text-easydevs-light-text">{{ answer }}</p>
	</div>
</template>