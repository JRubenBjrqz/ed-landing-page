<script setup lang="ts">
	import { useBreakpoints } from '@vueuse/core'
	import { ChevronDown } from 'lucide-vue-next'
	import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'reka-ui'
import { _0 } from '../../../../.nuxt/types/tailwind.config';

	const breakpoints = useBreakpoints({ xs: 0, sm: 640, md: 768, lg: 1024, xl: 1280 })
	const isMobile = breakpoints.smaller('lg')
  	const FAQS = [
  		{
  			question: "What Services Do You Offer?",
  			answer: "We Offer Branding And Identity, Digital Marketing, Web Design, App Development, Hosting And Management, And Custom Development. If Your Project Needs A Creative Digital Solution, We Can Help You!",
			class: "order-1",
			isImg: false,
			value: 'faq-1'
  		},
  		{
  			question: "How Long Will My Project Take?",
  			answer: "The time depends on the project size. A simple logo might take one week, while a full brand change can take a few months. We will always give you a clear timeline at the start and keep you updated.",
			class: "order-7 xl:order-2",
			isImg: false,
			value: 'faq-2'
  		},
  		{
  			question: "How Do You Make Sure The Work Is What I Want?",
  			answer: "We start each project by talking with you to understand your brand and goals. Then, we show you our drafts and updates often. You will have many chances to tell us what you think.",
			class: "order-2 xl:order-3",
			isImg: false,
			value: 'faq-3'
  		},
		{
			src: "/img/faq_down.png",
			class: "order-3 xl:order-4",
			isImg: true,
			value: 'faq-4'
		},
		{
			src: "/img/faq_up.png",
			class: "order-8 xl:order-5",
			isImg: true,
			value: 'faq-5'
		},
  		{
  			question: "Can I Ask For Changes On The Project?",
  			answer: "Yes. We include a set number of revisions with each project. This makes sure you are completely happy with the final result. We want the work to be perfect for you.",
			class: "order-4 xl:order-6",
			isImg: false,
			value: 'faq-6'
  		},
  		{
  			question: "How Do Payments Work?",
  			answer: "We offer Branding and Identity, Digital Marketing, Web Design, App Development, Hosting and Management, and Custom Development. If your project needs a creative digital solution, we can help you!",
			class: "order-5 xl:order-7",
			isImg: false,
			value: 'faq-7'
  		},
  		{
  			question: "Will You Help After The Project Is Done?",
  			answer: "Yes! We offer support plans to keep your websites working well. We also have ongoing plans to create new content to keep your brand looking new and great.",
			class: "order-6 xl:order-8",
			isImg: false,
			value: 'faq-8'
  		},
	]
</script>

<template>
	<main id="edFaq" class="ed-faq">
		<section class="ed-faq__section">
			<div class="ed-faq__container">
				<template v-if="isMobile">
					<h2 class="ed-faq__accordion-title">You Ask We Answer</h2>
					<AccordionRoot
						type="single"
						:collapsible="true"
					>
						<template
							v-for="item in FAQS"
							:key="item.value"
						>
							<AccordionItem
								v-if="!item.isImg"
								class="ed-faq__accordion-item"
								:value="item.value"
							>
								<AccordionHeader class="ed-faq__accordion-header">
								<AccordionTrigger class="ed-faq__accordion-trigger group">
									<h3 class="ed-faq__accordion-question">{{ item.question }}</h3>
									<ChevronDown
										class="ed-faq__accordion-icon"
										aria-label="Expand/Collapse"
									/>
								</AccordionTrigger>
								</AccordionHeader>
								<AccordionContent class="ed-faq__accordion-content">
									<div class="ed-faq__accordion-answer">
										{{ item.answer }}
									</div>
								</AccordionContent>
							</AccordionItem>
						</template>
					</AccordionRoot>
				</template>
				<template v-else>
					<div class="ed-faq__grid">
						<h2 class="ed-faq__grid-title">You Ask We Answer</h2>
						<div
							v-for="(faq, index) in FAQS"
							:key="index"
							:class="['ed-faq__item', faq.class]"
						>
							<EdFaqItem
								v-if="!faq.isImg"
								:question="faq.question ?? ''"
								:answer="faq.answer ?? ''"
							/>
							<div
								v-else
								:class="['ed-faq__img-container', faq.class]"
							>
								<NuxtImg
									:src="faq.src"
									class="ed-faq__img"
								/>
							</div>
						</div>
					</div>
				</template>
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
    .ed-faq {
        @apply w-full bg-[var(--ed-white-background)];
        
        &__section {
            @apply py-24;
        }
        
        &__container {
            @apply container mx-auto px-4 lg:px-16;
        }

		&__accordion-title {
            @apply text-5xl font-extrabold mb-8;
        }

		&__accordion-item {
			@apply py-2 mt-px overflow-hidden;
		}

		&__accordion-header {
			@apply flex;
		}

		&__accordion-trigger {
			@apply flex flex-1 cursor-pointer items-center justify-between py-1;
		}

		&__accordion-question {
			@apply text-2xl font-semibold text-left;
			}

		&__accordion-icon {
			@apply ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180;
		}

		&__accordion-answer {
			@apply py-2 text-base font-normal;
			font-family: var(--ed-dm-sans);
		}

		&__accordion-content {
			@apply overflow-hidden;
		}

		&__accordion-content[data-state="open"] {
			animation: slideDown 300ms ease-out;
		}

		&__accordion-content[data-state="closed"] {
			animation: slideUp 300ms ease-out;
		}

		&__grid {
			@apply flex flex-wrap justify-center gap-8;
		}
        
        &__grid-title {
            @apply text-5xl font-extrabold pr-7 xl:pr-0
				w-[259px] xl:mb-12 xl:w-full xl:flex
				xl:justify-end;
        }

		&__item {
			@apply w-[259px] max-h-[244px];
		}

		&__img-container {
			@apply max-w-[259px] max-h-[244px];
		}
        
        &__img {
            @apply w-full pointer-events-none select-none;
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