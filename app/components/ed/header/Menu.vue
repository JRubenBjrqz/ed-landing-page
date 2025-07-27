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
        <button 
            @click="isOpen = !isOpen"
            :class="[
                'p-2 cursor-pointer rounded-md transition-colors duration-300',
            ]"
        >
            <Menu
                v-if="!isOpen"
                color="black"
                :size="20"
            />
            <X
                v-else
                color="black"
                :size="20"
            />
        </button>
        <div
            v-if="isOpen"
            :class="[
                'fixed top-[72px] right-4 md:right-8 lg:right-16 z-40 bg-white py-6 px-8 shadow-lg border-zinc-200 rounded-[32px] flex flex-col',
            ]"
        >
        <nav class="flex flex-col gap-3.5">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.id"
            class="text-2xl font-normal cursor-pointer"
          >
            {{ link.name }}
          </NuxtLink>
        </nav>
      </div>
    </ClientOnly>
</template>