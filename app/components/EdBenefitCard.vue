<script lang="ts" setup>
  const props = defineProps<{
    icon: string
    title: string
    description: string
  }>()

</script>

<template>
  <div
    class="flex flex-col items-center text-center p-8 bg-white rounded-[20px] border border-gray-100 shadow-sm"
  >
    <div class="relative flex items-center justify-center mb-4 h-16 w-16">
      <div class="absolute inset-0 rounded-full bg-easydevs-orange opacity-40 blur-xl"></div>
      <component :is="props.icon" class="relative z-10 h-10 w-10 text-easydevs-dark-text" />
    </div>
    <h3 class="text-xl font-bold text-easydevs-dark-text">{{props.title}}</h3>
    <p class="mt-2 text-easydevs-light-text">{{props.description}}</p>
  </div>
</template>