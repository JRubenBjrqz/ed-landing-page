<template>
  <div class="ed-hero-blobs">
    <div class="ed-hero-blobs__blob ed-hero-blobs__blob--1"></div>
    <div class="ed-hero-blobs__blob ed-hero-blobs__blob--2"></div>
  </div>
</template>

<style lang="scss" scoped>
    .ed-hero-blobs {
        @apply absolute inset-0 w-full h-full;

        &__blob {
            @apply absolute blur-[60px] pointer-events-none;
        }
        
        &__blob--1 {
            @apply w-[555px] h-[412px] top-0 right-0;
            background: linear-gradient(73.64deg, rgba(255, 140, 96, 0.3) 37.96%, rgba(254, 180, 175, 0.3) 90.71%);
            transform: translate(60%, 0%);
        }
        
        &__blob--2 {
            @apply w-[716px] h-[548px] bottom-0 left-0;
            background: linear-gradient(180deg, rgba(254, 180, 175, 0.3) 0%, rgba(255, 140, 96, 0.3) 100%);
            transform: translate(-30%, 40%);
        }
    }
</style>