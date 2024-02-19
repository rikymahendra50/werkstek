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
        <thead>
          <tr class="text-xl">
            <th></th>
            <th>Images</th>
            <th>Names</th>
            <th>Modif</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in data.data" :key="index">
          <tr>
            <th>{{ index + 1 }}</th>
            <th>{{ item.image }}</th>
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
const { data, error } = await useFetch(`/admins/locations`, {
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
