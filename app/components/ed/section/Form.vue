<script setup lang="ts">
    import { ArrowRight } from 'lucide-vue-next'
    
    const name = ref('')
    const email = ref('')
    const message = ref('')
    const label = ref('Name')
    
    function submitForm() {
      // Aquí puedes manejar el envío del formulario
      // Por ejemplo, enviar los datos a una API o mostrar un mensaje de éxito
    }
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
                            type="text"
                            required
                            label="Email"
                        />
                        <textarea
                            name="Message"
                            v-model="message"
                            placeholder="Message"
                            class="min-h-[120px] w-full border-b border-gray-400 bg-transparent py-3 focus:ring-0"
                            required
                        ></textarea>
                        <button
                            class="flex mt-8 rounded-full px-8 py-6 text-lg font-semibold bg-transparent border"
                            type="submit"
                        >
                            Send Message
                            <ArrowRight class="ml-2 h-5 w-5" />
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