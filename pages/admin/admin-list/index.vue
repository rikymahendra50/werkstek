<template>
  <main class="flex-grow overflow-y-auto max-h-[500px]">
    <div
      class="mx-auto px-2 sm:px-6 lg:px-8 max-w-sm md:max-w-3xl lg:max-w-[720px] xl:max-w-7xl py-8 space-y-8"
    >
      <div class="flex justify-between items-center">
        <div>
          <div class="text-xl md:text-3xl font-bold">Admin</div>
        </div>
        <div>
          <NuxtLink
            to="/admin/admin-list/add"
            class="btn btn-sm h-11 btn-neutral normal-case"
          >
            Add New Admin
          </NuxtLink>
        </div>
      </div>
      <div>
        <div class="overflow-x-auto !py-2 border rounded-t-lg">
          <table class="table table-xs md:table-md w-full rounded-t-xl">
            <thead class="h-12">
              <tr>
                <th class="font-medium">First Name</th>
                <th class="font-medium">Last Name</th>
                <th class="font-medium">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="odd:bg-gray-100 even:hover:bg-gray-100 transition-colors duration-300"
                v-for="(item, index) in adminList?.data"
                :key="item.id"
              >
                <td class="text-gray-500 text-sm font-normal !py-2">
                  {{ item.first_name }}
                </td>
                <td class="text-gray-500 text-sm font-normal !py-2">
                  {{ item.last_name }}
                </td>
                <td>{{ item.email }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();

const { data: adminList, error } = await useFetch(`/admins`, {
  method: "get",
  ...requestOptions,
});

// const showModal = (index) => {
//   const modalId = `my_modal_${index}`;
//   const modal = document.getElementById(modalId);
//   if (modal) {
//     modal.showModal();
//   }
// };

// const deleteLocatie = async (locatieSlug) => {
//   loading.value = true;
//   try {
//     const response = await useFetch(`/admins/${locatieSlug}`, {
//       method: "DELETE",
//       ...requestOptions,
//     });
//     window.location.reload();
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

useHead({
  title: "Admin List",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
