<template>
  <main class="flex-grow overflow-y-auto">
    <div
      class="mx-auto px-2 sm:px-6 lg:px-8 max-w-sm md:max-w-3xl lg:max-w-[720px] xl:max-w-7xl py-8 space-y-8"
    >
      <div class="flex justify-between items-center">
        <div>
          <div class="text-xl md:text-3xl font-bold">Type</div>
        </div>
        <div>
          <CompAdminButtonAddIndex name="Type" link="type" />
        </div>
      </div>
      <div>
        <div class="overflow-x-auto !py-2 border rounded-t-lg">
          <table class="table table-xs md:table-md w-full rounded-t-xl">
            <thead class="h-12">
              <tr>
                <th class="font-medium">Name</th>
                <th class="font-medium"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="odd:bg-gray-100 even:hover:bg-gray-100 transition-colors duration-300"
                v-for="(item, index) in type"
              >
                <td
                  class="text-gray-500 font-normal !py-2 text-[12px] md:text-sm"
                >
                  {{ item.name }}
                </td>
                <td class="flex justify-center gap-4 my-1">
                  <NuxtLink
                    :to="`/admin/type/edit/${item.id}`"
                    class="cursor-pointer btn btn-sm normal-case btn-ghost btn-square"
                  >
                    <icon name="i-heroicons-pencil-square" />
                  </NuxtLink>
                  <div
                    class="cursor-pointer btn btn-sm normal-case btn-ghost btn-square"
                    @click="showModal(index)"
                  >
                    <icon name="i-heroicons-trash" />
                  </div>
                  <dialog :id="'my_modal_' + index" class="modal">
                    <div class="modal-box">
                      <h3 class="font-bold text-lg text-red-500">Warning !</h3>
                      <p class="py-4 text-sm">
                        Are you sure want to delete this item called
                        {{ item.name }}?
                      </p>
                      <div class="modal-action">
                        <form method="dialog">
                          <button
                            @click="deleteType(item.id)"
                            class="btn btn-outline btn-error mr-3 text-[12px]"
                          >
                            Delete
                          </button>
                          <button class="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                </td>
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
const snackbar = useSnackbar();
const {
  data: type,
  error,
  refresh,
} = await useFetch(`/admins/type-list`, {
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

const deleteType = async (slug) => {
  loading.value = true;
  await useFetch(`/admins/types/${slug}`, {
    method: "DELETE",
    ...requestOptions,
  });

  if (error.value) {
    snackbar.add({
      type: "error",
      text: error.value?.data?.message ?? "Something went wrong",
    });
  } else {
    snackbar.add({
      type: "success",
      text: "Delete Type Success",
    });
    refresh();
  }
  loading.value = false;
};

useHead({
  title: "Type",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
