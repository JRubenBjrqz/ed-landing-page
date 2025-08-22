<script lang="ts" setup>
    import { Motion, AnimatePresence, motion } from 'motion-v'

    const props = defineProps<{
        isOpen: boolean;
        closeNav: () => void;
    }>();
    
    const edHeaderNav = ref<HTMLElement | null>(null);

    const navLinks = [
        { name: "Home", id: "edHero" },
        { name: "About", id: "edAbout" },
        { name: "Benefits", id: "edBenefits" },
        { name: "Portfolio", id: "edCounters" },
        // { name: "Services", id: "edServices" },
        { name: "Reviews", id: "edTestimonials" },
        { name: "FAQ", id: "edFaq" },
        { name: "Contact Us", id: "edForm" },
    ];

    const handleClickOutside = (event: MouseEvent) => {
        if (edHeaderNav.value && !edHeaderNav.value.contains(event.target as Node)) {
            props.closeNav();
        }
    }

    onMounted(() => {
        document.addEventListener("mousedown", handleClickOutside);
    });
  
    onBeforeUnmount(() => {
        document.removeEventListener("mousedown", handleClickOutside);
    });
    
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id)

        if (section) {
          section.scrollIntoView({ behavior: 'smooth' })
          props.closeNav()
        }
    }
</script>

<template>
    <AnimatePresence>
        <motion.div
            v-if="props.isOpen"
            ref="edHeaderNav"
            class="ed-header-nav"
            :initial="{ opacity: 0, y: -8, scale: 0.98 }"
            :animate="{ opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 420, damping: 30, mass: 0.5 } }"
            :exit="{ opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.15 } }"
        >
            <nav class="ed-header-nav__nav">
                <NuxtLink
                    v-for="link in navLinks"
                    :key="link.id"
                    class="ed-header-nav__link"
                    @click="scrollToSection(link.id)"
                >
                    {{ link.name }}
                </NuxtLink>
            </nav>
        </motion.div>
    </AnimatePresence>
</template>

<style lang="scss" scoped>
.ed-header-nav {
    @apply absolute right-0 top-full mt-5 z-40 bg-[var(--ed-white)] py-6
        px-8 shadow-sm rounded-[32px] flex flex-col border;

    &__nav {
        @apply flex flex-col gap-3.5;
    }

    &__link {
        @apply text-[var(--ed-black)] text-2xl
  		    cursor-pointer hover:italic hover:text-[var(--ed-primary)]
 			transition-colors duration-300 inline-block whitespace-nowrap;
    }
}
</style>
