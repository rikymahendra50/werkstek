<!-- contact us older -->
<!-- <template>
  <div class="flex flex-col justify-center items-center md:my-10">
    <h1 class="text-[#404040] text-[35px] font-semibold my-4">
      Neem contact op
    </h1>
    <p class="text-[14px] text-center">
      Heb je vragen of opmerkingen? Wil je een afspraak maken of een rondleiding
      aanvragen?
    </p>
    <div
      class="flex my-5 w-full flex-col sm:flex-row justify-center px-5 md:px-0 gap-5"
    >
      <div
        class="flex flex-col mt-2 mx-2 sm:mx-0 md:w-[400px] py-5 pl-2 md:pl-5 bg-[#F7F7F7] box-shadow2 max-h-[400px] sm:w-[50%] order-2 sm:order-1"
      >
        <p class="text-[16px] text-[#230000] leading-9">
          Dan kun je een mail sturen of bellen:
        </p>
        <p class="text-[#777] text-[12px] sm:text-[16px] leading-9">
          info@werkstek.nl
        </p>
        <p class="text-[#777] text-[12px] sm:text-[16px] leading-9">
          085 – 0290598
        </p>
        <h1
          class="text-[12px] sm:text-[16px] text-[#230000] leading-9 my-1 md:my-4"
        >
          Ons Werkstek hoofdkantoor:
        </h1>
        <p class="text-[#777] text-[12px] sm:text-[16px] leading-9">
          Werkstek B.V.
        </p>
        <p class="text-[#777] text-[12px] sm:text-[16px] leading-9">
          Tussen de Bogen 81
        </p>
        <p class="text-[#777] text-[12px] sm:text-[16px] leading-9">
          1013 JB AMSTERDAM
        </p>
        <div class="flex gap-1 mt-2">
          <img
            src="/images/icon-facebook-black.svg"
            alt="icon-facebook-black"
          />
          <img
            src="/images/icon-instagram-black.svg"
            alt="icon-instagram-black"
          />
          <img src="/images/icon-youtube-black.svg" alt="icon-youtube-black" />
          <img
            src="/images/icon-linkedin-black.svg"
            alt="icon-linkedin-black"
          />
        </div>
      </div>
      <div class="order-1 sm:order-2 md:w-[400px] text-[#777] sm:w-[50%]">
        <VeeForm
          @submit="onSubmit"
          :validation-schema="contactSchema"
          class="text-[12px] md:text-[16px]"
          v-slot="{ errors }"
        >
          <div class="flex flex-col">
            <div class="flex flex-col my-2">
              <div class="flex items-center">
                <label for="naam">Je naam (verplicht)</label>
              </div>
              <VeeField
                id="naam"
                name="name"
                v-model="dataForm.name"
                type="text"
                class="input w-full input-sm"
                placeholder="Naam"
                autocomplete="name"
              />
              <hr />
              <VeeErrorMessage name="name" class="text-sm text-error" />
            </div>
            <div class="flex flex-col my-2">
              <div class="flex items-center">
                <label for="email">Je e-mailadres (verplicht)</label>
              </div>
              <VeeField
                id="email"
                name="email"
                v-model="dataForm.email"
                type="text"
                class="input w-full input-sm"
                placeholder="Mail"
                autocomplete="mail"
              />
              <hr />
              <VeeErrorMessage name="email" class="text-sm text-error" />
            </div>
            <div class="flex flex-col my-2">
              <div class="flex items-center">
                <label for="subject">Onderwerp</label>
              </div>
              <VeeField
                id="subject"
                name="subject"
                v-model="dataForm.subject"
                type="text"
                class="input w-full input-sm"
                placeholder="Onderwerp"
                autocomplete="Onderwerp"
              />
              <hr />
              <VeeErrorMessage name="subject" class="text-sm text-error" />
            </div>
            <div class="flex flex-col my-2">
              <div class="flex items-center">
                <label for="message">Je bericht</label>
              </div>
              <VeeField
                id="message"
                name="message"
                v-model="dataForm.message"
                v-slot="{ field }"
              >
                <textarea
                  v-bind="field"
                  id="message"
                  class="textarea textarea-sm textarea-ghost h-[100px] min-h-[50px] max-h-[150px]"
                  placeholder="Je bericht"
                  autocomplete="message"
                ></textarea>
              </VeeField>
              <hr />
              <VeeErrorMessage name="message" class="text-sm text-error" />
            </div>
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              :disabled="loading"
              class="mt-4 bg-primary hover:bg-secondary transition min-w-[120px] sm:min-w-[152px] min-h-[42px] sm:min-h-[52px] rounded-full flex items-center justify-center cursor-pointer"
            >
              <span
                class="text-[20px] xl:text-lg lg:text-lg text-center text-white"
              >
                Versturen
              </span>
            </button>
          </div>
        </VeeForm>
      </div>
    </div>
  </div>
</template> -->

