<template>
  <table class="tableAdmin">
    <caption>
      Your Profile
    </caption>
    <thead>
      <tr class="text-sm">
        <th scope="col">Name</th>
        <th scope="col">Position</th>
        <th scope="col">Email</th>
        <th scope="col">Active</th>
      </tr>
    </thead>
    <tbody>
      <tr class="text-sm">
        <td scope="row" data-label="Name">
          {{ $user?.first_name }}
        </td>
        <td data-label="Position">{{ $user?.last_name }}</td>
        <td data-label="Email">{{ $user?.email }}</td>
        <td data-label="Active">
          {{ $user?.is_active === 1 ? "Active" : "Nonaktif" }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.tableAdmin {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  max-height: 500px;
}

.tableAdmin caption {
  font-size: 1.5em;
  margin: 0.5em 0 0.75em;
}

.tableAdmin tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
}

.tableAdmin th,
.tableAdmin td {
  padding: 0.625em;
  text-align: center;
}

.tableAdmin th {
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  .tableAdmin {
    border: 0;
  }

  .tableAdmin caption {
    font-size: 1.3em;
  }

  .tableAdmin thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  .tableAdmin tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }

  .tableAdmin td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  .tableAdmin td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  .tableAdmin td:last-child {
    border-bottom: 0;
  }
}
</style>

<script setup lang="ts">
const showWelcome = ref(true);

onMounted(() => {
  setTimeout(() => {
    showWelcome.value = false;
  }, 5000);
});

useHead({
  title: "Admin Home",
});

const { requestOptions } = useRequestOptions();
const { data, error } = await useFetch(`/admins/profile`, {
  headers: {
    accept: "application/json",
  },
  method: "get",
  ...requestOptions,
});

const { $user, $logout } = useAuth();
definePageMeta({
  layout: "admin",
  // @ts-ignore
  middleware: ["auth", "admin"],
});
</script>
