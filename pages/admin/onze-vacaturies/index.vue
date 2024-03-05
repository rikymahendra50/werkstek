<template>
  <main class="flex-grow overflow-y-auto max-h-[500px]">
    <div
      class="mx-auto px-2 sm:px-6 lg:px-8 max-w-sm md:max-w-3xl lg:max-w-[720px] xl:max-w-7xl py-8 space-y-8"
    >
      <div class="flex justify-between items-center">
        <div>
          <div class="text-xl md:text-3xl font-bold">Vacatures</div>
        </div>
        <div>
          <NuxtLink
            to="/admin/onze-vacaturies/add"
            class="btn btn-sm h-11 btn-neutral normal-case"
          >
            Add New Vacatures
          </NuxtLink>
        </div>
      </div>
      <div>
        <div class="overflow-x-auto !py-2 border rounded-t-lg">
          <table class="table table-xs md:table-md w-full rounded-t-xl">
            <thead class="h-12">
              <tr>
                <th class="font-medium">Name</th>
                <th class="font-medium">Modification</th>
                <th class="font-medium">Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="odd:bg-gray-100 even:hover:bg-gray-100 transition-colors duration-300"
                v-for="(item, index) in Vacaturies?.data"
                :key="item.id"
              >
                <td class="text-gray-500 text-sm font-normal !py-2">
                  {{ item.name }}
                </td>
                <td class="flex items-center gap-3">
                  <NuxtLink
                    :to="`/admin/onze-vacaturies/add-image/${item.slug}`"
                    class="btn btn-sm normal-case btn-ghost btn-square"
                  >
                    <img
                      src="/images/add-image-admin.svg"
                      alt="add-image-admin"
                      class="w-4"
                    />
                  </NuxtLink>
                  <NuxtLink
                    :to="`/admin/onze-vacaturies/edit-vacaturies/${item.slug}`"
                    class="btn btn-sm normal-case btn-ghost btn-square"
                  >
                    <icon
                      name="i-heroicons-pencil-square"
                      class="cursor-pointer"
                    />
                  </NuxtLink>
                  <div
                    class="cursor-pointer btn btn-sm normal-case btn-ghost btn-square"
                    @click="showModal(index)"
                  >
                    <icon name="i-heroicons-trash" />
                  </div>
                  <dialog :id="'my_modal_' + index" class="modal">
                    <div class="modal-box">
                      <h3 class="font-bold text-xl text-red-500">Warning !</h3>
                      <p class="py-4 text-lg">
                        Are you sure want to delete this called
                        {{ item.name }}?
                      </p>
                      <div class="modal-action">
                        <form method="dialog">
                          <button
                            @click="deleteLocatie(item.slug)"
                            class="btn btn-outline btn-error"
                          >
                            Delete
                          </button>
                          <button class="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
                <td class="text-gray-500 text-sm font-normal !py-2">
                  <NuxtLink
                    :to="`/onze-locaties/${item.slug}`"
                    class="btn btn-sm normal-case btn-ghost btn-square"
                    target="_blank"
                  >
                    <icon name="i-heroicons-eye" class="cursor-pointer" />
                  </NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.scrollBarAdmin::-webkit-scrollbar {
  display: none;
}
</style>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();

const { data: Vacaturies, error } = await useFetch(`/admins/products`, {
  method: "get",
  ...requestOptions,
});

const showModal = (index) => {
  const modalId = `my_modal_${index}`;
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.showModal();
  }
};

const deleteLocatie = async (locatieSlug) => {
  loading.value = true;
  try {
    const response = await useFetch(`/admins/products/${locatieSlug}`, {
      method: "DELETE",
      ...requestOptions,
    });
    console.log("Response:", response.data);
    window.location.reload();
  } catch (error) {
    console.error("Error:", error);
  }
};

useHead({
  title: "Admin Onze Vacatures",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
