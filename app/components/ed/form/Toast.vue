<script lang="ts" setup>
	import { ToastRoot, ToastDescription, ToastViewport } from 'reka-ui'

	defineProps<{
		title: string;
		description: string;
	}>();

	const open = defineModel<boolean>('open')
</script>

<template>
	<ToastRoot
		v-model:open="open"
		class="bg-[var(--ed-white-background)] rounded-lg shadow-sm
			border p-[15px] grid [grid-template-areas:_'title_action'_'description_action']
			grid-cols-[auto_max-content] gap-x-[15px] items-center"
	>
		<h3 class="[grid-area:_title] mb-[5px] font-bold text-base">
			{{ title }}
		</h3>
		<ToastDescription class="[grid-area:_description] m-0 text-base leading-[1.3]">
			{{ description }}
		</ToastDescription>
	</ToastRoot>
	<ToastViewport class="[--viewport-padding:_25px] fixed top-0 right-0 flex flex-col
				p-[var(--viewport-padding)] gap-[10px] max-w-[100vw] m-0 list-none
				z-[2147483647] outline-none"
    />
</template>