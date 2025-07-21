<script lang="ts" setup>
  import { Rocket, Smile, Box, Grid3X3 } from 'lucide-vue-next';

  import EdCounterStat from '../EdCounterStat.vue';

  const counterStats = [
    {
      icon: Rocket,
      label: 'Brands Launched',
      count: 40,
      suffix: '+'
    },
    {
      icon: Smile,
      label: 'Happy Clients',
      count: 94,
      suffix: '%'
    },
    {
      icon: Box,
      label: 'Projects Delivered',
      count: 240,
      suffix: '+'
    },
    {
      icon: Grid3X3,
      label: 'Moodboards Completed',
      count: 500,
      suffix: '+'
    },
  ]
</script>

<template>
  <section className="py-20 md:py-32 bg-easydevs-bg">
      <div className="container mx-auto px-4 lg:px-16">
        <h2 className="text-left text-4xl font-extrabold md:text-5xl text-easydevs-dark-text mb-16">
          We Build Great Things. They Grew.
        </h2>
        <div className="mt-16 grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          <!-- <Stat icon={Rocket} label="Brands Launched" targetValue={40} suffix="+" />
          <Stat icon={Smile} label="Happy Clients" targetValue={94} suffix="%" />
          <Stat icon={Box} label="Projects Delivered" targetValue={240} suffix="+" />
          <Stat icon={Grid3X3} label="Moodboards Completed" targetValue={500} suffix="+" /> -->
          <EdCounterStat
            v-for="(counter, index) in counterStats"
            :key="index"
            :icon="counter.icon"
            :label="counter.label"
            :count="counter.count"
            :suffix="counter.suffix"
          />
        </div>
        <div className="relative mt-20 h-40 flex items-center justify-center overflow-hidden">
          <!-- <div
            className="absolute inset-0 bg-no-repeat bg-center bg-contain"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='1000' height='100' viewBox='0 0 1000 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 C 250 0, 750 100, 1000 50' stroke='%23D1D5DB' strokeWidth='2' strokeDasharray='4 4'/%3E%3C/svg%3E")`,
              backgroundSize: "100% 100px", // Ensure it covers the width and has fixed height
              backgroundPosition: "center",
            }}
          ></div> -->
          <!-- <div className="absolute flex whitespace-nowrap animate-scroll-x">
            {[...techLogos, ...techLogos].map((logo, index) => (
              <div
                key={index}
                className={`flex-shrink-0 mx-8 flex items-center justify-center h-16 w-16 ${logo.translateY}`}
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={48}
                  height={48}
                  className="opacity-70 grayscale" // Apply grayscale for outline effect
                />
              </div>
            ))}
          </div> -->
        </div>
      </div>
    </section>
</template>