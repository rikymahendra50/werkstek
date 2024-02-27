<template>
  <AdminWrapper>
    <template #mbAndSmSidebar>
      <AdminSideNav />
    </template>

    <template #sidebar>
      <AdminSideNav class="hidden lg:block" />
    </template>
    <template #main-content>
      <AdminHeader />
      <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 h-full">
        <slot />
      </main>
      <NuxtSnackbar />
    </template>
  </AdminWrapper>
</template>

<script lang="ts" setup></script>

<style></style>
