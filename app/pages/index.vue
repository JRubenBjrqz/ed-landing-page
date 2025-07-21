<script lang="ts" setup>
  import EdHero from '~/components/sections/EdHero.vue';
  import EdAbout from '~/components/sections/EdAbout.vue';
  import EdBenefits from '~/components/sections/EdBenefits.vue';
  import EdSteps from '~/components/sections/EdSteps.vue';
  import EdCounters from '~/components/sections/EdCounters.vue';
  import services from '~/components/sections/services.vue';
  import reviews from '~/components/sections/reviews.vue';
  import faq from '~/components/sections/faq.vue';
  import forms from '~/components/sections/form.vue';
</script>

<template>
  <EdHero />
  <EdAbout />
  <EdBenefits />
  <EdSteps />
  <EdCounters />
  <services />
  <reviews />
  <faq />
  <forms />
</template>