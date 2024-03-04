<template>
  <div class="grid place-items-center items-center h-screen">
    <div class="w-[500px] p-10 justify-center shadow-lg">
      <Werkstek class="mb-10" />
      <VeeForm @submit="onSubmit">
        <h4 class="pb-1 text-lg">First Name</h4>
        <div class="flex flex-col space-y-4">
          <div>
            <VeeField
              name="firstName"
              class="input input-bordered w-full"
              v-model="form.first_name"
            />
            <!-- <VeeErrorMessage name="firstName" class="text-sm text-error" /> -->
          </div>
          <h4 class="pb-1 text-lg">Last Name</h4>
          <div>
            <VeeField
              name="lastname"
              class="input input-bordered w-full"
              v-model="form.last_name"
            />
            <!-- <VeeErrorMessage name="lastname" class="text-sm text-error" /> -->
          </div>
          <h4 class="pb-1 text-lg">Email</h4>
          <div>
            <VeeField
              name="email"
              class="input input-bordered w-full"
              v-model="form.email"
            />
            <!-- <VeeErrorMessage name="email" class="text-sm text-error" /> -->
          </div>
          <div class="mt-10">
            <button
              :disabled="loading"
              type="submit"
              class="btn bg-[#F0912D] text-white w-full hover:bg-secondary"
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
useHead({
  title: "Registasion",
});

const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();
const { loginSchema } = useSchema();

const form = ref({
  first_name: "",
  last_name: "",
  email: "",
});

definePageMeta({
  layout: false,
});

async function onSubmit(values, ctx) {
  console.log("test");

  loading.value = true;

  const { error } = await useFetch(`/admins`, {
    method: "POST",
    body: JSON.stringify(form.value),
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

// async function onSubmit(values: any, ctx: any) {
//   loading.value = true;

//   const { data, error } = await useFetch<{ token: string }>("/admins/login", {
//     method: "post",
//     body: { ...form.value },
//     ...requestOptions,
//   });

//   if (error.value) {
//     setErrorMessage(error.value?.data?.message);
//     ctx.setErrors(transformErrors(error.value?.data));
//   } else if (data.value?.token) {
//     $setCredential({
//       token: data?.value?.token as string,
//       role: Role.ADMIN,
//       provider: Provider.LOCAL,
//     });
//     /**
//      * remove all local person data if someone login
//      *
//      */
//     // localPerson.value = [];

//     window.location.replace("/admin");
//   }

//   loading.value = false;
// }
</script>
