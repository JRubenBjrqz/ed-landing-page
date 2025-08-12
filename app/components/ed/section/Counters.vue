<script lang="ts" setup>
    import { Rocket, Smile, Package, Shapes, Plus, Percent } from 'lucide-vue-next';

    const EdCounters = ref<HTMLElement | null>(null);
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
    <section
        ref="EdCounters"
        class="ed-counters"
    >
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
                />
            </div>
            <!-- <div class="relative mt-20 h-40 flex items-center justify-center overflow-hidden">
            </div> -->
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .ed-counters {
        @apply py-20 md:py-24 min-h-screen w-full max-w-[var(--ed-xl)];
        
        &__container {
            @apply container mx-auto px-4 lg:px-16;
        }
    
        &__title {
            @apply text-left text-5xl font-extrabold mb-16;
            font-family: var(--ed-fira-sans);
        }
    
        &__container-stats {
            @apply mt-16 grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-x divide-[var(--ed-border)];
        }
    }
</style>