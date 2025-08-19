<script setup lang="ts">
    const current = ref(0)
    const testimonials = [
        {
          quote: "Impressed by the professionalism and attention to detail in UI Design. A seamless experience from start to finish with an exceptional outcome.",
          name: "Sofia Beltran",
          role: "Co founder of blitzAI",
          avatar: "https://placehold.co/90x90/EEE/31343C",
          fallback: "SB"
        },
        {
          quote: "Impressed by the professionalism and attention to detail in UI Design. A seamless experience from start to finish with an exceptional outcome.",
          name: "Rubén Bojórquez",
          role: "Co founder of blitzAI",
          // avatar: "https://placehold.co/90x90/EEE/31343C",
          fallback: "RB"
        },
    ]
    
    const onPrevious = () => {
      current.value = (current.value - 1 + testimonials.length) % testimonials.length
    }

    const onNext = () => {
      current.value = (current.value + 1) % testimonials.length
    }
</script>

<template>
    <main
        id="edTestimonials"
        class="ed-testimonials"
    >
        <section class="ed-testimonials__section">
            <div class="ed-testimonials__container">
                <h2 class="ed-testimonials__title">
                    Hear From Our Community
                </h2>
                <EdTestimonialsCard
                    :testimonial="testimonials[current]"
                    @previous="onPrevious"
                    @next="onNext"
                />
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    .ed-testimonials {
        @apply w-full bg-[var(--ed-white-2-background)];
        
        &__section {
            @apply py-24;
        }
        
        &__container {
            @apply container items-center gap-12;
        }
        
        &__title {
            @apply text-5xl font-bold;
        }
    }
</style>
