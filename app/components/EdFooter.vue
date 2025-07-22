<script setup lang="ts">
import { Phone, Mail, MapPin, Linkedin, Facebook, Youtube, Instagram, X } from 'lucide-vue-next'
import { ref } from 'vue'

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Benefits', id: 'benefits' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Services', id: 'services' },
  { label: 'Reviews', id: 'reviews' },
]

function handleScroll(id: string) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <footer class="bg-white py-12 text-easydevs-light-text">
    <div class="container mx-auto px-4 lg:px-16">
      <nav class="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-lg font-medium">
        <template v-for="(link, idx) in navLinks" :key="link.id">
          <a
            :href="'#' + link.id"
            @click.prevent="handleScroll(link.id)"
            class="hover:text-easydevs-dark-text"
          >
            {{ link.label }}
          </a>
          <span v-if="idx < navLinks.length - 1" class="text-gray-400">&bull;</span>
        </template>
      </nav>

      <div class="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm">
        <div class="flex items-center gap-2">
          <Phone class="h-4 w-4" />
          <span>(217) 555-0134</span>
        </div>
        <div class="flex items-center gap-2">
          <MapPin class="h-4 w-4" />
          <span>San Diego, CA</span>
        </div>
        <a href="mailto:sales@easydevs.com" class="flex items-center gap-2 hover:text-easydevs-dark-text">
          <Mail class="h-4 w-4" />
          <span>sales@easydevs.com</span>
        </a>
        <a href="#" class="flex items-center gap-2 hover:text-easydevs-dark-text">
          <Linkedin class="h-4 w-4" />
          <span>Linkedin</span>
        </a>
        <a href="#" class="flex items-center gap-2 hover:text-easydevs-dark-text">
          <Facebook class="h-4 w-4" />
          <span>Facebook</span>
        </a>
        <a href="#" class="flex items-center gap-2 hover:text-easydevs-dark-text">
          <Youtube class="h-4 w-4" />
          <span>Youtube</span>
        </a>
        <a href="#" class="flex items-center gap-2 hover:text-easydevs-dark-text">
          <Instagram class="h-4 w-4" />
          <span>Instagram</span>
        </a>
        <a href="#" class="flex items-center gap-2 hover:text-easydevs-dark-text">
          <X class="h-4 w-4" />
          <span>X</span>
        </a>
      </div>
    </div>
  </footer>
</template>