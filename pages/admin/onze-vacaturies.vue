<template>
  <div class="overflow-auto">
    <button
      class="btn btn-success"
      onclick="document.getElementById('my_modal_1').showModal()"
    >
      UPDATE
    </button>
    <dialog id="my_modal_1" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Update Onze Locaties</h3>
        <div class="modal-action grid grid-cols-1 gap-3">
          <form @submit.prevent="updateLocaties">
            <div class="form-control w-full grid gap-2">
              <span>Image</span>
              <input
                type="file"
                class="file-input file-input-bordered w-full"
              />
              <label class="Name">
                <span class="label-text text-slate-800">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                class="input input-bordered w-full"
                required
              />
              <label class="slug">
                <span class="label-text text-slate-800">Slug</span>
              </label>
              <input
                type="text"
                placeholder="Slug"
                class="input input-bordered w-full"
                required
              />
              <label for="description">
                <span class="label-text text-slate-800">Description</span>
              </label>
              <textarea
                class="textarea textarea-bordered"
                placeholder="Description"
              ></textarea>
            </div>
            <div class="ml-0 mt-5 gap-2 flex flex-end">
              <button type="submit" class="btn btn-md btn-success">
                Update
              </button>
              <button
                type="button"
                class="btn btn-md"
                onclick="document.getElementById('my_modal_1').close()"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
    <table class="table mt-3">
      <thead>
        <tr class="text-md">
          <th>Nomor</th>
          <th>Image</th>
          <th>Name</th>
          <th>Slug</th>
          <th>Description</th>
          <th>Saleable</th>
          <th>Delete at</th>
          <th>Created at</th>
          <th>Update at</th>
          <th>Modif</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in data?.data" :key="index">
        <tr>
          <th>{{ index + 1 }}</th>
          <td><img :src="`${item.images}`" alt="images" /></td>
          <td>{{ item.name }}</td>
          <td>{{ item.slug }}</td>
          <td class="description-column line-clamp-1">
            {{ item.description }}
          </td>
          <td>{{ item.is_saleable }}</td>
          <td>{{ item.delete_at }}</td>
          <th>{{ item.created_at }}</th>
          <td>{{ item.updated_at }}</td>
          <th>test</th>
          <td class="flex gap-2 items-center">
            <button class="btn btn-sm btn-outline btn-success">Edit</button>|
            <button class="btn btn-sm btn-outline btn-error">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const { requestOptions } = useRequestOptions();
const { data, error } = await useFetch(`/admins/products`, {
  method: "get",
  ...requestOptions,
});

const productsData = ref({
  image: "",
  name: "",
  slug: "",
  description: "",
});

const updateLocaties = async () => {
  try {
    const response = await useFetch(`/admins/products/${productId}`, {
      method: "put",
      body: JSON.stringify(productsData.value),
      ...requestOptions,
    });
    console.log("Response:", response.data);
    document.getElementById("my_modal_1").close();
  } catch (error) {
    console.error("Error:", error);
  }
};

useHead({
  title: "Onze Vacaturies",
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
