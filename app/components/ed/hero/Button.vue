<script lang="ts" setup>
	import { MessageCircle } from 'lucide-vue-next';
</script>

<template>
	<button class="ed-hero-button group">
		<div class="ed-hero__container-icon">
			<MessageCircle
				class="ed-hero__icon"
				:size="20"
			/>
		</div>
		<div class="ed-hero__container-text">
			<span class="ed-hero__text">
				Get in touch
			</span>
		</div>
	</button>
</template>

<style scoped>
	.ed-hero-button {
		@apply box-border text-base flex flex-row items-center p-2 border border-[var(--ed-black)] rounded-full
			bg-transparent hover:bg-[var(--ed-black)] hover:text-white transition-colors;
		font-family: var(--ed-work-sans);
	}

	.ed-hero__container-icon {
		@apply p-2 bg-[#232631] rounded-full;
	}

	.ed-hero__icon {
		@apply text-white transition-colors;
	}

	.ed-hero__container-text {
		@apply flex flex-row justify-center items-center px-2 gap-2;
	}

	.ed-hero__text {
		@apply font-normal text-base text-[var(--ed-black)] group-hover:text-white transition-colors;
	}
</style>