<script lang="ts" setup>
    import { ChevronLeft, ChevronRight, Quote } from 'lucide-vue-next'
    
    defineProps<{
        testimonial: {
            quote: string
            avatar?: string
            fallback?: string
            name: string
            role: string
        }
    }>()
    
    const emit = defineEmits<{
          (e: 'next'): void;
          (e: 'previous'): void;
	}>();
  </script>

<template>
    <div class="ed-testimonial-card">
        <div class="ed-testimonial-card__quote">
            <Quote
                :size="36"
                fill="var(--ed-black)"
                color="var(--ed-black)"
                class="ed-testimonial-card__icon"
            />
            <span class="ed-testimonial-card__text">
                {{ testimonial.quote }}
            </span>
        </div>
        <div class="ed-testimonial-card__testimonial-info">
            <div class="ed-testimonial-card__avatar">
                <NuxtImg
                    v-if="testimonial.avatar"
                    :src="testimonial.avatar"
                    :alt="testimonial.name"
                    height="90"
                    width="90"
                />
                <p v-else class="ed-testimonial-card__fallback">{{ testimonial.fallback }}</p>
            </div>
            <div>
                <h6 class="ed-testimonial-card__name">{{ testimonial.name }}</h6>
                <p class="ed-testimonial-card__role">{{ testimonial.role }}</p>
            </div>
        </div>
        <div class="ed-testimonial-card__buttons">
            <button 
                class="ed-testimonial-card__button" 
                @click="emit('previous')"
            >
                <ChevronLeft
                    :size="32"
                    color="var(--ed-black)"
                    stroke-width="1.5"
                />
                <span class="ed-testimonial-card__sr">Previous testimonial</span>
            </button>
            <button
                class="ed-testimonial-card__button" 
                @click="emit('next')"
            >
                <ChevronRight
                    :size="32"
                    color="var(--ed-black)"
                    stroke-width="1.5"
                />
                <span class="ed-testimonial-card__sr">Next testimonial</span>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .ed-testimonial-card {
        @apply mt-12 flex flex-col gap-8;
        
        &__quote {
            @apply flex flex-col gap-4 max-w-[521px];
        }
        
        &__icon {
            @apply rotate-180;
        }
        
        &__text {
            @apply text-2xl leading-tight;
            font-family: var(--ed-work-sans);
        }
        
        &__testimonial-info {
            @apply flex items-center gap-4;
        }
        
        &__avatar {
            @apply h-[90px] w-[90px] rounded-full overflow-hidden bg-gray-200 flex items-center justify-center;
        }
        
        &__fallback {
            @apply text-xl font-bold;
            font-family: var(--ed-work-sans);
        }
        
        &__name {
            @apply text-[26px] font-semibold;
        }
        
        &__role {
            @apply text-[26px] font-normal;
        }
        
        &__buttons {
            @apply flex gap-4;
        }
        
        &__button {
            @apply h-12 w-12 rounded-full border border-[var(--ed-black)] flex items-center justify-center bg-transparent;
        }
        
        &__sr {
            @apply sr-only;
        }
    }
</style>