<script lang="ts" setup>
	const props = defineProps<{
		icon: string
		label: string
		count: number
		suffix: string
	}>()
</script>

<template>
  	<div class="flex flex-col px-4 h-[298px] justify-between">
    	<div class="flex flex-col gap-3 font-normal" style="font-family: var(--ed-work-sans);">
            <component 
                :is="props.icon" 
                size="30"
                stroke-width="1"
            />
            <div class="text-lg max-w-4">{{props.label}}</div>
        </div>
		<div class="flex justify-between items-end" style="font-family: var(--ed-work-sans);">
			<span class="text-8xl font-light">{{props.count}}</span>
            <component
                :is="props.suffix"
                size="56"
                stroke-width="1"
                class="text-[var(--ed-primary)]"
            >
                {{props.suffix}}
            </component>
		</div>
  	</div>
</template>