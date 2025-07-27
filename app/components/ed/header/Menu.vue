<script lang="ts" setup>
    import { Menu, X } from 'lucide-vue-next';

    const isOpen = ref(false);
    const isScrolled = ref(false);

    const navLinks = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Benefits", id: "benefits" },
        { name: "Portfolio", id: "portfolio" },
        { name: "Services", id: "services" },
        { name: "Reviews", id: "reviews" },
        { name: "FAQ", id: "faq" },
        { name: "Contact Us", id: "contact" },
    ]

    const handleScroll = () => {
		isScrolled.value = window.scrollY > 10;
	}

    onMounted(() => {
		window.addEventListener('scroll', handleScroll);
	});

	onBeforeUnmount(() => {
		window.removeEventListener('scroll', handleScroll);
	});
</script>

<template>
    <ClientOnly>
        <EdHeaderButton
          :is-open="isOpen"
          @toggleMenu="isOpen = !isOpen"
        />
        <EdHeaderNav v-if="isOpen" />
    </ClientOnly>
</template>