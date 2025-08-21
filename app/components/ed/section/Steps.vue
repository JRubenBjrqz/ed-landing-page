<script lang="ts" setup>
  	import { MessageCircle, Monitor, Search, Star } from 'lucide-vue-next';

    const stepRows = [
        {
    		icon: MessageCircle,
    		title: 'Lets Talk And',
        	subtitle: 'Plan.',
    		description: 'We meet to understand your business, your goals, and what you want. This is where we share first ideas.',
        },
        {
    		icon: Monitor,
    		title: 'Work Starts',
    		subtitle: '(Magic Inprogress).',
    		description: 'We begin designing, writing, and building your project. We will give you regular updates and show you our progress.',
        },
        {
    		icon: Search,
    		title: 'Your Review & Our Fixes.',
    		description: 'You tell us what you like and what to change. We make small adjustments and polish everything until its perfect.',
        },
        {
    		icon: Star,
    		title: 'Launch & Celebrate!',
    		description: 'Your project goes live (starts working for everyone). We celebrate your success! We are also here to help you anytime you need us later.',
        },
    ]
</script>

<template>
    <main
        id="edSteps"
        class="ed-steps"
    >
        <section class="ed-steps__section">
		<div class="ed-steps__container">
			<div class="ed-steps__container-title">
				<h2 class="ed-steps__title">Our Easy Steps</h2>
			</div>
			<EdStepsRow
				v-for="(row, index) in stepRows"
				:key="index"
				:number="index + 1"
				:title="row.title"
				:description="row.description"
				:subtitle="row.subtitle"
				:icon="row.icon"
			/>
		</div>
	</section>
    </main>
</template>

<style lang="scss" scoped>
	.ed-steps {
		@apply w-full bg-[var(--ed-white-background)];
		
		&__section {
		    @apply py-24;
		}
		
		&__container {
			@apply container mx-auto px-4 lg:px-16;
		}

		&__container-title {
			@apply flex justify-end mb-12;
		}

		&__title {
			@apply text-5xl font-bold;
		}
	}
</style>