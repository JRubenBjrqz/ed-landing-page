<script lang="ts" setup>
	import { MessageCircle } from 'lucide-vue-next';
</script>

<template>
    <section ref="EdHero" class="ed-hero">
		<div class="ed-hero__container">
			<h1 class="ed-hero__title">
				<span>Making</span>
				<span>Development</span>
				<div class="flex">
					<span>Look</span>&nbsp;
					<span class="ed-hero__title--easy">Easy.</span>
				</div>
			</h1>
			<EdHeroButton />
		</div>
    </section>
</template>

<style scoped>
	.ed-hero {
		@apply relative flex min-h-screen items-center
			justify-start overflow-hidden py-20 text-left w-full;
	}
	
	.ed-hero__container {
		@apply relative z-10 flex flex-col items-start gap-6 px-4 md:px-8 lg:px-16 
			w-full max-w-full md:absolute md:left-[300px] md:top-[253px];
	}

	.ed-hero__title {
		@apply text-[4rem] leading-[1.2] capitalize md:leading-[77px]
			w-full flex flex-col font-bold text-[var(--ed-black)];
		font-family: var(--ed-fira-sans);
	}

	.ed-hero__title--easy {
		@apply font-light italic;
	}
</style>