<script lang="ts" setup>
	const props = defineProps<{
		icon: string
		label: string
		count: number
		suffix: string
	}>()
</script>

<template>
  	<div className="flex flex-col items-center text-center px-4">
    	<component :is="props.icon" className="mb-4 h-12 w-12 text-gray-400" />
    	<div className="text-lg font-medium text-easydevs-light-text">{{props.label}}</div>
		<div className="mt-2 text-6xl font-extrabold">
			{{ props.count }}
			<span className="text-easydevs-orange">{{props.suffix}}</span>
		</div>
  	</div>
</template>