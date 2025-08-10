<script lang="ts" setup>
const benefitCards = [
    {
        img: "new_ideas",
        title: "New Ideas",
        description:
            "We Create Fresh Ideas. We Make Your Brand Special And Easy To Remember.",
    },
    {
        img: "good_design",
        title: "Good Design",
        description:
            "We Make Smart Designs. These Designs Help Your Brand Grow And Get Results.",
    },
    {
        img: "adaptable_flexible",
        title: "Adaptable And Flexible",
        description: "We Make Solutions That Change With Your Business Needs.",
    },
    {
        img: "focus_on_people",
        title: "Focus On People",
        description:
            "We Build Things That Connect With Your Customer. It Feels Real And Personal.",
    },
    {
        img: "world_ideas",
        title: "World Ideas, Local Know-How",
        description:
            "We Use Big, Worldwide Trends, But Understand Your Local Market.",
    },
    {
        img: "every_detail_counts",
        title: "Every Detail Counts",
        description:
            "We Design Everything With Care. Each Part Is Made To Work Perfectly.",
    },
];
</script>

<template>
    <section class="ed-benefits">
        <div class="ed-benefits__container">
            <div class="ed-benefits__container-title">
                <h2 class="text-4xl font-extrabold md:text-5xl text-right">
                    Why Are We The Best?
                </h2>
            </div>
            <div class="ed-benefits__container_card">
                <EdBenefitsCard
                    v-for="(card, index) in benefitCards"
                    :key="index"
                    :img="card.img"
                    :title="card.title"
                    :description="card.description"
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
.ed-benefits {
    @apply min-h-screen py-24 flex items-center;
}

.ed-benefits__container {
    @apply container mx-auto px-4 lg:px-16;
}

.ed-benefits__container-title {
    @apply flex justify-end mb-16;
}

.ed-benefits__container-title h2 {
    @apply text-5xl font-extrabold md:text-5xl text-right;
    font-family: var(--ed-fira-sans);
}

.ed-benefits__container_card {
    @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto justify-center items-center;
}
/* Escalonado visual para 3 columnas */
.ed-benefits__container_card > *:nth-child(3n + 1) {
    margin-top: 0;
}
.ed-benefits__container_card > *:nth-child(3n + 2) {
    margin-top: 2.5rem;
}
.ed-benefits__container_card > *:nth-child(3n + 3) {
    margin-top: 5rem;
}
</style>
