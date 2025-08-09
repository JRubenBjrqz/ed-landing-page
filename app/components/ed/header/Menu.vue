<script lang="ts" setup>
    const isOpen = ref(false);
    const isScrolled = ref(false);
    
    const handleScroll = () => {
        isScrolled.value = window.scrollY > 10;
    };

    const closeNav = () => {
        isOpen.value = false;
    }

    onMounted(() => {
        window.addEventListener("scroll", handleScroll);
    });
    
    onBeforeUnmount(() => {
        window.removeEventListener("scroll", handleScroll);
    });
</script>

<template>
    <ClientOnly>
        <div class="ed-header-menu">
            <EdHeaderButton
                :is-open="isOpen"
                @toggleMenu="isOpen = !isOpen"
            />
            <EdHeaderNav
                v-if="isOpen"
                :isOpen="isOpen"
                :closeNav="closeNav"
            />
        </div>
    </ClientOnly>
</template>

<style lang="scss" scoped>
.ed-header-menu {
    @apply relative;
}
</style>
