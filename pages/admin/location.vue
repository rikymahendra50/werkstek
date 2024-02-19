<template>
  <div class="overflow-x-auto max-h-[700px] overflow-auto">
    <div class="flex justify-between my-2">
      <span class="text-xl font-bold">Location</span>
      <button
        class="btn btn-success"
        onclick="document.getElementById('my_modal_1').showModal()"
      >
        UPDATE
      </button>
    </div>
    <div class="overflow-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr class="text-xl">
            <th></th>
            <th>Images</th>
            <th>Names</th>
            <th>Modif</th>
            <!-- <th>Slug</th>
            <th>Category</th>
            <th>Meta</th>
            <th>Creted At</th>
            <th>Update At</th>
            <th>Edit and Delete</th> -->
          </tr>
        </thead>
        <tbody v-for="(item, index) in data.data" :key="index">
          <tr>
            <th>{{ index + 1 }}</th>
            <th></th>
            <!-- <th>
              <img :src="item.image" alt="image" class="max-h-[100px]" />
            </th>
            <th>test</th> -->
            <!-- <td>{{ item.title }}</td>
            <td>{{ item.slug }}</td>
            <td>Category</td>
            <td>{{ item.meta }}</td>
            <td>{{ item.created_at }}</td>
            <td>{{ item.updated_at }}</td> -->
            <td>{{ item.name }}</td>
            <td>
              <div class="flex gap-2 items-center">
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

<script setup lang="ts">
const { requestOptions } = useRequestOptions();
const { data, error } = await useFetch(`/admins/location-list`, {
  method: "get",
  ...requestOptions,
});

useHead({
  title: "Location",
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
