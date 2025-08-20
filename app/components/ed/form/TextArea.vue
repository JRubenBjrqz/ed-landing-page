
<script lang="ts" setup>
	defineProps<{
		label: string
		name: string
		required: boolean
	}>()

	const model = defineModel('modelValue', {
		type: String,
		required: true
	})
</script>

<template>
  <div class="relative w-full">
    <textarea
      v-model="model"
      :name="name"
      :required="required"
      rows="4"
      class="peer w-full border-b bg-transparent py-3 focus:ring-0 focus:outline-none transition-colors duration-200 border-black focus:border-[var(--ed-primary)] resize-none"
      :class="model ? 'border-black' : ''"
    ></textarea>
    <label
      class="absolute left-0 transition-all duration-200 pointer-events-none"
      :class="model
        ? '-top-3 text-xs text-[var(--ed-primary)]'
        : 'top-3 text-base text-gray-400'
      "
    >
      {{ label }}
    </label>
  </div>
</template>