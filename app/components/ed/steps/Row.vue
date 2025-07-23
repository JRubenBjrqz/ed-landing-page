<script lang="ts" setup>
const props = defineProps<{
    number: number
    icon: string
    title: string
    description: string
  }>()
</script>

<template>
  <div className="flex flex-col md:flex-row items-start md:items-center gap-8 py-8">
    <div className="flex-shrink-0 text-left md:w-1/4">
      <div className="text-6xl font-extrabold text-easydevs-orange">{{props.number}}</div>
      <h3 className="text-3xl font-bold text-easydevs-dark-text mt-2">{{props.title}}</h3>
      <!-- {subtitle && <p className="text-lg text-easydevs-light-text mt-1">{subtitle}</p>} -->
    </div>
    <div className="flex-grow text-left md:w-1/2">
      <p className="mt-2 text-lg text-easydevs-light-text">{{props.description}}</p>
    </div>
    <div className="flex-shrink-0 md:w-1/4 flex justify-end">
      <component :is="props.icon" className="h-8 w-8 text-easydevs-dark-text" />
    </div>
  </div>
</template>