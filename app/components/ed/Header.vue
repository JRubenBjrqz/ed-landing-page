
<script lang="ts" setup>
	const isScrolled = ref(false);

	const handleScroll = () => {
		isScrolled.value = window.scrollY > 10;
	}

	onMounted(() => {
		window.addEventListener('scroll', handleScroll);
	});

	onBeforeUnmount(() => {
		window.removeEventListener('scroll', handleScroll);
	});
</script>

<template>
	<header
		:class="[
			'ed-header',
			isScrolled ? 'bg-[#fff]/30 backdrop-blur-sm' : 'bg-transparent'
		]"
	>
		<NuxtImg
		src="/ED_Logo.png"
		height="37"
		/>
		<EdHeaderMenu/>
  </header>
</template>

<style scoped>
	.ed-header {
		@apply fixed top-0 left-0 w-full z-50 flex items-center justify-between
			px-4 py-4 md:px-8 lg:px-16 h-[69px] transition-all duration-300 ease-in-out;
	}
</style>
