<template>
  <div class="overflow-auto">
    <NuxtLink to="/admin/onze-vacaturies/add">
      <button class="btn btn-success">Add Data</button>
    </NuxtLink>
    <table class="table mt-3">
      <thead>
        <tr class="text-md">
          <th>Nomor</th>
          <th>Name</th>
          <th>Slug</th>
          <th>Detail Product</th>
          <th>Modif</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in data?.data" :key="index">
        <tr>
          <th>{{ index + 1 }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.slug }}</td>
          <td>
            <NuxtLink :to="`/admin/onze-vacaturies/${item.slug}`">
              <button class="btn btn-sm btn-outline btn-info">
                Details Locatie
              </button>
            </NuxtLink>
          </td>
          <td class="flex gap-2 items-center">
            <button
              class="btn btn-error btn-outline btn-sm"
              onclick="document.getElementById('my_modal_2').showModal()"
            >
              Delete
            </button>
            <dialog id="my_modal_2" class="modal">
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
</template>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();

const { data, error } = await useFetch(`/admins/product-list`, {
  method: "get",
  ...requestOptions,
});

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
  title: "Admin Onze Vacaturies",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>

<style scoped>
.overflow-auto {
  max-width: 1000px;
  overflow-y: auto;
  overflow-x: auto;
}

/* .overflow-auto::-webkit-scrollbar {
  display: none;
} */

.description-column {
  overflow-y: auto;
}

.description-column::-webkit-scrollbar {
  display: none;
}
</style>
