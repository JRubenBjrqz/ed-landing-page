<script lang="ts" setup>
	import { Copy, ArrowUpRight } from 'lucide-vue-next'

	const socialMediaLinks = [
		{ icon: Copy, text: '(217) 555-0134' },
		{ text: 'San Diego, CA', underline: false, },
		{ icon: ArrowUpRight, text: 'sales@easydevs.com', },
		{ icon: ArrowUpRight, text: 'Linkedin', },
		{ icon: ArrowUpRight, text: 'Facebook', },
		{ icon: ArrowUpRight, text: 'Youtube', },
		{ icon: ArrowUpRight, text: 'Instagram', },
		{ icon: ArrowUpRight, text: 'X', borderRight: false },
	];
</script>

<template>
	<div class="mt-12 flex flex-wrap items-center justify-center border-t border-b border-[var(--ed-black)]">
		<EdFooterSocialMediaButton
			v-for="(link, index) in socialMediaLinks"
			:key="index"
			:icon="link.icon"
			:text="link.text"
			:underline="link.underline"
			:border-right="link.borderRight"
		/>
	</div>
</template>