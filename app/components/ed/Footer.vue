<script setup lang="ts">
</script>

<template>
    <footer class="ed-footer">
        <div class="ed-footer__container">
            <EdFooterNav />
            <EdFooterSocialMedia />
        </div>
    </footer>
</template>

<style scoped>
  .ed-footer {
    @apply py-12;
  }

  .ed-footer__container {
    @apply container mx-auto flex flex-col gap-y-4;
  }
</style>?