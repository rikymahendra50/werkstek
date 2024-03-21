<template>
  <VeeForm
    @submit="onSubmit"
    :validation-schema="onlyEmailSchema"
    v-slot="{ errors }"
  >
    <div
      class="grid grid-cols-1 w-[450px] text-left gap-4 p-4 rounded-md shadow"
    >
      <!-- <Alert v-model="message" :type="alertType" /> -->
      <FormGroup label="Email" name="email">
        <FormTextField
          id="email"
          name="email"
          v-model="stateForm.email"
          placeholder="ex:myemail@gmail.com"
          class="input-bordered"
          autocomplete="off"
          v-slot="{ errors }"
        />
      </FormGroup>
      <div>
        <p class="text-gray-400">We will send a code to your email</p>
      </div>
      <div>
        <button class="btn btn-success" type="submit" :disabled="loading">
          Submit
        </button>
      </div>
    </div>
  </VeeForm>
</template>

<script setup lang="ts">
const { contactSchema } = useSchema();
const snackbar = useSnackbar();
const { requestOptions } = useRequestOptions();
const { loading, message, alertType, transformErrors } = useRequestHelper();
const { stateForm } = useForgotPassword();
const { onlyEmailSchema } = useSchema();

// const props = defineProps({
//   email: String,
// });

const emit = defineEmits(["next", "update:email"]);

function updateToParent() {
  emit("update:email", stateForm.value.email);
  emit("next");
}

async function onSubmit(values, ctx) {
  loading.value = true;

  const { data, error } = await useFetch(`/admins/forget-password`, {
    method: "POST",
    body: { email: stateForm.value.email },
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
      text: "Sending OTP Success, Please check your email",
    });
    updateToParent();
  }

  loading.value = false;
}
</script>

<style scoped></style>
