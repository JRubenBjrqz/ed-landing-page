<script setup lang="ts">
</script>

<template>
    <footer class="ed-footer">
        <div class="ed-footer__section">
			<div class="ed-footer__container">
				<EdFooterNav />
				<EdFooterSocialMedia />
			</div>
		</div>
    </footer>
</template>

<style lang="scss" scoped>
  .ed-footer {
    @apply py-12 bg-[var(--ed-white-2-background)];

	&__container {
		@apply container mx-auto flex flex-col gap-y-4;
	}
  }
</style>