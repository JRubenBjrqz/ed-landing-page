<script lang="ts" setup>
	const props = defineProps<{
		icon: string
		label: string
		count: number
		suffix: string
	}>()
</script>

<template>
  	<div class="ed-counters-stat">
    	<div class="ed-counters-stat__header">
            <component 
                :is="props.icon" 
                size="30"
                stroke-width="1.2"
            />
            <span class="ed-counters-stat__label">{{props.label}}</span>
        </div>
		<div class="ed-counters-stat__countup">
			<span class="ed-counters-stat__count">{{props.count}}</span>
            <component
                :is="props.suffix"
                size="56"
                stroke-width="1"
                class="ed-counters-stat__suffix"
            >
                {{props.suffix}}
            </component>
		</div>
  	</div>
</template>

<style lang="scss" scoped>
    .ed-counters-stat {
        @apply flex flex-col px-4 h-[298px] justify-between;
        
        &__header {
            @apply flex flex-col gap-3 font-normal;
            font-family: var(--ed-work-sans);
        }
        
        &__label {
            @apply text-lg max-w-4;
        }
        
        &__countup {
            @apply flex justify-between items-end;
            font-family: var(--ed-work-sans);
        }
        
        &__count {
            @apply text-8xl font-light;
        }
        
        &__suffix {
            @apply text-[var(--ed-primary)];
        }
    }
</style>