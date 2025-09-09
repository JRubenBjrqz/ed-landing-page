<script lang="ts" setup>
    const isOpen = ref(false);

    const closeNav = () => {
        isOpen.value = false;
    }
</script>

<template>
    <ClientOnly>
        <div class="ed-header-menu">
            <EdHeaderButton
                :is-open="isOpen"
                @toggleMenu="isOpen = !isOpen"
            />
            <EdHeaderNav
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
