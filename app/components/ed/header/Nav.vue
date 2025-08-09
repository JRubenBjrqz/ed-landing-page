<script lang="ts" setup>
    const props = defineProps<{
        isOpen: boolean;
        closeNav: () => void;
    }>();
    
    const edHeaderNav = ref<HTMLElement | null>(null);

    const navLinks = [
        { name: "Home", id: "EdHero" },
        { name: "About", id: "about" },
        { name: "Benefits", id: "benefits" },
        { name: "Portfolio", id: "portfolio" },
        { name: "Services", id: "services" },
        { name: "Reviews", id: "reviews" },
        { name: "FAQ", id: "faq" },
        { name: "Contact Us", id: "contact" },
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
</script>

<template>
    <div
        ref="edHeaderNav"
        class="ed-header-nav"
    >
        <nav class="ed-header-nav__nav">
            <NuxtLink
                v-for="link in navLinks"
                :key="link.id"
                class="ed-header-nav__link"
            >
                {{ link.name }}
            </NuxtLink>
        </nav>
    </div>
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
        font-family: var(--ed-work-sans);
    }
}
</style>
