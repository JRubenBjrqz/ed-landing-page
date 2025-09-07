<script setup lang="ts">
	import { AnimatePresence, motion } from 'motion-v'

  	defineProps<{ 
		TABS: Array<{
			key: string
			label: string,
			heading: string,
			copy: string,
			bullets: string[],
			gallerySides: {
				left: { src: string, alt: string },
				right: { src: string, alt: string }
			}
		}>,
		active: string,
		current: {
			key: string
			label: string,
			heading: string,
			copy: string,
			bullets: string[],
			gallerySides: {
				left: { src: string, alt: string },
				right: { src: string, alt: string }
			}
		}
	}>()

  	const emit = defineEmits<{
		(e: 'update:active', value: string): void
	}>()
</script>

<template>
    <div class="ed-services-tablet">
        <div class="ed-services-tablet__services-tabs">
            <hr class="ed-services-tablet__border" />
            <ul class="ed-services-tablet__ul">
                <li
                    v-for="tab in TABS"
                    :key="tab.key"
                >
                    <button
                        @click="emit('update:active', tab.key)"
                        class="ed-services-tablet__tab-button"
                    >
                        <hr
                            v-show="active === tab.key"
                            :class="[
                                'ed-services-tablet__tab-border-active',
                                { 'ed-services-tablet__tab-animation': active === tab.key }
                            ]"
                        />
                        <div class="ed-services-tablet__button">
                            <h6 :class="['text-2xl capitalize font-medium', { 'text-[var(--ed-primary)]': active === tab.key }]">
                                {{ tab.label }}
                            </h6>
                        </div>
                    </button>
                </li>
            </ul>
        </div>
        <div class="ed-services-tablet__tab-container">
            <AnimatePresence :initial="false">
                <motion.div
                    v-if="current"
                    :key="current.key"
                    :initial="{ opacity: 0, scale: 0.98 }"
                    :animate="{ opacity: 1, scale: 1 }"
                    :exit="{ opacity: 0, scale: 0.98 }"
                    class="ed-services-tablet__motion-div"
                >
                    <div class="ed-services-tablet__tab-content">
                        <h3 class="ed-services-tablet__title">
                            {{ current.heading }}
                        </h3>
                        <p>
                            {{ current.copy }}
                        </p>
                        <p class="ed-services-tablet__bullets">
                            {{ current.bullets.join(' / ') }}
                        </p>
                        <div class="ed-services-tablet__img-row">
                            <div class="ed-services-tablet__img-container">
                                <NuxtImg
                                    :src="current.gallerySides.left.src"
                                    :alt="current.gallerySides.left.alt"
                                    loading="lazy"
                                    class="ed-services-tablet__img"
                                />
                            </div>
                            <div class="ed-services-tablet__img-container">
                                <NuxtImg
                                    :src="current.gallerySides.right.src"
                                    :alt="current.gallerySides.right.alt"
                                    loading="lazy"
                                    class="ed-services-tablet__img"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .ed-services-tablet {
        @apply mt-8 grid grid-cols-[300px_minmax(420px,1fr)] gap-10;

        &__services-tabs {
            @apply relative;
        }

        &__border {
            @apply relative;
        }

        &__border {
            @apply absolute right-0 top-0 h-full w-px bg-[var(--ed-border-services)];
        }

        &__ul {
            @apply space-y-2;
        }

        &__tab-button {
            @apply w-full py-4 relative pl-4;
        }

        &__button {
            @apply flex items-center gap-3;
        }

		&__tab-border-active {
			@apply absolute top-0 left-0 h-full border-l-2 border-[var(--ed-primary)];
            transform: scaleX(0);
			transform-origin: left;
		}

		&__tab-animation {
			animation: tabBorderGrow 0.32s cubic-bezier(.4,0,.2,1) forwards;
		}

        &__tab-container {
            @apply relative;
        }

        &__motion-div {
            @apply absolute;
        }

        &__tab-content {
            @apply flex flex-col gap-5;
        }

        &__title {
            @apply text-2xl font-bold;
        }

        &__bullets {
            @apply text-[var(--ed-primary)];
        }

        &__img-row {
            @apply grid grid-cols-2 mt-auto;
        }

        &__img-container {
            @apply relative w-full h-[235px];
        }

        &__img {
            @apply h-full w-full object-cover;
        }
    }

    @keyframes tabBorderGrow {
        from { transform: scaleY(0); }
        to { transform: scaleY(1); }
    }
</style>