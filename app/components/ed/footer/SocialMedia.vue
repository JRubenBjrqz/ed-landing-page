<script lang="ts" setup>
	import { Copy, ArrowUpRight } from 'lucide-vue-next'

	const socialMediaLinks = [
		// { icon: Copy, text: '(217) 555-0134' },
		{ text: 'Phoenix, AZ', underline: false, },
		{ icon: ArrowUpRight, text: 'hello@easydevs.us', },
		{ icon: ArrowUpRight, text: 'Linkedin', link: 'https://www.linkedin.com/company/easydevs-us/about/' },
		{ icon: ArrowUpRight, text: 'Facebook', link: 'https://www.facebook.com/easydevs.us' },
		// { icon: ArrowUpRight, text: 'Youtube', },
		{ icon: ArrowUpRight, text: 'Instagram', link: 'https://www.instagram.com/easydevs.us' },
		{ icon: ArrowUpRight, text: 'X', borderRight: false, link: 'https://x.com/easydevsus' },
	];
</script>

<template>
	<div class="ed-footer-social-media">
		<EdFooterSocialMediaButton
			v-for="(link, index) in socialMediaLinks"
			:key="index"
			:icon="link.icon"
			:text="link.text"
			:underline="link.underline"
			:border-right="link.borderRight"
			@go-to="navigateTo(link.link, { open: { target: '_blank' } })"
		/>
	</div>
</template>

<style lang="scss" scoped>
	.ed-footer-social-media {
		@apply mt-12 flex flex-wrap items-center justify-center 
			border-t border-b border-[var(--ed-black)] max-w-4xl
			mx-4 md:mx-auto;
	}
</style>