<!-- contact us newer -->
<template>
  <div class="flex flex-col justify-center items-center md:my-10">
    <h1 class="text-[#404040] text-[35px] font-semibold my-4">
      Neem contact op
    </h1>
    <p class="text-[14px] text-center">
      Heb je vragen of opmerkingen? Wil je een afspraak maken of een rondleiding
      aanvragen?
    </p>
    <div
      class="flex my-5 w-full flex-col sm:flex-row justify-center px-5 md:px-0 gap-5"
    >
      <div
        class="flex flex-col mt-2 mx-2 sm:mx-0 md:w-[400px] py-5 pl-2 md:pl-5 bg-[#F7F7F7] box-shadow2 max-h-[400px] sm:w-[50%] order-2 sm:order-1"
      >
        <p class="text-[16px] text-[#230000] leading-9">
          Dan kun je een mail sturen of bellen:
        </p>
        <p class="text-[#777] text-[12px] sm:text-[16px] leading-9">
          info@werkstek.nl
        </p>
        <p class="text-[#777] text-[12px] sm:text-[16px] leading-9">
          085 – 0290598
        </p>
        <h1
          class="text-[12px] sm:text-[16px] text-[#230000] leading-9 my-1 md:my-4"
        >
          Ons Werkstek hoofdkantoor:
        </h1>
        <p class="text-[#777] text-[12px] sm:text-[16px] leading-9">
          Werkstek B.V.
        </p>
        <p class="text-[#777] text-[12px] sm:text-[16px] leading-9">
          Tussen de Bogen 81
        </p>
        <p class="text-[#777] text-[12px] sm:text-[16px] leading-9">
          1013 JB AMSTERDAM
        </p>
        <div class="flex gap-1 mt-2">
          <img
            src="/images/icon-facebook-black.svg"
            alt="icon-facebook-black"
          />
          <img
            src="/images/icon-instagram-black.svg"
            alt="icon-instagram-black"
          />
          <img src="/images/icon-youtube-black.svg" alt="icon-youtube-black" />
          <img
            src="/images/icon-linkedin-black.svg"
            alt="icon-linkedin-black"
          />
        </div>
      </div>
      <div class="order-1 sm:order-2 md:w-[400px] text-[#777] sm:w-[50%]">
        <VeeForm
          @submit="onSubmit"
          :validation-schema="contactSchema"
          class="text-[12px] md:text-[16px]"
          v-slot="{ errors }"
        >
          <div class="flex flex-col">
            <!-- name -->
            <div class="flex flex-col my-2">
              <div class="flex items-center">
                <label for="name">Je naam (verplicht)</label>
              </div>
              <VeeField
                id="name"
                name="name"
                v-model="dataForm.name"
                type="text"
                class="input w-full input-sm"
                placeholder="Name"
                autocomplete="name"
              />
              <hr />
              <VeeErrorMessage name="name" class="text-sm text-error" />
            </div>
            <!-- end name -->
            <div class="flex flex-col my-2">
              <div class="flex items-center">
                <label for="email">Je e-mailadres (verplicht)</label>
              </div>
              <VeeField
                id="email"
                name="email"
                v-model="dataForm.email"
                type="text"
                class="input w-full input-sm"
                placeholder="Onderwerp"
                autocomplete="Onderwerp"
              />
              <hr />
              <VeeErrorMessage name="email" class="text-sm text-error" />
            </div>
            <!-- Subject -->
            <div class="flex flex-col my-2">
              <div class="flex items-center">
                <label for="subject">Subject</label>
              </div>
              <VeeField
                id="subject"
                name="subject"
                v-model="dataForm.subject"
                type="text"
                class="input w-full input-sm"
                placeholder="Onderwerp"
                autocomplete="Onderwerp"
              />
              <hr />
              <VeeErrorMessage name="subject" class="text-sm text-error" />
            </div>
            <!-- end subject -->
            <div class="flex flex-col my-2">
              <div class="flex items-center">
                <label for="message">Je bericht</label>
              </div>
              <VeeField
                id="message"
                name="message"
                v-model="dataForm.message"
                as="textarea"
                class="textarea textarea-sm textarea-ghost h-[100px] min-h-[50px] max-h-[150px]"
                placeholder="Je bericht"
              >
              </VeeField>
              <hr />
              <VeeErrorMessage name="message" class="text-sm text-error" />
            </div>
            <div class="flex flex-col my-2">
              <div class="flex items-center">
                <label for="phone">Phone</label>
              </div>
              <VeeField
                id="phone"
                name="phone"
                v-model="dataForm.phone"
                type="text"
                class="input w-full input-sm"
                placeholder="Onderwerp"
                autocomplete="Onderwerp"
              />
              <hr />
              <VeeErrorMessage name="phone" class="text-sm text-error" />
            </div>
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              :disabled="loading"
              class="mt-4 bg-primary disabled:bg-secondary hover:bg-secondary transition min-w-[120px] sm:min-w-[152px] min-h-[42px] sm:min-h-[52px] rounded-full flex items-center justify-center cursor-pointer"
            >
              <span
                class="text-[20px] xl:text-lg lg:text-lg text-center text-white"
              >
                Versturen
              </span>
            </button>
          </div>
        </VeeForm>
      </div>
    </div>
  </div>
</template>

<script setup>
const { contactSchema } = useSchema();
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();

const dataForm = ref({
  name: undefined,
  email: undefined,
  subject: undefined,
  message: undefined,
  phone: undefined,
});

async function onSubmit(values, ctx) {
  loading.value = true;

  const { data, error } = await useFetch("/contacts", {
    method: "POST",
    body: dataForm.value,
    ...requestOptions,
  });

  if (error.value) {
    ctx.setErrors(transformErrors(error.value?.data));
    snackbar.add({
      type: "error",
      text: error.value?.data?.message ?? "Something went wrong",
    });
  } else {
    snackbar.add({
      type: "success",
      text: "Thank you for your message. We will get back to you as soon as possible.",
    });

    ctx.resetForm();
  }

  loading.value = false;
}
</script>
