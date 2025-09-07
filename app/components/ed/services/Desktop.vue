<script setup lang="ts">
	import { AnimatePresence, motion } from 'motion-v'

  	defineProps<{ 
		TABS: Array<{
			key: string
			label: string,
			heading: string,
			copy: string,
			bullets: string[],
			gallerySides: {
				left: { src: string, alt: string },
				right: { src: string, alt: string }
			}
		}>,
		active: string,
		current: {
			key: string
			label: string,
			heading: string,
			copy: string,
			bullets: string[],
			gallerySides: {
				left: { src: string, alt: string },
				right: { src: string, alt: string }
			}
		}
	}>()

  	const emit = defineEmits<{
		(e: 'update:active', value: string): void
	}>()
</script>

<template>
	<div class="ed-services-desktop__tabs">
		<div class="ed-services-desktop__services-tabs">
			<button
				v-for="tab in TABS"
				:key="tab.key"
				@click="emit('update:active', tab.key)"
				:class="['ed-services-desktop__tab-buttons', { active: active === tab.key }]"
			>
				<h6 :class="{ 'text-[var(--ed-primary)]': active === tab.key }">
					{{ tab.label }}
				</h6>
				<div
					v-show="active === tab.key"
					:class="[
						'ed-services-desktop__tab-border-active',
						{ 'ed-services-desktop__tab-animation': active === tab.key }
					]"
				/>
			</button>
		</div>
		<div class="relative">
			<AnimatePresence :initial="false">
				<motion.div
					v-if="current"
                    :key="current.key"
                    :initial="{ opacity: 0, scale: 0.98 }"
                    :animate="{ opacity: 1, scale: 1 }"
                    :exit="{ opacity: 0, scale: 0.98 }"
					class="absolute"
				>
					<div class="ed-services-desktop__tab-grid-first-row">
						<div class="ed-services-desktop__tab-grid-first-row-1">
							<h1>{{ current.heading }}</h1>
						</div>
						<div class="ed-services-desktop__tab-grid-first-row-2">
							<p>{{ current.copy }}</p>
						</div>
						<div class="ed-services-desktop__tab-grid-first-row-3">
							<NuxtImg
								src="/img/logo_asf.png"
								alt="EasyDevs Logo"
								loading="lazy"
								width="100"
							/>
						</div>
						<div class="ed-services-desktop__tab-grid-first-row-4">
							<p>{{ current.bullets.join(' / ') }}</p>
						</div>
					</div>
					<div class="ed-services-desktop__tab-grid-second-row">
						<div class="ed-services-desktop__tab-grid-second-row-1">
							<div class="ed-services-desktop__tab-grid-second-row-img-container">
								<NuxtImg
									:src="current.gallerySides.left.src"
									alt="EasyDevs Logo"
									loading="lazy"
									class="ed-services-desktop__tab-grid-second-row-img"
								/>
							</div>
						</div>
						<div class="ed-services-desktop__tab-grid-second-row-2">
							<NuxtImg
								src="/img/logo_asf_orange.png"
								alt="EasyDevs Logo"
								loading="lazy"
								width="80"
							/>
						</div>
						<div class="ed-services-desktop__tab-grid-second-row-3">
							<div class="ed-services-desktop__tab-grid-second-row-img-container">
								<NuxtImg
									:src="current.gallerySides.right.src"
									:alt="current.gallerySides.right.alt"
									loading="lazy"
									class="ed-services-desktop__tab-grid-second-row-img"
								/>
							</div>
						</div>
					</div>
				</motion.div>
			</AnimatePresence>
		</div>
	</div>
</template>

<style lang="scss" scoped>
  	.ed-services-desktop {
		&__services-tabs {
			@apply flex items-center mt-8 border-b border-[var(--ed-border-services)];
		}

		&__tab-buttons {
			@apply pr-6 py-3 text-base font-medium capitalize transition-all duration-200 relative whitespace-nowrap;
		}
		
		&__tab-border-active {
			@apply absolute bottom-0 left-0 w-full border-b border-[var(--ed-primary)];
			transform: scaleX(0);
			transform-origin: left;
		}

		&__tab-animation {
			animation: tabBorderGrow 0.32s cubic-bezier(.4,0,.2,1) forwards;
		}

		&__tab-grid-first-row {
			@apply grid grid-cols-5 grid-rows-2 w-full h-[274.5px] gap-0 border-b border-[var(--ed-border-services)];

			&-1 {
				@apply col-span-1 row-span-2 my-auto xl:px-10 flex items-center text-[32px] font-bold;
			}

			&-2 {
				@apply col-span-2 row-span-2 p-4 border-l border-r border-[var(--ed-border-services)] flex justify-start text-base;
			}

			&-3 {
				@apply col-span-1 row-span-2 p-4 border-r border-[var(--ed-border-services)] flex items-center justify-center;
			}

			&-4 {
				@apply col-span-1 row-span-2 py-4 pl-6 pr-4 flex items-start justify-end;

				& p {
					@apply w-full text-right text-[var(--ed-primary)] text-base;
				}
			}
		}

		&__tab-grid-second-row {
			@apply grid grid-cols-5 w-full;

			&-1 {
				@apply col-span-2 border-r border-[var(--ed-border-services)] flex items-center justify-center;
			}

			&-2 {
				@apply col-span-1 border-r border-[var(--ed-border-services)] flex items-center justify-center;
			}

			&-3 {
				@apply col-span-2 flex items-center justify-center;
			}

			&-img-container {
				@apply relative w-full h-[274.5px];
			}

			&-img {
				@apply max-h-full w-full object-cover;
			}
		}
  	}

  	@keyframes tabBorderGrow {
		from { transform: scaleX(0); }
		to { transform: scaleX(1); }
	}
</style>
