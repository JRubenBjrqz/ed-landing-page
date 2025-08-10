<script lang="ts" setup>
    const EdHero = ref<HTMLElement | null>(null);
</script>

<template>
    <section
        ref="EdHero"
        class="ed-hero"
    >
        <div
            class="ed-hero__container"
        >
            <h1 class="ed-hero__phrase">
                <span>Making</span>
                <span>Development</span>
                <div class="ed-hero__italic">
                    <span>Look</span>&nbsp;
                    <span class="ed-hero__easy">Easy.</span>
                </div>
            </h1>
            <EdHeroButton />
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .ed-hero {
        @apply grid grid-cols-5 min-h-screen w-full max-w-[var(--ed-xl)]
            pt-20 overflow-hidden text-left relative items-center;
            
        &__container {
            @apply col-span-5 md:col-span-3 lg:col-span-2
                px-4 md:px-8 lg:px-16 mx-auto flex flex-col gap-6;
        }
        
        &__phrase {
            @apply text-[4rem] leading-[1.2] capitalize md:leading-[77px]
           		w-full flex flex-col font-bold text-[var(--ed-black)];
            font-family: var(--ed-fira-sans);
        }
        
        &__italic {
            @apply flex;
        }
        
        &__easy {
            @apply font-light italic;
        }
    }
</style>
