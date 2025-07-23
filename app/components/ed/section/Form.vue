<script setup lang="ts">
import { ref } from 'vue'
// import { Input } from '@/components/ui/input.vue'
// import { Textarea } from '@/components/ui/textarea.vue'
// import { Button } from '@/components/ui/button.vue'
import { ArrowRight } from 'lucide-vue-next'

const name = ref('')
const email = ref('')
const message = ref('')

function submitForm() {
  // Aquí puedes manejar el envío del formulario
  // Por ejemplo, enviar los datos a una API o mostrar un mensaje de éxito
}
</script>

<template>
  <section class="relative flex flex-col items-center justify-center overflow-hidden bg-easydevs-bg py-20 md:py-32">
    <div class="absolute inset-0">
      <!-- Placeholder for the abstract background shapes -->
      <!-- <img
        src="/placeholder.svg?height=800&width=1200"
        alt="Abstract background shapes"
        class="w-full h-full object-cover opacity-50"
      /> -->
    </div>
    <div class="relative z-10 grid w-full max-w-6xl gap-12 px-4 md:grid-cols-2 lg:px-16">
      <div class="text-left">
        <h2 class="text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
          Ready to grow with <br /> simple, <br /> custom <br /> software?
        </h2>
      </div>
      <div class="flex flex-col items-start">
        <p class="text-lg text-easydevs-light-text">
          Book a free call and get a tailored proposal for your business.
        </p>
        <form class="mt-8 w-full space-y-6" @submit.prevent="submitForm">
          <Input
            v-model="name"
            type="text"
            placeholder="Name"
            class="w-full border-b border-gray-400 bg-transparent py-3 focus:border-easydevs-orange focus:ring-0"
          />
          <Input
            v-model="email"
            type="email"
            placeholder="Email"
            class="w-full border-b border-gray-400 bg-transparent py-3 focus:border-easydevs-orange focus:ring-0"
          />
          <Textarea
            v-model="message"
            placeholder="Message"
            class="min-h-[120px] w-full border-b border-gray-400 bg-transparent py-3 focus:border-easydevs-orange focus:ring-0"
          />
          <Button variant="outline" class="mt-8 rounded-full px-8 py-6 text-lg font-semibold bg-transparent" type="submit">
            Send Message <ArrowRight class="ml-2 h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  </section>
</template>