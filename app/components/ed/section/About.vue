<script lang="ts" setup>
  import { Handshake } from 'lucide-vue-next'
</script>

<template>
	<section class="ed-about">
		<Handshake
			color="black"
			:size="30"
		/>
		<h2 class="ed-about__title">
			<span>About</span>
			<span>EasyDevs</span>
		</h2>
		<div class="ed-about__description">
			<p>
				At EasyDevs, we believe technology should be simple, accessible and built for real businesses.
			</p>
			<p>
				We&apos;re a small team of passionate developers helping microbusinesses grow through smart, no-nonsense
				software. We listen, we simplify, and we build things that actually work.
			</p>
		</div>
	</section>
</template>

<style scoped>
	.ed-about {
		@apply h-screen flex flex-col justify-center text-left px-16 lg:px-48 text-[(var(--ed-black))] gap-6;
	}

	.ed-about__title {
		@apply flex flex-col gap-1 text-5xl font-bold leading-tight md:text-5xl;
		font-family: var(--ed-fira-sans);
	}

	.ed-about__description {
		@apply max-w-80 flex flex-col gap-3 text-base;
		font-family: var(--ed-work-sans);
	}
</style>