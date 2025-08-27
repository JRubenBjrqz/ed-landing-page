<script lang="ts" setup>
    import {useElementVisibility} from '@vueuse/core'
    import {useCountUp} from '~/composables/useCountUp'

    const props = defineProps<{
        index: number
        icon: string
        label: string
        count: number
        suffix: string
    }>()

    const edStat = ref<HTMLElement | null>(null)
    const targetIsVisible = useElementVisibility(edStat, {
        threshold: 0.5
    })
    const started = ref(false)

    const { value: animatedCount, start } = useCountUp(props.count, { duration: 3000 })

    watch(targetIsVisible, (visible) => {
        if (visible && !started.value) {
            started.value = true
            start()
        }
    })
</script>

<template>
  	<ClientOnly>
        <div 
            ref="edStat"
            :class="['ed-counters-stat', index === 0 ? 
                'border-l lg:border-none border-[var(--ed-border)]' : 
                'border-l border-[var(--ed-border)]'
            ]"
        >
            <div class="ed-counters-stat__header">
                <component 
                    :is="props.icon" 
                    :size="30"
                    stroke-width="1.2"
                />
                <p class="ed-counters-stat__label">{{props.label}}</p>
            </div>
            <div class="ed-counters-stat__countup">
                <p class="ed-counters-stat__count">{{animatedCount}}</p>
                <component
                    :is="props.suffix"
                    :size="56"
                    stroke-width="1"
                    class="ed-counters-stat__suffix"
                >
                    {{props.suffix}}
                </component>
            </div>
        </div>
    </ClientOnly>
</template>

<style lang="scss" scoped>
    .ed-counters-stat {
        @apply flex flex-col px-4 h-[298px] justify-between;
        
        &__header {
            @apply flex flex-col gap-3 font-normal;
        }
        
        &__label {
            @apply text-lg max-w-4;
        }
        
        &__countup {
            @apply flex items-end;
        }
        
        &__count {
            @apply text-8xl font-light inline-block;
        }
        
        &__suffix {
            @apply text-[var(--ed-primary)];
        }
    }
</style>