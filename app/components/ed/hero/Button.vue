<script lang="ts" setup>
	import { MessageCircle } from 'lucide-vue-next';
	
	const handleClick = () => {
        const contactSection = document.getElementById('edForm');

        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
</script>

<template>
	<button
	    class="ed-hero-button group"
		@click="handleClick"
	>
		<div class="ed-hero-button__icon-container">
			<MessageCircle
				class="ed-hero-button__icon"
				:size="20"
			/>
		</div>
		<div class="ed-hero-button__container-text">
			<span class="ed-hero-button__text">
				Get in touch
			</span>
		</div>
	</button>
</template>

<style lang="scss" scoped>
	.ed-hero-button {
		@apply box-border text-base flex flex-row
		    items-center p-2 border border-[var(--ed-black)]
			rounded-full bg-transparent hover:bg-[var(--ed-black)]
		    hover:text-white transition-colors max-w-[170px];
		
		&__icon-container {
		    @apply p-2 bg-[#232631] rounded-full;
		}
		
		&__icon {
			@apply text-white transition-colors;
		}
		
		&__container-text {
			@apply flex flex-row justify-center items-center px-2 gap-2;
		}

		&__text {
			@apply font-normal text-base  group-hover:text-white
			    transition-colors;
		}
	}
</style>