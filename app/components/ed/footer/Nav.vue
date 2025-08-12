<script lang="ts" setup>
	const sectionLinks = [
        { label: 'Home', id: 'EdHero' },
        { label: 'About', id: 'about' },
        { label: 'Benefits', id: 'benefits' },
        { label: 'Portfolio', id: 'portfolio' },
        { label: 'Services', id: 'services' },
        { label: 'Reviews', id: 'reviews' },
    ]
</script>

<template>
  	<nav class="ed-footer__nav">
		<template v-for="(link, index) in sectionLinks" :key="link.id">
			<NuxtLink
				:href="'#' + link.id"
				class="ed-nav__link"
			>
				{{ link.label }}
			</NuxtLink>
			<span v-if="index < sectionLinks.length - 1">&bull;</span>
		</template>
	</nav>
</template>

<style scoped>
	.ed-footer__nav {
		@apply flex flex-wrap items-center justify-end gap-x-5 gap-y-4 text-2xl;
		font-family: var(--ed-work-sans);
	}

	.ed-nav__link {
		@apply hover:italic hover:text-[var(--ed-primary)];
	}
</style>