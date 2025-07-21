<script lang="ts" setup>
	import { Menu } from 'lucide-vue-next';
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-4 md:px-8 lg:px-16 h-[69px] bg-transparent">
    <NuxtImg
      src="/ED_Logo.png"
      height="37"
    />
    <Menu
      color="black"
      :size="24"
      class="cursor-pointer"
      @click="console.log('Open menu')"
    />
  </header>
</template>