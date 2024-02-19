<template>
  <div class="max-h-[600px] overflow-x-auto">
    <!-- <pre>
        {{ data }}
    </pre> -->
    <h3 class="text-lg">Contact</h3>
    <div class="overflow-auto">
      <table class="table">
        <thead>
          <tr class="text-md">
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Phone</th>
            <th>Interaction</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th>Riky</th>
            <th>riky@gmail.com</th>
            <th>test</th>
            <th class="max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, deleniti.
            </th>
            <th>08787878</th>
            <th class="flex gap-2">
              <button class="btn btn-outline btn-warning btn-sm">Reply</button>
              <button class="btn btn-outline btn-error btn-sm">Delete</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const { requestOptions } = useRequestOptions();
const { data, error } = await useFetch(`/admins/contacts`, {
  method: "get",
  ...requestOptions,
});

useHead({
  title: "Contact",
});

definePageMeta({
  layout: "admin",
  middleware: ["auth", "admin"],
});
</script>
