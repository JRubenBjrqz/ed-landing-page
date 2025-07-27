<script lang="ts" setup>
	import { Menu, X } from 'lucide-vue-next';

	const props = defineProps<{
		isOpen: boolean;
	}>();

	const emit = defineEmits<{
		(e: 'toggleMenu'): void;
	}>();

	const value = computed({
		get: () => props.isOpen,
		set: (val) => emit('toggleMenu')
	})
</script>

<template>
  	<button 
		@click="emit('toggleMenu')"
		:class="[
            'ed-header-button',
			value ? 'text-[var(--ed-primary)]' : ''
        ]"
	>
		<Menu
			v-if="!value"
			:size="24"
		/>
		<X
			v-else
			:size="24"
		/>
	</button>
</template>

<style scoped>
    .ed-header-button {
        @apply p-2 cursor-pointer rounded-md text-[var(--ed-black)] 
			hover:text-[var(--ed-primary)] transition-colors duration-300;
    }
</style>