<script setup lang="ts">
  	const faqs = [
  		{
  			question: "What Services Do You Offer?",
  			answer: "We Offer Branding And Identity, Digital Marketing, Web Design, App Development, Hosting And Management, And Custom Development. If Your Project Needs A Creative Digital Solution, We Can Help You!"
  		},
  		{
  			question: "How Long Will My Project Take?",
  			answer: "The time depends on the project size. A simple logo might take one week, while a full brand change can take a few months. We will always give you a clear timeline at the start and keep you updated."
  		},
  		{
  			question: "How Do You Make Sure The Work Is What I Want?",
  			answer: "We start each project by talking with you to understand your brand and goals. Then, we show you our drafts and updates often. You will have many chances to tell us what you think."
  		},
  		{
  			question: "Can I Ask For Changes On The Project?",
  			answer: "Yes. We include a set number of revisions with each project. This makes sure you are completely happy with the final result. We want the work to be perfect for you."
  		},
  		{
  			question: "How Do Payments Work?",
  			answer: "We offer Branding and Identity, Digital Marketing, Web Design, App Development, Hosting and Management, and Custom Development. If your project needs a creative digital solution, we can help you!"
  		},
  		{
  			question: "Will You Help After The Project Is Done?",
  			answer: "Yes! We offer support plans to keep your websites working well. We also have ongoing plans to create new content to keep your brand looking new and great."
  		}
	]

	const firstRowFaqs = faqs.slice(0, 3)
	const secondRowFaqs = faqs.slice(3, 6)
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
                <h2 class="ed-faq__title">You Ask We Answer</h2>
    			<div class="ed-faq__grid">
    				<EdFaqItem
    					v-for="(faq, idx) in firstRowFaqs"
    					:key="idx"
    					:question="faq.question"
    					:answer="faq.answer"
    				/>
    				<div class="ed-faq__img-container">
                        <NuxtImg
                            src="/img/faq_down.png"
							class="ed-faq__img"
                        />
                    </div>
    			</div>
    			<div class="ed-faq__grid">
       				<div class="ed-faq__img-container">
                        <NuxtImg
                            src="/img/faq_up.png"
                            class="ed-faq__img"
                        />
                    </div>
    				<EdFaqItem
    					v-for="(faq, idx) in secondRowFaqs"
    					:key="idx"
    					:question="faq.question"
    					:answer="faq.answer"
    				/>
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
        
        &__title {
            @apply text-5xl font-extrabold mb-12 flex justify-end;
        }
        
        &__grid {
            @apply grid grid-cols-4 gap-8 mb-8 justify-center;
            grid-template-columns: repeat(auto-fit, 259px)
        }

		&__img-container {
			@apply max-w-[259px] max-h-[244px];
		}
        
        &__img {
            @apply w-full pointer-events-none select-none;
        }
    }
</style>