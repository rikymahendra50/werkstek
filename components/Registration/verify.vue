<template>
  <div
    class="min-h-[400px] flex flex-col items-center justify-center shadow-md"
  >
    <img
      src="/images/logo-werkstek-2.svg"
      alt="img"
      class="aspect-square max-w-[300px] max-h-[300px]"
    />
    <span class="text-lg text-center"
      >We have received your registration. <br />
      The next step is to verify your email address to activate your
      account.</span
    >
    <div v-if="showPinEmailExpired">
      <p class="text-gray-400">
        If you did not receive the an email
        <span class="link" @click="resentEmail" role="button">click here</span>
      </p>
    </div>
    <div v-if="secondTime > 0" class="text-gray-400 text-sm">
      We have sent a verify to your email. Your verify will expired in
      <span class="whitespace-nowrap"> {{ secondTime }} seconds </span>
    </div>

    <div class="text-error text-sm" v-if="showPinEmailExpired">
      Your verify has expired. Please request a new one
    </div>
  </div>
</template>

<script setup>
const snackbar = useSnackbar();
const { requestOptions } = useRequestOptions();
const { loading, message, alertType, transformErrors } = useRequestHelper();
const { registerForm, showPinEmailExpired, countdown, secondTime } =
  useRegister();

const props = defineProps({
  email: String,
});

async function resentEmail() {
  showPinEmailExpired.value = false;
  secondTime.value = 60;
  countdown();

  const { error } = await useFetch("/admins/resend-email-verification", {
    method: "post",
    body: { email: props.email },
    ...requestOptions,
  });
}
</script>
