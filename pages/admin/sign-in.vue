<template>
  <div class="grid place-items-center items-center h-screen test">
    <div class="w-[500px] p-10 justify-center shadow-lg">
      <Werkstek class="mb-10" />
      <VeeForm :validation-schema="loginSchema" @submit="onSubmit">
        <div class="flex flex-col space-y-4">
          <div class="flex flex-col">
            <label for="email" class="pb-1 text-lg">Email</label>
            <FormTextField
              id="email"
              name="email"
              v-model="form.email"
              placeholder="Email"
              class="input input-bordered"
            />
          </div>
          <div class="flex flex-col">
            <label for="password" class="pb-1 text-lg">Password</label>
            <FormTextField
              id="password"
              name="password"
              v-model="form.password"
              placeholder="*******"
              type="password"
              class="input input-bordered"
            />
          </div>
          <div class="mt-5">
            <button
              :disabled="loading"
              type="submit"
              class="btn bg-[#F0912D] text-white w-full hover:bg-secondary"
            >
              Sign In
            </button>
          </div>
          <div class="mt-5">
            <NuxtLink
              to="/admin/forgot-password"
              :disabled="loading"
              type="submit"
              class="p-2 text-center text-primary hover:text-secondary w-full rounded-lg hover:border-secondary"
            >
              Forgot Password?
            </NuxtLink>
          </div>
        </div>
      </VeeForm>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Role, Provider, AuthCredential, AuthUser } from "@/types";

const { $credential } = useAuth();
const { loading, message, alertType, setErrorMessage, transformErrors } =
  useRequestHelper();

const { requestOptions } = useRequestOptions();
const { loginSchema } = useSchema();

// function redirectUserProfile() {
//   location.replace("/admin");
// }

// const { loading, message, alertType, $credentialForm, $login } = useAuth({
//   usedBy: "admin",
//   callback: redirectUserProfile,
// });

const form = ref({
  email: "",
  password: "",
});

async function onSubmit(values: any, ctx: any) {
  loading.value = true;

  // const { data, error } = await useFetch<{ token: string }>("/admins/login", {
  //   method: "post",
  //   headers: {
  //     Accept: "application/json",
  //   },
  //   body: { ...form.value },
  //   ...requestOptions,
  // });

  // const { data, error } = await $fetch<{ token: string }>("/admins/login", {
  //   method: "post",
  //   headers: {
  //     Accept: "application/json",
  //   },
  //   body: { ...form.value },
  //   ...requestOptions,
  // });

  // const { response } = await $fetch("/admins/login", {
  //   method: "post",
  //   body: { ...form.value },
  //   ...requestOptions,
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  // });

  try {
    const response = await $fetch(`/admins/login`, {
      method: "POST",
      body: { ...form.value },
      ...requestOptions,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    console.log(response);

    $credential.value = {
      token: response?.token as string,
      role: Role.ADMIN,
      provider: Provider.LOCAL,
    };
  } catch (error: any) {
    setErrorMessage(error.value?.data?.message);
    ctx.setErrors(transformErrors(error.value?.data));
  } finally {
    loading.value = false;
  }

  // const { data, error, refresh } = await useAsyncData("sign-in", () =>
  //   $fetch(`/admins/login`, {
  //     method: "post",
  //     body: { ...form.value },
  //     headers: {
  //       Accept: "application/json",
  //     },
  //     ...requestOptions,
  //   })
  // );

  // if (error.value) {
  //   setErrorMessage(error.value?.data?.message);
  //   ctx.setErrors(transformErrors(error.value?.data));
  // } else if (data.value?.token) {
  //   $credential.value = {
  //     token: data?.value?.token as string,
  //     role: Role.ADMIN,
  //     provider: Provider.LOCAL,
  //   };
  //   /**
  //    * remove all local person data if someone login
  //    *
  //    */
  //   // localPerson.value = [];
  // window.location.replace("/admin");
  // }

  loading.value = false;
}

useHead({
  title: "Login",
});

definePageMeta({
  layout: false,
  // @ts-ignore
  middleware: ["guest"],
});
</script>

<style></style>
