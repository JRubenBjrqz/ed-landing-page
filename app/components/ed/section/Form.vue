<script setup lang="ts">
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
                        <EdFormButton
                            type="submit"
                        />
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
            @apply flex flex-col lg:flex-row w-full gap-12;
        }
        
        &__title {
            @apply text-5xl md:text-8xl font-extrabold leading-tight w-full lg:max-w-lg;
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