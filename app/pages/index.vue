<script setup>
	import { useHead } from '@unhead/vue'

	useHead({
		title: 'EasyDevs — Custom Web, Apps & Marketing That Scale',
		meta: [
			{ name: 'description', content: 'We design brands, build websites and apps, and ship custom software for SMBs. Fast, clean, and scalable solutions that actually move the needle.' },
			{ name: 'keywords', content: 'software development, web design, branding, digital marketing, mobile apps, custom software, ecommerce, Phoenix, EasyDevs' },
			{ property: 'og:title', content: 'EasyDevs — Custom Web, Apps & Marketing That Scale' },
			{ property: 'og:description', content: 'We design brands, build websites and apps, and ship custom software for SMBs. Fast, clean, and scalable solutions that actually move the needle.' },
			{ property: 'og:image', content: '/og/og-image.png' },
			{ property: 'og:image', content: 'https://easydevs.us/img/og.png' },
			{ property: 'og:url', content: 'https://easydevs.us' },
			{ property: 'og:type', content: 'website' },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:title', content: 'EasyDevs — Custom Web, Apps & Marketing That Scale' },
			{ name: 'twitter:description', content: 'We design brands, build websites and apps, and ship custom software for SMBs. Fast, clean, and scalable solutions that actually move the needle.' },
			{ name: 'twitter:image', content: 'https://easydevs.us/img/og.png' }
		],
		link: [
			{ rel: 'canonical', href: 'https://easydevs.us' },
			{ rel: 'icon', type: 'image/png', href: 'https://easydevs.us/img/icon.png' },
			{ rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
			{ rel: 'manifest', href: '/site.webmanifest' }
		],
		script: [
			{
			type: 'application/ld+json',
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "EasyDevs",
				url: "https://easydevs.us",
				logo: "https://easydevs.us/icon.png",
				sameAs: [
				"https://www.linkedin.com/company/easydevs-us/",
				"https://www.facebook.com/easydevs.us",
				"https://www.instagram.com/easydevs.us",
				"https://x.com/easydevsus"
				]
			})
			}
		]
	})
</script>

<template>
  <NuxtLayout name="ed-default">
    <EdSectionHero />
    <EdSectionAbout />
    <EdSectionBenefits />
    <EdSectionSteps />
    <EdSectionCounters />
    <EdSectionServices />
    <!-- <EdSectionTestimonials /> -->
    <EdSectionFaq />
    <EdSectionForm />
  </NuxtLayout>
</template>