<template>
  <CompAdminBackButton link="contact" linkTitle="Detail Contact" />
  <div v-if="pending">Loading...</div>
  <div v-if="data && data?.data" class="overflow-y-auto">
    <table class="table">
      <tbody>
        <tr>
          <td>First Name</td>
          <td>{{ data?.data?.first_name }}</td>
        </tr>
        <tr>
          <td>Last Name</td>
          <td>{{ data?.data?.last_name }}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{{ data?.data?.email }}</td>
        </tr>
        <tr>
          <td>Subject</td>
          <td>{{ data?.data?.subject }}</td>
        </tr>
        <tr>
          <td>Message</td>
          <td>{{ data?.data?.message }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.col1 {
  width: 20%;
}

.col2 {
  width: 30%;
}

.col3 {
  width: 50%;
}
</style>

<script setup>
const route = useRoute();
const slug = computed(() => {
  return route.params.slug;
});

const { requestOptions } = useRequestOptions();
const { data, error, pending } = await useFetch(
  `/admins/contacts/${slug.value}`,
  {
    method: "get",
    ...requestOptions,
  }
);

if (error.value) {
  console.error("Error fetching data:", error);
}
useHead({
  title: data.value?.data?.name,
});

definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
