<script lang="ts" setup>
  import { MessageCircle, Monitor, Search, Star } from 'lucide-vue-next';

  import EdStepRow from '../EdStepRow.vue';

  const stepRows = [
    {
      icon: MessageCircle,
      title: 'Lets Talk And Plan.',
      description: 'We meet to understand your business, your goals, and what you want. This is where we share first ideas.',
    },
    {
      icon: Monitor,
      title: 'Work Starts',
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
  <section class="py-20 md:py-32 bg-easydevs-bg">
      <div class="container mx-auto px-4 lg:px-16">
        <div class="flex items-center justify-between mb-16">
          <div class="relative">
            <!-- <Image
              src="/placeholder.svg?height=60&width=120"
              alt="Process outline"
              width={120}
              height={60}
              class="opacity-70"
            /> -->
          </div>
          <h2 class="text-4xl font-extrabold md:text-5xl text-easydevs-dark-text text-right">Our Easy Steps</h2>
        </div>
        <div class="mt-16 divide-y divide-gray-200">
          <EdStepRow
            v-for="(row, index) in stepRows"
            :key="index"
            :number="index + 1"
            :title="row.title"
            :description="row.description"
            :icon="row.icon"
          />
          <!-- <EdStepRow
            number={1}
            title="Let's Talk And Plan."
            description="We meet to understand your business, your goals, and what you want. This is where we share first ideas."
            icon={MessageCircle}
          /> -->
        </div>
      </div>
    </section>
</template>