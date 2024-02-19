<template>
  <div class="overflow-x-auto">
    <button
      class="btn btn-success"
      onclick="document.getElementById('my_modal_1').showModal()"
    >
      UPDATE
    </button>
    <dialog id="my_modal_1" class="modal">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Update Data</h3>
        <div class="modal-action grid grid-cols-1">
          <form @submit.prevent="updateArticles">
            <div class="form-control w-full grid">
              <span>Image</span>
              <input
                type="file"
                class="file-input file-input-bordered w-full"
                @change="handleImageChange"
              />
              <label class="title">
                <span class="label-text text-slate-800">Title</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                class="input input-bordered w-full"
                v-model="articleData.title"
                required
              />
              <label class="body">
                <span class="label-text text-slate-800">Body</span>
              </label>
              <input
                type="text"
                placeholder="Body"
                class="input input-bordered w-full"
                v-model="articleData.body"
                required
              />
              <label class="Category">
                <span class="label-text text-slate-800">Category</span>
              </label>
              <select
                class="select select-bordered w-full"
                v-model="articleData.category"
                required
              >
                <option disabled selected>Who shot first?</option>
                <option value="1">Han Solo</option>
                <option value="2">Greedo</option>
              </select>
              <label class="Meta">
                <span class="label-text text-slate-800">Meta</span>
              </label>
              <input
                type="text"
                placeholder="Meta"
                class="input input-bordered w-full"
                v-model="articleData.meta"
                required
              />
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

    <div class="overflow-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr class="text-md">
            <th></th>
            <th>Images</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Category</th>
            <th>Meta</th>
            <th>Creted At</th>
            <th>Update At</th>
            <th>Edit and Delete</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in data.data" :key="index">
          <tr>
            <th>{{ index + 1 }}</th>
            <th>
              <img :src="item.image" alt="image" class="max-h-[100px]" />
            </th>
            <td>{{ item.title }}</td>
            <td>{{ item.slug }}</td>
            <td>Category</td>
            <td>{{ item.meta }}</td>
            <td>{{ item.created_at }}</td>
            <td>{{ item.updated_at }}</td>
            <td>
              <div class="flex gap-2 items-center justify-center">
                <button class="btn btn-sm btn-outline btn-success">Edit</button
                >|
                <button class="btn btn-sm btn-outline btn-warning">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const { requestOptions } = useRequestOptions();
const { data, error } = await useFetch(`/admins/articles`, {
  method: "get",
  ...requestOptions,
});

useHead({
  title: "Articles",
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});

const articleData = ref({
  image: "",
  title: "",
  body: "",
  category: "",
  meta: "",
});

// const handleImageChange = (event) => {
//   const file = event.target.files[0];
//   if (file) {
//     // Buat URL sumber gambar dari objek File
//     const imageURL = URL.createObjectURL(file);
//     // Tetapkan URL sumber gambar ke properti image dalam artikelData
//     articleData.value.image = imageURL;
//   }
// };

const updateArticles = async () => {
  try {
    const response = await useFetch(
      `/admins/articles/test-article?_method=PUT`,
      {
        method: "put",
        body: JSON.stringify(articleData.value),
        ...requestOptions,
      }
    );
    console.log("Response:", response.data);
    document.getElementById("my_modal_1").close();
  } catch (error) {
    console.error("Error:", error);
  }
};
</script>

<style scoped>
.overflow-auto {
  max-height: 400px;
  overflow-y: auto;
}

.overflow-auto::-webkit-scrollbar {
  display: none;
}
</style>
