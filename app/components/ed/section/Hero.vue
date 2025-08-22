<template>
    <main
        id="edHero"
        class="ed-hero"
    >
        <EdHeroBlobs />
        <section class="ed-hero__section">
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
            <NuxtImg
                src="https://easydevs.us/images/blob.avif"
                class="ed-hero__img"
            />
        </section>
    </main>
</template>

<style lang="scss" scoped>
    .ed-hero {
        @apply w-full relative bg-[var(--ed-light-background)] 
            overflow-hidden;

        &__section {
            @apply grid grid-cols-5 pt-20 overflow-hidden
                text-left relative items-center;
        }
            
        &__container {
            @apply col-span-5 md:col-span-3 lg:col-span-3 z-10
                px-4 md:px-8 lg:px-16 mx-auto flex flex-col gap-6;
        }
        
        &__phrase {
            @apply text-6xl md:text-[4rem] leading-[1.2] capitalize md:leading-[77px]
           		w-full flex flex-col font-bold;
        }
        
        &__italic {
            @apply flex;
        }
        
        &__easy {
            @apply font-light italic;
        }

        &__img {

            @apply block absolute inset-0 w-full h-full object-cover z-0
                transition-all duration-500 pointer-events-none select-none;

            @apply md:static md:col-start-4 md:col-span-2 md:w-full
                md:h-auto md:object-contain md:z-auto mt-8 lg:mt-0;
        }
    }
</style>
