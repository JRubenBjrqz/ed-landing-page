<script lang="ts" setup></script>

<template>
  <section class="relative py-20 md:py-32 bg-easydevs-bg overflow-hidden">
      <div class="absolute top-0 left-0 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <!-- <Image
          src="/placeholder.svg?height=800&width=800"
          alt="Abstract circular pattern"
          width={800}
          height={800}
          class="opacity-10"
        /> -->
      </div>

      <div class="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 lg:px-16 relative z-10">
        <div class="relative">
          <div class="absolute -top-16 left-0 text-easydevs-light-text">
            <HandWavingIcon class="h-12 w-12" />
          </div>
          <h2 class="text-4xl font-fira-sans font-bold leading-tight md:text-5xl text-easydevs-dark-text-2">
            About <br /> EasyDevs
          </h2>
          <p class="mt-6 max-w-md text-lg text-easydevs-dark-text-2">
            At EasyDevs, we believe technology should be simple, accessible and built for real businesses.
          </p>
          <p class="mt-4 max-w-md text-lg text-easydevs-dark-text-2">
            We&apos;re a small team of passionate developers helping microbusinesses grow through smart, no-nonsense
            software. We listen, we simplify, and we build things that actually work.
          </p>
        </div>

        <div class="relative flex items-center justify-center md:justify-end h-[300px] w-full">
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[280px]">
            <!-- <AboutShapes /> -->
          </div>
        </div>
      </div>
  </section>
</template>