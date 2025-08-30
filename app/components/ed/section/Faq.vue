<script setup lang="ts">
  	const faqs = [
  		{
  			question: "What Services Do You Offer?",
  			answer: "We Offer Branding And Identity, Digital Marketing, Web Design, App Development, Hosting And Management, And Custom Development. If Your Project Needs A Creative Digital Solution, We Can Help You!",
			class: "order-1",
			isImg: false
  		},
  		{
  			question: "How Long Will My Project Take?",
  			answer: "The time depends on the project size. A simple logo might take one week, while a full brand change can take a few months. We will always give you a clear timeline at the start and keep you updated.",
			class: "order-7 xl:order-2",
			isImg: false
  		},
  		{
  			question: "How Do You Make Sure The Work Is What I Want?",
  			answer: "We start each project by talking with you to understand your brand and goals. Then, we show you our drafts and updates often. You will have many chances to tell us what you think.",
			class: "order-2 xl:order-3",
			isImg: false
  		},
		{
			src: "/img/faq_down.png",
			class: "order-3 xl:order-4",
			isImg: true
		},
		{
			src: "/img/faq_up.png",
			class: "order-8 xl:order-5",
			isImg: true
		},
  		{
  			question: "Can I Ask For Changes On The Project?",
  			answer: "Yes. We include a set number of revisions with each project. This makes sure you are completely happy with the final result. We want the work to be perfect for you.",
			class: "order-4 xl:order-6",
			isImg: false
  		},
  		{
  			question: "How Do Payments Work?",
  			answer: "We offer Branding and Identity, Digital Marketing, Web Design, App Development, Hosting and Management, and Custom Development. If your project needs a creative digital solution, we can help you!",
			class: "order-5 xl:order-7",
			isImg: false
  		},
  		{
  			question: "Will You Help After The Project Is Done?",
  			answer: "Yes! We offer support plans to keep your websites working well. We also have ongoing plans to create new content to keep your brand looking new and great.",
			class: "order-6 xl:order-8",
			isImg: false
  		},
	]

	// const firstRowFaqs = faqs.slice(0, 3)
	// const secondRowFaqs = faqs.slice(3, 6)
</script>

<template>
	<main
   	    id="edFaq"
        class="ed-faq"
	>
    	<section
    	    class="ed-faq__section"
    	>
    		<div class="ed-faq__container">
				<div class="ed-faq__grid">
					<h2 class="ed-faq__title">You Ask We Answer</h2>
					<div
						v-for="(faq, index) in faqs"
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

		&__grid {
			@apply flex flex-wrap justify-center gap-8;
		}
        
        &__title {
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
</style>