<script lang="ts" setup>
    import {Rocket, Smile, Package, Shapes, Plus, Percent} from 'lucide-vue-next';

    const counterStats = [
        {
            icon: Rocket,
            label: 'Brands Launched',
            count: 40,
            suffix: Plus
        },
        {
            icon: Smile,
            label: 'Happy Clients',
            count: 94,
            suffix: Percent
        },
        {
            icon: Package,
            label: 'Projects Delivered',
            count: 240,
            suffix: Plus
        },
        {
            icon: Shapes,
            label: 'Moodboards Completed',
            count: 500,
            suffix: Plus
        },
    ]
</script>

<template>
    <main
        id="edCounters"
        class="ed-counters"
    >
        <section class="ed-counters__section">
            <div class="ed-counters__container">
                <h2 class="ed-counters__title">
                    We Build Great Things. They Grew.
                </h2>
                <div class="ed-counters__container-stats">
                    <EdCounterStat
                        v-for="(counter, index) in counterStats"
                        :key="index"
                        :icon="counter.icon"
                        :label="counter.label"
                        :count="counter.count"
                        :suffix="counter.suffix"
                        :index="index"
                    />
                </div>
                <div class="mt-16">
                    <EdCounterMarquee/>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    .ed-counters {
        @apply w-full bg-[var(--ed-white-2-background)];
        
        &__section {
            @apply py-24;
        }
        
        &__container {
            @apply container mx-auto px-4 lg:px-16;
        }
    
        &__title {
            @apply text-left text-5xl font-extrabold mb-16;
        }
    
        &__container-stats {
            @apply mt-16 grid gap-12 grid-cols-1 sm:grid-cols-2
                lg:grid-cols-4;
        }
    }
</style>