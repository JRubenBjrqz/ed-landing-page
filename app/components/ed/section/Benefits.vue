<script lang="ts" setup>
  import { Lightbulb, ChartNoAxesColumn, Shapes, User, Globe, Search } from 'lucide-vue-next';

  const benefitCards = [
    {
      icon: Lightbulb,
      title: "New Ideas",
      description: "We Create Fresh Ideas. We Make Your Brand Special And Easy To Remember.",
    },
    {
      icon: ChartNoAxesColumn,
      title: "Good Design",
      description: "We Make Smart Designs. These Designs Help Your Brand Grow And Get Results.",
    },
    {
      icon: Shapes,
      title: "Adaptable And Flexible",
      description: "We Make Solutions That Change With Your Business Needs.",
    },
    {
      icon: User,
      title: "Focus On People",
      description: "We Build Things That Connect With Your Customer. It Feels Real And Personal.",
    },
    {
      icon: Globe,
      title: "World Ideas, Local Know-How",
      description: "We Use Big, Worldwide Trends, But Understand Your Local Market.",
    },
    {
      icon: Search,
      title: "Every Detail Counts",
      description: "We Design Everything With Care. Each Part Is Made To Work Perfectly.",
    },
  ]
</script>

<template>
  <section class="relative py-20 md:py-32 bg-easydevs-bg overflow-hidden">
      <div class="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 z-0">
        <!-- <Image
          src="/placeholder.svg?height=300&width=300"
          alt="Abstract pattern"
          width={300}
          height={300}
          class="opacity-20"
        /> -->
      </div>

      <div class="container mx-auto px-4 lg:px-16 relative z-10">
        <div class="flex justify-end mb-16">
          <h2 class="text-4xl font-extrabold md:text-5xl text-easydevs-dark-text text-right">
            Why Are We The Best?
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            <EdBenefitsCard
              v-for="(card, index) in benefitCards"
              :key="index"
              :icon="card.icon"
              :title="card.title"
              :description="card.description"
            />
          <div class="absolute -bottom-12 right-0 translate-x-1/4 translate-y-1/4 z-20 hidden md:block">
            <!-- <div class="flex items-center justify-center h-24 w-24 rounded-full border border-gray-300 text-easydevs-light-text text-lg font-semibold bg-transparent backdrop-blur-sm">
              Benefits
            </div> -->
          </div>
        </div>
      </div>
    </section>
</template>