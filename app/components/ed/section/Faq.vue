<script setup lang="ts">
    const EdFaq = ref<HTMLElement | null>(null);
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
	<section
	    ref="EdFaq"
	    class="py-20 md:py-32 w-full max-w-[var(--ed-xl)]"
	>
		<div class="container mx-auto px-4 lg:px-16">
			<div class="flex items-center justify-between mb-12">
				<h2 class="text-4xl font-extrabold md:text-5xl">You Ask We Answer</h2>
			</div>
			<div class="grid grid-cols-4 gap-8 mb-8">
				<EdFaqItem
					v-for="(faq, idx) in firstRowFaqs"
					:key="idx"
					:question="faq.question"
					:answer="faq.answer"
				/>
				<div></div> <!-- Último cuadro vacío -->
			</div>
			<div class="grid grid-cols-4 gap-8">
				<div></div> <!-- Primer cuadro vacío -->
				<EdFaqItem
					v-for="(faq, idx) in secondRowFaqs"
					:key="idx"
					:question="faq.question"
					:answer="faq.answer"
				/>
			</div>
		</div>
	</section>
</template>