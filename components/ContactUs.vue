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
        <NuxtLink
          to="mailto:/info@werkstek.nl"
          class="text-[#777] text-[12px] sm:text-[14px] leading-9"
        >
          info@werkstek.nl
        </NuxtLink>
        <NuxtLink
          to="https://api.whatsapp.com/send?phone=31655400370"
          class="text-[#777] text-[12px] sm:text-[14px] leading-9"
        >
          31655400370
        </NuxtLink>
        <div class="mt-4 mb-14">
          <h1 class="text-[12px] sm:text-[14px] text-[#230000]">
            Ons Werkstek hoofdkantoor:
          </h1>
          <p class="text-[#777] text-[12px] sm:text-[14px] leading-9">
            Breitnerstraat 19 Arnhem, 6813HN
          </p>
        </div>

        <!-- <p class="text-[#777] text-[12px] sm:text-[14px] leading-9">
          Tussen de Bogen 81
        </p>
        <p class="text-[#777] text-[12px] sm:text-[14px] leading-9">
          1013 JB AMSTERDAM
        </p> -->
        <div class="flex gap-3 mt-2">
          <NuxtLink to="https://www.facebook.com/werkstek/" target="_blank">
            <img
              src="/images/icon-facebook-black.svg"
              alt="icon-facebook-black"
            />
          </NuxtLink>
          <NuxtLink to="https://www.instagram.com/werkstek/" target="_blank">
            <img
              src="/images/icon-instagram-black.svg"
              alt="icon-instagram-black"
            />
          </NuxtLink>
          <NuxtLink
            to="https://www.youtube.com/channel/UC6Oo-nukQWPpGzapf7T6PnA"
            target="_blank"
          >
            <img
              src="/images/icon-youtube-black.svg"
              alt="icon-youtube-black"
            />
          </NuxtLink>
          <NuxtLink
            to="https://www.linkedin.com/company/werkstek/"
            target="_blank"
          >
            <img
              src="/images/icon-linkedin-black.svg"
              alt="icon-linkedin-black"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="order-1 sm:order-2 md:w-[400px] text-[#777] sm:w-[50%]">
        <VeeForm
          :validation-schema="contactSchema"
          @submit="onSubmit"
          v-slot="{ errors }"
        >
          <div class="flex flex-col text-[12px] md:text-[14px]">
            <div class="flex flex-col my-2">
              <div class="flex items-center">
                <label for="first_name">Je naam (verplicht)</label>
              </div>
              <VeeField
                id="first_name"
                name="first_name"
                v-model="dataForm.first_name"
                type="text"
                class="input w-full input-sm"
                placeholder="Naam"
                autocomplete="on"
              />
              <hr />
              <VeeErrorMessage
                name="first_name"
                class="text-[13px] text-error"
              />
            </div>
            <div class="flex flex-col my-2">
              <div class="flex items-center">
                <label for="last_name">Achternaam</label>
              </div>
              <VeeField
                id="last_name"
                name="last_name"
                v-model="dataForm.last_name"
                type="text"
                class="input w-full input-sm"
                placeholder="Achternaam"
                autocomplete="on"
              />
              <hr />
              <VeeErrorMessage
                name="last_name"
                class="text-[13px] text-error"
              />
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
                autocomplete="Mail"
              />
              <hr />
              <VeeErrorMessage name="email" class="text-[13px] text-error" />
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
              <VeeErrorMessage name="subject" class="text-[13px] text-error" />
            </div>
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
              <VeeErrorMessage name="message" class="text-[13px] text-error" />
            </div>
          </div>
          <div class="flex justify-end">
            <button
              type="submit"
              :disabled="loading"
              class="btn normal-case mt-4 bg-primary disabled:bg-secondary hover:bg-secondary transition min-w-[120px] sm:min-w-[152px] min-h-[42px] sm:min-h-[52px] rounded-full flex items-center justify-center cursor-pointer"
            >
              <span class="text-base text-center text-white"> Versturen </span>
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
  first_name: undefined,
  last_name: undefined,
  email: undefined,
  subject: undefined,
  message: undefined,
});

async function onSubmit(values, ctx) {
  loading.value = true;

  const { data, error } = await useFetch("/contacts", {
    method: "POST",
    body: { ...dataForm.value },
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
      text: "Bedankt voor uw bericht. Wij nemen zo snel mogelijk contact met u op.",
    });
    ctx.resetForm();
  }
  loading.value = false;
}
</script>
