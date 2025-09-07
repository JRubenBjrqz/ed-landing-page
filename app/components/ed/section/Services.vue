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
				left: { src: '/img/services/branding1.jpg', alt: 'Branding left' },
				right: { src: '/img/services/branding2.jpg', alt: 'Branding right' },
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
				left: { src: '/img/services/marketing1.jpg', alt: 'Marketing left' },
				right: { src: '/img/services/marketing2.jpg', alt: 'Marketing right' },
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
				left: { src: '/img/services/web1.jpg', alt: 'Web left' },
				right: { src: '/img/services/web2.jpg', alt: 'Web right' },
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
				left: { src: '/img/services/app1.jpg', alt: 'Apps left' },
				right: { src: '/img/services/app2.jpg', alt: 'Apps right' },
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
				left: { src: '/img/services/hosting1.jpg', alt: 'Hosting left' },
				right: { src: '/img/services/hosting2.jpg', alt: 'Hosting right' },
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
				left: { src: '/img/services/custom1.png', alt: 'Custom left' },
				right: { src: '/img/services/custom2.jpg', alt: 'Custom right' },
			},
		},
	];

	const active = ref<string>('branding')
	const current = computed(() => TABS.find(t => t.key === active.value)!)
	const openKey = ref<string | null>('branding')

	function toggleMobile(k: string) {
		openKey.value = openKey.value === k ? null : k
	}
</script>

