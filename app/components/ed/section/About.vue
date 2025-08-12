<script lang="ts" setup>
    import { Handshake } from "lucide-vue-next";
</script>

<template>
    <main
        id="edAbout"
        class="ed-about"
    >
        <section class="ed-about__section">
            <div class="ed-about__container">
                <Handshake
                    color="black"
                    stroke-width="1.5"
                    :size="30"
                    class="ed-about__icon"
                />
                <h2 class="ed-about__title">
                    <span>About</span>
                    <span>EasyDevs</span>
                </h2>
                <div class="ed-about__description">
                    <p>
                        At EasyDevs, we believe technology should be simple, accessible
                        and built for real businesses.
                    </p>
                    <p>
                        We&apos;re a small team of passionate developers helping
                        microbusinesses grow through smart, no-nonsense software. We
                        listen, we simplify, and we build things that actually work.
                    </p>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    .ed-about {
        @apply w-full z-10 bg-[var(--ed-white-background)];
        
        &__section {
            @apply flex flex-col justify-center text-left px-3
                md:px-0 gap-6 w-full;
        }
    			
    	&__container {
    	    @apply flex flex-col gap-6 md:px-32 leading-none;
    	}
    	
    	&__title {
       	@apply flex flex-col gap-1 text-5xl font-bold
            leading-tight break-words;
    	}
    	
    	&__description {
            @apply max-w-80 flex flex-col gap-3 text-base ml-14;
    	}
    }
</style>
