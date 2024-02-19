<template>
  <div>
    <div class="alert alert-success alert-sm">
      <span class="text-white text-lg">Welcome {{ $user?.first_name }}</span>
    </div>
    <div class="overflow-x-auto">
      <table class="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Position</th>
            <th>Email</th>
            <th>Active</th>
            <th>Created at</th>
            <th>Update at</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{{ $user?.id }}</th>
            <th>
              <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                  <img
                    :src="$user?.first_name"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
              {{ $user?.first_name }}
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div>
                  <div class="font-bold">{{ $user?.first_name }}</div>
                  <div class="text-sm opacity-50">{{ $user?.last_name }}</div>
                </div>
              </div>
            </td>
            <td>{{ $user?.email }}</td>
            <th>
              <button class="btn btn-ghost btn-xs">
                Is Active : {{ $user?.is_active }}
              </button>
            </th>
            <!-- <th>{{ $user?.created_at }}</th>
            <th>{{ $user?.updated_at }}</th> -->
          </tr>
        </tbody>
      </table>
      <pre>
        {{ data }}
      </pre>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "AdminHome",
});

const { requestOptions } = useRequestOptions();
const { data, error } = await useFetch(`/admins/profile`, {
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
<style scoped></style>