<!-- <template>
  <section id="services" class="section-anchor w-full bg-[var(--ed-bg,#FDFDFD)] scroll-mt-20">
    <div class="hidden lg:block">
			Desktop
      <div class="site-container py-16 md:py-20">
        <div class="flex items-start justify-between gap-6">
          <div>
            <p class="text-2xl font-normal capitalize text-gray-800">We Are Good At It</p>
            <h2 class="text-5xl font-bold capitalize text-gray-800 mt-2">What We Offer</h2>
          </div>
          <div class="relative w-[120px] h-[52px]">
            Imagen
          </div>
        </div>
        <div class="flex items-center mt-8 border-b border-gray-200">
          <button
            v-for="tab in TABS"
            :key="tab.key"
            @click="active = tab.key"
            :class="[
              'px-4 py-3 text-sm font-bold capitalize transition-all duration-200 relative whitespace-nowrap',
              active === tab.key
                ? 'bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent'
                : 'text-gray-800 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 hover:bg-clip-text hover:text-transparent'
            ]"
          >
            {{ tab.label }}
            <template v-if="active === tab.key">
              <div class="absolute bottom-0 left-0 w-full h-1 bg-orange-500" />
              <div class="absolute top-0 right-0 w-1 h-full bg-orange-500" />
            </template>
          </button>
        </div>
        <div :key="current.key" class="mt-0 animate-[panelPop_240ms_cubic-bezier(.2,.8,.2,1)]">
          <div class="grid grid-cols-5 grid-rows-2 w-full h-[300px] gap-0 border-b border-black/20">
            <div class="col-span-1 row-span-2 p-4 border-r border-black/20 flex items-center justify-start">
              <div class="text-left text-gray-800 text-3xl font-black font-['Work_Sans']">{{ current.heading }}</div>
            </div>
            <div class="col-span-2 row-span-2 p-4 border-l border-r border-black/20 flex items-start justify-start">
              <div class="self-stretch justify-start text-gray-800 text-base font-normal font-['Work_Sans']">{{ current.copy }}</div>
            </div>
            <div class="col-span-1 row-span-2 p-4 border-r border-black/20 flex items-center justify-center">
              Imagen
            </div>
            <div class="col-span-1 row-span-2 p-4 flex items-start justify-end">
              <div class="w-full text-right text-orange-500 text-base font-normal font-['Work_Sans']">
                {{ current.bullets.join(' / ') }}
              </div>
            </div>
          </div>
          <div class="grid grid-cols-5 w-full">
            <div class="col-span-2 border-r border-black/20 flex items-center justify-center">
              <div class="relative w-full h-[300px]">
                Imagen
              </div>
            </div>
            <div class="col-span-1 border-r border-black/20 flex items-center justify-center">
              <div class="relative w-full h-[300px]">
                Imagen
              </div>
            </div>
            <div class="col-span-2 flex items-center justify-center">
              <div class="relative w-full h-[300px]">
                Imagen
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hidden md:block lg:hidden">
		md
      <div class="hidden md:block lg:hidden">
  <div class="site-container py-16 relative">
    <div class="pointer-events-none absolute -top-3 right-6 rotate-[-14deg]">
      Imagen
    </div>

    <p class="text-[#232631] text-2xl font-normal capitalize" style="font-family: var(--ed-work-sans)">
      We Are Good At It
    </p>
    <h2 class="mt-1 text-[#232631] text-[48px] font-bold capitalize" style="font-family: var(--ed-fira-sans)">
      What We Offer
    </h2>

    <div class="mt-8 grid grid-cols-[300px_minmax(420px,1fr)] gap-10">
      <div class="relative">
        <div class="absolute right-0 top-0 h-full w-px bg-black/20" />
        <ul class="space-y-2 pr-6">
          <li v-for="tab in TABS" :key="tab.key">
            <button @click="active = tab.key" class="w-full text-left py-4">
              <div class="flex items-center gap-3">
                <span class="inline-block h-8 rounded-full"
                  :style="{ width: '4px', background: active === tab.key ? ORANGE : 'transparent' }" />
                <span
                  :class="['text-[24px] capitalize', active === tab.key ? 'font-medium' : 'font-normal']"
                  style="font-family: var(--ed-fira-sans)">
                  <span
                    :class="active === tab.key ? 'bg-gradient-to-r from-[#FF742A] to-[#FFB1B2] bg-clip-text text-transparent' : 'text-[#232631]'">
                    {{ tab.label }}
                  </span>
                </span>
              </div>
            </button>
          </li>
        </ul>
      </div>

      <div :key="current.key" class="grid grid-rows-[auto_auto_auto_auto] gap-4 animate-[panelPop_240ms_cubic-bezier(.2,.8,.2,1)]">
        <h3 class="text-[#232631] text-[16px] font-bold" style="font-family: var(--ed-work-sans)">
          {{ current.heading }}
        </h3>
        <p class="text-[#232631] text-[16px]" style="font-family: var(--ed-work-sans)">
          {{ current.copy }}
        </p>
        <div class="text-right text-[16px]" :style="{ color: ORANGE, fontFamily: 'var(--ed-work-sans)' }">
          {{ current.bullets.join('  |  ') }}
        </div>
        <div class="grid grid-cols-2 gap-6 mt-2">
          <div class="relative w-full h-[232px]">
            Imagen
          </div>
          <div class="relative w-full h-[232px]">
            Imagen
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>

    <div class="md:hidden">
		mobile
      <div class="site-container py-12 bg-[#FBFBFB]">
        <p class="text-[#232631] text-[24px] font-normal capitalize" style="font-family: var(--ed-work-sans)">We Are Good At It</p>
        <h2 class="text-[#232631] text-[48px] font-bold capitalize" style="font-family: var(--ed-fira-sans)">What We Offer</h2>
        <div class="mt-6 space-y-10">
          <div v-for="tab in TABS" :key="tab.key" class="border-b border-[var(--ed-orange)] pb-2">
            <button @click="toggleMobile(tab.key)" class="w-full flex items-center justify-between py-2">
              <span class="text-[18px] font-medium capitalize" style="font-family: var(--ed-fira-sans)">
                <span :class="openKey === tab.key ? 'bg-gradient-to-r from-[#FF742A] to-[#FFB1B2] bg-clip-text text-transparent' : ''" :style="{ color: openKey === tab.key ? undefined : '#FF742A' }">
                  {{ tab.label }}
                </span>
              </span>
              <span class="text-2xl leading-none text-[#232631]">{{ openKey === tab.key ? '–' : '+' }}</span>
            </button>
            <transition name="fade">
              <div v-if="openKey === tab.key" class="mt-3 space-y-4">
                <h3 class="text-[24px] font-bold text-[#232631]" style="font-family: var(--ed-work-sans)">{{ tab.heading }}</h3>
                <hr class="border-black/20" />
                <p class="text-[16px] text-[#232631]" style="font-family: var(--ed-work-sans)">{{ tab.copy }}</p>
                <div class="text-[16px]" style="color: #FF742A; font-family: var(--ed-work-sans)">{{ tab.bullets.join(' / ') }}</div>
                <div class="space-y-3">
                  <div class="relative w-full h-[151px]">
                    Imagen
                  </div>
                  <div class="relative w-full h-[151px]">
                    Imagen
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> -->

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
					Mobile
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
		@apply min-h-0;
	}
</style>