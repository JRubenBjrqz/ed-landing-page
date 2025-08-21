<script lang="ts" setup>
    const props = withDefaults(defineProps<{
        icon?: string;
        text: string;
        underline?: boolean;
        borderRight?: boolean;
    }>(), {
        underline: true,
        borderRight: true,
    })

    const emit = defineEmits<{
		(e: 'goTo'): void;
	}>();
</script>

<template>
    <NuxtLink 
        @click="emit('goTo')"
        :class="[
            'ed-social-media-button', 
            { 'underline': props.underline, 'border-r border-[var(--ed-black)]': props.borderRight }
        ]"
    >
        <span>{{ props.text }}</span>
        <component 
            v-if="props.icon"
            :is="props.icon"
            :size="24"
        />
	</NuxtLink>
</template>

<style scoped>
    .ed-social-media-button {
        @apply flex items-center gap-2.5 text-base text-[var(--ed-black)] 
            cursor-pointer p-4 hover:text-[var(--ed-primary)] transition-colors duration-300;
    }
</style>