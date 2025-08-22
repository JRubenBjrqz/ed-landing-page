<script lang="ts" setup>
    const benefitCards = [
        {
            img: "new_ideas",
            height: 74,
            width: 64,
            title: "New Ideas",
            description:
                "We Create Fresh Ideas. We Make Your Brand Special And Easy To Remember.",
        },
        {
            img: "good_design",
            height: 82,
            width: 67,
            title: "Good Design",
            description:
                "We Make Smart Designs. These Designs Help Your Brand Grow And Get Results.",
        },
        {
            img: "adaptable_flexible",
            height: 79,
            width: 85,
            title: "Adaptable And Flexible",
            description: "We Make Solutions That Change With Your Business Needs.",
        },
        {
            img: "focus_people",
            height: 80,
            width: 107,
            title: "Focus On People",
            description:
                "We Build Things That Connect With Your Customer. It Feels Real And Personal.",
        },
        {
            img: "world_ideas",
            height: 76,
            width: 88,
            title: "World Ideas, Local Know-How",
            description:
                "We Use Big, Worldwide Trends, But Understand Your Local Market.",
        },
        {
            img: "ideas_comming",
            height: 87,
            width: 62,
            title: "Ideas You didn’t see comming",
            description:
                "Our team creates surprising new ideas to make your brand special.",
        },
        {
            img: "detail_counts",
            height: 88,
            width: 87,
            title: "Every Detail Counts",
            description:
                "We Design Everything With Care. Each Part Is Made To Work Perfectly.",
        },
    ];
</script>

<template>
    <main
        id="edBenefits"
        class="ed-benefits"
    >
        <section class="ed-benefits__section">
            <div class="ed-benefits__container">
                <div class="ed-benefits__container-title">
                    <h2 class="ed-benefits__title">
                        Why Are We The Best?
                    </h2>
                </div>
                <div class="ed-benefits__container-card">
                    <EdBenefitsCard
                        v-for="(card, index) in benefitCards"
                        :key="index"
                        :img="card.img"
                        :width="card.width"
                        :height="card.height"
                        :title="card.title"
                        :description="card.description"
                        class="ed-benefits__card"
                    />
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    .ed-benefits {
        @apply w-full z-10 bg-[var(--ed-white-2-background)];
        
        &__section {
            @apply flex py-24 items-center;
        }
        
        &__container {
            @apply min-w-full mx-auto;
        }
        
        &__container-title {
            @apply flex justify-end;
        }
        
        &__title {
            @apply text-5xl font-extrabold md:text-5xl text-right
                mb-12 xl:mb-0;
        }
        
        &__container-card {
            @apply grid grid-cols-1 sm:grid-cols-2
                lg:grid-cols-4 gap-x-8 mx-auto
                justify-center items-center;
            grid-template-columns: repeat(auto-fit, 256px);
        }

        &__card {
            @apply mt-6 lg:mt-0;
        }
    }

    @media (min-width: 1167px) {
        .ed-benefits__container-card > *:nth-child(3n + 1) {
            margin-top: 0;
        }

        .ed-benefits__container-card > *:nth-child(3n + 2) {
            margin-top: 3rem;
        }

        .ed-benefits__container-card > *:nth-child(3n + 3) {
            margin-top: 6rem;
        }

        .ed-benefits__container-card > *:nth-child(3n + 4) {
            margin-top: 9rem;
        }

        .ed-benefits__container-card > *:nth-child(3n + 5) {
            margin-top: 0rem;
        }

        .ed-benefits__container-card > *:nth-child(3n + 6) {
            margin-top: 3rem;
        }

        .ed-benefits__container-card > *:nth-child(3n + 7) {
            margin-top: 6rem;
        }
    }
</style>
