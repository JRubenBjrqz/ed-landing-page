<script setup lang="ts">
    import {useBreakpoints} from '@vueuse/core'

    const LOGOS = [
        { src: '/img/stack/angular.png', alt: 'Angular' },
        { src: '/img/stack/c-sharp.png', alt: 'C#' },
        { src: '/img/stack/django.png', alt: 'Django' },
        { src: '/img/stack/js.png', alt: 'JavaScript' },
        { src: '/img/stack/next.png', alt: 'Next.js' },
        { src: '/img/stack/php.png', alt: 'PHP' },
        { src: '/img/stack/python.png', alt: 'Python' },
        { src: '/img/stack/react.png', alt: 'React' },
        { src: '/img/stack/swift.png', alt: 'Swift' },
        { src: '/img/stack/vue.png', alt: 'Vue.js' },
    ];
    const items = [...LOGOS, ...LOGOS]
    const cardRefs = ref<(HTMLElement | null)[]>(Array(items.length).fill(null))
    const breakpoints = useBreakpoints({
        md: 768,
    })
    const isMd = breakpoints.greaterOrEqual('md')

    onMounted(() => {
        let raf = 0
        const start = performance.now()
        const marquee = window.matchMedia('(min-width: 768px)')
        const compute = () =>
            marquee.matches
            ? { amplitude: 70, yBase: -30, phaseStep: Math.PI / 6 }
            : { amplitude: 50, yBase: -20, phaseStep: Math.PI / 6.5 }
        let { amplitude, yBase, phaseStep } = compute()
        const speed = 0.0010

        const onChange = () => {
            ({ amplitude, yBase, phaseStep } = compute())
        }

        marquee.addEventListener?.('change', onChange)

        const loop = (now: number) => {
            const t = now - start

            for (let i = 0; i < cardRefs.value.length; i++) {
                const el = cardRefs.value[i]
                if (!el) continue
                const y = yBase + Math.sin(t * speed + (items.length - i) * phaseStep) * amplitude
                el.style.transform = `translate3d(0, ${Math.round(y)}px, 0)`
            }

            raf = requestAnimationFrame(loop)
        }

        raf = requestAnimationFrame(loop)

        onUnmounted(() => {
            cancelAnimationFrame(raf)
            marquee.removeEventListener?.('change', onChange)
        })
    })
</script>

<template>
    <ClientOnly>
        <div class="ed-marquee">
            <div
                class="ed-marquee__track"
            >
                <div
                    v-for="(logo, i) in items"
                    :key="`${logo.alt}-${i}`"
                    class="ed-marquee__item"
                    :ref="el => { cardRefs[i] = el }"
                >
                    <NuxtImg
                        :src="logo.src"
                        :alt="logo.alt"
                        :width="isMd ? 28 : 22"
                        :height="isMd ? 28 : 22"
                        fit="inside"
                        draggable="false"
                        format="webp"
                    />
                </div>
            </div>
            <div class="ed-marquee__left-fade" />
            <div class="ed-marquee__right-fade" />
        </div>
    </ClientOnly>
</template>

<style lang="scss" scoped>
    .ed-marquee {
        @apply relative mx-auto w-full overflow-hidden pt-4 h-[275px];

        &__track {
            @apply absolute inset-y-0 left-0 flex min-w-max items-center gap-4 md:gap-10 h-full will-change-transform;
            animation: scrollX 40s linear infinite;
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
        }

        &__item {
            @apply flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-neutral-200/40 overflow-hidden will-change-transform;
        }

        &__left-fade {
            @apply pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--ed-white-2-background)] to-transparent;
        }

        &__right-fade {
            @apply pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--ed-white-2-background)] to-transparent;
        }
    }

    @keyframes scrollX {
        0% { transform: translate3d(0, 0, 0); }
        100% { transform: translate3d(-50%, 0, 0); }
    }
</style>