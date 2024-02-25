<template>
  <div class="h-[80%] overflow-hidden overflow-y-auto scrollBarAdmin">
    <NuxtLink to="/admin/onze-vacaturies/add">
      <button class="btn btn-success">Add Data</button>
    </NuxtLink>
    <table class="tableAdmin">
      <caption>
        List Product Locaties
      </caption>
      <thead>
        <tr>
          <th scope="col">Nomor</th>
          <th scope="col">Name</th>
          <th scope="col">Detail Product</th>
          <th scope="col">Modif</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in data?.data" :key="index">
        <tr>
          <td scope="row" data-label="Name">
            {{ index + 1 }}
          </td>
          <td data-label="Name">{{ item.name }}</td>
          <td data-label="Detail">
            <NuxtLink :to="`/admin/onze-vacaturies/edit/${item.slug}`">
              <button class="btn btn-sm btn-outline btn-info">
                Details Locatie
              </button>
            </NuxtLink>
          </td>
          <td data-label="Modif" class="flex justify-center gap-4 my-1">
            <NuxtLink
              :to="`/admin/onze-vacaturies/edit/${item.slug}`"
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
            <!-- <button class="btn btn-error btn-outline btn-sm">Delete</button> -->
            <dialog :id="'my_modal_' + index" class="modal">
              <div class="modal-box">
                <h3 class="font-bold text-xl text-red-500">Warning !</h3>
                <p class="py-4 text-lg">
                  Are you sure want to delete this item called {{ item.slug }}?
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

<style>
.scrollBarAdmin::-webkit-scrollbar {
  display: none;
}
</style>

<script setup>
const { loading, transformErrors } = useRequestHelper();
const { requestOptions } = useRequestOptions();

const { data, error } = await useFetch(`/admins/product-list`, {
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
  title: "Admin Onze Vacaturies",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
