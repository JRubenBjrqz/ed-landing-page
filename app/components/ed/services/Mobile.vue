<script setup lang="ts">
	import { ChevronDown } from 'lucide-vue-next'
	import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'reka-ui'

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
	}>()
</script>

<template>
    <ClientOnly>
		<AccordionRoot
			type="single"
			:collapsible="true"
			class="ed-services-mobile"
		>
			<template
				v-for="tab in TABS"
				:key="tab.value"
			>
				<AccordionItem
					class="ed-services-mobile__item"
					:value="tab.key"
				>
					<AccordionHeader class="ed-services-mobile__header">
					<AccordionTrigger class="ed-services-mobile__trigger group">
						<div class="ed-services-mobile__trigger-header">
							<h3 class="ed-services-mobile__label">{{ tab.label }}</h3>
							<ChevronDown
								class="ed-services-mobile__icon"
								aria-label="Expand/Collapse"
							/>
						</div>
						<hr class="ed-services-mobile__hr" />
					</AccordionTrigger>
					</AccordionHeader>
					<AccordionContent class="ed-services-mobile__content">
						<h3 class="ed-services-mobile__title">
                            {{ tab.heading }}
                        </h3>
                        <p>
                            {{ tab.copy }}
                        </p>
                        <p class="ed-services-mobile__bullets">
                            {{ tab.bullets.join(' / ') }}
                        </p>
                        <div class="ed-services-mobile__img-col">
                            <div class="ed-services-mobile__img-container">
                                <NuxtImg
                                    :src="tab.gallerySides.left.src"
                                    :alt="tab.gallerySides.left.alt"
                                    class="ed-services-mobile__img"
                                />
                            </div>
                            <div class="ed-services-mobile__img-container">
                                <NuxtImg
                                    :src="tab.gallerySides.right.src"
                                    :alt="tab.gallerySides.right.alt"
                                    class="ed-services-tablet__img"
                                />
                            </div>
                        </div>
					</AccordionContent>
				</AccordionItem>
			</template>
		</AccordionRoot>
	</ClientOnly>
</template>

<style lang="scss" scoped>
    .ed-services-mobile {
		@apply mt-8;

        &__item {
			@apply py-2 mt-px overflow-hidden;
		}

		&__header {
			@apply flex;
		}

		&__trigger {
			@apply flex flex-col w-full gap-2;
		}

		&__trigger-header {
			@apply flex flex-1 cursor-pointer items-center justify-between py-1 group-data-[state=open]:text-[var(--ed-primary)];
		}

		&__label {
			@apply text-2xl font-semibold text-left group-data-[state=open]:text-[var(--ed-primary)];
		}

		&__icon {
			@apply ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180;
		}

		&__hr {
			@apply border-[var(--ed-border-services)] group-data-[state=open]:border-[var(--ed-primary)];
		}

		&__content {
			@apply py-3 flex flex-col gap-3 overflow-hidden;
		}

		&__content[data-state="open"] {
			animation: slideDown 300ms ease-out;
		}

		&__content[data-state="closed"] {
			animation: slideUp 300ms ease-out;
		}

		&__title {
			@apply text-2xl font-bold;
		}
		
		&__bullets {
			@apply text-base font-normal text-[var(--ed-primary)];
		}

		&__img-col {
			@apply flex flex-col;
		}

		&__img-container {
			@apply relative w-full h-[151px];
		}

		&__img {
			@apply h-full w-full object-cover object-center pointer-events-none select-none;
		}
    }

    @keyframes slideDown {
		from {
			height: 0;
		}
		to {
			height: var(--reka-accordion-content-height);
		}
	}

	@keyframes slideUp {
		from {
			height: var(--reka-accordion-content-height);
		}
		to {
			height: 0;
		}
	}
</style>