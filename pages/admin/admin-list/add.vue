<template>
  <div class="flex gap-2">
    <NuxtLink to="/admin/admin-list" class="btn btn-warning btn-outline btn-sm"
      >Back</NuxtLink
    >
    <span class="text-2xl font-bold">Add Admin</span>
  </div>
  <div class="h-screen max-h-[450px] overflow-y-auto">
    <h3 class="font-bold text-lg">Add New Admin</h3>
    <div class="modal-action grid grid-cols-1 gap-3">
      <VeeForm
        @submit="onSubmit"
        class="text-[12px] md:text-[16px] flex-col flex items-center px-3 lg:px-8"
        :validation-schema="registerSchema"
        v-slot="{ errors }"
      >
        <div class="flex flex-col my-2 w-full">
          <div class="flex items-center">
            <label for="firstName">First Name</label>
          </div>
          <VeeField
            id="firstName"
            name="firstName"
            type="text"
            v-model="adminData.first_name"
            class="input input-bordered w-full input-md"
            placeholder="First Name"
            autocomplete="First Name"
          />
          <VeeErrorMessage name="first_name" class="text-sm text-error" />
        </div>
        <div class="flex flex-col my-2 w-full">
          <div class="flex items-center">
            <label for="lastName">Last Name</label>
          </div>
          <VeeField
            id="lastName"
            name="lastName"
            type="text"
            v-model="adminData.last_name"
            class="input input-bordered w-full input-md"
            placeholder="Last Name"
            autocomplete="First Name"
          />
          <VeeErrorMessage name="last_name" class="text-sm text-error" />
        </div>
        <div class="flex flex-col my-2 w-full">
          <div class="flex items-center">
            <label for="email">Email</label>
          </div>
          <VeeField
            id="email"
            name="email"
            type="text"
            v-model="adminData.email"
            class="input input-bordered w-full input-md"
            placeholder="Email"
            autocomplete="Email"
          />
          <VeeErrorMessage name="email" class="text-sm text-error" />
        </div>
        <div class="flex flex-col my-2 w-full">
          <div class="flex items-center">
            <label for="password">Password</label>
          </div>
          <VeeField
            id="password"
            name="password"
            type="text"
            v-model="adminData.password"
            class="input input-bordered w-full input-md"
            placeholder="Password"
            autocomplete="Password"
          />
          <VeeErrorMessage
            name="passwordAndConfirm"
            class="text-sm text-error"
          />
        </div>
        <div class="flex flex-col my-2 w-full">
          <div class="flex items-center">
            <label for="confirm">Confirm Password</label>
          </div>
          <VeeField
            id="confirm"
            name="confirm"
            type="text"
            v-model="adminData.confirm_password"
            class="input input-bordered w-full input-md"
            placeholder="Confirm"
            autocomplete="Confirm"
          />
          <VeeErrorMessage
            name="passwordAndConfirm"
            class="text-sm text-error"
          />
        </div>
        <div class="flex justify-end mt-5">
          <button
            class="btn btn-md btn-success"
            type="submit"
            :disabled="loading"
          >
            <span
              class="text-[20px] xl:text-lg lg:text-lg text-center text-white"
            >
              Add New Admin
            </span>
          </button>
        </div>
      </VeeForm>
    </div>
  </div>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const snackbar = useSnackbar();

const { registerSchema } = useSchema();

const adminData = ref({
  first_name: undefined,
  last_name: undefined,
  password: undefined,
  confirm_password: undefined,
  email: undefined,
});

async function onSubmit(values, ctx) {
  loading.value = true;

  const { data, error } = await useFetch("/admins", {
    method: "POST",
    body: JSON.stringify(adminData.value),
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
      text: "Success Adding Data",
    });
    ctx.resetForm();
  }

  loading.value = false;
}
useHead({
  title: "Add admin",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
