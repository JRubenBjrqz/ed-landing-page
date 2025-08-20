<script setup lang="ts">
    import { ArrowRight } from 'lucide-vue-next'

    const name = ref('')
    const email = ref('')
    const message = ref('')
</script>

<template>
    <main
        id="edForm"
        class="ed-form"
    >
        <section class="ed-form__section">
            <div class="ed-form__container">
                <h2 class="ed-form__title">
                    Ready to grow with simple, custom software?
                </h2>
                <div class="ed-form__form-container">
                    <p class="ed-form__cta-text">
                        Book a free call and get a tailored proposal for your business.
                    </p>
                    <form
                        class="ed-form__form"
                        action="mailto:contact@easydevs.us"
                        method="POST"
                        enctype="text/plain"
                    >
                        <EdFormInput
                            v-model="name"
                            name="Name"
                            type="text"
                            required
                            label="Name"
                        />
                        <EdFormInput
                            v-model="email"
                            name="Email"
                            type="email"
                            required
                            label="Email"
                        />
                        <EdFormTextArea
                            v-model="message"
                            name="Message"
                            required
                            label="Message"
                        />
                        <button
                            type="submit"
                            class="group flex items-center mt-8 rounded-full px-8 py-3 text-lg font-extrabold border border-black bg-white transition-colors duration-200 focus:outline-none hover:bg-[#232631] hover:text-white"
                        >
                            <span class="mr-4 transition-colors duration-200 group-hover:text-white">Send Message</span>
                            <span
                                class="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#FF742A] to-[#FFB1B2] text-white transition-colors duration-200 group-hover:bg-[#232631 group-hover:from-transparent group-hover:to-transparent group-active:bg-[#1a1b22] group-active:text-gray-400"
                            >
                                <ArrowRight class="h-5 w-5" />
                            </span>
                        </button>
                    </form>
                </div>
          </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    .ed-form {
        @apply w-full bg-[var(--ed-white-2-background)];
        
        &__section {
            @apply flex items-center justify-center py-24 max-w-6xl;
        }
        
        &__container {
            @apply flex w-full gap-12;
        }
        
        &__title {
            @apply text-8xl font-extrabold leading-tight max-w-lg;
        }
        
        &__form-container {
            @apply flex flex-col gap-12;
        }
        
        &__cta-text {
            @apply text-2xl font-normal;
        }
        
        &__form {
            @apply flex flex-col gap-12;
        }
    }
</style>