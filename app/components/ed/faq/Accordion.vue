<script lang="ts" setup>
    import { ChevronDown } from 'lucide-vue-next'
	import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from 'reka-ui'

    defineProps<{
        faqs: {
            question: string,
            answer: string,
            value: string,
        }[];
    }>()
</script>

<template>
    <ClientOnly>
		<AccordionRoot
			type="single"
			:collapsible="true"
			class="ed-faq-accordion"
		>
			<template
				v-for="faq in faqs"
				:key="faq.value"
			>
				<AccordionItem
					class="ed-faq-accordion__item"
					:value="faq.value"
				>
					<AccordionHeader class="ed-faq-accordion__header">
					<AccordionTrigger class="ed-faq-accordion__trigger group">
						<h3 class="ed-faq-accordion__question">{{ faq.question }}</h3>
						<ChevronDown
							class="ed-faq-accordion__icon"
							aria-label="Expand/Collapse"
						/>
					</AccordionTrigger>
					</AccordionHeader>
					<AccordionContent class="ed-faq-accordion__content">
						<div class="ed-faq-accordion__answer">
							{{ faq.answer }}
						</div>
					</AccordionContent>
				</AccordionItem>
			</template>
		</AccordionRoot>
	</ClientOnly>
</template>

<style lang="scss" scoped>
    .ed-faq-accordion {
        &__item {
			@apply py-2 mt-px overflow-hidden;
		}

		&__header {
			@apply flex;
		}

		&__trigger {
			@apply flex flex-1 cursor-pointer items-center justify-between py-1;
		}

		&__question {
			@apply text-2xl font-semibold text-left;
			}

		&__icon {
			@apply ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180;
		}

		&__answer {
			@apply py-2 text-base font-normal;
			font-family: var(--ed-dm-sans);
		}

		&__content {
			@apply overflow-hidden;
		}

		&__content[data-state="open"] {
			animation: slideDown 300ms ease-out;
		}

		&__content[data-state="closed"] {
			animation: slideUp 300ms ease-out;
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