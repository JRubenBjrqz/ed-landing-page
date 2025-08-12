<script setup lang="ts">
    import { ChevronLeft, ChevronRight, Quote } from 'lucide-vue-next'
    
    const current = ref(0)
    const testimonials = [
        {
          quote: "Impressed by the professionalism and attention to detail in UI Design. A seamless experience from start to finish with an exceptional outcome.",
          name: "Sofia Beltran",
          role: "Co founder of blitzAI",
          // avatar: "/placeholder.svg?height=64&width=64",
          fallback: "SB"
        },
        {
          quote: "Impressed by the professionalism and attention to detail in UI Design. A seamless experience from start to finish with an exceptional outcome.",
          name: "Rubén Bojórquez",
          role: "Co founder of blitzAI",
          // avatar: "/placeholder.svg?height=64&width=64",
          fallback: "SB"
        },
    ]
    
    const prev = () => {
      current.value = (current.value - 1 + testimonials.length) % testimonials.length
    }

    const next = () => {
      current.value = (current.value + 1) % testimonials.length
    }
</script>

<template>
    <section
        id="edTestimonials"
        class="ed-testimonials"
    >
        <div class="ed-testimonials__container">
            <h2 class="text-5xl font-bold" style="font-family: var(--ed-work-sans);">Hear From Our Community</h2>
            <div>
                <div class="mt-12">
                    <div class="flex flex-col gap-3 max-w-[521px]">
                        <Quote
                            :size="36"
                            fill="#000"
                            class="rotate-180"
                        />
                        <span class="text-2xl leading-tight" style="font-family: var(--ed-work-sans);">
                            {{ testimonials[current].quote }}
                        </span>
                    </div>
                    <div class="mt-8 flex items-center gap-4">
                        <div class="h-[90px] w-[90px] rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                        <!-- <img
                            v-if="testimonials[current].avatar"
                            :src="testimonials[current].avatar"
                            :alt="testimonials[current].name"
                            class="h-full w-full object-cover"
                        /> -->
                        <!-- <span v-else class="text-xl font-bold">{{ testimonials[current].fallback }}</span> -->
                        </div>
                        <div>
                            <div class="text-[26px] font-bold" style="font-family: var(--ed-work-sans);">{{ testimonials[current]?.name }}</div>
                            <div class="text-[26px] font-normal" style="font-family: var(--ed-fira-sans);">{{ testimonials[current]?.role }}</div>
                        </div>
                    </div>
                    <div class="mt-8 flex gap-4">
                        <button 
                            class="h-12 w-12 rounded-full border border-t-slate-950 flex items-center justify-center bg-transparent" 
                            @click="prev"
                        >
                            <ChevronLeft class="h-6 w-6" />
                            <span class="sr-only">Previous testimonial</span>
                        </button>
                        <button
                            class="h-12 w-12 rounded-full border border-t-slate-950 flex items-center justify-center bg-transparent" 
                            @click="next"
                        >
                            <ChevronRight class="h-6 w-6" />
                            <span class="sr-only">Next testimonial</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
  </section>
</template>

<style lang="scss" scoped>
    .ed-testimonials {
        @apply relative py-20 md:py-32 w-full max-w-[var(--ed-xl)];
        
        &__container {
            @apply container items-center gap-12 lg:px-16;
        }
        
        &__quote {
            @apply text-3xl font-semibold leading-relaxed;
        }
        
        &__avatar {
            @apply h-16 w-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center;
        }
        
        &__name {
            @apply text-xl font-bold;
        }
        
        /* &__role {
            @apply;
        } */
    }
</style>
