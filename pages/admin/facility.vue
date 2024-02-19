<template>
  <div class="max-h-[600px] overflow-x-auto">
    <div class="flex gap-2 mb-3">
      <button class="btn btn-warning btn-sm">Store</button>
      <button
        class="btn btn-success btn-sm"
        onclick="document.getElementById('my_modal_1').showModal()"
      >
        Update
      </button>

      <dialog id="my_modal_1" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Update Facility</h3>
          <div class="modal-action grid grid-cols-1">
            <form @submit.prevent="updateFacility">
              <div class="form-control w-full grid">
                <span>Icon</span>
                <input
                  type="file"
                  class="file-input file-input-bordered w-full"
                />
                <label class="name">
                  <span class="label-text text-slate-800">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  class="input input-bordered w-full"
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
    </div>
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Icon</th>
            <th>Modif</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="(test, index) in data.data" :key="index">
            <th>{{ index + 1 }}</th>
            <td>{{ test.name }}</td>
            <td>{{ test.icon }}</td>
            <td>{{ test.create_at }}</td>
            <td>{{ test.update_at }}</td>
            <td>
              <button class="btn btn-outline btn-error btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const { requestOptions } = useRequestOptions();
const { data, error } = await useFetch(`/admins/facilities`, {
  method: "get",
  ...requestOptions,
});

useHead({
  title: "Facility",
});

definePageMeta({
  layout: "admin",
  middleware: ["auth", "admin"],
});
</script>
