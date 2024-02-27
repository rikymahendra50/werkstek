<template>
  <div class="grid place-items-center items-center h-screen">
    <div class="w-[500px] p-10 justify-center shadow-lg">
      <Werkstek class="mb-10" />
      <VeeForm :validation-schema="loginSchema" @submit="onSubmit">
        <h4 class="pb-1 text-lg">First Name</h4>
        <div class="flex flex-col space-y-4">
          <div>
            <VeeField
              name="firstname"
              class="input input-bordered w-full"
              v-model="form.first_name"
            />
            <!-- <VeeErrorMessage name="email" class="text-sm text-error" /> -->
          </div>
          <h4 class="pb-1 text-lg">Last Name</h4>
          <div>
            <VeeField
              name="lastname"
              class="input input-bordered w-full"
              v-model="form.last_name"
            />
            <!-- <VeeErrorMessage name="email" class="text-sm text-error" /> -->
          </div>
          <h4 class="pb-1 text-lg">Email</h4>
          <div>
            <VeeField
              name="email"
              class="input input-bordered w-full"
              v-model="form.email"
            />
            <VeeErrorMessage name="email" class="text-sm text-error" />
          </div>
          <h4 h4 class="pb-1 text-lg">Password</h4>
          <div>
            <VeeField
              name="password"
              v-model="form.password"
              type="password"
              class="input input-bordered w-full"
            />
            <VeeErrorMessage name="password" class="text-sm text-error" />
          </div>
          <h4 class="pb-1 text-lg">Confirm Password</h4>
          <div>
            <VeeField
              name="confirmPassword"
              v-model="form.confirm_password"
              type="password"
              class="input input-bordered w-full"
            />
            <!-- <VeeErrorMessage
              name="confirmPassword"
              class="text-sm text-error"
            /> -->
          </div>
          <div class="mt-5">
            <button
              :disabled="loading"
              type="submit"
              class="btn bg-primary text-white w-full hover:bg-secondary"
            >
              Submit
            </button>
          </div>
        </div>
      </VeeForm>
    </div>
  </div>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const { loginSchema } = useSchema();

const form = ref({
  first_name: undefined,
  last_name: undefined,
  email: undefined,
  password: undefined,
  confirm_password: undefined,
});

async function onSubmit() {
  console.log("test");

  loading.value = true;

  const { error } = await useFetch(`/admins`, {
    method: "post",
    body: {
      first_name: form.value.first_name,
      last_name: form.value.last_name,
      email: form.value.email,
      password: form.value.password,
      confirm_password: form.value.confirm_password,
    },
    ...requestOptions,
  });

  if (error.value) {
    loading.value = false;
    ctx.setErrors(transformErrors(error.value?.data));
    snackbar.add({
      type: "error",
      text: error.value?.data?.message ?? "Something went wrong",
    });
  } else {
    snackbar.add({
      type: "success",
      text: "Your data registration is Success, We will confirm soon",
    });
    ctx.resetForm();
  }
}

useHead({
  title: "Registration",
});

definePageMeta({
  layout: false,
});
</script>
