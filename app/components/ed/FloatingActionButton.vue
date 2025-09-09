<script lang="ts" setup>
	import { ArrowDown } from 'lucide-vue-next';

	const props = defineProps<{
		sectionIds: string[];
	}>();

	const currentIndex = ref(0);

	const handleScroll = () => {
		const mid = window.scrollY + window.innerHeight / 2;
		let idx = 0;

		for (let i = props.sectionIds.length - 1; i >= 0; i--) {
			const el = document.getElementById(props.sectionIds[i]);

			if (el && el.offsetTop <= mid) {
				idx = i;
				break;
			}
		}

		currentIndex.value = idx;
	};

	onMounted(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
	});

	onBeforeUnmount(() => {
		window.removeEventListener('scroll', handleScroll);
	});

	const isAtLast = computed(() => currentIndex.value >= props.sectionIds.length - 1);

	const handleClick = () => {
		if (isAtLast.value) {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			return;
		}

		const nextId = props.sectionIds[currentIndex.value + 1];
		document.getElementById(nextId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};
</script>

<template>
	<div class="ed-fab">
		<button
			@click="handleClick"
			:aria-label="isAtLast ? 'Go to top' : 'Go to next section'"
			class="ed-fab__button"
		>
			<ArrowDown
				:size="24"
				color="var(--ed-white)"
				:class="['ed-fab__icon', { 'ed-fab__icon--rotated': isAtLast }]"
			/>
		</button>
	</div>
</template>

<style lang="scss" scoped>
	.ed-fab {
		@apply fixed right-6 bottom-6 lg:right-10 lg:bottom-10 z-50;

		&__button {
			@apply lg:h-14 lg:w-14 bg-[var(--ed-primary)] opacity-50 flex
				items-center justify-center rounded-full backdrop-blur-[15px]
				p-4;

			&:hover {
				@apply scale-105;
			}

			&:active {
				@apply scale-95;
			}
		}

		&__icon {
			@apply transition-transform duration-300 ease-in-out;
		}

		&__icon--rotated {
			@apply rotate-180;
		}
	}
</style>