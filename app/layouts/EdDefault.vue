<template>
    <div class="ed-default">
        <EdHeader />
            <slot />
        <EdFooter/>
    </div>
</template>

<style scoped>
    .ed-default {
        @apply flex flex-col relative min-h-screen h-full items-center;
    }
</style>