<script lang="ts" setup>
	const navLinks = [
        { name: "Home", id: "edHero" },
        { name: "About", id: "edAbout" },
        { name: "Benefits", id: "edBenefits" },
        { name: "Portfolio", id: "edCounters" },
        // { name: "Services", id: "edServices" },
        { name: "Reviews", id: "edTestimonials" },
        { name: "FAQ", id: "edFaq" },
        // { name: "Contact Us", id: "edForm" },
    ];

	const scrollToSection = (id: string) => {
        const section = document.getElementById(id)

        if (section) {
          section.scrollIntoView({ behavior: 'smooth' })
        }
    }
</script>

<template>
  	<nav class="ed-footer__nav">
		<template v-for="(link, index) in navLinks" :key="link.id">
			<NuxtLink
				:href="'#' + link.id"
				class="ed-nav__link"
				@click="scrollToSection(link.id)"
			>
				{{ link.name }}
			</NuxtLink>
			<span
				v-if="index < navLinks.length - 1"
			>
				&bull;
			</span>
		</template>
	</nav>
</template>

<style scoped>
	.ed-footer__nav {
		@apply flex flex-wrap items-center justify-center
 			gap-x-5 gap-y-4 text-2xl px-4 md:px-0;
		font-family: var(--ed-work-sans);
	}

	.ed-nav__link {
		@apply hover:italic hover:text-[var(--ed-primary)];
	}
</style>