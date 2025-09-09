<script setup lang="ts">
	import { useBreakpoints } from '@vueuse/core'

	const breakpoints = useBreakpoints({ xs: 0, sm: 640, md: 768, lg: 1024, xl: 1280 })
	const isMobile = breakpoints.smaller('md')
	const isTablet = breakpoints.between('md', 'xl')
	const isExtraLarger = breakpoints.greater('xl')

	const TABS = [
		{
			key: 'branding',
			label: 'Branding And Identity',
			heading: 'We help your business look unique and strong.',
			copy:
			"Your brand is how people see you. We help bring your business personality and story to life. We create everything from your logo to a full brand system, making sure it perfectly shows who you are.",
			bullets: ['Logo Design', 'Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Content Marketing'],
			gallerySides: {
				left: { src: 'https://easydevs.us/img/services/branding1.jpg', alt: 'Branding left' },
				right: { src: 'https://easydevs.us/img/services/branding2.jpg', alt: 'Branding right' },
			},
		},
		{
			key: 'marketing',
			label: 'Digital Marketing',
			heading: 'Get seen. Get clicks. Get results.',
			copy:
			"It's a big, busy internet out there—let’s make sure your brand doesn’t get lost in the scroll. We mix data, creativity, and digital magic to put your message in the right places.",
			bullets: ['Social Media Marketing', 'SEO & SEM', 'Email Campaigns', 'Paid Ads', 'Influencer Marketing', 'Blog Strategy'],
			gallerySides: {
				left: { src: 'https://easydevs.us/img/services/marketing1.jpg', alt: 'Marketing left' },
				right: { src: 'https://easydevs.us/img/services/marketing2.jpg', alt: 'Marketing right' },
			},
		},
		{
			key: 'web',
			label: 'Web Design',
			heading: 'Great-looking websites that really work',
			copy:
			'Your website is your online home. We design and build websites that are beautiful and smart, including powerful online stores. Clear, fast code to make everything easy and fun to use.',
			bullets: ['UX/UI Design', 'Custom Web Development', 'E-commerce & Online Stores', 'Responsive Design', 'Landing Pages', 'Website Maintenance'],
			gallerySides: {
				left: { src: 'https://easydevs.us/img/services/web1.jpg', alt: 'Web left' },
				right: { src: 'https://easydevs.us/img/services/web2.jpg', alt: 'Web right' },
			},
		},
		{
			key: 'apps',
			label: 'App Development',
			heading: 'We build great mobile apps.',
			copy:
			'Need an app for phones or tablets? We create apps that work smoothly and look fantastic. From simple ideas to complex tools, we make sure your app is easy to use and helps your business grow.',
			bullets: ['iOS Apps', 'Android Apps', 'Cross-Platform', 'Mobile UX/UI', 'App Maintenance', 'Support'],
			gallerySides: {
				left: { src: 'https://easydevs.us/img/services/app1.jpg', alt: 'Apps left' },
				right: { src: 'https://easydevs.us/img/services/app2.jpg', alt: 'Apps right' },
			},
		},
		{
			key: 'hosting',
			label: 'Hosting Maintenance',
			heading: 'Keeping your digital presence smooth and secure.',
			copy:
			"Don't stress about your website or app’s technical needs. We provide fast and secure hosting services and handle updates, monitoring, checks, and fixes—always online and safe.",
			bullets: ['Secure Hosting', 'Website Updates', 'Security Monitoring', 'Performance Optimization', 'Technical Support'],
			gallerySides: {
				left: { src: 'https://easydevs.us/img/services/hosting1.jpg', alt: 'Hosting left' },
				right: { src: 'https://easydevs.us/img/services/hosting2.jpg', alt: 'Hosting right' },
			},
		},
		{
			key: 'custom',
			label: 'Custom Development',
			heading: 'Software built just for you.',
			copy:
			"When ready-made tools don’t fit, we build the exact software you need— from special programs to complex systems—so you can work better and solve specific problems.",
			bullets: ['Custom Software', 'Enterprise Software', 'Database Development', 'System Integrations', 'API Development'],
			gallerySides: {
				left: { src: 'https://easydevs.us/img/services/custom1.png', alt: 'Custom left' },
				right: { src: 'https://easydevs.us/img/services/custom2.jpg', alt: 'Custom right' },
			},
		},
	];

	const active = ref<string>('branding')
	const current = computed(() => TABS.find(t => t.key === active.value)!)
</script>

<template>
	<main
		id="edServices"
		class="ed-services"
	>
		<section class="ed-services__section">
			<div class="ed_services__container">
				<div class="ed-services__container-title">
					<p class="ed-services__subtitle">We Are Good At It</p>
					<h1 class="ed-services__title">
						What We Offer
					</h1>
				</div>
				<template v-if="isMobile">
					<EdServicesMobile
						:TABS="TABS"
					/>
				</template>
				<template v-if="isTablet">
					<EdServicesTablet
						:TABS="TABS"
						:active="active"
						:current="current"
						@update:active="active = $event"
					/>
				</template>
				<template v-if="isExtraLarger">
					<EdServicesDesktop
						:TABS="TABS"
						:active="active"
						:current="current"
						@update:active="active = $event"
					/>
				</template>
			</div>
		</section>
	</main>
</template>


<style lang="scss" scoped>
	.ed-services {
		@apply w-full bg-[var(--ed-white-background)];

		&__section {
			@apply py-24;
		}

		&__container {
			@apply container mx-auto px-4 lg:px-16;
		}

		&__container-title {
			@apply flex flex-col gap-1;
		}

		&__subtitle {
			@apply text-2xl font-normal;
		}

		&__title {
			@apply text-5xl font-bold;
		}
	}

	section {
		@apply min-h-0 xl:min-h-screen;
	}
</style>