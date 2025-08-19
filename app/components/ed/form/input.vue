<script lang="ts" setup>
    const props = defineProps<{
        label: string
        name: string
    }>()
    
    const model = defineModel('modelValue', {
        type: String,
        required: true
    })
</script>

<template>
    <div class="relative w-full">
        <input
            v-model="model"
            :name="name"
            type="text"
            class="w-full border-b border-gray-400 bg-transparent py-3 focus:ring-0 focus:border-black focus:outline-none peer"
            required
            placeholder=""
        />
        <label
            class="absolute left-0 top-3 text-gray-400 transition-all duration-200
                pointer-events-none
                peer-focus:-top-3 peer-focus:text-xs peer-focus:text-black
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
            :class="name ? '-top-3 text-xs text-black' : 'top-3 text-base'"
            >
            {{ label }}
        </label>
    </div>
</template>