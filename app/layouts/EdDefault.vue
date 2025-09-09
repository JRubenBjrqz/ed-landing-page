<script lang="ts" setup>
	const SECTION_IDS = ['edHero', 'edAbout', 'edBenefits', 'edCounters', 'edServices', 'edFaq', 'edForm'];
</script>

<template>
    <div class="ed-default">
        <EdFloatingActionButton :section-ids="SECTION_IDS" />
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