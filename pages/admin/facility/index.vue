<template>
  <main class="flex-grow overflow-y-auto max-h-[500px]">
    <div
      class="mx-auto px-2 sm:px-6 lg:px-8 max-w-sm md:max-w-3xl lg:max-w-[720px] xl:max-w-7xl py-8 space-y-8"
    >
      <div class="flex justify-between items-center">
        <div>
          <div class="text-xl md:text-3xl font-bold">Facility</div>
        </div>
        <div>
          <NuxtLink
            to="/admin/facility/add"
            class="btn btn-sm h-11 btn-neutral normal-case"
          >
            Add New Facility
          </NuxtLink>
        </div>
      </div>
      <div>
        <div class="overflow-x-auto !py-2 border rounded-t-lg">
          <table class="table table-xs md:table-md w-full rounded-t-xl">
            <thead class="h-12">
              <tr>
                <th class="font-medium">Name</th>
                <th class="font-medium">Icon</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="odd:bg-gray-100 even:hover:bg-gray-100 transition-colors duration-300"
                v-for="(item, index) in Facility?.data"
              >
                <td class="text-gray-500 text-sm font-normal !py-2">
                  {{ item.name }}
                </td>
                <td class="font-medium">{{ item.icon }}</td>
                <td class="flex justify-center gap-4 my-1">
                  <NuxtLink
                    :to="`/admin/facility/edit/${item.slug}`"
                    class="m-2"
                  >
                    <icon
                      name="i-heroicons-pencil-square"
                      class="cursor-pointer mr-1"
                    />
                  </NuxtLink>
                  <div class="cursor-pointer m-2" @click="showModal(index)">
                    <icon name="i-heroicons-trash" class="mr-1" />
                  </div>
                  <dialog :id="'my_modal_' + index" class="modal">
                    <div class="modal-box">
                      <h3 class="font-bold text-xl text-red-500">Warning !</h3>
                      <p class="py-4 text-lg">
                        Are you sure want to delete this called {{ item.name }}?
                      </p>
                      <div class="modal-action">
                        <form method="dialog">
                          <button
                            @click="deleteLocatie(item.slug)"
                            class="btn btn-outline btn-error mr-3"
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
const { data: Facility, error } = await useFetch(`/admins/facility-list`, {
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

const deleteLocatie = async (facilityslug) => {
  loading.value = true;
  try {
    await useFetch(`/admins/facilities/${facilityslug}`, {
      method: "DELETE",
      ...requestOptions,
    });
    window.location.reload();
  } catch (error) {
    console.error("Error:", error);
  }
};

useHead({
  title: "Facility",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
<style scoped>
.overflow-auto {
  overflow-y: auto;
}

.overflow-auto::-webkit-scrollbar {
  display: none;
}
</style>
