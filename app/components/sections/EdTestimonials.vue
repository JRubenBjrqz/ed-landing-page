<script setup lang="ts">
import { ref } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
// import { Button } from '@/components/ui/button.vue'

const testimonials = [
  {
    quote: "Impressed by the professionalism and attention to detail in UI Design. A seamless experience from start to finish with an exceptional outcome.",
    name: "Sofia Beltran",
    role: "Co founder of blitzAI",
    // avatar: "/placeholder.svg?height=64&width=64",
    fallback: "SB"
  },
  // Puedes agregar más testimonios aquí
]

const current = ref(0)

function prev() {
  current.value = (current.value - 1 + testimonials.length) % testimonials.length
}
function next() {
  current.value = (current.value + 1) % testimonials.length
}
</script>

<template>
  <section class="relative py-20 md:py-32">
    <div class="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 lg:px-16">
      <div class="relative">
        <div class="flex items-center justify-between">
          <h2 class="text-4xl font-extrabold md:text-5xl text-easydevs-dark-text">Hear From Our Community</h2>
          <div class="relative">
            <!-- <img src="/placeholder.svg?height=60&width=120" alt="Reviews outline" width="120" height="60" /> -->
          </div>
        </div>
        <div class="mt-12">
          <blockquote class="text-3xl font-semibold leading-relaxed text-easydevs-dark-text">
            &ldquo;{{ testimonials[current].quote }}&rdquo;
          </blockquote>
          <div class="mt-8 flex items-center gap-4">
            <div class="h-16 w-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
              <!-- <img
                v-if="testimonials[current].avatar"
                :src="testimonials[current].avatar"
                :alt="testimonials[current].name"
                class="h-full w-full object-cover"
              /> -->
              <!-- <span v-else class="text-xl font-bold">{{ testimonials[current].fallback }}</span> -->
            </div>
            <div>
              <div class="text-xl font-bold">{{ testimonials[current].name }}</div>
              <div class="text-easydevs-light-text">{{ testimonials[current].role }}</div>
            </div>
          </div>
          <div class="mt-8 flex gap-4">
            <Button variant="outline" size="icon" class="h-12 w-12 rounded-full bg-transparent" @click="prev">
              <ChevronLeft class="h-6 w-6" />
              <span class="sr-only">Previous testimonial</span>
            </Button>
            <Button variant="outline" size="icon" class="h-12 w-12 rounded-full bg-transparent" @click="next">
              <ChevronRight class="h-6 w-6" />
              <span class="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
      <div class="relative flex items-center justify-center">
        <!-- <img
          src="/placeholder.svg?height=400&width=400"
          alt="Abstract design elements"
          width="400"
          height="400"
          class="opacity-70"
        /> -->
      </div>
    </div>
  </section>
</template>
