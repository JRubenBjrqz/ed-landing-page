<script lang=ts setup>
    const navLinks = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Benefits", id: "benefits" },
        { name: "Portfolio", id: "portfolio" },
        { name: "Services", id: "services" },
        { name: "Reviews", id: "reviews" },
        { name: "FAQ", id: "faq" },
        { name: "Contact Us", id: "contact" },
    ]
</script>

<template>
	<div class="ed-header-nav">
		<nav class="ed-header-nav__nav">
			<NuxtLink
				v-for="link in navLinks"
				:key="link.id"
				class="ed-header-nav__link"
			>
				{{ link.name }}
			</NuxtLink>
		</nav>
	</div>
</template>

<style scoped>
	.ed-header-nav {
		@apply fixed top-[80px] right-4 md:right-8 lg:right-16 z-40 bg-[var(--ed-white)] py-6 px-8 shadow-sm rounded-[32px] flex flex-col border
	}

	.ed-header-nav__nav {
		@apply flex flex-col gap-3.5;
	}

	.ed-header-nav__link {
		@apply text-[var(--ed-black)] text-2xl cursor-pointer hover:italic hover:text-[var(--ed-primary)] transition-colors duration-300;
		font-family: var(--ed-work-sans);
	}
</style>