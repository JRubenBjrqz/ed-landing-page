<script lang="ts" setup>
    import { MessageCircle } from 'lucide-vue-next';

</script>

<template>
    <section
      ref="EdHero"
      class="relative flex min-h-screen items-center justify-start overflow-hidden py-20 text-left w-full"
    >
      <div
        class="relative z-10 flex flex-col items-start gap-6 px-4 md:px-8 lg:px-16 w-full max-w-full md:absolute md:w-[420px] md:h-[311px] md:left-[300px] md:top-[253px]"
      >
        <h1
          class="text-6xl leading-[1.2] capitalize md:text-6xl md:leading-[77px] w-full"
        >
          <span class="font-bold">Making Development Look</span> <span class="font-normal italic">Easy.</span>
        </h1>
        <button
          class="box-border flex flex-row items-center p-2 w-[170px] h-[56px] border border-[#232631] rounded-[57px] bg-transparent hover:bg-[#232631] hover:text-white transition-colors group"
        >
          <div class="flex flex-row justify-center items-center p-2 w-[40px] h-[40px] bg-[#232631] rounded-[28px] group-hover:bg-white transition-colors">
            <MessageCircle
              class="text-white group-hover:text-[#232631] transition-colors"
              :size="24"
            />
          </div>
          <div class="flex flex-row justify-center items-center px-2 gap-2 w-[114px] h-[19px]">
            <span class="font-normal text-base leading-[19px] text-[#232631] group-hover:text-white transition-colors">
              Get in touch
            </span>
          </div>
        </button>
		</div>
    </section>
</template>