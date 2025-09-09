<script setup lang="ts">
    import { ToastProvider } from 'reka-ui'

    type Phase = 'idle' | 'sending' | 'done' | 'error';
    type FormSubmitResponse = { success?: 'true' | 'false'; message?: string; error?: string };

    const name = ref('')
    const email = ref('')
    const message = ref('')
    const phase = ref<Phase>('idle');
    const errMsg = ref<string>('');

    const open = ref(false)
    const toastTitle = ref('')
    const toastDescription = ref('')

    const handleSubmit = async (e: Event) => {
        e.preventDefault();

        if (phase.value === 'sending') return;

        errMsg.value = '';
        phase.value = 'sending';

        try {
            const form = e.target as HTMLFormElement;
            const fd = new FormData(form);
            fd.set('_subject', 'New submission from EasyDevs Website');
            fd.set('_template', 'table');
            fd.set('_captcha', 'false');

            const { data, status } = await useFetch<FormSubmitResponse>('https://formsubmit.co/ajax/hello@easydevs.us', {
                method: 'POST',
                body: fd,
                headers: { Accept: 'application/json' },
            });

            if (status.value === 'error' || !data.value || data.value.success === 'false') {
                const msg = data.value?.message || `Form submit ${status.value}`;
                throw new Error(msg);
            }

            phase.value = 'done';
            form.reset();

            toastTitle.value = 'Sent successfully!';
            toastDescription.value = data.value.message || 'The form was submitted successfully.';
            open.value = true;
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : typeof err === 'string' ? err : 'Unexpected error';
            errMsg.value = msg;
            phase.value = 'error';

            toastTitle.value = 'Sent error!';
            toastDescription.value = errMsg.value;
            open.value = true;
        }
    }

    watch(phase, (newPhase) => {
        if (newPhase === 'idle') return;
        const t = setTimeout(() => phase.value = 'idle', 2000);
        return () => clearTimeout(t);
    });
</script>

<template>
    <ToastProvider
        :duration="3000"
    >
        <EdFormToast
            v-model:open="open"
            :title="toastTitle"
            :description="toastDescription"
        />
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
                            @submit="handleSubmit"
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
    </ToastProvider>
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
            @apply text-5xl lg:text-8xl font-extrabold leading-tight w-full lg:max-w-lg;
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